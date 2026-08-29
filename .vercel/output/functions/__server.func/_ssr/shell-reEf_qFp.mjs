import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as Link, y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as ArrowUpRight, r as Menu, t as X } from "../_libs/lucide-react.mjs";
import { a as NAV, l as SITE } from "./router-2DIw9_Wh.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shell-reEf_qFp.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-line bg-paper",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-start md:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-md text-sm text-muted",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-medium text-ink",
					children: SITE.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 leading-relaxed",
					children: "Professional evaluation prototype. Planning estimates require professional review against current law, source documents, and applicable federal and state rules. Not tax advice."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-x-6 gap-y-3 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/demo",
						className: "text-muted hover:text-ink",
						children: "Studio"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/capabilities",
						className: "text-muted hover:text-ink",
						children: "Capabilities"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/architecture",
						className: "text-muted hover:text-ink",
						children: "Architecture"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: SITE.github,
						target: "_blank",
						rel: "noreferrer",
						className: "text-muted hover:text-ink",
						children: "GitHub"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: SITE.workbench,
						target: "_blank",
						rel: "noreferrer",
						className: "text-muted hover:text-ink",
						children: "Live workbench"
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex w-full max-w-6xl flex-col gap-2 border-t border-line px-4 py-5 text-xs text-subtle sm:flex-row sm:justify-between sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: SITE.copyright }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "TY2025–TY2026 · Deterministic calculation core" })]
		})]
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[opacity,transform,background-color,color,box-shadow] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-paper disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-[0.98]", {
	variants: {
		variant: {
			default: "bg-accent text-accent-fg hover:opacity-90",
			inverse: "bg-paper text-navy hover:bg-paper-2",
			secondary: "bg-transparent text-ink shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-ink)_14%,transparent)] hover:bg-paper-2",
			ghost: "bg-transparent text-paper shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-paper)_22%,transparent)] hover:bg-paper/10",
			outline: "bg-card text-ink shadow-border hover:shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-ink)_18%,transparent)]",
			link: "rounded-none text-accent underline-offset-4 hover:underline"
		},
		size: {
			default: "h-12 px-5",
			sm: "h-10 px-4 text-sm",
			lg: "h-14 px-6 text-base",
			icon: "size-12"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
function Mark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 32 32",
		className: cn("size-9 shrink-0", className),
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				width: "32",
				height: "32",
				rx: "8",
				fill: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "3.5",
				y: "3.5",
				width: "25",
				height: "25",
				rx: "5.5",
				fill: "none",
				stroke: "var(--color-paper)",
				strokeOpacity: "0.22",
				strokeWidth: "1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M7.4 22.6 L12.4 9.4 L17.4 22.6 M9.3 18.2 H15.5",
				fill: "none",
				stroke: "var(--color-paper)",
				strokeWidth: "1.7",
				strokeLinejoin: "miter"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M20.2 9.4 H27.2 M23.7 9.4 V22.6 M20.2 22.6 H27.2",
				fill: "none",
				stroke: "var(--color-paper)",
				strokeWidth: "1.7"
			})
		]
	});
}
function Wordmark({ inverted = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "flex items-center gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, { className: inverted ? "text-accent" : "text-navy" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: cn("whitespace-nowrap font-medium tracking-tight", inverted ? "text-paper" : "text-ink"),
			children: ["AI Tax", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "hidden md:inline",
				children: " Strategy Advisors"
			})]
		})]
	});
}
function Header() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 border-b border-line-dark/80 bg-navy/95 text-paper backdrop-blur-md",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "min-w-0",
					"aria-label": SITE.name,
					onClick: () => setOpen(false),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, { inverted: true })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-7 text-sm font-medium text-sky md:flex",
					children: NAV.map((item) => item.to ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						className: "transition-colors duration-150 hover:text-paper",
						children: item.label
					}, item.label) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: item.href,
						className: "transition-colors duration-150 hover:text-paper",
						children: item.label
					}, item.label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "sm",
						className: "hidden sm:inline-flex",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: SITE.workbench,
							target: "_blank",
							rel: "noreferrer",
							children: ["Open workbench", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "inline-flex size-11 items-center justify-center rounded-md text-paper md:hidden",
						"aria-expanded": open,
						"aria-label": open ? "Close menu" : "Open menu",
						onClick: () => setOpen((v) => !v),
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("border-t border-line-dark md:hidden", open ? "block" : "hidden"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4",
				children: [NAV.map((item) => item.to ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: item.to,
					className: "flex min-h-11 items-center text-sm font-medium text-paper",
					onClick: () => setOpen(false),
					children: item.label
				}, item.label) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: item.href,
					className: "flex min-h-11 items-center text-sm font-medium text-paper",
					onClick: () => setOpen(false),
					children: item.label
				}, item.label)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: SITE.workbench,
					target: "_blank",
					rel: "noreferrer",
					className: "mt-2 inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-accent text-sm font-medium text-accent-fg",
					onClick: () => setOpen(false),
					children: ["Open workbench", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })]
				})]
			})
		})]
	});
}
function Shell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen flex-col bg-paper text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#content",
				className: "sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-card focus:px-3 focus:py-2",
				children: "Skip to content"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				id: "content",
				className: "flex-1",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { Shell as n, cn as r, Button as t };
