import { createFileRoute } from "@tanstack/react-router";
import { ScenarioStudio } from "@/components/demo/scenario-studio";
import { PageIntro } from "@/components/site/page-intro";
import { Shell } from "@/components/site/shell";

export const Route = createFileRoute("/demo")({ component: DemoPage });

function DemoPage() {
  return (
    <Shell>
      <main className="pb-20">
        <PageIntro
          eyebrow="Planning Studio"
          title="Explore a decision before making an election."
          lead="Compare a sole proprietorship and an S corporation, adjust the assumptions, and see how the results change."
        />
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <p className="mb-8 rounded-xl bg-paper-2 px-5 py-4 text-sm leading-relaxed text-muted">
            This interactive example uses illustrative figures. Planning results are designed to support—not replace—professional judgment.
          </p>
          <ScenarioStudio />
        </div>
      </main>
    </Shell>
  );
}
