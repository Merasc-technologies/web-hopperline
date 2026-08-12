import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/layout/container";
import { CompetitorTable } from "@/components/marketing/competitor-table";
import { CtaBanner } from "@/components/marketing/cta-banner";
import { localeAlternates } from "@/lib/alternates";

export async function generateMetadata() {
  const t = await getTranslations("Research");
  return { title: t("metaTitle"), alternates: localeAlternates("/research") };
}

export default function ResearchPage() {
  const t = useTranslations("Research");

  return (
    <>
      <section className="py-20 sm:py-28">
        <Container className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            {t("eyebrow")}
          </p>
          <h1 className="font-display font-display-soft mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            {t("title")}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {t("intro")}
          </p>
        </Container>
      </section>

      <section className="pb-20 sm:pb-24">
        <Container className="max-w-3xl">
          <h2 className="font-display text-2xl font-semibold text-foreground">
            {t("tableTitle")}
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            {t("tableNote")}
          </p>
          <div className="mt-6">
            <CompetitorTable />
          </div>
        </Container>
      </section>

      <section className="bg-secondary/50 py-20 sm:py-24">
        <Container className="max-w-3xl">
          <h2 className="font-display text-2xl font-semibold text-foreground">
            {t("gapTitle")}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            {t("gapBody")}
          </p>

          <h2 className="mt-10 font-display text-2xl font-semibold text-foreground">
            {t("meaningTitle")}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            {t("meaningBody")}
          </p>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
