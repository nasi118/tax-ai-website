import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/site/page-intro";
import { Shell } from "@/components/site/shell";
import { INVARIANTS, LAYERS, SITE } from "@/lib/site";

export const Route = createFileRoute("/architecture")({
  component: ArchitecturePage,
});

function ArchitecturePage() {
  return (
    <Shell>
      <main className="pb-20">
        <PageIntro
          eyebrow="Architecture"
          title="Five layers. Dependency arrows point down only."
          lead="The Tax Planning Analyst Agent collects facts, previews scenarios, invokes the engine through typed tools, reconciles results, and escalates anything uncertain. It cannot invent tax parameters or present a failed result as final — those guarantees are enforced in code."
        />
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <ol className="flex flex-col gap-3">
            {LAYERS.map((layer, i) => (
              <li
                key={layer.id}
                className="grid gap-4 rounded-xl bg-navy px-5 py-5 text-paper sm:grid-cols-[4.5rem_1fr] sm:items-center"
                style={{ opacity: 1 - i * 0.04 }}
              >
                <span className="font-display text-3xl font-medium text-sky">
                  {layer.id}
                </span>
                <div>
                  <h2 className="font-display text-xl font-medium">
                    {layer.title}
                  </h2>
                  <p className="mt-1 text-sm leading-relaxed text-sky">
                    {layer.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <h2 className="mt-16 font-display text-title font-medium text-ink">
            Core invariants
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {INVARIANTS.map((inv, i) => (
              <article key={inv.title} className="rounded-xl bg-card p-6 shadow-border">
                <p className="font-mono text-2xs text-accent">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-display text-lg font-medium text-ink">
                  {inv.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{inv.body}</p>
              </article>
            ))}
          </div>

          <section className="mt-16 rounded-xl bg-paper-2 p-6 sm:p-8">
            <h2 className="font-display text-title font-medium text-ink">
              Workflow
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
              Collect → Validate → Preview → Confirm → Calculate → Reconcile →
              Review → Export. Only an approved base version anchors formal
              scenarios. Every result exposes an identity block: case ID, years,
              ruleset versions, engine version, input snapshot hash,
              reconciliation status, and result hash.
            </p>
            <p className="mt-4 text-sm text-muted">
              Read the full notes in{" "}
              <a
                href={`${SITE.github}/blob/main/docs/ARCHITECTURE.md`}
                className="text-accent underline-offset-4 hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                docs/ARCHITECTURE.md
              </a>
              .
            </p>
          </section>
        </div>
      </main>
    </Shell>
  );
}
