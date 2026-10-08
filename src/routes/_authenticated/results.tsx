import { createFileRoute, Link } from "@tanstack/react-router";
import { StudentShell } from "@/components/StudentShell";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/_authenticated/results")({
  head: () => ({ meta: [{ title: "My Results — SCHOLARS CBT" }, { name: "description", content: "All your result slips." }] }),
  component: () => (
    <StudentShell>
      <h1 className="text-3xl font-extrabold">My Results</h1>
      <p className="mt-1 text-muted-foreground">All your result slips.</p>
      <div className="mt-6 rounded-2xl border border-dashed p-8 text-center text-muted-foreground">
        This page is coming soon.
        <div className="mt-4"><Button asChild><Link to="/dashboard">Go to Dashboard</Link></Button></div>
      </div>
    </StudentShell>
  ),
});
