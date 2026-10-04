"use server";

import { redirect } from "next/navigation";
import { db } from "../../../db";
import { coursesTable } from "@/index";
import { eq } from "drizzle-orm";

export async function createCourse() {
  const [course] = await db
    .insert(coursesTable)
    .values({})
    .returning({ id: coursesTable.id });

  redirect(`/courses/${course.id}`);
}

export async function updateCourse(formData: FormData) {
  const courseId = formData.get("courseId") as string;
  const title = formData.get("title") as string;
  const subject = formData.get("subject") as string;
  const number = formData.get("number") as string;

  await db
    .update(coursesTable)
    .set({ title, subject, number })
    .where(eq(coursesTable.id, courseId));

  redirect(`/courses/${courseId}`);
}
