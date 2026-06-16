import { TakoProjectDB } from "../../../plugins/mongoose";
import { Schema, Types } from "mongoose";

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
  bluesky?: string;
  orkkut?: string;
  email?: string;
}

interface IGroup {
  ownerID: Types.ObjectId;
  groupImage: string;
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
      bluesky: String,
      orkut: String,
      email: String,
    },
  },
  { timestamps: true },
);

const GroupModel = TakoProjectDB.model<IGroup>("Group", groupSchema);

export { GroupModel };
