import assert from "node:assert/strict";
import crypto from "node:crypto";
import sharp from "sharp";

import buildApp from "../app";
import { GroupModel } from "../graphql/modules/group/model";
import { GroupFollowModel } from "../graphql/modules/group/group-follow-model";
import { ChapterModel } from "../graphql/modules/chapter/model";
import { CommentLikeModel, CommentModel } from "../graphql/modules/comment/model";
import { GroupMangaModel } from "../graphql/modules/manga/group-manga-model";
import { MangaModel } from "../graphql/modules/manga/model";
import { MediaModel } from "../graphql/modules/media/model";
import MediaService from "../graphql/modules/media/service";
import { UserModel } from "../graphql/modules/user/model";
import { TakoProjectDB } from "../plugins/mongoose";
import { createUserToken } from "../services/auth/create-user-token";
import { StorageService } from "../services/storage";
import { jikanService } from "../services/jikan";

const app = await buildApp();
const suffix = crypto.randomBytes(5).toString("hex");
const createdUserIDs: string[] = [];
const createdGroupIDs: string[] = [];
const createdMangaIDs: string[] = [];
const createdChapterIDs: string[] = [];
const createdCommentIDs: string[] = [];

async function graphQL(query: string, variables: Record<string, unknown>, token?: string) {
  const response = await app.inject({
    method: "POST",
    url: "/graphql",
    headers: token ? { authorization: `Bearer ${token}` } : {},
    payload: { query, variables },
  });
  assert.equal(response.statusCode, 200);
  return response.json();
}

async function upload(token: string, filename: string, mimeType: string, content: Buffer, purpose: string) {
  const boundary = `----tako-${crypto.randomBytes(8).toString("hex")}`;
  const head = Buffer.from(`--${boundary}\r\nContent-Disposition: form-data; name="file"; filename="${filename}"\r\nContent-Type: ${mimeType}\r\n\r\n`);
  const tail = Buffer.from(`\r\n--${boundary}--\r\n`);
  return app.inject({
    method: "POST",
    url: `/uploads/images?purpose=${purpose}`,
    headers: { authorization: `Bearer ${token}`, "content-type": `multipart/form-data; boundary=${boundary}` },
    payload: Buffer.concat([head, content, tail]),
  });
}

async function makeUser(label: string, accountType: "MEMBER" | "AEGIS" = "MEMBER") {
  const user = await UserModel.create({
    name: `Teste ${label}`,
    username: `catalog_${label}_${suffix}`,
    email: `catalog-${label}-${suffix}@example.com`,
    passwordHash: "$2b$12$abcdefghijklmnopqrstuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu",
    accountType,
  });
  createdUserIDs.push(user._id.toString());
  return { id: user._id.toString(), token: createUserToken(user) };
}

const description = "Descrição de integração suficientemente longa para satisfazer todas as validações do catálogo global de mangás sem depender de dados reais.";

