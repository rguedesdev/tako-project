// Service
import GroupService from "./service";
import { requireAuthenticated } from "../../../services/auth/authorization";
import MediaService from "../media/service";
import { COUNTRIES, getCountry } from "../../../config/countries";
import { getViewerAccess } from "../../../services/auth/viewer-access";
import MangaService from "../manga/service";
import { selectedFieldNames } from "../../selection";

const groupResolvers = {
  Query: {
    groups: async () => GroupService.getGroups(),
    group: async (_: any, { id }: any) => GroupService.getGroup(id),
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
    groupImage: async(group:any)=>group.groupImageID?(await MediaService.getReady(group.groupImageID))?.url:group.groupImage||null,
    groupImageMedia: (group:any)=>group.groupImageID?MediaService.getReady(group.groupImageID):null,
    country: (group:any)=>getCountry(group.country)?.name ?? group.country,
    countryCode: (group:any)=>getCountry(group.country)?.code ?? group.country,
    countryFlag: (group:any)=>getCountry(group.country)?.flag ?? "🌍",
  },
};

export { groupResolvers };
