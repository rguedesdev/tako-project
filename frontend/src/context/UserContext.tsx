"use client";

import { createContext, useContext } from "react";

import { useAuth } from "@/hooks/useAuth";
import type { AuthPayload, AuthenticatedUser, SignUpData } from "@/hooks/useAuth";

interface UserContextValue {
  authLoading: boolean;
  authToken: string | null;
  userAuthenticated: boolean;
  authenticatedUser: AuthenticatedUser | null;
  signIn: (login: string, password: string, redirectTo?: string) => Promise<AuthPayload>;
  signUp: (data: SignUpData, redirectTo?: string) => Promise<AuthPayload>;
  logout: (redirect?: boolean) => void;
  updateAuthenticatedUser: (user: AuthenticatedUser) => void;
}

const UserContext = createContext<UserContextValue | null>(null);

function UserProvider({ children }: { children: React.ReactNode }) {
  const auth = useAuth();
  return <UserContext.Provider value={auth}>{children}</UserContext.Provider>;
}

function useUser() {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser precisa estar dentro de UserProvider.");
  return context;
}

export { UserContext, UserProvider, useUser };