try {
  await app.ready();
  const [ownerA, ownerB, aegis] = await Promise.all([makeUser("a"), makeUser("b"), makeUser("aegis", "AEGIS")]);
  const image = await sharp({ create: { width: 80, height: 100, channels: 3, background: "#e63357" } }).png().toBuffer();

  const invalid = await upload(ownerA.token, "fake.png", "image/png", Buffer.from("não é uma imagem"), "USER_AVATAR");
  assert.equal(invalid.statusCode, 400);

  const oversized = await upload(ownerA.token, "huge.png", "image/png", Buffer.alloc(8 * 1024 * 1024 + 1), "MANGA_COVER");
  assert.equal(oversized.statusCode, 413);

  const avatarOneResponse = await upload(ownerA.token, "avatar.png", "image/png", image, "USER_AVATAR");
  assert.equal(avatarOneResponse.statusCode, 201);
  const avatarOne = avatarOneResponse.json().media;
  const firstProfile = await graphQL("mutation($data:UpdateProfileInput!){updateMyProfile(data:$data){id profilePicture}}", { data: { profilePictureID: avatarOne.id } }, ownerA.token);
  assert.match(firstProfile.data.updateMyProfile.profilePicture, /\/uploads\/images\//);

  const avatarTwoResponse = await upload(ownerA.token, "avatar-2.webp", "image/webp", await sharp(image).webp().toBuffer(), "USER_AVATAR");
  const avatarTwo = avatarTwoResponse.json().media;
  await graphQL("mutation($data:UpdateProfileInput!){updateMyProfile(data:$data){id}}", { data: { profilePictureID: avatarTwo.id } }, ownerA.token);
  const replaced = await MediaModel.findById(avatarOne.id).lean();
  assert.equal(replaced?.resourceID, null);
  assert.ok(replaced?.orphanedAt);

  const groupImageResponse = await upload(ownerA.token, "group.png", "image/png", image, "GROUP_IMAGE");
  const groupImage = groupImageResponse.json().media;
  const invalidCountry = await graphQL(
    "mutation($data:CreateGroupInput!){createGroup(data:$data){id}}",
    { data: { name: `Scan Inválida ${suffix}`, description, countryCode: "XX" } },
    ownerA.token,
  );
  assert.equal(invalidCountry.errors[0].extensions.code, "BAD_USER_INPUT");
  const invalidSocial = await graphQL(
    "mutation($data:CreateGroupInput!){createGroup(data:$data){id}}",
    { data: { name: `Scan Social Inválida ${suffix}`, description, countryCode: "BR", socialMedias: { x: "https://example.com/perfil" } } },
    ownerA.token,
  );
  assert.equal(invalidSocial.errors[0].extensions.code, "BAD_USER_INPUT");
  const groupAResult = await graphQL(
    "mutation($data:CreateGroupInput!){createGroup(data:$data){id name groupImage country countryCode countryFlag socialMedias{x instagram youtube}}}",
    { data: { name: `Scan A ${suffix}`, description, countryCode: "BR", groupImageID: groupImage.id, socialMedias: { x: "https://x.com/scan_teste", instagram: "", youtube: "https://youtube.com/@scan_teste" } } },
    ownerA.token,
  );
  assert.equal(groupAResult.errors, undefined);
  const groupA = groupAResult.data.createGroup;
  assert.equal(groupA.countryCode, "BR");
  assert.equal(groupA.countryFlag, "🇧🇷");
  assert.equal(groupA.socialMedias.x, "https://x.com/scan_teste");
  assert.equal(groupA.socialMedias.instagram, null);
  assert.equal(groupA.socialMedias.youtube, "https://youtube.com/@scan_teste");
  createdGroupIDs.push(groupA.id);

  const groupBResult = await graphQL(
    "mutation($data:CreateGroupInput!){createGroup(data:$data){id}}",
    { data: { name: `Scan B ${suffix}`, description, countryCode: "BR" } },
    ownerB.token,
  );
  const groupB = groupBResult.data.createGroup;
  createdGroupIDs.push(groupB.id);
  const legacySocials = await graphQL("query($id:ID!){group(id:$id){id socialMedias{x youtube}}}", { id: groupB.id });
  assert.ok(legacySocials.data.group);
  const anonymousExternalSearch = await graphQL("query{searchJikanMangas(query:\"Naruto\"){malId}}", {});
  assert.equal(anonymousExternalSearch.errors[0].extensions.code, "UNAUTHENTICATED");
  const forbiddenCatalogCreation = await graphQL(
    "mutation($groupID:ID!,$data:CreateMangaInput!){createManga(groupID:$groupID,data:$data){id}}",
    { groupID: groupB.id, data: { title: `Sem permissão ${suffix}`, description, mangaka: "Autoria", genders: ["Ação"] } },
    ownerA.token,
  );
  assert.equal(forbiddenCatalogCreation.errors[0].extensions.code, "FORBIDDEN");

  const coverResponse = await upload(ownerA.token, "cover.png", "image/png", image, "MANGA_COVER");
  const cover = coverResponse.json().media;
  const title = `Obra Global ${suffix}`;
  const mangaResult = await graphQL(
    "mutation($groupID:ID!,$data:CreateMangaInput!){createManga(groupID:$groupID,data:$data){id title aliases mangaCover isAdult trackers{myanimelist anilist animeplanet anidb} externalMetadata{malId}}}",
    { groupID: groupA.id, data: { title, aliases: [`Alias ${suffix}`, `English ${suffix}`, `日本語${suffix}`], description, mangaka: "Autoria Teste", genders: ["Aventura"], mangaCoverID: cover.id, trackers: { anilist: "https://anilist.co/manga/1", animeplanet: "https://www.anime-planet.com/manga/teste", anidb: "https://anidb.net/manga/1" } } },
    ownerA.token,
  );
  assert.equal(mangaResult.errors, undefined);
  const manga = mangaResult.data.createManga;
  assert.equal(manga.isAdult, false);
  assert.equal(manga.externalMetadata?.malId ?? null, null, "Cadastro manual deve permanecer sem MAL ID.");
  assert.equal(manga.trackers.myanimelist, null);
  assert.equal(manga.trackers.anilist, "https://anilist.co/manga/1");
  assert.equal(manga.trackers.animeplanet, "https://www.anime-planet.com/manga/teste");
  assert.equal(manga.trackers.anidb, "https://anidb.net/manga/1");
  createdMangaIDs.push(manga.id);

  const chapterRaceMutation = "mutation($mangaID:ID!,$groupID:ID!,$data:CreateChapterInput!){createChapter(mangaID:$mangaID,groupID:$groupID,data:$data){id}}";
  const chapterRaceNumber = 7_654_321;
  const chapterRaceData = { chapterNumber: chapterRaceNumber, chapterTitle: "Importação concorrente", chapterType: "MAIN", pages: ["bafybeibatchracepagecid000000000000000000000000000000"] };
  const chapterRace = await Promise.all([
    graphQL(chapterRaceMutation, { mangaID: manga.id, groupID: groupA.id, data: chapterRaceData }, ownerA.token),
    graphQL(chapterRaceMutation, { mangaID: manga.id, groupID: groupA.id, data: chapterRaceData }, ownerA.token),
  ]);
  assert.equal(chapterRace.filter((result) => result.data?.createChapter).length, 1);
  assert.equal(chapterRace.filter((result) => result.errors?.[0]?.extensions?.code === "CONFLICT").length, 1);
  const racedChapterID = chapterRace.find((result) => result.data?.createChapter)?.data.createChapter.id;
  assert.ok(racedChapterID);
  await ChapterModel.deleteOne({ _id: racedChapterID });

  const originalJikanGetManga = jikanService.getManga.bind(jikanService);
  (jikanService as any).getManga = async (malId: number) => ({
    notModified: false,
    etag: `etag-${malId}`,
    data: {
      malId,
      title: `Obra Jikan ${suffix}`,
      titleEnglish: null,
      titleJapanese: null,
      aliases: [],
      synopsis: "External synopsis that must never replace the reviewed local description.",
      totalChapters: 42,
      publicationStatus: "COMPLETED",
      rawStatus: "Finished",
      authors: ["Autoria Jikan"],
      genres: ["Aventura"],
      imageUrl: null,
      malUrl: `https://myanimelist.net/manga/${malId}`,
      type: "Manga",
    },
  });
  const externalDetails = await graphQL(
    "query($malId:Int!){jikanManga(malId:$malId){malId title authors genres publicationStatus totalChapters}}",
    { malId: 1_500_002 },
    ownerA.token,
  );
  assert.equal(externalDetails.data.jikanManga.malId, 1_500_002);
  assert.deepEqual(externalDetails.data.jikanManga.authors, ["Autoria Jikan"]);
  assert.deepEqual(externalDetails.data.jikanManga.genres, ["Aventura"]);
  const forbiddenLink = await graphQL(
    "mutation($mangaID:ID!,$malId:Int!){linkMangaExternalMetadata(mangaID:$mangaID,malId:$malId){id}}",
    { mangaID: manga.id, malId: 1_500_002 },
    ownerA.token,
  );
  assert.equal(forbiddenLink.errors[0].extensions.code, "FORBIDDEN");
  const linkedLegacyManga = await graphQL(
    "mutation($mangaID:ID!,$malId:Int!){linkMangaExternalMetadata(mangaID:$mangaID,malId:$malId){id officialPublicationStatus officialTotalChapters externalMetadata{malId lastSyncedAt lastSyncError}}}",
    { mangaID: manga.id, malId: 1_500_002 },
    aegis.token,
  );
  assert.equal(linkedLegacyManga.data.linkMangaExternalMetadata.externalMetadata.malId, 1_500_002);
  assert.equal(linkedLegacyManga.data.linkMangaExternalMetadata.officialPublicationStatus, "COMPLETED");
  assert.equal(linkedLegacyManga.data.linkMangaExternalMetadata.officialTotalChapters, 42);
  const jikanMangaResult = await graphQL(
    "mutation($groupID:ID!,$data:CreateMangaInput!){createManga(groupID:$groupID,data:$data){id description mangaka genders trackers{myanimelist anilist} officialPublicationStatus officialTotalChapters externalMetadata{malId lastSyncedAt lastSyncError}}}",
    { groupID: groupA.id, data: { title: `Obra Jikan ${suffix}`, description, mangaka: "Autoria Jikan", genders: ["Aventura"], trackers: { myanimelist: "https://myanimelist.net/manga/999", anilist: "https://anilist.co/manga/2" }, malId: 1_500_000, translationLanguage: "Português" } },
    ownerA.token,
  );
  assert.equal(jikanMangaResult.data.createManga.externalMetadata.malId, 1_500_000);
  assert.equal(jikanMangaResult.data.createManga.officialPublicationStatus, "COMPLETED");
  assert.equal(jikanMangaResult.data.createManga.officialTotalChapters, 42);
  assert.equal(jikanMangaResult.data.createManga.description, description, "A sinopse revisada deve prevalecer sobre a sinopse externa.");
  assert.equal(jikanMangaResult.data.createManga.mangaka, "Autoria Jikan");
  assert.deepEqual(jikanMangaResult.data.createManga.genders, ["Aventura"]);
  assert.equal(jikanMangaResult.data.createManga.trackers.myanimelist, "https://myanimelist.net/manga/1500000");
  assert.equal(jikanMangaResult.data.createManga.trackers.anilist, "https://anilist.co/manga/2");
  createdMangaIDs.push(jikanMangaResult.data.createManga.id);

  await MangaModel.updateOne(
    { _id: jikanMangaResult.data.createManga.id },
    { $set: { officialPublicationStatus: "COMPLETED", officialTotalChapters: 1 } },
  );
  const oneShotChapter = await ChapterModel.create({
    manga: jikanMangaResult.data.createManga.id,
    group: groupA.id,
    chapterNumber: 0,
    chapterTitle: "One-shot com numeração zero",
    chapterType: "ONESHOT",
    pages: ["QmOneShotProgressTestCid000000000000000000000000"],
  });
  createdChapterIDs.push(oneShotChapter._id.toString());
  const oneShotTranslation = await graphQL(
    "query($id:ID!){manga(id:$id){translations{groupID latestMainChapter translationStatus calculatedTranslationStatus}}}",
    { id: jikanMangaResult.data.createManga.id },
  );
  const oneShotGroupTranslation = oneShotTranslation.data.manga.translations.find((item: { groupID: string }) => item.groupID === groupA.id);
  assert.equal(oneShotGroupTranslation.latestMainChapter, 1);
  assert.equal(oneShotGroupTranslation.calculatedTranslationStatus, "COMPLETED");
  assert.equal(oneShotGroupTranslation.translationStatus, "COMPLETED");
  await ChapterModel.deleteOne({ _id: oneShotChapter._id });
  await MangaModel.updateOne(
    { _id: jikanMangaResult.data.createManga.id },
    { $set: { officialTotalChapters: 42 } },
  );

  const concurrentMalID = 1_500_003;
  const concurrentMutation = "mutation($groupID:ID!,$data:CreateMangaInput!){createManga(groupID:$groupID,data:$data){id externalMetadata{malId}}}";
  const concurrentImports = await Promise.all([
    graphQL(concurrentMutation, { groupID: groupA.id, data: { title: `Importação MAL A ${suffix}`, description, mangaka: "Autoria", genders: ["Ação"], malId: concurrentMalID } }, ownerA.token),
    graphQL(concurrentMutation, { groupID: groupB.id, data: { title: `Importação MAL B ${suffix}`, description, mangaka: "Autoria", genders: ["Ação"], malId: concurrentMalID } }, ownerB.token),
  ]);
  assert.equal(concurrentImports.filter((result) => result.data?.createManga).length, 1);
  assert.equal(concurrentImports.filter((result) => result.errors?.[0]?.extensions?.code === "CONFLICT").length, 1);
  const concurrentMangaID = concurrentImports.find((result) => result.data?.createManga)?.data.createManga.id;
  assert.ok(concurrentMangaID);
  await GroupMangaModel.deleteMany({ manga: concurrentMangaID });
  await MangaModel.deleteOne({ _id: concurrentMangaID });

  (jikanService as any).getManga = async () => { throw new Error("Jikan temporariamente indisponível"); };
  const offlineMangaResult = await graphQL(
    "mutation($groupID:ID!,$data:CreateMangaInput!){createManga(groupID:$groupID,data:$data){id officialPublicationStatus externalMetadata{malId lastSyncError}}}",
    { groupID: groupA.id, data: { title: `Obra Offline ${suffix}`, description, mangaka: "Autoria Offline", genders: ["Drama"], malId: 1_500_001, translationLanguage: "Português" } },
    ownerA.token,
  );
  assert.equal(offlineMangaResult.errors, undefined);
  assert.equal(offlineMangaResult.data.createManga.officialPublicationStatus, "UNKNOWN");
  assert.match(offlineMangaResult.data.createManga.externalMetadata.lastSyncError, /indisponível/);
  createdMangaIDs.push(offlineMangaResult.data.createManga.id);
  (jikanService as any).getManga = originalJikanGetManga;

  const adultTitle = `Obra Adulta ${suffix}`;
  const adultResult = await graphQL(
    "mutation($groupID:ID!,$data:CreateMangaInput!){createManga(groupID:$groupID,data:$data){id title isAdult}}",
    { groupID: groupA.id, data: { title: adultTitle, description, mangaka: "Autoria Adulta", genders: ["Drama"], isAdult: true } },
    ownerA.token,
  );
  assert.equal(adultResult.data.createManga.isAdult, true);
  const adultMangaID = adultResult.data.createManga.id;
  createdMangaIDs.push(adultMangaID);

  const visitorList = await graphQL("query{mangas{id}}", {});
  assert.ok(!visitorList.data.mangas.some((item: { id: string }) => item.id === adultMangaID));
  const visitorSearch = await graphQL("query($query:String!){searchMangas(query:$query){id}}", { query: adultTitle });
  assert.equal(visitorSearch.data.searchMangas.length, 0);
  const visitorDirect = await graphQL("query($id:ID!){manga(id:$id){id}}", { id: adultMangaID });
  assert.equal(visitorDirect.data.manga, null);
  const visitorGroup = await graphQL("query($id:ID!){group(id:$id){mangas{id}}}", { id: groupA.id });
  assert.ok(!visitorGroup.data.group.mangas.some((item: { id: string }) => item.id === adultMangaID));

  const adultChapter = await ChapterModel.create({ manga: adultMangaID, group: groupA.id, chapterNumber: 987654, chapterTitle: "Teste adulto", pages: ["QmAdultVisibilityTestCid000000000000000000000000"] });
  createdChapterIDs.push(adultChapter._id.toString());
  const rootComment = await graphQL(
    "mutation($chapterId:ID!){createComment(chapterId:$chapterId,content:\"Comentário com avatar\"){id author{profilePicture}}}",
    { chapterId: adultChapter._id.toString() },
    ownerA.token,
  );
  assert.match(rootComment.data.createComment.author.profilePicture, /\/uploads\/images\//);
  createdCommentIDs.push(rootComment.data.createComment.id);
  const replyComment = await graphQL(
    "mutation($chapterId:ID!,$parentId:ID!){createComment(chapterId:$chapterId,parentCommentId:$parentId,content:\"Resposta com avatar\"){id author{profilePicture}}}",
    { chapterId: adultChapter._id.toString(), parentId: rootComment.data.createComment.id },
    ownerA.token,
  );
  assert.match(replyComment.data.createComment.author.profilePicture, /\/uploads\/images\//);
  createdCommentIDs.push(replyComment.data.createComment.id);
  const repliesWithAvatar = await graphQL(
    "query($commentId:ID!){commentReplies(commentId:$commentId){items{id author{profilePicture}}}}",
    { commentId: rootComment.data.createComment.id },
  );
  assert.match(repliesWithAvatar.data.commentReplies.items[0].author.profilePicture, /\/uploads\/images\//);

  const firstFollow = await graphQL(
    "mutation($groupID:ID!){toggleGroupFollow(groupID:$groupID){followed followers}}",
    { groupID: groupA.id },
    ownerB.token,
  );
  assert.deepEqual(firstFollow.data.toggleGroupFollow, { followed: true, followers: 1 });
  const followedGroup = await graphQL("query($id:ID!){group(id:$id){followedByMe}}", { id: groupA.id }, ownerB.token);
  assert.equal(followedGroup.data.group.followedByMe, true);

  await graphQL("mutation($chapterID:ID!){recordChapterView(chapterID:$chapterID){views}}", { chapterID: adultChapter._id.toString() });
  const secondView = await graphQL("mutation($chapterID:ID!){recordChapterView(chapterID:$chapterID){views}}", { chapterID: adultChapter._id.toString() });
  assert.equal(secondView.data.recordChapterView.views, 2);
  await graphQL("mutation($commentId:ID!){toggleCommentLike(commentId:$commentId){liked likeCount}}", { commentId: rootComment.data.createComment.id }, ownerB.token);

  const dynamicStats = await graphQL(
    "query($id:ID!){group(id:$id){stats{followers mangas chapters views likes}}}",
    { id: groupA.id },
  );
  assert.deepEqual(dynamicStats.data.group.stats, { followers: 1, mangas: 4, chapters: 1, views: 2, likes: 1 });

  const secondChapter = await ChapterModel.create({ manga: manga.id, group: groupA.id, chapterNumber: 987655, chapterTitle: "Segundo capítulo de teste", pages: ["QmSecondStatsTestCid00000000000000000000000000"] });
  createdChapterIDs.push(secondChapter._id.toString());
  const existingNumbers = await graphQL(
    "query($mangaID:ID!,$groupID:ID!){existingChapterNumbers(mangaID:$mangaID,groupID:$groupID)}",
    { mangaID: manga.id, groupID: groupA.id },
    ownerA.token,
  );
  assert.ok(existingNumbers.data.existingChapterNumbers.includes(987655));
  const forbiddenExistingNumbers = await graphQL(
    "query($mangaID:ID!,$groupID:ID!){existingChapterNumbers(mangaID:$mangaID,groupID:$groupID)}",
    { mangaID: manga.id, groupID: groupA.id },
    ownerB.token,
  );
  assert.equal(forbiddenExistingNumbers.errors[0].extensions.code, "FORBIDDEN");
  await ChapterModel.updateOne({ _id: secondChapter._id }, { $unset: { views: "" } });
  const legacyChapterQuery = await graphQL(
    "query($mangaId:ID!,$groupId:ID!){chaptersByManga(mangaId:$mangaId,groupId:$groupId){id views}}",
    { mangaId: manga.id, groupId: groupA.id },
  );
  assert.equal(
    legacyChapterQuery.data.chaptersByManga.find((chapter: { id: string }) => chapter.id === secondChapter._id.toString()).views,
    0,
  );
  const multipleChapterStats = await graphQL("query($id:ID!){group(id:$id){stats{mangas chapters views likes}}}", { id: groupA.id });
  assert.deepEqual(multipleChapterStats.data.group.stats, { mangas: 4, chapters: 2, views: 2, likes: 1 });
  const emptyStats = await graphQL("query($id:ID!){group(id:$id){stats{followers mangas chapters views likes}}}", { id: groupB.id });
  assert.deepEqual(emptyStats.data.group.stats, { followers: 0, mangas: 0, chapters: 0, views: 0, likes: 0 });

  const removedSocial = await graphQL(
    "mutation($id:ID!,$data:UpdateGroupInput!){updateGroup(id:$id,data:$data){socialMedias{x youtube}}}",
    { id: groupA.id, data: { socialMedias: { x: "" } } },
    ownerA.token,
  );
  assert.equal(removedSocial.data.updateGroup.socialMedias.x, null);
  assert.equal(removedSocial.data.updateGroup.socialMedias.youtube, "https://youtube.com/@scan_teste");
  const visitorReleases = await graphQL("query{latestChapters(limit:100){id}}", {});
  assert.ok(!visitorReleases.data.latestChapters.some((item: { id: string }) => item.id === adultChapter._id.toString()));

  const defaultPreference = await graphQL("query{me{preferences{showAdultContent}} mangas{id}}", {}, ownerA.token);
  assert.equal(defaultPreference.data.me.preferences.showAdultContent, false);
  assert.ok(!defaultPreference.data.mangas.some((item: { id: string }) => item.id === adultMangaID));
  await graphQL("mutation($data:UpdateProfileInput!){updateMyProfile(data:$data){preferences{showAdultContent}}}", { data: { showAdultContent: true } }, ownerA.token);
  const enabledPreference = await graphQL("query{me{preferences{showAdultContent}} mangas{id}}", {}, ownerA.token);
  assert.equal(enabledPreference.data.me.preferences.showAdultContent, true);
  assert.ok(enabledPreference.data.mangas.some((item: { id: string }) => item.id === adultMangaID));
  const enabledDirect = await graphQL("query($id:ID!){manga(id:$id){id isAdult}}", { id: adultMangaID }, ownerA.token);
  assert.equal(enabledDirect.data.manga.isAdult, true);
  const mangaStats = await graphQL("query($id:ID!){manga(id:$id){stats{chapters views likes}}}", { id: adultMangaID }, ownerA.token);
  assert.deepEqual(mangaStats.data.manga.stats, { chapters: 1, views: 2, likes: 1 });
  await UserModel.updateOne({ _id: ownerB.id }, { $unset: { preferences: "" } });
  const legacyPreference = await graphQL("query{me{preferences{showAdultContent}}}", {}, ownerB.token);
  assert.equal(legacyPreference.data.me.preferences.showAdultContent, false);

  const duplicate = await graphQL(
    "mutation($groupID:ID!,$data:CreateMangaInput!){createManga(groupID:$groupID,data:$data){id}}",
    { groupID: groupB.id, data: { title: `  ${title.toUpperCase()}  `, description, mangaka: "Outro", genders: ["Aventura"] } },
    ownerB.token,
  );
  assert.equal(duplicate.errors[0].extensions.code, "CONFLICT");

  const aliasCollision = await graphQL(
    "mutation($groupID:ID!,$data:CreateMangaInput!){createManga(groupID:$groupID,data:$data){id}}",
    { groupID: groupB.id, data: { title: `alias ${suffix}`, description, mangaka: "Outro", genders: ["Aventura"] } },
    ownerB.token,
  );
  assert.equal(aliasCollision.errors[0].extensions.code, "CONFLICT");

  const raceTitle = `Corrida ${suffix}`;
  const raceMutation = "mutation($groupID:ID!,$data:CreateMangaInput!){createManga(groupID:$groupID,data:$data){id}}";
  const [raceA, raceB] = await Promise.all([
    graphQL(raceMutation, { groupID: groupA.id, data: { title: raceTitle, description, mangaka: "A", genders: ["Ação"] } }, ownerA.token),
    graphQL(raceMutation, { groupID: groupB.id, data: { title: ` ${raceTitle.toUpperCase()} `, description, mangaka: "B", genders: ["Ação"] } }, ownerB.token),
  ]);
  const raceResults = [raceA, raceB];
  assert.equal(raceResults.filter((result) => result.data?.createManga).length, 1);
  assert.equal(raceResults.filter((result) => result.errors?.[0]?.extensions?.code === "CONFLICT").length, 1);
  const raceID = raceResults.find((result) => result.data?.createManga)?.data.createManga.id;
  if (raceID) createdMangaIDs.push(raceID);

  const aliasSearch = await graphQL("query($query:String!){searchMangas(query:$query){id}}", { query: `alias ${suffix.slice(0, 4)}` });
  assert.ok(aliasSearch.data.searchMangas.some((item: { id: string }) => item.id === manga.id));
  const englishAliasSearch = await graphQL("query($query:String!){searchMangas(query:$query){id}}", { query: `ENGLISH ${suffix}` });
  assert.ok(englishAliasSearch.data.searchMangas.some((item: { id: string }) => item.id === manga.id));
  const japaneseAliasSearch = await graphQL("query($query:String!){searchMangas(query:$query){id}}", { query: `日本語${suffix}` });
  assert.ok(japaneseAliasSearch.data.searchMangas.some((item: { id: string }) => item.id === manga.id));

  await graphQL("mutation($mangaID:ID!,$groupID:ID!){addMangaToGroup(mangaID:$mangaID,groupID:$groupID){id}}", { mangaID: manga.id, groupID: groupB.id }, ownerB.token);
  const relations = await GroupMangaModel.find({ manga: manga.id }).lean();
  assert.equal(new Set(relations.map((relation) => relation.group.toString())).size, 2);
  const groupBRelation = relations.find((relation) => relation.group.toString() === groupB.id);
  assert.ok(groupBRelation);
  const oneMangaStats = await graphQL("query($id:ID!){group(id:$id){stats{mangas chapters}}}", { id: groupB.id });
  assert.deepEqual(oneMangaStats.data.group.stats, { mangas: 1, chapters: 0 });
  await MangaModel.updateOne({ _id: manga.id }, { $set: { officialPublicationStatus: "COMPLETED", officialTotalChapters: 987655 } });
  await GroupMangaModel.updateOne({ group: groupA.id, manga: manga.id }, { $set: { translationLanguage: "Português" } });
  await GroupMangaModel.collection.updateOne(
    { _id: groupBRelation._id },
    { $set: { translationLanguage: "Português", createdAt: new Date("2024-01-01T00:00:00.000Z") } },
  );
  const translationsResult = await graphQL(
    "query($id:ID!){manga(id:$id){officialPublicationStatus officialTotalChapters translations{groupID language latestMainChapter translationStatus calculatedTranslationStatus overridden}}}",
    { id: manga.id },
  );
  const translationA = translationsResult.data.manga.translations.find((item: { groupID: string }) => item.groupID === groupA.id);
  const translationB = translationsResult.data.manga.translations.find((item: { groupID: string }) => item.groupID === groupB.id);
  assert.equal(translationA.translationStatus, "COMPLETED");
  assert.equal(translationB.translationStatus, "PAUSED");
  assert.equal(translationA.language, "Português");
  assert.equal(translationB.language, "Português");

  const forbiddenOverride = await graphQL(
    "mutation($mangaID:ID!,$groupID:ID!,$status:TranslationStatus){setTranslationStatusOverride(mangaID:$mangaID,groupID:$groupID,status:$status){translationStatus}}",
    { mangaID: manga.id, groupID: groupB.id, status: "COMPLETED" },
    ownerA.token,
  );
  assert.equal(forbiddenOverride.errors[0].extensions.code, "FORBIDDEN");
  for (const status of ["ONGOING", "PAUSED", "COMPLETED"]) {
    const overridden = await graphQL(
      "mutation($mangaID:ID!,$groupID:ID!,$status:TranslationStatus){setTranslationStatusOverride(mangaID:$mangaID,groupID:$groupID,status:$status){translationStatus calculatedTranslationStatus translationStatusOverride overridden statusOverrideByUserID statusOverrideAt}}",
      { mangaID: manga.id, groupID: groupB.id, status },
      aegis.token,
    );
    assert.equal(overridden.data.setTranslationStatusOverride.translationStatus, status);
    assert.equal(overridden.data.setTranslationStatusOverride.calculatedTranslationStatus, "PAUSED");
    assert.equal(overridden.data.setTranslationStatusOverride.statusOverrideByUserID, aegis.id);
    assert.ok(overridden.data.setTranslationStatusOverride.statusOverrideAt);
  }
  const automaticAgain = await graphQL(
    "mutation($mangaID:ID!,$groupID:ID!){setTranslationStatusOverride(mangaID:$mangaID,groupID:$groupID,status:null){translationStatus calculatedTranslationStatus translationStatusOverride overridden}}",
    { mangaID: manga.id, groupID: groupB.id },
    aegis.token,
  );
  assert.deepEqual(automaticAgain.data.setTranslationStatusOverride, { translationStatus: "PAUSED", calculatedTranslationStatus: "PAUSED", translationStatusOverride: null, overridden: false });
  assert.equal(await MangaModel.countDocuments({ normalizedTitle: mangaResult.data.createManga.title.toLowerCase() }), 1);

  const forbiddenEdit = await graphQL("mutation($id:ID!,$data:UpdateMangaInput!){updateManga(id:$id,data:$data){id}}", { id: manga.id, data: { mangaka: "Sem permissão" } }, ownerA.token);
  assert.equal(forbiddenEdit.errors[0].extensions.code, "FORBIDDEN");
  const allowedEdit = await graphQL("mutation($id:ID!,$data:UpdateMangaInput!){updateManga(id:$id,data:$data){id mangaka}}", { id: manga.id, data: { mangaka: "Autoria Atualizada" } }, aegis.token);
  assert.equal(allowedEdit.data.updateManga.mangaka, "Autoria Atualizada");
  const classificationEdit = await graphQL("mutation($id:ID!,$data:UpdateMangaInput!){updateManga(id:$id,data:$data){id isAdult}}", { id: adultMangaID, data: { isAdult: false } }, aegis.token);
  assert.equal(classificationEdit.data.updateManga.isAdult, false);
  await graphQL("mutation($id:ID!,$data:UpdateMangaInput!){updateManga(id:$id,data:$data){id}}", { id: adultMangaID, data: { isAdult: true } }, aegis.token);

  await MediaModel.updateOne({ _id: avatarOne.id }, { $set: { orphanedAt: new Date(0) } });
  const cleanup = await MediaService.cleanup();
  assert.ok(cleanup.deleted >= 1);
  assert.equal((await MediaModel.findById(avatarOne.id).lean())?.status, "DELETED");

  console.log("Uploads, estatísticas, seguidores, views, likes, redes sociais, catálogo e filtros validados.");
} finally {
  await CommentLikeModel.deleteMany({ user: { $in: createdUserIDs } });
  await CommentModel.deleteMany({ $or: [{ _id: { $in: createdCommentIDs } }, { author: { $in: createdUserIDs } }] });
  await ChapterModel.deleteMany({ _id: { $in: createdChapterIDs } });
  await GroupMangaModel.deleteMany({ group: { $in: createdGroupIDs } });
  await MangaModel.deleteMany({ _id: { $in: createdMangaIDs } });
  await GroupFollowModel.deleteMany({ $or: [{ group: { $in: createdGroupIDs } }, { user: { $in: createdUserIDs } }] });
  await GroupModel.deleteMany({ _id: { $in: createdGroupIDs } });
  const media = await MediaModel.find({ ownerID: { $in: createdUserIDs } }).lean();
  for (const item of media) await StorageService.deleteFile(item.storageKey).catch(() => undefined);
  await MediaModel.deleteMany({ ownerID: { $in: createdUserIDs } });
  await UserModel.deleteMany({ _id: { $in: createdUserIDs } });
  await app.close();
  await TakoProjectDB.close();
}
