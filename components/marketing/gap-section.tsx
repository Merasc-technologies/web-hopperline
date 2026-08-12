import { useTranslations } from "next-intl";
import { Container } from "@/components/layout/container";

export function GapSection() {
  const t = useTranslations("Home.gap");

  return (
    <section className="py-20 sm:py-24">
      <Container className="max-w-2xl text-center">
        <span className="mx-auto block h-1 w-10 rounded-full bg-brass" />
        <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-primary">
          {t("eyebrow")}
        </p>
        <h2 className="font-display font-display-soft mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {t("title")}
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
          {t("body")}
        </p>
      </Container>
    </section>
  );
}
