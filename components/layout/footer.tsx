import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Wordmark } from "./wordmark";
import { Container } from "./container";
import { navLinks, legalLinks, siteConfig } from "@/lib/site-config";

export async function Footer() {
  const tNav = await getTranslations("Nav");
  const tFooter = await getTranslations("Footer");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-secondary/40">
      <Container className="py-14">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div className="sm:col-span-2 md:col-span-1">
            <Wordmark />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {tFooter("tagline")}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">
              {tFooter("product")}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {tNav(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">
              {tFooter("legal")}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {tFooter(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">
              {tFooter("contact")}
            </h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  {siteConfig.contactEmail}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. {tFooter("rights")}
          </p>
        </div>
      </Container>
    </footer>
  );
}
