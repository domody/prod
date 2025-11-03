import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  organisations: defineTable({
    name: v.string(),
    slug: v.string(),
    description: v.string(),
    updatedTime: v.optional(v.number()),
  }),

  teams: defineTable({
    organisationId: v.id("organisations"),
    name: v.string(),
    slug: v.string(),
    description: v.string(),
    updatedTime: v.optional(v.number()),
  }),

  users: defineTable({
    email: v.string(),
    name: v.string(),
    avatarUrl: v.optional(v.string()),
    lastSeenTime: v.optional(v.number()),
  }),

  organisation_members: defineTable({
    userId: v.id("users"),
    organisationId: v.id("organisations"),
    // role: v.string(),
  }),

  team_members: defineTable({
    userId: v.id("users"),
    teamID: v.id("teams"),
  }),

  issue_types: defineTable({
    organisationId: v.id("organisations"),
    name: v.string(),
    // color: v.string(),
  }),

  issue_priorities: defineTable({
    organisationId: v.id("organisations"),
    name: v.string(),
    level: v.number(),
    // color: v.string(),
  }),

  issue_statuses: defineTable({
    organisationId: v.id("organisations"),
    name: v.string(),
    order: v.number(),
    // color: v.string(),
  }),

  issues: defineTable({
    organisationId: v.id("organisations"),
    teamId: v.optional(v.id("teams")),
    createdBy: v.id("users"),
    title: v.string(),
    body: v.string(),
    assigneeId: v.optional(v.id("users")),
    typeId: v.optional(v.id("issue_types")),
    statusId: v.optional(v.id("issue_statuses")),
    priorityId: v.optional(v.id("issue_priorities")),
    dueTime: v.optional(v.number()),
    updatedTime: v.optional(v.number()),
  }),

  labels: defineTable({
    organisationId: v.id("organisations"),
    name: v.string(),
    // color: v.string(),
  }),

  issue_labels: defineTable({
    issueId: v.id("issues"),
    labelId: v.id("labels"),
  }),

  issue_subscribers: defineTable({
    issueId: v.id("issues"),
    userId: v.id("users"),
  }),

  // CHECK BELOW ****
  
  comments: defineTable({
    issueId: v.id("issues"),
    authorId: v.id("users"),
    body: v.string(),
    editedTime: v.optional(v.number()),
    deleted: v.optional(v.boolean()),
  }),

  attachments: defineTable({
    issueId: v.id("issues"),
    commentId: v.optional(v.id("comments")),
    uploaderId: v.id("users"),
    fileUrl: v.string(),
    fileName: v.string(),
    fileSize: v.number(),
    contentType: v.string(),
  }),

  issue_relations: defineTable({
    fromIssueId: v.id("issues"),
    toIssueId: v.id("issues"),
    type: v.string(), // "blocks", "blocked_by", "duplicate_of", "relates_to"
  }),

  issue_history: defineTable({
    issueId: v.id("issues"),
    actorId: v.id("users"),
    field: v.string(), // e.g. "status", "priority"
    oldValue: v.optional(v.string()),
    newValue: v.optional(v.string()),
  }),

  audit_logs: defineTable({
    organisationId: v.id("organisations"),
    actorId: v.id("users"),
    action: v.string(), // e.g. "issue.status_changed"
    target: v.object({
      type: v.string(),
      id: v.string(),
    }),
    payload: v.optional(v.object({})), // can store arbitrary metadata
  }),

  notifications: defineTable({
    userId: v.id("users"),
    organisationId: v.id("organisations"),
    type: v.string(), // e.g. "issue_assigned", "comment_mention"
    entityId: v.string(), // related issue or comment id
    read: v.optional(v.boolean()),
  }),

  user_preferences: defineTable({
    userId: v.id("users"),
    theme: v.optional(v.string()), // "dark", "light"
    notificationsEnabled: v.optional(v.boolean()),
    timezone: v.optional(v.string()),
    updatedTime: v.optional(v.number()),
  }),
});
