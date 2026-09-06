import type { Dictionary } from "@/i18n";
import { PhoneMockup } from "./PhoneMockup";
import { Badge, PrimaryButton } from "./ui";
import { ArrowRightIcon, PlayIcon, YoutubeIcon } from "./icons";

export function Clipping({ dict }: { dict: Dictionary }) {
  const { clipping } = dict;

  return (
    <section className="relative overflow-hidden bg-black py-24 md:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 h-[600px] w-[900px] -translate-x-1/2"
        style={{ background: "radial-gradient(ellipse at center, rgba(77,0,255,0.18), transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-6xl px-5">
        <div className="flex flex-col items-center text-center">
          <Badge>{clipping.badge}</Badge>
          <h2 className="mt-6 max-w-3xl text-balance text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl md:text-5xl">
            {clipping.titleLine1}{" "}
            <span className="bg-linear-to-r from-[#b9aeff] to-primary bg-clip-text text-transparent">
              {clipping.titleHighlight}
            </span>
          </h2>
          <p className="mt-5 text-[15px] text-white/50 md:text-base">{clipping.subtitle}</p>
        </div>

        <div className="mt-16 flex flex-col items-center gap-8 lg:flex-row lg:justify-center">
          {/* Source video */}
          <div className="relative w-full max-w-md">
            <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-linear-to-br from-[#1a1a1a] to-black">
              <div aria-hidden className="absolute inset-0 bg-grid opacity-40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="flex size-16 items-center justify-center rounded-full bg-[#ff0033] shadow-[0_10px_40px_-10px_rgba(255,0,51,0.9)]">
                  <PlayIcon className="ml-1 size-6 text-white" />
                </span>
              </div>
              <div className="absolute inset-x-4 bottom-4 flex items-center gap-2">
                <YoutubeIcon className="size-5 text-[#ff0033]" />
                <span className="text-[12px] text-white/70">youtube.com/watch?v=…</span>
                <span className="ml-auto rounded bg-black/70 px-1.5 py-0.5 text-[11px] text-white/80">48:12</span>
              </div>
            </div>
            <p className="mt-3 text-center text-[13px] text-white/40">1 vidéo longue</p>
          </div>

          <ArrowRightIcon className="size-8 rotate-90 text-primary lg:rotate-0" />

          {/* Clips output */}
          <div className="flex items-end justify-center gap-3">
            <PhoneMockup className="w-[130px]" tilt={-6} caption="CLIP 1" views="420K" />
            <PhoneMockup className="w-[150px]" caption="CLIP 2" views="1,1M" />
            <PhoneMockup
              className="hidden w-[130px] sm:block"
              tilt={6}
              caption="CLIP 3"
              views="880K"
              gradient="from-[#8f7dff] via-[#2f1138] to-black"
            />
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center gap-4">
          <p className="text-[15px] text-white/55">{clipping.tryIt}</p>
          <PrimaryButton size="lg">{clipping.cta}</PrimaryButton>
        </div>
      </div>
    </section>
  );
}
