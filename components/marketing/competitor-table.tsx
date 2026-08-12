import { Check, X } from "lucide-react";
import { useTranslations } from "next-intl";

type Row = {
  name: string;
  whatsapp: boolean;
  instagram: boolean;
  ai: boolean;
  selfServe: boolean;
};

function Mark({ ok }: { ok: boolean }) {
  return ok ? (
    <Check className="mx-auto h-4 w-4 text-sage" aria-label="yes" />
  ) : (
    <X className="mx-auto h-4 w-4 text-muted-foreground/40" aria-label="no" />
  );
}

export function CompetitorTable() {
  const t = useTranslations("Research.table");
  const headers = t.raw("headers") as string[];
  const rows = t.raw("rows") as Row[];

  return (
    <div className="overflow-x-auto rounded-xl border border-border">
      <table className="w-full min-w-[560px] border-collapse text-sm">
        <thead>
          <tr className="border-b border-border bg-secondary/60">
            {headers.map((h, i) => (
              <th
                key={i}
                className={`px-4 py-3 font-medium text-muted-foreground ${
                  i === 0 ? "text-left" : "text-center"
                }`}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr
              key={row.name}
              className={`border-b border-border last:border-b-0 ${
                row.name === "HopperLine" ? "bg-primary/5" : "bg-card"
              }`}
            >
              <td className="px-4 py-3 font-medium text-foreground">
                {row.name}
              </td>
              <td className="px-4 py-3">
                <Mark ok={row.whatsapp} />
              </td>
              <td className="px-4 py-3">
                <Mark ok={row.instagram} />
              </td>
              <td className="px-4 py-3">
                <Mark ok={row.ai} />
              </td>
              <td className="px-4 py-3">
                <Mark ok={row.selfServe} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
