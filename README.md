# Node JWT Vault

![npm (scoped)](https://img.shields.io/npm/v/@applicazza/node-jwt-vault)

## Description

Create, sign and validate JWT tokens with Hashicorp Vault

## Installation

```shell
yarn add @applicazza/node-jwt-vault
```

## Usage

* Initialise `OpenAPIClientAxios`

```typescript
import { Document, OpenAPIClientAxios } from 'openapi-client-axios';
import { VaultApiClient } from '@applicazza/node-jwt-vault';

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
```

Or 

```typescript
import { OpenAPIClientAxios } from 'openapi-client-axios';
import { VaultApiClient } from '@applicazza/node-jwt-vault';

const vaultToken = '00000000-0000-0000-0000-000000000000';

const vault = new OpenAPIClientAxios({
    definition: './path/to/openapi/schema.json',
    axiosConfigDefaults: {
        baseURL: 'http://127.0.0.1:8200/v1',
        headers: {
            'X-Vault-Token': vaultToken,
        },
    }
});

const vaultClient = vault.init<VaultApiClient>();
```

Read more about OpenAPIClientAxios [here](https://github.com/anttiviljami/openapi-client-axios).

* Create and sign token

```typescript
import { Algorithms, Claims, signToken, verifyToken } from '@applicazza/node-jwt-vault';

const claims: Claims = {
    [KnownClaims.Subject]: '1',
    'custom': 'value',
    'another_custom': 'another_value',
};

const token = await signToken({
    algorithm: Algorithms.RS256,
    claims,
    keyName,
    vaultClient,
});
```

* Verify token

```typescript
import { verifyToken } from '@applicazza/node-jwt-vault';

const isValid = await verifyToken({token, vaultClient});
```

## Development

### Testing

* Launch Vault in development mode with simple token

```shell
VAULT_DEV_ROOT_TOKEN_ID=00000000-0000-0000-0000-000000000000 vault server -dev
```

* Enable `Transit` engine

```shell
vault secrets enable transit
```

* Create key with type rsa-2048

```shell
vault write -f transit/keys/2048 type=rsa-2048
```

* Run tests

```
yarn test
```

## License

MIT License

Copyright (c) 2021 applicazza

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.