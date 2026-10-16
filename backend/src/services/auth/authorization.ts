import { graphQLError } from "../../graphql/errors";

const USER_PERMISSIONS = ["READ_MANGA", "COMMENT"] as const;
type UserPermission = (typeof USER_PERMISSIONS)[number];

type AuthorizationContext = {
  user?: { id?: string } | null;
};

const requireAuthenticated = (context: AuthorizationContext) => {
  if (!context.user?.id) {
    throw graphQLError("Usuário não autenticado!", "UNAUTHENTICATED");
  }
  return String(context.user.id);
};

// Plans currently share the same active permissions. New premium permissions
// belong in this mapping instead of scattered `if (user.premium)` checks.
const PLAN_PERMISSIONS: Record<"FREE" | "PREMIUM" | "VIP", readonly UserPermission[]> = {
  FREE: USER_PERMISSIONS,
  PREMIUM: USER_PERMISSIONS,
  VIP: USER_PERMISSIONS,
};

const hasPlanPermission = (
  plan: keyof typeof PLAN_PERMISSIONS,
  permission: UserPermission,
) => PLAN_PERMISSIONS[plan].includes(permission);

export { hasPlanPermission, PLAN_PERMISSIONS, requireAuthenticated, USER_PERMISSIONS };
export type { UserPermission };
