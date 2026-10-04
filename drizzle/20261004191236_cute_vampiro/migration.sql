ALTER TABLE "instructors" RENAME TO "Faculty";--> statement-breakpoint
ALTER TABLE "Faculty" DROP CONSTRAINT "instructors_pkey";--> statement-breakpoint
ALTER TABLE "Faculty" ADD COLUMN "user_id" uuid NOT NULL;--> statement-breakpoint
ALTER TABLE "Faculty" ADD COLUMN "role" text DEFAULT 'Professor' NOT NULL;--> statement-breakpoint
ALTER TABLE "Faculty" DROP COLUMN "instructor_id";--> statement-breakpoint
ALTER TABLE "Faculty" DROP COLUMN "first_name";--> statement-breakpoint
ALTER TABLE "Faculty" DROP COLUMN "last_name";--> statement-breakpoint
ALTER TABLE "Faculty" ADD CONSTRAINT "Faculty_user_id_users_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id");