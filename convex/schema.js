import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    name: v.string(),
    email: v.string(),
    picture: v.string(),
  }),
  emailTemplates: defineTable({ 
    tid: v.string(),
    design: v.any(),
    descrption:v.any(),
    email: v.string(),
  }),
});
