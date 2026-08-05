import { createNavigation } from "next-intl/navigation";

export const locales = ["ba", "en"] as const;

export const { Link, redirect, usePathname, useRouter } =
  createNavigation({
    locales,
  });