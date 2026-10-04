import { pgTable, char, uuid, varchar } from "drizzle-orm/pg-core";
import { coursesTable } from "../course/course";

export enum TermCode {
  Spring = "10",
  Summer = "50",
  Fall = "80",
}
export const courseSections = pgTable("course_sections", {
  id: uuid("section_id").primaryKey().defaultRandom(),
  course_id: uuid("course_id")
    .notNull()
    .references(() => coursesTable.id, { onDelete: "cascade" }),
  section_code: varchar("section_code", { length: 5 }).notNull(),
  semester_code: char("semester_code", { length: 6 }).notNull(),
});
