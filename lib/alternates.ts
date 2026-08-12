import { routing } from "@/i18n/routing";

const SITE_URL = "https://hopperline.com";

export function localeAlternates(pathname: string) {
  const languages: Record<string, string> = {};
  for (const locale of routing.locales) {
    const prefix = locale === routing.defaultLocale ? "" : `/${locale}`;
    languages[locale] = `${SITE_URL}${prefix}${pathname}`;
  }
  return { languages };
}
