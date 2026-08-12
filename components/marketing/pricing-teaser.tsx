import { useTranslations } from "next-intl";
import { Container } from "@/components/layout/container";
import { Link } from "@/i18n/navigation";
import { SectionHeading } from "./section-heading";
import { buttonVariants } from "@/components/ui/button";

export function PricingTeaser() {
  const t = useTranslations("Home.pricingTeaser");
  const tiers = t.raw("tiers") as { name: string; blurb: string }[];

  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          subtitle={t("subtitle")}
          align="center"
          className="mx-auto"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className="rounded-xl border border-border bg-card p-6 text-center"
            >
              <p className="font-display text-xl font-semibold text-foreground">
                {tier.name}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {tier.blurb}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/pricing"
            className={buttonVariants({ variant: "secondary", size: "md" })}
          >
            {t("cta")} →
          </Link>
        </div>
      </Container>
    </section>
  );
}
