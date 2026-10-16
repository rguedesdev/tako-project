"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import {
  clearAuthToken,
  getAuthToken,
  isAuthStorageKey,
  saveAuthToken,
} from "@/lib/auth";
import { graphqlRequest } from "@/lib/graphql";

type Subscription = {
  plan: "FREE" | "PREMIUM" | "VIP";
  status: "NONE" | "TRIALING" | "ACTIVE" | "PAST_DUE" | "CANCELED" | "EXPIRED";
  startedAt?: string | null;
  expiresAt?: string | null;
  renewalAt?: string | null;
  autoRenew: boolean;
  source?: string | null;
};

type AuthenticatedUser = {
  id: string;
  name: string;
  username: string;
  email: string;
  profilePicture?: string | null;
  accountType: string;
  subscription: Subscription;
  preferences: { showAdultContent: boolean };
};

type AuthPayload = { user: AuthenticatedUser; token: string };

type SignUpData = {
  name: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const AUTH_USER_FIELDS = `
  id name username email profilePicture accountType
  subscription { plan status startedAt expiresAt renewalAt autoRenew source }
  preferences { showAdultContent }
`;

function useAuth() {
  const [authenticatedUser, setAuthenticatedUser] = useState<AuthenticatedUser | null>(null);
  const [authToken, setAuthToken] = useState<string | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const router = useRouter();

  const logout = useCallback((redirect = true) => {
    clearAuthToken();
    setAuthToken(null);
    setAuthenticatedUser(null);
    setAuthLoading(false);
    if (redirect) router.replace("/");
  }, [router]);

  useEffect(() => {
    let active = true;
    let restoreID = 0;

    async function restoreSession() {
      const currentRestoreID = ++restoreID;
      const token = getAuthToken();

      if (!token) {
        if (active) {
          setAuthToken(null);
          setAuthenticatedUser(null);
          setAuthLoading(false);
        }
        return;
      }

      if (active) setAuthLoading(true);
      try {
        const { me } = await graphqlRequest<{ me: AuthenticatedUser }>(
          `query RestoreSession { me { ${AUTH_USER_FIELDS} } }`,
          {},
          token,
        );
        if (active && currentRestoreID === restoreID) {
          saveAuthToken(token);
          setAuthToken(token);
          setAuthenticatedUser(me);
        }
      } catch {
        if (active && currentRestoreID === restoreID) logout(false);
      } finally {
        if (active && currentRestoreID === restoreID) setAuthLoading(false);
      }
    }

    function handleStorage(event: StorageEvent) {
      if (isAuthStorageKey(event.key)) void restoreSession();
    }

    void restoreSession();
    window.addEventListener("storage", handleStorage);
    return () => {
      active = false;
      window.removeEventListener("storage", handleStorage);
    };
  }, [logout]);

  function authenticate(payload: AuthPayload, redirectTo: string) {
    saveAuthToken(payload.token);
    setAuthToken(payload.token);
    setAuthenticatedUser(payload.user);
    setAuthLoading(false);
    router.replace(redirectTo);
  }
  const updateAuthenticatedUser = useCallback((user: AuthenticatedUser) => setAuthenticatedUser(user), []);

  async function signIn(login: string, password: string, redirectTo = "/") {
    const { signIn: payload } = await graphqlRequest<{ signIn: AuthPayload }>(
      `mutation SignIn($data: SignInInput!) {
        signIn(data: $data) { user { ${AUTH_USER_FIELDS} } token }
      }`,
      { data: { login, password } },
      null,
    );
    authenticate(payload, redirectTo);
    return payload;
  }

  async function signUp(data: SignUpData, redirectTo = "/") {
    const { signUp: payload } = await graphqlRequest<{ signUp: AuthPayload }>(
      `mutation SignUp($data: SignUpInput!) {
        signUp(data: $data) { user { ${AUTH_USER_FIELDS} } token }
      }`,
      { data },
      null,
    );
    authenticate(payload, redirectTo);
    return payload;
  }

  return {
    authLoading,
    authToken,
    authenticatedUser,
    userAuthenticated: Boolean(authenticatedUser),
    signIn,
    signUp,
    logout,
    updateAuthenticatedUser,
  };
}

export { useAuth };
export type { AuthenticatedUser, AuthPayload, SignUpData, Subscription };
