import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { l as SITE } from "./router-2DIw9_Wh.mjs";
import { t as PageIntro } from "./page-intro-D0Y7eiV3.mjs";
import { n as Shell, r as cn, t as Button } from "./shell-reEf_qFp.mjs";
import { t as Badge } from "./badge-BTEGf4qO.mjs";
import { a as compute, i as STATUS_LABEL, n as GOLDEN_INPUT, o as money, r as PRESETS, s as pct, t as ENTITY_LABEL } from "./tax-engine-BkIXDARw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/demo-CY3nMjF7.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var STATUSES = [
	"mfj",
	"single",
	"hoh",
	"mfs"
];
function ScenarioStudio() {
	const [input, setInput] = (0, import_react.useState)({ ...GOLDEN_INPUT });
	const [presetId, setPresetId] = (0, import_react.useState)("golden");
	const sole = (0, import_react.useMemo)(() => compute({
		...input,
		entity: "sole"
	}), [input]);
	const scorp = (0, import_react.useMemo)(() => compute({
		...input,
		entity: "scorp"
	}), [input]);
	const active = input.entity === "scorp" ? scorp : sole;
	const savings = sole.totalTax - scorp.totalTax;
	const cashGain = scorp.afterTaxCash - sole.afterTaxCash;
	function patch(partial, nextPreset = "custom") {
		setInput((prev) => {
			const next = {
				...prev,
				...partial
			};
			if (partial.profit != null && next.ownerComp > partial.profit) next.ownerComp = partial.profit;
			return next;
		});
		setPresetId(nextPreset);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-6 lg:grid-cols-[minmax(0,20rem)_1fr] lg:items-start",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "rounded-xl bg-card p-5 shadow-border",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-2xs font-medium uppercase tracking-[0.14em] text-accent",
					children: "Assumptions"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 flex flex-col gap-2",
					children: PRESETS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => {
							setInput({ ...p.input });
							setPresetId(p.id);
						},
						className: cn("rounded-md px-3 py-3 text-left transition-colors duration-150", presetId === p.id ? "bg-navy text-paper" : "bg-paper-2 text-ink hover:bg-paper"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-sm font-medium",
							children: p.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("mt-1 block text-2xs leading-snug", presetId === p.id ? "text-sky" : "text-muted"),
							children: p.hint
						})]
					}, p.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Tax year",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Segmented, {
						value: String(input.year),
						options: [{
							value: "2025",
							label: "TY2025"
						}, {
							value: "2026",
							label: "TY2026"
						}],
						onChange: (v) => patch({ year: Number(v) })
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Filing status",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						className: "h-11 w-full rounded-md bg-paper px-3 text-sm text-ink shadow-border",
						value: input.status,
						onChange: (e) => patch({ status: e.target.value }),
						children: STATUSES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: s,
							children: STATUS_LABEL[s]
						}, s))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Entity for the highlighted column",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Segmented, {
						value: input.entity,
						options: [{
							value: "sole",
							label: "Sole prop"
						}, {
							value: "scorp",
							label: "S-corp"
						}],
						onChange: (v) => patch({ entity: v })
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderField, {
					label: "Business profit",
					value: input.profit,
					min: 5e4,
					max: 15e5,
					step: 5e3,
					onChange: (profit) => patch({ profit })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderField, {
					label: "S-corp reasonable compensation",
					value: input.ownerComp,
					min: 0,
					max: Math.max(input.profit, 1),
					step: 5e3,
					onChange: (ownerComp) => patch({ ownerComp })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderField, {
					label: "Itemized deductions",
					value: input.itemized,
					min: 0,
					max: 12e4,
					step: 1e3,
					onChange: (itemized) => patch({ itemized })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "mt-5 flex min-h-11 cursor-pointer items-center gap-3 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "checkbox",
						checked: input.sstb,
						onChange: (e) => patch({ sstb: e.target.checked }),
						className: "size-4 accent-accent"
					}), "Specified service trade or business (SSTB)"]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-3 sm:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "Sole proprietor tax",
							value: money(sole.totalTax),
							hint: pct(sole.effectiveRate) + " effective"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "S corporation tax",
							value: money(scorp.totalTax),
							hint: pct(scorp.effectiveRate) + " effective",
							emphasize: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: savings >= 0 ? "Tax saved by S-corp" : "S-corp costs more",
							value: money(Math.abs(savings)),
							hint: `${money(Math.abs(cashGain))} after-tax cash`,
							tone: savings > 0 ? "good" : savings < 0 ? "warn" : void 0
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl bg-card p-5 shadow-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-display text-xl font-medium text-pretty text-ink",
							children: [
								ENTITY_LABEL[input.entity],
								" · ",
								active.year
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-sm text-muted",
							children: [
								STATUS_LABEL[input.status],
								" · ",
								active.deductionKind,
								" deduction · ",
								active.qbiNote
							]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: input.entity === "scorp" ? "accent" : "outline",
							children: "Highlighted path"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 grid gap-8 lg:grid-cols-[1fr_14rem]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComparisonChart, {
							sole: sole.totalTax,
							scorp: scorp.totalTax
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "grid grid-cols-2 gap-3 text-sm lg:grid-cols-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
									label: "AGI",
									value: money(active.agi)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
									label: "QBI deduction",
									value: money(active.qbiDeduction)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
									label: "Taxable income",
									value: money(active.taxableIncome)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
									label: "Marginal rate",
									value: pct(active.marginalRate, 0)
								})
							]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "overflow-hidden rounded-xl bg-card shadow-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-b border-line px-5 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm font-medium text-ink",
							children: "Calculation trace"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-2xs text-muted",
							children: "Line items from the studio engine. The live workbench carries ENGINE_VERSION / RULES_VERSION on every result."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("table", {
						className: "w-full text-sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: active.lines.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-b border-line last:border-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("th", {
								className: "px-5 py-2.5 text-left font-normal text-muted",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: line.label }), line.note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-0.5 block text-2xs text-subtle",
									children: line.note
								}) : null]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-5 py-2.5 text-right font-mono tabular text-ink",
								children: money(line.amount)
							})]
						}, line.id)) })
					})]
				})
			]
		})]
	});
}
function Field({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-2 text-2xs font-medium uppercase tracking-wider text-muted",
			children: label
		}), children]
	});
}
function Segmented({ value, options, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex rounded-md bg-paper-2 p-1",
		children: options.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: () => onChange(opt.value),
			className: cn("h-10 flex-1 rounded-sm text-sm font-medium", value === opt.value ? "bg-navy text-paper" : "text-muted"),
			children: opt.label
		}, opt.value))
	});
}
function SliderField({ label, value, min, max, step, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "mt-5 block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "mb-2 flex items-center justify-between text-2xs font-medium uppercase tracking-wider text-muted",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-mono tabular text-ink",
				children: money(value)
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			type: "range",
			min,
			max,
			step,
			value,
			onChange: (e) => onChange(Number(e.target.value)),
			className: "h-11 w-full accent-accent"
		})]
	});
}
function Stat({ label, value, hint, emphasize, tone }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("rounded-xl p-5 shadow-border", tone === "good" ? "bg-good-soft" : tone === "warn" ? "bg-warn-soft" : emphasize ? "bg-navy text-paper" : "bg-card"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: cn("text-2xs font-medium uppercase tracking-wider", emphasize ? "text-sky" : "text-muted"),
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: cn("mt-2 font-display text-title font-medium tabular", tone === "good" ? "text-good" : tone === "warn" ? "text-warn" : emphasize ? "text-paper" : "text-ink"),
				children: value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: cn("mt-1 text-2xs", emphasize ? "text-sky" : "text-muted"),
				children: hint
			})
		]
	});
}
function Mini({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
		className: "text-2xs uppercase tracking-wider text-subtle",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
		className: "mt-1 font-mono text-base tabular text-ink",
		children: value
	})] });
}
function ComparisonChart({ sole, scorp }) {
	const max = Math.max(sole, scorp, 1);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col justify-end gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
			label: "Sole proprietor",
			amount: sole,
			max,
			tone: "muted"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
			label: "S corporation",
			amount: scorp,
			max,
			tone: "accent"
		})]
	});
}
function Row({ label, amount, max, tone }) {
	const width = Math.max(4, Math.round(amount / max * 100));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-1.5 flex justify-between text-2xs text-muted",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-mono tabular text-ink",
			children: money(amount)
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "h-8 overflow-hidden rounded-md bg-paper-2",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("h-full rounded-md transition-[width] duration-300 ease-out", tone === "accent" ? "bg-accent" : "bg-navy-3"),
			style: { width: `${width}%` }
		})
	})] });
}
function DemoPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "pb-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
			eyebrow: "Planning studio",
			title: "Compare a sole proprietor to an S corporation before anyone files an election.",
			lead: "This studio reproduces the workbench golden case — $750,000 of profit, married filing jointly, $35,000 itemized — and lets you change the facts. Figures are planning estimates from a deterministic engine, not filed-return advice."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-full max-w-6xl px-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-8 flex flex-wrap items-center justify-between gap-4 rounded-xl bg-paper-2 px-5 py-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-xl text-sm text-muted",
					children: "Use fictional facts only. For the full client workbench — QBI modules, MAGI, reports, and audit export — open the live application."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "outline",
					size: "sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: SITE.workbench,
						target: "_blank",
						rel: "noreferrer",
						children: ["Open full workbench", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScenarioStudio, {})]
		})]
	}) });
}
//#endregion
export { DemoPage as component };
