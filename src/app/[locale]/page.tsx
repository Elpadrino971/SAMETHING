import { notFound } from "next/navigation";
import { getDictionary, isLocale } from "@/i18n";
import { Hero } from "@/components/Hero";
import { SocialProof } from "@/components/SocialProof";
import { Clipping } from "@/components/Clipping";
import { AiGeneration } from "@/components/AiGeneration";
import { BestSoftware } from "@/components/BestSoftware";
import { HowItWorks } from "@/components/HowItWorks";
import { Features } from "@/components/Features";
import { Comparison } from "@/components/Comparison";
import { WhyBest } from "@/components/WhyBest";
import { Testimonials } from "@/components/Testimonials";
import { FinalCta } from "@/components/FinalCta";
import { Faq } from "@/components/Faq";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: dict.faq.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Hero dict={dict} />
      <SocialProof dict={dict} />
      <Clipping dict={dict} />
      <AiGeneration dict={dict} />
      <BestSoftware dict={dict} />
      <HowItWorks dict={dict} />
      <Features dict={dict} />
      <Comparison dict={dict} />
      <WhyBest dict={dict} />
      <Testimonials dict={dict} />
      <FinalCta dict={dict} />
      <Faq dict={dict} />
    </>
  );
}
