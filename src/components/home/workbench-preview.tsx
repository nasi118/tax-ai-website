import { useMemo, useState } from "react";
import { compute, GOLDEN_INPUT, type Entity } from "@/lib/tax-engine";
import { money, pct } from "@/lib/format";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  "Dashboard",
  "Scenarios",
  "QBI",
  "MAGI",
  "Report",
] as const;

export function WorkbenchPreview() {
  const [entity, setEntity] = useState<Entity>("scorp");
  const sole = useMemo(
    () => compute({ ...GOLDEN_INPUT, entity: "sole" }),
    [],
  );
  const scorp = useMemo(
    () => compute({ ...GOLDEN_INPUT, entity: "scorp" }),
    [],
  );
  const active = entity === "scorp" ? scorp : sole;
  const savings = sole.totalTax - scorp.totalTax;
  const maxTax = Math.max(sole.totalTax, scorp.totalTax);

  return (
    <div className="overflow-hidden rounded-xl bg-paper-2 shadow-lift">
      <div className="flex h-9 items-center gap-1.5 border-b border-line bg-paper-2 px-3">
        <span className="size-2 rounded-full bg-line" />
        <span className="size-2 rounded-full bg-line" />
        <span className="size-2 rounded-full bg-line" />
        <span className="ml-3 hidden font-mono text-micro text-subtle sm:inline">
          tax-planning-workbench · TY2025
        </span>
      </div>
      <div className="grid min-h-80 grid-cols-[5.5rem_1fr] sm:grid-cols-[7.5rem_1fr]">
        <aside className="bg-navy px-2 py-3 text-micro text-subtle">
          <p className="mb-4 px-1.5 text-micro font-medium text-paper">
            Workbench
          </p>
          {NAV_ITEMS.map((item, i) => (
            <div
              key={item}
              className={cn(
                "rounded-sm px-2 py-1.5",
                i === 0 ? "bg-accent text-paper" : "text-sky",
              )}
            >
              {item}
            </div>
          ))}
        </aside>
        <div className="bg-paper-2 p-3 sm:p-4">
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="text-sm font-medium text-ink">Planning dashboard</p>
              <p className="mt-0.5 text-micro text-muted">
                Illustrative scenario · $750k profit · MFJ
              </p>
            </div>
            <div className="flex rounded-md bg-paper p-0.5 shadow-border">
              <button
                type="button"
                onClick={() => setEntity("sole")}
                className={cn(
                  "h-8 rounded-sm px-2 text-micro font-medium sm:px-2.5 sm:text-2xs",
                  entity === "sole" ? "bg-navy text-paper" : "text-muted",
                )}
              >
                Sole
              </button>
              <button
                type="button"
                onClick={() => setEntity("scorp")}
                className={cn(
                  "h-8 rounded-sm px-2 text-micro font-medium sm:px-2.5 sm:text-2xs",
                  entity === "scorp" ? "bg-navy text-paper" : "text-muted",
                )}
              >
                S-corp
              </button>
            </div>
          </div>

          <div className="mt-3 grid grid-cols-3 gap-2">
            <Kpi label="Total tax" value={money(active.totalTax)} />
            <Kpi label="Planning delta" value={money(savings)} accent />
            <Kpi label="Effective rate" value={pct(active.effectiveRate)} />
          </div>

          <div className="mt-3 rounded-md bg-card p-3 shadow-border">
            <div className="flex items-center justify-between text-micro font-medium text-ink">
              <span>Scenario comparison</span>
              <span className="text-muted">2 strategies</span>
            </div>
            <div className="mt-3 flex h-24 items-end gap-3">
              <Bar
                label="Sole prop"
                amount={sole.totalTax}
                max={maxTax}
                active={entity === "sole"}
              />
              <Bar
                label="S-corp"
                amount={scorp.totalTax}
                max={maxTax}
                active={entity === "scorp"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Kpi({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-md bg-card px-2.5 py-2 shadow-border",
        accent && "border-l-2 border-l-accent",
      )}
    >
      <span className="block text-micro font-medium uppercase tracking-wider text-subtle">
        {label}
      </span>
      <span className="mt-1 block font-mono text-sm font-medium tabular text-ink sm:text-base">
        {value}
      </span>
    </div>
  );
}

function Bar({
  label,
  amount,
  max,
  active,
}: {
  label: string;
  amount: number;
  max: number;
  active: boolean;
}) {
  const h = Math.max(8, Math.round((amount / max) * 100));
  return (
    <div className="flex flex-1 flex-col items-center gap-1.5">
      <div className="flex h-20 w-full items-end rounded-sm bg-paper-2">
        <div
          className={cn(
            "w-full rounded-t-sm transition-[height] duration-300 ease-out",
            active ? "bg-accent" : "bg-sky/70",
          )}
          style={{ height: `${h}%` }}
        />
      </div>
      <span className="text-micro text-muted">{label}</span>
    </div>
  );
}
