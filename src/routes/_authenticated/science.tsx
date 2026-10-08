import { createFileRoute, Link } from "@tanstack/react-router";
import { StudentShell } from "@/components/StudentShell";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/_authenticated/science")({
  head: () => ({ meta: [{ title: "Global Science — SCHOLARS CBT" }, { name: "description", content: "Real-world science discoveries linked to your subjects." }] }),
  component: () => (
    <StudentShell>
      <h1 className="text-3xl font-extrabold">Global Science</h1>
      <p className="mt-1 text-muted-foreground">Real-world science discoveries linked to your subjects.</p>
      <div className="mt-6 rounded-2xl border border-dashed p-8 text-center text-muted-foreground">
        This page is coming soon.
        <div className="mt-4"><Button asChild><Link to="/dashboard">Go to Dashboard</Link></Button></div>
      </div>
    </StudentShell>
  ),
});
