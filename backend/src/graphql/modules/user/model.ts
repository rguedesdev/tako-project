import { TakoProjectDB } from "../../../plugins/mongoose";
import { Schema } from "mongoose";

interface IUser {
  accountType: string;
  profilePicture?: string;
  name: string;
  username: string;
  email: string;
  password: string;
}

const userSchema = new Schema<IUser>({
  accountType: {
    type: String,
    default: "user",
  },

  profilePicture: {
    type: String,
  },

  name: {
    type: String,
    required: true,
    index: true,
  },

  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 6,
    maxlength: 15,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 120,
  },
});

const UserModel = TakoProjectDB.model<IUser>("User", userSchema);

export { UserModel };
