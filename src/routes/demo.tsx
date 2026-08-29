import { createFileRoute } from "@tanstack/react-router";
import { ScenarioStudio } from "@/components/demo/scenario-studio";
import { PageIntro } from "@/components/site/page-intro";
import { Shell } from "@/components/site/shell";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/demo")({ component: DemoPage });

function DemoPage() {
  return (
    <Shell>
      <main className="pb-20">
        <PageIntro
          eyebrow="Planning studio"
          title="Compare a sole proprietor to an S corporation before anyone files an election."
          lead="This studio reproduces the workbench golden case — $750,000 of profit, married filing jointly, $35,000 itemized — and lets you change the facts. Figures are planning estimates from a deterministic engine, not filed-return advice."
        />
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4 rounded-xl bg-paper-2 px-5 py-4">
            <p className="max-w-xl text-sm text-muted">
              Use fictional facts only. For the full client workbench — QBI
              modules, MAGI, reports, and audit export — open the live
              application.
            </p>
            <Button asChild variant="outline" size="sm">
              <a href={SITE.workbench} target="_blank" rel="noreferrer">
                Open full workbench
                <ArrowUpRight />
              </a>
            </Button>
          </div>
          <ScenarioStudio />
        </div>
      </main>
    </Shell>
  );
}
