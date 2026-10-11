import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { ArrowUpRight } from "./icons";

type Variant = "primary" | "outline" | "ghost";

const base =
  "group/btn inline-flex items-center justify-center gap-2 rounded-full text-[0.95rem] font-medium transition-colors duration-200 disabled:opacity-50";

const sizes = {
  md: "h-11 px-5",
  lg: "h-12 px-6",
} as const;

const variants: Record<Variant, string> = {
  primary: "bg-ink text-bg hover:bg-accent-soft",
  outline: "border border-ink/20 text-ink hover:border-ink",
  ghost: "px-2 text-muted hover:text-ink",
};

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: keyof typeof sizes;
  className?: string;
  arrow?: boolean;
};

type ButtonProps = CommonProps &
  (
    | { href: string; external?: boolean; onClick?: never; type?: never }
    | { href?: never; onClick?: () => void; type?: "button" | "submit" }
  );

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  arrow = false,
  ...props
}: ButtonProps) {
  const classes = cn(base, sizes[size], variants[variant], className);
  const content = (
    <>
      {children}
      {arrow && (
        <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
      )}
    </>
  );

  if ("href" in props && props.href) {
    if (props.external) {
      return (
        <a href={props.href} target="_blank" rel="noopener noreferrer" className={classes}>
          {content}
        </a>
      );
    }
    return (
      <Link href={props.href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={props.type ?? "button"} onClick={props.onClick} className={classes}>
      {content}
    </button>
  );
}
