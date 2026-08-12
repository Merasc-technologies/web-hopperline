import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

type WordmarkProps = {
  collapsed?: boolean;
  className?: string;
};

export function Wordmark({ collapsed = false, className }: WordmarkProps) {
  if (collapsed) {
    return (
      <Link
        href="/"
        aria-label="HopperLine"
        className={cn(
          "flex h-9 w-9 items-center justify-center rounded-lg bg-primary font-display text-lg font-semibold text-primary-foreground",
          className
        )}
      >
        H
      </Link>
    );
  }

  return (
    <Link
      href="/"
      aria-label="HopperLine"
      className={cn(
        "font-display text-xl font-semibold tracking-tight text-foreground",
        className
      )}
    >
      Hopper<span className="text-primary">Line</span>
    </Link>
  );
}
