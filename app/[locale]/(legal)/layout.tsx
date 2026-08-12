export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="bg-background">{children}</div>;
}
