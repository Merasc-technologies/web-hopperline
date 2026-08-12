import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/layout/container";
import { PricingTable } from "@/components/marketing/pricing-table";
import { SectionHeading } from "@/components/marketing/section-heading";
import { localeAlternates } from "@/lib/alternates";

export async function generateMetadata() {
  const t = await getTranslations("Pricing");
  return { title: t("metaTitle"), alternates: localeAlternates("/pricing") };
}

export default function PricingPage() {
  const t = useTranslations("Pricing");
  const faq = t.raw("faq") as { q: string; a: string }[];

  return (
    <>
      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("title")}
            subtitle={t("subtitle")}
            align="center"
            className="mx-auto"
          />

          <div className="mt-14">
            <PricingTable />
          </div>

          <p className="mx-auto mt-8 max-w-2xl text-center text-xs text-muted-foreground">
            {t("disclaimer")}
          </p>
        </Container>
      </section>

      <section className="bg-secondary/50 py-20 sm:py-24">
        <Container className="max-w-2xl">
          <h2 className="font-display text-2xl font-semibold text-foreground">
            {t("faqTitle")}
          </h2>
          <div className="mt-8 space-y-6">
            {faq.map((item) => (
              <div
                key={item.q}
                className="border-b border-border pb-6 last:border-b-0"
              >
                <p className="font-medium text-foreground">{item.q}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
