"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { Wordmark } from "./wordmark";
import { LocaleSwitcher } from "./locale-switcher";
import { Container } from "./container";
import { buttonVariants } from "@/components/ui/button";
import { navLinks, siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Header() {
  const t = useTranslations("Nav");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/85 backdrop-blur-sm">
      <Container className="flex h-16 items-center justify-between">
        <Wordmark />

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  active
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {t(link.key)}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LocaleSwitcher />
          <a
            href={siteConfig.loginUrl}
            className={buttonVariants({ variant: "ghost", size: "md" })}
          >
            {t("login")}
          </a>
          <a
            href={siteConfig.registerUrl}
            className={buttonVariants({ variant: "primary", size: "md" })}
          >
            {t("getStarted")}
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-full text-foreground md:hidden"
          aria-label="Menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-border/80 bg-background md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-secondary"
              >
                {t(link.key)}
              </Link>
            ))}
            <div className="mt-3 flex items-center gap-3 px-3">
              <LocaleSwitcher />
            </div>
            <div className="mt-3 flex flex-col gap-2 px-3">
              <a
                href={siteConfig.loginUrl}
                className={buttonVariants({
                  variant: "secondary",
                  size: "md",
                  className: "w-full",
                })}
              >
                {t("login")}
              </a>
              <a
                href={siteConfig.registerUrl}
                className={buttonVariants({
                  variant: "primary",
                  size: "md",
                  className: "w-full",
                })}
              >
                {t("getStarted")}
              </a>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
