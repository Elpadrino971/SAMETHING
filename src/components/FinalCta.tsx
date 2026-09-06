import type { Dictionary } from "@/i18n";
import { Badge, PrimaryButton } from "./ui";
import { BoltIcon, CheckIcon } from "./icons";

export function FinalCta({ dict }: { dict: Dictionary }) {
  const { cta } = dict;

  return (
    <section className="relative overflow-hidden bg-near-black py-24 md:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid opacity-50" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[900px] -translate-x-1/2 -translate-y-1/2 animate-pulse-glow"
        style={{ background: "radial-gradient(ellipse at center, rgba(103,89,215,0.35), transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-3xl px-5 text-center">
        <Badge>{cta.badge}</Badge>
        <h2 className="mt-6 text-balance text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl">
          {cta.title}
        </h2>
        <div className="mt-9 flex justify-center">
          <PrimaryButton size="lg">
            <BoltIcon className="size-4" />
            {cta.button}
          </PrimaryButton>
        </div>
        <ul className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {cta.trust.map((item) => (
            <li key={item} className="flex items-center gap-1.5 text-[13px] text-white/45">
              <CheckIcon className="size-3.5 text-primary" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
