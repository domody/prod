import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const getUserSpaces = query({
  args: { ownerId: v.string() },
  handler: async (ctx, args) => {
    const spaces = await ctx.db
      .query("spaces")
      .filter((q) => q.eq(q.field("ownerId"), args.ownerId))
      .collect();

    return spaces;
  },
});
