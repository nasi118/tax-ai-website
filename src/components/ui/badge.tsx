import { cva, type VariantProps } from "class-variance-authority";
import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-1 text-2xs font-medium tracking-wide uppercase",
  {
    variants: {
      variant: {
        default: "bg-paper-2 text-muted",
        accent: "bg-accent/10 text-accent",
        navy: "bg-navy-3 text-sky",
        good: "bg-good-soft text-good",
        warn: "bg-warn-soft text-warn",
        outline:
          "text-muted shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-ink)_12%,transparent)]",
      },
    },
    defaultVariants: { variant: "default" },
  },
);

export function Badge({
  className,
  variant,
  ...props
}: HTMLAttributes<HTMLSpanElement> & VariantProps<typeof badgeVariants>) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}
