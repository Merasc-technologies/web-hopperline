import { useTranslations } from "next-intl";
import { Container } from "@/components/layout/container";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  const t = useTranslations("Home");

  return (
    <section className="relative overflow-hidden border-b border-border">
      <Container className="grid gap-16 py-20 sm:py-28 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-12">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            {t("eyebrow")}
          </p>
          <h1 className="font-display font-display-soft mt-4 text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-[3.4rem]">
            {t("headlineLine1")}
            <br />
            {t("headlineLine2")}
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
            {t("subheadline")}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={siteConfig.registerUrl}
              className={buttonVariants({ variant: "primary", size: "lg" })}
            >
              {t("ctaPrimary")}
            </a>
            <a
              href="#how-it-works"
              className={buttonVariants({ variant: "ghost", size: "lg" })}
            >
              {t("ctaSecondary")} ↓
            </a>
          </div>
        </div>

        <div
          className="relative mx-auto h-[380px] w-full max-w-md sm:h-[420px]"
          aria-hidden="true"
        >
          {/* connecting stitch, drawn after both cards land */}
          <svg
            className="absolute left-[38%] top-[46%] h-24 w-40 text-foreground/25"
            viewBox="0 0 160 96"
            fill="none"
          >
            <path
              d="M4 10 C 60 10, 70 70, 150 80"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="6 7"
              pathLength={100}
              className="animate-stitch-draw"
            />
          </svg>

          {/* chat bubble */}
          <div className="animate-bubble-in absolute left-0 top-2 w-[15.5rem] rounded-2xl border border-border bg-card p-4 shadow-[0_10px_30px_-15px_rgba(23,38,42,0.25)] sm:w-64">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#25D366]" />
              <span className="text-xs font-medium text-muted-foreground">
                WhatsApp
              </span>
            </div>
            <div className="mt-3 space-y-2">
              <div className="ml-auto max-w-[85%] rounded-xl rounded-tr-sm bg-secondary px-3 py-2 text-sm text-foreground">
                {t("chat.customerMsg")}
              </div>
              <div className="mr-auto max-w-[85%] rounded-xl rounded-tl-sm bg-primary px-3 py-2 text-sm text-primary-foreground">
                {t("chat.aiMsg")}
              </div>
            </div>
          </div>

          {/* appointment ticket */}
          <div
            className="ticket-notch animate-ticket-in absolute bottom-2 right-0 w-56 rounded-xl border border-border bg-card p-5 pt-6 shadow-[0_16px_36px_-14px_rgba(23,38,42,0.35)] sm:w-60"
            style={{ "--notch-bg": "var(--background)" } as React.CSSProperties}
          >
            <span className="pin-dot" />
            <div className="flex items-center justify-between">
              <span className="font-mono text-[0.65rem] font-semibold tracking-widest text-brass-ink">
                {t("ticket.kicker")}
              </span>
              <span className="rounded-full bg-sage/15 px-2 py-0.5 font-mono text-[0.65rem] font-medium text-sage">
                {t("ticket.status")}
              </span>
            </div>
            <p className="mt-3 font-display text-lg font-semibold text-foreground">
              {t("ticket.service")}
            </p>
            <div className="mt-3 border-t border-dashed border-border pt-3 font-mono text-xs text-muted-foreground">
              <div className="flex justify-between py-0.5">
                <span>{t("ticket.stylistLabel")}</span>
                <span className="text-foreground">{t("ticket.stylist")}</span>
              </div>
              <div className="flex justify-between py-0.5">
                <span>{t("ticket.dateLabel")}</span>
                <span className="text-foreground">{t("ticket.date")}</span>
              </div>
              <div className="flex justify-between py-0.5">
                <span>{t("ticket.timeLabel")}</span>
                <span className="text-foreground">{t("ticket.time")}</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
