import { Link } from "@tanstack/react-router";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-paper">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-start md:justify-between">
        <div className="max-w-md text-sm text-muted">
          <p className="font-medium text-ink">{SITE.name}</p>
          <p className="mt-2 leading-relaxed">
            Professional evaluation prototype. Planning estimates require
            professional review against current law, source documents, and
            applicable federal and state rules. Not tax advice.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
          <Link to="/demo" className="text-muted hover:text-ink">
            Studio
          </Link>
          <Link to="/capabilities" className="text-muted hover:text-ink">
            Capabilities
          </Link>
          <Link to="/architecture" className="text-muted hover:text-ink">
            Architecture
          </Link>
          <a
            href={SITE.github}
            target="_blank"
            rel="noreferrer"
            className="text-muted hover:text-ink"
          >
            GitHub
          </a>
          <a
            href={SITE.workbench}
            target="_blank"
            rel="noreferrer"
            className="text-muted hover:text-ink"
          >
            Live workbench
          </a>
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 border-t border-line px-4 py-5 text-xs text-subtle sm:flex-row sm:justify-between sm:px-6">
        <span>{SITE.copyright}</span>
        <span>TY2025–TY2026 · Deterministic calculation core</span>
      </div>
    </footer>
  );
}
