import { useTranslations } from "next-intl";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "./section-heading";

export function HowItWorks() {
  const t = useTranslations("Home.howItWorks");
  const steps = t.raw("steps") as { title: string; body: string }[];

  return (
    <section id="how-it-works" className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          subtitle={t("subtitle")}
        />

        <div className="relative mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <div className="stitch-line absolute top-6 right-0 left-0 hidden lg:block" />

          {steps.map((step, i) => (
            <div key={step.title} className="relative">
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary bg-background font-mono text-sm font-semibold text-primary">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
