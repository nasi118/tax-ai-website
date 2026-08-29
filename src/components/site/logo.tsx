import { cn } from "@/lib/utils";

export function Mark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("size-9 shrink-0", className)}
      aria-hidden="true"
    >
      <rect width="32" height="32" rx="8" fill="currentColor" />
      <rect
        x="3.5"
        y="3.5"
        width="25"
        height="25"
        rx="5.5"
        fill="none"
        stroke="var(--color-paper)"
        strokeOpacity="0.22"
        strokeWidth="1"
      />
      <path
        d="M7.4 22.6 L12.4 9.4 L17.4 22.6 M9.3 18.2 H15.5"
        fill="none"
        stroke="var(--color-paper)"
        strokeWidth="1.7"
        strokeLinejoin="miter"
      />
      <path
        d="M20.2 9.4 H27.2 M23.7 9.4 V22.6 M20.2 22.6 H27.2"
        fill="none"
        stroke="var(--color-paper)"
        strokeWidth="1.7"
      />
    </svg>
  );
}

export function Wordmark({
  inverted = false,
}: {
  inverted?: boolean;
}) {
  return (
    <span className="flex items-center gap-3">
      <Mark className={inverted ? "text-accent" : "text-navy"} />
      <span
        className={cn(
          "whitespace-nowrap font-medium tracking-tight",
          inverted ? "text-paper" : "text-ink",
        )}
      >
        AI Tax
        <span className="hidden md:inline"> Strategy Advisors</span>
      </span>
    </span>
  );
}
