import { pgTable, uuid, text } from "drizzle-orm/pg-core";
import { usersTable } from "../user";

export const Faculty = pgTable("Faculty", {
  userId: uuid("user_id")
    .notNull()
    .references(() => usersTable.id),
  role: text().notNull().default("Professor"),
});
