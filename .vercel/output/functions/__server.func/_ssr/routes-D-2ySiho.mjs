import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as Link, y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as ArrowRight, i as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { c as SCREENSHOTS, l as SITE, n as FEATURES, o as PLATFORM, s as PRINCIPLES, u as TRUST } from "./router-2DIw9_Wh.mjs";
import { n as Shell, r as cn, t as Button } from "./shell-reEf_qFp.mjs";
import { t as Badge } from "./badge-BTEGf4qO.mjs";
import { a as compute, n as GOLDEN_INPUT, o as money, s as pct } from "./tax-engine-BkIXDARw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-D-2ySiho.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var NAV_ITEMS = [
	"Dashboard",
	"Scenarios",
	"QBI",
	"MAGI",
	"Report"
];
function WorkbenchPreview() {
	const [entity, setEntity] = (0, import_react.useState)("scorp");
	const sole = (0, import_react.useMemo)(() => compute({
		...GOLDEN_INPUT,
		entity: "sole"
	}), []);
	const scorp = (0, import_react.useMemo)(() => compute({
		...GOLDEN_INPUT,
		entity: "scorp"
	}), []);
	const active = entity === "scorp" ? scorp : sole;
	const savings = sole.totalTax - scorp.totalTax;
	const maxTax = Math.max(sole.totalTax, scorp.totalTax);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "overflow-hidden rounded-xl bg-paper-2 shadow-lift",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex h-9 items-center gap-1.5 border-b border-line bg-paper-2 px-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-line" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-line" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-line" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "ml-3 hidden font-mono text-micro text-subtle sm:inline",
					children: "tax-planning-workbench · TY2025"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid min-h-80 grid-cols-[5.5rem_1fr] sm:grid-cols-[7.5rem_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "bg-navy px-2 py-3 text-micro text-subtle",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-4 px-1.5 text-micro font-medium text-paper",
					children: "Workbench"
				}), NAV_ITEMS.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: cn("rounded-sm px-2 py-1.5", i === 0 ? "bg-accent text-paper" : "text-sky"),
					children: item
				}, item))]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-paper-2 p-3 sm:p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium text-ink",
							children: "Planning dashboard"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-0.5 text-micro text-muted",
							children: "Golden case · $750k profit · MFJ"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex rounded-md bg-paper p-0.5 shadow-border",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setEntity("sole"),
								className: cn("h-8 rounded-sm px-2 text-micro font-medium sm:px-2.5 sm:text-2xs", entity === "sole" ? "bg-navy text-paper" : "text-muted"),
								children: "Sole"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setEntity("scorp"),
								className: cn("h-8 rounded-sm px-2 text-micro font-medium sm:px-2.5 sm:text-2xs", entity === "scorp" ? "bg-navy text-paper" : "text-muted"),
								children: "S-corp"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 grid grid-cols-3 gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
								label: "Total tax",
								value: money(active.totalTax)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
								label: "Planning delta",
								value: money(savings),
								accent: true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
								label: "Effective rate",
								value: pct(active.effectiveRate)
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 rounded-md bg-card p-3 shadow-border",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between text-micro font-medium text-ink",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Scenario comparison" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted",
								children: "2 strategies"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex h-24 items-end gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
								label: "Sole prop",
								amount: sole.totalTax,
								max: maxTax,
								active: entity === "sole"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
								label: "S-corp",
								amount: scorp.totalTax,
								max: maxTax,
								active: entity === "scorp"
							})]
						})]
					})
				]
			})]
		})]
	});
}
function Kpi({ label, value, accent }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("rounded-md bg-card px-2.5 py-2 shadow-border", accent && "border-l-2 border-l-accent"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "block text-micro font-medium uppercase tracking-wider text-subtle",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mt-1 block font-mono text-sm font-medium tabular text-ink sm:text-base",
			children: value
		})]
	});
}
function Bar({ label, amount, max, active }) {
	const h = Math.max(8, Math.round(amount / max * 100));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-1 flex-col items-center gap-1.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex h-20 w-full items-end rounded-sm bg-paper-2",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("w-full rounded-t-sm transition-[height] duration-300 ease-out", active ? "bg-accent" : "bg-sky/70"),
				style: { height: `${h}%` }
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-micro text-muted",
			children: label
		})]
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden bg-navy text-paper",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 grid-fade opacity-80" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto grid w-full max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rise",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mb-5 inline-flex items-center gap-2 text-2xs font-medium uppercase tracking-[0.16em] text-sky",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-sky" }), "Private wealth × tax × AI"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "max-w-3xl font-display text-hero font-medium text-paper",
						children: "Tax planning built for decisions that happen before the return."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-xl text-lead text-sky",
						children: "A professional planning environment for modeling complex federal tax decisions, comparing strategies, and turning technical analysis into reviewable recommendations — with the engine, not the model, as calculation authority."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "inverse",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: SITE.workbench,
								target: "_blank",
								rel: "noreferrer",
								children: ["Explore the workbench", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "ghost",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/demo",
								children: ["Try the studio", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-line-dark pt-6 text-2xs font-medium uppercase tracking-wider text-subtle",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "sr-only",
								children: "Status"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "Professional preview" })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "sr-only",
								children: "Years"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "TY2025–TY2026 planning" })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "sr-only",
								children: "Core"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "Deterministic calculation core" })] })
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rise lg:rotate-1",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkbenchPreview, {})
			})]
		})]
	});
}
function TrustStrip() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-b border-line bg-card",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto grid w-full max-w-6xl sm:grid-cols-2 lg:grid-cols-4",
			children: TRUST.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `px-4 py-6 sm:px-6 ${i < TRUST.length - 1 ? "border-b border-line sm:border-b-0 lg:border-r" : ""} ${i % 2 === 0 && i < 2 ? "sm:border-r lg:border-r" : ""} ${i === 1 ? "sm:border-r-0 lg:border-r" : ""} ${i === 2 ? "border-b border-line lg:border-b-0" : ""}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-medium text-ink",
					children: item.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1.5 text-sm leading-relaxed text-muted",
					children: item.body
				})]
			}, item.title))
		})
	});
}
function PlatformSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "platform",
		className: "scroll-mt-24 px-4 py-20 sm:px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-full max-w-6xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-2xs font-medium uppercase tracking-[0.16em] text-accent",
					children: "The platform"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 max-w-3xl font-display text-display font-medium text-ink",
					children: "From a tax calculation to a planning conversation."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-2xl text-lead text-muted",
					children: "Built around how private-wealth decisions actually unfold: start with facts, model alternatives, understand the tax interaction, and keep a clear trail from assumption to recommendation."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
					children: PLATFORM.map((card) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "flex min-h-52 flex-col rounded-xl bg-card p-6 shadow-border",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mb-8 flex size-10 items-center justify-center rounded-md bg-paper-2 font-mono text-sm font-medium text-accent",
								children: card.n
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-lg font-medium text-ink",
								children: card.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted",
								children: card.body
							})
						]
					}, card.n))
				})
			]
		})
	});
}
function FeaturesSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-t border-line bg-card px-4 py-20 sm:px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-full max-w-6xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-6 md:flex-row md:items-end md:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-2xs font-medium uppercase tracking-[0.16em] text-accent",
						children: "Workbench"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 max-w-2xl font-display text-display font-medium text-ink",
						children: "What the planning environment actually does."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/capabilities",
							children: ["View capability matrix", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-px overflow-hidden rounded-xl bg-line sm:grid-cols-2 lg:grid-cols-4",
					children: FEATURES.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "bg-card p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-base font-medium text-ink",
							children: f.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted",
							children: f.body
						})]
					}, f.title))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-4 sm:grid-cols-2",
					children: SCREENSHOTS.map((shot) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						className: "overflow-hidden rounded-xl bg-paper-2 shadow-border",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: shot.src,
							alt: shot.alt,
							className: "aspect-16/10 w-full object-cover object-top outline outline-1 -outline-offset-1 outline-ink/10"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
							className: "px-4 py-3 text-sm text-muted",
							children: shot.caption
						})]
					}, shot.src))
				})
			]
		})
	});
}
function PrinciplesSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "approach",
		className: "scroll-mt-24 bg-navy px-4 py-20 text-paper sm:px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-full max-w-6xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-2xs font-medium uppercase tracking-[0.16em] text-sky",
					children: "Trust architecture"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 max-w-3xl font-display text-display font-medium",
					children: "Professional-grade AI should know what it knows — and what it does not."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-2xl text-lead text-sky",
					children: "Calculations come from controlled engines, legal conclusions are grounded in authority, and unresolved issues are escalated rather than dressed up as certainty."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-4 lg:grid-cols-3",
					children: PRINCIPLES.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: `rounded-xl p-6 ${p.featured ? "bg-navy-3 shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-sky)_35%,transparent)]" : "bg-navy-2 shadow-[0_0_0_1px_var(--color-line-dark)]"}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-2xs font-medium uppercase tracking-[0.14em] text-subtle",
								children: p.kicker
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-6 font-display text-xl font-medium",
								children: p.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-sky",
								children: p.body
							}),
							p.featured ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: "navy",
								className: "mt-6",
								children: "Confidence is not authority"
							}) : null
						]
					}, p.title))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "ghost",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/architecture",
							children: ["Read the architecture", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
						})
					})
				})
			]
		})
	});
}
function FounderSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "founder",
		className: "scroll-mt-24 px-4 py-20 sm:px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "rounded-2xl bg-card p-8 shadow-border",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-6 flex size-14 items-center justify-center rounded-lg bg-navy font-display text-xl text-paper",
						children: "AI"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-2xl font-medium text-ink",
						children: "Anastasiya Isayenka, CPA"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm font-medium text-accent",
						children: "Founder · AI Tax Strategy Advisors"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-sm leading-relaxed text-muted",
						children: "Private wealth tax professional with Big Four experience across complex individual, trust, estate, international, and high-net-worth planning matters."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 flex flex-wrap gap-2",
						children: [
							"Private wealth",
							"Tax strategy",
							"Trusts & estates",
							"Cross-border",
							"Applied AI"
						].map((pill) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: pill }, pill))
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-2xs font-medium uppercase tracking-[0.16em] text-accent",
					children: "Why this exists"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-display font-medium text-ink",
					children: "Built from the reviewer's side of the table."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-6 max-w-xl text-lead text-muted",
					children: [
						"Sophisticated tax work is rarely difficult because someone cannot produce an answer. It is difficult because the answer has to survive",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-ink",
							children: "facts, authority, calculation, review, and judgment"
						}),
						"."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-xl text-lead text-muted",
					children: "AI Tax Strategy Advisors is an effort to build technology around that standard — not around the idea that a model should answer every question placed in front of it."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
					className: "mt-8 max-w-xl border-l-2 border-accent bg-paper-2 px-5 py-4 text-base leading-relaxed text-navy-2",
					children: "The goal is not “AI that knows taxes.” The goal is a planning system whose work can be inspected, challenged, and reviewed."
				})
			] })]
		})
	});
}
function CtaSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "px-4 pb-20 sm:px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex w-full max-w-6xl flex-col gap-8 rounded-2xl bg-navy px-6 py-12 text-paper sm:px-10 md:flex-row md:items-center md:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-2xs font-medium uppercase tracking-[0.16em] text-sky",
					children: "Live professional preview"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 max-w-xl font-display text-display font-medium",
					children: "See the Tax Planning Workbench in action."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-lg text-sky",
					children: "The public environment is for demonstration and evaluation. Use fictional or de-identified information only."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3 sm:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "inverse",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: SITE.workbench,
						target: "_blank",
						rel: "noreferrer",
						children: ["Open the workbench", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "ghost",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: SITE.github,
						target: "_blank",
						rel: "noreferrer",
						children: "View the repository"
					})
				})]
			})]
		})
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrustStrip, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlatformSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeaturesSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrinciplesSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FounderSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaSection, {})
	] }) });
}
//#endregion
export { Home as component };
