enum Algorithms {
    HS256 = 'HS256', // HMAC using SHA-256
    HS384 = 'HS384', // HMAC using SHA-384
    HS512 = 'HS512', // HMAC using SHA-512
    RS256 = 'RS256', // RSASSA-PKCS1-v1_5 using SHA-256
    RS384 = 'RS384', // RSASSA-PKCS1-v1_5 using SHA-384
    RS512 = 'RS512', // RSASSA-PKCS1-v1_5 using SHA-512
    ES256 = 'ES256', // ECDSA using P-256 and SHA-256
    ES384 = 'ES384', // ECDSA using P-384 and SHA-384
    ES512 = 'ES512', // ECDSA using P-512 and SHA-512
    PS256 = 'PS256', // RSASSA-PSS using SHA-256 and MGF1 with SHA-256
    PS384 = 'PS384', // RSASSA-PSS using SHA-384 and MGF1 with SHA-384
    PS512 = 'PS512', // RSASSA-PSS using SHA-512 and MGF1 with SHA-512
}

enum KnownClaims {
    Issuer = 'iss',
    Subject = 'sub',
    Audience = 'aud',
    ExpirationTime = 'exp',
    NotBefore = 'nbf',
    IssuedAt = 'iat',
    JwtId = 'jti',
    Name = 'name',
    GivenName = 'given_name',
    FamilyName = 'family_name',
    MiddleName = 'middle_name',
    Nickname = 'nickname',
    PreferredUsername = 'preferred_username',
    Profile = 'profile',
    Picture = 'picture',
    Website = 'website',
    Email = 'email',
    EmailVerified = 'email_verified',
    Gender = 'gender',
    Birthdate = 'birthdate',
    Zoneinfo = 'zoneinfo',
    Locale = 'locale',
    PhoneNumber = 'phone_number',
    PhoneNumberVerified = 'phone_number_verified',
    Address = 'address',
    UpdatedAt = 'updated_at',
    AuthorizedParty = 'azp',
    Nonce = 'nonce',
    AuthTime = 'auth_time',
    AccessTokenHash = 'at_hash',
    CodeHash = 'c_hash',
    AuthenticationContextClassReference = 'acr',
    AuthenticationMethodsReferences = 'amr',
    SubJwk = 'sub_jwk',
}

type Claim = KnownClaims | string;

type Claims = {
    [claim in Claim]?: unknown;
};

export {
    Algorithms,
    Claim,
    Claims,
    KnownClaims,
}