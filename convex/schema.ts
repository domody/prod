import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  documents: defineTable({
    ownerId: v.string(),
    title: v.string(),

    content: v.optional(v.string()),
    type: v.optional(v.string()),

    sharedWith: v.optional(v.array(v.string())),

    parentId: v.optional(v.id("documents")),
    // spacesid: v.optional(v.id("spaces")),

    updatedTime: v.optional(v.number()),
    // pot at versioning
  }),

  
});
