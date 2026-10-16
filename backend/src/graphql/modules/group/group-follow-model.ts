import { Schema, Types } from "mongoose";

import { TakoProjectDB } from "../../../plugins/mongoose";

interface IGroupFollow {
  group: Types.ObjectId;
  user: Types.ObjectId;
  createdAt: Date;
}

const groupFollowSchema = new Schema<IGroupFollow>(
  {
    group: { type: Schema.Types.ObjectId, ref: "Group", required: true },
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: { createdAt: true, updatedAt: false } },
);

groupFollowSchema.index({ group: 1, user: 1 }, { unique: true });
groupFollowSchema.index({ user: 1, group: 1 });

const GroupFollowModel = TakoProjectDB.model<IGroupFollow>("GroupFollow", groupFollowSchema);

export { GroupFollowModel };
