import { pgTable, uuid, primaryKey } from "drizzle-orm/pg-core";
import { courseSections } from "../course_sections";
import { Faculty } from "../faculty";

export const sectionInstructorsTable = pgTable(
  "section_instructors",
  {
    sectionId: uuid("section_id")
      .notNull()
      .references(() => courseSections.id, { onDelete: "cascade" }),
    instructorId: uuid("instructor_id")
      .notNull()
      .references(() => Faculty.userId, { onDelete: "cascade" }),
  },
  (table) => [primaryKey({ columns: [table.sectionId, table.instructorId] })],
);
