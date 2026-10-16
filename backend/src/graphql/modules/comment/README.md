# Chapter comments

Comments are attached directly to a chapter. A reply always points to the main
comment in its thread: when the API receives a reply to another reply, it
normalizes `parentComment` to that thread's main comment. This keeps querying
and rendering limited to two visual levels; the client prefixes the targeted
username when appropriate.

Main comments with replies use a tombstone (`deletedAt`) so deleting them does
not erase the conversation. Comments without replies and individual replies
are hard-deleted together with their likes.

Top-level comments use offset pagination because the project had no existing
cursor convention. Replies are paginated separately in groups of five. Likes
live in their own collection and the unique `{ user, comment }` index is the
database-level guarantee against duplicates.
