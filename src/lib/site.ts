export const SITE = {
  name: "AI Tax Strategy Advisors",
  short: "AI Tax",
  tagline: "Private wealth tax planning",
  description:
    "A professional tax-planning platform for exploring scenarios, evaluating strategies, and bringing clarity to complex decisions.",
  copyright: "© 2026 AI Tax Strategy Advisors. All rights reserved.",
} as const;

export const NAV: readonly {
  href: string;
  label: string;
  to?: "/demo" | "/capabilities" | "/architecture";
}[] = [
  { href: "/#platform", label: "Platform" },
  { href: "/capabilities", label: "Capabilities", to: "/capabilities" },
  { href: "/architecture", label: "Our approach", to: "/architecture" },
];

export const PRINCIPLES = [
  {
    kicker: "01 / Clear analysis",
    title: "Calculations with context",
    body: "Bring client facts, tax calculations, and planning assumptions into a clear, reviewable picture.",
    featured: false,
  },
  {
    kicker: "02 / Better decisions",
    title: "Scenarios that connect",
    body: "Explore the effect of planning choices across the broader individual tax picture.",
    featured: false,
  },
  {
    kicker: "03 / Professional judgment",
    title: "Built for the advisor",
    body: "Keep your expertise at the center of the analysis, the conversation, and the recommendation.",
    featured: true,
  },
] as const;

export const PLATFORM = [
  {
    n: "01",
    title: "A connected tax picture",
    body: "Organize income, deductions, investments, business interests, and planning facts around the individual.",
  },
  {
    n: "02",
    title: "Explore alternatives",
    body: "Compare planning scenarios and see how a change can affect the broader federal tax picture.",
  },
  {
    n: "03",
    title: "Focus on the details",
    body: "Bring retirement, business, investment, and deduction decisions into the same planning conversation.",
  },
  {
    n: "04",
    title: "Carry the work forward",
    body: "Turn a planning analysis into clear reports and Excel workpapers for professional review.",
  },
] as const;

export const TRUST = [
  { title: "Client-specific", body: "Start with the facts that make each tax situation different." },
  { title: "Scenario-driven", body: "Compare planning paths side by side." },
  { title: "Reviewable", body: "Keep assumptions and results visible for the advisor." },
  { title: "Built for judgment", body: "Technology supports the professional conversation." },
] as const;

export const FEATURES = [
  { title: "Form 1040 view", body: "Follow the planning picture through the individual return." },
  { title: "Scenario comparison", body: "Explore planning choices side by side." },
  { title: "Business & QBI", body: "Consider business income, entity choices, and the section 199A deduction." },
  { title: "Retirement planning", body: "Examine retirement contributions alongside the rest of the tax picture." },
  { title: "Investments & gains", body: "Bring portfolio income and capital transactions into the analysis." },
  { title: "Short-term rentals", body: "Explore property facts, participation, depreciation, and loss limitations." },
  { title: "Tax interactions", body: "Consider AMT, net investment income tax, and income-based thresholds." },
  { title: "Reports & Excel", body: "Carry scenarios, assumptions, and planning insights into professional workpapers." },
] as const;

export const LAYERS = [
  { id: "01", title: "Start with the client", body: "Organize the financial facts that shape the individual tax picture." },
  { id: "02", title: "Explore the possibilities", body: "Create scenarios around the decisions and strategies worth considering." },
  { id: "03", title: "See the interaction", body: "Review how changes flow through income, deductions, and federal tax." },
  { id: "04", title: "Carry the work forward", body: "Bring the analysis into a clear conversation and a reviewable workpaper." },
] as const;

export const INVARIANTS = [
  { title: "Designed for complex situations", body: "A broader view for advisors working across investments, business interests, real estate, and retirement." },
  { title: "Scenarios with a purpose", body: "Compare alternatives in the context of the whole individual tax picture." },
  { title: "A foundation for review", body: "Keep the facts and assumptions behind the analysis visible." },
  { title: "Professional judgment first", body: "Technology helps organize the work; the advisor leads the recommendation." },
] as const;

export const SCREENSHOTS = [
  { src: "/product/dashboard.png", alt: "Illustrative tax planning dashboard", caption: "Dashboard · illustrative preview" },
  { src: "/product/scenarios.png", alt: "Illustrative planning scenario comparison", caption: "Scenario comparison · illustrative preview" },
  { src: "/product/scorp.png", alt: "Illustrative S corporation planning view", caption: "Business planning · illustrative preview" },
  { src: "/product/ai-panel.png", alt: "Illustrative AI assistance view", caption: "AI assistance · illustrative preview" },
] as const;
