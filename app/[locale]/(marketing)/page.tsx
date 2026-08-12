import { getTranslations } from "next-intl/server";
import { localeAlternates } from "@/lib/alternates";
import { Hero } from "@/components/marketing/hero";
import { ProblemSection } from "@/components/marketing/problem-section";
import { HowItWorks } from "@/components/marketing/how-it-works";
import { AudienceSection } from "@/components/marketing/audience-section";
import { GapSection } from "@/components/marketing/gap-section";
import { PricingTeaser } from "@/components/marketing/pricing-teaser";
import { CtaBanner } from "@/components/marketing/cta-banner";

export async function generateMetadata() {
  const t = await getTranslations("Home");
  return { title: t("metaTitle"), alternates: localeAlternates("/") };
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <HowItWorks />
      <AudienceSection />
      <GapSection />
      <PricingTeaser />
      <CtaBanner />
    </>
  );
}
