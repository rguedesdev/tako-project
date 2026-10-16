import GroupService from "../group/service";
import { requireAuthenticated } from "../../../services/auth/authorization";
import UserService from "./service";
import MediaService from "../media/service";

const userResolvers = {
  Query: {
    me: (_: unknown, __: unknown, context: any) =>
      UserService.getAuthenticatedUser(requireAuthenticated(context)),
    usernameAvailable: (_: unknown, { username }: { username: string }) =>
      UserService.usernameAvailable(username),
    emailAvailable: (_: unknown, { email }: { email: string }) =>
      UserService.emailAvailable(email),
    user: (_: unknown, { username }: any) => UserService.getByUsername(username),
  },
  Mutation: {
    signUp: (_: unknown, { data }: any) => UserService.signUp(data),
    signIn: (_: unknown, { data }: any) => UserService.signIn(data),
    updateMyProfile: (_: unknown, { data }: any, context: any) => UserService.updateProfile(requireAuthenticated(context), data),
  },
  User: {
    id: (parent: any) => parent._id?.toString() ?? parent.id?.toString(),
    groups: (parent: any) => GroupService.getByOwnerID(parent._id ?? parent.id),
    profilePicture: async (parent: any) => parent.profilePictureID ? (await MediaService.getReady(parent.profilePictureID))?.url : parent.profilePicture ?? null,
    profilePictureMedia: (parent: any) => parent.profilePictureID ? MediaService.getReady(parent.profilePictureID) : null,
  },
};

export { userResolvers };
