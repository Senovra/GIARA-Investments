import { cn } from "@/lib/utils";

interface BadgeProps {
  label: string;
  className?: string;
}

export default function Badge({ label, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-block rounded-full border border-accent/40 px-4 py-1.5 text-xs uppercase tracking-widest text-accent",
        className
      )}
    >
      {label}
    </span>
  );
}