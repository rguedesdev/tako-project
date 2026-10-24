import { Schema, Types } from "mongoose";

import { TakoProjectDB } from "../../../plugins/mongoose";

const GROUP_CLAIM_STATUSES = ["PENDING", "APPROVED", "REJECTED"] as const;

interface IGroupClaim {
  group: Types.ObjectId;
  claimant: Types.ObjectId;
  contactEmail: string;
  socialMedias: Record<string, string | null>;
  proof: string;
  status: (typeof GROUP_CLAIM_STATUSES)[number];
  reviewedBy?: Types.ObjectId | null;
  reviewedAt?: Date | null;
  reviewNote?: string | null;
}

const groupClaimSchema = new Schema<IGroupClaim>(
  {
    group: { type: Schema.Types.ObjectId, ref: "Group", required: true, index: true },
    claimant: { type: Schema.Types.ObjectId, ref: "User", required: true, index: true },
    contactEmail: { type: String, required: true, trim: true, lowercase: true, maxlength: 254 },
    socialMedias: { type: Schema.Types.Mixed, default: {} },
    proof: { type: String, required: true, trim: true, maxlength: 4000 },
    status: { type: String, enum: GROUP_CLAIM_STATUSES, default: "PENDING", index: true },
    reviewedBy: { type: Schema.Types.ObjectId, ref: "User", default: null },
    reviewedAt: { type: Date, default: null },
    reviewNote: { type: String, default: null, trim: true, maxlength: 1000 },
  },
  { timestamps: true },
);

groupClaimSchema.index(
  { group: 1, claimant: 1 },
  { unique: true, partialFilterExpression: { status: "PENDING" } },
);

const GroupClaimModel = TakoProjectDB.model<IGroupClaim>("GroupClaim", groupClaimSchema);

export { GroupClaimModel };
export type { IGroupClaim };
