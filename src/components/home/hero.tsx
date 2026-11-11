import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { WorkbenchPreview } from "@/components/home/workbench-preview";
import { Button } from "@/components/ui/button";

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
            A professional planning platform for exploring federal tax
            strategies, comparing scenarios, and bringing the details of a
            client's financial life into a clearer conversation.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="inverse">
              <Link to="/demo">
                Try the Studio
                <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="ghost">
              <a href="/#platform">
                Explore the platform
                <ArrowRight />
              </a>
            </Button>
          </div>
          <dl className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-line-dark pt-6 text-2xs font-medium uppercase tracking-wider text-subtle">
            <div>
              <dt className="sr-only">Status</dt>
              <dd>Professional beta</dd>
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
