import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Wordmark } from "@/components/site/logo";
import { NAV, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line-dark/80 bg-navy/95 text-paper backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          to="/"
          className="min-w-0"
          aria-label={SITE.name}
          onClick={() => setOpen(false)}
        >
          <Wordmark inverted />
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-sky md:flex">
          {NAV.map((item) =>
            item.to ? (
              <Link
                key={item.label}
                to={item.to}
                className="transition-colors duration-150 hover:text-paper"
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="transition-colors duration-150 hover:text-paper"
              >
                {item.label}
              </a>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href={SITE.workbench} target="_blank" rel="noreferrer">
              Open workbench
              <ArrowUpRight />
            </a>
          </Button>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-md text-paper md:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "border-t border-line-dark md:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4">
          {NAV.map((item) =>
            item.to ? (
              <Link
                key={item.label}
                to={item.to}
                className="flex min-h-11 items-center text-sm font-medium text-paper"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="flex min-h-11 items-center text-sm font-medium text-paper"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ),
          )}
          <a
            href={SITE.workbench}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-accent text-sm font-medium text-accent-fg"
            onClick={() => setOpen(false)}
          >
            Open workbench
            <ArrowUpRight className="size-4" />
          </a>
        </nav>
      </div>
    </header>
  );
}
