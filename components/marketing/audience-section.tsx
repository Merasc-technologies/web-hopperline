import { useTranslations } from "next-intl";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "./section-heading";

const swatches = [
  "bg-primary",
  "bg-brass",
  "bg-sage",
  "bg-[#B98A73]",
  "bg-[#7A8FA6]",
];

export function AudienceSection() {
  const t = useTranslations("Home.audience");
  const items = t.raw("items") as string[];

  return (
    <section className="bg-secondary/50 py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          align="center"
          className="mx-auto"
        />

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {items.map((item, i) => (
            <span
              key={item}
              className="flex items-center gap-2.5 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground shadow-[0_6px_16px_-12px_rgba(23,38,42,0.4)]"
            >
              <span
                className={`h-2.5 w-2.5 rounded-full ${swatches[i % swatches.length]}`}
              />
              {item}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
