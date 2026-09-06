import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getDictionary, isLocale } from "@/i18n";
import { PricingPlans } from "@/components/PricingPlans";
import { Faq } from "@/components/Faq";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return { title: getDictionary(locale).meta.pricingTitle };
}

export default async function PricingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <>
      <PricingPlans dict={dict} />
      <Faq dict={dict} />
    </>
  );
}
