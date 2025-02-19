import type {
  BirthdayAttribute,
  FirstNameAttribute,
  GenderAttribute,
  LastNameAttribute,
  PasswordAttribute,
} from './attributes';
import type { AttemptEmailAddressVerificationParams, PrepareEmailAddressVerificationParams } from './emailAddress';
import type {
  EmailAddressIdentifier,
  EmailAddressOrPhoneNumberIdentifier,
  PhoneNumberIdentifier,
  UsernameIdentifier,
  Web3WalletIdentifier,
} from './identifiers';
import type { AuthenticateWithRedirectParams } from './oauth';
import type { AttemptPhoneNumberVerificationParams, PreparePhoneNumberVerificationParams } from './phoneNumber';
import type { ClerkResource } from './resource';
import type {
  EmailCodeStrategy,
  EmailLinkStrategy,
  OAuthStrategy,
  PhoneCodeStrategy,
  TicketStrategy,
  Web3Strategy,
} from './strategies';
import type { SnakeToCamel } from './utils';
import type { CreateMagicLinkFlowReturn, StartMagicLinkFlowParams, VerificationResource } from './verification';
import type { AttemptWeb3WalletVerificationParams, AuthenticateWithWeb3Params } from './web3Wallet';

export interface SignUpResource extends ClerkResource {
  status: SignUpStatus | null;
  requiredFields: SignUpField[];
  optionalFields: SignUpField[];
  missingFields: SignUpField[];
  unverifiedFields: SignUpIdentificationField[];
  verifications: SignUpVerificationsResource;

  username: string | null;
  firstName: string | null;
  lastName: string | null;
  emailAddress: string | null;
  phoneNumber: string | null;
  web3wallet: string | null;
  hasPassword: boolean;
  unsafeMetadata: Record<string, unknown>;
  createdSessionId: string | null;
  createdUserId: string | null;
  abandonAt: number | null;

  create: (params: SignUpCreateParams) => Promise<SignUpResource>;

  update: (params: SignUpUpdateParams) => Promise<SignUpResource>;

  prepareVerification: (params: PrepareVerificationParams) => Promise<SignUpResource>;

  attemptVerification: (params: AttemptVerificationParams) => Promise<SignUpResource>;

  prepareEmailAddressVerification: (params?: PrepareEmailAddressVerificationParams) => Promise<SignUpResource>;

  attemptEmailAddressVerification: (params: AttemptEmailAddressVerificationParams) => Promise<SignUpResource>;

  preparePhoneNumberVerification: (params?: PreparePhoneNumberVerificationParams) => Promise<SignUpResource>;

  attemptPhoneNumberVerification: (params: AttemptPhoneNumberVerificationParams) => Promise<SignUpResource>;

  prepareWeb3WalletVerification: () => Promise<SignUpResource>;

  attemptWeb3WalletVerification: (params: AttemptWeb3WalletVerificationParams) => Promise<SignUpResource>;

  createMagicLinkFlow: () => CreateMagicLinkFlowReturn<StartMagicLinkFlowParams, SignUpResource>;

  authenticateWithRedirect: (params: AuthenticateWithRedirectParams) => Promise<void>;

  authenticateWithWeb3: (params: AuthenticateWithWeb3Params) => Promise<SignUpResource>;

  authenticateWithMetamask: () => Promise<SignUpResource>;
}

export type SignUpStatus = 'missing_requirements' | 'complete' | 'abandoned';

export type SignUpField = SignUpAttributeField | SignUpIdentificationField;

export type PrepareVerificationParams =
  | {
      strategy: EmailCodeStrategy;
    }
  | {
      strategy: EmailLinkStrategy;
      redirectUrl?: string;
    }
  | {
      strategy: PhoneCodeStrategy;
    }
  | {
      strategy: Web3Strategy;
    }
  | {
      strategy: OAuthStrategy;
      redirectUrl?: string;
      actionCompleteRedirectUrl?: string;
    };

export type AttemptVerificationParams =
  | {
      strategy: EmailCodeStrategy;
      code: string;
    }
  | {
      strategy: PhoneCodeStrategy;
      code: string;
    }
  | {
      strategy: Web3Strategy;
      signature: string;
    };

export type SignUpAttributeField =
  | FirstNameAttribute
  | LastNameAttribute
  | PasswordAttribute
  | BirthdayAttribute
  | GenderAttribute;

// TODO: SignUpVerifiableField or SignUpIdentifier?
export type SignUpVerifiableField =
  | UsernameIdentifier
  | EmailAddressIdentifier
  | PhoneNumberIdentifier
  | EmailAddressOrPhoneNumberIdentifier
  | Web3WalletIdentifier;

// TODO: Does it make sense that the identification *field* holds a *strategy*?
export type SignUpIdentificationField = SignUpVerifiableField | OAuthStrategy;

// TODO: Replace with discriminated union type
export type SignUpCreateParams = Partial<
  {
    externalAccountStrategy: string;
    externalAccountRedirectUrl: string;
    externalAccountActionCompleteRedirectUrl: string;
    strategy: OAuthStrategy | TicketStrategy;
    redirectUrl: string;
    actionCompleteRedirectUrl: string;
    transfer: boolean;
    unsafeMetadata: Record<string, unknown>;
    ticket: string;
  } & SnakeToCamel<Record<SignUpAttributeField | SignUpVerifiableField, string>>
>;

export type SignUpUpdateParams = SignUpCreateParams;

export interface SignUpVerificationsResource {
  emailAddress: SignUpVerificationResource;
  phoneNumber: SignUpVerificationResource;
  externalAccount: VerificationResource;
  web3Wallet: VerificationResource;
}

export interface SignUpVerificationResource extends VerificationResource {
  supportedStrategies: string[];
  nextAction: string;
}
