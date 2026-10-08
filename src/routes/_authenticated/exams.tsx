import { createFileRoute, Link } from "@tanstack/react-router";
import { StudentShell } from "@/components/StudentShell";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/_authenticated/exams")({
  head: () => ({ meta: [{ title: "Start Exam — SCHOLARS CBT" }, { name: "description", content: "Your available examinations." }] }),
  component: () => (
    <StudentShell>
      <h1 className="text-3xl font-extrabold">Start Exam</h1>
      <p className="mt-1 text-muted-foreground">Your available examinations.</p>
      <div className="mt-6 rounded-2xl border border-dashed p-8 text-center text-muted-foreground">
        This page is coming soon.
        <div className="mt-4"><Button asChild><Link to="/dashboard">Go to Dashboard</Link></Button></div>
      </div>
    </StudentShell>
  ),
});
