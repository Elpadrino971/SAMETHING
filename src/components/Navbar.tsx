"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { Dictionary, Locale } from "@/i18n";
import { locales } from "@/i18n";
import { cx, PrimaryButton } from "./ui";
import { BoltIcon, ChevronDownIcon, GlobeIcon } from "./icons";

export function Navbar({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const base = `/${locale}`;
  const links = [
    { label: dict.nav.howItWorks, href: `${base}#how-it-works` },
    { label: dict.nav.features, href: `${base}#features` },
    { label: dict.nav.results, href: `${base}#results` },
    { label: dict.nav.pricing, href: `${base}/pricing` },
    { label: dict.nav.faq, href: `${base}#faq` },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav
        className={cx(
          "mx-auto flex max-w-6xl items-center gap-4 rounded-full px-4 py-2.5 transition-all duration-300 md:px-5",
          scrolled
            ? "border border-white/10 bg-black/70 shadow-[0_10px_40px_-20px_rgba(0,0,0,1)] backdrop-blur-xl"
            : "border border-transparent bg-transparent",
        )}
      >
        <Link href={base} className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="flex size-8 items-center justify-center rounded-lg bg-linear-to-br from-[#7d6ff0] to-primary shadow-[0_6px_20px_-6px_rgba(103,89,215,1)]">
            <BoltIcon className="size-4 text-white" />
          </span>
          <span className="text-[17px]">Remakeit</span>
        </Link>

        <ul className="ml-2 hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="rounded-full px-3.5 py-2 text-[14px] text-white/60 transition hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-center gap-2">
          <div className="relative hidden sm:block">
            <button
              type="button"
              onClick={() => setLangOpen((v) => !v)}
              onBlur={() => window.setTimeout(() => setLangOpen(false), 120)}
              aria-expanded={langOpen}
              aria-label="Language"
              className="flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-2 text-[13px] font-medium uppercase text-white/70 transition hover:border-white/25 hover:text-white"
            >
              <GlobeIcon className="size-4" />
              {locale}
              <ChevronDownIcon className={cx("size-3.5 transition", langOpen && "rotate-180")} />
            </button>
            {langOpen && (
              <ul className="absolute right-0 top-[calc(100%+8px)] w-28 overflow-hidden rounded-2xl border border-white/10 bg-near-black/95 p-1 backdrop-blur-xl">
                {locales.map((l) => (
                  <li key={l}>
                    <Link
                      href={`/${l}`}
                      className={cx(
                        "block rounded-xl px-3 py-2 text-[13px] uppercase transition hover:bg-white/8",
                        l === locale ? "text-white" : "text-white/55",
                      )}
                    >
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <a
            href="#"
            className="hidden rounded-full px-4 py-2 text-[14px] text-white/70 transition hover:text-white md:inline-flex"
          >
            {dict.nav.login}
          </a>
          <span className="hidden sm:block">
            <PrimaryButton size="sm">{dict.nav.signup}</PrimaryButton>
          </span>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={open}
            className="flex size-9 flex-col items-center justify-center gap-1.5 rounded-full border border-white/10 lg:hidden"
          >
            <span className={cx("h-px w-4 bg-white transition", open && "translate-y-[3px] rotate-45")} />
            <span className={cx("h-px w-4 bg-white transition", open && "-translate-y-[3px] -rotate-45")} />
          </button>
        </div>
      </nav>

      {open && (
        <div className="mx-auto mt-2 max-w-6xl rounded-3xl border border-white/10 bg-black/90 p-4 backdrop-blur-xl lg:hidden">
          <ul className="flex flex-col">
            {links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-[15px] text-white/75 transition hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex items-center gap-2 border-t border-white/8 pt-3">
            <a href="#" className="flex-1 rounded-full border border-white/10 px-4 py-2.5 text-center text-[14px] text-white/75">
              {dict.nav.login}
            </a>
            <span className="flex-1">
              <PrimaryButton size="sm" className="w-full">
                {dict.nav.signup}
              </PrimaryButton>
            </span>
          </div>
          <div className="mt-3 flex gap-2">
            {locales.map((l) => (
              <Link
                key={l}
                href={`/${l}`}
                className={cx(
                  "rounded-full border border-white/10 px-3 py-1.5 text-[12px] uppercase",
                  l === locale ? "bg-white/10 text-white" : "text-white/55",
                )}
              >
                {l}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
