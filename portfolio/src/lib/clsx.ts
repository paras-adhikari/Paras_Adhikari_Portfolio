type ClassValue = string | number | boolean | null | undefined;

/** Minimal `clsx`-style helper: joins truthy class values with a space. */
export default function clsx(...values: ClassValue[]): string {
  return values.filter(Boolean).join(" ");
}
