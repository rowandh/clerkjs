import type { OAuthProvider } from '@clerk/types';

import { joinPaths } from '../../util/path';
import type { OauthAccessToken, OrganizationMembership, User } from '../resources';
import { AbstractAPI } from './AbstractApi';

const basePath = '/users';

type UserCountParams = {
  emailAddress?: string[];
  phoneNumber?: string[];
  username?: string[];
  web3Wallet?: string[];
  query?: string;
  userId?: string[];
  externalId?: string[];
};

type UserListParams = UserCountParams & {
  limit?: number;
  offset?: number;
  orderBy?: 'created_at' | 'updated_at' | '+created_at' | '+updated_at' | '-created_at' | '-updated_at';
};

type UserMetadataParams = {
  publicMetadata?: Record<string, unknown>;
  privateMetadata?: Record<string, unknown>;
  unsafeMetadata?: Record<string, unknown>;
};

type PasswordHasher =
  | 'argon2i'
  | 'argon2id'
  | 'bcrypt'
  | 'md5'
  | 'pbkdf2_sha256_django'
  | 'pbkdf2_sha1'
  | 'scrypt_firebase';

type UserPasswordHashingParams = {
  passwordDigest: string;
  passwordHasher: PasswordHasher;
};

type CreateUserParams = {
  externalId?: string;
  emailAddress?: string[];
  phoneNumber?: string[];
  username?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  skipPasswordChecks?: boolean;
  skipPasswordRequirement?: boolean;
  totpSecret?: string;
  backupCodes?: string[];
} & UserMetadataParams &
  (UserPasswordHashingParams | {});

interface UpdateUserParams extends UserMetadataParams {
  firstName?: string;
  lastName?: string;
  username?: string;
  password?: string;
  primaryEmailAddressID?: string;
  primaryPhoneNumberID?: string;
  totpSecret?: string;
  backupCodes?: string[];
}

type GetOrganizationMembershipListParams = {
  userId: string;
  limit?: number;
  offset?: number;
};

export class UserAPI extends AbstractAPI {
  public async getUserList(params: UserListParams = {}) {
    return this.request<User[]>({
      method: 'GET',
      path: basePath,
      queryParams: params,
    });
  }

  public async getUser(userId: string) {
    this.requireId(userId);
    return this.request<User>({
      method: 'GET',
      path: joinPaths(basePath, userId),
    });
  }

  public async createUser(params: CreateUserParams) {
    return this.request<User>({
      method: 'POST',
      path: basePath,
      bodyParams: params,
    });
  }

  public async updateUser(userId: string, params: UpdateUserParams = {}) {
    this.requireId(userId);

    return this.request<User>({
      method: 'PATCH',
      path: joinPaths(basePath, userId),
      bodyParams: params,
    });
  }

  public async updateUserMetadata(userId: string, params: UserMetadataParams) {
    this.requireId(userId);

    return this.request<User>({
      method: 'PATCH',
      path: joinPaths(basePath, userId, 'metadata'),
      bodyParams: params,
    });
  }

  public async deleteUser(userId: string) {
    this.requireId(userId);
    return this.request<User>({
      method: 'DELETE',
      path: joinPaths(basePath, userId),
    });
  }

  public async getCount(params: UserListParams = {}) {
    return this.request<number>({
      method: 'GET',
      path: joinPaths(basePath, 'count'),
      queryParams: params,
    });
  }

  public async getUserOauthAccessToken(userId: string, provider: `oauth_${OAuthProvider}`) {
    this.requireId(userId);
    return this.request<OauthAccessToken[]>({
      method: 'GET',
      path: joinPaths(basePath, userId, 'oauth_access_tokens', provider),
    });
  }

  public async disableUserMFA(userId: string) {
    this.requireId(userId);
    return this.request<User>({
      method: 'DELETE',
      path: joinPaths(basePath, userId, 'mfa'),
    });
  }

  public async getOrganizationMembershipList(params: GetOrganizationMembershipListParams) {
    const { userId, limit, offset } = params;
    this.requireId(userId);

    return this.request<OrganizationMembership[]>({
      method: 'GET',
      path: joinPaths(basePath, userId, 'organization_memberships'),
      queryParams: { limit, offset },
    });
  }
}
