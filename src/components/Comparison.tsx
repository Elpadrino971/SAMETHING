import type { Dictionary } from "@/i18n";
import { BoltIcon, CheckIcon, CrossIcon } from "./icons";

export function Comparison({ dict }: { dict: Dictionary }) {
  const { comparison } = dict;

  return (
    <section className="relative overflow-hidden bg-black py-20 md:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid opacity-40" />

      <div className="relative mx-auto max-w-4xl px-5">
        <div className="grid grid-cols-2 gap-4 md:gap-6">
          <div className="relative overflow-hidden rounded-3xl border border-primary/35 bg-linear-to-b from-primary/20 to-transparent p-5 md:p-7">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-primary/30 blur-3xl"
            />
            <h3 className="relative flex items-center gap-2 text-[17px] font-semibold md:text-lg">
              <span className="flex size-7 items-center justify-center rounded-lg bg-linear-to-br from-[#7d6ff0] to-primary">
                <BoltIcon className="size-3.5 text-white" />
              </span>
              {comparison.us}
            </h3>
            <ul className="relative mt-6 flex flex-col gap-4">
              {comparison.rows.map((row) => (
                <li key={row.us} className="flex items-start gap-2.5">
                  <CheckIcon className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span className="text-[14px] leading-snug text-white/85 md:text-[15px]">{row.us}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-white/8 bg-white/[0.02] p-5 md:p-7">
            <h3 className="text-[17px] font-semibold text-white/45 md:text-lg">{comparison.them}</h3>
            <ul className="mt-6 flex flex-col gap-4">
              {comparison.rows.map((row) => (
                <li key={row.them} className="flex items-start gap-2.5">
                  <CrossIcon className="mt-0.5 size-4 shrink-0 text-white/25" />
                  <span className="text-[14px] leading-snug text-white/40 md:text-[15px]">{row.them}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
