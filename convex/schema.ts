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
    spaceId: v.optional(v.id("spaces")),

    updatedTime: v.optional(v.number()),
    // pot at versioning
  }),

  spaces: defineTable({
    ownerId: v.string(),
    name: v.string(),

    description: v.optional(v.string()),

    sharedWith: v.optional(v.array(v.string())),

    parentId: v.optional(v.string()),

    updatedTime: v.optional(v.number()),
  }),
});
