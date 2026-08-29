import { y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/page-intro-D0Y7eiV3.js
var import_jsx_runtime = require_jsx_runtime();
function PageIntro({ eyebrow, title, lead }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "mx-auto w-full max-w-6xl px-4 pb-10 pt-14 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-2xs font-medium uppercase tracking-[0.16em] text-accent",
				children: eyebrow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 max-w-3xl font-display text-display font-medium text-ink",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 max-w-2xl text-lead text-muted",
				children: lead
			})
		]
	});
}
//#endregion
export { PageIntro as t };
