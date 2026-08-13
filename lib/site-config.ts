const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://app.hopperline.com";

export const siteConfig = {
  name: "HopperLine",
  appUrl: APP_URL,
  loginUrl: `${APP_URL}/login`,
  registerUrl: `${APP_URL}/register`,
  contactEmail: "info@hopperline.com",
  privacyEmail: "info@hopperline.com",
};

export const navLinks = [
  { href: "/", key: "home" },
  { href: "/about", key: "about" },
  { href: "/research", key: "research" },
  { href: "/pricing", key: "pricing" },
] as const;

export const legalLinks = [
  { href: "/privacy-policy", key: "privacyPolicy" },
  { href: "/terms-of-service", key: "termsOfService" },
  { href: "/data-deletion", key: "dataDeletion" },
] as const;
