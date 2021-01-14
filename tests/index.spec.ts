import { expect } from 'chai';
import { signToken, verifyToken } from '../src';
import { Document, OpenAPIClientAxios } from 'openapi-client-axios';
import { Algorithms, Claims, KnownClaims } from '../src/types';
import { Client as VaultApiClient } from '../src/vault';
import definition from '../openapi/schema.json';

describe('', () => {

    const vaultToken = '00000000-0000-0000-0000-000000000000';

    const vault = new OpenAPIClientAxios({
        definition: definition as Document,
        axiosConfigDefaults: {
            baseURL: 'http://127.0.0.1:8200/v1',
            headers: {
                'X-Vault-Token': vaultToken,
            },
        }
    });

    const vaultClient = vault.initSync<VaultApiClient>();

    const keyName = '2048';

    const claims: Claims = {
        [KnownClaims.Subject]: '1',
        'custom': 'value',
        'another_custom': 'another_value',
    };

    it('should create and validate JWT signed with ES256', async () => {

        const token = await signToken({
            algorithm: Algorithms.ES256,
            claims,
            keyName,
            vaultClient,
        });

        const isValid = await verifyToken({token, vaultClient});

        expect(isValid).equals(true);
    });

    it('should create and validate JWT signed with ES384', async () => {

        const token = await signToken({
            algorithm: Algorithms.ES384,
            claims,
            keyName,
            vaultClient,
        });

        const isValid = await verifyToken({token, vaultClient});

        expect(isValid).equals(true);
    });

    it('should create and validate JWT signed with ES512', async () => {

        const token = await signToken({
            algorithm: Algorithms.ES512,
            claims,
            keyName,
            vaultClient,
        });

        const isValid = await verifyToken({token, vaultClient});

        expect(isValid).equals(true);
    });

    it('should create and validate JWT signed with HS256', async () => {

        const token = await signToken({
            algorithm: Algorithms.HS256,
            claims,
            keyName,
            vaultClient,
        });

        const isValid = await verifyToken({token, vaultClient});

        expect(isValid).equals(true);
    });

    it('should create and validate JWT signed with HS384', async () => {

        const token = await signToken({
            algorithm: Algorithms.HS384,
            claims,
            keyName,
            vaultClient,
        });

        const isValid = await verifyToken({token, vaultClient});

        expect(isValid).equals(true);
    });

    it('should create and validate JWT signed with HS512', async () => {

        const token = await signToken({
            algorithm: Algorithms.HS512,
            claims,
            keyName,
            vaultClient,
        });

        const isValid = await verifyToken({token, vaultClient});

        expect(isValid).equals(true);
    });

    it('should create and validate JWT signed with PS256', async () => {

        const token = await signToken({
            algorithm: Algorithms.PS256,
            claims,
            keyName,
            vaultClient,
        });

        const isValid = await verifyToken({token, vaultClient});

        expect(isValid).equals(true);
    });

    it('should create and validate JWT signed with PS384', async () => {

        const token = await signToken({
            algorithm: Algorithms.PS384,
            claims,
            keyName,
            vaultClient,
        });

        const isValid = await verifyToken({token, vaultClient});

        expect(isValid).equals(true);
    });

    it('should create and validate JWT signed with PS512', async () => {

        const token = await signToken({
            algorithm: Algorithms.PS512,
            claims,
            keyName,
            vaultClient,
        });

        const isValid = await verifyToken({token, vaultClient});

        expect(isValid).equals(true);
    });

    it('should create and validate JWT signed with RS256', async () => {

        const token = await signToken({
            algorithm: Algorithms.RS256,
            claims,
            keyName,
            vaultClient,
        });

        const isValid = await verifyToken({token, vaultClient});

        expect(isValid).equals(true);
    });

    it('should create and validate JWT signed with RS384', async () => {

        const token = await signToken({
            algorithm: Algorithms.RS384,
            claims,
            keyName,
            vaultClient,
        });

        const isValid = await verifyToken({token, vaultClient});

        expect(isValid).equals(true);
    });

    it('should create and validate JWT signed with RS512', async () => {

        const token = await signToken({
            algorithm: Algorithms.RS512,
            claims,
            keyName,
            vaultClient,
        });

        const isValid = await verifyToken({token, vaultClient});

        expect(isValid).equals(true);
    });
});