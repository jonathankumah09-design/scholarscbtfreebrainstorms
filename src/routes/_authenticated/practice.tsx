import { createFileRoute, Link } from "@tanstack/react-router";
import { StudentShell } from "@/components/StudentShell";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/_authenticated/practice")({
  head: () => ({ meta: [{ title: "Practice — SCHOLARS CBT" }, { name: "description", content: "Practice questions and AI tutor help." }] }),
  component: () => (
    <StudentShell>
      <h1 className="text-3xl font-extrabold">Practice</h1>
      <p className="mt-1 text-muted-foreground">Practice questions and AI tutor help.</p>
      <div className="mt-6 rounded-2xl border border-dashed p-8 text-center text-muted-foreground">
        This page is coming soon.
        <div className="mt-4"><Button asChild><Link to="/dashboard">Go to Dashboard</Link></Button></div>
      </div>
    </StudentShell>
  ),
});
