import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getDictionary, isLocale, locales } from "@/i18n";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  return {
    title: dict.meta.title,
    description: dict.meta.description,
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      siteName: "Remakeit",
      locale: locale === "fr" ? "fr_FR" : "en_US",
      type: "website",
    },
    twitter: { card: "summary_large_image" },
    alternates: {
      languages: Object.fromEntries(locales.map((l) => [l, `/${l}`])),
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <>
      <Navbar dict={dict} locale={locale} />
      <main>{children}</main>
      <Footer dict={dict} locale={locale} />
    </>
  );
}
