import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import {
  CAP_STATUS,
  CAPABILITIES,
  type CapStatus,
} from "@/lib/capabilities";
import { cn } from "@/lib/utils";

const FILTERS: { id: "all" | CapStatus; label: string }[] = [
  { id: "all", label: "All" },
  { id: "calculated", label: "Calculated" },
  { id: "approximated", label: "Approximated" },
  { id: "blocked", label: "Blocked" },
  { id: "not_detected", label: "Not modeled" },
];

export function CapabilityMatrix() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]["id"]>("all");
  const rows = useMemo(() => {
    if (filter === "all") return CAPABILITIES;
    return CAPABILITIES.filter(
      (row) => row.workbench === filter || row.python === filter,
    );
  }, [filter]);

  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setFilter(f.id)}
            className={cn(
              "h-10 rounded-full px-4 text-sm font-medium",
              filter === f.id
                ? "bg-navy text-paper"
                : "bg-card text-muted shadow-border hover:text-ink",
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="overflow-hidden rounded-xl bg-card shadow-border">
        <div className="hidden grid-cols-[1.2fr_1fr_1fr] border-b border-line bg-paper-2 px-5 py-3 text-2xs font-medium uppercase tracking-wider text-muted md:grid">
          <span>Capability</span>
          <span>Workbench (JavaScript)</span>
          <span>ai_tax (Python)</span>
        </div>
        {rows.map((row) => (
          <article
            key={row.id}
            className="grid gap-4 border-b border-line px-5 py-5 last:border-0 md:grid-cols-[1.2fr_1fr_1fr]"
          >
            <h3 className="text-sm font-medium text-ink">{row.label}</h3>
            <StatusCell status={row.workbench} note={row.workbenchNote} engine="Workbench" />
            <StatusCell status={row.python} note={row.pythonNote} engine="Python" />
          </article>
        ))}
      </div>
    </div>
  );
}

function StatusCell({
  status,
  note,
  engine,
}: {
  status: CapStatus;
  note: string;
  engine: string;
}) {
  const meta = CAP_STATUS[status];
  const variant =
    meta.tone === "good"
      ? "good"
      : meta.tone === "warn"
        ? "warn"
        : meta.tone === "blocked"
          ? "outline"
          : "default";
  return (
    <div>
      <p className="mb-2 text-2xs uppercase tracking-wider text-subtle md:hidden">
        {engine}
      </p>
      <Badge variant={variant}>{meta.label}</Badge>
      <p className="mt-2 text-sm leading-relaxed text-muted">{note}</p>
    </div>
  );
}
