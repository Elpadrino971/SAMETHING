"use client";

import { useState } from "react";
import type { Dictionary } from "@/i18n";
import { Badge, cx, PrimaryButton } from "./ui";
import { PhoneMockup } from "./PhoneMockup";
import { BoltIcon } from "./icons";

export function Features({ dict }: { dict: Dictionary }) {
  const { features } = dict;
  const [active, setActive] = useState(0);
  const tab = features.tabs[active];

  return (
    <section id="features" className="relative overflow-hidden bg-near-black py-24 md:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid opacity-50" />

      <div className="relative mx-auto max-w-6xl px-5">
        <div className="flex flex-col items-center text-center">
          <Badge>{features.badge}</Badge>
          <h2 className="mt-6 text-balance text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl md:text-5xl">
            {features.title}
          </h2>
          <p className="mt-5 max-w-2xl text-pretty text-[15px] leading-relaxed text-white/50">
            {features.subtitle}
          </p>
        </div>

        <div className="no-scrollbar mt-10 flex justify-start gap-2 overflow-x-auto pb-1 md:justify-center">
          {features.tabs.map((t, i) => (
            <button
              key={t.label}
              type="button"
              onClick={() => setActive(i)}
              aria-pressed={i === active}
              className={cx(
                "shrink-0 rounded-full border px-5 py-2.5 text-[14px] font-medium transition",
                i === active
                  ? "border-primary/50 bg-primary/20 text-white"
                  : "border-white/10 bg-white/[0.03] text-white/55 hover:border-white/20 hover:text-white/80",
              )}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="relative mt-10 overflow-hidden rounded-[2rem] border border-white/10 bg-linear-to-b from-white/6 to-white/[0.02]">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-24 top-1/2 size-80 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl"
          />
          <div className="relative grid items-center gap-10 p-7 sm:p-10 lg:grid-cols-2 lg:p-14">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-3 py-1.5 text-[12px] font-medium text-white/70">
                <BoltIcon className="size-3 text-primary" />
                {tab.label}
              </span>
              <h3 className="mt-5 text-balance text-2xl font-semibold leading-[1.15] tracking-tight sm:text-3xl md:text-4xl">
                {tab.titleLine1}{" "}
                <span className="bg-linear-to-r from-[#b9aeff] to-primary bg-clip-text text-transparent">
                  {tab.titleHighlight}
                </span>
              </h3>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/50">{tab.text}</p>
              <PrimaryButton className="mt-8">{features.cta}</PrimaryButton>
            </div>

            <div className="flex items-end justify-center gap-4">
              <PhoneMockup className="w-[140px]" tilt={-7} caption={tab.label.toUpperCase()} views="640K" />
              <PhoneMockup
                className="w-[170px]"
                caption={tab.label.toUpperCase()}
                views="1,8M"
                gradient="from-[#8f7dff] via-[#2f1138] to-black"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
