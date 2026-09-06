import Link from "next/link";
import type { Dictionary, Locale } from "@/i18n";
import { BoltIcon, DiscordIcon, InstagramIcon } from "./icons";

export function Footer({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const { footer } = dict;

  return (
    <footer className="relative overflow-hidden border-t border-white/8 bg-near-black">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/2 h-72 w-[900px] -translate-x-1/2 translate-y-1/2"
        style={{ background: "radial-gradient(ellipse at center, rgba(255,61,129,0.22), transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[minmax(0,1.3fr)_repeat(3,minmax(0,1fr))]">
          <div>
            <Link href={`/${locale}`} className="flex items-center gap-2 font-semibold tracking-tight">
              <span className="flex size-8 items-center justify-center rounded-lg bg-linear-to-br from-primary-bright to-primary">
                <BoltIcon className="size-4 text-white" />
              </span>
              <span className="text-[17px]">VYRA</span>
            </Link>
            <p className="mt-5 max-w-xs text-[13px] leading-relaxed text-white/45">{footer.blurb}</p>
            <div className="mt-6 flex gap-2">
              <a
                href="#"
                aria-label="Discord"
                className="flex size-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition hover:border-white/25 hover:text-white"
              >
                <DiscordIcon className="size-4" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="flex size-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition hover:border-white/25 hover:text-white"
              >
                <InstagramIcon className="size-4" />
              </a>
            </div>
          </div>

          {footer.columns.map((column) => (
            <nav key={column.title}>
              <h2 className="text-[13px] font-semibold uppercase tracking-[0.14em] text-white/70">{column.title}</h2>
              <ul className="mt-5 flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href.startsWith("/") ? `/${locale}${link.href}` : link.href}
                      className="text-[14px] text-white/45 transition hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center gap-4 border-t border-white/8 pt-8 sm:flex-row sm:justify-between">
          <span className="text-[13px] text-white/35">{footer.copyright}</span>
          <span className="text-[13px] text-white/25">VYRA</span>
        </div>
      </div>
    </footer>
  );
}
