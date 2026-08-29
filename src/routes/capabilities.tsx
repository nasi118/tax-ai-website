import { createFileRoute } from "@tanstack/react-router";
import { CapabilityMatrix } from "@/components/capabilities/matrix";
import { PageIntro } from "@/components/site/page-intro";
import { Shell } from "@/components/site/shell";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/capabilities")({
  component: CapabilitiesPage,
});

function CapabilitiesPage() {
  return (
    <Shell>
      <main className="pb-20">
        <PageIntro
          eyebrow="Capability matrix"
          title="Two engines, one documented boundary."
          lead="The JavaScript workbench and the Python ai_tax engine have deliberately different scopes. Results identify which engine and ruleset produced them. Nothing here implies support the matrix does not grant."
        />
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Legend
              title="Calculated"
              body="Modeled with real computation against pinned rulesets."
            />
            <Legend
              title="Approximated"
              body="Modeled with a documented simplification. Read the note."
            />
            <Legend
              title="Blocked · review"
              body="Detected from inputs and answered with a diagnostic, not a number."
            />
            <Legend
              title="Not modeled"
              body="Out of scope and not detectable. Callers must not imply support."
            />
          </div>
          <CapabilityMatrix />
          <p className="mt-8 text-sm text-muted">
            Generated from{" "}
            <a
              href={`${SITE.github}/blob/main/capabilities/registry.json`}
              className="text-accent underline-offset-4 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              capabilities/registry.json
            </a>{" "}
            in the canonical repository. TY2026+ Python parameters are
            provisional projections and carry RULES-PROV-001.
          </p>
        </div>
      </main>
    </Shell>
  );
}

function Legend({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-xl bg-card p-5 shadow-border">
      <p className="text-sm font-medium text-ink">{title}</p>
      <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
    </div>
  );
}
