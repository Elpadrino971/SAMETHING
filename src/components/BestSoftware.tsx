import type { Dictionary } from "@/i18n";
import { Badge } from "./ui";
import { BoltIcon, PlayIcon, SparkleIcon, TikTokIcon, YoutubeIcon, InstagramIcon } from "./icons";

export function BestSoftware({ dict }: { dict: Dictionary }) {
  const { bestSoftware } = dict;

  return (
    <section className="relative overflow-hidden bg-black py-24 md:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[1000px] -translate-x-1/2 -translate-y-1/2"
        style={{ background: "radial-gradient(ellipse at center, rgba(103,89,215,0.2), transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-6xl px-5">
        <div className="flex flex-col items-center text-center">
          <Badge>{bestSoftware.badge}</Badge>
          <h2 className="mt-6 max-w-2xl text-balance text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl md:text-5xl">
            {bestSoftware.titleLine1}{" "}
            <span className="bg-linear-to-r from-[#b9aeff] to-primary bg-clip-text text-transparent">
              {bestSoftware.titleHighlight}
            </span>
          </h2>
        </div>

        <div className="relative mx-auto mt-14 max-w-5xl rounded-[1.75rem] border border-white/10 bg-linear-to-b from-white/10 to-white/[0.02] p-2 shadow-[0_50px_120px_-40px_rgba(103,89,215,0.7)]">
          <div className="overflow-hidden rounded-3xl border border-white/8 bg-[#08080c]">
            {/* window chrome */}
            <div className="flex items-center gap-2 border-b border-white/8 px-4 py-3">
              <span className="size-2.5 rounded-full bg-[#ff5f57]" />
              <span className="size-2.5 rounded-full bg-[#febc2e]" />
              <span className="size-2.5 rounded-full bg-[#28c840]" />
              <span className="mx-auto rounded-md bg-white/6 px-3 py-1 text-[11px] text-white/40">
                app.remakeit.io/dashboard
              </span>
            </div>

            <div className="grid gap-0 sm:grid-cols-[180px_1fr]">
              {/* sidebar */}
              <aside className="hidden flex-col gap-1.5 border-r border-white/8 p-4 sm:flex">
                {["Dashboard", "Clipping", "Génération IA", "Auto-publish", "Analytics", "Réglages"].map(
                  (item, i) => (
                    <span
                      key={item}
                      className={`flex items-center gap-2 rounded-lg px-3 py-2 text-[12px] ${
                        i === 1 ? "bg-primary/20 text-white" : "text-white/40"
                      }`}
                    >
                      <span className="size-1.5 rounded-full bg-current opacity-60" />
                      {item}
                    </span>
                  ),
                )}
              </aside>

              {/* main panel */}
              <div className="p-5">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-[12px] text-white/60">
                    <YoutubeIcon className="size-3.5 text-[#ff0033]" />
                    youtube.com/watch?v=…
                  </span>
                  <span className="flex items-center gap-1.5 rounded-lg bg-linear-to-b from-[#7d6ff0] to-primary px-3 py-2 text-[12px] font-semibold">
                    <BoltIcon className="size-3" />
                    Générer
                  </span>
                  <span className="ml-auto flex items-center gap-1.5 rounded-lg border border-white/10 px-3 py-2 text-[12px] text-white/50">
                    <SparkleIcon className="size-3 text-primary" />
                    Veo 3
                  </span>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {[0, 1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="relative aspect-9/16 overflow-hidden rounded-lg border border-white/8 bg-linear-to-br from-primary/45 via-[#1b1240] to-black"
                    >
                      <div aria-hidden className="absolute inset-0 bg-grid opacity-30" />
                      <span className="absolute inset-0 flex items-center justify-center">
                        <span className="flex size-7 items-center justify-center rounded-full bg-white/15 backdrop-blur">
                          <PlayIcon className="ml-0.5 size-3 text-white" />
                        </span>
                      </span>
                      <span className="absolute bottom-1.5 left-1.5 rounded bg-black/60 px-1.5 py-0.5 text-[9px] text-white/80">
                        Clip 0{i + 1}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  {[
                    { label: "Vues 7j", value: "1,2M" },
                    { label: "Publications", value: "48" },
                    { label: "Revenus", value: "3 420€" },
                  ].map((stat) => (
                    <div key={stat.label} className="rounded-lg border border-white/8 bg-white/[0.03] px-3 py-2.5">
                      <span className="block text-[10px] uppercase tracking-wide text-white/35">{stat.label}</span>
                      <span className="mt-0.5 block text-[17px] font-semibold">{stat.value}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex items-center gap-2 rounded-lg border border-white/8 bg-white/[0.03] px-3 py-2.5">
                  <span className="text-[11px] text-white/40">Publier sur</span>
                  {[TikTokIcon, InstagramIcon, YoutubeIcon].map((Icon, i) => (
                    <span key={i} className="flex size-6 items-center justify-center rounded-md bg-white/8">
                      <Icon className="size-3 text-white/75" />
                    </span>
                  ))}
                  <span className="ml-auto rounded-md bg-primary/25 px-2 py-1 text-[10px] font-medium text-white">
                    Programmé · 18:00
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
