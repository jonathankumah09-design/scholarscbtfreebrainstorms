import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Atom, Cpu, Dna, Rocket, Zap } from "lucide-react";
import { StudentShell } from "@/components/StudentShell";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_authenticated/science")({
  head: () => ({ meta: [{ title: "Global Science — SCHOLARS CBT" }, { name: "description", content: "Real-world science discoveries linked to your SS1–SS3 subjects." }] }),
  component: Science,
});

const items = [
  { icon: Rocket, org: "NASA", t: "James Webb Space Telescope", s: "Physics", c: "SS 2", d: "Webb sees infrared light to photograph galaxies formed over 13 billion years ago.", link: "Waves & the electromagnetic spectrum", try: "Why can infrared pass through dust that blocks visible light?" },
  { icon: Rocket, org: "NASA", t: "Artemis: Back to the Moon", s: "Physics", c: "SS 1", d: "Rockets must reach about 11 km/s to escape Earth's gravity.", link: "Motion, forces & Newton's laws", try: "Use Newton's third law to explain how a rocket moves in space." },
  { icon: Atom, org: "CERN", t: "The Higgs Boson", s: "Physics", c: "SS 3", d: "The Large Hadron Collider smashes protons at near light speed to find new particles.", link: "Atomic & nuclear physics", try: "Name the three particles that make up an atom." },
  { icon: Zap, org: "Energy", t: "Solar Mini-Grids in Nigeria", s: "Physics", c: "SS 2", d: "Rural communities now get power from solar panels and batteries.", link: "Electricity & energy conversion", try: "A 100 W panel runs 5 hours. How many Wh does it make?" },
  { icon: Zap, org: "Energy", t: "Green Hydrogen", s: "Chemistry", c: "SS 2", d: "Electrolysis splits water into hydrogen fuel using renewable power.", link: "Electrolysis & redox", try: "Write the equation for the electrolysis of water." },
  { icon: Atom, org: "Chemistry", t: "Lithium Batteries", s: "Chemistry", c: "SS 3", d: "Phones and electric cars rely on lithium ions moving between electrodes.", link: "Electrochemical cells", try: "Which electrode is oxidation at: anode or cathode?" },
  { icon: Dna, org: "Biotech", t: "CRISPR Gene Editing", s: "Biology", c: "SS 3", d: "Scientists can now cut and fix DNA, giving hope for sickle-cell patients.", link: "Genetics & heredity", try: "What genotype causes sickle-cell anaemia?" },
  { icon: Dna, org: "Biotech", t: "Malaria Vaccines R21", s: "Biology", c: "SS 1", d: "New vaccines are cutting child deaths from malaria across Africa.", link: "Diseases & immunity", try: "Name the organism that causes malaria and its vector." },
  { icon: Cpu, org: "AI", t: "AlphaFold Protein Shapes", s: "Biology", c: "SS 2", d: "AI predicted the 3D shapes of 200 million proteins, speeding up drug design.", link: "Cell biology & enzymes", try: "Why does an enzyme's shape matter for its job?" },
  { icon: Cpu, org: "AI", t: "AI Weather Forecasting", s: "Mathematics", c: "SS 3", d: "AI models learn from decades of data to forecast storms faster.", link: "Statistics & probability", try: "Find the mean of rainfall: 12, 8, 15, 5 mm." },
  { icon: Cpu, org: "AI", t: "How Chatbots Read Text", s: "English", c: "SS 1", d: "Language models learn grammar patterns from billions of sentences.", link: "Parts of speech & sentence structure", try: "Identify the verb: 'The robot answered quickly.'" },
];

const SUBS = ["All", "Physics", "Chemistry", "Biology", "Mathematics", "English"];

function Science() {
  const [f, setF] = useState("All");
  const list = items.filter((i) => f === "All" || i.s === f);
  return (
    <StudentShell>
      <h1 className="text-3xl font-extrabold">Global Science</h1>
      <p className="mt-1 text-muted-foreground">Real discoveries from NASA, CERN, energy, biotech and AI — linked to what you study.</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {SUBS.map((s) => <button key={s} onClick={() => setF(s)} className={cn("rounded-full border px-4 py-2 text-sm font-bold", s === f ? "bg-primary text-primary-foreground" : "bg-card hover:bg-muted")}>{s}</button>)}
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {list.map((i) => (
          <article key={i.t} className="rounded-2xl border bg-card p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-accent-foreground"><i.icon className="h-5 w-5" /></span>
              <div><p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{i.org}</p><h2 className="font-bold">{i.t}</h2></div>
            </div>
            <p className="mt-3 text-sm">{i.d}</p>
            <p className="mt-3 text-sm"><b>{i.s} · {i.c}:</b> {i.link}</p>
            <p className="mt-2 rounded-lg bg-muted p-3 text-sm"><b>Try it:</b> {i.try}</p>
          </article>
        ))}
      </div>
    </StudentShell>
  );
}
