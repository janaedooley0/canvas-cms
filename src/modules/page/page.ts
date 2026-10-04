import { pgTable, pgEnum, uuid, unique } from "drizzle-orm/pg-core";
import { coursesTable } from "../course";

export const pageType = pgEnum("page_type", ["home", "syllabus", "modules"]);

export const pagesTable = pgTable(
  "pages",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    courseId: uuid("course_id")
      .notNull()
      .references(() => coursesTable.id),
    type: pageType("type").notNull(),
  },
  (table) => [unique().on(table.courseId, table.type)],
);
