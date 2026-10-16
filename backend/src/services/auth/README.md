# Authentication and authorization

This module follows the Orkkut request flow: `authenticateRequest` validates the
Bearer JWT once while Mercurius builds its context; resolvers use
`requireAuthenticated` and pass that authenticated ID to services. IDs supplied
by clients are never used as the actor identity.

JWTs expire after `JWT_EXPIRES_IN` (seven days by default). Logout is client-side
because tokens are stateless; adding server-side revocation later would require
a session or deny-list collection.

Plans and their permissions are centralized in `authorization.ts`. All plans
currently have the same reading and commenting permissions. Future paid
features should add a permission there instead of checking the plan throughout
resolvers and services.
