import type { Dictionary } from "@/i18n";
import { DollarIcon, SparkleIcon, BoltIcon, TikTokIcon, YoutubeIcon, InstagramIcon } from "./icons";

const CARD_ICONS = [DollarIcon, BoltIcon, SparkleIcon];

export function SocialProof({ dict }: { dict: Dictionary }) {
  const { socialProof } = dict;

  return (
    <section className="relative overflow-hidden bg-near-black py-24 md:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid opacity-60" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[900px] -translate-x-1/2 -translate-y-1/2"
        style={{ background: "radial-gradient(ellipse at center, rgba(255,61,129,0.25), transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-6xl px-5">
        <h2 className="mx-auto max-w-3xl text-balance text-center text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl md:text-5xl">
          <span className="bg-linear-to-r from-primary-light to-primary bg-clip-text text-transparent">
            {socialProof.highlight}
          </span>{" "}
          {socialProof.title}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-center text-[15px] leading-relaxed text-white/50">
          {socialProof.subtitle}
        </p>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {socialProof.cards.map((card, i) => {
            const Icon = CARD_ICONS[i] ?? BoltIcon;
            return (
              <article
                key={card.title}
                className="group relative overflow-hidden rounded-3xl border border-white/8 bg-linear-to-b from-white/6 to-white/[0.02] p-6 transition duration-300 hover:border-white/18"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-primary/25 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100"
                />
                <div className="relative flex h-40 items-center justify-center overflow-hidden rounded-2xl border border-white/8 bg-black/50">
                  <div aria-hidden className="absolute inset-0 bg-grid opacity-50" />
                  {i === 0 && <MoneyVisual />}
                  {i === 1 && <AutomationVisual />}
                  {i === 2 && <AllInOneVisual />}
                </div>
                <div className="relative mt-6 flex items-start gap-3">
                  <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                    <Icon className="size-4 text-primary" />
                  </span>
                  <div>
                    <h3 className="text-[17px] font-semibold">{card.title}</h3>
                    <p className="mt-1 text-[14px] leading-relaxed text-white/50">{card.text}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function MoneyVisual() {
  const bars = [30, 45, 38, 62, 55, 80, 95];
  return (
    <div className="relative flex h-24 items-end gap-2">
      {bars.map((h, i) => (
        <span
          key={i}
          className="w-5 rounded-t-md bg-linear-to-t from-primary/30 to-primary"
          style={{ height: `${h}%`, opacity: 0.35 + i * 0.09 }}
        />
      ))}
      <span className="absolute -top-2 right-0 rounded-full bg-white px-2 py-0.5 text-[11px] font-bold text-black">
        +1000/j
      </span>
    </div>
  );
}

function AutomationVisual() {
  const platforms = [TikTokIcon, YoutubeIcon, InstagramIcon];
  return (
    <div className="relative flex items-center gap-4">
      <span className="flex size-12 items-center justify-center rounded-xl bg-linear-to-br from-primary-bright to-primary shadow-[0_8px_30px_-8px_rgba(255,61,129,1)]">
        <BoltIcon className="size-5 text-white" />
      </span>
      <svg viewBox="0 0 60 60" className="h-14 w-10 text-white/25" fill="none" stroke="currentColor" aria-hidden>
        <path d="M2 30h18M20 30c8 0 8-22 16-22h20M20 30c8 0 8 22 16 22h20M20 30h36" strokeWidth="1.5" strokeDasharray="3 3" />
      </svg>
      <div className="flex flex-col gap-2">
        {platforms.map((Icon, i) => (
          <span key={i} className="flex size-8 items-center justify-center rounded-lg border border-white/10 bg-white/6">
            <Icon className="size-4 text-white/80" />
          </span>
        ))}
      </div>
    </div>
  );
}

function AllInOneVisual() {
  return (
    <div className="relative grid grid-cols-3 gap-2">
      {["Veo 3", "TTS", "Cuts", "Subs", "Auto", "SEO"].map((label, i) => (
        <span
          key={label}
          className="flex h-9 w-16 items-center justify-center rounded-lg border border-white/10 bg-white/6 text-[11px] font-medium text-white/70"
          style={{ opacity: 0.55 + (i % 3) * 0.15 }}
        >
          {label}
        </span>
      ))}
      <span aria-hidden className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-primary/25" />
    </div>
  );
}
