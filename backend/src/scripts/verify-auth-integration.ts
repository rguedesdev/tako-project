import assert from "node:assert/strict";
import crypto from "node:crypto";
import jwt from "jsonwebtoken";

import buildApp from "../app";
import { ChapterModel } from "../graphql/modules/chapter/model";
import { CommentLikeModel, CommentModel } from "../graphql/modules/comment/model";
import { UserModel } from "../graphql/modules/user/model";
import { TakoProjectDB } from "../plugins/mongoose";

const app = await buildApp();
const suffix = crypto.randomBytes(6).toString("hex");
const email = `codex-auth-${suffix}@example.com`;
const username = `codex_${suffix}`;
const password = `Safe-${suffix}-Pass9`;
let userID: string | null = null;
const commentIDs: string[] = [];

async function graphQL(
  query: string,
  variables: Record<string, unknown> = {},
  token?: string,
) {
  const response = await app.inject({
    method: "POST",
    url: "/graphql",
    headers: token ? { authorization: `Bearer ${token}` } : {},
    payload: { query, variables },
  });
  assert.equal(response.statusCode, 200);
  return response.json();
}

try {
  const invalidRegistration = await graphQL(
    `mutation SignUp($data: SignUpInput!) { signUp(data: $data) { token } }`,
    {
      data: {
        name: "Usuário de Teste",
        username,
        email,
        password,
        confirmPassword: `${password}-different`,
      },
    },
  );
  assert.equal(invalidRegistration.errors[0].extensions.code, "BAD_USER_INPUT");

  const signUp = await graphQL(
    `mutation SignUp($data: SignUpInput!) {
      signUp(data: $data) {
        token
        user { id name username email accountType subscription { plan status autoRenew } preferences { showAdultContent } }
      }
    }`,
    {
      data: {
        name: "Usuário de Teste",
        username,
        email,
        password,
        confirmPassword: password,
      },
    },
  );
  assert.equal(signUp.errors, undefined);
  assert.ok(signUp.data.signUp.token);
  assert.equal(signUp.data.signUp.user.username, username);
  assert.equal(signUp.data.signUp.user.subscription.plan, "FREE");
  assert.equal(signUp.data.signUp.user.accountType, "MEMBER");
  assert.equal(signUp.data.signUp.user.preferences.showAdultContent, false);
  userID = signUp.data.signUp.user.id;

  const storedUser = await UserModel.findById(userID)
    .select("+passwordHash +password")
    .lean();
  assert.ok(storedUser?.passwordHash?.startsWith("$2"));
  assert.equal(storedUser?.password, undefined);

  const duplicate = await graphQL(
    `mutation SignUp($data: SignUpInput!) { signUp(data: $data) { token } }`,
    {
      data: {
        name: "Duplicado",
        username,
        email: `other-${email}`,
        password,
        confirmPassword: password,
      },
    },
  );
  assert.equal(duplicate.errors[0].extensions.code, "CONFLICT");

  const loginByUsername = await graphQL(
    `mutation SignIn($data: SignInInput!) {
      signIn(data: $data) { token user { id username } }
    }`,
    { data: { login: username, password } },
  );
  assert.equal(loginByUsername.data.signIn.user.id, userID);

  const loginByEmail = await graphQL(
    `mutation SignIn($data: SignInInput!) {
      signIn(data: $data) { token user { id email } }
    }`,
    { data: { login: email.toUpperCase(), password } },
  );
  const token = loginByEmail.data.signIn.token;
  assert.equal(loginByEmail.data.signIn.user.email, email);

  const enabledAdult = await graphQL(
    `mutation { updateMyProfile(data: { showAdultContent: true }) { preferences { showAdultContent } } }`,
    {},
    token,
  );
  assert.equal(enabledAdult.data.updateMyProfile.preferences.showAdultContent, true);

  const updatedEmail = `updated-${email}`;
  const emailUpdate = await graphQL(
    `mutation UpdateEmail($data: UpdateProfileInput!) {
      updateMyProfile(data: $data) { email }
    }`,
    { data: { email: updatedEmail.toUpperCase() } },
    token,
  );
  assert.equal(emailUpdate.data.updateMyProfile.email, updatedEmail);

  const privateProfile = await graphQL(
    `query PublicProfile($username: String!) { user(username: $username) { username email } }`,
    { username },
  );
  assert.equal(privateProfile.data.user.email, null);

  const relogin = await graphQL(
    `mutation SignIn($data: SignInInput!) { signIn(data: $data) { user { preferences { showAdultContent } } } }`,
    { data: { login: updatedEmail, password } },
  );
  assert.equal(relogin.data.signIn.user.preferences.showAdultContent, true);

  const me = await graphQL(
    `query Me { me { id username subscription { plan status } } }`,
    {},
    token,
  );
  assert.equal(me.data.me.id, userID);

  const unauthenticated = await graphQL(`query Me { me { id } }`);
  assert.equal(unauthenticated.errors[0].extensions.code, "UNAUTHENTICATED");

  const expiredToken = jwt.sign(
    { id: userID },
    process.env.JWT_SECRET as string,
    { expiresIn: -1 },
  );
  const expired = await graphQL(`query Me { me { id } }`, {}, expiredToken);
  assert.equal(expired.errors[0].extensions.code, "UNAUTHENTICATED");

  const tokenWithoutExpiration = jwt.sign(
    { id: userID },
    process.env.JWT_SECRET as string,
  );
  const unbounded = await graphQL(`query Me { me { id } }`, {}, tokenWithoutExpiration);
  assert.equal(unbounded.errors[0].extensions.code, "UNAUTHENTICATED");

  const chapter = await ChapterModel.findOne().select("_id").lean();
  assert.ok(chapter, "É necessário um capítulo existente para validar comentários.");
  const comment = await graphQL(
    `mutation Comment($chapterId: ID!, $content: String!) {
      createComment(chapterId: $chapterId, content: $content) {
        id content author { id username }
      }
    }`,
    {
      chapterId: chapter._id.toString(),
      content: "[codex-auth-test] comentário autenticado",
    },
    token,
  );
  assert.equal(comment.errors, undefined);
  assert.equal(comment.data.createComment.author.id, userID);
  commentIDs.push(comment.data.createComment.id);

  const protectedWithoutToken = await graphQL(
    `mutation Comment($chapterId: ID!) {
      createComment(chapterId: $chapterId, content: "não autorizado") { id }
    }`,
    { chapterId: chapter._id.toString() },
  );
  assert.equal(protectedWithoutToken.errors[0].extensions.code, "UNAUTHENTICATED");

  console.log(
    "Cadastro, edição de e-mail, privacidade, login, JWT, contexto protegido e comentários validados.",
  );
} finally {
  for (const commentID of commentIDs) {
    await CommentLikeModel.deleteMany({ comment: commentID });
    await CommentModel.deleteOne({ _id: commentID });
  }
  if (userID) await UserModel.deleteOne({ _id: userID });
  await app.close();
  await TakoProjectDB.close();
}
