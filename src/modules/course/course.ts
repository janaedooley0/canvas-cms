import {
  pgTable,
  pgEnum,
  uuid,
  text,
  integer,
  timestamp,
} from "drizzle-orm/pg-core";

export const courseStatus = pgEnum("course_status", [
  "unpublished",
  "published",
]);

export const coursesTable = pgTable("courses", {
  id: uuid("course_id").primaryKey().defaultRandom(),
  public_id: integer("public_id")
    .generatedAlwaysAsIdentity({ startWith: 100000 })
    .unique(),
  title: text("title").default("Default Course Name"),
  subject: text("subject").notNull().default("ENGL"),
  number: text("number").notNull().default("1234"),
  instructor: text(),
  credit_hours: integer(),
  status: courseStatus("status").notNull().default("unpublished"),
  created_at: timestamp().defaultNow().notNull(),
});
