"use client";

import { useState } from "react";
import type { Dictionary } from "@/i18n";
import { Badge, cx, PrimaryButton } from "./ui";
import { CheckIcon, CrossIcon } from "./icons";

export function PricingPlans({ dict }: { dict: Dictionary }) {
  const { pricing } = dict;
  const [yearly, setYearly] = useState(false);

  const priceFor = (monthly: number) => (yearly ? Math.round(monthly * 0.7) : monthly);

  return (
    <section className="relative overflow-hidden bg-black pb-24 pt-36 md:pb-32 md:pt-44">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[1000px] -translate-x-1/2 -translate-y-1/3"
        style={{ background: "radial-gradient(ellipse at center, rgba(255,61,129,0.28), transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-6xl px-5">
        <div className="flex flex-col items-center text-center">
          <Badge>{pricing.badge}</Badge>
          <h1 className="mt-6 max-w-2xl text-balance text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
            {pricing.titleLine1}
            <span className="block bg-linear-to-r from-primary-light to-primary bg-clip-text text-transparent">
              {pricing.titleHighlight}
            </span>
          </h1>
          <p className="mt-5 text-[15px] text-white/50">{pricing.subtitle}</p>

          <div className="mt-9 inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1">
            <button
              type="button"
              onClick={() => setYearly(false)}
              aria-pressed={!yearly}
              className={cx(
                "rounded-full px-5 py-2 text-[14px] font-medium transition",
                !yearly ? "bg-white text-black" : "text-white/60 hover:text-white",
              )}
            >
              {pricing.monthly}
            </button>
            <button
              type="button"
              onClick={() => setYearly(true)}
              aria-pressed={yearly}
              className={cx(
                "flex items-center gap-2 rounded-full px-5 py-2 text-[14px] font-medium transition",
                yearly ? "bg-white text-black" : "text-white/60 hover:text-white",
              )}
            >
              {pricing.yearly}
              <span
                className={cx(
                  "rounded-full px-2 py-0.5 text-[11px] font-bold",
                  yearly ? "bg-primary text-white" : "bg-primary/20 text-primary",
                )}
              >
                {pricing.save} {pricing.savePercent}
              </span>
            </button>
          </div>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {pricing.plans.map((plan, i) => {
            const highlighted = i === 1;
            return (
              <article
                key={plan.name}
                className={cx(
                  "relative flex flex-col overflow-hidden rounded-3xl border p-7",
                  highlighted
                    ? "border-primary/45 bg-linear-to-b from-primary/18 to-white/[0.02] lg:-mt-4 lg:pb-11"
                    : "border-white/8 bg-linear-to-b from-white/6 to-white/[0.02]",
                )}
              >
                {highlighted && (
                  <>
                    <div
                      aria-hidden
                      className="pointer-events-none absolute -right-20 -top-20 size-56 rounded-full bg-primary/30 blur-3xl"
                    />
                    <span className="absolute right-6 top-6 rounded-full bg-linear-to-r from-primary-bright to-primary px-3 py-1 text-[11px] font-bold tracking-wide">
                      {pricing.popular}
                    </span>
                  </>
                )}

                <h2 className="relative text-xl font-semibold">{plan.name}</h2>
                <p className="relative mt-2 min-h-10 max-w-[85%] text-[13px] leading-relaxed text-white/45">
                  {plan.tagline}
                </p>

                <p className="relative mt-6 flex items-baseline gap-1">
                  <span className="text-5xl font-bold tracking-tight">{priceFor(plan.price)}€</span>
                  <span className="text-[14px] text-white/45">{pricing.perMonth}</span>
                </p>

                <ul className="relative mt-7 flex flex-1 flex-col gap-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <CheckIcon className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span className="text-[14px] leading-snug text-white/70">{feature}</span>
                    </li>
                  ))}
                </ul>

                <PrimaryButton className="relative mt-8 w-full">{pricing.choose}</PrimaryButton>
              </article>
            );
          })}
        </div>

        <p className="mt-6 text-center text-[12px] text-white/35">{pricing.footnote}</p>

        <div className="mt-20 flex flex-col gap-14">
          {pricing.tables.map((table) => (
            <div key={table.title}>
              <h2 className="mb-5 text-center text-xl font-semibold tracking-tight md:text-2xl">{table.title}</h2>
              <div className="overflow-x-auto rounded-3xl border border-white/8 bg-white/[0.02]">
                <table className="w-full min-w-160 border-collapse text-left">
                  <thead>
                    <tr className="border-b border-white/8">
                      <th scope="col" className="px-6 py-4 text-[13px] font-semibold uppercase tracking-wide text-white/55">
                        {table.header}
                      </th>
                      {pricing.plans.map((plan) => (
                        <th
                          key={plan.name}
                          scope="col"
                          className="px-6 py-4 text-center text-[13px] font-semibold uppercase tracking-wide text-white/55"
                        >
                          {plan.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {table.rows.map((row) => (
                      <tr key={row.label} className="border-b border-white/6 last:border-b-0">
                        <th scope="row" className="px-6 py-4 text-[14px] font-normal text-white/70">
                          {row.label}
                        </th>
                        {row.values.map((value, i) => (
                          <td key={i} className="px-6 py-4 text-center text-[14px] text-white/70">
                            {typeof value === "string" ? (
                              value
                            ) : value ? (
                              <CheckIcon className="mx-auto size-4 text-primary" />
                            ) : (
                              <CrossIcon className="mx-auto size-4 text-white/20" />
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
