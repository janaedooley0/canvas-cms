ALTER TABLE "users" ADD COLUMN "uid" text NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD CONSTRAINT "users_uid_key" UNIQUE("uid");