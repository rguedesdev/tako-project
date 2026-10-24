import { Schema, Types } from "mongoose";

import { TakoProjectDB } from "../../../plugins/mongoose";

const GROUP_TEAM_ROLES = ["TRANSLATOR", "REVIEWER", "EDITOR", "UPLOADER", "REDRAWER", "CLEANER", "RAW_PROVIDER"] as const;

interface IGroupTeamMember {
  group: Types.ObjectId;
  user: Types.ObjectId;
  role: (typeof GROUP_TEAM_ROLES)[number];
  assignedBy: Types.ObjectId;
}

const groupTeamMemberSchema = new Schema<IGroupTeamMember>(
  {
    group: { type: Schema.Types.ObjectId, ref: "Group", required: true },
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    role: { type: String, enum: GROUP_TEAM_ROLES, required: true },
    assignedBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: { createdAt: true, updatedAt: true } },
);

groupTeamMemberSchema.index({ group: 1, user: 1 }, { unique: true });
groupTeamMemberSchema.index({ user: 1, group: 1 });

const GroupTeamMemberModel = TakoProjectDB.model<IGroupTeamMember>("GroupTeamMember", groupTeamMemberSchema);

export { GROUP_TEAM_ROLES, GroupTeamMemberModel };
export type { IGroupTeamMember };
