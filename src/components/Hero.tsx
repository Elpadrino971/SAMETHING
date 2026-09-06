import type { Dictionary } from "@/i18n";
import { PhoneMockup } from "./PhoneMockup";
import { PrimaryButton } from "./ui";
import { BoltIcon, CheckIcon, SparkleIcon, StarIcon } from "./icons";

export function Hero({ dict }: { dict: Dictionary }) {
  const { hero } = dict;

  return (
    <section className="relative flex min-h-svh flex-col overflow-hidden bg-black pt-32 lg:min-h-[calc(100svh+100px)]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid"
        style={{
          maskImage: "linear-gradient(180deg, #000 0%, rgba(0,0,0,0.5) 70%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(180deg, #000 0%, rgba(0,0,0,0.5) 70%, transparent 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-72 left-1/2 h-[820px] w-[1200px] -translate-x-1/2"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at center, rgba(103,89,215,0.42) 0%, rgba(77,0,255,0.14) 45%, rgba(0,0,0,0) 72%)",
        }}
      />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-linear-to-b from-transparent to-near-black" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col items-center px-5 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-3 py-1.5 backdrop-blur">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-linear-to-r from-[#7d6ff0] to-primary px-2.5 py-1 text-[11px] font-bold tracking-wide text-white">
            <SparkleIcon className="size-3" />
            {hero.badge}
          </span>
          <span className="pr-2 text-[13px] text-white/65">{hero.users}</span>
        </div>

        <h1 className="mt-7 max-w-4xl text-balance text-[2.6rem] font-semibold leading-[1.03] tracking-tight sm:text-6xl lg:text-7xl">
          {hero.titleLine1}{" "}
          <span className="relative inline-block">
            <span className="bg-linear-to-r from-[#b9aeff] via-white to-[#8f7dff] bg-clip-text text-transparent">
              {hero.titleHighlight}
            </span>
            <svg
              aria-hidden
              viewBox="0 0 300 12"
              className="absolute -bottom-1 left-0 h-2.5 w-full text-primary/70"
              preserveAspectRatio="none"
            >
              <path d="M2 8c60-6 130-7 296-3" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </span>{" "}
          <span className="block">{hero.titleLine2}</span>
        </h1>

        <p className="mt-6 max-w-xl text-pretty text-[15px] leading-relaxed text-white/55 md:text-lg">
          {hero.subtitle}
        </p>

        <div className="mt-8 flex flex-col items-center gap-4">
          <PrimaryButton size="lg" className="min-w-44">
            <BoltIcon className="size-4" />
            {hero.cta}
          </PrimaryButton>
          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {hero.pills.map((pill) => (
              <li key={pill} className="flex items-center gap-1.5 text-[13px] text-white/55">
                <CheckIcon className="size-3.5 text-primary" />
                {pill}
              </li>
            ))}
          </ul>
        </div>

        {/* Mockup cluster */}
        <div className="relative mt-14 flex w-full max-w-4xl items-end justify-center gap-4 pb-10 sm:gap-8">
          <PhoneMockup
            tilt={-8}
            className="hidden animate-float sm:block"
            caption="30 SEC → 1M VUES"
            views="842K"
            gradient="from-[#4d00ff] via-[#1b1240] to-black"
          />
          <div className="relative z-10 w-[260px] sm:w-[280px]">
            <div className="absolute -inset-8 -z-10 rounded-full bg-primary/25 blur-3xl" />
            <PhoneMockup className="w-full animate-float [--tilt:0deg]" views="1,2M vues" />
          </div>
          <PhoneMockup
            tilt={8}
            className="hidden animate-float lg:block"
            caption="AUTO-PUBLISH"
            views="2,4M"
            gradient="from-[#8f7dff] via-[#2f1138] to-black"
          />

          <div className="absolute left-4 top-10 hidden animate-float rounded-2xl border border-white/10 bg-white/6 px-3 py-2 backdrop-blur-md md:flex md:items-center md:gap-2">
            <StarIcon className="size-4 text-[#ffd166]" />
            <span className="text-[13px] font-medium text-white/85">+312% vues</span>
          </div>
          <div className="absolute right-4 top-24 hidden animate-float rounded-2xl border border-white/10 bg-white/6 px-3 py-2 backdrop-blur-md md:flex md:items-center md:gap-2">
            <BoltIcon className="size-4 text-primary" />
            <span className="text-[13px] font-medium text-white/85">30 sec</span>
          </div>
        </div>
      </div>

      {/* Scrolling pills strip */}
      <div className="relative border-y border-white/8 bg-near-black/60 py-4">
        <div className="mask-fade-x flex overflow-hidden">
          <ul className="flex shrink-0 animate-marquee items-center gap-10 pr-10">
            {[...hero.pills, ...hero.pills, ...hero.pills, ...hero.pills].map((pill, i) => (
              <li key={i} className="flex items-center gap-2 whitespace-nowrap text-[14px] text-white/45">
                <BoltIcon className="size-3.5 text-primary" />
                {pill}
              </li>
            ))}
          </ul>
          <ul aria-hidden className="flex shrink-0 animate-marquee items-center gap-10 pr-10">
            {[...hero.pills, ...hero.pills, ...hero.pills, ...hero.pills].map((pill, i) => (
              <li key={i} className="flex items-center gap-2 whitespace-nowrap text-[14px] text-white/45">
                <BoltIcon className="size-3.5 text-primary" />
                {pill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
