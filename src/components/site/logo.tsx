import { cn } from "@/lib/utils";

export function Wordmark({ inverted = false }: { inverted?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <span className="brand-emblem" aria-hidden="true">
        <img src="/brand/ai-private-wealth.png" alt="" />
      </span>
      <span
        className={cn(
          "whitespace-nowrap text-sm font-medium tracking-tight sm:text-base",
          inverted ? "text-paper" : "text-ink",
        )}
      >
        AI Tax
        <span className="hidden sm:inline"> Strategy Advisors</span>
      </span>
    </span>
  );
}
