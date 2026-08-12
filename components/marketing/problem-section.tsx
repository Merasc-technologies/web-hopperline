import { useTranslations } from "next-intl";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "./section-heading";

const rotations = ["-rotate-1", "rotate-1", "-rotate-1"];

export function ProblemSection() {
  const t = useTranslations("Home.problem");
  const items = t.raw("items") as { title: string; body: string }[];

  return (
    <section className="bg-secondary/50 py-20 sm:py-24">
      <Container>
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} />

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {items.map((item, i) => (
            <div
              key={item.title}
              className={`relative rounded-lg border border-border bg-card p-6 shadow-[0_8px_20px_-14px_rgba(23,38,42,0.3)] ${rotations[i % rotations.length]}`}
            >
              <span className="pin-dot" />
              <h3 className="font-display text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
