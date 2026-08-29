import { useMemo, useState, type ReactNode } from "react";
import { Badge } from "@/components/ui/badge";
import { money, pct } from "@/lib/format";
import {
  ENTITY_LABEL,
  GOLDEN_INPUT,
  PRESETS,
  STATUS_LABEL,
  compute,
  type Entity,
  type FilingStatus,
  type PlanInput,
  type TaxYear,
} from "@/lib/tax-engine";
import { cn } from "@/lib/utils";

const STATUSES: FilingStatus[] = ["mfj", "single", "hoh", "mfs"];

export function ScenarioStudio() {
  const [input, setInput] = useState<PlanInput>({ ...GOLDEN_INPUT });
  const [presetId, setPresetId] = useState("golden");

  const sole = useMemo(
    () => compute({ ...input, entity: "sole" }),
    [input],
  );
  const scorp = useMemo(
    () => compute({ ...input, entity: "scorp" }),
    [input],
  );
  const active = input.entity === "scorp" ? scorp : sole;
  const savings = sole.totalTax - scorp.totalTax;
  const cashGain = scorp.afterTaxCash - sole.afterTaxCash;

  function patch(partial: Partial<PlanInput>, nextPreset = "custom") {
    setInput((prev) => {
      const next = { ...prev, ...partial };
      if (partial.profit != null && next.ownerComp > partial.profit) {
        next.ownerComp = partial.profit;
      }
      return next;
    });
    setPresetId(nextPreset);
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,20rem)_1fr] lg:items-start">
      <aside className="rounded-xl bg-card p-5 shadow-border">
        <p className="text-2xs font-medium uppercase tracking-[0.14em] text-accent">
          Assumptions
        </p>
        <div className="mt-4 flex flex-col gap-2">
          {PRESETS.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => {
                setInput({ ...p.input });
                setPresetId(p.id);
              }}
              className={cn(
                "rounded-md px-3 py-3 text-left transition-colors duration-150",
                presetId === p.id
                  ? "bg-navy text-paper"
                  : "bg-paper-2 text-ink hover:bg-paper",
              )}
            >
              <span className="block text-sm font-medium">{p.label}</span>
              <span
                className={cn(
                  "mt-1 block text-2xs leading-snug",
                  presetId === p.id ? "text-sky" : "text-muted",
                )}
              >
                {p.hint}
              </span>
            </button>
          ))}
        </div>

        <Field label="Tax year">
          <Segmented
            value={String(input.year)}
            options={[
              { value: "2025", label: "TY2025" },
              { value: "2026", label: "TY2026" },
            ]}
            onChange={(v) => patch({ year: Number(v) as TaxYear })}
          />
        </Field>

        <Field label="Filing status">
          <select
            className="h-11 w-full rounded-md bg-paper px-3 text-sm text-ink shadow-border"
            value={input.status}
            onChange={(e) => patch({ status: e.target.value as FilingStatus })}
          >
            {STATUSES.map((s) => (
              <option key={s} value={s}>
                {STATUS_LABEL[s]}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Entity for the highlighted column">
          <Segmented
            value={input.entity}
            options={[
              { value: "sole", label: "Sole prop" },
              { value: "scorp", label: "S-corp" },
            ]}
            onChange={(v) => patch({ entity: v as Entity })}
          />
        </Field>

        <SliderField
          label="Business profit"
          value={input.profit}
          min={50000}
          max={1500000}
          step={5000}
          onChange={(profit) => patch({ profit })}
        />

        <SliderField
          label="S-corp reasonable compensation"
          value={input.ownerComp}
          min={0}
          max={Math.max(input.profit, 1)}
          step={5000}
          onChange={(ownerComp) => patch({ ownerComp })}
        />

        <SliderField
          label="Itemized deductions"
          value={input.itemized}
          min={0}
          max={120000}
          step={1000}
          onChange={(itemized) => patch({ itemized })}
        />

        <label className="mt-5 flex min-h-11 cursor-pointer items-center gap-3 text-sm">
          <input
            type="checkbox"
            checked={input.sstb}
            onChange={(e) => patch({ sstb: e.target.checked })}
            className="size-4 accent-accent"
          />
          Specified service trade or business (SSTB)
        </label>
      </aside>

      <div className="flex flex-col gap-4">
        <div className="grid gap-3 sm:grid-cols-3">
          <Stat
            label="Sole proprietor tax"
            value={money(sole.totalTax)}
            hint={pct(sole.effectiveRate) + " effective"}
          />
          <Stat
            label="S corporation tax"
            value={money(scorp.totalTax)}
            hint={pct(scorp.effectiveRate) + " effective"}
            emphasize
          />
          <Stat
            label={savings >= 0 ? "Tax saved by S-corp" : "S-corp costs more"}
            value={money(Math.abs(savings))}
            hint={`${money(Math.abs(cashGain))} after-tax cash`}
            tone={savings > 0 ? "good" : savings < 0 ? "warn" : undefined}
          />
        </div>

        <div className="rounded-xl bg-card p-5 shadow-border">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="font-display text-xl font-medium text-pretty text-ink">
                {ENTITY_LABEL[input.entity]} · {active.year}
              </h2>
              <p className="mt-1 text-sm text-muted">
                {STATUS_LABEL[input.status]} · {active.deductionKind} deduction
                · {active.qbiNote}
              </p>
            </div>
            <Badge variant={input.entity === "scorp" ? "accent" : "outline"}>
              Highlighted path
            </Badge>
          </div>

          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_14rem]">
            <ComparisonChart sole={sole.totalTax} scorp={scorp.totalTax} />
            <dl className="grid grid-cols-2 gap-3 text-sm lg:grid-cols-1">
              <Mini label="AGI" value={money(active.agi)} />
              <Mini label="QBI deduction" value={money(active.qbiDeduction)} />
              <Mini label="Taxable income" value={money(active.taxableIncome)} />
              <Mini label="Marginal rate" value={pct(active.marginalRate, 0)} />
            </dl>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl bg-card shadow-border">
          <div className="border-b border-line px-5 py-3">
            <h3 className="text-sm font-medium text-ink">Calculation trace</h3>
            <p className="text-2xs text-muted">
              Line items from the studio engine. The live workbench carries
              ENGINE_VERSION / RULES_VERSION on every result.
            </p>
          </div>
          <table className="w-full text-sm">
            <tbody>
              {active.lines.map((line) => (
                <tr key={line.id} className="border-b border-line last:border-0">
                  <th className="px-5 py-2.5 text-left font-normal text-muted">
                    <span>{line.label}</span>
                    {line.note ? (
                      <span className="mt-0.5 block text-2xs text-subtle">
                        {line.note}
                      </span>
                    ) : null}
                  </th>
                  <td className="px-5 py-2.5 text-right font-mono tabular text-ink">
                    {money(line.amount)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="mt-5">
      <p className="mb-2 text-2xs font-medium uppercase tracking-wider text-muted">
        {label}
      </p>
      {children}
    </div>
  );
}

function Segmented({
  value,
  options,
  onChange,
}: {
  value: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
}) {
  return (
    <div className="flex rounded-md bg-paper-2 p-1">
      {options.map((opt) => (
        <button
          key={opt.value}
          type="button"
          onClick={() => onChange(opt.value)}
          className={cn(
            "h-10 flex-1 rounded-sm text-sm font-medium",
            value === opt.value ? "bg-navy text-paper" : "text-muted",
          )}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}

function SliderField({
  label,
  value,
  min,
  max,
  step,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (n: number) => void;
}) {
  return (
    <label className="mt-5 block">
      <span className="mb-2 flex items-center justify-between text-2xs font-medium uppercase tracking-wider text-muted">
        <span>{label}</span>
        <span className="font-mono tabular text-ink">{money(value)}</span>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="h-11 w-full accent-accent"
      />
    </label>
  );
}

function Stat({
  label,
  value,
  hint,
  emphasize,
  tone,
}: {
  label: string;
  value: string;
  hint: string;
  emphasize?: boolean;
  tone?: "good" | "warn";
}) {
  return (
    <div
      className={cn(
        "rounded-xl p-5 shadow-border",
        tone === "good"
          ? "bg-good-soft"
          : tone === "warn"
            ? "bg-warn-soft"
            : emphasize
              ? "bg-navy text-paper"
              : "bg-card",
      )}
    >
      <p
        className={cn(
          "text-2xs font-medium uppercase tracking-wider",
          emphasize ? "text-sky" : "text-muted",
        )}
      >
        {label}
      </p>
      <p
        className={cn(
          "mt-2 font-display text-title font-medium tabular",
          tone === "good"
            ? "text-good"
            : tone === "warn"
              ? "text-warn"
              : emphasize
                ? "text-paper"
                : "text-ink",
        )}
      >
        {value}
      </p>
      <p className={cn("mt-1 text-2xs", emphasize ? "text-sky" : "text-muted")}>
        {hint}
      </p>
    </div>
  );
}

function Mini({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-2xs uppercase tracking-wider text-subtle">{label}</dt>
      <dd className="mt-1 font-mono text-base tabular text-ink">{value}</dd>
    </div>
  );
}

function ComparisonChart({ sole, scorp }: { sole: number; scorp: number }) {
  const max = Math.max(sole, scorp, 1);
  return (
    <div className="flex flex-col justify-end gap-4">
      <Row label="Sole proprietor" amount={sole} max={max} tone="muted" />
      <Row label="S corporation" amount={scorp} max={max} tone="accent" />
    </div>
  );
}

function Row({
  label,
  amount,
  max,
  tone,
}: {
  label: string;
  amount: number;
  max: number;
  tone: "muted" | "accent";
}) {
  const width = Math.max(4, Math.round((amount / max) * 100));
  return (
    <div>
      <div className="mb-1.5 flex justify-between text-2xs text-muted">
        <span>{label}</span>
        <span className="font-mono tabular text-ink">{money(amount)}</span>
      </div>
      <div className="h-8 overflow-hidden rounded-md bg-paper-2">
        <div
          className={cn(
            "h-full rounded-md transition-[width] duration-300 ease-out",
            tone === "accent" ? "bg-accent" : "bg-navy-3",
          )}
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}
