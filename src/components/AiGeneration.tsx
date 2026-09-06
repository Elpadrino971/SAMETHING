import type { Dictionary } from "@/i18n";
import { Badge, PrimaryButton } from "./ui";
import { SparkleIcon } from "./icons";

export function AiGeneration({ dict }: { dict: Dictionary }) {
  const { aiGeneration } = dict;

  return (
    <section className="relative overflow-hidden bg-near-black py-24 md:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid opacity-50" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2"
        style={{ background: "radial-gradient(ellipse at center, rgba(103,89,215,0.22), transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-5xl px-5">
        <div className="flex flex-col items-center text-center">
          <Badge>{aiGeneration.badge}</Badge>
          <h2 className="mt-6 max-w-3xl text-balance text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl md:text-5xl">
            {aiGeneration.titleLine1}{" "}
            <span className="bg-linear-to-r from-[#b9aeff] to-primary bg-clip-text text-transparent">
              {aiGeneration.titleHighlight}
            </span>
          </h2>
          <p className="mt-5 text-[15px] text-white/50 md:text-base">{aiGeneration.titleLine2}</p>
        </div>

        <div className="relative mx-auto mt-14 max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-linear-to-b from-white/8 to-white/[0.02] p-1.5 backdrop-blur">
          <div className="relative overflow-hidden rounded-[1.35rem] bg-black/70 p-6 sm:p-8">
            <div aria-hidden className="absolute inset-0 bg-grid opacity-40" />

            <div className="relative flex flex-wrap items-center gap-3">
              <span className="flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-3 py-1.5 text-[13px] font-medium">
                <SparkleIcon className="size-3.5 text-primary" />
                {aiGeneration.modelName}
              </span>
              <span className="rounded-full border border-white/10 px-3 py-1.5 text-[12px] text-white/55">3.1</span>
              <span className="rounded-full border border-primary/40 bg-primary/15 px-3 py-1.5 text-[12px] text-white">16:9</span>
              <span className="rounded-full border border-white/10 px-3 py-1.5 text-[12px] text-white/55">9:16</span>
            </div>

            <div className="relative mt-5 flex flex-col gap-3 rounded-2xl border border-white/10 bg-black/60 p-4 sm:flex-row sm:items-center">
              <p className="flex-1 text-[14px] text-white/45">{aiGeneration.modelText}</p>
              <PrimaryButton size="sm" className="shrink-0">
                {aiGeneration.generate}
              </PrimaryButton>
            </div>

            <div className="relative mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="relative aspect-9/16 overflow-hidden rounded-xl border border-white/8 bg-linear-to-br from-primary/40 via-[#1b1240] to-black"
                >
                  <div aria-hidden className="absolute inset-0 bg-grid opacity-30" />
                  <span className="absolute bottom-2 left-2 rounded bg-black/60 px-1.5 py-0.5 text-[10px] font-medium text-white/80">
                    0{i + 1}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-[14px] text-white/45">{aiGeneration.footnote}</p>
      </div>
    </section>
  );
}
