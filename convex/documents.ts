import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const createNewDocument = mutation({
  args: {
    ownerId: v.string(),
    title: v.optional(v.string()),
    content: v.optional(v.string()),
    type: v.optional(v.string()),
    parentId: v.optional(v.id("documents")),
    // spaceId: v.optional(v.id("spaces")),
  },
  handler: async (ctx, args) => {
    const now = Date.now();

    const documentId = await ctx.db.insert("documents", {
      ownerId: args.ownerId,
      title: args.title ?? "",
      content: args.content ?? "",
      type: args.type ?? "doc",
      parentId: args.parentId,
      // spaceId: args.spaceId,
      sharedWith: [],
      updatedTime: now,
    });
  },
});

export const getUserDocuments = query({
  args: { ownerId: v.string() },
  handler: async (ctx, args) => {
    const documents = await ctx.db
      .query("documents")
      .filter((q) => q.eq(q.field("ownerId"), args.ownerId))
      .collect();

    const sortedDocs = documents.sort((a, b) => {
      const aTime = a.updatedTime ?? a._creationTime;
      const bTime = b.updatedTime ?? b._creationTime;
      return bTime - aTime;
    });

    return sortedDocs.map((doc) => ({
      _id: doc._id,
      title: doc.title,
      type: doc.type,
      updatedTime: doc.updatedTime,
    }));
  },
});

export const getDocumentById = query({
  args: { id: v.id("documents") },
  handler: async (ctx, args) => {
    const document = await ctx.db.get(args.id);
    if (!document) throw new Error("Document not found.");
    return document;
  },
});
