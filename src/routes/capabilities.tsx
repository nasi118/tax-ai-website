import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageIntro } from "@/components/site/page-intro";
import { Shell } from "@/components/site/shell";
import { Button } from "@/components/ui/button";
import { FEATURES } from "@/lib/site";

export const Route = createFileRoute("/capabilities")({ component: CapabilitiesPage });

function CapabilitiesPage() {
  return (
    <Shell>
      <main className="pb-20">
        <PageIntro
          eyebrow="The platform"
          title="More of the tax picture, in one place."
          lead="Tax Master is built for advisors who need to see how individual planning decisions connect—from the return to the scenario and the workpaper."
        />
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="grid gap-px overflow-hidden rounded-xl bg-line sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((feature, index) => (
              <article key={feature.title} className="bg-card p-6 sm:min-h-48">
                <p className="font-mono text-2xs text-accent">{String(index + 1).padStart(2, "0")}</p>
                <h2 className="mt-6 font-display text-xl font-medium text-ink">{feature.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">{feature.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-12 flex flex-col items-start justify-between gap-5 border-t border-line pt-8 sm:flex-row sm:items-center">
            <p className="max-w-2xl text-sm leading-relaxed text-muted">
              The Studio is an interactive example of the planning experience. The broader platform is in beta and is designed for professional review.
            </p>
            <Button asChild><Link to="/demo">Try the Studio <ArrowRight /></Link></Button>
          </div>
        </div>
      </main>
    </Shell>
  );
}
