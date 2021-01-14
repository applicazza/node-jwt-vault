import {
  OpenAPIClient,
  Parameters,
  UnknownParamsObject,
  OperationResponse,
  AxiosRequestConfig,
} from 'openapi-client-axios'; 

declare namespace Paths {
  namespace AuthTokenCreate$RoleName {
    namespace Parameters {
      export type RoleName = string;
    }
    export interface PathParameters {
      role_name: Parameters.RoleName;
    }
  }
  namespace AuthTokenRoles$RoleName {
    namespace Parameters {
      export type RoleName = string;
    }
    export interface PathParameters {
      role_name: Parameters.RoleName;
    }
  }
  namespace Cubbyhole$Path {
    namespace Parameters {
      export type Path = string;
    }
    export interface PathParameters {
      path: Parameters.Path;
    }
  }
  namespace GetAuthTokenAccessors {
    namespace Parameters {
      export type List = string;
    }
    export interface QueryParameters {
      list?: Parameters.List;
    }
  }
  namespace GetAuthTokenRoles {
    namespace Parameters {
      export type List = string;
    }
    export interface QueryParameters {
      list?: Parameters.List;
    }
  }
  namespace GetCubbyholePath {
    namespace Parameters {
      export type List = string;
    }
    export interface QueryParameters {
      list?: Parameters.List;
    }
  }
  namespace GetIdentityAliasId {
    namespace Parameters {
      export type List = string;
    }
    export interface QueryParameters {
      list?: Parameters.List;
    }
  }
  namespace GetIdentityEntityAliasId {
    namespace Parameters {
      export type List = string;
    }
    export interface QueryParameters {
      list?: Parameters.List;
    }
  }
  namespace GetIdentityEntityId {
    namespace Parameters {
      export type List = string;
    }
    export interface QueryParameters {
      list?: Parameters.List;
    }
  }
  namespace GetIdentityEntityName {
    namespace Parameters {
      export type List = string;
    }
    export interface QueryParameters {
      list?: Parameters.List;
    }
  }
  namespace GetIdentityGroupAliasId {
    namespace Parameters {
      export type List = string;
    }
    export interface QueryParameters {
      list?: Parameters.List;
    }
  }
  namespace GetIdentityGroupId {
    namespace Parameters {
      export type List = string;
    }
    export interface QueryParameters {
      list?: Parameters.List;
    }
  }
  namespace GetIdentityGroupName {
    namespace Parameters {
      export type List = string;
    }
    export interface QueryParameters {
      list?: Parameters.List;
    }
  }
  namespace GetIdentityOidcKey {
    namespace Parameters {
      export type List = string;
    }
    export interface QueryParameters {
      list?: Parameters.List;
    }
  }
  namespace GetIdentityOidcRole {
    namespace Parameters {
      export type List = string;
    }
    export interface QueryParameters {
      list?: Parameters.List;
    }
  }
  namespace GetIdentityPersonaId {
    namespace Parameters {
      export type List = string;
    }
    export interface QueryParameters {
      list?: Parameters.List;
    }
  }
  namespace GetSecretMetadataPath {
    namespace Parameters {
      export type List = string;
    }
    export interface QueryParameters {
      list?: Parameters.List;
    }
  }
  namespace GetSysConfigUiHeaders {
    namespace Parameters {
      export type List = string;
    }
    export interface QueryParameters {
      list?: Parameters.List;
    }
  }
  namespace GetSysLeasesLookup {
    namespace Parameters {
      export type List = string;
    }
    export interface QueryParameters {
      list?: Parameters.List;
    }
  }
  namespace GetSysLeasesLookupPrefix {
    namespace Parameters {
      export type List = string;
    }
    export interface QueryParameters {
      list?: Parameters.List;
    }
  }
  namespace GetSysPluginsCatalogType {
    namespace Parameters {
      export type List = string;
    }
    export interface QueryParameters {
      list?: Parameters.List;
    }
  }
  namespace GetSysPoliciesAcl {
    namespace Parameters {
      export type List = string;
    }
    export interface QueryParameters {
      list?: Parameters.List;
    }
  }
  namespace GetSysPolicy {
    namespace Parameters {
      export type List = string;
    }
    export interface QueryParameters {
      list?: Parameters.List;
    }
  }
  namespace GetSysQuotasRateLimit {
    namespace Parameters {
      export type List = string;
    }
    export interface QueryParameters {
      list?: Parameters.List;
    }
  }
  namespace GetSysRaw {
    namespace Parameters {
      export type List = string;
    }
    export interface QueryParameters {
      list?: Parameters.List;
    }
  }
  namespace GetSysRawPath {
    namespace Parameters {
      export type List = string;
    }
    export interface QueryParameters {
      list?: Parameters.List;
    }
  }
  namespace GetTransitKeys {
    namespace Parameters {
      export type List = string;
    }
    export interface QueryParameters {
      list?: Parameters.List;
    }
  }
  namespace GetTransitKeysName {
    namespace Responses {
      export interface $200 {
        data?: {
          name?: string;
          latest_version?: number;
        };
      }
    }
  }
  namespace IdentityAliasId$Id {
    namespace Parameters {
      export type Id = string;
    }
    export interface PathParameters {
      id: Parameters.Id;
    }
  }
  namespace IdentityEntityAliasId$Id {
    namespace Parameters {
      export type Id = string;
    }
    export interface PathParameters {
      id: Parameters.Id;
    }
  }
  namespace IdentityEntityId$Id {
    namespace Parameters {
      export type Id = string;
    }
    export interface PathParameters {
      id: Parameters.Id;
    }
  }
  namespace IdentityEntityName$Name {
    namespace Parameters {
      export type Name = string;
    }
    export interface PathParameters {
      name: Parameters.Name;
    }
  }
  namespace IdentityGroupAliasId$Id {
    namespace Parameters {
      export type Id = string;
    }
    export interface PathParameters {
      id: Parameters.Id;
    }
  }
  namespace IdentityGroupId$Id {
    namespace Parameters {
      export type Id = string;
    }
    export interface PathParameters {
      id: Parameters.Id;
    }
  }
  namespace IdentityGroupName$Name {
    namespace Parameters {
      export type Name = string;
    }
    export interface PathParameters {
      name: Parameters.Name;
    }
  }
  namespace IdentityOidcKey$Name {
    namespace Parameters {
      export type Name = string;
    }
    export interface PathParameters {
      name: Parameters.Name;
    }
  }
  namespace IdentityOidcKey$NameRotate {
    namespace Parameters {
      export type Name = string;
    }
    export interface PathParameters {
      name: Parameters.Name;
    }
  }
  namespace IdentityOidcRole$Name {
    namespace Parameters {
      export type Name = string;
    }
    export interface PathParameters {
      name: Parameters.Name;
    }
  }
  namespace IdentityOidcToken$Name {
    namespace Parameters {
      export type Name = string;
    }
    export interface PathParameters {
      name: Parameters.Name;
    }
  }
  namespace IdentityPersonaId$Id {
    namespace Parameters {
      export type Id = string;
    }
    export interface PathParameters {
      id: Parameters.Id;
    }
  }
  namespace PostAuthTokenLookup {
    export interface RequestBody {
      /**
       * Token to lookup (POST request body)
       */
      token?: string;
    }
  }
  namespace PostAuthTokenLookupAccessor {
    export interface RequestBody {
      /**
       * Accessor of the token to look up (request body)
       */
      accessor?: string;
    }
  }
  namespace PostAuthTokenLookupSelf {
    export interface RequestBody {
      /**
       * Token to look up (unused, does not need to be set)
       */
      token?: string;
    }
  }
  namespace PostAuthTokenRenew {
    export interface RequestBody {
      /**
       * The desired increment in seconds to the token expiration
       */
      increment?: number; // seconds
      /**
       * Token to renew (request body)
       */
      token?: string;
    }
  }
  namespace PostAuthTokenRenewAccessor {
    export interface RequestBody {
      /**
       * Accessor of the token to renew (request body)
       */
      accessor?: string;
      /**
       * The desired increment in seconds to the token expiration
       */
      increment?: number; // seconds
    }
  }
  namespace PostAuthTokenRenewSelf {
    export interface RequestBody {
      /**
       * The desired increment in seconds to the token expiration
       */
      increment?: number; // seconds
      /**
       * Token to renew (unused, does not need to be set)
       */
      token?: string;
    }
  }
  namespace PostAuthTokenRevoke {
    export interface RequestBody {
      /**
       * Token to revoke (request body)
       */
      token?: string;
    }
  }
  namespace PostAuthTokenRevokeAccessor {
    export interface RequestBody {
      /**
       * Accessor of the token (request body)
       */
      accessor?: string;
    }
  }
  namespace PostAuthTokenRevokeOrphan {
    export interface RequestBody {
      /**
       * Token to revoke (request body)
       */
      token?: string;
    }
  }
  namespace PostAuthTokenRolesRoleName {
    export interface RequestBody {
      /**
       * String or JSON list of allowed entity aliases. If set, specifies the entity aliases which are allowed to be used during token generation. This field supports globbing.
       */
      allowed_entity_aliases?: string[];
      /**
       * If set, tokens can be created with any subset of the policies in this list, rather than the normal semantics of tokens being a subset of the calling token's policies. The parameter is a comma-delimited string of policy names.
       */
      allowed_policies?: string[];
      /**
       * Use 'token_bound_cidrs' instead.
       */
      bound_cidrs?: string[];
      /**
       * If set, successful token creation via this role will require that no policies in the given list are requested. The parameter is a comma-delimited string of policy names.
       */
      disallowed_policies?: string[];
      /**
       * Use 'token_explicit_max_ttl' instead.
       */
      explicit_max_ttl?: number; // seconds
      /**
       * If true, tokens created via this role will be orphan tokens (have no parent)
       */
      orphan?: boolean;
      /**
       * If set, tokens created via this role will contain the given suffix as a part of their path. This can be used to assist use of the 'revoke-prefix' endpoint later on. The given suffix must match the regular expression.\w[\w-.]+\w
       */
      path_suffix?: string;
      /**
       * Use 'token_period' instead.
       */
      period?: number; // seconds
      /**
       * Tokens created via this role will be renewable or not according to this value. Defaults to "true".
       */
      renewable?: boolean;
      /**
       * Comma separated string or JSON list of CIDR blocks. If set, specifies the blocks of IP addresses which are allowed to use the generated token.
       */
      token_bound_cidrs?: string[];
      /**
       * If set, tokens created via this role carry an explicit maximum TTL. During renewal, the current maximum TTL values of the role and the mount are not checked for changes, and any updates to these values will have no effect on the token being renewed.
       */
      token_explicit_max_ttl?: number; // seconds
      /**
       * If true, the 'default' policy will not automatically be added to generated tokens
       */
      token_no_default_policy?: boolean;
      /**
       * The maximum number of times a token may be used, a value of zero means unlimited
       */
      token_num_uses?: number;
      /**
       * If set, tokens created via this role will have no max lifetime; instead, their renewal period will be fixed to this value. This takes an integer number of seconds, or a string duration (e.g. "24h").
       */
      token_period?: number; // seconds
      /**
       * The type of token to generate, service or batch
       */
      token_type?: string;
    }
  }
  namespace PostIdentityAlias {
    export interface RequestBody {
      /**
       * Entity ID to which this alias belongs to
       */
      canonical_id?: string;
      /**
       * Entity ID to which this alias belongs to. This field is deprecated in favor of 'canonical_id'.
       */
      entity_id?: string;
      /**
       * ID of the alias
       */
      id?: string;
      /**
       * Mount accessor to which this alias belongs to
       */
      mount_accessor?: string;
      /**
       * Name of the alias
       */
      name?: string;
    }
  }
  namespace PostIdentityAliasIdId {
    export interface RequestBody {
      /**
       * Entity ID to which this alias should be tied to
       */
      canonical_id?: string;
      /**
       * Entity ID to which this alias should be tied to. This field is deprecated in favor of 'canonical_id'.
       */
      entity_id?: string;
      /**
       * Mount accessor to which this alias belongs to
       */
      mount_accessor?: string;
      /**
       * Name of the alias
       */
      name?: string;
    }
  }
  namespace PostIdentityEntity {
    export interface RequestBody {
      /**
       * If set true, tokens tied to this identity will not be able to be used (but will not be revoked).
       */
      disabled?: boolean;
      /**
       * ID of the entity. If set, updates the corresponding existing entity.
       */
      id?: string;
      /**
       * Metadata to be associated with the entity. In CLI, this parameter can be repeated multiple times, and it all gets merged together. For example: vault <command> <path> metadata=key1=value1 metadata=key2=value2
       */
      metadata?: {
      };
      /**
       * Name of the entity
       */
      name?: string;
      /**
       * Policies to be tied to the entity.
       */
      policies?: string[];
    }
  }
  namespace PostIdentityEntityAlias {
    export interface RequestBody {
      /**
       * Entity ID to which this alias belongs
       */
      canonical_id?: string;
      /**
       * Entity ID to which this alias belongs. This field is deprecated, use canonical_id.
       */
      entity_id?: string;
      /**
       * ID of the entity alias. If set, updates the corresponding entity alias.
       */
      id?: string;
      /**
       * Mount accessor to which this alias belongs to; unused for a modify
       */
      mount_accessor?: string;
      /**
       * Name of the alias; unused for a modify
       */
      name?: string;
    }
  }
  namespace PostIdentityEntityAliasIdId {
    export interface RequestBody {
      /**
       * Entity ID to which this alias should be tied to
       */
      canonical_id?: string;
      /**
       * Entity ID to which this alias belongs to. This field is deprecated, use canonical_id.
       */
      entity_id?: string;
      /**
       * (Unused)
       */
      mount_accessor?: string;
      /**
       * (Unused)
       */
      name?: string;
    }
  }
  namespace PostIdentityEntityBatchDelete {
    export interface RequestBody {
      /**
       * Entity IDs to delete
       */
      entity_ids?: string[];
    }
  }
  namespace PostIdentityEntityIdId {
    export interface RequestBody {
      /**
       * If set true, tokens tied to this identity will not be able to be used (but will not be revoked).
       */
      disabled?: boolean;
      /**
       * Metadata to be associated with the entity. In CLI, this parameter can be repeated multiple times, and it all gets merged together. For example: vault <command> <path> metadata=key1=value1 metadata=key2=value2
       */
      metadata?: {
      };
      /**
       * Name of the entity
       */
      name?: string;
      /**
       * Policies to be tied to the entity.
       */
      policies?: string[];
    }
  }
  namespace PostIdentityEntityMerge {
    export interface RequestBody {
      /**
       * Setting this will follow the 'mine' strategy for merging MFA secrets. If there are secrets of the same type both in entities that are merged from and in entity into which all others are getting merged, secrets in the destination will be unaltered. If not set, this API will throw an error containing all the conflicts.
       */
      force?: boolean;
      /**
       * Entity IDs which needs to get merged
       */
      from_entity_ids?: string[];
      /**
       * Entity ID into which all the other entities need to get merged
       */
      to_entity_id?: string;
    }
  }
  namespace PostIdentityEntityNameName {
    export interface RequestBody {
      /**
       * If set true, tokens tied to this identity will not be able to be used (but will not be revoked).
       */
      disabled?: boolean;
      /**
       * ID of the entity. If set, updates the corresponding existing entity.
       */
      id?: string;
      /**
       * Metadata to be associated with the entity. In CLI, this parameter can be repeated multiple times, and it all gets merged together. For example: vault <command> <path> metadata=key1=value1 metadata=key2=value2
       */
      metadata?: {
      };
      /**
       * Policies to be tied to the entity.
       */
      policies?: string[];
    }
  }
  namespace PostIdentityGroup {
    export interface RequestBody {
      /**
       * ID of the group. If set, updates the corresponding existing group.
       */
      id?: string;
      /**
       * Entity IDs to be assigned as group members.
       */
      member_entity_ids?: string[];
      /**
       * Group IDs to be assigned as group members.
       */
      member_group_ids?: string[];
      /**
       * Metadata to be associated with the group. In CLI, this parameter can be repeated multiple times, and it all gets merged together. For example: vault <command> <path> metadata=key1=value1 metadata=key2=value2
       */
      metadata?: {
      };
      /**
       * Name of the group.
       */
      name?: string;
      /**
       * Policies to be tied to the group.
       */
      policies?: string[];
      /**
       * Type of the group, 'internal' or 'external'. Defaults to 'internal'
       */
      type?: string;
    }
  }
  namespace PostIdentityGroupAlias {
    export interface RequestBody {
      /**
       * ID of the group to which this is an alias.
       */
      canonical_id?: string;
      /**
       * ID of the group alias.
       */
      id?: string;
      /**
       * Mount accessor to which this alias belongs to.
       */
      mount_accessor?: string;
      /**
       * Alias of the group.
       */
      name?: string;
    }
  }
  namespace PostIdentityGroupAliasIdId {
    export interface RequestBody {
      /**
       * ID of the group to which this is an alias.
       */
      canonical_id?: string;
      /**
       * Mount accessor to which this alias belongs to.
       */
      mount_accessor?: string;
      /**
       * Alias of the group.
       */
      name?: string;
    }
  }
  namespace PostIdentityGroupIdId {
    export interface RequestBody {
      /**
       * Entity IDs to be assigned as group members.
       */
      member_entity_ids?: string[];
      /**
       * Group IDs to be assigned as group members.
       */
      member_group_ids?: string[];
      /**
       * Metadata to be associated with the group. In CLI, this parameter can be repeated multiple times, and it all gets merged together. For example: vault <command> <path> metadata=key1=value1 metadata=key2=value2
       */
      metadata?: {
      };
      /**
       * Name of the group.
       */
      name?: string;
      /**
       * Policies to be tied to the group.
       */
      policies?: string[];
      /**
       * Type of the group, 'internal' or 'external'. Defaults to 'internal'
       */
      type?: string;
    }
  }
  namespace PostIdentityGroupNameName {
    export interface RequestBody {
      /**
       * ID of the group. If set, updates the corresponding existing group.
       */
      id?: string;
      /**
       * Entity IDs to be assigned as group members.
       */
      member_entity_ids?: string[];
      /**
       * Group IDs to be assigned as group members.
       */
      member_group_ids?: string[];
      /**
       * Metadata to be associated with the group. In CLI, this parameter can be repeated multiple times, and it all gets merged together. For example: vault <command> <path> metadata=key1=value1 metadata=key2=value2
       */
      metadata?: {
      };
      /**
       * Policies to be tied to the group.
       */
      policies?: string[];
      /**
       * Type of the group, 'internal' or 'external'. Defaults to 'internal'
       */
      type?: string;
    }
  }
  namespace PostIdentityLookupEntity {
    export interface RequestBody {
      /**
       * ID of the alias.
       */
      alias_id?: string;
      /**
       * Accessor of the mount to which the alias belongs to. This should be supplied in conjunction with 'alias_name'.
       */
      alias_mount_accessor?: string;
      /**
       * Name of the alias. This should be supplied in conjunction with 'alias_mount_accessor'.
       */
      alias_name?: string;
      /**
       * ID of the entity.
       */
      id?: string;
      /**
       * Name of the entity.
       */
      name?: string;
    }
  }
  namespace PostIdentityLookupGroup {
    export interface RequestBody {
      /**
       * ID of the alias.
       */
      alias_id?: string;
      /**
       * Accessor of the mount to which the alias belongs to. This should be supplied in conjunction with 'alias_name'.
       */
      alias_mount_accessor?: string;
      /**
       * Name of the alias. This should be supplied in conjunction with 'alias_mount_accessor'.
       */
      alias_name?: string;
      /**
       * ID of the group.
       */
      id?: string;
      /**
       * Name of the group.
       */
      name?: string;
    }
  }
  namespace PostIdentityOidcConfig {
    export interface RequestBody {
      /**
       * Issuer URL to be used in the iss claim of the token. If not set, Vault's app_addr will be used.
       */
      issuer?: string;
    }
  }
  namespace PostIdentityOidcIntrospect {
    export interface RequestBody {
      /**
       * Optional client_id to verify
       */
      client_id?: string;
      /**
       * Token to verify
       */
      token?: string;
    }
  }
  namespace PostIdentityOidcKeyName {
    export interface RequestBody {
      /**
       * Signing algorithm to use. This will default to RS256.
       */
      algorithm?: string;
      /**
       * Comma separated string or array of role client ids allowed to use this key for signing. If empty no roles are allowed. If "*" all roles are allowed.
       */
      allowed_client_ids?: string[];
      /**
       * How often to generate a new keypair.
       */
      rotation_period?: number; // seconds
      /**
       * Controls how long the public portion of a key will be available for verification after being rotated.
       */
      verification_ttl?: number; // seconds
    }
  }
  namespace PostIdentityOidcKeyNameRotate {
    export interface RequestBody {
      /**
       * Controls how long the public portion of a key will be available for verification after being rotated. Setting verification_ttl here will override the verification_ttl set on the key.
       */
      verification_ttl?: number; // seconds
    }
  }
  namespace PostIdentityOidcRoleName {
    export interface RequestBody {
      /**
       * Optional client_id
       */
      client_id?: string;
      /**
       * The OIDC key to use for generating tokens. The specified key must already exist.
       */
      key?: string;
      /**
       * The template string to use for generating tokens. This may be in string-ified JSON or base64 format.
       */
      template?: string;
      /**
       * TTL of the tokens generated against the role.
       */
      ttl?: number; // seconds
    }
  }
  namespace PostIdentityPersona {
    export interface RequestBody {
      /**
       * Entity ID to which this persona belongs to
       */
      entity_id?: string;
      /**
       * ID of the persona
       */
      id?: string;
      /**
       * Metadata to be associated with the persona. In CLI, this parameter can be repeated multiple times, and it all gets merged together. For example: vault <command> <path> metadata=key1=value1 metadata=key2=value2
       */
      metadata?: {
      };
      /**
       * Mount accessor to which this persona belongs to
       */
      mount_accessor?: string;
      /**
       * Name of the persona
       */
      name?: string;
    }
  }
  namespace PostIdentityPersonaIdId {
    export interface RequestBody {
      /**
       * Entity ID to which this persona should be tied to
       */
      entity_id?: string;
      /**
       * Metadata to be associated with the persona. In CLI, this parameter can be repeated multiple times, and it all gets merged together. For example: vault <command> <path> metadata=key1=value1 metadata=key2=value2
       */
      metadata?: {
      };
      /**
       * Mount accessor to which this persona belongs to
       */
      mount_accessor?: string;
      /**
       * Name of the persona
       */
      name?: string;
    }
  }
  namespace PostSecretConfig {
    export interface RequestBody {
      /**
       * If true, the backend will require the cas parameter to be set for each write
       */
      cas_required?: boolean;
      /**
       * If set, the length of time before a version is deleted. A negative duration disables the use of delete_version_after on all keys. A zero duration clears the current setting. Accepts a Go duration format string.
       */
      delete_version_after?: number; // seconds
      /**
       * The number of versions to keep for each key. Defaults to 10
       */
      max_versions?: number;
    }
  }
  namespace PostSecretDataPath {
    export interface RequestBody {
      /**
       * The contents of the data map will be stored and returned on read.
       */
      data?: {
      };
      /**
       * Options for writing a KV entry. Set the "cas" value to use a Check-And-Set operation. If not set the write will be allowed. If set to 0 a write will only be allowed if the key doesn’t exist. If the index is non-zero the write will only be allowed if the key’s current version matches the version specified in the cas parameter.
       */
      options?: {
      };
      /**
       * If provided during a read, the value at the version number will be returned
       */
      version?: number;
    }
  }
  namespace PostSecretDeletePath {
    export interface RequestBody {
      /**
       * The versions to be archived. The versioned data will not be deleted, but it will no longer be returned in normal get requests.
       */
      versions?: number[];
    }
  }
  namespace PostSecretDestroyPath {
    export interface RequestBody {
      /**
       * The versions to destroy. Their data will be permanently deleted.
       */
      versions?: number[];
    }
  }
  namespace PostSecretMetadataPath {
    export interface RequestBody {
      /**
       * If true the key will require the cas parameter to be set on all write requests. If false, the backend’s configuration will be used.
       */
      cas_required?: boolean;
      /**
       * The length of time before a version is deleted. If not set, the backend's configured delete_version_after is used. Cannot be greater than the backend's delete_version_after. A zero duration clears the current setting. A negative duration will cause an error.
       */
      delete_version_after?: number; // seconds
      /**
       * The number of versions to keep. If not set, the backend’s configured max version is used.
       */
      max_versions?: number;
    }
  }
  namespace PostSecretUndeletePath {
    export interface RequestBody {
      /**
       * The versions to unarchive. The versions will be restored and their data will be returned on normal get requests.
       */
      versions?: number[];
    }
  }
  namespace PostSysAuditHashPath {
    export interface RequestBody {
      input?: string;
    }
  }
  namespace PostSysAuditPath {
    export interface RequestBody {
      /**
       * User-friendly description for this audit backend.
       */
      description?: string;
      /**
       * Mark the mount as a local mount, which is not replicated and is unaffected by replication.
       */
      local?: boolean;
      /**
       * Configuration options for the audit backend.
       */
      options?: {
      };
      /**
       * The type of the backend. Example: "mysql"
       */
      type?: string;
    }
  }
  namespace PostSysAuthPath {
    export interface RequestBody {
      /**
       * Configuration for this mount, such as plugin_name.
       */
      config?: {
      };
      /**
       * User-friendly description for this credential backend.
       */
      description?: string;
      /**
       * Whether to give the mount access to Vault's external entropy.
       */
      external_entropy_access?: boolean;
      /**
       * Mark the mount as a local mount, which is not replicated and is unaffected by replication.
       */
      local?: boolean;
      /**
       * The options to pass into the backend. Should be a json object with string keys and values.
       */
      options?: {
      };
      /**
       * Name of the auth plugin to use based from the name in the plugin catalog.
       */
      plugin_name?: string;
      /**
       * Whether to turn on seal wrapping for the mount.
       */
      seal_wrap?: boolean;
      /**
       * The type of the backend. Example: "userpass"
       */
      type?: string;
    }
  }
  namespace PostSysAuthPathTune {
    export interface RequestBody {
      /**
       * A list of headers to whitelist and allow a plugin to set on responses.
       */
      allowed_response_headers?: string[];
      /**
       * The list of keys in the request data object that will not be HMAC'ed by audit devices.
       */
      audit_non_hmac_request_keys?: string[];
      /**
       * The list of keys in the response data object that will not be HMAC'ed by audit devices.
       */
      audit_non_hmac_response_keys?: string[];
      /**
       * The default lease TTL for this mount.
       */
      default_lease_ttl?: string;
      /**
       * User-friendly description for this credential backend.
       */
      description?: string;
      /**
       * Determines the visibility of the mount in the UI-specific listing endpoint. Accepted value are 'unauth' and ''.
       */
      listing_visibility?: string;
      /**
       * The max lease TTL for this mount.
       */
      max_lease_ttl?: string;
      /**
       * The options to pass into the backend. Should be a json object with string keys and values.
       */
      options?: {
      };
      /**
       * A list of headers to whitelist and pass from the request to the plugin.
       */
      passthrough_request_headers?: string[];
      /**
       * The type of token to issue (service or batch).
       */
      token_type?: string;
    }
  }
  namespace PostSysCapabilities {
    export interface RequestBody {
      /**
       * Use 'paths' instead.
       */
      path?: string[];
      /**
       * Paths on which capabilities are being queried.
       */
      paths?: string[];
      /**
       * Token for which capabilities are being queried.
       */
      token?: string;
    }
  }
  namespace PostSysCapabilitiesAccessor {
    export interface RequestBody {
      /**
       * Accessor of the token for which capabilities are being queried.
       */
      accessor?: string;
      /**
       * Use 'paths' instead.
       */
      path?: string[];
      /**
       * Paths on which capabilities are being queried.
       */
      paths?: string[];
    }
  }
  namespace PostSysCapabilitiesSelf {
    export interface RequestBody {
      /**
       * Use 'paths' instead.
       */
      path?: string[];
      /**
       * Paths on which capabilities are being queried.
       */
      paths?: string[];
      /**
       * Token for which capabilities are being queried.
       */
      token?: string;
    }
  }
  namespace PostSysConfigAuditingRequestHeadersHeader {
    export interface RequestBody {
      hmac?: boolean;
    }
  }
  namespace PostSysConfigCors {
    export interface RequestBody {
      /**
       * A comma-separated string or array of strings indicating headers that are allowed on cross-origin requests.
       */
      allowed_headers?: string[];
      /**
       * A comma-separated string or array of strings indicating origins that may make cross-origin requests.
       */
      allowed_origins?: string[];
      /**
       * Enables or disables CORS headers on requests.
       */
      enable?: boolean;
    }
  }
  namespace PostSysConfigUiHeadersHeader {
    export interface RequestBody {
      /**
       * The values to set the header.
       */
      values?: string[];
    }
  }
  namespace PostSysGenerateRoot {
    export interface RequestBody {
      /**
       * Specifies a base64-encoded PGP public key.
       */
      pgp_key?: string;
    }
  }
  namespace PostSysGenerateRootAttempt {
    export interface RequestBody {
      /**
       * Specifies a base64-encoded PGP public key.
       */
      pgp_key?: string;
    }
  }
  namespace PostSysGenerateRootUpdate {
    export interface RequestBody {
      /**
       * Specifies a single master key share.
       */
      key?: string;
      /**
       * Specifies the nonce of the attempt.
       */
      nonce?: string;
    }
  }
  namespace PostSysInit {
    export interface RequestBody {
      /**
       * Specifies an array of PGP public keys used to encrypt the output unseal keys. Ordering is preserved. The keys must be base64-encoded from their original binary representation. The size of this array must be the same as `secret_shares`.
       */
      pgp_keys?: string[];
      /**
       * Specifies an array of PGP public keys used to encrypt the output recovery keys. Ordering is preserved. The keys must be base64-encoded from their original binary representation. The size of this array must be the same as `recovery_shares`.
       */
      recovery_pgp_keys?: string[];
      /**
       * Specifies the number of shares to split the recovery key into.
       */
      recovery_shares?: number;
      /**
       * Specifies the number of shares required to reconstruct the recovery key. This must be less than or equal to `recovery_shares`.
       */
      recovery_threshold?: number;
      /**
       * Specifies a PGP public key used to encrypt the initial root token. The key must be base64-encoded from its original binary representation.
       */
      root_token_pgp_key?: string;
      /**
       * Specifies the number of shares to split the master key into.
       */
      secret_shares?: number;
      /**
       * Specifies the number of shares required to reconstruct the master key. This must be less than or equal secret_shares. If using Vault HSM with auto-unsealing, this value must be the same as `secret_shares`.
       */
      secret_threshold?: number;
      /**
       * Specifies the number of shares that should be encrypted by the HSM and stored for auto-unsealing. Currently must be the same as `secret_shares`.
       */
      stored_shares?: number;
    }
  }
  namespace PostSysInternalCountersConfig {
    export interface RequestBody {
      /**
       * Number of months to report if no start date specified.
       */
      default_report_months?: number;
      /**
       * Enable or disable collection of client count: enable, disable, or default.
       */
      enabled?: string;
      /**
       * Number of months of client data to retain. Setting to 0 will clear all existing data.
       */
      retention_months?: number;
    }
  }
  namespace PostSysLeasesLookup {
    export interface RequestBody {
      /**
       * The lease identifier to renew. This is included with a lease.
       */
      lease_id?: string;
    }
  }
  namespace PostSysLeasesRenew {
    export interface RequestBody {
      /**
       * The desired increment in seconds to the lease
       */
      increment?: number; // seconds
      /**
       * The lease identifier to renew. This is included with a lease.
       */
      lease_id?: string;
      /**
       * The lease identifier to renew. This is included with a lease.
       */
      url_lease_id?: string;
    }
  }
  namespace PostSysLeasesRenewUrlLeaseId {
    export interface RequestBody {
      /**
       * The desired increment in seconds to the lease
       */
      increment?: number; // seconds
      /**
       * The lease identifier to renew. This is included with a lease.
       */
      lease_id?: string;
    }
  }
  namespace PostSysLeasesRevoke {
    export interface RequestBody {
      /**
       * The lease identifier to renew. This is included with a lease.
       */
      lease_id?: string;
      /**
       * Whether or not to perform the revocation synchronously
       */
      sync?: boolean;
      /**
       * The lease identifier to renew. This is included with a lease.
       */
      url_lease_id?: string;
    }
  }
  namespace PostSysLeasesRevokePrefixPrefix {
    export interface RequestBody {
      /**
       * Whether or not to perform the revocation synchronously
       */
      sync?: boolean;
    }
  }
  namespace PostSysLeasesRevokeUrlLeaseId {
    export interface RequestBody {
      /**
       * The lease identifier to renew. This is included with a lease.
       */
      lease_id?: string;
      /**
       * Whether or not to perform the revocation synchronously
       */
      sync?: boolean;
    }
  }
  namespace PostSysMountsPath {
    export interface RequestBody {
      /**
       * Configuration for this mount, such as default_lease_ttl and max_lease_ttl.
       */
      config?: {
      };
      /**
       * User-friendly description for this mount.
       */
      description?: string;
      /**
       * Whether to give the mount access to Vault's external entropy.
       */
      external_entropy_access?: boolean;
      /**
       * Mark the mount as a local mount, which is not replicated and is unaffected by replication.
       */
      local?: boolean;
      /**
       * The options to pass into the backend. Should be a json object with string keys and values.
       */
      options?: {
      };
      /**
       * Name of the plugin to mount based from the name registered in the plugin catalog.
       */
      plugin_name?: string;
      /**
       * Whether to turn on seal wrapping for the mount.
       */
      seal_wrap?: boolean;
      /**
       * The type of the backend. Example: "passthrough"
       */
      type?: string;
    }
  }
  namespace PostSysMountsPathTune {
    export interface RequestBody {
      /**
       * A list of headers to whitelist and allow a plugin to set on responses.
       */
      allowed_response_headers?: string[];
      /**
       * The list of keys in the request data object that will not be HMAC'ed by audit devices.
       */
      audit_non_hmac_request_keys?: string[];
      /**
       * The list of keys in the response data object that will not be HMAC'ed by audit devices.
       */
      audit_non_hmac_response_keys?: string[];
      /**
       * The default lease TTL for this mount.
       */
      default_lease_ttl?: string;
      /**
       * User-friendly description for this credential backend.
       */
      description?: string;
      /**
       * Determines the visibility of the mount in the UI-specific listing endpoint. Accepted value are 'unauth' and ''.
       */
      listing_visibility?: string;
      /**
       * The max lease TTL for this mount.
       */
      max_lease_ttl?: string;
      /**
       * The options to pass into the backend. Should be a json object with string keys and values.
       */
      options?: {
      };
      /**
       * A list of headers to whitelist and pass from the request to the plugin.
       */
      passthrough_request_headers?: string[];
      /**
       * The type of token to issue (service or batch).
       */
      token_type?: string;
    }
  }
  namespace PostSysPluginsCatalogName {
    export interface RequestBody {
      /**
       * The args passed to plugin command.
       */
      args?: string[];
      /**
       * The command used to start the plugin. The executable defined in this command must exist in vault's plugin directory.
       */
      command?: string;
      /**
       * The environment variables passed to plugin command. Each entry is of the form "key=value".
       */
      env?: string[];
      /**
       * The SHA256 sum of the executable used in the command field. This should be HEX encoded.
       */
      sha256?: string;
      /**
       * The SHA256 sum of the executable used in the command field. This should be HEX encoded.
       */
      sha_256?: string;
      /**
       * The type of the plugin, may be auth, secret, or database
       */
      type?: string;
    }
  }
  namespace PostSysPluginsCatalogTypeName {
    export interface RequestBody {
      /**
       * The args passed to plugin command.
       */
      args?: string[];
      /**
       * The command used to start the plugin. The executable defined in this command must exist in vault's plugin directory.
       */
      command?: string;
      /**
       * The environment variables passed to plugin command. Each entry is of the form "key=value".
       */
      env?: string[];
      /**
       * The SHA256 sum of the executable used in the command field. This should be HEX encoded.
       */
      sha256?: string;
      /**
       * The SHA256 sum of the executable used in the command field. This should be HEX encoded.
       */
      sha_256?: string;
    }
  }
  namespace PostSysPluginsReloadBackend {
    export interface RequestBody {
      /**
       * The mount paths of the plugin backends to reload.
       */
      mounts?: string[];
      /**
       * The name of the plugin to reload, as registered in the plugin catalog.
       */
      plugin?: string;
      scope?: string;
    }
  }
  namespace PostSysPoliciesAclName {
    export interface RequestBody {
      /**
       * The rules of the policy.
       */
      policy?: string;
    }
  }
  namespace PostSysPoliciesPasswordName {
    export interface RequestBody {
      /**
       * The password policy
       */
      policy?: string;
    }
  }
  namespace PostSysPolicyName {
    export interface RequestBody {
      /**
       * The rules of the policy.
       */
      policy?: string;
      /**
       * The rules of the policy.
       */
      rules?: string;
    }
  }
  namespace PostSysQuotasConfig {
    export interface RequestBody {
      /**
       * If set, starts audit logging of requests that get rejected due to rate limit quota rule violations.
       */
      enable_rate_limit_audit_logging?: boolean;
      /**
       * If set, additional rate limit quota HTTP headers will be added to responses.
       */
      enable_rate_limit_response_headers?: boolean;
      /**
       * Specifies the list of exempt paths from all rate limit quotas. If empty no paths will be exempt.
       */
      rate_limit_exempt_paths?: string[];
    }
  }
  namespace PostSysQuotasRateLimitName {
    export interface RequestBody {
      /**
       * If set, when a client reaches a rate limit threshold, the client will be prohibited from any further requests until after the 'block_interval' has elapsed.
       */
      block_interval?: number; // seconds
      /**
       * The duration to enforce rate limiting for (default '1s').
       */
      interval?: number; // seconds
      /**
       * Path of the mount or namespace to apply the quota. A blank path configures a global quota. For example namespace1/ adds a quota to a full namespace, namespace1/auth/userpass adds a quota to userpass in namespace1.
       */
      path?: string;
      /**
       * The maximum number of requests in a given interval to be allowed by the quota rule. The 'rate' must be positive.
       */
      rate?: any; // unknown
      /**
       * Type of the quota rule.
       */
      type?: string;
    }
  }
  namespace PostSysRaw {
    export interface RequestBody {
      path?: string;
      value?: string;
    }
  }
  namespace PostSysRawPath {
    export interface RequestBody {
      value?: string;
    }
  }
  namespace PostSysRekeyInit {
    export interface RequestBody {
      /**
       * Specifies if using PGP-encrypted keys, whether Vault should also store a plaintext backup of the PGP-encrypted keys.
       */
      backup?: boolean;
      /**
       * Specifies an array of PGP public keys used to encrypt the output unseal keys. Ordering is preserved. The keys must be base64-encoded from their original binary representation. The size of this array must be the same as secret_shares.
       */
      pgp_keys?: string[];
      /**
       * Turns on verification functionality
       */
      require_verification?: boolean;
      /**
       * Specifies the number of shares to split the master key into.
       */
      secret_shares?: number;
      /**
       * Specifies the number of shares required to reconstruct the master key. This must be less than or equal secret_shares. If using Vault HSM with auto-unsealing, this value must be the same as secret_shares.
       */
      secret_threshold?: number;
    }
  }
  namespace PostSysRekeyUpdate {
    export interface RequestBody {
      /**
       * Specifies a single master key share.
       */
      key?: string;
      /**
       * Specifies the nonce of the rekey attempt.
       */
      nonce?: string;
    }
  }
  namespace PostSysRekeyVerify {
    export interface RequestBody {
      /**
       * Specifies a single master share key from the new set of shares.
       */
      key?: string;
      /**
       * Specifies the nonce of the rekey verification operation.
       */
      nonce?: string;
    }
  }
  namespace PostSysRemount {
    export interface RequestBody {
      /**
       * The previous mount point.
       */
      from?: string;
      /**
       * The new mount point.
       */
      to?: string;
    }
  }
  namespace PostSysRenew {
    export interface RequestBody {
      /**
       * The desired increment in seconds to the lease
       */
      increment?: number; // seconds
      /**
       * The lease identifier to renew. This is included with a lease.
       */
      lease_id?: string;
      /**
       * The lease identifier to renew. This is included with a lease.
       */
      url_lease_id?: string;
    }
  }
  namespace PostSysRenewUrlLeaseId {
    export interface RequestBody {
      /**
       * The desired increment in seconds to the lease
       */
      increment?: number; // seconds
      /**
       * The lease identifier to renew. This is included with a lease.
       */
      lease_id?: string;
    }
  }
  namespace PostSysRevoke {
    export interface RequestBody {
      /**
       * The lease identifier to renew. This is included with a lease.
       */
      lease_id?: string;
      /**
       * Whether or not to perform the revocation synchronously
       */
      sync?: boolean;
      /**
       * The lease identifier to renew. This is included with a lease.
       */
      url_lease_id?: string;
    }
  }
  namespace PostSysRevokePrefixPrefix {
    export interface RequestBody {
      /**
       * Whether or not to perform the revocation synchronously
       */
      sync?: boolean;
    }
  }
  namespace PostSysRevokeUrlLeaseId {
    export interface RequestBody {
      /**
       * The lease identifier to renew. This is included with a lease.
       */
      lease_id?: string;
      /**
       * Whether or not to perform the revocation synchronously
       */
      sync?: boolean;
    }
  }
  namespace PostSysToolsHash {
    export interface RequestBody {
      /**
       * Algorithm to use (POST body parameter). Valid values are: * sha2-224 * sha2-256 * sha2-384 * sha2-512 Defaults to "sha2-256".
       */
      algorithm?: string;
      /**
       * Encoding format to use. Can be "hex" or "base64". Defaults to "hex".
       */
      format?: string;
      /**
       * The base64-encoded input data
       */
      input?: string;
      /**
       * Algorithm to use (POST URL parameter)
       */
      urlalgorithm?: string;
    }
  }
  namespace PostSysToolsHashUrlalgorithm {
    export interface RequestBody {
      /**
       * Algorithm to use (POST body parameter). Valid values are: * sha2-224 * sha2-256 * sha2-384 * sha2-512 Defaults to "sha2-256".
       */
      algorithm?: string;
      /**
       * Encoding format to use. Can be "hex" or "base64". Defaults to "hex".
       */
      format?: string;
      /**
       * The base64-encoded input data
       */
      input?: string;
    }
  }
  namespace PostSysToolsRandom {
    export interface RequestBody {
      /**
       * The number of bytes to generate (POST body parameter). Defaults to 32 (256 bits).
       */
      bytes?: number;
      /**
       * Encoding format to use. Can be "hex" or "base64". Defaults to "base64".
       */
      format?: string;
      /**
       * The number of bytes to generate (POST URL parameter)
       */
      urlbytes?: string;
    }
  }
  namespace PostSysToolsRandomUrlbytes {
    export interface RequestBody {
      /**
       * The number of bytes to generate (POST body parameter). Defaults to 32 (256 bits).
       */
      bytes?: number;
      /**
       * Encoding format to use. Can be "hex" or "base64". Defaults to "base64".
       */
      format?: string;
    }
  }
  namespace PostSysUnseal {
    export interface RequestBody {
      /**
       * Specifies a single master key share. This is required unless reset is true.
       */
      key?: string;
      /**
       * Specifies if previously-provided unseal keys are discarded and the unseal process is reset.
       */
      reset?: boolean;
    }
  }
  namespace PostSysWrappingLookup {
    export interface RequestBody {
      token?: string;
    }
  }
  namespace PostSysWrappingRewrap {
    export interface RequestBody {
      token?: string;
    }
  }
  namespace PostSysWrappingUnwrap {
    export interface RequestBody {
      token?: string;
    }
  }
  namespace PostTransitCacheConfig {
    export interface RequestBody {
      /**
       * Size of cache, use 0 for an unlimited cache size, defaults to 0
       */
      size?: number;
    }
  }
  namespace PostTransitDatakeyPlaintextName {
    export interface RequestBody {
      /**
       * Number of bits for the key; currently 128, 256, and 512 bits are supported. Defaults to 256.
       */
      bits?: number;
      /**
       * Context for key derivation. Required for derived keys.
       */
      context?: string;
      /**
       * The version of the Vault key to use for encryption of the data key. Must be 0 (for latest) or a value greater than or equal to the min_encryption_version configured on the key.
       */
      key_version?: number;
      /**
       * Nonce for when convergent encryption v1 is used (only in Vault 0.6.1)
       */
      nonce?: string;
    }
  }
  namespace PostTransitDecryptName {
    export interface RequestBody {
      /**
       * The ciphertext to decrypt, provided as returned by encrypt.
       */
      ciphertext?: string;
      /**
       * Base64 encoded context for key derivation. Required if key derivation is enabled.
       */
      context?: string;
      /**
       * Base64 encoded nonce value used during encryption. Must be provided if convergent encryption is enabled for this key and the key was generated with Vault 0.6.1. Not required for keys created in 0.6.2+.
       */
      nonce?: string;
    }
  }
  namespace PostTransitEncryptName {
    export interface RequestBody {
      /**
       * Base64 encoded context for key derivation. Required if key derivation is enabled
       */
      context?: string;
      /**
       * This parameter will only be used when a key is expected to be created. Whether to support convergent encryption. This is only supported when using a key with key derivation enabled and will require all requests to carry both a context and 96-bit (12-byte) nonce. The given nonce will be used in place of a randomly generated nonce. As a result, when the same context and nonce are supplied, the same ciphertext is generated. It is *very important* when using this mode that you ensure that all nonces are unique for a given context. Failing to do so will severely impact the ciphertext's security.
       */
      convergent_encryption?: boolean;
      /**
       * The version of the key to use for encryption. Must be 0 (for latest) or a value greater than or equal to the min_encryption_version configured on the key.
       */
      key_version?: number;
      /**
       * Base64 encoded nonce value. Must be provided if convergent encryption is enabled for this key and the key was generated with Vault 0.6.1. Not required for keys created in 0.6.2+. The value must be exactly 96 bits (12 bytes) long and the user must ensure that for any given context (and thus, any given encryption key) this nonce value is **never reused**.
       */
      nonce?: string;
      /**
       * Base64 encoded plaintext value to be encrypted
       */
      plaintext?: string;
      /**
       * This parameter is required when encryption key is expected to be created. When performing an upsert operation, the type of key to create. Currently, "aes128-gcm96" (symmetric) and "aes256-gcm96" (symmetric) are the only types supported. Defaults to "aes256-gcm96".
       */
      type?: string;
    }
  }
  namespace PostTransitHash {
    export interface RequestBody {
      /**
       * Algorithm to use (POST body parameter). Valid values are: * sha2-224 * sha2-256 * sha2-384 * sha2-512 Defaults to "sha2-256".
       */
      algorithm?: string;
      /**
       * Encoding format to use. Can be "hex" or "base64". Defaults to "hex".
       */
      format?: string;
      /**
       * The base64-encoded input data
       */
      input?: string;
      /**
       * Algorithm to use (POST URL parameter)
       */
      urlalgorithm?: string;
    }
  }
  namespace PostTransitHashUrlalgorithm {
    export interface RequestBody {
      /**
       * Algorithm to use (POST body parameter). Valid values are: * sha2-224 * sha2-256 * sha2-384 * sha2-512 Defaults to "sha2-256".
       */
      algorithm?: string;
      /**
       * Encoding format to use. Can be "hex" or "base64". Defaults to "hex".
       */
      format?: string;
      /**
       * The base64-encoded input data
       */
      input?: string;
    }
  }
  namespace PostTransitHmacName {
    export interface RequestBody {
      /**
       * Algorithm to use (POST body parameter). Valid values are: * sha2-224 * sha2-256 * sha2-384 * sha2-512 Defaults to "sha2-256".
       */
      algorithm?: string;
      /**
       * The base64-encoded input data
       */
      input?: string;
      /**
       * The version of the key to use for generating the HMAC. Must be 0 (for latest) or a value greater than or equal to the min_encryption_version configured on the key.
       */
      key_version?: number;
      /**
       * Algorithm to use (POST URL parameter)
       */
      urlalgorithm?: string;
    }
    namespace Responses {
      export interface $200 {
        data?: {
          hmac?: string;
        };
      }
    }
  }
  namespace PostTransitHmacNameUrlalgorithm {
    export interface RequestBody {
      /**
       * Algorithm to use (POST body parameter). Valid values are: * sha2-224 * sha2-256 * sha2-384 * sha2-512 Defaults to "sha2-256".
       */
      algorithm?: string;
      /**
       * The base64-encoded input data
       */
      input?: string;
      /**
       * The version of the key to use for generating the HMAC. Must be 0 (for latest) or a value greater than or equal to the min_encryption_version configured on the key.
       */
      key_version?: number;
    }
    namespace Responses {
      export interface $200 {
        data?: {
          hmac?: string;
        };
      }
    }
  }
  namespace PostTransitKeysName {
    export interface RequestBody {
      /**
       * Enables taking a backup of the named key in plaintext format. Once set, this cannot be disabled.
       */
      allow_plaintext_backup?: boolean;
      /**
       * Base64 encoded context for key derivation. When reading a key with key derivation enabled, if the key type supports public keys, this will return the public key for the given context.
       */
      context?: string;
      /**
       * Whether to support convergent encryption. This is only supported when using a key with key derivation enabled and will require all requests to carry both a context and 96-bit (12-byte) nonce. The given nonce will be used in place of a randomly generated nonce. As a result, when the same context and nonce are supplied, the same ciphertext is generated. It is *very important* when using this mode that you ensure that all nonces are unique for a given context. Failing to do so will severely impact the ciphertext's security.
       */
      convergent_encryption?: boolean;
      /**
       * Enables key derivation mode. This allows for per-transaction unique keys for encryption operations.
       */
      derived?: boolean;
      /**
       * Enables keys to be exportable. This allows for all the valid keys in the key ring to be exported.
       */
      exportable?: boolean;
      /**
       * The type of key to create. Currently, "aes128-gcm96" (symmetric), "aes256-gcm96" (symmetric), "ecdsa-p256" (asymmetric), "ecdsa-p384" (asymmetric), "ecdsa-p521" (asymmetric), "ed25519" (asymmetric), "rsa-2048" (asymmetric), "rsa-3072" (asymmetric), "rsa-4096" (asymmetric) are supported. Defaults to "aes256-gcm96".
       */
      type?: string;
    }
  }
  namespace PostTransitKeysNameConfig {
    export interface RequestBody {
      /**
       * Enables taking a backup of the named key in plaintext format. Once set, this cannot be disabled.
       */
      allow_plaintext_backup?: boolean;
      /**
       * Whether to allow deletion of the key
       */
      deletion_allowed?: boolean;
      /**
       * Enables export of the key. Once set, this cannot be disabled.
       */
      exportable?: boolean;
      /**
       * If set, the minimum version of the key allowed to be decrypted. For signing keys, the minimum version allowed to be used for verification.
       */
      min_decryption_version?: number;
      /**
       * If set, the minimum version of the key allowed to be used for encryption; or for signing keys, to be used for signing. If set to zero, only the latest version of the key is allowed.
       */
      min_encryption_version?: number;
    }
  }
  namespace PostTransitKeysNameTrim {
    export interface RequestBody {
      /**
       * The minimum available version for the key ring. All versions before this version will be permanently deleted. This value can at most be equal to the lesser of 'min_decryption_version' and 'min_encryption_version'. This is not allowed to be set when either 'min_encryption_version' or 'min_decryption_version' is set to zero.
       */
      min_available_version?: number;
    }
  }
  namespace PostTransitRandom {
    export interface RequestBody {
      /**
       * The number of bytes to generate (POST body parameter). Defaults to 32 (256 bits).
       */
      bytes?: number;
      /**
       * Encoding format to use. Can be "hex" or "base64". Defaults to "base64".
       */
      format?: string;
      /**
       * The number of bytes to generate (POST URL parameter)
       */
      urlbytes?: string;
    }
  }
  namespace PostTransitRandomUrlbytes {
    export interface RequestBody {
      /**
       * The number of bytes to generate (POST body parameter). Defaults to 32 (256 bits).
       */
      bytes?: number;
      /**
       * Encoding format to use. Can be "hex" or "base64". Defaults to "base64".
       */
      format?: string;
    }
  }
  namespace PostTransitRestore {
    export interface RequestBody {
      /**
       * Backed up key data to be restored. This should be the output from the 'backup/' endpoint.
       */
      backup?: string;
      /**
       * If set and a key by the given name exists, force the restore operation and override the key.
       */
      force?: boolean;
      /**
       * If set, this will be the name of the restored key.
       */
      name?: string;
    }
  }
  namespace PostTransitRestoreName {
    export interface RequestBody {
      /**
       * Backed up key data to be restored. This should be the output from the 'backup/' endpoint.
       */
      backup?: string;
      /**
       * If set and a key by the given name exists, force the restore operation and override the key.
       */
      force?: boolean;
    }
  }
  namespace PostTransitRewrapName {
    export interface RequestBody {
      /**
       * Ciphertext value to rewrap
       */
      ciphertext?: string;
      /**
       * Base64 encoded context for key derivation. Required for derived keys.
       */
      context?: string;
      /**
       * The version of the key to use for encryption. Must be 0 (for latest) or a value greater than or equal to the min_encryption_version configured on the key.
       */
      key_version?: number;
      /**
       * Nonce for when convergent encryption is used
       */
      nonce?: string;
    }
  }
  namespace PostTransitSignName {
    export interface RequestBody {
      /**
       * Deprecated: use "hash_algorithm" instead.
       */
      algorithm?: string;
      /**
       * Base64 encoded context for key derivation. Required if key derivation is enabled; currently only available with ed25519 keys.
       */
      context?: string;
      /**
       * Hash algorithm to use (POST body parameter). Valid values are: * sha1 * sha2-224 * sha2-256 * sha2-384 * sha2-512 Defaults to "sha2-256". Not valid for all key types, including ed25519.
       */
      hash_algorithm?: string;
      /**
       * The base64-encoded input data
       */
      input?: string;
      /**
       * The version of the key to use for signing. Must be 0 (for latest) or a value greater than or equal to the min_encryption_version configured on the key.
       */
      key_version?: number;
      /**
       * The method by which to marshal the signature. The default is 'asn1' which is used by openssl and X.509. It can also be set to 'jws' which is used for JWT signatures; setting it to this will also cause the encoding of the signature to be url-safe base64 instead of using standard base64 encoding. Currently only valid for ECDSA P-256 key types".
       */
      marshaling_algorithm?: string;
      /**
       * Set to 'true' when the input is already hashed. If the key type is 'rsa-2048', 'rsa-3072' or 'rsa-4096', then the algorithm used to hash the input should be indicated by the 'algorithm' parameter.
       */
      prehashed?: boolean;
      /**
       * The signature algorithm to use for signing. Currently only applies to RSA key types. Options are 'pss' or 'pkcs1v15'. Defaults to 'pss'
       */
      signature_algorithm?: string;
      /**
       * Hash algorithm to use (POST URL parameter)
       */
      urlalgorithm?: string;
    }
    namespace Responses {
      export interface $200 {
        data?: {
          signature?: string;
        };
      }
    }
  }
  namespace PostTransitSignNameUrlalgorithm {
    export interface RequestBody {
      /**
       * Deprecated: use "hash_algorithm" instead.
       */
      algorithm?: string;
      /**
       * Base64 encoded context for key derivation. Required if key derivation is enabled; currently only available with ed25519 keys.
       */
      context?: string;
      /**
       * Hash algorithm to use (POST body parameter). Valid values are: * sha1 * sha2-224 * sha2-256 * sha2-384 * sha2-512 Defaults to "sha2-256". Not valid for all key types, including ed25519.
       */
      hash_algorithm?: string;
      /**
       * The base64-encoded input data
       */
      input?: string;
      /**
       * The version of the key to use for signing. Must be 0 (for latest) or a value greater than or equal to the min_encryption_version configured on the key.
       */
      key_version?: number;
      /**
       * The method by which to marshal the signature. The default is 'asn1' which is used by openssl and X.509. It can also be set to 'jws' which is used for JWT signatures; setting it to this will also cause the encoding of the signature to be url-safe base64 instead of using standard base64 encoding. Currently only valid for ECDSA P-256 key types".
       */
      marshaling_algorithm?: string;
      /**
       * Set to 'true' when the input is already hashed. If the key type is 'rsa-2048', 'rsa-3072' or 'rsa-4096', then the algorithm used to hash the input should be indicated by the 'algorithm' parameter.
       */
      prehashed?: boolean;
      /**
       * The signature algorithm to use for signing. Currently only applies to RSA key types. Options are 'pss' or 'pkcs1v15'. Defaults to 'pss'
       */
      signature_algorithm?: string;
    }
  }
  namespace PostTransitVerifyName {
    export interface RequestBody {
      /**
       * Deprecated: use "hash_algorithm" instead.
       */
      algorithm?: string;
      /**
       * Base64 encoded context for key derivation. Required if key derivation is enabled; currently only available with ed25519 keys.
       */
      context?: string;
      /**
       * Hash algorithm to use (POST body parameter). Valid values are: * sha1 * sha2-224 * sha2-256 * sha2-384 * sha2-512 Defaults to "sha2-256". Not valid for all key types.
       */
      hash_algorithm?: string;
      /**
       * The HMAC, including vault header/key version
       */
      hmac?: string;
      /**
       * The base64-encoded input data to verify
       */
      input?: string;
      /**
       * The method by which to unmarshal the signature when verifying. The default is 'asn1' which is used by openssl and X.509; can also be set to 'jws' which is used for JWT signatures in which case the signature is also expected to be url-safe base64 encoding instead of standard base64 encoding. Currently only valid for ECDSA P-256 key types".
       */
      marshaling_algorithm?: string;
      /**
       * Set to 'true' when the input is already hashed. If the key type is 'rsa-2048', 'rsa-3072' or 'rsa-4096', then the algorithm used to hash the input should be indicated by the 'algorithm' parameter.
       */
      prehashed?: boolean;
      /**
       * The signature, including vault header/key version
       */
      signature?: string;
      /**
       * The signature algorithm to use for signature verification. Currently only applies to RSA key types. Options are 'pss' or 'pkcs1v15'. Defaults to 'pss'
       */
      signature_algorithm?: string;
      /**
       * Hash algorithm to use (POST URL parameter)
       */
      urlalgorithm?: string;
    }
    namespace Responses {
      export interface $200 {
        data?: {
          valid?: boolean;
        };
      }
    }
  }
  namespace PostTransitVerifyNameUrlalgorithm {
    export interface RequestBody {
      /**
       * Deprecated: use "hash_algorithm" instead.
       */
      algorithm?: string;
      /**
       * Base64 encoded context for key derivation. Required if key derivation is enabled; currently only available with ed25519 keys.
       */
      context?: string;
      /**
       * Hash algorithm to use (POST body parameter). Valid values are: * sha1 * sha2-224 * sha2-256 * sha2-384 * sha2-512 Defaults to "sha2-256". Not valid for all key types.
       */
      hash_algorithm?: string;
      /**
       * The HMAC, including vault header/key version
       */
      hmac?: string;
      /**
       * The base64-encoded input data to verify
       */
      input?: string;
      /**
       * The method by which to unmarshal the signature when verifying. The default is 'asn1' which is used by openssl and X.509; can also be set to 'jws' which is used for JWT signatures in which case the signature is also expected to be url-safe base64 encoding instead of standard base64 encoding. Currently only valid for ECDSA P-256 key types".
       */
      marshaling_algorithm?: string;
      /**
       * Set to 'true' when the input is already hashed. If the key type is 'rsa-2048', 'rsa-3072' or 'rsa-4096', then the algorithm used to hash the input should be indicated by the 'algorithm' parameter.
       */
      prehashed?: boolean;
      /**
       * The signature, including vault header/key version
       */
      signature?: string;
      /**
       * The signature algorithm to use for signature verification. Currently only applies to RSA key types. Options are 'pss' or 'pkcs1v15'. Defaults to 'pss'
       */
      signature_algorithm?: string;
    }
  }
  namespace SecretData$Path {
    namespace Parameters {
      export type Path = string;
    }
    export interface PathParameters {
      path: Parameters.Path;
    }
  }
  namespace SecretDelete$Path {
    namespace Parameters {
      export type Path = string;
    }
    export interface PathParameters {
      path: Parameters.Path;
    }
  }
  namespace SecretDestroy$Path {
    namespace Parameters {
      export type Path = string;
    }
    export interface PathParameters {
      path: Parameters.Path;
    }
  }
  namespace SecretMetadata$Path {
    namespace Parameters {
      export type Path = string;
    }
    export interface PathParameters {
      path: Parameters.Path;
    }
  }
  namespace SecretUndelete$Path {
    namespace Parameters {
      export type Path = string;
    }
    export interface PathParameters {
      path: Parameters.Path;
    }
  }
  namespace SysAudit$Path {
    namespace Parameters {
      export type Path = string;
    }
    export interface PathParameters {
      path: Parameters.Path;
    }
  }
  namespace SysAuditHash$Path {
    namespace Parameters {
      export type Path = string;
    }
    export interface PathParameters {
      path: Parameters.Path;
    }
  }
  namespace SysAuth$Path {
    namespace Parameters {
      export type Path = string;
    }
    export interface PathParameters {
      path: Parameters.Path;
    }
  }
  namespace SysAuth$PathTune {
    namespace Parameters {
      export type Path = string;
    }
    export interface PathParameters {
      path: Parameters.Path;
    }
  }
  namespace SysConfigAuditingRequestHeaders$Header {
    namespace Parameters {
      export type Header = string;
    }
    export interface PathParameters {
      header: Parameters.Header;
    }
  }
  namespace SysConfigUiHeaders$Header {
    namespace Parameters {
      export type Header = string;
    }
    export interface PathParameters {
      header: Parameters.Header;
    }
  }
  namespace SysInternalUiMounts$Path {
    namespace Parameters {
      export type Path = string;
    }
    export interface PathParameters {
      path: Parameters.Path;
    }
  }
  namespace SysLeasesLookup$Prefix {
    namespace Parameters {
      export type Prefix = string;
    }
    export interface PathParameters {
      prefix: Parameters.Prefix;
    }
  }
  namespace SysLeasesRenew$UrlLeaseId {
    namespace Parameters {
      export type UrlLeaseId = string;
    }
    export interface PathParameters {
      url_lease_id: Parameters.UrlLeaseId;
    }
  }
  namespace SysLeasesRevoke$UrlLeaseId {
    namespace Parameters {
      export type UrlLeaseId = string;
    }
    export interface PathParameters {
      url_lease_id: Parameters.UrlLeaseId;
    }
  }
  namespace SysLeasesRevokeForce$Prefix {
    namespace Parameters {
      export type Prefix = string;
    }
    export interface PathParameters {
      prefix: Parameters.Prefix;
    }
  }
  namespace SysLeasesRevokePrefix$Prefix {
    namespace Parameters {
      export type Prefix = string;
    }
    export interface PathParameters {
      prefix: Parameters.Prefix;
    }
  }
  namespace SysMetrics {
    namespace Parameters {
      export type Format = string;
    }
    export interface QueryParameters {
      format?: Parameters.Format;
    }
  }
  namespace SysMonitor {
    namespace Parameters {
      export type LogLevel = string;
    }
    export interface QueryParameters {
      log_level?: Parameters.LogLevel;
    }
  }
  namespace SysMounts$Path {
    namespace Parameters {
      export type Path = string;
    }
    export interface PathParameters {
      path: Parameters.Path;
    }
  }
  namespace SysMounts$PathTune {
    namespace Parameters {
      export type Path = string;
    }
    export interface PathParameters {
      path: Parameters.Path;
    }
  }
  namespace SysPluginsCatalog$Name {
    namespace Parameters {
      export type Name = string;
    }
    export interface PathParameters {
      name: Parameters.Name;
    }
  }
  namespace SysPluginsCatalog$Type {
    namespace Parameters {
      export type Type = string;
    }
    export interface PathParameters {
      type: Parameters.Type;
    }
  }
  namespace SysPluginsCatalog$TypeName {
    namespace Parameters {
      export type Name = string;
      export type Type = string;
    }
    export interface PathParameters {
      name: Parameters.Name;
      type: Parameters.Type;
    }
  }
  namespace SysPoliciesAcl$Name {
    namespace Parameters {
      export type Name = string;
    }
    export interface PathParameters {
      name: Parameters.Name;
    }
  }
  namespace SysPoliciesPassword$Name {
    namespace Parameters {
      export type Name = string;
    }
    export interface PathParameters {
      name: Parameters.Name;
    }
  }
  namespace SysPoliciesPassword$NameGenerate {
    namespace Parameters {
      export type Name = string;
    }
    export interface PathParameters {
      name: Parameters.Name;
    }
  }
  namespace SysPolicy$Name {
    namespace Parameters {
      export type Name = string;
    }
    export interface PathParameters {
      name: Parameters.Name;
    }
  }
  namespace SysQuotasRateLimit$Name {
    namespace Parameters {
      export type Name = string;
    }
    export interface PathParameters {
      name: Parameters.Name;
    }
  }
  namespace SysRaw$Path {
    namespace Parameters {
      export type Path = string;
    }
    export interface PathParameters {
      path: Parameters.Path;
    }
  }
  namespace SysRenew$UrlLeaseId {
    namespace Parameters {
      export type UrlLeaseId = string;
    }
    export interface PathParameters {
      url_lease_id: Parameters.UrlLeaseId;
    }
  }
  namespace SysRevoke$UrlLeaseId {
    namespace Parameters {
      export type UrlLeaseId = string;
    }
    export interface PathParameters {
      url_lease_id: Parameters.UrlLeaseId;
    }
  }
  namespace SysRevokeForce$Prefix {
    namespace Parameters {
      export type Prefix = string;
    }
    export interface PathParameters {
      prefix: Parameters.Prefix;
    }
  }
  namespace SysRevokePrefix$Prefix {
    namespace Parameters {
      export type Prefix = string;
    }
    export interface PathParameters {
      prefix: Parameters.Prefix;
    }
  }
  namespace SysToolsHash$Urlalgorithm {
    namespace Parameters {
      export type Urlalgorithm = string;
    }
    export interface PathParameters {
      urlalgorithm: Parameters.Urlalgorithm;
    }
  }
  namespace SysToolsRandom$Urlbytes {
    namespace Parameters {
      export type Urlbytes = string;
    }
    export interface PathParameters {
      urlbytes: Parameters.Urlbytes;
    }
  }
  namespace TransitBackup$Name {
    namespace Parameters {
      export type Name = string;
    }
    export interface PathParameters {
      name: Parameters.Name;
    }
  }
  namespace TransitDatakey$PlaintextName {
    namespace Parameters {
      export type Name = string;
      export type Plaintext = string;
    }
    export interface PathParameters {
      name: Parameters.Name;
      plaintext: Parameters.Plaintext;
    }
  }
  namespace TransitDecrypt$Name {
    namespace Parameters {
      export type Name = string;
    }
    export interface PathParameters {
      name: Parameters.Name;
    }
  }
  namespace TransitEncrypt$Name {
    namespace Parameters {
      export type Name = string;
    }
    export interface PathParameters {
      name: Parameters.Name;
    }
  }
  namespace TransitExport$TypeName {
    namespace Parameters {
      export type Name = string;
      export type Type = string;
    }
    export interface PathParameters {
      name: Parameters.Name;
      type: Parameters.Type;
    }
  }
  namespace TransitExport$TypeNameVersion {
    namespace Parameters {
      export type Name = string;
      export type Type = string;
      export type Version = string;
    }
    export interface PathParameters {
      name: Parameters.Name;
      type: Parameters.Type;
      version: Parameters.Version;
    }
  }
  namespace TransitHash$Urlalgorithm {
    namespace Parameters {
      export type Urlalgorithm = string;
    }
    export interface PathParameters {
      urlalgorithm: Parameters.Urlalgorithm;
    }
  }
  namespace TransitHmac$Name {
    namespace Parameters {
      export type Name = string;
    }
    export interface PathParameters {
      name: Parameters.Name;
    }
  }
  namespace TransitHmac$NameUrlalgorithm {
    namespace Parameters {
      export type Name = string;
      export type Urlalgorithm = string;
    }
    export interface PathParameters {
      name: Parameters.Name;
      urlalgorithm: Parameters.Urlalgorithm;
    }
  }
  namespace TransitKeys$Name {
    namespace Parameters {
      export type Name = string;
    }
    export interface PathParameters {
      name: Parameters.Name;
    }
  }
  namespace TransitKeys$NameConfig {
    namespace Parameters {
      export type Name = string;
    }
    export interface PathParameters {
      name: Parameters.Name;
    }
  }
  namespace TransitKeys$NameRotate {
    namespace Parameters {
      export type Name = string;
    }
    export interface PathParameters {
      name: Parameters.Name;
    }
  }
  namespace TransitKeys$NameTrim {
    namespace Parameters {
      export type Name = string;
    }
    export interface PathParameters {
      name: Parameters.Name;
    }
  }
  namespace TransitRandom$Urlbytes {
    namespace Parameters {
      export type Urlbytes = string;
    }
    export interface PathParameters {
      urlbytes: Parameters.Urlbytes;
    }
  }
  namespace TransitRestore$Name {
    namespace Parameters {
      export type Name = string;
    }
    export interface PathParameters {
      name: Parameters.Name;
    }
  }
  namespace TransitRewrap$Name {
    namespace Parameters {
      export type Name = string;
    }
    export interface PathParameters {
      name: Parameters.Name;
    }
  }
  namespace TransitSign$Name {
    namespace Parameters {
      export type Name = string;
    }
    export interface PathParameters {
      name: Parameters.Name;
    }
  }
  namespace TransitSign$NameUrlalgorithm {
    namespace Parameters {
      export type Name = string;
      export type Urlalgorithm = string;
    }
    export interface PathParameters {
      name: Parameters.Name;
      urlalgorithm: Parameters.Urlalgorithm;
    }
  }
  namespace TransitVerify$Name {
    namespace Parameters {
      export type Name = string;
    }
    export interface PathParameters {
      name: Parameters.Name;
    }
  }
  namespace TransitVerify$NameUrlalgorithm {
    namespace Parameters {
      export type Name = string;
      export type Urlalgorithm = string;
    }
    export interface PathParameters {
      name: Parameters.Name;
      urlalgorithm: Parameters.Urlalgorithm;
    }
  }
}

