import { cx } from "./ui";
import { TikTokIcon } from "./icons";

const BARS = [38, 62, 44, 78, 55, 92, 48, 70, 60, 84, 40, 66];

export function PhoneMockup({
  className,
  caption = "TOP 5 DES BUTS",
  views = "1,2M vues",
  tilt = 0,
  gradient = "from-[#6759d7] via-[#301f7a] to-[#0f0f0f]",
}: {
  className?: string;
  caption?: string;
  views?: string;
  tilt?: number;
  gradient?: string;
}) {
  return (
    <div
      className={cx("relative aspect-9/19 w-[220px] shrink-0", className)}
      style={{ transform: tilt ? `rotate(${tilt}deg)` : undefined }}
    >
      <div className="absolute inset-0 rounded-[2.2rem] bg-linear-to-b from-white/25 to-white/5 p-[1.5px] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)]">
        <div className="relative h-full w-full overflow-hidden rounded-[2.1rem] bg-black">
          <div className={cx("absolute inset-0 bg-linear-to-br opacity-90", gradient)} />
          <div className="absolute inset-0 bg-grid opacity-40" />

          {/* notch */}
          <div className="absolute left-1/2 top-2 h-5 w-20 -translate-x-1/2 rounded-full bg-black/80" />

          {/* waveform */}
          <div className="absolute inset-x-6 top-1/2 flex -translate-y-1/2 items-end gap-[3px]">
            {BARS.map((h, i) => (
              <span
                key={i}
                className="flex-1 rounded-full bg-white/70"
                style={{ height: `${h}px`, opacity: 0.35 + (h / 92) * 0.65 }}
              />
            ))}
          </div>

          {/* caption */}
          <div className="absolute inset-x-4 bottom-16 text-center">
            <span className="inline-block rounded-md bg-black/55 px-2 py-1 text-[13px] font-bold uppercase leading-tight tracking-wide text-white backdrop-blur-sm">
              {caption}
            </span>
          </div>

          {/* bottom bar */}
          <div className="absolute inset-x-4 bottom-5 flex items-center gap-2">
            <span className="flex size-7 items-center justify-center rounded-full bg-white/15 backdrop-blur">
              <TikTokIcon className="size-3.5 text-white" />
            </span>
            <span className="text-[11px] font-medium text-white/80">{views}</span>
            <span className="ml-auto h-1 w-16 overflow-hidden rounded-full bg-white/20">
              <span className="block h-full w-2/3 rounded-full bg-white" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
