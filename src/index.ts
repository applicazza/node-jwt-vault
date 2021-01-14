import { Algorithms, Claims } from './types';
import { Client as VaultApiClient } from './vault';
import { FailedToCreateHMAC, FailedToObtainKeyLatestVersion, FailedToSign } from './errors';
import base64url from 'base64url';

const VaultHashAlgorithm = {
    [Algorithms.ES256]: 'sha2-256',
    [Algorithms.HS256]: 'sha2-256',
    [Algorithms.PS256]: 'sha2-256',
    [Algorithms.RS256]: 'sha2-256',
    [Algorithms.ES384]: 'sha2-384',
    [Algorithms.HS384]: 'sha2-384',
    [Algorithms.PS384]: 'sha2-384',
    [Algorithms.RS384]: 'sha2-384',
    [Algorithms.ES512]: 'sha2-512',
    [Algorithms.HS512]: 'sha2-512',
    [Algorithms.PS512]: 'sha2-512',
    [Algorithms.RS512]: 'sha2-512',
};

const VaultSignatureAlgorithm = {
    [Algorithms.ES256]: 'pss',
    [Algorithms.ES384]: 'pss',
    [Algorithms.ES512]: 'pss',
    [Algorithms.HS256]: 'pss',
    [Algorithms.HS384]: 'pss',
    [Algorithms.HS512]: 'pss',
    [Algorithms.PS256]: 'pss',
    [Algorithms.PS384]: 'pss',
    [Algorithms.PS512]: 'pss',
    [Algorithms.RS256]: 'pkcs1v15',
    [Algorithms.RS384]: 'pkcs1v15',
    [Algorithms.RS512]: 'pkcs1v15',
};

type SignTokenArgs = {
    algorithm: Algorithms,
    claims: Claims,
    keyName: string;
    vaultClient: VaultApiClient;
};

const signToken = async ({algorithm, claims, keyName, vaultClient}: SignTokenArgs): Promise<string> => {

    const result = await vaultClient.getTransitKeysName({
        name: keyName,
    });

    if (!result || !result.data || !result.data.data) {
        throw new FailedToObtainKeyLatestVersion();
    }

    const {data: {data: {latest_version: keyVersion}}} = result;

    const header = base64url.encode(JSON.stringify({
        alg: algorithm,
        kid: base64url.encode(JSON.stringify({
            name: keyName,
            version: keyVersion,
        })),
        typ: 'JWT',
    }));

    const payload = base64url.encode(JSON.stringify(claims));

    const headerAndPayload = `${header}.${payload}`;

    switch (algorithm) {
        case Algorithms.HS256:
        case Algorithms.HS384:
        case Algorithms.HS512: {
            const result = await vaultClient.postTransitHmacName({
                name: keyName,
            }, {
                algorithm: VaultHashAlgorithm[algorithm],
                key_version: keyVersion,
                input: Buffer.from(headerAndPayload).toString('base64'),
            });

            if (!result || !result.data || !result.data.data || !result.data.data.hmac) {
                throw new FailedToCreateHMAC();
            }

            const {data: {data: {hmac}}} = result;

            const [_, __, signature] = hmac.split(':');

            return `${headerAndPayload}.${base64url.fromBase64(signature)}`;
        }
        case Algorithms.ES256:
        case Algorithms.ES384:
        case Algorithms.ES512:
        case Algorithms.PS256:
        case Algorithms.PS384:
        case Algorithms.PS512:
        case Algorithms.RS256:
        case Algorithms.RS384:
        case Algorithms.RS512: {
            const result = await vaultClient.postTransitSignName({
                name: keyName,
            }, {
                algorithm: VaultHashAlgorithm[algorithm],
                key_version: keyVersion,
                input: Buffer.from(headerAndPayload).toString('base64'),
                marshaling_algorithm: 'jws',
                signature_algorithm: VaultSignatureAlgorithm[algorithm],
            });

            if (!result || !result.data || !result.data.data || !result.data.data.signature) {
                throw new FailedToSign();
            }

            const {data: {data: {signature: signatureWithKeyVersion}}} = result;

            const [_, __, signature] = signatureWithKeyVersion.split(':');

            return `${headerAndPayload}.${base64url.fromBase64(signature)}`;
        }
        default:
            throw new Error();
    }
};

type VerifyTokenArgs = {
    token: string;
    vaultClient: VaultApiClient;
};

const verifyToken = async ({token, vaultClient}: VerifyTokenArgs): Promise<boolean> => {
    const [headerBase64, payloadBase64, signature] = token.split('.');

    const header = JSON.parse(Buffer.from(headerBase64, 'base64').toString());

    const {name: keyName, version: keyVersion} = JSON.parse(base64url.decode(header.kid));
    const algorithm = Algorithms[header.alg as keyof typeof Algorithms];

    switch (algorithm) {
        case Algorithms.HS256:
        case Algorithms.HS384:
        case Algorithms.HS512:
            try {
                const result = await vaultClient.postTransitVerifyName({
                    name: keyName,
                }, {
                    algorithm: VaultHashAlgorithm[algorithm],
                    hmac: `vault:v${keyVersion}:${base64url.toBase64(signature)}`,
                    input: Buffer.from(`${headerBase64}.${payloadBase64}`).toString('base64'),
                });

                if (!result || !result.data || !result.data.data) {
                    return false;
                }

                const {data: {data: {valid: isValid}}} = result;

                return isValid || false;
            } catch (e) {
                return false;
            }
        case Algorithms.ES256:
        case Algorithms.ES384:
        case Algorithms.ES512:
        case Algorithms.PS256:
        case Algorithms.PS384:
        case Algorithms.PS512:
        case Algorithms.RS256:
        case Algorithms.RS384:
        case Algorithms.RS512:
            try {
                const result = await vaultClient.postTransitVerifyName({
                    name: keyName,
                }, {
                    algorithm: VaultHashAlgorithm[algorithm],
                    signature: `vault:v${keyVersion}:${signature}`,
                    input: Buffer.from(`${headerBase64}.${payloadBase64}`).toString('base64'),
                    marshaling_algorithm: 'jws',
                    signature_algorithm: VaultSignatureAlgorithm[algorithm],
                });

                if (!result || !result.data || !result.data.data) {
                    return false;
                }

                const {data: {data: {valid: isValid}}} = result;

                return isValid || false;
            } catch (e) {
                return false;
            }
        default:
            throw new Error();
    }
};

export {
    Algorithms,
    Claims,
    VaultApiClient,
    signToken,
    verifyToken,
};