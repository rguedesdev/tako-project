// Service
import GroupService from "./service";
import { requireAuthenticated } from "../../../services/auth/authorization";
import MediaService from "../media/service";
import { COUNTRIES, getCountry } from "../../../config/countries";
import { getViewerAccess } from "../../../services/auth/viewer-access";
import MangaService from "../manga/service";
import { selectedFieldNames } from "../../selection";
import { GroupClaimService } from "./claim-service";
import { GroupTeamService } from "./team-service";
import { UserModel } from "../user/model";

const groupResolvers = {
  Query: {
    groups: async () => GroupService.getGroups(),
    group: async (_: any, { id }: any) => GroupService.getGroup(id),
    groupTeamCandidates: (_: unknown, { groupID, search }: { groupID: string; search: string }, context: any) =>
      GroupTeamService.findCandidates(groupID, search, requireAuthenticated(context)),
    groupClaims: (_: unknown, __: unknown, context: any) => GroupClaimService.getPendingClaims(requireAuthenticated(context)),
    countries: () => COUNTRIES,
  },

  Mutation: {
    createGroup: async (_: any, { data }: any, context: any) => {
      const userID = requireAuthenticated(context);
      return GroupService.createGroup({ ...data, ownerID: userID });
    },
    updateGroup: (_:unknown,{id,data}:any,context:any)=>GroupService.updateGroup(id,data,requireAuthenticated(context)),
    toggleGroupFollow: (_: unknown, { groupID }: { groupID: string }, context: any) =>
      GroupService.toggleFollow(groupID, requireAuthenticated(context)),
    setGroupTeamMember: (_: unknown, { groupID, memberID, role }: any, context: any) =>
      GroupTeamService.setMember(groupID, memberID, role, requireAuthenticated(context)),
    removeGroupTeamMember: (_: unknown, { groupID, memberID }: any, context: any) =>
      GroupTeamService.removeMember(groupID, memberID, requireAuthenticated(context)),
    createGroupClaim: (_: unknown, { data }: any, context: any) =>
      GroupClaimService.createClaim(requireAuthenticated(context), data),
    reviewGroupClaim: (_: unknown, { id, approve, note }: any, context: any) =>
      GroupClaimService.reviewClaim(requireAuthenticated(context), id, approve, note),
  },
  Group: {
    id: (group: any) => String(group.id ?? group._id),
    mangas: async (group: any,_:unknown,context:any) => GroupService.getMangas(group.id ?? group._id,(await getViewerAccess(context)).showAdultContent),
    translations: (group: any) => MangaService.getTranslationsForGroup(group.id ?? group._id),
    stats: (group: any, _: unknown, __: unknown, info: any) => {
      const requestedFields = [...selectedFieldNames(info)];
      return GroupService.getStats(
        group.id ?? group._id,
        requestedFields.length ? requestedFields : undefined,
      );
    },
    followedByMe: async (group: any, _: unknown, context: any) =>
      GroupService.isFollowedBy(group.id ?? group._id, (await getViewerAccess(context)).userID),
    claimableByMe: async (group: any, _: unknown, context: any) =>
      (await GroupClaimService.canClaim(group, (await getViewerAccess(context)).userID)).claimableByMe,
    claimPendingByMe: async (group: any, _: unknown, context: any) =>
      (await GroupClaimService.canClaim(group, (await getViewerAccess(context)).userID)).claimPendingByMe,
    supportButtonVisible: (group: any) => GroupClaimService.canReceiveSupport(group),
    owner: async (group: any) => {
      const owner = await UserModel.findById(group.ownerID).select("name username profilePicture profilePictureID").lean();
      return owner ? {
        ...owner,
        userID: String(owner._id),
        name: owner.name || "Proprietário",
        username: owner.username || "",
      } : null;
    },
    teamMembers: (group: any) =>
      GroupTeamService.getTeam(group.id ?? group._id),
    groupImage: async(group:any)=>group.groupImageID?(await MediaService.getReady(group.groupImageID))?.url:group.groupImage||null,
    groupImageMedia: (group:any)=>group.groupImageID?MediaService.getReady(group.groupImageID):null,
    country: (group:any)=>getCountry(group.country)?.name ?? group.country,
    countryCode: (group:any)=>getCountry(group.country)?.code ?? group.country,
    countryFlag: (group:any)=>getCountry(group.country)?.flag ?? "🌍",
  },
  GroupClaim: {
    id: (claim: any) => String(claim.id ?? claim._id),
    groupID: (claim: any) => String(claim.group?._id ?? claim.group),
    groupName: (claim: any) => claim.group?.name ?? "Grupo",
    groupImage: async (claim: any) => claim.group?.groupImageID
      ? (await MediaService.getReady(claim.group.groupImageID))?.url ?? null
      : claim.group?.groupImage ?? null,
    claimantName: (claim: any) => claim.claimant?.name ?? "Usuário",
    claimantUsername: (claim: any) => claim.claimant?.username ?? "",
    createdAt: (claim: any) => claim.createdAt?.toISOString?.() ?? String(claim.createdAt ?? ""),
  },
  GroupTeamMember: {
    id: (member: any) => String(member.id ?? member._id),
    userID: (member: any) => String(member.user?._id ?? member.user),
    username: (member: any) => member.user?.username ?? "",
    name: (member: any) => member.user?.name ?? "",
    profilePicture: async (member: any) => member.user?.profilePictureID
      ? (await MediaService.getReady(member.user.profilePictureID))?.url ?? null
      : member.user?.profilePicture ?? null,
    addedAt: (member: any) => member.createdAt?.toISOString?.() ?? String(member.createdAt ?? ""),
  },
  GroupOwner: {
    userID: (owner: any) => String(owner._id ?? owner.id),
    profilePicture: async (owner: any) => owner.profilePictureID
      ? (await MediaService.getReady(owner.profilePictureID))?.url ?? null
      : owner.profilePicture ?? null,
  },
  GroupTeamCandidate: {
    id: (candidate: any) => String(candidate._id ?? candidate.id),
    profilePicture: async (candidate: any) => candidate.profilePictureID
      ? (await MediaService.getReady(candidate.profilePictureID))?.url ?? null
      : candidate.profilePicture ?? null,
  },
};

export { groupResolvers };
