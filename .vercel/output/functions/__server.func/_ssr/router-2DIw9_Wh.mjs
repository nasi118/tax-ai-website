import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as Link, f as createRouter, g as createRootRoute, h as createFileRoute, l as Scripts, m as lazyRouteComponent, p as Outlet, u as HeadContent, v as useRouter, y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as TriangleAlert } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-2DIw9_Wh.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: error.message || "An unexpected error occurred. Try reloading the page."
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	if (typeof window === "undefined") return () => {};
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	const parentOrigin = resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		if (envelope.data.type === "hello") {
			if (!HelloSchema.safeParse(event.data).success) return;
			announce();
			return;
		}
		if (envelope.data.type === "navigate") {
			const parsed = NavigateSchema.safeParse(event.data);
			if (!parsed.success) return;
			navigate(parsed.data.path);
			queueMicrotask(reportLocation);
			return;
		}
		if (envelope.data.type === "history") {
			const parsed = HistorySchema.safeParse(event.data);
			if (!parsed.success) return;
			if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
			window.history.go(parsed.data.delta);
		}
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var SITE = {
	name: "AI Tax Strategy Advisors",
	short: "AI Tax",
	tagline: "Private wealth tax planning",
	description: "Deterministic federal tax-planning workbench for TY2025–TY2026. Scenario comparison, audit trails, Excel exports, and controlled AI assistance — with the engine, not the model, as calculation authority.",
	workbench: "https://nasi118.github.io/AI-Tax/",
	github: "https://github.com/nasi118/AI-Tax",
	copyright: "© 2026 AI Tax Strategy Advisors. All rights reserved."
};
var NAV = [
	{
		href: "/#platform",
		label: "Platform"
	},
	{
		href: "/demo",
		label: "Studio",
		to: "/demo"
	},
	{
		href: "/capabilities",
		label: "Capabilities",
		to: "/capabilities"
	},
	{
		href: "/architecture",
		label: "Architecture",
		to: "/architecture"
	}
];
var PRINCIPLES = [
	{
		kicker: "01 / Calculation",
		title: "Engine-backed numbers",
		body: "AI can explain and orchestrate. It does not invent a tax calculation because a report needs a number. Every figure traces to a deterministic engine, a pinned ruleset, and a line ID.",
		featured: false
	},
	{
		kicker: "02 / Authority",
		title: "Primary-source grounding",
		body: "Material tax propositions should be supportable by approved authority — not retrofitted with a citation after an answer is generated.",
		featured: false
	},
	{
		kicker: "03 / Judgment",
		title: "Human review is the release gate",
		body: "If the system cannot support a conclusion, it stops, explains what remains unresolved, and routes the issue for professional review. Confidence is not authority.",
		featured: true
	}
];
var PLATFORM = [
	{
		n: "01",
		title: "Scenario modeling",
		body: "Compare alternative strategies side by side and isolate the tax impact of changing a single assumption — entity election, compensation, retirement, or MAGI."
	},
	{
		n: "02",
		title: "Planning workbenches",
		body: "Self-employment, retirement design, QBI, MAGI phase-outs, SEHI, IRA, and related interactions live in one view instead of a stack of disconnected spreadsheets."
	},
	{
		n: "03",
		title: "Advisor-ready output",
		body: "Turn calculations into explanations, client reports, and permanent Excel audit packages that survive review — not a chat transcript."
	},
	{
		n: "04",
		title: "Structured escalation",
		body: "Unsupported or unreconciled issues are surfaced as blocking diagnostics. The right answer is professional review, not a guess dressed as certainty."
	}
];
var TRUST = [
	{
		title: "Model first",
		body: "Compare planning choices before anyone commits to an election or a contribution."
	},
	{
		title: "Trace the logic",
		body: "Assumptions, overrides, and calculations stay reviewable — with provenance on every input."
	},
	{
		title: "Know the boundary",
		body: "Unsupported issues are blocked and disclosed. The UI does not imply a capability the engine does not have."
	},
	{
		title: "Keep judgment human",
		body: "Technology supports the advisor. It does not replace one."
	}
];
var FEATURES = [
	{
		title: "Dashboard",
		body: "Income, AGI, deductions, total tax, and effective rate at a glance — with the engine version carried on every result."
	},
	{
		title: "Scenarios",
		body: "Side-by-side comparison with lowest-tax highlighting. Copy-on-write overrides; undeclared mutation is structurally impossible."
	},
	{
		title: "QBI workbench",
		body: "Sec. 199A modeling including SSTB phase-out, W-2/UBIA limits, aggregation, and negative-QBI carryforward reporting."
	},
	{
		title: "SE & retirement",
		body: "Self-employment tax, solo 401(k), SEP-IRA, and defined-benefit design with S-corp payroll coordination."
	},
	{
		title: "MAGI phase-outs",
		body: "Tracking of MAGI-driven ranges across credits and deductions, each provision using its own MAGI variant."
	},
	{
		title: "Audit trail",
		body: "A log of assumption and input changes, plus machine-readable reconciliation checks that block “final” status on failure."
	},
	{
		title: "Excel audit packages",
		body: "Permanent, verified, immutable workbooks issued from the Python engine — not a dump of a worksheet."
	},
	{
		title: "Controlled AI",
		body: "A Tax Planning Analyst Agent with typed tools, preview-before-commit, and no arithmetic role. The engine remains the calculation authority."
	}
];
var INVARIANTS = [
	{
		title: "The engine is the calculation authority",
		body: "The agent has no arithmetic role. Every number it presents comes from a tool result with a line ID."
	},
	{
		title: "Determinism",
		body: "Identical inputs, pinned ruleset versions, and engine version produce an identical result and result hash. No clocks, no randomness."
	},
	{
		title: "Immutability",
		body: "Released rulesets, base versions, scenario versions, snapshots, and issued audit packages are write-once. Corrections create new versions."
	},
	{
		title: "Explicit change control",
		body: "Scenarios store only allowlisted, path-based overrides with old/new value, year, reason, source, actor, and timestamp."
	},
	{
		title: "Reconciliation is a release gate",
		body: "Failed material checks block final status and force review — inside the engine, on scenario deltas, projections, and the Excel workbook."
	},
	{
		title: "Year integrity",
		body: "Every calculation year pins one ruleset version. Cross-year pinning is rejected at the registry."
	},
	{
		title: "Untrusted data stays data",
		body: "Free text that flows back to the model is wrapped and neutralized. Extractions are never authoritative until a human approves them."
	}
];
var LAYERS = [
	{
		id: "E",
		title: "Presentation / agent runtime",
		body: "Conversational UI over a structured workflow. The model never computes tax."
	},
	{
		id: "D",
		title: "Agent orchestration",
		body: "Typed tools, JSON-Schema validation, RBAC, tenant isolation, preview-before-commit, idempotency."
	},
	{
		id: "C",
		title: "Case & scenario storage",
		body: "Lifecycle states, immutable versions, override patches, reviews, audit log, audit packages."
	},
	{
		id: "B",
		title: "Deterministic engine",
		body: "calculate(inputs, rulesets, engine_version) → line items, trace, diagnostics, reconciliation."
	},
	{
		id: "A",
		title: "Rulesets",
		body: "Immutable, versioned per tax year. Enacted vs provisional. Source references and checksums."
	}
];
var SCREENSHOTS = [
	{
		src: "/product/dashboard.png",
		alt: "Tax Planning Workbench dashboard with key figures and scenario comparison",
		caption: "Dashboard"
	},
	{
		src: "/product/scenarios.png",
		alt: "Side-by-side planning scenarios in the workbench",
		caption: "Scenarios"
	},
	{
		src: "/product/scorp.png",
		alt: "S corporation compensation calculator in the workbench",
		caption: "S-corp calculator"
	},
	{
		src: "/product/ai-panel.png",
		alt: "Controlled AI assistance panel beside a scenario",
		caption: "Controlled AI"
	}
];
var styles_default = "/assets/styles--KPaP2rp.css";
var Route$4 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: SITE.name },
			{
				name: "description",
				content: SITE.description
			},
			{
				name: "theme-color",
				content: "#0B1526"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;1,400&family=Newsreader:opsz,wght@6..72,400;6..72,500;6..72,600&display=swap"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			}
		]
	}),
	errorComponent: AppErrorComponent,
	notFoundComponent: NotFound,
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "bg-paper text-ink",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
			]
		})]
	})
});
function NotFound() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-4 bg-paper px-6 text-center text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-2xs font-medium uppercase tracking-[0.16em] text-accent",
				children: "404"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-display font-medium",
				children: "Page not found"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-muted",
				children: "That route is not part of the AI Tax Strategy Advisors site."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "mt-2 text-sm font-medium text-accent underline-offset-4 hover:underline",
				children: "Back to the home page"
			})
		]
	});
}
var $$splitComponentImporter$3 = () => import("./routes-D-2ySiho.mjs");
var Route$3 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./architecture-QW5zZk-t.mjs");
var Route$2 = createFileRoute("/architecture")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./capabilities-Bti47Osc.mjs");
var Route$1 = createFileRoute("/capabilities")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./demo-CY3nMjF7.mjs");
var Route = createFileRoute("/demo")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var rootRouteChildren = {
	IndexRoute: Route$3.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$4
	}),
	ArchitectureRoute: Route$2.update({
		id: "/architecture",
		path: "/architecture",
		getParentRoute: () => Route$4
	}),
	CapabilitiesRoute: Route$1.update({
		id: "/capabilities",
		path: "/capabilities",
		getParentRoute: () => Route$4
	}),
	DemoRoute: Route.update({
		id: "/demo",
		path: "/demo",
		getParentRoute: () => Route$4
	})
};
var routeTree = Route$4._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { NAV as a, SCREENSHOTS as c, LAYERS as i, SITE as l, FEATURES as n, PLATFORM as o, INVARIANTS as r, PRINCIPLES as s, router_exports as t, TRUST as u };
