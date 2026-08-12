import { Container } from "@/components/layout/container";

export function LegalPage({
  title,
  lastUpdated,
  children,
}: {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}) {
  return (
    <Container className="max-w-3xl py-16 sm:py-24">
      <h1 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">{lastUpdated}</p>
      <div className="prose-legal mt-10 space-y-8">{children}</div>
    </Container>
  );
}
