"use client";

import { useState } from "react";
import type { Dictionary } from "@/i18n";
import { Badge, cx } from "./ui";
import { ArrowRightIcon, BoltIcon } from "./icons";

export function HowItWorks({ dict }: { dict: Dictionary }) {
  const { howItWorks } = dict;
  const [active, setActive] = useState(0);
  const step = howItWorks.steps[active];

  return (
    <section id="how-it-works" className="relative overflow-hidden bg-black py-24 md:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/4 h-[500px] w-[900px] -translate-x-1/2"
        style={{ background: "radial-gradient(ellipse at center, rgba(255,61,129,0.18), transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-5xl px-5">
        <div className="flex flex-col items-center text-center">
          <Badge>{howItWorks.badge}</Badge>
          <h2 className="mt-6 max-w-2xl text-balance text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl md:text-5xl">
            {howItWorks.titleLine1}{" "}
            <span className="bg-linear-to-r from-primary-light to-primary bg-clip-text text-transparent">
              {howItWorks.titleHighlight}
            </span>
          </h2>
          <p className="mt-5 max-w-lg text-pretty text-[15px] text-white/50">{howItWorks.subtitle}</p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[minmax(0,320px)_1fr] lg:items-start">
          <ol className="flex flex-col gap-3">
            {howItWorks.steps.map((s, i) => (
              <li key={s.n}>
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  aria-current={i === active}
                  className={cx(
                    "flex w-full items-start gap-4 rounded-2xl border p-4 text-left transition",
                    i === active
                      ? "border-primary/45 bg-linear-to-r from-primary/18 to-transparent"
                      : "border-white/8 bg-white/[0.02] hover:border-white/16",
                  )}
                >
                  <span
                    className={cx(
                      "flex size-9 shrink-0 items-center justify-center rounded-xl text-[15px] font-bold transition",
                      i === active
                        ? "bg-linear-to-br from-primary-bright to-primary text-white shadow-[0_8px_24px_-8px_rgba(255,61,129,1)]"
                        : "border border-white/10 bg-white/5 text-white/50",
                    )}
                  >
                    {s.n}
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[15px] font-semibold">{s.title}</span>
                    <span className="mt-1 block text-[13px] leading-relaxed text-white/45">{s.text}</span>
                  </span>
                </button>
              </li>
            ))}
          </ol>

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-linear-to-b from-white/6 to-white/[0.02] p-6 sm:p-8">
            <div aria-hidden className="absolute inset-0 bg-grid opacity-40" />
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-primary/20 blur-3xl"
            />

            <div className="relative">
              <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-primary">
                {step.n} / {howItWorks.steps.length}
              </span>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight">{step.title}</h3>
              <p className="mt-2 max-w-md text-[14px] leading-relaxed text-white/50">{step.text}</p>

              <div className="mt-7 flex flex-col gap-3 rounded-2xl border border-white/10 bg-black/60 p-3 sm:flex-row sm:items-center">
                <div className="flex flex-1 items-center gap-2 px-2">
                  <BoltIcon className="size-4 shrink-0 text-primary" />
                  <span className="truncate text-[14px] text-white/40">{step.placeholder}</span>
                </div>
                <span className="inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-b from-primary-bright to-primary px-5 py-2.5 text-[14px] font-semibold text-white">
                  {step.action}
                  <ArrowRightIcon className="size-4" />
                </span>
              </div>

              <button
                type="button"
                onClick={() => setActive((a) => (a + 1) % howItWorks.steps.length)}
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/12 px-4 py-2 text-[13px] text-white/70 transition hover:border-white/25 hover:text-white"
              >
                {howItWorks.next}
                <ArrowRightIcon className="size-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
