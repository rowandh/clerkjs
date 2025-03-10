import type {
  ActiveSessionResource,
  ClientResource,
  InitialState,
  OrganizationInvitationResource,
  OrganizationMembershipResource,
  OrganizationResource,
  Resources,
  UserResource,
} from '@clerk/types';
import React from 'react';

import IsomorphicClerk from '../isomorphicClerk';
import type { IsomorphicClerkOptions } from '../types';
import { AuthContext } from './AuthContext';
import { ClientContext } from './ClientContext';
import { IsomorphicClerkContext } from './IsomorphicClerkContext';
import { OrganizationContext } from './OrganizationContext';
import { SessionContext } from './SessionContext';
import { UserContext } from './UserContext';

type ClerkContextProvider = {
  isomorphicClerkOptions: IsomorphicClerkOptions;
  initialState: InitialState | undefined;
  children: React.ReactNode;
};

type ClerkContextProviderState = Resources;

export function ClerkContextProvider(props: ClerkContextProvider): JSX.Element | null {
  const { isomorphicClerkOptions, initialState, children } = props;
  const { isomorphicClerk: clerk, loaded: clerkLoaded } = useLoadedIsomorphicClerk(isomorphicClerkOptions);

  const [state, setState] = React.useState<ClerkContextProviderState>({
    client: clerk.client as ClientResource,
    session: clerk.session,
    user: clerk.user,
    organization: clerk.organization,
    lastOrganizationInvitation: null,
    lastOrganizationMember: null,
  });

  React.useEffect(() => {
    return clerk.addListener(e => setState({ ...e }));
  }, []);

  const derivedState = deriveState(clerkLoaded, state, initialState);
  const clerkCtx = React.useMemo(() => ({ value: clerk }), [clerkLoaded]);
  const clientCtx = React.useMemo(() => ({ value: state.client }), [state.client]);

  const { sessionId, session, userId, user, organizationId, organization } = derivedState;
  const actor = session?.actor || null;
  const organizationMembership = organization
    ? user?.organizationMemberships.find(m => m.organization.id === organizationId)
    : organization;
  const orgId = organizationId;
  const orgRole = organizationMembership ? organizationMembership.role : organizationMembership;
  const orgSlug = organizationMembership ? organizationMembership.organization.slug : organizationMembership;

  const authCtx = React.useMemo(
    () => ({
      value: { sessionId, userId, actor, orgId, orgRole, orgSlug },
    }),
    [sessionId, userId, actor, orgId, orgRole, orgSlug],
  );
  const userCtx = React.useMemo(() => ({ value: user }), [userId, user]);
  const sessionCtx = React.useMemo(() => ({ value: session }), [sessionId, session]);
  const organizationCtx = React.useMemo(() => {
    return {
      value: {
        organization: derivedState.organization,
        lastOrganizationInvitation: derivedState.lastOrganizationInvitation,
        lastOrganizationMember: derivedState.lastOrganizationMember,
      },
    };
  }, [
    derivedState.organizationId,
    derivedState.organization,
    derivedState.lastOrganizationInvitation,
    derivedState.lastOrganizationMember,
  ]);

  return (
    // @ts-expect-error
    <IsomorphicClerkContext.Provider value={clerkCtx}>
      <ClientContext.Provider value={clientCtx}>
        <SessionContext.Provider value={sessionCtx}>
          <OrganizationContext.Provider value={organizationCtx}>
            <AuthContext.Provider value={authCtx}>
              <UserContext.Provider value={userCtx}>{children}</UserContext.Provider>
            </AuthContext.Provider>
          </OrganizationContext.Provider>
        </SessionContext.Provider>
      </ClientContext.Provider>
    </IsomorphicClerkContext.Provider>
  );
}

const useLoadedIsomorphicClerk = (options: IsomorphicClerkOptions) => {
  const [loaded, setLoaded] = React.useState(false);
  const isomorphicClerk = React.useMemo(() => IsomorphicClerk.getOrCreateInstance(options), []);

  React.useEffect(() => {
    isomorphicClerk.__unstable__updateProps({ appearance: options.appearance });
  }, [options.appearance]);

  React.useEffect(() => {
    isomorphicClerk.__unstable__updateProps({ options });
  }, [options.localization]);

  React.useEffect(() => {
    isomorphicClerk.addOnLoaded(() => setLoaded(true));
  }, []);

  return { isomorphicClerk, loaded };
};

// This should be provided from isomorphicClerk
// TODO: move inside isomorphicClerk
function deriveState(
  clerkLoaded: boolean,
  state: ClerkContextProviderState,
  initialState: InitialState | undefined,
): {
  userId: string | null | undefined;
  sessionId: string | null | undefined;
  organizationId: string | null | undefined;
  session: ActiveSessionResource | null | undefined;
  user: UserResource | null | undefined;
  organization: OrganizationResource | null | undefined;
  lastOrganizationInvitation: OrganizationInvitationResource | null | undefined;
  lastOrganizationMember: OrganizationMembershipResource | null | undefined;
} {
  if (!clerkLoaded && initialState) {
    const userId = initialState.userId;
    // TODO: Instantiate an actual user resource
    const user = initialState.user as any as UserResource;
    const sessionId = initialState.sessionId;
    // TODO: Instantiate an actual session resource
    const session = initialState.session as any as ActiveSessionResource;

    const organization = initialState.organization as any as OrganizationResource;
    const organizationId = initialState.organizationId;
    return {
      sessionId,
      session,
      userId,
      user,
      organizationId,
      organization,
      lastOrganizationInvitation: null,
      lastOrganizationMember: null,
    };
  }
  const userId: string | null | undefined = state.user ? state.user.id : state.user;
  const user = state.user;
  const sessionId: string | null | undefined = state.session ? state.session.id : state.session;
  const session = state.session;
  const organizationId: string | null | undefined = state.organization ? state.organization.id : state.organization;
  const organization = state.organization;
  const lastOrganizationInvitation = state.lastOrganizationInvitation;
  const lastOrganizationMember = state.lastOrganizationMember;
  return {
    sessionId,
    session,
    userId,
    user,
    organization,
    organizationId,
    lastOrganizationInvitation,
    lastOrganizationMember,
  };
}
