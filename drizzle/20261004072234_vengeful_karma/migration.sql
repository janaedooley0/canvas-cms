ALTER TABLE "courses" ADD COLUMN "subject" text DEFAULT 'ENGL' NOT NULL;--> statement-breakpoint
ALTER TABLE "courses" ALTER COLUMN "title" SET DEFAULT 'Default Course Name';--> statement-breakpoint
ALTER TABLE "courses" ALTER COLUMN "title" DROP NOT NULL;