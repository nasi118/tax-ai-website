export function PageIntro({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead: string;
}) {
  return (
    <header className="mx-auto w-full max-w-6xl px-4 pb-10 pt-14 sm:px-6">
      <p className="text-2xs font-medium uppercase tracking-[0.16em] text-accent">
        {eyebrow}
      </p>
      <h1 className="mt-3 max-w-3xl font-display text-display font-medium text-ink">
        {title}
      </h1>
      <p className="mt-5 max-w-2xl text-lead text-muted">{lead}</p>
    </header>
  );
}
