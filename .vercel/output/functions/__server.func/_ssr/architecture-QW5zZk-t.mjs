import { y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as LAYERS, l as SITE, r as INVARIANTS } from "./router-2DIw9_Wh.mjs";
import { t as PageIntro } from "./page-intro-D0Y7eiV3.mjs";
import { n as Shell } from "./shell-reEf_qFp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/architecture-QW5zZk-t.js
var import_jsx_runtime = require_jsx_runtime();
function ArchitecturePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "pb-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
			eyebrow: "Architecture",
			title: "Five layers. Dependency arrows point down only.",
			lead: "The Tax Planning Analyst Agent collects facts, previews scenarios, invokes the engine through typed tools, reconciles results, and escalates anything uncertain. It cannot invent tax parameters or present a failed result as final — those guarantees are enforced in code."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-full max-w-6xl px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "flex flex-col gap-3",
					children: LAYERS.map((layer, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "grid gap-4 rounded-xl bg-navy px-5 py-5 text-paper sm:grid-cols-[4.5rem_1fr] sm:items-center",
						style: { opacity: 1 - i * .04 },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-3xl font-medium text-sky",
							children: layer.id
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-xl font-medium",
							children: layer.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm leading-relaxed text-sky",
							children: layer.body
						})] })]
					}, layer.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-16 font-display text-title font-medium text-ink",
					children: "Core invariants"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid gap-4 md:grid-cols-2",
					children: INVARIANTS.map((inv, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-xl bg-card p-6 shadow-border",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-2xs text-accent",
								children: String(i + 1).padStart(2, "0")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 font-display text-lg font-medium text-ink",
								children: inv.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted",
								children: inv.body
							})
						]
					}, inv.title))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-16 rounded-xl bg-paper-2 p-6 sm:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-title font-medium text-ink",
							children: "Workflow"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-2xl text-sm leading-relaxed text-muted",
							children: "Collect → Validate → Preview → Confirm → Calculate → Reconcile → Review → Export. Only an approved base version anchors formal scenarios. Every result exposes an identity block: case ID, years, ruleset versions, engine version, input snapshot hash, reconciliation status, and result hash."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 text-sm text-muted",
							children: [
								"Read the full notes in",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `${SITE.github}/blob/main/docs/ARCHITECTURE.md`,
									className: "text-accent underline-offset-4 hover:underline",
									target: "_blank",
									rel: "noreferrer",
									children: "docs/ARCHITECTURE.md"
								}),
								"."
							]
						})
					]
				})
			]
		})]
	}) });
}
//#endregion
export { ArchitecturePage as component };
