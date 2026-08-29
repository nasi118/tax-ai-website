export type CapStatus = "calculated" | "approximated" | "blocked" | "not_detected";

export type CapabilityRow = {
  id: string;
  label: string;
  workbench: CapStatus;
  workbenchNote: string;
  python: CapStatus;
  pythonNote: string;
};

export const CAP_STATUS: Record<
  CapStatus,
  { label: string; tone: "good" | "warn" | "blocked" | "muted" }
> = {
  calculated: { label: "Calculated", tone: "good" },
  approximated: { label: "Approximated", tone: "warn" },
  blocked: { label: "Blocked · review", tone: "blocked" },
  not_detected: { label: "Not modeled", tone: "muted" },
};

export const CAPABILITIES: CapabilityRow[] = [
  {
    id: "ordinary",
    label: "Ordinary income tax",
    workbench: "calculated",
    workbenchNote: "Progressive brackets per filing status; formula method.",
    python: "calculated",
    pythonNote: "Formula method with ENG-TABLE-001 disclosure under $100,000 taxable.",
  },
  {
    id: "cg",
    label: "Capital gains & qualified dividends",
    workbench: "calculated",
    workbenchNote: "ST/LT netting, Sec. 1211(b), 0/15/20% stacking.",
    python: "calculated",
    pythonNote: "QDCG worksheet with min(stacked, all-ordinary) safeguard.",
  },
  {
    id: "niit",
    label: "Net investment income tax",
    workbench: "calculated",
    workbenchNote: "3.8% on min(NII, MAGI excess); Sec. 1411 classifications.",
    python: "calculated",
    pythonNote: "3.8% on min(interest + dividends + allowed capital gain, MAGI excess).",
  },
  {
    id: "se",
    label: "Self-employment tax",
    workbench: "calculated",
    workbenchNote: "Schedule C SE tax with W-2 wage-base coordination; S-corp FICA.",
    python: "blocked",
    pythonNote: "Any SE income produces UNSUP-SE-001. SE tax and QBI are not computed.",
  },
  {
    id: "qbi",
    label: "QBI deduction (Sec. 199A)",
    workbench: "calculated",
    workbenchNote: "SSTB phase-out, W-2/UBIA limits, aggregation, negative-QBI carryforward.",
    python: "blocked",
    pythonNote: "Not modeled; blocked together with self-employment income.",
  },
  {
    id: "retire",
    label: "Retirement-plan calculations",
    workbench: "calculated",
    workbenchNote: "Solo 401(k), SEP-IRA, defined benefit. S-corp capacity never double-deducted.",
    python: "approximated",
    pythonNote: "Pre-tax 401(k) deferral as an adjustment with limit + catch-up caps.",
  },
  {
    id: "ira",
    label: "IRA & self-employed health insurance",
    workbench: "calculated",
    workbenchNote: "IRA MAGI phase-outs; SEHI with the earned-income cap.",
    python: "approximated",
    pythonNote: "Traditional IRA capped at the limit; MAGI phase-outs and SEHI not modeled.",
  },
  {
    id: "itemized",
    label: "Itemized deductions",
    workbench: "calculated",
    workbenchNote: "SALT cap, charitable AGI caps, medical 7.5% floor, TY2026 Sec. 68-style limit.",
    python: "approximated",
    pythonNote: "SALT, mortgage, charitable at face with a 60% AGI warning. No Sec. 68 limitation.",
  },
  {
    id: "credits",
    label: "Credits",
    workbench: "calculated",
    workbenchNote: "Nonrefundable CTC with per-$1,000 phase-out.",
    python: "calculated",
    pythonNote: "Nonrefundable CTC/ODC; refundable additional CTC not modeled.",
  },
  {
    id: "amt",
    label: "Alternative minimum tax",
    workbench: "not_detected",
    workbenchNote: "Not modeled and not detected.",
    python: "not_detected",
    pythonNote: "Documented out of scope.",
  },
  {
    id: "addlmed",
    label: "Additional Medicare tax (0.9%)",
    workbench: "calculated",
    workbenchNote: "0.9% on wages/SE earnings over the threshold.",
    python: "not_detected",
    pythonNote: "NIIT is modeled; Additional Medicare is not.",
  },
  {
    id: "est",
    label: "Estimated-tax safe harbor",
    workbench: "not_detected",
    workbenchNote: "Sec. 6654 safe harbors and penalties are not modeled.",
    python: "not_detected",
    pythonNote: "Estimated-tax penalties and safe harbors not modeled.",
  },
  {
    id: "state",
    label: "State calculations",
    workbench: "not_detected",
    workbenchNote: "State taxes enter only as itemized-deduction inputs.",
    python: "not_detected",
    pythonNote: "SALT modeled only as an itemized-deduction input.",
  },
  {
    id: "trust",
    label: "Trust & estate calculations",
    workbench: "not_detected",
    workbenchNote: "No Form 1041, trust, estate, or K-1 fiduciary modeling.",
    python: "not_detected",
    pythonNote: "Trusts, estates, entities, K-1s out of scope.",
  },
  {
    id: "carry",
    label: "Carryforwards",
    workbench: "approximated",
    workbenchNote: "Capital-loss and negative-QBI amounts for the year; no multi-year ledger.",
    python: "blocked",
    pythonNote: "Net capital loss beyond the annual limit triggers ENG-CLCF-001.",
  },
  {
    id: "proj",
    label: "Five-year projections",
    workbench: "not_detected",
    workbenchNote: "Two-year planning (TY2025 + TY2026) only.",
    python: "calculated",
    pythonNote: "Explicit per-field methods, provenance, REC-YOY roll-forward.",
  },
  {
    id: "recon",
    label: "Reconciliation coverage",
    workbench: "approximated",
    workbenchNote: "Golden regression tests and an in-app audit trail.",
    python: "calculated",
    pythonNote: "Machine-readable REC-* checks; failed material checks block final status.",
  },
];