export interface OperationMethods {
  /**
   * getAuthTokenAccessors - List token accessors, which can then be
   * be used to iterate and discover their properties
   * or revoke them. Because this can be used to
   * cause a denial of service, this endpoint
   * requires 'sudo' capability in addition to
   * 'list'.
   */
  'getAuthTokenAccessors'(
    parameters?: Parameters<Paths.GetAuthTokenAccessors.QueryParameters>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postAuthTokenCreate - The token create path is used to create new tokens.
   */
  'postAuthTokenCreate'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postAuthTokenCreateOrphan - The token create path is used to create new orphan tokens.
   */
  'postAuthTokenCreateOrphan'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postAuthTokenCreateRole_name - This token create path is used to create new tokens adhering to the given role.
   */
  'postAuthTokenCreateRole_name'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getAuthTokenLookup - This endpoint will lookup a token and its properties.
   */
  'getAuthTokenLookup'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postAuthTokenLookup - This endpoint will lookup a token and its properties.
   */
  'postAuthTokenLookup'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostAuthTokenLookup.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postAuthTokenLookupAccessor - This endpoint will lookup a token associated with the given accessor and its properties. Response will not contain the token ID.
   */
  'postAuthTokenLookupAccessor'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostAuthTokenLookupAccessor.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getAuthTokenLookupSelf - This endpoint will lookup a token and its properties.
   */
  'getAuthTokenLookupSelf'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postAuthTokenLookupSelf - This endpoint will lookup a token and its properties.
   */
  'postAuthTokenLookupSelf'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostAuthTokenLookupSelf.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postAuthTokenRenew - This endpoint will renew the given token and prevent expiration.
   */
  'postAuthTokenRenew'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostAuthTokenRenew.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postAuthTokenRenewAccessor - This endpoint will renew a token associated with the given accessor and its properties. Response will not contain the token ID.
   */
  'postAuthTokenRenewAccessor'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostAuthTokenRenewAccessor.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postAuthTokenRenewSelf - This endpoint will renew the token used to call it and prevent expiration.
   */
  'postAuthTokenRenewSelf'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostAuthTokenRenewSelf.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postAuthTokenRevoke - This endpoint will delete the given token and all of its child tokens.
   */
  'postAuthTokenRevoke'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostAuthTokenRevoke.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postAuthTokenRevokeAccessor - This endpoint will delete the token associated with the accessor and all of its child tokens.
   */
  'postAuthTokenRevokeAccessor'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostAuthTokenRevokeAccessor.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postAuthTokenRevokeOrphan - This endpoint will delete the token and orphan its child tokens.
   */
  'postAuthTokenRevokeOrphan'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostAuthTokenRevokeOrphan.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postAuthTokenRevokeSelf - This endpoint will delete the token used to call it and all of its child tokens.
   */
  'postAuthTokenRevokeSelf'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getAuthTokenRoles - This endpoint lists configured roles.
   */
  'getAuthTokenRoles'(
    parameters?: Parameters<Paths.GetAuthTokenRoles.QueryParameters>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getAuthTokenRolesRole_name
   */
  'getAuthTokenRolesRole_name'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postAuthTokenRolesRole_name
   */
  'postAuthTokenRolesRole_name'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostAuthTokenRolesRoleName.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * deleteAuthTokenRolesRole_name
   */
  'deleteAuthTokenRolesRole_name'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postAuthTokenTidy - This endpoint performs cleanup tasks that can be run if certain error
   * conditions have occurred.
   */
  'postAuthTokenTidy'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getCubbyholePath - Retrieve the secret at the specified location.
   */
  'getCubbyholePath'(
    parameters?: Parameters<Paths.GetCubbyholePath.QueryParameters>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postCubbyholePath - Store a secret at the specified location.
   */
  'postCubbyholePath'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * deleteCubbyholePath - Deletes the secret at the specified location.
   */
  'deleteCubbyholePath'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postIdentityAlias - Create a new alias.
   */
  'postIdentityAlias'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostIdentityAlias.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getIdentityAliasId - List all the alias IDs.
   */
  'getIdentityAliasId'(
    parameters?: Parameters<Paths.GetIdentityAliasId.QueryParameters>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getIdentityAliasIdId - Update, read or delete an alias ID.
   */
  'getIdentityAliasIdId'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postIdentityAliasIdId - Update, read or delete an alias ID.
   */
  'postIdentityAliasIdId'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostIdentityAliasIdId.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * deleteIdentityAliasIdId - Update, read or delete an alias ID.
   */
  'deleteIdentityAliasIdId'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postIdentityEntity - Create a new entity
   */
  'postIdentityEntity'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostIdentityEntity.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postIdentityEntityAlias - Create a new alias.
   */
  'postIdentityEntityAlias'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostIdentityEntityAlias.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getIdentityEntityAliasId - List all the alias IDs.
   */
  'getIdentityEntityAliasId'(
    parameters?: Parameters<Paths.GetIdentityEntityAliasId.QueryParameters>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getIdentityEntityAliasIdId - Update, read or delete an alias ID.
   */
  'getIdentityEntityAliasIdId'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postIdentityEntityAliasIdId - Update, read or delete an alias ID.
   */
  'postIdentityEntityAliasIdId'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostIdentityEntityAliasIdId.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * deleteIdentityEntityAliasIdId - Update, read or delete an alias ID.
   */
  'deleteIdentityEntityAliasIdId'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postIdentityEntityBatchDelete - Delete all of the entities provided
   */
  'postIdentityEntityBatchDelete'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostIdentityEntityBatchDelete.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getIdentityEntityId - List all the entity IDs
   */
  'getIdentityEntityId'(
    parameters?: Parameters<Paths.GetIdentityEntityId.QueryParameters>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getIdentityEntityIdId - Update, read or delete an entity using entity ID
   */
  'getIdentityEntityIdId'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postIdentityEntityIdId - Update, read or delete an entity using entity ID
   */
  'postIdentityEntityIdId'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostIdentityEntityIdId.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * deleteIdentityEntityIdId - Update, read or delete an entity using entity ID
   */
  'deleteIdentityEntityIdId'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postIdentityEntityMerge - Merge two or more entities together
   */
  'postIdentityEntityMerge'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostIdentityEntityMerge.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getIdentityEntityName - List all the entity names
   */
  'getIdentityEntityName'(
    parameters?: Parameters<Paths.GetIdentityEntityName.QueryParameters>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getIdentityEntityNameName - Update, read or delete an entity using entity name
   */
  'getIdentityEntityNameName'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postIdentityEntityNameName - Update, read or delete an entity using entity name
   */
  'postIdentityEntityNameName'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostIdentityEntityNameName.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * deleteIdentityEntityNameName - Update, read or delete an entity using entity name
   */
  'deleteIdentityEntityNameName'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postIdentityGroup - Create a new group.
   */
  'postIdentityGroup'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostIdentityGroup.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postIdentityGroupAlias - Creates a new group alias, or updates an existing one.
   */
  'postIdentityGroupAlias'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostIdentityGroupAlias.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getIdentityGroupAliasId - List all the group alias IDs.
   */
  'getIdentityGroupAliasId'(
    parameters?: Parameters<Paths.GetIdentityGroupAliasId.QueryParameters>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getIdentityGroupAliasIdId
   */
  'getIdentityGroupAliasIdId'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postIdentityGroupAliasIdId
   */
  'postIdentityGroupAliasIdId'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostIdentityGroupAliasIdId.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * deleteIdentityGroupAliasIdId
   */
  'deleteIdentityGroupAliasIdId'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getIdentityGroupId - List all the group IDs.
   */
  'getIdentityGroupId'(
    parameters?: Parameters<Paths.GetIdentityGroupId.QueryParameters>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getIdentityGroupIdId - Update or delete an existing group using its ID.
   */
  'getIdentityGroupIdId'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postIdentityGroupIdId - Update or delete an existing group using its ID.
   */
  'postIdentityGroupIdId'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostIdentityGroupIdId.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * deleteIdentityGroupIdId - Update or delete an existing group using its ID.
   */
  'deleteIdentityGroupIdId'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getIdentityGroupName
   */
  'getIdentityGroupName'(
    parameters?: Parameters<Paths.GetIdentityGroupName.QueryParameters>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getIdentityGroupNameName
   */
  'getIdentityGroupNameName'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postIdentityGroupNameName
   */
  'postIdentityGroupNameName'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostIdentityGroupNameName.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * deleteIdentityGroupNameName
   */
  'deleteIdentityGroupNameName'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postIdentityLookupEntity - Query entities based on various properties.
   */
  'postIdentityLookupEntity'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostIdentityLookupEntity.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postIdentityLookupGroup - Query groups based on various properties.
   */
  'postIdentityLookupGroup'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostIdentityLookupGroup.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getIdentityOidcWellKnownKeys - Retrieve public keys
   */
  'getIdentityOidcWellKnownKeys'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getIdentityOidcWellKnownOpenidConfiguration - Query OIDC configurations
   */
  'getIdentityOidcWellKnownOpenidConfiguration'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getIdentityOidcConfig - OIDC configuration
   */
  'getIdentityOidcConfig'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postIdentityOidcConfig - OIDC configuration
   */
  'postIdentityOidcConfig'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostIdentityOidcConfig.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postIdentityOidcIntrospect - Verify the authenticity of an OIDC token
   */
  'postIdentityOidcIntrospect'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostIdentityOidcIntrospect.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getIdentityOidcKey - List OIDC keys
   */
  'getIdentityOidcKey'(
    parameters?: Parameters<Paths.GetIdentityOidcKey.QueryParameters>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getIdentityOidcKeyName - CRUD operations for OIDC keys.
   */
  'getIdentityOidcKeyName'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postIdentityOidcKeyName - CRUD operations for OIDC keys.
   */
  'postIdentityOidcKeyName'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostIdentityOidcKeyName.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * deleteIdentityOidcKeyName - CRUD operations for OIDC keys.
   */
  'deleteIdentityOidcKeyName'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postIdentityOidcKeyNameRotate - Rotate a named OIDC key.
   */
  'postIdentityOidcKeyNameRotate'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostIdentityOidcKeyNameRotate.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getIdentityOidcRole - List configured OIDC roles
   */
  'getIdentityOidcRole'(
    parameters?: Parameters<Paths.GetIdentityOidcRole.QueryParameters>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getIdentityOidcRoleName - CRUD operations on OIDC Roles
   */
  'getIdentityOidcRoleName'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postIdentityOidcRoleName - CRUD operations on OIDC Roles
   */
  'postIdentityOidcRoleName'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostIdentityOidcRoleName.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * deleteIdentityOidcRoleName - CRUD operations on OIDC Roles
   */
  'deleteIdentityOidcRoleName'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getIdentityOidcTokenName - Generate an OIDC token
   */
  'getIdentityOidcTokenName'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postIdentityPersona - Create a new alias.
   */
  'postIdentityPersona'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostIdentityPersona.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getIdentityPersonaId - List all the alias IDs.
   */
  'getIdentityPersonaId'(
    parameters?: Parameters<Paths.GetIdentityPersonaId.QueryParameters>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getIdentityPersonaIdId - Update, read or delete an alias ID.
   */
  'getIdentityPersonaIdId'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postIdentityPersonaIdId - Update, read or delete an alias ID.
   */
  'postIdentityPersonaIdId'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostIdentityPersonaIdId.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * deleteIdentityPersonaIdId - Update, read or delete an alias ID.
   */
  'deleteIdentityPersonaIdId'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getSecretConfig - Read the backend level settings.
   */
  'getSecretConfig'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postSecretConfig - Configure backend level settings that are applied to every key in the key-value store.
   */
  'postSecretConfig'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostSecretConfig.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getSecretDataPath - Write, Read, and Delete data in the Key-Value Store.
   */
  'getSecretDataPath'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postSecretDataPath - Write, Read, and Delete data in the Key-Value Store.
   */
  'postSecretDataPath'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostSecretDataPath.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * deleteSecretDataPath - Write, Read, and Delete data in the Key-Value Store.
   */
  'deleteSecretDataPath'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postSecretDeletePath - Marks one or more versions as deleted in the KV store.
   */
  'postSecretDeletePath'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostSecretDeletePath.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postSecretDestroyPath - Permanently removes one or more versions in the KV store
   */
  'postSecretDestroyPath'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostSecretDestroyPath.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getSecretMetadataPath - Configures settings for the KV store
   */
  'getSecretMetadataPath'(
    parameters?: Parameters<Paths.GetSecretMetadataPath.QueryParameters>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postSecretMetadataPath - Configures settings for the KV store
   */
  'postSecretMetadataPath'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostSecretMetadataPath.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * deleteSecretMetadataPath - Configures settings for the KV store
   */
  'deleteSecretMetadataPath'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postSecretUndeletePath - Undeletes one or more versions from the KV store.
   */
  'postSecretUndeletePath'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostSecretUndeletePath.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getSysAudit - List the enabled audit devices.
   */
  'getSysAudit'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postSysAuditHashPath - The hash of the given string via the given audit backend
   */
  'postSysAuditHashPath'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostSysAuditHashPath.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postSysAuditPath - Enable a new audit device at the supplied path.
   */
  'postSysAuditPath'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostSysAuditPath.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * deleteSysAuditPath - Disable the audit device at the given path.
   */
  'deleteSysAuditPath'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getSysAuth - List the currently enabled credential backends.
   */
  'getSysAuth'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postSysAuthPath - Enables a new auth method.
   * 
   * After enabling, the auth method can be accessed and configured via the auth path specified as part of the URL. This auth path will be nested under the auth prefix.
   * 
   * For example, enable the "foo" auth method will make it accessible at /auth/foo.
   */
  'postSysAuthPath'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostSysAuthPath.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * deleteSysAuthPath - Disable the auth method at the given auth path
   */
  'deleteSysAuthPath'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getSysAuthPathTune - Reads the given auth path's configuration.
   * 
   * This endpoint requires sudo capability on the final path, but the same functionality can be achieved without sudo via `sys/mounts/auth/[auth-path]/tune`.
   */
  'getSysAuthPathTune'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postSysAuthPathTune - Tune configuration parameters for a given auth path.
   * 
   * This endpoint requires sudo capability on the final path, but the same functionality can be achieved without sudo via `sys/mounts/auth/[auth-path]/tune`.
   */
  'postSysAuthPathTune'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostSysAuthPathTune.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postSysCapabilities - Fetches the capabilities of the given token on the given path.
   */
  'postSysCapabilities'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostSysCapabilities.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postSysCapabilitiesAccessor - Fetches the capabilities of the token associated with the given token, on the given path.
   */
  'postSysCapabilitiesAccessor'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostSysCapabilitiesAccessor.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postSysCapabilitiesSelf - Fetches the capabilities of the given token on the given path.
   */
  'postSysCapabilitiesSelf'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostSysCapabilitiesSelf.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getSysConfigAuditingRequestHeaders - List the request headers that are configured to be audited.
   */
  'getSysConfigAuditingRequestHeaders'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getSysConfigAuditingRequestHeadersHeader - List the information for the given request header.
   */
  'getSysConfigAuditingRequestHeadersHeader'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postSysConfigAuditingRequestHeadersHeader - Enable auditing of a header.
   */
  'postSysConfigAuditingRequestHeadersHeader'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostSysConfigAuditingRequestHeadersHeader.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * deleteSysConfigAuditingRequestHeadersHeader - Disable auditing of the given request header.
   */
  'deleteSysConfigAuditingRequestHeadersHeader'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getSysConfigCors - Return the current CORS settings.
   */
  'getSysConfigCors'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postSysConfigCors - Configure the CORS settings.
   */
  'postSysConfigCors'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostSysConfigCors.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * deleteSysConfigCors - Remove any CORS settings.
   */
  'deleteSysConfigCors'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getSysConfigStateSanitized - Return a sanitized version of the Vault server configuration.
   * 
   * The sanitized output strips configuration values in the storage, HA storage, and seals stanzas, which may contain sensitive values such as API tokens. It also removes any token or secret fields in other stanzas, such as the circonus_api_token from telemetry.
   */
  'getSysConfigStateSanitized'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getSysConfigUiHeaders - Return a list of configured UI headers.
   */
  'getSysConfigUiHeaders'(
    parameters?: Parameters<Paths.GetSysConfigUiHeaders.QueryParameters>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getSysConfigUiHeadersHeader - Return the given UI header's configuration
   */
  'getSysConfigUiHeadersHeader'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postSysConfigUiHeadersHeader - Configure the values to be returned for the UI header.
   */
  'postSysConfigUiHeadersHeader'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostSysConfigUiHeadersHeader.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * deleteSysConfigUiHeadersHeader - Remove a UI header.
   */
  'deleteSysConfigUiHeadersHeader'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getSysGenerateRoot - Read the configuration and progress of the current root generation attempt.
   */
  'getSysGenerateRoot'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postSysGenerateRoot - Initializes a new root generation attempt.
   * 
   * Only a single root generation attempt can take place at a time. One (and only one) of otp or pgp_key are required.
   */
  'postSysGenerateRoot'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostSysGenerateRoot.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * deleteSysGenerateRoot - Cancels any in-progress root generation attempt.
   */
  'deleteSysGenerateRoot'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getSysGenerateRootAttempt - Read the configuration and progress of the current root generation attempt.
   */
  'getSysGenerateRootAttempt'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postSysGenerateRootAttempt - Initializes a new root generation attempt.
   * 
   * Only a single root generation attempt can take place at a time. One (and only one) of otp or pgp_key are required.
   */
  'postSysGenerateRootAttempt'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostSysGenerateRootAttempt.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * deleteSysGenerateRootAttempt - Cancels any in-progress root generation attempt.
   */
  'deleteSysGenerateRootAttempt'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postSysGenerateRootUpdate - Enter a single master key share to progress the root generation attempt.
   * 
   * If the threshold number of master key shares is reached, Vault will complete the root generation and issue the new token. Otherwise, this API must be called multiple times until that threshold is met. The attempt nonce must be provided with each call.
   */
  'postSysGenerateRootUpdate'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostSysGenerateRootUpdate.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getSysHealth - Returns the health status of Vault.
   */
  'getSysHealth'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getSysHostInfo - Information about the host instance that this Vault server is running on.
   * 
   * Information about the host instance that this Vault server is running on.
   * 		The information that gets collected includes host hardware information, and CPU,
   * 		disk, and memory utilization
   */
  'getSysHostInfo'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getSysInit - Returns the initialization status of Vault.
   */
  'getSysInit'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postSysInit - Initialize a new Vault.
   * 
   * The Vault must not have been previously initialized. The recovery options, as well as the stored shares option, are only available when using Vault HSM.
   */
  'postSysInit'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostSysInit.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getSysInternalCountersActivity - Report the client count metrics, for this namespace and all child namespaces.
   */
  'getSysInternalCountersActivity'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getSysInternalCountersConfig - Read the client count tracking configuration.
   */
  'getSysInternalCountersConfig'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postSysInternalCountersConfig - Enable or disable collection of client count, set retention period, or set default reporting period.
   */
  'postSysInternalCountersConfig'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostSysInternalCountersConfig.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getSysInternalSpecsOpenapi - Generate an OpenAPI 3 document of all mounted paths.
   */
  'getSysInternalSpecsOpenapi'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getSysInternalUiMounts - Lists all enabled and visible auth and secrets mounts.
   */
  'getSysInternalUiMounts'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getSysInternalUiMountsPath - Return information about the given mount.
   */
  'getSysInternalUiMountsPath'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getSysKeyStatus - Provides information about the backend encryption key.
   */
  'getSysKeyStatus'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getSysLeader - Returns the high availability status and current leader instance of Vault.
   */
  'getSysLeader'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postSysLeasesLookup - Retrieve lease metadata.
   */
  'postSysLeasesLookup'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostSysLeasesLookup.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getSysLeasesLookup - Returns a list of lease ids.
   */
  'getSysLeasesLookup'(
    parameters?: Parameters<Paths.GetSysLeasesLookup.QueryParameters>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getSysLeasesLookupPrefix - Returns a list of lease ids.
   */
  'getSysLeasesLookupPrefix'(
    parameters?: Parameters<Paths.GetSysLeasesLookupPrefix.QueryParameters>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postSysLeasesRenew - Renews a lease, requesting to extend the lease.
   */
  'postSysLeasesRenew'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostSysLeasesRenew.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postSysLeasesRenewUrl_lease_id - Renews a lease, requesting to extend the lease.
   */
  'postSysLeasesRenewUrl_lease_id'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostSysLeasesRenewUrlLeaseId.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postSysLeasesRevoke - Revokes a lease immediately.
   */
  'postSysLeasesRevoke'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostSysLeasesRevoke.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postSysLeasesRevokeForcePrefix - Revokes all secrets or tokens generated under a given prefix immediately
   * 
   * Unlike `/sys/leases/revoke-prefix`, this path ignores backend errors encountered during revocation. This is potentially very dangerous and should only be used in specific emergency situations where errors in the backend or the connected backend service prevent normal revocation.
   * 
   * By ignoring these errors, Vault abdicates responsibility for ensuring that the issued credentials or secrets are properly revoked and/or cleaned up. Access to this endpoint should be tightly controlled.
   */
  'postSysLeasesRevokeForcePrefix'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postSysLeasesRevokePrefixPrefix - Revokes all secrets (via a lease ID prefix) or tokens (via the tokens' path property) generated under a given prefix immediately.
   */
  'postSysLeasesRevokePrefixPrefix'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostSysLeasesRevokePrefixPrefix.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postSysLeasesRevokeUrl_lease_id - Revokes a lease immediately.
   */
  'postSysLeasesRevokeUrl_lease_id'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostSysLeasesRevokeUrlLeaseId.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postSysLeasesTidy - This endpoint performs cleanup tasks that can be run if certain error
   * conditions have occurred.
   */
  'postSysLeasesTidy'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getSysMetrics - Export the metrics aggregated for telemetry purpose.
   */
  'getSysMetrics'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getSysMonitor
   */
  'getSysMonitor'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getSysMounts - List the currently mounted backends.
   */
  'getSysMounts'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postSysMountsPath - Enable a new secrets engine at the given path.
   */
  'postSysMountsPath'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostSysMountsPath.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * deleteSysMountsPath - Disable the mount point specified at the given path.
   */
  'deleteSysMountsPath'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getSysMountsPathTune - Tune backend configuration parameters for this mount.
   */
  'getSysMountsPathTune'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postSysMountsPathTune - Tune backend configuration parameters for this mount.
   */
  'postSysMountsPathTune'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostSysMountsPathTune.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getSysPluginsCatalog - Lists all the plugins known to Vault
   */
  'getSysPluginsCatalog'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getSysPluginsCatalogName - Return the configuration data for the plugin with the given name.
   */
  'getSysPluginsCatalogName'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postSysPluginsCatalogName - Register a new plugin, or updates an existing one with the supplied name.
   */
  'postSysPluginsCatalogName'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostSysPluginsCatalogName.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * deleteSysPluginsCatalogName - Remove the plugin with the given name.
   */
  'deleteSysPluginsCatalogName'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getSysPluginsCatalogType - List the plugins in the catalog.
   */
  'getSysPluginsCatalogType'(
    parameters?: Parameters<Paths.GetSysPluginsCatalogType.QueryParameters>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getSysPluginsCatalogTypeName - Return the configuration data for the plugin with the given name.
   */
  'getSysPluginsCatalogTypeName'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postSysPluginsCatalogTypeName - Register a new plugin, or updates an existing one with the supplied name.
   */
  'postSysPluginsCatalogTypeName'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostSysPluginsCatalogTypeName.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * deleteSysPluginsCatalogTypeName - Remove the plugin with the given name.
   */
  'deleteSysPluginsCatalogTypeName'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postSysPluginsReloadBackend - Reload mounted plugin backends.
   * 
   * Either the plugin name (`plugin`) or the desired plugin backend mounts (`mounts`) must be provided, but not both. In the case that the plugin name is provided, all mounted paths that use that plugin backend will be reloaded.  If (`scope`) is provided and is (`global`), the plugin(s) are reloaded globally.
   */
  'postSysPluginsReloadBackend'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostSysPluginsReloadBackend.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getSysPoliciesAcl - List the configured access control policies.
   */
  'getSysPoliciesAcl'(
    parameters?: Parameters<Paths.GetSysPoliciesAcl.QueryParameters>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getSysPoliciesAclName - Retrieve information about the named ACL policy.
   */
  'getSysPoliciesAclName'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postSysPoliciesAclName - Add a new or update an existing ACL policy.
   */
  'postSysPoliciesAclName'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostSysPoliciesAclName.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * deleteSysPoliciesAclName - Delete the ACL policy with the given name.
   */
  'deleteSysPoliciesAclName'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getSysPoliciesPasswordName - Retrieve an existing password policy.
   */
  'getSysPoliciesPasswordName'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postSysPoliciesPasswordName - Add a new or update an existing password policy.
   */
  'postSysPoliciesPasswordName'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostSysPoliciesPasswordName.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * deleteSysPoliciesPasswordName - Delete a password policy.
   */
  'deleteSysPoliciesPasswordName'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getSysPoliciesPasswordNameGenerate - Generate a password from an existing password policy.
   */
  'getSysPoliciesPasswordNameGenerate'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getSysPolicy - List the configured access control policies.
   */
  'getSysPolicy'(
    parameters?: Parameters<Paths.GetSysPolicy.QueryParameters>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getSysPolicyName - Retrieve the policy body for the named policy.
   */
  'getSysPolicyName'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postSysPolicyName - Add a new or update an existing policy.
   */
  'postSysPolicyName'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostSysPolicyName.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * deleteSysPolicyName - Delete the policy with the given name.
   */
  'deleteSysPolicyName'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getSysPprof - Returns an HTML page listing the available profiles.
   * 
   * Returns an HTML page listing the available 
   * profiles. This should be mainly accessed via browsers or applications that can 
   * render pages.
   */
  'getSysPprof'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getSysPprofCmdline - Returns the running program's command line.
   * 
   * Returns the running program's command line, with arguments separated by NUL bytes.
   */
  'getSysPprofCmdline'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getSysPprofGoroutine - Returns stack traces of all current goroutines.
   * 
   * Returns stack traces of all current goroutines.
   */
  'getSysPprofGoroutine'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getSysPprofHeap - Returns a sampling of memory allocations of live object.
   * 
   * Returns a sampling of memory allocations of live object.
   */
  'getSysPprofHeap'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getSysPprofProfile - Returns a pprof-formatted cpu profile payload.
   * 
   * Returns a pprof-formatted cpu profile payload. Profiling lasts for duration specified in seconds GET parameter, or for 30 seconds if not specified.
   */
  'getSysPprofProfile'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getSysPprofSymbol - Returns the program counters listed in the request.
   * 
   * Returns the program counters listed in the request.
   */
  'getSysPprofSymbol'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getSysPprofTrace - Returns the execution trace in binary form.
   * 
   * Returns  the execution trace in binary form. Tracing lasts for duration specified in seconds GET parameter, or for 1 second if not specified.
   */
  'getSysPprofTrace'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getSysQuotasConfig
   */
  'getSysQuotasConfig'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postSysQuotasConfig
   */
  'postSysQuotasConfig'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostSysQuotasConfig.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getSysQuotasRateLimit
   */
  'getSysQuotasRateLimit'(
    parameters?: Parameters<Paths.GetSysQuotasRateLimit.QueryParameters>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getSysQuotasRateLimitName
   */
  'getSysQuotasRateLimitName'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postSysQuotasRateLimitName
   */
  'postSysQuotasRateLimitName'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostSysQuotasRateLimitName.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * deleteSysQuotasRateLimitName
   */
  'deleteSysQuotasRateLimitName'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getSysRaw - Read the value of the key at the given path.
   */
  'getSysRaw'(
    parameters?: Parameters<Paths.GetSysRaw.QueryParameters>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postSysRaw - Update the value of the key at the given path.
   */
  'postSysRaw'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostSysRaw.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * deleteSysRaw - Delete the key with given path.
   */
  'deleteSysRaw'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getSysRawPath - Read the value of the key at the given path.
   */
  'getSysRawPath'(
    parameters?: Parameters<Paths.GetSysRawPath.QueryParameters>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postSysRawPath - Update the value of the key at the given path.
   */
  'postSysRawPath'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostSysRawPath.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * deleteSysRawPath - Delete the key with given path.
   */
  'deleteSysRawPath'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getSysRekeyBackup - Return the backup copy of PGP-encrypted unseal keys.
   */
  'getSysRekeyBackup'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * deleteSysRekeyBackup - Delete the backup copy of PGP-encrypted unseal keys.
   */
  'deleteSysRekeyBackup'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getSysRekeyInit - Reads the configuration and progress of the current rekey attempt.
   */
  'getSysRekeyInit'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postSysRekeyInit - Initializes a new rekey attempt.
   * 
   * Only a single rekey attempt can take place at a time, and changing the parameters of a rekey requires canceling and starting a new rekey, which will also provide a new nonce.
   */
  'postSysRekeyInit'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostSysRekeyInit.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * deleteSysRekeyInit - Cancels any in-progress rekey.
   * 
   * This clears the rekey settings as well as any progress made. This must be called to change the parameters of the rekey. Note: verification is still a part of a rekey. If rekeying is canceled during the verification flow, the current unseal keys remain valid.
   */
  'deleteSysRekeyInit'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getSysRekeyRecoveryKeyBackup - Allows fetching or deleting the backup of the rotated unseal keys.
   */
  'getSysRekeyRecoveryKeyBackup'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * deleteSysRekeyRecoveryKeyBackup - Allows fetching or deleting the backup of the rotated unseal keys.
   */
  'deleteSysRekeyRecoveryKeyBackup'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postSysRekeyUpdate - Enter a single master key share to progress the rekey of the Vault.
   */
  'postSysRekeyUpdate'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostSysRekeyUpdate.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getSysRekeyVerify - Read the configuration and progress of the current rekey verification attempt.
   */
  'getSysRekeyVerify'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postSysRekeyVerify - Enter a single new key share to progress the rekey verification operation.
   */
  'postSysRekeyVerify'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostSysRekeyVerify.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * deleteSysRekeyVerify - Cancel any in-progress rekey verification operation.
   * 
   * This clears any progress made and resets the nonce. Unlike a `DELETE` against `sys/rekey/init`, this only resets the current verification operation, not the entire rekey atttempt.
   */
  'deleteSysRekeyVerify'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postSysRemount - Move the mount point of an already-mounted backend.
   */
  'postSysRemount'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostSysRemount.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postSysRenew - Renews a lease, requesting to extend the lease.
   */
  'postSysRenew'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostSysRenew.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postSysRenewUrl_lease_id - Renews a lease, requesting to extend the lease.
   */
  'postSysRenewUrl_lease_id'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostSysRenewUrlLeaseId.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getSysReplicationStatus
   */
  'getSysReplicationStatus'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postSysRevoke - Revokes a lease immediately.
   */
  'postSysRevoke'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostSysRevoke.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postSysRevokeForcePrefix - Revokes all secrets or tokens generated under a given prefix immediately
   * 
   * Unlike `/sys/leases/revoke-prefix`, this path ignores backend errors encountered during revocation. This is potentially very dangerous and should only be used in specific emergency situations where errors in the backend or the connected backend service prevent normal revocation.
   * 
   * By ignoring these errors, Vault abdicates responsibility for ensuring that the issued credentials or secrets are properly revoked and/or cleaned up. Access to this endpoint should be tightly controlled.
   */
  'postSysRevokeForcePrefix'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postSysRevokePrefixPrefix - Revokes all secrets (via a lease ID prefix) or tokens (via the tokens' path property) generated under a given prefix immediately.
   */
  'postSysRevokePrefixPrefix'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostSysRevokePrefixPrefix.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postSysRevokeUrl_lease_id - Revokes a lease immediately.
   */
  'postSysRevokeUrl_lease_id'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostSysRevokeUrlLeaseId.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postSysRotate - Rotates the backend encryption key used to persist data.
   */
  'postSysRotate'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postSysSeal - Seal the Vault.
   */
  'postSysSeal'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getSysSealStatus - Check the seal status of a Vault.
   */
  'getSysSealStatus'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postSysStepDown - Cause the node to give up active status.
   * 
   * This endpoint forces the node to give up active status. If the node does not have active status, this endpoint does nothing. Note that the node will sleep for ten seconds before attempting to grab the active lock again, but if no standby nodes grab the active lock in the interim, the same node may become the active node again.
   */
  'postSysStepDown'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postSysToolsHash - Generate a hash sum for input data
   */
  'postSysToolsHash'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostSysToolsHash.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postSysToolsHashUrlalgorithm - Generate a hash sum for input data
   */
  'postSysToolsHashUrlalgorithm'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostSysToolsHashUrlalgorithm.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postSysToolsRandom - Generate random bytes
   */
  'postSysToolsRandom'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostSysToolsRandom.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postSysToolsRandomUrlbytes - Generate random bytes
   */
  'postSysToolsRandomUrlbytes'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostSysToolsRandomUrlbytes.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postSysUnseal - Unseal the Vault.
   */
  'postSysUnseal'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostSysUnseal.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getSysWrappingLookup - Look up wrapping properties for the requester's token.
   */
  'getSysWrappingLookup'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postSysWrappingLookup - Look up wrapping properties for the given token.
   */
  'postSysWrappingLookup'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostSysWrappingLookup.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postSysWrappingRewrap - Rotates a response-wrapped token.
   */
  'postSysWrappingRewrap'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostSysWrappingRewrap.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postSysWrappingUnwrap - Unwraps a response-wrapped token.
   */
  'postSysWrappingUnwrap'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostSysWrappingUnwrap.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postSysWrappingWrap - Response-wraps an arbitrary JSON object.
   */
  'postSysWrappingWrap'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getTransitBackupName - Backup the named key
   */
  'getTransitBackupName'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getTransitCacheConfig - Returns the size of the active cache
   */
  'getTransitCacheConfig'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postTransitCacheConfig - Configures a new cache of the specified size
   */
  'postTransitCacheConfig'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostTransitCacheConfig.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postTransitDatakeyPlaintextName - Generate a data key
   */
  'postTransitDatakeyPlaintextName'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostTransitDatakeyPlaintextName.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postTransitDecryptName - Decrypt a ciphertext value using a named key
   */
  'postTransitDecryptName'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostTransitDecryptName.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postTransitEncryptName - Encrypt a plaintext value or a batch of plaintext
   * blocks using a named key
   */
  'postTransitEncryptName'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostTransitEncryptName.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getTransitExportTypeName - Export named encryption or signing key
   */
  'getTransitExportTypeName'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getTransitExportTypeNameVersion - Export named encryption or signing key
   */
  'getTransitExportTypeNameVersion'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postTransitHash - Generate a hash sum for input data
   */
  'postTransitHash'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostTransitHash.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postTransitHashUrlalgorithm - Generate a hash sum for input data
   */
  'postTransitHashUrlalgorithm'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostTransitHashUrlalgorithm.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postTransitHmacName - Generate an HMAC for input data using the named key
   */
  'postTransitHmacName'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostTransitHmacName.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PostTransitHmacName.Responses.$200>
  /**
   * postTransitHmacNameUrlalgorithm - Generate an HMAC for input data using the named key
   */
  'postTransitHmacNameUrlalgorithm'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostTransitHmacNameUrlalgorithm.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PostTransitHmacNameUrlalgorithm.Responses.$200>
  /**
   * getTransitKeys - Managed named encryption keys
   */
  'getTransitKeys'(
    parameters?: Parameters<Paths.GetTransitKeys.QueryParameters>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getTransitKeysName - Managed named encryption keys
   */
  'getTransitKeysName'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetTransitKeysName.Responses.$200>
  /**
   * postTransitKeysName - Managed named encryption keys
   */
  'postTransitKeysName'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostTransitKeysName.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * deleteTransitKeysName - Managed named encryption keys
   */
  'deleteTransitKeysName'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postTransitKeysNameConfig - Configure a named encryption key
   */
  'postTransitKeysNameConfig'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostTransitKeysNameConfig.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postTransitKeysNameRotate - Rotate named encryption key
   */
  'postTransitKeysNameRotate'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postTransitKeysNameTrim - Trim key versions of a named key
   */
  'postTransitKeysNameTrim'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostTransitKeysNameTrim.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postTransitRandom - Generate random bytes
   */
  'postTransitRandom'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostTransitRandom.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postTransitRandomUrlbytes - Generate random bytes
   */
  'postTransitRandomUrlbytes'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostTransitRandomUrlbytes.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postTransitRestore - Restore the named key
   */
  'postTransitRestore'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostTransitRestore.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postTransitRestoreName - Restore the named key
   */
  'postTransitRestoreName'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostTransitRestoreName.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postTransitRewrapName - Rewrap ciphertext
   */
  'postTransitRewrapName'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostTransitRewrapName.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postTransitSignName - Generate a signature for input data using the named key
   */
  'postTransitSignName'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostTransitSignName.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PostTransitSignName.Responses.$200>
  /**
   * postTransitSignNameUrlalgorithm - Generate a signature for input data using the named key
   */
  'postTransitSignNameUrlalgorithm'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostTransitSignNameUrlalgorithm.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * postTransitVerifyName - Verify a signature or HMAC for input data created using the named key
   */
  'postTransitVerifyName'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostTransitVerifyName.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PostTransitVerifyName.Responses.$200>
  /**
   * postTransitVerifyNameUrlalgorithm - Verify a signature or HMAC for input data created using the named key
   */
  'postTransitVerifyNameUrlalgorithm'(
    parameters?: Parameters<UnknownParamsObject>,
    data?: Paths.PostTransitVerifyNameUrlalgorithm.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
}

export interface PathsDictionary {
  ['/auth/token/accessors/']: {
    /**
     * getAuthTokenAccessors - List token accessors, which can then be
     * be used to iterate and discover their properties
     * or revoke them. Because this can be used to
     * cause a denial of service, this endpoint
     * requires 'sudo' capability in addition to
     * 'list'.
     */
    'get'(
      parameters?: Parameters<Paths.GetAuthTokenAccessors.QueryParameters>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/auth/token/create']: {
    /**
     * postAuthTokenCreate - The token create path is used to create new tokens.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/auth/token/create-orphan']: {
    /**
     * postAuthTokenCreateOrphan - The token create path is used to create new orphan tokens.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/auth/token/create/{role_name}']: {
    /**
     * postAuthTokenCreateRole_name - This token create path is used to create new tokens adhering to the given role.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/auth/token/lookup']: {
    /**
     * getAuthTokenLookup - This endpoint will lookup a token and its properties.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
    /**
     * postAuthTokenLookup - This endpoint will lookup a token and its properties.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostAuthTokenLookup.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/auth/token/lookup-accessor']: {
    /**
     * postAuthTokenLookupAccessor - This endpoint will lookup a token associated with the given accessor and its properties. Response will not contain the token ID.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostAuthTokenLookupAccessor.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/auth/token/lookup-self']: {
    /**
     * getAuthTokenLookupSelf - This endpoint will lookup a token and its properties.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
    /**
     * postAuthTokenLookupSelf - This endpoint will lookup a token and its properties.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostAuthTokenLookupSelf.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/auth/token/renew']: {
    /**
     * postAuthTokenRenew - This endpoint will renew the given token and prevent expiration.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostAuthTokenRenew.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/auth/token/renew-accessor']: {
    /**
     * postAuthTokenRenewAccessor - This endpoint will renew a token associated with the given accessor and its properties. Response will not contain the token ID.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostAuthTokenRenewAccessor.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/auth/token/renew-self']: {
    /**
     * postAuthTokenRenewSelf - This endpoint will renew the token used to call it and prevent expiration.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostAuthTokenRenewSelf.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/auth/token/revoke']: {
    /**
     * postAuthTokenRevoke - This endpoint will delete the given token and all of its child tokens.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostAuthTokenRevoke.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/auth/token/revoke-accessor']: {
    /**
     * postAuthTokenRevokeAccessor - This endpoint will delete the token associated with the accessor and all of its child tokens.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostAuthTokenRevokeAccessor.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/auth/token/revoke-orphan']: {
    /**
     * postAuthTokenRevokeOrphan - This endpoint will delete the token and orphan its child tokens.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostAuthTokenRevokeOrphan.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/auth/token/revoke-self']: {
    /**
     * postAuthTokenRevokeSelf - This endpoint will delete the token used to call it and all of its child tokens.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/auth/token/roles']: {
    /**
     * getAuthTokenRoles - This endpoint lists configured roles.
     */
    'get'(
      parameters?: Parameters<Paths.GetAuthTokenRoles.QueryParameters>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/auth/token/roles/{role_name}']: {
    /**
     * getAuthTokenRolesRole_name
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
    /**
     * postAuthTokenRolesRole_name
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostAuthTokenRolesRoleName.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
    /**
     * deleteAuthTokenRolesRole_name
     */
    'delete'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/auth/token/tidy']: {
    /**
     * postAuthTokenTidy - This endpoint performs cleanup tasks that can be run if certain error
     * conditions have occurred.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/cubbyhole/{path}']: {
    /**
     * getCubbyholePath - Retrieve the secret at the specified location.
     */
    'get'(
      parameters?: Parameters<Paths.GetCubbyholePath.QueryParameters>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
    /**
     * postCubbyholePath - Store a secret at the specified location.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
    /**
     * deleteCubbyholePath - Deletes the secret at the specified location.
     */
    'delete'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/identity/alias']: {
    /**
     * postIdentityAlias - Create a new alias.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostIdentityAlias.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/identity/alias/id']: {
    /**
     * getIdentityAliasId - List all the alias IDs.
     */
    'get'(
      parameters?: Parameters<Paths.GetIdentityAliasId.QueryParameters>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/identity/alias/id/{id}']: {
    /**
     * getIdentityAliasIdId - Update, read or delete an alias ID.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
    /**
     * postIdentityAliasIdId - Update, read or delete an alias ID.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostIdentityAliasIdId.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
    /**
     * deleteIdentityAliasIdId - Update, read or delete an alias ID.
     */
    'delete'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/identity/entity']: {
    /**
     * postIdentityEntity - Create a new entity
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostIdentityEntity.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/identity/entity-alias']: {
    /**
     * postIdentityEntityAlias - Create a new alias.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostIdentityEntityAlias.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/identity/entity-alias/id']: {
    /**
     * getIdentityEntityAliasId - List all the alias IDs.
     */
    'get'(
      parameters?: Parameters<Paths.GetIdentityEntityAliasId.QueryParameters>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/identity/entity-alias/id/{id}']: {
    /**
     * getIdentityEntityAliasIdId - Update, read or delete an alias ID.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
    /**
     * postIdentityEntityAliasIdId - Update, read or delete an alias ID.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostIdentityEntityAliasIdId.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
    /**
     * deleteIdentityEntityAliasIdId - Update, read or delete an alias ID.
     */
    'delete'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/identity/entity/batch-delete']: {
    /**
     * postIdentityEntityBatchDelete - Delete all of the entities provided
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostIdentityEntityBatchDelete.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/identity/entity/id']: {
    /**
     * getIdentityEntityId - List all the entity IDs
     */
    'get'(
      parameters?: Parameters<Paths.GetIdentityEntityId.QueryParameters>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/identity/entity/id/{id}']: {
    /**
     * getIdentityEntityIdId - Update, read or delete an entity using entity ID
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
    /**
     * postIdentityEntityIdId - Update, read or delete an entity using entity ID
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostIdentityEntityIdId.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
    /**
     * deleteIdentityEntityIdId - Update, read or delete an entity using entity ID
     */
    'delete'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/identity/entity/merge']: {
    /**
     * postIdentityEntityMerge - Merge two or more entities together
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostIdentityEntityMerge.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/identity/entity/name']: {
    /**
     * getIdentityEntityName - List all the entity names
     */
    'get'(
      parameters?: Parameters<Paths.GetIdentityEntityName.QueryParameters>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/identity/entity/name/{name}']: {
    /**
     * getIdentityEntityNameName - Update, read or delete an entity using entity name
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
    /**
     * postIdentityEntityNameName - Update, read or delete an entity using entity name
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostIdentityEntityNameName.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
    /**
     * deleteIdentityEntityNameName - Update, read or delete an entity using entity name
     */
    'delete'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/identity/group']: {
    /**
     * postIdentityGroup - Create a new group.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostIdentityGroup.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/identity/group-alias']: {
    /**
     * postIdentityGroupAlias - Creates a new group alias, or updates an existing one.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostIdentityGroupAlias.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/identity/group-alias/id']: {
    /**
     * getIdentityGroupAliasId - List all the group alias IDs.
     */
    'get'(
      parameters?: Parameters<Paths.GetIdentityGroupAliasId.QueryParameters>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/identity/group-alias/id/{id}']: {
    /**
     * getIdentityGroupAliasIdId
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
    /**
     * postIdentityGroupAliasIdId
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostIdentityGroupAliasIdId.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
    /**
     * deleteIdentityGroupAliasIdId
     */
    'delete'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/identity/group/id']: {
    /**
     * getIdentityGroupId - List all the group IDs.
     */
    'get'(
      parameters?: Parameters<Paths.GetIdentityGroupId.QueryParameters>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/identity/group/id/{id}']: {
    /**
     * getIdentityGroupIdId - Update or delete an existing group using its ID.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
    /**
     * postIdentityGroupIdId - Update or delete an existing group using its ID.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostIdentityGroupIdId.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
    /**
     * deleteIdentityGroupIdId - Update or delete an existing group using its ID.
     */
    'delete'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/identity/group/name']: {
    /**
     * getIdentityGroupName
     */
    'get'(
      parameters?: Parameters<Paths.GetIdentityGroupName.QueryParameters>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/identity/group/name/{name}']: {
    /**
     * getIdentityGroupNameName
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
    /**
     * postIdentityGroupNameName
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostIdentityGroupNameName.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
    /**
     * deleteIdentityGroupNameName
     */
    'delete'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/identity/lookup/entity']: {
    /**
     * postIdentityLookupEntity - Query entities based on various properties.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostIdentityLookupEntity.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/identity/lookup/group']: {
    /**
     * postIdentityLookupGroup - Query groups based on various properties.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostIdentityLookupGroup.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/identity/oidc/.well-known/keys']: {
    /**
     * getIdentityOidcWellKnownKeys - Retrieve public keys
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/identity/oidc/.well-known/openid-configuration']: {
    /**
     * getIdentityOidcWellKnownOpenidConfiguration - Query OIDC configurations
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/identity/oidc/config']: {
    /**
     * getIdentityOidcConfig - OIDC configuration
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
    /**
     * postIdentityOidcConfig - OIDC configuration
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostIdentityOidcConfig.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/identity/oidc/introspect']: {
    /**
     * postIdentityOidcIntrospect - Verify the authenticity of an OIDC token
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostIdentityOidcIntrospect.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/identity/oidc/key']: {
    /**
     * getIdentityOidcKey - List OIDC keys
     */
    'get'(
      parameters?: Parameters<Paths.GetIdentityOidcKey.QueryParameters>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/identity/oidc/key/{name}']: {
    /**
     * getIdentityOidcKeyName - CRUD operations for OIDC keys.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
    /**
     * postIdentityOidcKeyName - CRUD operations for OIDC keys.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostIdentityOidcKeyName.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
    /**
     * deleteIdentityOidcKeyName - CRUD operations for OIDC keys.
     */
    'delete'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/identity/oidc/key/{name}/rotate']: {
    /**
     * postIdentityOidcKeyNameRotate - Rotate a named OIDC key.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostIdentityOidcKeyNameRotate.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/identity/oidc/role']: {
    /**
     * getIdentityOidcRole - List configured OIDC roles
     */
    'get'(
      parameters?: Parameters<Paths.GetIdentityOidcRole.QueryParameters>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/identity/oidc/role/{name}']: {
    /**
     * getIdentityOidcRoleName - CRUD operations on OIDC Roles
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
    /**
     * postIdentityOidcRoleName - CRUD operations on OIDC Roles
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostIdentityOidcRoleName.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
    /**
     * deleteIdentityOidcRoleName - CRUD operations on OIDC Roles
     */
    'delete'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/identity/oidc/token/{name}']: {
    /**
     * getIdentityOidcTokenName - Generate an OIDC token
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/identity/persona']: {
    /**
     * postIdentityPersona - Create a new alias.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostIdentityPersona.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/identity/persona/id']: {
    /**
     * getIdentityPersonaId - List all the alias IDs.
     */
    'get'(
      parameters?: Parameters<Paths.GetIdentityPersonaId.QueryParameters>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/identity/persona/id/{id}']: {
    /**
     * getIdentityPersonaIdId - Update, read or delete an alias ID.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
    /**
     * postIdentityPersonaIdId - Update, read or delete an alias ID.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostIdentityPersonaIdId.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
    /**
     * deleteIdentityPersonaIdId - Update, read or delete an alias ID.
     */
    'delete'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/secret/.*']: {
  }
  ['/secret/config']: {
    /**
     * getSecretConfig - Read the backend level settings.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
    /**
     * postSecretConfig - Configure backend level settings that are applied to every key in the key-value store.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostSecretConfig.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/secret/data/{path}']: {
    /**
     * getSecretDataPath - Write, Read, and Delete data in the Key-Value Store.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
    /**
     * postSecretDataPath - Write, Read, and Delete data in the Key-Value Store.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostSecretDataPath.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
    /**
     * deleteSecretDataPath - Write, Read, and Delete data in the Key-Value Store.
     */
    'delete'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/secret/delete/{path}']: {
    /**
     * postSecretDeletePath - Marks one or more versions as deleted in the KV store.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostSecretDeletePath.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/secret/destroy/{path}']: {
    /**
     * postSecretDestroyPath - Permanently removes one or more versions in the KV store
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostSecretDestroyPath.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/secret/metadata/{path}']: {
    /**
     * getSecretMetadataPath - Configures settings for the KV store
     */
    'get'(
      parameters?: Parameters<Paths.GetSecretMetadataPath.QueryParameters>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
    /**
     * postSecretMetadataPath - Configures settings for the KV store
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostSecretMetadataPath.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
    /**
     * deleteSecretMetadataPath - Configures settings for the KV store
     */
    'delete'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/secret/undelete/{path}']: {
    /**
     * postSecretUndeletePath - Undeletes one or more versions from the KV store.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostSecretUndeletePath.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/sys/audit']: {
    /**
     * getSysAudit - List the enabled audit devices.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/sys/audit-hash/{path}']: {
    /**
     * postSysAuditHashPath - The hash of the given string via the given audit backend
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostSysAuditHashPath.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/sys/audit/{path}']: {
    /**
     * postSysAuditPath - Enable a new audit device at the supplied path.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostSysAuditPath.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
    /**
     * deleteSysAuditPath - Disable the audit device at the given path.
     */
    'delete'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/sys/auth']: {
    /**
     * getSysAuth - List the currently enabled credential backends.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/sys/auth/{path}']: {
    /**
     * postSysAuthPath - Enables a new auth method.
     * 
     * After enabling, the auth method can be accessed and configured via the auth path specified as part of the URL. This auth path will be nested under the auth prefix.
     * 
     * For example, enable the "foo" auth method will make it accessible at /auth/foo.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostSysAuthPath.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
    /**
     * deleteSysAuthPath - Disable the auth method at the given auth path
     */
    'delete'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/sys/auth/{path}/tune']: {
    /**
     * getSysAuthPathTune - Reads the given auth path's configuration.
     * 
     * This endpoint requires sudo capability on the final path, but the same functionality can be achieved without sudo via `sys/mounts/auth/[auth-path]/tune`.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
    /**
     * postSysAuthPathTune - Tune configuration parameters for a given auth path.
     * 
     * This endpoint requires sudo capability on the final path, but the same functionality can be achieved without sudo via `sys/mounts/auth/[auth-path]/tune`.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostSysAuthPathTune.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/sys/capabilities']: {
    /**
     * postSysCapabilities - Fetches the capabilities of the given token on the given path.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostSysCapabilities.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/sys/capabilities-accessor']: {
    /**
     * postSysCapabilitiesAccessor - Fetches the capabilities of the token associated with the given token, on the given path.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostSysCapabilitiesAccessor.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/sys/capabilities-self']: {
    /**
     * postSysCapabilitiesSelf - Fetches the capabilities of the given token on the given path.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostSysCapabilitiesSelf.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/sys/config/auditing/request-headers']: {
    /**
     * getSysConfigAuditingRequestHeaders - List the request headers that are configured to be audited.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/sys/config/auditing/request-headers/{header}']: {
    /**
     * getSysConfigAuditingRequestHeadersHeader - List the information for the given request header.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
    /**
     * postSysConfigAuditingRequestHeadersHeader - Enable auditing of a header.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostSysConfigAuditingRequestHeadersHeader.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
    /**
     * deleteSysConfigAuditingRequestHeadersHeader - Disable auditing of the given request header.
     */
    'delete'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/sys/config/cors']: {
    /**
     * getSysConfigCors - Return the current CORS settings.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
    /**
     * postSysConfigCors - Configure the CORS settings.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostSysConfigCors.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
    /**
     * deleteSysConfigCors - Remove any CORS settings.
     */
    'delete'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/sys/config/state/sanitized']: {
    /**
     * getSysConfigStateSanitized - Return a sanitized version of the Vault server configuration.
     * 
     * The sanitized output strips configuration values in the storage, HA storage, and seals stanzas, which may contain sensitive values such as API tokens. It also removes any token or secret fields in other stanzas, such as the circonus_api_token from telemetry.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/sys/config/ui/headers/']: {
    /**
     * getSysConfigUiHeaders - Return a list of configured UI headers.
     */
    'get'(
      parameters?: Parameters<Paths.GetSysConfigUiHeaders.QueryParameters>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/sys/config/ui/headers/{header}']: {
    /**
     * getSysConfigUiHeadersHeader - Return the given UI header's configuration
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
    /**
     * postSysConfigUiHeadersHeader - Configure the values to be returned for the UI header.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostSysConfigUiHeadersHeader.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
    /**
     * deleteSysConfigUiHeadersHeader - Remove a UI header.
     */
    'delete'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/sys/generate-root']: {
    /**
     * getSysGenerateRoot - Read the configuration and progress of the current root generation attempt.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
    /**
     * postSysGenerateRoot - Initializes a new root generation attempt.
     * 
     * Only a single root generation attempt can take place at a time. One (and only one) of otp or pgp_key are required.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostSysGenerateRoot.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
    /**
     * deleteSysGenerateRoot - Cancels any in-progress root generation attempt.
     */
    'delete'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/sys/generate-root/attempt']: {
    /**
     * getSysGenerateRootAttempt - Read the configuration and progress of the current root generation attempt.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
    /**
     * postSysGenerateRootAttempt - Initializes a new root generation attempt.
     * 
     * Only a single root generation attempt can take place at a time. One (and only one) of otp or pgp_key are required.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostSysGenerateRootAttempt.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
    /**
     * deleteSysGenerateRootAttempt - Cancels any in-progress root generation attempt.
     */
    'delete'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/sys/generate-root/update']: {
    /**
     * postSysGenerateRootUpdate - Enter a single master key share to progress the root generation attempt.
     * 
     * If the threshold number of master key shares is reached, Vault will complete the root generation and issue the new token. Otherwise, this API must be called multiple times until that threshold is met. The attempt nonce must be provided with each call.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostSysGenerateRootUpdate.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/sys/health']: {
    /**
     * getSysHealth - Returns the health status of Vault.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/sys/host-info']: {
    /**
     * getSysHostInfo - Information about the host instance that this Vault server is running on.
     * 
     * Information about the host instance that this Vault server is running on.
     * 		The information that gets collected includes host hardware information, and CPU,
     * 		disk, and memory utilization
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/sys/init']: {
    /**
     * getSysInit - Returns the initialization status of Vault.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
    /**
     * postSysInit - Initialize a new Vault.
     * 
     * The Vault must not have been previously initialized. The recovery options, as well as the stored shares option, are only available when using Vault HSM.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostSysInit.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/sys/internal/counters/activity']: {
    /**
     * getSysInternalCountersActivity - Report the client count metrics, for this namespace and all child namespaces.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/sys/internal/counters/config']: {
    /**
     * getSysInternalCountersConfig - Read the client count tracking configuration.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
    /**
     * postSysInternalCountersConfig - Enable or disable collection of client count, set retention period, or set default reporting period.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostSysInternalCountersConfig.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/sys/internal/counters/entities']: {
  }
  ['/sys/internal/counters/requests']: {
  }
  ['/sys/internal/counters/tokens']: {
  }
  ['/sys/internal/specs/openapi']: {
    /**
     * getSysInternalSpecsOpenapi - Generate an OpenAPI 3 document of all mounted paths.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/sys/internal/ui/mounts']: {
    /**
     * getSysInternalUiMounts - Lists all enabled and visible auth and secrets mounts.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/sys/internal/ui/mounts/{path}']: {
    /**
     * getSysInternalUiMountsPath - Return information about the given mount.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/sys/internal/ui/namespaces']: {
  }
  ['/sys/internal/ui/resultant-acl']: {
  }
  ['/sys/key-status']: {
    /**
     * getSysKeyStatus - Provides information about the backend encryption key.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/sys/leader']: {
    /**
     * getSysLeader - Returns the high availability status and current leader instance of Vault.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/sys/leases/lookup']: {
    /**
     * postSysLeasesLookup - Retrieve lease metadata.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostSysLeasesLookup.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/sys/leases/lookup/']: {
    /**
     * getSysLeasesLookup - Returns a list of lease ids.
     */
    'get'(
      parameters?: Parameters<Paths.GetSysLeasesLookup.QueryParameters>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/sys/leases/lookup/{prefix}']: {
    /**
     * getSysLeasesLookupPrefix - Returns a list of lease ids.
     */
    'get'(
      parameters?: Parameters<Paths.GetSysLeasesLookupPrefix.QueryParameters>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/sys/leases/renew']: {
    /**
     * postSysLeasesRenew - Renews a lease, requesting to extend the lease.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostSysLeasesRenew.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/sys/leases/renew/{url_lease_id}']: {
    /**
     * postSysLeasesRenewUrl_lease_id - Renews a lease, requesting to extend the lease.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostSysLeasesRenewUrlLeaseId.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/sys/leases/revoke']: {
    /**
     * postSysLeasesRevoke - Revokes a lease immediately.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostSysLeasesRevoke.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/sys/leases/revoke-force/{prefix}']: {
    /**
     * postSysLeasesRevokeForcePrefix - Revokes all secrets or tokens generated under a given prefix immediately
     * 
     * Unlike `/sys/leases/revoke-prefix`, this path ignores backend errors encountered during revocation. This is potentially very dangerous and should only be used in specific emergency situations where errors in the backend or the connected backend service prevent normal revocation.
     * 
     * By ignoring these errors, Vault abdicates responsibility for ensuring that the issued credentials or secrets are properly revoked and/or cleaned up. Access to this endpoint should be tightly controlled.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/sys/leases/revoke-prefix/{prefix}']: {
    /**
     * postSysLeasesRevokePrefixPrefix - Revokes all secrets (via a lease ID prefix) or tokens (via the tokens' path property) generated under a given prefix immediately.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostSysLeasesRevokePrefixPrefix.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/sys/leases/revoke/{url_lease_id}']: {
    /**
     * postSysLeasesRevokeUrl_lease_id - Revokes a lease immediately.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostSysLeasesRevokeUrlLeaseId.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/sys/leases/tidy']: {
    /**
     * postSysLeasesTidy - This endpoint performs cleanup tasks that can be run if certain error
     * conditions have occurred.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/sys/metrics']: {
    /**
     * getSysMetrics - Export the metrics aggregated for telemetry purpose.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/sys/monitor']: {
    /**
     * getSysMonitor
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/sys/mounts']: {
    /**
     * getSysMounts - List the currently mounted backends.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/sys/mounts/{path}']: {
    /**
     * postSysMountsPath - Enable a new secrets engine at the given path.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostSysMountsPath.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
    /**
     * deleteSysMountsPath - Disable the mount point specified at the given path.
     */
    'delete'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/sys/mounts/{path}/tune']: {
    /**
     * getSysMountsPathTune - Tune backend configuration parameters for this mount.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
    /**
     * postSysMountsPathTune - Tune backend configuration parameters for this mount.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostSysMountsPathTune.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/sys/plugins/catalog']: {
    /**
     * getSysPluginsCatalog - Lists all the plugins known to Vault
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/sys/plugins/catalog/{name}']: {
    /**
     * getSysPluginsCatalogName - Return the configuration data for the plugin with the given name.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
    /**
     * postSysPluginsCatalogName - Register a new plugin, or updates an existing one with the supplied name.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostSysPluginsCatalogName.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
    /**
     * deleteSysPluginsCatalogName - Remove the plugin with the given name.
     */
    'delete'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/sys/plugins/catalog/{type}']: {
    /**
     * getSysPluginsCatalogType - List the plugins in the catalog.
     */
    'get'(
      parameters?: Parameters<Paths.GetSysPluginsCatalogType.QueryParameters>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/sys/plugins/catalog/{type}/{name}']: {
    /**
     * getSysPluginsCatalogTypeName - Return the configuration data for the plugin with the given name.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
    /**
     * postSysPluginsCatalogTypeName - Register a new plugin, or updates an existing one with the supplied name.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostSysPluginsCatalogTypeName.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
    /**
     * deleteSysPluginsCatalogTypeName - Remove the plugin with the given name.
     */
    'delete'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/sys/plugins/reload/backend']: {
    /**
     * postSysPluginsReloadBackend - Reload mounted plugin backends.
     * 
     * Either the plugin name (`plugin`) or the desired plugin backend mounts (`mounts`) must be provided, but not both. In the case that the plugin name is provided, all mounted paths that use that plugin backend will be reloaded.  If (`scope`) is provided and is (`global`), the plugin(s) are reloaded globally.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostSysPluginsReloadBackend.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/sys/policies/acl']: {
    /**
     * getSysPoliciesAcl - List the configured access control policies.
     */
    'get'(
      parameters?: Parameters<Paths.GetSysPoliciesAcl.QueryParameters>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/sys/policies/acl/{name}']: {
    /**
     * getSysPoliciesAclName - Retrieve information about the named ACL policy.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
    /**
     * postSysPoliciesAclName - Add a new or update an existing ACL policy.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostSysPoliciesAclName.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
    /**
     * deleteSysPoliciesAclName - Delete the ACL policy with the given name.
     */
    'delete'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/sys/policies/password/{name}']: {
    /**
     * getSysPoliciesPasswordName - Retrieve an existing password policy.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
    /**
     * postSysPoliciesPasswordName - Add a new or update an existing password policy.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostSysPoliciesPasswordName.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
    /**
     * deleteSysPoliciesPasswordName - Delete a password policy.
     */
    'delete'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/sys/policies/password/{name}/generate']: {
    /**
     * getSysPoliciesPasswordNameGenerate - Generate a password from an existing password policy.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/sys/policy']: {
    /**
     * getSysPolicy - List the configured access control policies.
     */
    'get'(
      parameters?: Parameters<Paths.GetSysPolicy.QueryParameters>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/sys/policy/{name}']: {
    /**
     * getSysPolicyName - Retrieve the policy body for the named policy.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
    /**
     * postSysPolicyName - Add a new or update an existing policy.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostSysPolicyName.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
    /**
     * deleteSysPolicyName - Delete the policy with the given name.
     */
    'delete'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/sys/pprof/']: {
    /**
     * getSysPprof - Returns an HTML page listing the available profiles.
     * 
     * Returns an HTML page listing the available 
     * profiles. This should be mainly accessed via browsers or applications that can 
     * render pages.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/sys/pprof/cmdline']: {
    /**
     * getSysPprofCmdline - Returns the running program's command line.
     * 
     * Returns the running program's command line, with arguments separated by NUL bytes.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/sys/pprof/goroutine']: {
    /**
     * getSysPprofGoroutine - Returns stack traces of all current goroutines.
     * 
     * Returns stack traces of all current goroutines.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/sys/pprof/heap']: {
    /**
     * getSysPprofHeap - Returns a sampling of memory allocations of live object.
     * 
     * Returns a sampling of memory allocations of live object.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/sys/pprof/profile']: {
    /**
     * getSysPprofProfile - Returns a pprof-formatted cpu profile payload.
     * 
     * Returns a pprof-formatted cpu profile payload. Profiling lasts for duration specified in seconds GET parameter, or for 30 seconds if not specified.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/sys/pprof/symbol']: {
    /**
     * getSysPprofSymbol - Returns the program counters listed in the request.
     * 
     * Returns the program counters listed in the request.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/sys/pprof/trace']: {
    /**
     * getSysPprofTrace - Returns the execution trace in binary form.
     * 
     * Returns  the execution trace in binary form. Tracing lasts for duration specified in seconds GET parameter, or for 1 second if not specified.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/sys/quotas/config']: {
    /**
     * getSysQuotasConfig
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
    /**
     * postSysQuotasConfig
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostSysQuotasConfig.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/sys/quotas/rate-limit']: {
    /**
     * getSysQuotasRateLimit
     */
    'get'(
      parameters?: Parameters<Paths.GetSysQuotasRateLimit.QueryParameters>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/sys/quotas/rate-limit/{name}']: {
    /**
     * getSysQuotasRateLimitName
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
    /**
     * postSysQuotasRateLimitName
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostSysQuotasRateLimitName.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
    /**
     * deleteSysQuotasRateLimitName
     */
    'delete'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/sys/raw']: {
    /**
     * getSysRaw - Read the value of the key at the given path.
     */
    'get'(
      parameters?: Parameters<Paths.GetSysRaw.QueryParameters>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
    /**
     * postSysRaw - Update the value of the key at the given path.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostSysRaw.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
    /**
     * deleteSysRaw - Delete the key with given path.
     */
    'delete'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/sys/raw/{path}']: {
    /**
     * getSysRawPath - Read the value of the key at the given path.
     */
    'get'(
      parameters?: Parameters<Paths.GetSysRawPath.QueryParameters>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
    /**
     * postSysRawPath - Update the value of the key at the given path.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostSysRawPath.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
    /**
     * deleteSysRawPath - Delete the key with given path.
     */
    'delete'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/sys/rekey/backup']: {
    /**
     * getSysRekeyBackup - Return the backup copy of PGP-encrypted unseal keys.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
    /**
     * deleteSysRekeyBackup - Delete the backup copy of PGP-encrypted unseal keys.
     */
    'delete'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/sys/rekey/init']: {
    /**
     * getSysRekeyInit - Reads the configuration and progress of the current rekey attempt.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
    /**
     * postSysRekeyInit - Initializes a new rekey attempt.
     * 
     * Only a single rekey attempt can take place at a time, and changing the parameters of a rekey requires canceling and starting a new rekey, which will also provide a new nonce.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostSysRekeyInit.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
    /**
     * deleteSysRekeyInit - Cancels any in-progress rekey.
     * 
     * This clears the rekey settings as well as any progress made. This must be called to change the parameters of the rekey. Note: verification is still a part of a rekey. If rekeying is canceled during the verification flow, the current unseal keys remain valid.
     */
    'delete'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/sys/rekey/recovery-key-backup']: {
    /**
     * getSysRekeyRecoveryKeyBackup - Allows fetching or deleting the backup of the rotated unseal keys.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
    /**
     * deleteSysRekeyRecoveryKeyBackup - Allows fetching or deleting the backup of the rotated unseal keys.
     */
    'delete'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/sys/rekey/update']: {
    /**
     * postSysRekeyUpdate - Enter a single master key share to progress the rekey of the Vault.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostSysRekeyUpdate.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/sys/rekey/verify']: {
    /**
     * getSysRekeyVerify - Read the configuration and progress of the current rekey verification attempt.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
    /**
     * postSysRekeyVerify - Enter a single new key share to progress the rekey verification operation.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostSysRekeyVerify.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
    /**
     * deleteSysRekeyVerify - Cancel any in-progress rekey verification operation.
     * 
     * This clears any progress made and resets the nonce. Unlike a `DELETE` against `sys/rekey/init`, this only resets the current verification operation, not the entire rekey atttempt.
     */
    'delete'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/sys/remount']: {
    /**
     * postSysRemount - Move the mount point of an already-mounted backend.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostSysRemount.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/sys/renew']: {
    /**
     * postSysRenew - Renews a lease, requesting to extend the lease.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostSysRenew.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/sys/renew/{url_lease_id}']: {
    /**
     * postSysRenewUrl_lease_id - Renews a lease, requesting to extend the lease.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostSysRenewUrlLeaseId.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/sys/replication/status']: {
    /**
     * getSysReplicationStatus
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/sys/revoke']: {
    /**
     * postSysRevoke - Revokes a lease immediately.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostSysRevoke.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/sys/revoke-force/{prefix}']: {
    /**
     * postSysRevokeForcePrefix - Revokes all secrets or tokens generated under a given prefix immediately
     * 
     * Unlike `/sys/leases/revoke-prefix`, this path ignores backend errors encountered during revocation. This is potentially very dangerous and should only be used in specific emergency situations where errors in the backend or the connected backend service prevent normal revocation.
     * 
     * By ignoring these errors, Vault abdicates responsibility for ensuring that the issued credentials or secrets are properly revoked and/or cleaned up. Access to this endpoint should be tightly controlled.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/sys/revoke-prefix/{prefix}']: {
    /**
     * postSysRevokePrefixPrefix - Revokes all secrets (via a lease ID prefix) or tokens (via the tokens' path property) generated under a given prefix immediately.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostSysRevokePrefixPrefix.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/sys/revoke/{url_lease_id}']: {
    /**
     * postSysRevokeUrl_lease_id - Revokes a lease immediately.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostSysRevokeUrlLeaseId.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/sys/rotate']: {
    /**
     * postSysRotate - Rotates the backend encryption key used to persist data.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/sys/seal']: {
    /**
     * postSysSeal - Seal the Vault.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/sys/seal-status']: {
    /**
     * getSysSealStatus - Check the seal status of a Vault.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/sys/step-down']: {
    /**
     * postSysStepDown - Cause the node to give up active status.
     * 
     * This endpoint forces the node to give up active status. If the node does not have active status, this endpoint does nothing. Note that the node will sleep for ten seconds before attempting to grab the active lock again, but if no standby nodes grab the active lock in the interim, the same node may become the active node again.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/sys/tools/hash']: {
    /**
     * postSysToolsHash - Generate a hash sum for input data
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostSysToolsHash.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/sys/tools/hash/{urlalgorithm}']: {
    /**
     * postSysToolsHashUrlalgorithm - Generate a hash sum for input data
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostSysToolsHashUrlalgorithm.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/sys/tools/random']: {
    /**
     * postSysToolsRandom - Generate random bytes
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostSysToolsRandom.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/sys/tools/random/{urlbytes}']: {
    /**
     * postSysToolsRandomUrlbytes - Generate random bytes
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostSysToolsRandomUrlbytes.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/sys/unseal']: {
    /**
     * postSysUnseal - Unseal the Vault.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostSysUnseal.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/sys/wrapping/lookup']: {
    /**
     * getSysWrappingLookup - Look up wrapping properties for the requester's token.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
    /**
     * postSysWrappingLookup - Look up wrapping properties for the given token.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostSysWrappingLookup.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/sys/wrapping/rewrap']: {
    /**
     * postSysWrappingRewrap - Rotates a response-wrapped token.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostSysWrappingRewrap.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/sys/wrapping/unwrap']: {
    /**
     * postSysWrappingUnwrap - Unwraps a response-wrapped token.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostSysWrappingUnwrap.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/sys/wrapping/wrap']: {
    /**
     * postSysWrappingWrap - Response-wraps an arbitrary JSON object.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/transit/backup/{name}']: {
    /**
     * getTransitBackupName - Backup the named key
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/transit/cache-config']: {
    /**
     * getTransitCacheConfig - Returns the size of the active cache
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
    /**
     * postTransitCacheConfig - Configures a new cache of the specified size
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostTransitCacheConfig.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/transit/datakey/{plaintext}/{name}']: {
    /**
     * postTransitDatakeyPlaintextName - Generate a data key
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostTransitDatakeyPlaintextName.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/transit/decrypt/{name}']: {
    /**
     * postTransitDecryptName - Decrypt a ciphertext value using a named key
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostTransitDecryptName.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/transit/encrypt/{name}']: {
    /**
     * postTransitEncryptName - Encrypt a plaintext value or a batch of plaintext
     * blocks using a named key
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostTransitEncryptName.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/transit/export/{type}/{name}']: {
    /**
     * getTransitExportTypeName - Export named encryption or signing key
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/transit/export/{type}/{name}/{version}']: {
    /**
     * getTransitExportTypeNameVersion - Export named encryption or signing key
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/transit/hash']: {
    /**
     * postTransitHash - Generate a hash sum for input data
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostTransitHash.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/transit/hash/{urlalgorithm}']: {
    /**
     * postTransitHashUrlalgorithm - Generate a hash sum for input data
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostTransitHashUrlalgorithm.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/transit/hmac/{name}']: {
    /**
     * postTransitHmacName - Generate an HMAC for input data using the named key
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostTransitHmacName.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PostTransitHmacName.Responses.$200>
  }
  ['/transit/hmac/{name}/{urlalgorithm}']: {
    /**
     * postTransitHmacNameUrlalgorithm - Generate an HMAC for input data using the named key
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostTransitHmacNameUrlalgorithm.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PostTransitHmacNameUrlalgorithm.Responses.$200>
  }
  ['/transit/keys']: {
    /**
     * getTransitKeys - Managed named encryption keys
     */
    'get'(
      parameters?: Parameters<Paths.GetTransitKeys.QueryParameters>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/transit/keys/{name}']: {
    /**
     * getTransitKeysName - Managed named encryption keys
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetTransitKeysName.Responses.$200>
    /**
     * postTransitKeysName - Managed named encryption keys
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostTransitKeysName.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
    /**
     * deleteTransitKeysName - Managed named encryption keys
     */
    'delete'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/transit/keys/{name}/config']: {
    /**
     * postTransitKeysNameConfig - Configure a named encryption key
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostTransitKeysNameConfig.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/transit/keys/{name}/rotate']: {
    /**
     * postTransitKeysNameRotate - Rotate named encryption key
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/transit/keys/{name}/trim']: {
    /**
     * postTransitKeysNameTrim - Trim key versions of a named key
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostTransitKeysNameTrim.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/transit/random']: {
    /**
     * postTransitRandom - Generate random bytes
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostTransitRandom.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/transit/random/{urlbytes}']: {
    /**
     * postTransitRandomUrlbytes - Generate random bytes
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostTransitRandomUrlbytes.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/transit/restore']: {
    /**
     * postTransitRestore - Restore the named key
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostTransitRestore.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/transit/restore/{name}']: {
    /**
     * postTransitRestoreName - Restore the named key
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostTransitRestoreName.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/transit/rewrap/{name}']: {
    /**
     * postTransitRewrapName - Rewrap ciphertext
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostTransitRewrapName.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/transit/sign/{name}']: {
    /**
     * postTransitSignName - Generate a signature for input data using the named key
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostTransitSignName.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PostTransitSignName.Responses.$200>
  }
  ['/transit/sign/{name}/{urlalgorithm}']: {
    /**
     * postTransitSignNameUrlalgorithm - Generate a signature for input data using the named key
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostTransitSignNameUrlalgorithm.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/transit/verify/{name}']: {
    /**
     * postTransitVerifyName - Verify a signature or HMAC for input data created using the named key
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostTransitVerifyName.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PostTransitVerifyName.Responses.$200>
  }
  ['/transit/verify/{name}/{urlalgorithm}']: {
    /**
     * postTransitVerifyNameUrlalgorithm - Verify a signature or HMAC for input data created using the named key
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject>,
      data?: Paths.PostTransitVerifyNameUrlalgorithm.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
}

export type Client = OpenAPIClient<OperationMethods, PathsDictionary>
