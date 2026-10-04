CREATE TYPE "page_type" AS ENUM('home', 'syllabus', 'modules');--> statement-breakpoint
CREATE TYPE "page_component_type" AS ENUM('text', 'image', 'module_list');--> statement-breakpoint
CREATE TABLE "pages" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
	"course_id" uuid NOT NULL,
	"type" "page_type" NOT NULL,
	CONSTRAINT "pages_course_id_type_unique" UNIQUE("course_id","type")
);
--> statement-breakpoint
CREATE TABLE "page_component" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
	"page_id" uuid NOT NULL,
	"type" "page_component_type" NOT NULL,
	"position" integer NOT NULL,
	"content" jsonb NOT NULL
);
--> statement-breakpoint
ALTER TABLE "pages" ADD CONSTRAINT "pages_course_id_courses_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "courses"("course_id");--> statement-breakpoint
ALTER TABLE "page_component" ADD CONSTRAINT "page_component_page_id_pages_id_fkey" FOREIGN KEY ("page_id") REFERENCES "pages"("id");