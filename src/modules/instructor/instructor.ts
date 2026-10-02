import { pgTable, uuid, text } from "drizzle-orm/pg-core";

export const instructorsTable = pgTable("instructors", {
  id: uuid("instructor_id").primaryKey(),
  first_name: text().notNull(),
  last_name: text().notNull(),
});
