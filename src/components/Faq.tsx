"use client";

import { useState } from "react";
import type { Dictionary } from "@/i18n";
import { Badge, cx, GhostButton } from "./ui";
import { ChevronDownIcon } from "./icons";

export function Faq({ dict }: { dict: Dictionary }) {
  const { faq } = dict;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative overflow-hidden bg-black py-24 md:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid opacity-40" />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Badge>{faq.badge}</Badge>
          <h2 className="mt-6 text-balance text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl">
            {faq.title}
          </h2>
          <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-white/50">{faq.subtitle}</p>
          <GhostButton className="mt-7">{faq.contact}</GhostButton>
        </div>

        <ul className="flex flex-col gap-3">
          {faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <li
                key={item.q}
                className={cx(
                  "overflow-hidden rounded-2xl border transition",
                  isOpen ? "border-primary/35 bg-primary/8" : "border-white/8 bg-white/[0.02]",
                )}
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center gap-4 px-5 py-5 text-left"
                  >
                    <span className="flex-1 text-[15px] font-medium md:text-base">{item.q}</span>
                    <ChevronDownIcon
                      className={cx("size-4 shrink-0 text-white/45 transition-transform", isOpen && "rotate-180")}
                    />
                  </button>
                </h3>
                <div
                  className={cx(
                    "grid transition-all duration-300 ease-out",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-[14px] leading-relaxed text-white/55">{item.a}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
