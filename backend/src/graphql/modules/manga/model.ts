import { TakoProjectDB } from "../../../plugins/mongoose";
import { Schema, Types } from "mongoose";

interface ITrackers {
  myanimelist?: string;
  anilist?: string;
  animeplanet?: string;
}

interface IManga {
  mangaCover: string;
  title: string;
  description: string;
  mangaka: string;
  genders: string[];
  trackers: ITrackers;
}

const mangaSchema = new Schema<IManga>(
  {
    mangaCover: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      required: true,
      index: true,
    },
    description: {
      type: String,
      required: true,
      minLength: 120,
      maxLength: 600,
    },
    mangaka: {
      type: String,
      required: true,
    },
    // CORRIGIDO: Representação correta de array de strings no Mongoose
    genders: {
      type: [String],
      required: true,
      default: [], // Boa prática para evitar que o array venha undefined
    },
    // MELHORIA: Mapeando os trackers opcionais para o Mongoose /também conhecer
    trackers: {
      myanimelist: String,
      anilist: String,
      animeplanet: String,
    },
  },
  { timestamps: true },
);

mangaSchema.index({ title: 1, mangaka: 1 }, { unique: true });

const MangaModel = TakoProjectDB.model<IManga>("Manga", mangaSchema);

export { MangaModel };
