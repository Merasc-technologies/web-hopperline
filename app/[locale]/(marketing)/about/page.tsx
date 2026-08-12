import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/layout/container";
import { CtaBanner } from "@/components/marketing/cta-banner";
import { localeAlternates } from "@/lib/alternates";

export async function generateMetadata() {
  const t = await getTranslations("About");
  return { title: t("metaTitle"), alternates: localeAlternates("/about") };
}

export default function AboutPage() {
  const t = useTranslations("About");

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

      <section className="bg-secondary/50 py-20 sm:py-24">
        <Container className="grid gap-8 sm:grid-cols-3">
          <div className="relative rounded-lg border border-border bg-card p-6">
            <span className="pin-dot" />
            <h2 className="font-display text-lg font-semibold text-foreground">
              {t("originTitle")}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {t("originBody")}
            </p>
          </div>
          <div className="relative rounded-lg border border-border bg-card p-6">
            <span className="pin-dot" />
            <h2 className="font-display text-lg font-semibold text-foreground">
              {t("visionTitle")}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {t("visionBody")}
            </p>
          </div>
          <div className="relative rounded-lg border border-border bg-card p-6">
            <span className="pin-dot" />
            <h2 className="font-display text-lg font-semibold text-foreground">
              {t("whyNowTitle")}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {t("whyNowBody")}
            </p>
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
