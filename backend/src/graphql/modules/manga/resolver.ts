import MangaService from "./service";
import { requireAuthenticated } from "../../../services/auth/authorization";
import MediaService from "../media/service";
import { GroupMangaModel } from "./group-manga-model";
import { getViewerAccess } from "../../../services/auth/viewer-access";
import { selectionHasField } from "../../selection";
import MangaLibraryService from "../user/library-service";

const mangaResolvers = {
  Query: {
    mangas: async (_:unknown,__:unknown,context:any) => MangaService.getMangas((await getViewerAccess(context)).showAdultContent),
    myLibrary: async (_: unknown, __: unknown, context: any) => {
      const access = await getViewerAccess(context);
      return MangaLibraryService.list(requireAuthenticated(context), access.showAdultContent);
    },
    manga: async (_: any, { id }: any, context:any) => MangaService.getManga(id,(await getViewerAccess(context)).showAdultContent),
    searchMangas: async (_: unknown, args: any, context:any) => MangaService.search(args.query, args.limit,(await getViewerAccess(context)).showAdultContent),
    searchJikanMangas: (_: unknown, args: any, context: any) => {
      requireAuthenticated(context);
      return MangaService.searchExternal(args.query, args.limit);
    },
    jikanManga: (_: unknown, { malId }: { malId: number }, context: any) => {
      requireAuthenticated(context);
      return MangaService.getExternal(malId);
    },
    chaptersByManga: async (
      _: any,
      { mangaId, groupId }: any,
      context: any,
      info: any,
    ) => {
      const access=await getViewerAccess(context);
      if(!await MangaService.getManga(mangaId,access.showAdultContent))return [];
      return MangaService.getByMangaAndGroup(mangaId, groupId, {
        includePages: selectionHasField(info, "pages"),
        includeMangaInfo: selectionHasField(info, "mangaInfo"),
        includeGroupInfo: selectionHasField(info, "groupInfo"),
      });
    },
  },

  Mutation: {
    createManga: async (_: any, { groupID, data }: any, context: any) => {
      const userID = requireAuthenticated(context);
      return MangaService.createManga(data, groupID, userID);
    },
    updateManga: (_:unknown,{id,data}:any,context:any)=>MangaService.updateManga(id,data,requireAuthenticated(context)),
    updateGroupManga: (_:unknown,{groupID,mangaID,data}:any,context:any)=>MangaService.updateGroupManga(groupID,mangaID,data,requireAuthenticated(context)),
    addMangaToGroup: async (_:unknown,{mangaID,groupID,translationLanguage}:any,context:any)=>MangaService.addToGroup(mangaID,groupID,requireAuthenticated(context),(await getViewerAccess(context)).showAdultContent,translationLanguage),
    linkMangaExternalMetadata: (_: unknown, { mangaID, malId }: { mangaID: string; malId: number }, context: any) =>
      MangaService.linkExternalMetadata(mangaID, malId, requireAuthenticated(context)),
    syncMangaExternalMetadata: (_: unknown, { mangaID }: { mangaID: string }, context: any) =>
      MangaService.syncExternalMetadataAsAdmin(mangaID, requireAuthenticated(context)),
    setTranslationStatusOverride: (_: unknown, args: any, context: any) =>
      MangaService.setTranslationStatusOverride(args.mangaID, args.groupID, args.status ?? null, requireAuthenticated(context)),
    setMangaInLibrary: (_: unknown, { mangaID, inLibrary }: any, context: any) =>
      MangaLibraryService.set(requireAuthenticated(context), mangaID, inLibrary),
  },
  Manga: {
    id: (manga: any) => String(manga.id ?? manga._id),
    inMyLibrary: (manga: any, _: unknown, context: any) =>
      context.user?.id ? MangaLibraryService.contains(context.user.id, String(manga.id ?? manga._id)) : false,
    chapters: async (manga: any,_:unknown,context:any,info:any) =>
      MangaService.getByMangaAndGroup(manga.id ?? manga._id, undefined, {
        includePages: selectionHasField(info, "pages"),
        includeMangaInfo: selectionHasField(info, "mangaInfo"),
        includeGroupInfo: selectionHasField(info, "groupInfo"),
      }),
    stats: (manga: any) => MangaService.getStats(manga.id ?? manga._id),
    translations: (manga: any) => MangaService.getTranslations(manga.id ?? manga._id),
    demographics: (manga: any) => manga.demographics ?? [],
    officialPublicationStatus: (manga: any) => manga.officialPublicationStatus ?? "UNKNOWN",
    isAdult: (manga:any)=>manga.isAdult===true,
    mangaCover: async (manga:any)=>{
      if (manga.mangaCoverID) return (await MediaService.getReady(manga.mangaCoverID))?.url ?? null;
      if (manga.mangaCover) return manga.mangaCover;
      const relation = await GroupMangaModel.findOne({ manga: manga._id ?? manga.id, mangaCoverIDOverride: { $ne: null } })
        .sort({ updatedAt: -1 })
        .select("mangaCoverIDOverride")
        .lean();
      return relation?.mangaCoverIDOverride
        ? (await MediaService.getReady(relation.mangaCoverIDOverride))?.url ?? null
        : null;
    },
    mangaCoverMedia: async (manga:any)=>{
      if (manga.mangaCoverID) return MediaService.getReady(manga.mangaCoverID);
      const relation = await GroupMangaModel.findOne({ manga: manga._id ?? manga.id, mangaCoverIDOverride: { $ne: null } })
        .sort({ updatedAt: -1 })
        .select("mangaCoverIDOverride")
        .lean();
      return relation?.mangaCoverIDOverride ? MediaService.getReady(relation.mangaCoverIDOverride) : null;
    },
  },
};

export { mangaResolvers };
