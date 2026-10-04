CREATE TYPE "course_status" AS ENUM('unpublished', 'published');--> statement-breakpoint
ALTER TABLE "courses" ADD COLUMN "status" "course_status" DEFAULT 'unpublished'::"course_status" NOT NULL;--> statement-breakpoint
ALTER TABLE "courses" ALTER COLUMN "course_id" SET DEFAULT gen_random_uuid();--> statement-breakpoint
ALTER TABLE "courses" ALTER COLUMN "title" SET DEFAULT 'ENGL';--> statement-breakpoint
ALTER TABLE "courses" ALTER COLUMN "number" SET DEFAULT '1234';--> statement-breakpoint
ALTER TABLE "courses" ALTER COLUMN "created_at" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "courses" ALTER COLUMN "created_at" SET NOT NULL;