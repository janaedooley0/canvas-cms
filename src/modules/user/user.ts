import { pgTable, uuid, varchar, text, timestamp } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: uuid("user_id").primaryKey(),
  first_name: text(),
  last_name: text(),
  email: text(),
  created_at: timestamp(),
});
