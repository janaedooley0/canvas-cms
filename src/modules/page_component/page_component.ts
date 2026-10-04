import { pgTable, pgEnum, uuid, integer, jsonb } from "drizzle-orm/pg-core";
import { pagesTable } from "../page/page";

export const pageComponentType = pgEnum("page_component_type", [
  "text",
  "image",
  "module_list",
]);

export const pageComponent = pgTable("page_component", {
  id: uuid("id").primaryKey().defaultRandom(),
  pageId: uuid("page_id")
    .notNull()
    .references(() => pagesTable.id),
  type: pageComponentType("type").notNull(),
  position: integer().notNull(),
  content: jsonb("content").$type<{ text: string }>().notNull(),
});
