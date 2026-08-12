import { useTranslations } from "next-intl";
import { Container } from "@/components/layout/container";
import { siteConfig } from "@/lib/site-config";

export function CtaBanner() {
  const t = useTranslations("Home.finalCta");

  return (
    <section className="bg-teal-deep py-20 sm:py-24">
      <Container className="max-w-xl text-center">
        <h2 className="font-display font-display-soft text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {t("title")}
        </h2>
        <p className="mt-4 text-lg text-white/70">{t("subtitle")}</p>
        <a
          href={siteConfig.registerUrl}
          className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brass px-8 text-base font-medium text-teal-deep transition-colors hover:bg-brass/90"
        >
          {t("cta")}
        </a>
      </Container>
    </section>
  );
}
