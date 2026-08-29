import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  FEATURES,
  PLATFORM,
  PRINCIPLES,
  SCREENSHOTS,
  SITE,
  TRUST,
} from "@/lib/site";

export function TrustStrip() {
  return (
    <section className="border-b border-line bg-card">
      <div className="mx-auto grid w-full max-w-6xl sm:grid-cols-2 lg:grid-cols-4">
        {TRUST.map((item, i) => (
          <div
            key={item.title}
            className={`px-4 py-6 sm:px-6 ${i < TRUST.length - 1 ? "border-b border-line sm:border-b-0 lg:border-r" : ""} ${i % 2 === 0 && i < 2 ? "sm:border-r lg:border-r" : ""} ${i === 1 ? "sm:border-r-0 lg:border-r" : ""} ${i === 2 ? "border-b border-line lg:border-b-0" : ""}`}
          >
            <p className="text-sm font-medium text-ink">{item.title}</p>
            <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function PlatformSection() {
  return (
    <section id="platform" className="scroll-mt-24 px-4 py-20 sm:px-6">
      <div className="mx-auto w-full max-w-6xl">
        <p className="text-2xs font-medium uppercase tracking-[0.16em] text-accent">
          The platform
        </p>
        <h2 className="mt-3 max-w-3xl font-display text-display font-medium text-ink">
          From a tax calculation to a planning conversation.
        </h2>
        <p className="mt-5 max-w-2xl text-lead text-muted">
          Built around how private-wealth decisions actually unfold: start with
          facts, model alternatives, understand the tax interaction, and keep a
          clear trail from assumption to recommendation.
        </p>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PLATFORM.map((card) => (
            <article
              key={card.n}
              className="flex min-h-52 flex-col rounded-xl bg-card p-6 shadow-border"
            >
              <span className="mb-8 flex size-10 items-center justify-center rounded-md bg-paper-2 font-mono text-sm font-medium text-accent">
                {card.n}
              </span>
              <h3 className="font-display text-lg font-medium text-ink">
                {card.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{card.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FeaturesSection() {
  return (
    <section className="border-t border-line bg-card px-4 py-20 sm:px-6">
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-2xs font-medium uppercase tracking-[0.16em] text-accent">
              Workbench
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-display font-medium text-ink">
              What the planning environment actually does.
            </h2>
          </div>
          <Button asChild variant="outline">
            <Link to="/capabilities">
              View capability matrix
              <ArrowRight />
            </Link>
          </Button>
        </div>
        <div className="mt-12 grid gap-px overflow-hidden rounded-xl bg-line sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f) => (
            <article key={f.title} className="bg-card p-6">
              <h3 className="text-base font-medium text-ink">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{f.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {SCREENSHOTS.map((shot) => (
            <figure key={shot.src} className="overflow-hidden rounded-xl bg-paper-2 shadow-border">
              <img
                src={shot.src}
                alt={shot.alt}
                className="aspect-16/10 w-full object-cover object-top outline outline-1 -outline-offset-1 outline-ink/10"
              />
              <figcaption className="px-4 py-3 text-sm text-muted">
                {shot.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PrinciplesSection() {
  return (
    <section id="approach" className="scroll-mt-24 bg-navy px-4 py-20 text-paper sm:px-6">
      <div className="mx-auto w-full max-w-6xl">
        <p className="text-2xs font-medium uppercase tracking-[0.16em] text-sky">
          Trust architecture
        </p>
        <h2 className="mt-3 max-w-3xl font-display text-display font-medium">
          Professional-grade AI should know what it knows — and what it does not.
        </h2>
        <p className="mt-5 max-w-2xl text-lead text-sky">
          Calculations come from controlled engines, legal conclusions are
          grounded in authority, and unresolved issues are escalated rather than
          dressed up as certainty.
        </p>
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {PRINCIPLES.map((p) => (
            <article
              key={p.title}
              className={`rounded-xl p-6 ${
                p.featured
                  ? "bg-navy-3 shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-sky)_35%,transparent)]"
                  : "bg-navy-2 shadow-[0_0_0_1px_var(--color-line-dark)]"
              }`}
            >
              <p className="text-2xs font-medium uppercase tracking-[0.14em] text-subtle">
                {p.kicker}
              </p>
              <h3 className="mt-6 font-display text-xl font-medium">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-sky">{p.body}</p>
              {p.featured ? (
                <Badge variant="navy" className="mt-6">
                  Confidence is not authority
                </Badge>
              ) : null}
            </article>
          ))}
        </div>
        <div className="mt-10">
          <Button asChild variant="ghost">
            <Link to="/architecture">
              Read the architecture
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export function FounderSection() {
  return (
    <section id="founder" className="scroll-mt-24 px-4 py-20 sm:px-6">
      <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <aside className="rounded-2xl bg-card p-8 shadow-border">
          <div className="mb-6 flex size-14 items-center justify-center rounded-lg bg-navy font-display text-xl text-paper">
            AI
          </div>
          <h3 className="font-display text-2xl font-medium text-ink">
            Anastasiya Isayenka, CPA
          </h3>
          <p className="mt-1 text-sm font-medium text-accent">
            Founder · AI Tax Strategy Advisors
          </p>
          <p className="mt-5 text-sm leading-relaxed text-muted">
            Private wealth tax professional with Big Four experience across
            complex individual, trust, estate, international, and high-net-worth
            planning matters.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Private wealth", "Tax strategy", "Trusts & estates", "Cross-border", "Applied AI"].map(
              (pill) => (
                <Badge key={pill}>{pill}</Badge>
              ),
            )}
          </div>
        </aside>
        <div>
          <p className="text-2xs font-medium uppercase tracking-[0.16em] text-accent">
            Why this exists
          </p>
          <h2 className="mt-3 font-display text-display font-medium text-ink">
            Built from the reviewer's side of the table.
          </h2>
          <p className="mt-6 max-w-xl text-lead text-muted">
            Sophisticated tax work is rarely difficult because someone cannot
            produce an answer. It is difficult because the answer has to survive{" "}
            <span className="text-ink">facts, authority, calculation, review, and judgment</span>.
          </p>
          <p className="mt-4 max-w-xl text-lead text-muted">
            AI Tax Strategy Advisors is an effort to build technology around that
            standard — not around the idea that a model should answer every
            question placed in front of it.
          </p>
          <blockquote className="mt-8 max-w-xl border-l-2 border-accent bg-paper-2 px-5 py-4 text-base leading-relaxed text-navy-2">
            The goal is not “AI that knows taxes.” The goal is a planning system
            whose work can be inspected, challenged, and reviewed.
          </blockquote>
        </div>
      </div>
    </section>
  );
}

export function CtaSection() {
  return (
    <section className="px-4 pb-20 sm:px-6">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 rounded-2xl bg-navy px-6 py-12 text-paper sm:px-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-2xs font-medium uppercase tracking-[0.16em] text-sky">
            Live professional preview
          </p>
          <h2 className="mt-3 max-w-xl font-display text-display font-medium">
            See the Tax Planning Workbench in action.
          </h2>
          <p className="mt-4 max-w-lg text-sky">
            The public environment is for demonstration and evaluation. Use
            fictional or de-identified information only.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild variant="inverse">
            <a href={SITE.workbench} target="_blank" rel="noreferrer">
              Open the workbench
              <ArrowUpRight />
            </a>
          </Button>
          <Button asChild variant="ghost">
            <a href={SITE.github} target="_blank" rel="noreferrer">
              View the repository
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
