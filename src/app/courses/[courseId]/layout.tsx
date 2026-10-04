import { CourseNav } from "@/components/CourseNav";

export default async function CourseLayout({
  children,
  params,
}: LayoutProps<"/courses/[courseId]">) {
  const { courseId } = await params;

  return (
    <div className="flex flex-col flex-1">
      <header className="h-14 border-b flex items-center px-6">
        {/* breadcrumbs go here */}
      </header>

      <div className="flex flex-1">
        <CourseNav courseId={courseId} />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
