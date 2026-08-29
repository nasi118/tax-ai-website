import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { WorkbenchPreview } from "@/components/home/workbench-preview";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-paper">
      <div className="pointer-events-none absolute inset-0 grid-fade opacity-80" />
      <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
        <div className="rise">
          <p className="mb-5 inline-flex items-center gap-2 text-2xs font-medium uppercase tracking-[0.16em] text-sky">
            <span className="size-1.5 rounded-full bg-sky" />
            Private wealth × tax × AI
          </p>
          <h1 className="max-w-3xl font-display text-hero font-medium text-paper">
            Tax planning built for decisions that happen before the return.
          </h1>
          <p className="mt-6 max-w-xl text-lead text-sky">
            A professional planning environment for modeling complex federal tax
            decisions, comparing strategies, and turning technical analysis into
            reviewable recommendations — with the engine, not the model, as
            calculation authority.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="inverse">
              <a href={SITE.workbench} target="_blank" rel="noreferrer">
                Explore the workbench
                <ArrowUpRight />
              </a>
            </Button>
            <Button asChild variant="ghost">
              <Link to="/demo">
                Try the studio
                <ArrowRight />
              </Link>
            </Button>
          </div>
          <dl className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-line-dark pt-6 text-2xs font-medium uppercase tracking-wider text-subtle">
            <div>
              <dt className="sr-only">Status</dt>
              <dd>Professional preview</dd>
            </div>
            <div>
              <dt className="sr-only">Years</dt>
              <dd>TY2025–TY2026 planning</dd>
            </div>
            <div>
              <dt className="sr-only">Core</dt>
              <dd>Deterministic calculation core</dd>
            </div>
          </dl>
        </div>
        <div className="rise lg:rotate-1">
          <WorkbenchPreview />
        </div>
      </div>
    </section>
  );
}
