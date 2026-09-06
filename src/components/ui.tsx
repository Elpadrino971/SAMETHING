import type { ReactNode } from "react";
import { BoltIcon } from "./icons";

export function cx(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}

export function Badge({
  children,
  className,
  icon = true,
}: {
  children: ReactNode;
  className?: string;
  icon?: boolean;
}) {
  return (
    <span
      className={cx(
        "inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-1.5 text-[13px] font-medium tracking-wide text-white/75 backdrop-blur",
        className,
      )}
    >
      {icon && <BoltIcon className="size-3.5 text-primary" />}
      {children}
    </span>
  );
}

export function PrimaryButton({
  children,
  className,
  href = "#",
  size = "md",
}: {
  children: ReactNode;
  className?: string;
  href?: string;
  size?: "sm" | "md" | "lg";
}) {
  const sizes = {
    sm: "px-5 py-2 text-sm",
    md: "px-7 py-3 text-[15px]",
    lg: "px-8 py-4 text-base",
  };
  return (
    <a
      href={href}
      className={cx(
        "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-semibold text-white",
        "bg-linear-to-b from-[#7d6ff0] to-primary shadow-[0_10px_40px_-8px_rgba(103,89,215,0.9)]",
        "ring-1 ring-white/20 transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0",
        sizes[size],
        className,
      )}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/70 to-transparent"
      />
      {children}
    </a>
  );
}

export function GhostButton({
  children,
  className,
  href = "#",
}: {
  children: ReactNode;
  className?: string;
  href?: string;
}) {
  return (
    <a
      href={href}
      className={cx(
        "inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/5 px-6 py-3 text-[15px] font-medium text-white/85 transition hover:border-white/25 hover:bg-white/10",
        className,
      )}
    >
      {children}
    </a>
  );
}

export function SectionHeading({
  badge,
  children,
  subtitle,
  className,
  align = "center",
}: {
  badge?: string;
  children: ReactNode;
  subtitle?: ReactNode;
  className?: string;
  align?: "center" | "left";
}) {
  return (
    <div
      className={cx(
        "flex flex-col gap-5",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {badge && <Badge>{badge}</Badge>}
      <h2 className="max-w-3xl text-balance text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl">
        {children}
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-pretty text-[15px] leading-relaxed text-white/55 md:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function Glow({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cx("pointer-events-none absolute -z-10 blur-[120px]", className)}
    />
  );
}
