import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function BoltIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M13.5 2 4 13.5h6L9.5 22 20 10.5h-6.7L13.5 2Z" />
    </svg>
  );
}

export function SparkleIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 2c.4 3.6 2.4 5.6 6 6-3.6.4-5.6 2.4-6 6-.4-3.6-2.4-5.6-6-6 3.6-.4 5.6-2.4 6-6Z" />
      <path d="M19 14c.2 1.9 1.1 2.8 3 3-1.9.2-2.8 1.1-3 3-.2-1.9-1.1-2.8-3-3 1.9-.2 2.8-1.1 3-3Z" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <path d="m4 12.5 5 5L20 6.5" />
    </svg>
  );
}

export function CrossIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" aria-hidden {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <path d="M5 12h13m-5-6 6 6-6 6" />
    </svg>
  );
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function PlayIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M8 5.5v13l11-6.5-11-6.5Z" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" aria-hidden {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5.5l3.5 2" />
    </svg>
  );
}

export function DollarIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" aria-hidden {...props}>
      <path d="M12 3v18" />
      <path d="M16.5 7.5C16.5 6 14.7 5 12.4 5 10 5 8 6 8 8s2 2.7 4.3 3.2c2.4.5 4.4 1.2 4.4 3.3S14.7 19 12.4 19c-2.4 0-4.4-1-4.4-2.6" />
    </svg>
  );
}

export function TikTokIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M16.6 3c.3 2.2 1.6 3.6 3.8 3.8v2.6c-1.4.1-2.7-.3-3.9-1.1v5.9c0 4.6-4.4 6.9-8 4.9-2.4-1.3-3.1-4.6-1.6-7 1.3-2 3.6-2.8 5.7-2.3v2.8c-.4-.1-.8-.2-1.2-.2-1.4 0-2.5 1.2-2.3 2.6.2 1.2 1.3 2 2.5 1.9 1.3-.1 2.2-1.1 2.2-2.4V3h2.8Z" />
    </svg>
  );
}

export function YoutubeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4a2.5 2.5 0 0 0-1.8 1.8A26 26 0 0 0 2 12c0 1.6.1 3.2.4 4.8a2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8c.3-1.6.4-3.2.4-4.8s-.1-3.2-.4-4.8ZM10 15.2V8.8l5.2 3.2L10 15.2Z" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function DiscordIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M19.3 5.4A16.6 16.6 0 0 0 15.2 4l-.3.5c1.4.3 2.6.9 3.7 1.6a12.9 12.9 0 0 0-11.2 0c1.1-.7 2.4-1.3 3.7-1.6L10.8 4c-1.4.2-2.8.7-4.1 1.4C4.6 8.6 4 11.7 4.2 14.8a16.7 16.7 0 0 0 5 2.5l.7-1.2c-.7-.2-1.3-.5-1.9-.9l.4-.3a11.9 11.9 0 0 0 10.2 0l.4.3c-.6.4-1.2.7-1.9.9l.7 1.2c1.8-.5 3.5-1.4 5-2.5.3-3.6-.6-6.7-2.5-9.4ZM9.7 13.2c-.9 0-1.6-.8-1.6-1.8s.7-1.8 1.6-1.8 1.7.8 1.6 1.8c0 1-.7 1.8-1.6 1.8Zm4.6 0c-.9 0-1.6-.8-1.6-1.8s.7-1.8 1.6-1.8 1.7.8 1.6 1.8c0 1-.7 1.8-1.6 1.8Z" />
    </svg>
  );
}

export function GlobeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.3 2.4 3.5 5.5 3.5 9S14.3 18.6 12 21c-2.3-2.4-3.5-5.5-3.5-9S9.7 5.4 12 3Z" />
    </svg>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="m12 3 2.6 5.6 6.1.8-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6L3.3 9.4l6.1-.8L12 3Z" />
    </svg>
  );
}
