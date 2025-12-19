import Sidebar from "@/components/dashboard/sidebar/Sidebar";
import { authApiServer } from "@/lib/api/auth/auth.server";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
   try {
    await authApiServer.me();
  } catch {
    redirect("/auth/login");
  }
  
  return (
    <>
      <main className="relative w-full h-screen flex overflow-hidden">
        <Sidebar />
        <section className="flex-1 h-full overflow-y-auto">{children}</section>
      </main>
    </>
  );
}
