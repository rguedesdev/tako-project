import { TakoProjectDB } from "../../../plugins/mongoose";
import { Schema, Types } from "mongoose";
import { COUNTRY_CODES } from "../../../config/countries";

interface IStats {
  followers: number;
  mangas: number;
  chapters: number;
  views: number;
  likes: number;
}

interface ILinks {
  site?: string;
  discord?: string;
  telegram?: string;
  x?: string;
  instagram?: string;
  facebook?: string;
  youtube?: string;
  tiktok?: string;
  bluesky?: string;
  orkkut?: string;
  email?: string;
}

interface IGroup {
  ownerID: Types.ObjectId;
  groupImage: string;
  groupImageID?: Types.ObjectId | null;
  name: string;
  description: string;
  country: string;
  stats: IStats;
  socialMedias: ILinks;
}

const groupSchema = new Schema<IGroup>(
  {
    ownerID: {
      type: Schema.Types.ObjectId, // Define que é um ID do MongoDB
      ref: "User", // Nome do modelo de usuário no seu app para relacionamentos
      required: true, // Todo grupo precisa ter um dono
    },
    groupImage: {
      type: String,
      default: "",
    },
    groupImageID: { type: Schema.Types.ObjectId, ref: "Media", default: null },
    name: {
      type: String,
      required: true,
      index: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true, // Adicionado o campo de país
      trim: true,
      enum: COUNTRY_CODES,
    },
    // Mapeando o objeto aninhado de Stats
    stats: {
      followers: { type: Number, default: 0 },
      mangas: { type: Number, default: 0 },
      chapters: { type: Number, default: 0 },
      views: { type: Number, default: 0 },
      likes: { type: Number, default: 0 },
    },
    // Mapeando o objeto aninhado de Redes Sociais (como são opcionais, o tipo basta)
    socialMedias: {
      site: String,
      discord: String,
      telegram: String,
      x: String,
      instagram: String,
      facebook: String,
      youtube: String,
      tiktok: String,
      bluesky: String,
      orkut: String,
      email: String,
    },
  },
  { timestamps: true },
);

const GroupModel = TakoProjectDB.model<IGroup>("Group", groupSchema);

export { GroupModel };
