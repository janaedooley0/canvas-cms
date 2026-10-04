import { db } from "../../../db";
import Link from "next/link";

import { coursesTable } from "@/index";
import { createCourse } from "./actions";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default async function courses() {
  const courses = await db
    .select({
      courseId: coursesTable.id,
      publicId: coursesTable.public_id,
      title: coursesTable.title,
      subject: coursesTable.subject,
      number: coursesTable.number,
      instructor: coursesTable.instructor,
      credit_hours: coursesTable.credit_hours,
      created_at: coursesTable.created_at,
    })
    .from(coursesTable);

  return (
    <main>
      <Button onClick={createCourse}>Start a New Course</Button>

      <div className="grid grid-cols-3 gap-4">
        {courses.map((course) => (
          <Link key={course.courseId} href={`/courses/${course.publicId}`}>
            <Card
              key={course.courseId}
              className="relative mx-auto w-full max-w-sm pt-0"
            >
              <img
                src="https://avatar.vercel.sh/shadcn1"
                alt="Event cover"
                className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
              />
              <CardHeader>
                <CardTitle>{course.title}</CardTitle>
                <CardDescription>
                  {course.subject} {course.number}
                </CardDescription>
                <CardAction>Card Action</CardAction>
              </CardHeader>

              <CardContent>
                <p>
                  Lorem ipsum. This is an example course description for an
                  example course feature card.
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  );
}
