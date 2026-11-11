import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageIntro } from "@/components/site/page-intro";
import { Shell } from "@/components/site/shell";
import { Button } from "@/components/ui/button";
import { INVARIANTS, LAYERS } from "@/lib/site";

export const Route = createFileRoute("/architecture")({ component: ArchitecturePage });

function ArchitecturePage() {
  return (
    <Shell>
      <main className="pb-20">
        <PageIntro
          eyebrow="Our approach"
          title="A clearer path from facts to strategy."
          lead="Good tax planning connects the details to the decision. Tax Master is designed to make that process more organized, more visible, and easier to discuss."
        />
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <ol className="grid gap-4 md:grid-cols-2">
            {LAYERS.map((layer) => (
              <li key={layer.id} className="rounded-xl bg-navy px-6 py-7 text-paper">
                <span className="font-mono text-xs tracking-wider text-sky">{layer.id}</span>
                <h2 className="mt-5 font-display text-2xl font-medium">{layer.title}</h2>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-sky">{layer.body}</p>
              </li>
            ))}
          </ol>
          <h2 className="mt-16 font-display text-title font-medium text-ink">
            Made for thoughtful advice.
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {INVARIANTS.map((item) => (
              <article key={item.title} className="rounded-xl bg-card p-6 shadow-border">
                <h3 className="font-display text-xl font-medium text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-12 border-t border-line pt-8">
            <Button asChild><Link to="/demo">Explore the Studio <ArrowRight /></Link></Button>
          </div>
        </div>
      </main>
    </Shell>
  );
}
