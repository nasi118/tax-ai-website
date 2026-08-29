import { y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { r as cn } from "./shell-reEf_qFp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/badge-BTEGf4qO.js
var import_jsx_runtime = require_jsx_runtime();
var badgeVariants = cva("inline-flex items-center rounded-full px-2.5 py-1 text-2xs font-medium tracking-wide uppercase", {
	variants: { variant: {
		default: "bg-paper-2 text-muted",
		accent: "bg-accent/10 text-accent",
		navy: "bg-navy-3 text-sky",
		good: "bg-good-soft text-good",
		warn: "bg-warn-soft text-warn",
		outline: "text-muted shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-ink)_12%,transparent)]"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
//#endregion
export { Badge as t };
