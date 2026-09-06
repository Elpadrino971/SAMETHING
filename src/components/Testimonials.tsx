import type { Dictionary } from "@/i18n";
import { Badge } from "./ui";
import { StarIcon } from "./icons";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

const AVATAR_GRADIENTS = [
  "from-[#7d6ff0] to-[#4d00ff]",
  "from-[#ff7ac6] to-[#7d3bff]",
  "from-[#4fd1ff] to-[#2f5bff]",
  "from-[#ffb86b] to-[#ff5d5d]",
  "from-[#6bffb8] to-[#00a97f]",
  "from-[#b9aeff] to-[#6759d7]",
];

function Card({
  item,
  index,
}: {
  item: Dictionary["testimonials"]["items"][number];
  index: number;
}) {
  return (
    <figure className="flex w-[320px] shrink-0 flex-col gap-4 rounded-3xl border border-white/8 bg-linear-to-b from-white/6 to-white/[0.02] p-6 sm:w-[360px]">
      <div className="flex gap-0.5 text-[#ffd166]">
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon key={i} className="size-3.5" />
        ))}
      </div>
      <blockquote className="text-[14px] leading-relaxed text-white/75">“{item.text}”</blockquote>
      <figcaption className="mt-auto flex items-center gap-3 pt-2">
        <span
          className={`flex size-9 items-center justify-center rounded-full bg-linear-to-br text-[12px] font-bold text-white ${
            AVATAR_GRADIENTS[index % AVATAR_GRADIENTS.length]
          }`}
        >
          {initials(item.name)}
        </span>
        <span className="text-[13px] font-medium">{item.name}</span>
        <span className="ml-auto text-[12px] text-white/35">{item.date}</span>
      </figcaption>
    </figure>
  );
}

export function Testimonials({ dict }: { dict: Dictionary }) {
  const { testimonials } = dict;
  const rowOne = testimonials.items;
  const rowTwo = [...testimonials.items].reverse();

  return (
    <section id="results" className="relative overflow-hidden bg-black py-24 md:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid opacity-40" />

      <div className="relative mx-auto max-w-6xl px-5">
        <div className="flex flex-col items-center text-center">
          <Badge>{testimonials.badge}</Badge>
          <h2 className="mt-6 max-w-2xl text-balance text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl md:text-5xl">
            {testimonials.titleLine1}{" "}
            <span className="bg-linear-to-r from-[#b9aeff] to-primary bg-clip-text text-transparent">
              {testimonials.titleHighlight}
            </span>
          </h2>
          <p className="mt-5 max-w-xl text-pretty text-[15px] text-white/50">{testimonials.subtitle}</p>
        </div>
      </div>

      <div className="relative mt-14 flex flex-col gap-5">
        <div className="mask-fade-x flex overflow-hidden">
          {[0, 1].map((dup) => (
            <div key={dup} aria-hidden={dup === 1} className="flex shrink-0 animate-marquee-slow gap-5 pr-5">
              {rowOne.map((item, i) => (
                <Card key={`${dup}-${item.name}`} item={item} index={i} />
              ))}
            </div>
          ))}
        </div>
        <div className="mask-fade-x flex overflow-hidden">
          {[0, 1].map((dup) => (
            <div
              key={dup}
              aria-hidden
              className="flex shrink-0 animate-marquee-slow gap-5 pr-5 [animation-direction:reverse]"
            >
              {rowTwo.map((item, i) => (
                <Card key={`${dup}-${item.name}`} item={item} index={i + 3} />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="relative mx-auto mt-16 max-w-4xl px-5">
        <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {testimonials.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl border border-white/8 bg-linear-to-b from-white/6 to-white/[0.02] px-6 py-7 text-center"
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block bg-linear-to-b from-white to-[#b9aeff] bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-5xl">
                  {stat.value}
                </span>
                <span className="mt-2 block text-[13px] text-white/45">{stat.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
