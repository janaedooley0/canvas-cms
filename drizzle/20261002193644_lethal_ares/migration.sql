CREATE TABLE "users" (
	"user_id" uuid PRIMARY KEY,
	"first_name" text,
	"last_name" text,
	"email" text,
	"created_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "courses" (
	"course_id" uuid PRIMARY KEY,
	"title" text NOT NULL,
	"number" text NOT NULL,
	"instructor" text,
	"credit_hours" integer,
	"created_at" timestamp
);
