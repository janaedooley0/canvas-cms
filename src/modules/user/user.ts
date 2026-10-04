import { pgTable, uuid, varchar, text, timestamp } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

export const usersTable = pgTable("users", {
  id: uuid("user_id").primaryKey().defaultRandom(),
  u_id: text("uid")
    .notNull()
    .unique()
    .default(sql`'U00' || lpad(floor(random() * 1000000)::int::text, 6, '0')`),
  image_url: text("image_url"),
  first_name: text(),
  last_name: text(),
  email: text(),
  created_at: timestamp().defaultNow(),
});
