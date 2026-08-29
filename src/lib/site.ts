export const SITE = {
  name: "AI Tax Strategy Advisors",
  short: "AI Tax",
  tagline: "Private wealth tax planning",
  description:
    "Deterministic federal tax-planning workbench for TY2025–TY2026. Scenario comparison, audit trails, Excel exports, and controlled AI assistance — with the engine, not the model, as calculation authority.",
  workbench: "https://nasi118.github.io/AI-Tax/",
  github: "https://github.com/nasi118/AI-Tax",
  copyright: "© 2026 AI Tax Strategy Advisors. All rights reserved.",
} as const;

export const NAV: readonly {
  href: string;
  label: string;
  to?: "/demo" | "/capabilities" | "/architecture";
}[] = [
  { href: "/#platform", label: "Platform" },
  { href: "/demo", label: "Studio", to: "/demo" },
  { href: "/capabilities", label: "Capabilities", to: "/capabilities" },
  { href: "/architecture", label: "Architecture", to: "/architecture" },
];

export const PRINCIPLES = [
  {
    kicker: "01 / Calculation",
    title: "Engine-backed numbers",
    body: "AI can explain and orchestrate. It does not invent a tax calculation because a report needs a number. Every figure traces to a deterministic engine, a pinned ruleset, and a line ID.",
    featured: false,
  },
  {
    kicker: "02 / Authority",
    title: "Primary-source grounding",
    body: "Material tax propositions should be supportable by approved authority — not retrofitted with a citation after an answer is generated.",
    featured: false,
  },
  {
    kicker: "03 / Judgment",
    title: "Human review is the release gate",
    body: "If the system cannot support a conclusion, it stops, explains what remains unresolved, and routes the issue for professional review. Confidence is not authority.",
    featured: true,
  },
] as const;

export const PLATFORM = [
  {
    n: "01",
    title: "Scenario modeling",
    body: "Compare alternative strategies side by side and isolate the tax impact of changing a single assumption — entity election, compensation, retirement, or MAGI.",
  },
  {
    n: "02",
    title: "Planning workbenches",
    body: "Self-employment, retirement design, QBI, MAGI phase-outs, SEHI, IRA, and related interactions live in one view instead of a stack of disconnected spreadsheets.",
  },
  {
    n: "03",
    title: "Advisor-ready output",
    body: "Turn calculations into explanations, client reports, and permanent Excel audit packages that survive review — not a chat transcript.",
  },
  {
    n: "04",
    title: "Structured escalation",
    body: "Unsupported or unreconciled issues are surfaced as blocking diagnostics. The right answer is professional review, not a guess dressed as certainty.",
  },
] as const;

export const TRUST = [
  {
    title: "Model first",
    body: "Compare planning choices before anyone commits to an election or a contribution.",
  },
  {
    title: "Trace the logic",
    body: "Assumptions, overrides, and calculations stay reviewable — with provenance on every input.",
  },
  {
    title: "Know the boundary",
    body: "Unsupported issues are blocked and disclosed. The UI does not imply a capability the engine does not have.",
  },
  {
    title: "Keep judgment human",
    body: "Technology supports the advisor. It does not replace one.",
  },
] as const;

export const FEATURES = [
  {
    title: "Dashboard",
    body: "Income, AGI, deductions, total tax, and effective rate at a glance — with the engine version carried on every result.",
  },
  {
    title: "Scenarios",
    body: "Side-by-side comparison with lowest-tax highlighting. Copy-on-write overrides; undeclared mutation is structurally impossible.",
  },
  {
    title: "QBI workbench",
    body: "Sec. 199A modeling including SSTB phase-out, W-2/UBIA limits, aggregation, and negative-QBI carryforward reporting.",
  },
  {
    title: "SE & retirement",
    body: "Self-employment tax, solo 401(k), SEP-IRA, and defined-benefit design with S-corp payroll coordination.",
  },
  {
    title: "MAGI phase-outs",
    body: "Tracking of MAGI-driven ranges across credits and deductions, each provision using its own MAGI variant.",
  },
  {
    title: "Audit trail",
    body: "A log of assumption and input changes, plus machine-readable reconciliation checks that block “final” status on failure.",
  },
  {
    title: "Excel audit packages",
    body: "Permanent, verified, immutable workbooks issued from the Python engine — not a dump of a worksheet.",
  },
  {
    title: "Controlled AI",
    body: "A Tax Planning Analyst Agent with typed tools, preview-before-commit, and no arithmetic role. The engine remains the calculation authority.",
  },
] as const;

export const INVARIANTS = [
  {
    title: "The engine is the calculation authority",
    body: "The agent has no arithmetic role. Every number it presents comes from a tool result with a line ID.",
  },
  {
    title: "Determinism",
    body: "Identical inputs, pinned ruleset versions, and engine version produce an identical result and result hash. No clocks, no randomness.",
  },
  {
    title: "Immutability",
    body: "Released rulesets, base versions, scenario versions, snapshots, and issued audit packages are write-once. Corrections create new versions.",
  },
  {
    title: "Explicit change control",
    body: "Scenarios store only allowlisted, path-based overrides with old/new value, year, reason, source, actor, and timestamp.",
  },
  {
    title: "Reconciliation is a release gate",
    body: "Failed material checks block final status and force review — inside the engine, on scenario deltas, projections, and the Excel workbook.",
  },
  {
    title: "Year integrity",
    body: "Every calculation year pins one ruleset version. Cross-year pinning is rejected at the registry.",
  },
  {
    title: "Untrusted data stays data",
    body: "Free text that flows back to the model is wrapped and neutralized. Extractions are never authoritative until a human approves them.",
  },
] as const;

export const LAYERS = [
  {
    id: "E",
    title: "Presentation / agent runtime",
    body: "Conversational UI over a structured workflow. The model never computes tax.",
  },
  {
    id: "D",
    title: "Agent orchestration",
    body: "Typed tools, JSON-Schema validation, RBAC, tenant isolation, preview-before-commit, idempotency.",
  },
  {
    id: "C",
    title: "Case & scenario storage",
    body: "Lifecycle states, immutable versions, override patches, reviews, audit log, audit packages.",
  },
  {
    id: "B",
    title: "Deterministic engine",
    body: "calculate(inputs, rulesets, engine_version) → line items, trace, diagnostics, reconciliation.",
  },
  {
    id: "A",
    title: "Rulesets",
    body: "Immutable, versioned per tax year. Enacted vs provisional. Source references and checksums.",
  },
] as const;

export const SCREENSHOTS = [
  {
    src: "/product/dashboard.png",
    alt: "Tax Planning Workbench dashboard with key figures and scenario comparison",
    caption: "Dashboard",
  },
  {
    src: "/product/scenarios.png",
    alt: "Side-by-side planning scenarios in the workbench",
    caption: "Scenarios",
  },
  {
    src: "/product/scorp.png",
    alt: "S corporation compensation calculator in the workbench",
    caption: "S-corp calculator",
  },
  {
    src: "/product/ai-panel.png",
    alt: "Controlled AI assistance panel beside a scenario",
    caption: "Controlled AI",
  },
] as const;
