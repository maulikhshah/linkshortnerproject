import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/");
  }

  return (
    <main className="flex flex-col flex-1 p-8 font-sans bg-white dark:bg-zinc-900">
      <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
        Dashboard
      </h1>
    </main>
  );
}
