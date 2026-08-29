import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as SITE } from "./router-2DIw9_Wh.mjs";
import { t as PageIntro } from "./page-intro-D0Y7eiV3.mjs";
import { n as Shell, r as cn } from "./shell-reEf_qFp.mjs";
import { t as Badge } from "./badge-BTEGf4qO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/capabilities-Bti47Osc.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CAP_STATUS = {
	calculated: {
		label: "Calculated",
		tone: "good"
	},
	approximated: {
		label: "Approximated",
		tone: "warn"
	},
	blocked: {
		label: "Blocked · review",
		tone: "blocked"
	},
	not_detected: {
		label: "Not modeled",
		tone: "muted"
	}
};
var CAPABILITIES = [
	{
		id: "ordinary",
		label: "Ordinary income tax",
		workbench: "calculated",
		workbenchNote: "Progressive brackets per filing status; formula method.",
		python: "calculated",
		pythonNote: "Formula method with ENG-TABLE-001 disclosure under $100,000 taxable."
	},
	{
		id: "cg",
		label: "Capital gains & qualified dividends",
		workbench: "calculated",
		workbenchNote: "ST/LT netting, Sec. 1211(b), 0/15/20% stacking.",
		python: "calculated",
		pythonNote: "QDCG worksheet with min(stacked, all-ordinary) safeguard."
	},
	{
		id: "niit",
		label: "Net investment income tax",
		workbench: "calculated",
		workbenchNote: "3.8% on min(NII, MAGI excess); Sec. 1411 classifications.",
		python: "calculated",
		pythonNote: "3.8% on min(interest + dividends + allowed capital gain, MAGI excess)."
	},
	{
		id: "se",
		label: "Self-employment tax",
		workbench: "calculated",
		workbenchNote: "Schedule C SE tax with W-2 wage-base coordination; S-corp FICA.",
		python: "blocked",
		pythonNote: "Any SE income produces UNSUP-SE-001. SE tax and QBI are not computed."
	},
	{
		id: "qbi",
		label: "QBI deduction (Sec. 199A)",
		workbench: "calculated",
		workbenchNote: "SSTB phase-out, W-2/UBIA limits, aggregation, negative-QBI carryforward.",
		python: "blocked",
		pythonNote: "Not modeled; blocked together with self-employment income."
	},
	{
		id: "retire",
		label: "Retirement-plan calculations",
		workbench: "calculated",
		workbenchNote: "Solo 401(k), SEP-IRA, defined benefit. S-corp capacity never double-deducted.",
		python: "approximated",
		pythonNote: "Pre-tax 401(k) deferral as an adjustment with limit + catch-up caps."
	},
	{
		id: "ira",
		label: "IRA & self-employed health insurance",
		workbench: "calculated",
		workbenchNote: "IRA MAGI phase-outs; SEHI with the earned-income cap.",
		python: "approximated",
		pythonNote: "Traditional IRA capped at the limit; MAGI phase-outs and SEHI not modeled."
	},
	{
		id: "itemized",
		label: "Itemized deductions",
		workbench: "calculated",
		workbenchNote: "SALT cap, charitable AGI caps, medical 7.5% floor, TY2026 Sec. 68-style limit.",
		python: "approximated",
		pythonNote: "SALT, mortgage, charitable at face with a 60% AGI warning. No Sec. 68 limitation."
	},
	{
		id: "credits",
		label: "Credits",
		workbench: "calculated",
		workbenchNote: "Nonrefundable CTC with per-$1,000 phase-out.",
		python: "calculated",
		pythonNote: "Nonrefundable CTC/ODC; refundable additional CTC not modeled."
	},
	{
		id: "amt",
		label: "Alternative minimum tax",
		workbench: "not_detected",
		workbenchNote: "Not modeled and not detected.",
		python: "not_detected",
		pythonNote: "Documented out of scope."
	},
	{
		id: "addlmed",
		label: "Additional Medicare tax (0.9%)",
		workbench: "calculated",
		workbenchNote: "0.9% on wages/SE earnings over the threshold.",
		python: "not_detected",
		pythonNote: "NIIT is modeled; Additional Medicare is not."
	},
	{
		id: "est",
		label: "Estimated-tax safe harbor",
		workbench: "not_detected",
		workbenchNote: "Sec. 6654 safe harbors and penalties are not modeled.",
		python: "not_detected",
		pythonNote: "Estimated-tax penalties and safe harbors not modeled."
	},
	{
		id: "state",
		label: "State calculations",
		workbench: "not_detected",
		workbenchNote: "State taxes enter only as itemized-deduction inputs.",
		python: "not_detected",
		pythonNote: "SALT modeled only as an itemized-deduction input."
	},
	{
		id: "trust",
		label: "Trust & estate calculations",
		workbench: "not_detected",
		workbenchNote: "No Form 1041, trust, estate, or K-1 fiduciary modeling.",
		python: "not_detected",
		pythonNote: "Trusts, estates, entities, K-1s out of scope."
	},
	{
		id: "carry",
		label: "Carryforwards",
		workbench: "approximated",
		workbenchNote: "Capital-loss and negative-QBI amounts for the year; no multi-year ledger.",
		python: "blocked",
		pythonNote: "Net capital loss beyond the annual limit triggers ENG-CLCF-001."
	},
	{
		id: "proj",
		label: "Five-year projections",
		workbench: "not_detected",
		workbenchNote: "Two-year planning (TY2025 + TY2026) only.",
		python: "calculated",
		pythonNote: "Explicit per-field methods, provenance, REC-YOY roll-forward."
	},
	{
		id: "recon",
		label: "Reconciliation coverage",
		workbench: "approximated",
		workbenchNote: "Golden regression tests and an in-app audit trail.",
		python: "calculated",
		pythonNote: "Machine-readable REC-* checks; failed material checks block final status."
	}
];
var FILTERS = [
	{
		id: "all",
		label: "All"
	},
	{
		id: "calculated",
		label: "Calculated"
	},
	{
		id: "approximated",
		label: "Approximated"
	},
	{
		id: "blocked",
		label: "Blocked"
	},
	{
		id: "not_detected",
		label: "Not modeled"
	}
];
function CapabilityMatrix() {
	const [filter, setFilter] = (0, import_react.useState)("all");
	const rows = (0, import_react.useMemo)(() => {
		if (filter === "all") return CAPABILITIES;
		return CAPABILITIES.filter((row) => row.workbench === filter || row.python === filter);
	}, [filter]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mb-6 flex flex-wrap gap-2",
		children: FILTERS.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: () => setFilter(f.id),
			className: cn("h-10 rounded-full px-4 text-sm font-medium", filter === f.id ? "bg-navy text-paper" : "bg-card text-muted shadow-border hover:text-ink"),
			children: f.label
		}, f.id))
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "overflow-hidden rounded-xl bg-card shadow-border",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "hidden grid-cols-[1.2fr_1fr_1fr] border-b border-line bg-paper-2 px-5 py-3 text-2xs font-medium uppercase tracking-wider text-muted md:grid",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Capability" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Workbench (JavaScript)" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "ai_tax (Python)" })
			]
		}), rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "grid gap-4 border-b border-line px-5 py-5 last:border-0 md:grid-cols-[1.2fr_1fr_1fr]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-sm font-medium text-ink",
					children: row.label
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusCell, {
					status: row.workbench,
					note: row.workbenchNote,
					engine: "Workbench"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusCell, {
					status: row.python,
					note: row.pythonNote,
					engine: "Python"
				})
			]
		}, row.id))]
	})] });
}
function StatusCell({ status, note, engine }) {
	const meta = CAP_STATUS[status];
	const variant = meta.tone === "good" ? "good" : meta.tone === "warn" ? "warn" : meta.tone === "blocked" ? "outline" : "default";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-2 text-2xs uppercase tracking-wider text-subtle md:hidden",
			children: engine
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
			variant,
			children: meta.label
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-sm leading-relaxed text-muted",
			children: note
		})
	] });
}
function CapabilitiesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "pb-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
			eyebrow: "Capability matrix",
			title: "Two engines, one documented boundary.",
			lead: "The JavaScript workbench and the Python ai_tax engine have deliberately different scopes. Results identify which engine and ruleset produced them. Nothing here implies support the matrix does not grant."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-full max-w-6xl px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Legend, {
							title: "Calculated",
							body: "Modeled with real computation against pinned rulesets."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Legend, {
							title: "Approximated",
							body: "Modeled with a documented simplification. Read the note."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Legend, {
							title: "Blocked · review",
							body: "Detected from inputs and answered with a diagnostic, not a number."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Legend, {
							title: "Not modeled",
							body: "Out of scope and not detectable. Callers must not imply support."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CapabilityMatrix, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-8 text-sm text-muted",
					children: [
						"Generated from",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `${SITE.github}/blob/main/capabilities/registry.json`,
							className: "text-accent underline-offset-4 hover:underline",
							target: "_blank",
							rel: "noreferrer",
							children: "capabilities/registry.json"
						}),
						" ",
						"in the canonical repository. TY2026+ Python parameters are provisional projections and carry RULES-PROV-001."
					]
				})
			]
		})]
	}) });
}
function Legend({ title, body }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl bg-card p-5 shadow-border",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm font-medium text-ink",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-sm leading-relaxed text-muted",
			children: body
		})]
	});
}
//#endregion
export { CapabilitiesPage as component };
