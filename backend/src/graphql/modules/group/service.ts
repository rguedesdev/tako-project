// Models
import { GroupModel } from "./model";
import { MangaModel } from "../manga/model";
import { ChapterModel } from "../chapter/model";

// Validation
import { GroupValidation } from "./validation";
import { GroupMangaModel } from "../manga/group-manga-model";
import MediaService from "../media/service";
import { graphQLError } from "../../errors";
import { Types } from "mongoose";
import { CommentLikeModel, CommentModel } from "../comment/model";
import { GroupFollowModel } from "./group-follow-model";

class GroupService {
  static serialize(group: any) {
    return { ...group, id: group._id.toString() };
  }

  static async getGroups() {
    const groups = await GroupModel.find().sort({ name: 1 }).lean();
    return groups.map(GroupService.serialize);
  }

  static async getByOwnerID(ownerID: string) {
    const groups = await GroupModel.find({ ownerID }).lean();
    return groups.map((group) => ({ ...group, id: group._id.toString() }));
  }

  static async createGroup(data: any) {
    // 1. valida entrada
    data = GroupValidation.createGroup(data);

    // 2. regra de negócio
    // Busca se já existe um grupo com o MESMO nome E no MESMO país
    const groupExist = await GroupModel.findOne({
      name: data.name,
      country: data.countryCode,
    });

    if (groupExist) {
      throw new Error(
        "Já existe uma scan com esse nome cadastrada neste país!",
      );
    }

    // 3. Criar Grupo
    if(data.groupImageID)await MediaService.requireAttachable(data.groupImageID,data.ownerID,"GROUP_IMAGE");
    const { countryCode, ...groupData } = data;
    const newGroup = await GroupModel.create({ ...groupData, country: countryCode, groupImage: "" });
    if(data.groupImageID)await MediaService.attach(data.groupImageID,data.ownerID,"GROUP_IMAGE","GROUP",newGroup._id);

    return newGroup;
  }

  // static async getGroup(id: string) {
  //   const group = await GroupModel.findById(id).lean();

  //   if (!group) {
  //     throw new Error("Grupo não encontrado!");
  //   }

  //   const chapters = await ChapterModel.find({ group: id });

  //   const mangaIDs = [...new Set(chapters.map((c) => c.manga.toString()))];

  //   const mangas = await MangaModel.find({
  //     _id: { $in: mangaIDs },
  //   });

  //   return {
  //     ...group,
  //     mangas,
  //   };
  // }

  static async getGroup(id: string) {
    // .lean() traz o objeto puro do banco (só tem ._id)
    const group = await GroupModel.findById(id).lean();

    if (!group) {
      throw new Error("Grupo não encontrado!");
    }

    return {
      ...group,
      id: group._id.toString(),
    };
  }

  static async getMangas(groupId: string, showAdultContent = false) {
    const [chapterIDs,relations]=await Promise.all([ChapterModel.distinct("manga",{group:groupId}),GroupMangaModel.find({group:groupId}).select("manga descriptionOverride mangaCoverIDOverride").lean()]);
    const relationByManga = new Map(relations.map((relation) => [String(relation.manga), relation] as const));
    const mangaIDs=[...new Set([...chapterIDs.map(String),...relations.map(r=>String(r.manga))])];
    const mangas = await MangaModel.find({ _id: { $in: mangaIDs }, ...(showAdultContent ? {} : { isAdult: { $ne: true } }) })
      .sort({ title: 1 })
      .lean();
    return mangas.map((manga) => {
      const relation = relationByManga.get(manga._id.toString());
      return {
        ...manga,
        ...(relation?.descriptionOverride ? { description: relation.descriptionOverride } : {}),
        ...(relation?.mangaCoverIDOverride ? { mangaCoverID: relation.mangaCoverIDOverride } : {}),
        id: manga._id.toString(),
        isAdult: manga.isAdult === true,
      };
    });
  }
  static async updateGroup(id:string,data:any,userID:string){const current=await GroupModel.findOne({_id:id,ownerID:userID}).lean();if(!current)throw graphQLError("Grupo não encontrado ou sem permissão.","FORBIDDEN");data=GroupValidation.updateGroup(data);const updates:any={};for(const f of ["name","description"]){if(data[f]!==undefined)updates[f]=data[f];}if(data.socialMedias!==undefined)updates.socialMedias={...(current.socialMedias??{}),...data.socialMedias};if(data.countryCode!==undefined)updates.country=data.countryCode;const next=data.removeImage?null:data.groupImageID===undefined?current.groupImageID:data.groupImageID;const changed=String(next??"")!==String(current.groupImageID??"");if(changed&&next){await MediaService.requireAttachable(next,userID,"GROUP_IMAGE");await MediaService.attach(next,userID,"GROUP_IMAGE","GROUP",id);updates.groupImageID=next;}const result=await GroupModel.findByIdAndUpdate(id,{$set:updates},{returnDocument:"after",runValidators:true});if(changed&&current.groupImageID)await MediaService.orphan(current.groupImageID,"GROUP",id);return result;}

