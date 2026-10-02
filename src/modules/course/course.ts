import { pgTable, uuid, text, integer, timestamp } from "drizzle-orm/pg-core";

export const coursesTable = pgTable("courses", {
  id: uuid("course_id").primaryKey(),
  title: text().notNull(),
  number: text().notNull(),
  instructor: text(),
  credit_hours: integer(),
  created_at: timestamp(),
});
