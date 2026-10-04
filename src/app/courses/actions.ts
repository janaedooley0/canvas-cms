"use server";

import { redirect } from "next/navigation";
import { db } from "../../../db";
import { coursesTable, pagesTable } from "@/index";
import { eq } from "drizzle-orm";

export async function createCourse() {
  const [course] = await db
    .insert(coursesTable)
    .values({})
    .returning({ id: coursesTable.id, publicId: coursesTable.public_id });

  await db.insert(pagesTable).values({
    courseId: course.id,
    type: "home",
  });

  redirect(`/courses/${course.publicId}`);
}

export async function updateCourse(formData: FormData) {
  const courseId = formData.get("courseId") as string;
  const title = formData.get("title") as string;
  const subject = formData.get("subject") as string;
  const number = formData.get("number") as string;

  const [course] = await db
    .update(coursesTable)
    .set({ title, subject, number })
    .where(eq(coursesTable.id, courseId))
    .returning({ publicId: coursesTable.public_id });

  redirect(`/courses/${course.publicId}`);
}
