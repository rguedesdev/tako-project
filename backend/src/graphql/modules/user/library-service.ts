import { Types } from "mongoose";

import { graphQLError } from "../../errors";
import { MangaModel } from "../manga/model";
import { MangaLibraryEntryModel } from "./library-model";

class MangaLibraryService {
  static async list(userID: string, showAdultContent = false) {
    const entries = await MangaLibraryEntryModel.find({ user: userID }).sort({ createdAt: -1 }).select("manga").lean();
    const mangaIDs = entries.map((entry) => entry.manga);
    if (!mangaIDs.length) return [];
    const mangas = await MangaModel.find({
      _id: { $in: mangaIDs },
      ...(showAdultContent ? {} : { isAdult: { $ne: true } }),
    }).lean();
    const byID = new Map(mangas.map((manga) => [String(manga._id), manga]));
    return mangaIDs.map((id) => byID.get(String(id))).filter(Boolean);
  }

  static async contains(userID: string, mangaID: string) {
    if (!Types.ObjectId.isValid(mangaID)) return false;
    return Boolean(await MangaLibraryEntryModel.exists({ user: userID, manga: mangaID }));
  }

  static async set(userID: string, mangaID: string, inLibrary: boolean) {
    if (!Types.ObjectId.isValid(mangaID) || !(await MangaModel.exists({ _id: mangaID }))) {
      throw graphQLError("Obra não encontrada.", "NOT_FOUND");
    }
    if (inLibrary) {
      await MangaLibraryEntryModel.updateOne(
        { user: userID, manga: mangaID },
        { $setOnInsert: { user: userID, manga: mangaID } },
        { upsert: true },
      );
    } else {
      await MangaLibraryEntryModel.deleteOne({ user: userID, manga: mangaID });
    }
    return inLibrary;
  }
}

export default MangaLibraryService;
