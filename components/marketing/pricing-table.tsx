import { Check } from "lucide-react";
import { useTranslations } from "next-intl";
import { siteConfig } from "@/lib/site-config";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Tier = {
  name: string;
  price: string;
  blurb: string;
  highlighted?: boolean;
  features: string[];
};

export function PricingTable() {
  const t = useTranslations("Pricing");
  const tiers = t.raw("tiers") as Tier[];

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {tiers.map((tier) => (
        <div
          key={tier.name}
          className={cn(
            "flex flex-col rounded-2xl border bg-card p-7",
            tier.highlighted
              ? "border-primary shadow-[0_20px_44px_-24px_rgba(31,92,102,0.45)] lg:-translate-y-2"
              : "border-border"
          )}
        >
          {tier.highlighted && (
            <span className="mb-4 inline-flex w-fit items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              {t("popularBadge")}
            </span>
          )}
          <p className="font-display text-xl font-semibold text-foreground">
            {tier.name}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">{tier.blurb}</p>
          <p className="mt-5 flex items-baseline gap-1">
            <span className="font-display text-3xl font-semibold text-foreground">
              ₺{tier.price}
            </span>
            <span className="text-sm text-muted-foreground">
              {t("monthly")}
            </span>
          </p>

          <ul className="mt-6 flex-1 space-y-3">
            {tier.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2.5 text-sm text-muted-foreground"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-sage" />
                {feature}
              </li>
            ))}
          </ul>

          <a
            href={siteConfig.registerUrl}
            className={buttonVariants({
              variant: tier.highlighted ? "primary" : "secondary",
              size: "md",
              className: "mt-7 w-full",
            })}
          >
            {t("cta")}
          </a>
        </div>
      ))}
    </div>
  );
}