  static async getStats(
    groupId: string,
    requestedFields: readonly string[] = ["followers", "mangas", "chapters", "views", "likes"],
  ) {
    const groupObjectID = new Types.ObjectId(groupId);
    const wants = new Set(requestedFields);
    const needsChapterAggregate = wants.has("views") || wants.has("likes");
    const accumulators: Record<string, unknown> = {};
    if (wants.has("chapters")) accumulators.chapters = { $sum: 1 };
    if (wants.has("views")) accumulators.views = { $sum: { $ifNull: ["$views", 0] } };
    if (wants.has("likes")) accumulators.likes = { $sum: { $size: "$commentLikes" } };

    const chapterPipeline: any[] = [{ $match: { group: groupObjectID } }];
    if (wants.has("likes")) {
      chapterPipeline.push(
        { $lookup: { from: CommentModel.collection.name, localField: "_id", foreignField: "chapter", as: "comments" } },
        { $lookup: { from: CommentLikeModel.collection.name, localField: "comments._id", foreignField: "comment", as: "commentLikes" } },
      );
    }
    if (needsChapterAggregate) chapterPipeline.push({ $group: { _id: null, ...accumulators } });

    const [followers, chapterCount, chapterRows, chapterMangaIDs, relatedMangaIDs] = await Promise.all([
      wants.has("followers") ? GroupFollowModel.countDocuments({ group: groupObjectID }) : null,
      wants.has("chapters") && !needsChapterAggregate ? ChapterModel.countDocuments({ group: groupObjectID }) : null,
      needsChapterAggregate ? ChapterModel.aggregate(chapterPipeline) : [],
      wants.has("mangas") ? ChapterModel.distinct("manga", { group: groupObjectID }) : [],
      wants.has("mangas") ? GroupMangaModel.distinct("manga", { group: groupObjectID }) : [],
    ]);
    const chapterStats = chapterRows[0] ?? {};
    const stats: Record<string, number> = {};
    if (wants.has("followers")) stats.followers = followers ?? 0;
    if (wants.has("chapters")) stats.chapters = needsChapterAggregate ? chapterStats.chapters ?? 0 : chapterCount ?? 0;
    if (wants.has("views")) stats.views = chapterStats.views ?? 0;
    if (wants.has("likes")) stats.likes = chapterStats.likes ?? 0;
    if (wants.has("mangas")) {
      stats.mangas = new Set([...chapterMangaIDs, ...relatedMangaIDs].map(String)).size;
    }
    return stats;
  }

  static async isFollowedBy(groupID: string, userID: string | null) {
    if (!userID) return false;
    return Boolean(await GroupFollowModel.exists({ group: groupID, user: userID }));
  }

  static async toggleFollow(groupID: string, userID: string) {
    if (!(await GroupModel.exists({ _id: groupID }))) {
      throw graphQLError("Grupo não encontrado.", "NOT_FOUND");
    }
    const removed = await GroupFollowModel.findOneAndDelete({ group: groupID, user: userID });
    let followed = false;
    if (!removed) {
      try {
        await GroupFollowModel.create({ group: groupID, user: userID });
        followed = true;
      } catch (error: any) {
        if (error?.code !== 11000) throw error;
        followed = true;
      }
    }
    const followers = await GroupFollowModel.countDocuments({ group: groupID });
    return { followed, followers };
  }

}

export default GroupService;
