import type { Dictionary } from "@/i18n";
import { GhostButton } from "./ui";
import { ClockIcon, DollarIcon, SparkleIcon } from "./icons";

const ICONS = [ClockIcon, SparkleIcon, DollarIcon];

export function WhyBest({ dict }: { dict: Dictionary }) {
  const { why } = dict;

  return (
    <section className="relative overflow-hidden bg-near-black py-24 md:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid opacity-50" />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/4 h-[420px] w-[620px]"
        style={{ background: "radial-gradient(ellipse at center, rgba(255,61,129,0.18), transparent 70%)" }}
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-start lg:gap-16">
        <div className="lg:sticky lg:top-28">
          <h2 className="text-balance text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl md:text-5xl">
            {why.titleLine1}{" "}
            <span className="bg-linear-to-r from-primary-light to-primary bg-clip-text text-transparent">
              {why.titleHighlight}
            </span>{" "}
            {why.titleLine2}
          </h2>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/50">{why.subtitle}</p>
          <GhostButton className="mt-7">{why.contact}</GhostButton>
        </div>

        <ul className="flex flex-col gap-4">
          {why.items.map((item, i) => {
            const Icon = ICONS[i] ?? SparkleIcon;
            return (
              <li
                key={item.n}
                className="group relative overflow-hidden rounded-3xl border border-white/8 bg-linear-to-r from-white/6 to-white/[0.02] p-6 transition hover:border-primary/35 md:p-8"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-primary/20 opacity-0 blur-3xl transition-opacity group-hover:opacity-100"
                />
                <div className="relative flex items-start gap-5">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/6">
                    <Icon className="size-5 text-primary" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-[18px] font-semibold md:text-xl">{item.title}</h3>
                    <p className="mt-1.5 text-[14px] leading-relaxed text-white/50 md:text-[15px]">{item.text}</p>
                  </div>
                  <span className="text-[26px] font-bold leading-none text-white/10 md:text-[34px]">{item.n}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
