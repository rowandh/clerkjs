import type { DeepPartial } from './utils';

export type LocalizationValue = string;

/**
 * A type containing all the possible localization keys the prebuilt Clerk components support.
 * Users aiming to customise a few strings can also peak at the `data-localization-key` attribute by inspecting
 * the DOM and updating the corresponding key.
 * Users aiming to completely localize the components by providing a complete translation can use
 * the default english resource object from {@link https://github.com/clerkinc/javascript our open source repo}
 * as a starting point.
 */
export type LocalizationResource = DeepPartial<_LocalizationResource>;

type _LocalizationResource = {
  socialButtonsBlockButton: LocalizationValue;
  dividerText: LocalizationValue;
  formFieldLabel__emailAddress: LocalizationValue;
  formFieldLabel__emailAddresses: LocalizationValue;
  formFieldLabel__phoneNumber: LocalizationValue;
  formFieldLabel__username: LocalizationValue;
  formFieldLabel__emailAddress_phoneNumber: LocalizationValue;
  formFieldLabel__emailAddress_username: LocalizationValue;
  formFieldLabel__phoneNumber_username: LocalizationValue;
  formFieldLabel__emailAddress_phoneNumber_username: LocalizationValue;
  formFieldLabel__password: LocalizationValue;
  formFieldLabel__newPassword: LocalizationValue;
  formFieldLabel__confirmPassword: LocalizationValue;
  formFieldLabel__firstName: LocalizationValue;
  formFieldLabel__lastName: LocalizationValue;
  formFieldLabel__backupCode: LocalizationValue;
  formFieldLabel__organizationName: LocalizationValue;
  formFieldLabel__role: LocalizationValue;
  formFieldInputPlaceholder__emailAddress: LocalizationValue;
  formFieldInputPlaceholder__emailAddresses: LocalizationValue;
  formFieldInputPlaceholder__phoneNumber: LocalizationValue;
  formFieldInputPlaceholder__username: LocalizationValue;
  formFieldInputPlaceholder__emailAddress_phoneNumber: LocalizationValue;
  formFieldInputPlaceholder__emailAddress_username: LocalizationValue;
  formFieldInputPlaceholder__phoneNumber_username: LocalizationValue;
  formFieldInputPlaceholder__emailAddress_phoneNumber_username: LocalizationValue;
  formFieldInputPlaceholder__password: LocalizationValue;
  formFieldInputPlaceholder__firstName: LocalizationValue;
  formFieldInputPlaceholder__lastName: LocalizationValue;
  formFieldInputPlaceholder__backupCode: LocalizationValue;
  formFieldInputPlaceholder__organizationName: LocalizationValue;
  formFieldAction__forgotPassword: LocalizationValue;
  formFieldHintText__optional: LocalizationValue;
  formButtonPrimary: LocalizationValue;
  signInEnterPasswordTitle: LocalizationValue;
  backButton: LocalizationValue;
  footerActionLink__useAnotherMethod: LocalizationValue;
  badge__primary: LocalizationValue;
  badge__thisDevice: LocalizationValue;
  badge__userDevice: LocalizationValue;
  badge__otherImpersonatorDevice: LocalizationValue;
  badge__default: LocalizationValue;
  badge__unverified: LocalizationValue;
  badge__requiresAction: LocalizationValue;
  badge__you: LocalizationValue;
  footerPageLink__help: LocalizationValue;
  footerPageLink__privacy: LocalizationValue;
  footerPageLink__terms: LocalizationValue;
  paginationButton__previous: LocalizationValue;
  paginationButton__next: LocalizationValue;
  paginationRowText__displaying: LocalizationValue;
  paginationRowText__of: LocalizationValue;
  membershipRole__admin: LocalizationValue;
  membershipRole__basicMember: LocalizationValue;
  membershipRole__guestMember: LocalizationValue;
  signUp: {
    start: {
      title: LocalizationValue;
      subtitle: LocalizationValue;
      actionText: LocalizationValue;
      actionLink: LocalizationValue;
    };
    emailLink: {
      title: LocalizationValue;
      subtitle: LocalizationValue;
      formTitle: LocalizationValue;
      formSubtitle: LocalizationValue;
      resendButton: LocalizationValue;
      verified: {
        title: LocalizationValue;
      };
      loading: {
        title: LocalizationValue;
      };
      verifiedSwitchTab: {
        title: LocalizationValue;
        subtitle: LocalizationValue;
        subtitleNewTab: LocalizationValue;
      };
    };
    emailCode: {
      title: LocalizationValue;
      subtitle: LocalizationValue;
      formTitle: LocalizationValue;
      formSubtitle: LocalizationValue;
      resendButton: LocalizationValue;
    };
    phoneCode: {
      title: LocalizationValue;
      subtitle: LocalizationValue;
      formTitle: LocalizationValue;
      formSubtitle: LocalizationValue;
      resendButton: LocalizationValue;
    };
    continue: {
      title: LocalizationValue;
      subtitle: LocalizationValue;
      actionText: LocalizationValue;
      actionLink: LocalizationValue;
    };
  };
  signIn: {
    start: {
      title: LocalizationValue;
      subtitle: LocalizationValue;
      actionText: LocalizationValue;
      actionLink: LocalizationValue;
    };
    password: {
      title: LocalizationValue;
      subtitle: LocalizationValue;
      actionLink: LocalizationValue;
    };
    emailCode: {
      title: LocalizationValue;
      subtitle: LocalizationValue;
      formTitle: LocalizationValue;
      formSubtitle: LocalizationValue;
      resendButton: LocalizationValue;
    };
    emailLink: {
      title: LocalizationValue;
      subtitle: LocalizationValue;
      formTitle: LocalizationValue;
      formSubtitle: LocalizationValue;
      resendButton: LocalizationValue;
      unusedTab: {
        title: LocalizationValue;
      };
      verified: {
        title: LocalizationValue;
        subtitle: LocalizationValue;
      };
      verifiedSwitchTab: {
        subtitle: LocalizationValue;
        titleNewTab: LocalizationValue;
        subtitleNewTab: LocalizationValue;
      };
      loading: {
        title: LocalizationValue;
        subtitle: LocalizationValue;
      };
      failed: {
        title: LocalizationValue;
        subtitle: LocalizationValue;
      };
      expired: {
        title: LocalizationValue;
        subtitle: LocalizationValue;
      };
    };
    phoneCode: {
      title: LocalizationValue;
      subtitle: LocalizationValue;
      formTitle: LocalizationValue;
      formSubtitle: LocalizationValue;
      resendButton: LocalizationValue;
    };
    phoneCodeMfa: {
      title: LocalizationValue;
      subtitle: LocalizationValue;
      formTitle: LocalizationValue;
      formSubtitle: LocalizationValue;
      resendButton: LocalizationValue;
    };
    totpMfa: {
      title: LocalizationValue;
      subtitle: LocalizationValue;
      formTitle: LocalizationValue;
      formSubtitle: LocalizationValue;
    };
    backupCodeMfa: {
      title: LocalizationValue;
      subtitle: LocalizationValue;
      formTitle: LocalizationValue;
      formSubtitle: LocalizationValue;
    };
    alternativeMethods: {
      title: LocalizationValue;
      actionLink: LocalizationValue;
      blockButton__emailLink: LocalizationValue;
      blockButton__emailCode: LocalizationValue;
      blockButton__phoneCode: LocalizationValue;
      blockButton__password: LocalizationValue;
      blockButton__totp: LocalizationValue;
      blockButton__backupCode: LocalizationValue;
      getHelp: {
        title: LocalizationValue;
        content: LocalizationValue;
        blockButton__emailSupport: LocalizationValue;
      };
    };
    noAvailableMethods: {
      title: LocalizationValue;
      subtitle: LocalizationValue;
      message: LocalizationValue;
    };
  };
  userProfile: {
    mobileButton__menu: LocalizationValue;
    formButtonPrimary__continue: LocalizationValue;
    formButtonPrimary__finish: LocalizationValue;
    formButtonReset: LocalizationValue;
    start: {
      headerTitle__account: LocalizationValue;
      headerTitle__security: LocalizationValue;
      headerSubtitle__account: LocalizationValue;
      headerSubtitle__security: LocalizationValue;
      profileSection: {
        title: LocalizationValue;
      };
      usernameSection: {
        title: LocalizationValue;
        primaryButton__changeUsername: LocalizationValue;
        primaryButton__setUsername: LocalizationValue;
      };
      emailAddressesSection: {
        title: LocalizationValue;
        primaryButton: LocalizationValue;
        detailsTitle__primary: LocalizationValue;
        detailsSubtitle__primary: LocalizationValue;
        detailsAction__primary: LocalizationValue;
        detailsTitle__nonPrimary: LocalizationValue;
        detailsSubtitle__nonPrimary: LocalizationValue;
        detailsAction__nonPrimary: LocalizationValue;
        detailsTitle__unverified: LocalizationValue;
        detailsSubtitle__unverified: LocalizationValue;
        detailsAction__unverified: LocalizationValue;
        destructiveActionTitle: LocalizationValue;
        destructiveActionSubtitle: LocalizationValue;
        destructiveAction: LocalizationValue;
      };
      phoneNumbersSection: {
        title: LocalizationValue;
        primaryButton: LocalizationValue;
        detailsTitle__primary: LocalizationValue;
        detailsSubtitle__primary: LocalizationValue;
        detailsAction__primary: LocalizationValue;
        detailsTitle__nonPrimary: LocalizationValue;
        detailsSubtitle__nonPrimary: LocalizationValue;
        detailsAction__nonPrimary: LocalizationValue;
        detailsTitle__unverified: LocalizationValue;
        detailsSubtitle__unverified: LocalizationValue;
        detailsAction__unverified: LocalizationValue;
        destructiveActionTitle: LocalizationValue;
        destructiveActionSubtitle: LocalizationValue;
        destructiveAction: LocalizationValue;
      };
      connectedAccountsSection: {
        title: LocalizationValue;
        primaryButton: LocalizationValue;
        title__conectionFailed: LocalizationValue;
        actionLabel__conectionFailed: LocalizationValue;
        destructiveActionTitle: LocalizationValue;
        destructiveActionSubtitle: LocalizationValue;
        destructiveActionAccordionSubtitle: LocalizationValue;
      };
      passwordSection: {
        title: LocalizationValue;
        primaryButton__changePassword: LocalizationValue;
        primaryButton__setPassword: LocalizationValue;
      };
      mfaSection: {
        title: LocalizationValue;
        primaryButton: LocalizationValue;
        phoneCode: {
          destructiveActionTitle: LocalizationValue;
          destructiveActionSubtitle: LocalizationValue;
          destructiveActionLabel: LocalizationValue;
          title__default: LocalizationValue;
          title__setDefault: LocalizationValue;
          subtitle__default: LocalizationValue;
          subtitle__setDefault: LocalizationValue;
          actionLabel__setDefault: LocalizationValue;
        };
        backupCodes: {
          headerTitle: LocalizationValue;
          title__regenerate: LocalizationValue;
          subtitle__regenerate: LocalizationValue;
          actionLabel__regenerate: LocalizationValue;
        };
        totp: {
          headerTitle: LocalizationValue;
          title: LocalizationValue;
          subtitle: LocalizationValue;
          destructiveActionTitle: LocalizationValue;
          destructiveActionSubtitle: LocalizationValue;
          destructiveActionLabel: LocalizationValue;
        };
      };
      activeDevicesSection: {
        title: LocalizationValue;
        primaryButton: LocalizationValue;
        detailsTitle: LocalizationValue;
        detailsSubtitle: LocalizationValue;
        destructiveActionTitle: LocalizationValue;
        destructiveActionSubtitle: LocalizationValue;
        destructiveAction: LocalizationValue;
      };
      web3WalletsSection: {
        title: LocalizationValue;
        primaryButton: LocalizationValue;
        destructiveActionTitle: LocalizationValue;
        destructiveActionSubtitle: LocalizationValue;
        destructiveAction: LocalizationValue;
      };
    };
    profilePage: {
      title: LocalizationValue;
      imageFormTitle: LocalizationValue;
      imageFormSubtitle: LocalizationValue;
      imageFormDestructiveActionSubtitle: LocalizationValue;
      fileDropAreaTitle: LocalizationValue;
      fileDropAreaAction: LocalizationValue;
      fileDropAreaHint: LocalizationValue;
      successMessage: LocalizationValue;
    };
    usernamePage: {
      title: LocalizationValue;
      successMessage: LocalizationValue;
    };
    emailAddressPage: {
      title: LocalizationValue;
      emailCode: {
        formHint: LocalizationValue;
        formTitle: LocalizationValue;
        formSubtitle: LocalizationValue;
        resendButton: LocalizationValue;
        successMessage: LocalizationValue;
      };
      emailLink: {
        formHint: LocalizationValue;
        formTitle: LocalizationValue;
        formSubtitle: LocalizationValue;
        resendButton: LocalizationValue;
        successMessage: LocalizationValue;
      };
      removeResource: {
        title: LocalizationValue;
        messageLine1: LocalizationValue;
        messageLine2: LocalizationValue;
        successMessage: LocalizationValue;
      };
    };
    phoneNumberPage: {
      title: LocalizationValue;
      successMessage: LocalizationValue;
      infoText: LocalizationValue;
      infoText__secondary: LocalizationValue;
      removeResource: {
        title: LocalizationValue;
        messageLine1: LocalizationValue;
        messageLine2: LocalizationValue;
        successMessage: LocalizationValue;
      };
    };
    connectedAccountPage: {
      title: LocalizationValue;
      formHint: LocalizationValue;
      formHint__noAccounts: LocalizationValue;
      socialButtonsBlockButton: LocalizationValue;
      successMessage: LocalizationValue;
      removeResource: {
        title: LocalizationValue;
        messageLine1: LocalizationValue;
        messageLine2: LocalizationValue;
        successMessage: LocalizationValue;
      };
    };
    web3WalletPage: {
      title: LocalizationValue;
      subtitle__availableWallets: LocalizationValue;
      subtitle__unavailableWallets: LocalizationValue;
      successMessage: LocalizationValue;
      removeResource: {
        title: LocalizationValue;
        messageLine1: LocalizationValue;
        messageLine2: LocalizationValue;
        successMessage: LocalizationValue;
      };
    };
    passwordPage: {
      title: LocalizationValue;
      successMessage: LocalizationValue;
    };
    mfaPage: {
      title: LocalizationValue;
      formHint: LocalizationValue;
    };
    mfaTOTPPage: {
      title: LocalizationValue;
      verifyTitle: LocalizationValue;
      verifySubtitle: LocalizationValue;
      successMessage: LocalizationValue;
      authenticatorApp: {
        infoText__ableToScan: LocalizationValue;
        infoText__unableToScan: LocalizationValue;
        inputLabel__unableToScan1: LocalizationValue;
        inputLabel__unableToScan2: LocalizationValue;
        buttonAbleToScan__nonPrimary: LocalizationValue;
        buttonUnableToScan__nonPrimary: LocalizationValue;
      };
      removeResource: {
        title: LocalizationValue;
        messageLine1: LocalizationValue;
        messageLine2: LocalizationValue;
        successMessage: LocalizationValue;
      };
    };
    mfaPhoneCodePage: {
      title: LocalizationValue;
      primaryButton__addPhoneNumber: LocalizationValue;
      subtitle__availablePhoneNumbers: LocalizationValue;
      subtitle__unavailablePhoneNumbers: LocalizationValue;
      successMessage: LocalizationValue;
      removeResource: {
        title: LocalizationValue;
        messageLine1: LocalizationValue;
        messageLine2: LocalizationValue;
        successMessage: LocalizationValue;
      };
    };
    backupCodePage: {
      title: LocalizationValue;
      title__codelist: LocalizationValue;
      subtitle__codelist: LocalizationValue;
      infoText1: LocalizationValue;
      infoText2: LocalizationValue;
      successSubtitle: LocalizationValue;
      successMessage: LocalizationValue;
      actionLabel__copy: LocalizationValue;
      actionLabel__copied: LocalizationValue;
      actionLabel__download: LocalizationValue;
      actionLabel__print: LocalizationValue;
    };
  };
  userButton: {
    action__manageAccount: LocalizationValue;
    action__signOut: LocalizationValue;
    action__signOutAll: LocalizationValue;
    action__addAccount: LocalizationValue;
  };
  organizationSwitcher: {
    personalWorkspace: LocalizationValue;
    notSelected: LocalizationValue;
    action__createOrganization: LocalizationValue;
    action__manageOrganization: LocalizationValue;
  };
  impersonationFab: {
    title: LocalizationValue;
    action__signOut: LocalizationValue;
  };
  organizationProfile: {
    start: {
      headerTitle__members: LocalizationValue;
      headerTitle__settings: LocalizationValue;
      headerSubtitle__members: LocalizationValue;
      headerSubtitle__settings: LocalizationValue;
    };
    profilePage: {
      title: LocalizationValue;
      subtitle: LocalizationValue;
      successMessage: LocalizationValue;
      dangerSection: {
        title: LocalizationValue;
        leaveOrganization: {
          title: LocalizationValue;
          messageLine1: LocalizationValue;
          messageLine2: LocalizationValue;
          successMessage: LocalizationValue;
        };
      };
    };
    invitePage: {
      title: LocalizationValue;
      subtitle: LocalizationValue;
      successMessage: LocalizationValue;
      detailsTitle__inviteFailed: LocalizationValue;
      formButtonPrimary__continue: LocalizationValue;
    };
    membersPage: {
      detailsTitle__emptyRow: LocalizationValue;
      action__invite: LocalizationValue;
      start: {
        headerTitle__active: LocalizationValue;
        headerTitle__invited: LocalizationValue;
      };
      activeMembersTab: {
        tableHeader__user: LocalizationValue;
        tableHeader__joined: LocalizationValue;
        tableHeader__role: LocalizationValue;
        tableHeader__actions: LocalizationValue;
        menuAction__remove: LocalizationValue;
      };
      invitedMembersTab: {
        tableHeader__invited: LocalizationValue;
        menuAction__revoke: LocalizationValue;
      };
    };
  };
  createOrganization: {
    title: LocalizationValue;
    /**
     * @deprecated This key is no longer used and will be removed in the next major version
     */
    subtitle: LocalizationValue;
    invitePage: {
      formButtonReset: LocalizationValue;
    };
  };
  unstable__errors: {
    form_identifier_not_found: LocalizationValue;
    form_password_pwned: LocalizationValue;
    form_username_invalid_length: LocalizationValue;
    form_param_format_invalid: LocalizationValue;
    form_password_length_too_short: LocalizationValue;
    form_param_nil: LocalizationValue;
    form_code_incorrect: LocalizationValue;
    form_password_incorrect: LocalizationValue;
    not_allowed_access: LocalizationValue;
  };
  dates: {
    previous6Days: LocalizationValue;
    lastDay: LocalizationValue;
    sameDay: LocalizationValue;
    nextDay: LocalizationValue;
    next6Days: LocalizationValue;
    numeric: LocalizationValue;
  };
};
