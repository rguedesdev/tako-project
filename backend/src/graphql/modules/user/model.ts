import { Schema, Types } from "mongoose";

import { TakoProjectDB } from "../../../plugins/mongoose";

const ACCOUNT_TYPES = ["MEMBER", "HADES"] as const;
const PLAN_TYPES = ["FREE", "PREMIUM", "VIP"] as const;
const SUBSCRIPTION_STATUSES = [
  "NONE",
  "TRIALING",
  "ACTIVE",
  "PAST_DUE",
  "CANCELED",
  "EXPIRED",
] as const;

type AccountType = (typeof ACCOUNT_TYPES)[number];
type PlanType = (typeof PLAN_TYPES)[number];
type SubscriptionStatus = (typeof SUBSCRIPTION_STATUSES)[number];

interface IUserSubscription {
  plan: PlanType;
  status: SubscriptionStatus;
  startedAt?: Date | null;
  expiresAt?: Date | null;
  renewalAt?: Date | null;
  autoRenew: boolean;
  source?: string | null;
}

interface IUserSocialMedias {
  site?: string | null;
  discord?: string | null;
  telegram?: string | null;
  x?: string | null;
  instagram?: string | null;
  facebook?: string | null;
  youtube?: string | null;
  tiktok?: string | null;
  bluesky?: string | null;
}

interface IUserTrackers {
  myanimelist?: string | null;
  anilist?: string | null;
  animeplanet?: string | null;
  anidb?: string | null;
}

interface IUser {
  accountType: AccountType;
  profilePicture?: string | null;
  profilePictureID?: Types.ObjectId | null;
  name: string;
  username: string;
  email: string;
  passwordHash: string;
  /** Legacy bcrypt field kept readable only during the passwordHash migration. */
  password?: string;
  subscription: IUserSubscription;
  preferences: { showAdultContent: boolean };
  socialMedias: IUserSocialMedias;
  trackers: IUserTrackers;
  createdAt: Date;
  updatedAt: Date;
}

const subscriptionSchema = new Schema<IUserSubscription>(
  {
    plan: { type: String, enum: PLAN_TYPES, default: "FREE" },
    status: { type: String, enum: SUBSCRIPTION_STATUSES, default: "NONE" },
    startedAt: { type: Date, default: null },
    expiresAt: { type: Date, default: null },
    renewalAt: { type: Date, default: null },
    autoRenew: { type: Boolean, default: false },
    source: { type: String, default: null, trim: true, maxlength: 80 },
  },
  { _id: false },
);

const preferencesSchema = new Schema(
  {
    showAdultContent: { type: Boolean, default: false },
  },
  { _id: false },
);

const socialMediasSchema = new Schema<IUserSocialMedias>(
  {
    site: { type: String, trim: true, maxlength: 500 },
    discord: { type: String, trim: true, maxlength: 500 },
    telegram: { type: String, trim: true, maxlength: 500 },
    x: { type: String, trim: true, maxlength: 500 },
    instagram: { type: String, trim: true, maxlength: 500 },
    facebook: { type: String, trim: true, maxlength: 500 },
    youtube: { type: String, trim: true, maxlength: 500 },
    tiktok: { type: String, trim: true, maxlength: 500 },
    bluesky: { type: String, trim: true, maxlength: 500 },
  },
  { _id: false },
);

const trackersSchema = new Schema<IUserTrackers>(
  {
    myanimelist: { type: String, trim: true, maxlength: 500 },
    anilist: { type: String, trim: true, maxlength: 500 },
    animeplanet: { type: String, trim: true, maxlength: 500 },
    anidb: { type: String, trim: true, maxlength: 500 },
  },
  { _id: false },
);

const userSchema = new Schema<IUser>(
  {
    accountType: {
      type: String,
      enum: ACCOUNT_TYPES,
      default: "MEMBER",
    },
    profilePicture: {
      type: String,
      default: null,
      trim: true,
      maxlength: 2048,
    },
    profilePictureID: { type: Schema.Types.ObjectId, ref: "Media", default: null },
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 120,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      index: true,
      minlength: 3,
      maxlength: 30,
      lowercase: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      index: true,
      lowercase: true,
      trim: true,
      maxlength: 254,
    },
    passwordHash: {
      type: String,
      required: true,
      select: false,
    },
    password: {
      type: String,
      required: false,
      select: false,
    },
    subscription: {
      type: subscriptionSchema,
      default: () => ({}),
    },
    preferences: { type: preferencesSchema, default: () => ({ showAdultContent: false }) },
    socialMedias: { type: socialMediasSchema, default: () => ({}) },
    trackers: { type: trackersSchema, default: () => ({}) },
  },
  { timestamps: true },
);

const UserModel = TakoProjectDB.model<IUser>("User", userSchema);

interface IUserFollow {
  follower: Types.ObjectId;
  following: Types.ObjectId;
  createdAt: Date;
}
const userFollowSchema = new Schema<IUserFollow>(
  {
    follower: { type: Schema.Types.ObjectId, ref: "User", required: true },
    following: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: { createdAt: true, updatedAt: false } },
);
userFollowSchema.index({ follower: 1, following: 1 }, { unique: true });
userFollowSchema.index({ following: 1, follower: 1 });
const UserFollowModel = TakoProjectDB.model<IUserFollow>("UserFollow", userFollowSchema);

export {
  ACCOUNT_TYPES,
  PLAN_TYPES,
  SUBSCRIPTION_STATUSES,
  UserModel,
  UserFollowModel,
};
export type {
  AccountType,
  IUser,
  IUserSubscription,
  PlanType,
  SubscriptionStatus,
};
