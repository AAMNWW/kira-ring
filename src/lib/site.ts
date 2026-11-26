export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://kira-ring.vercel.app").replace(/\/$/, "");

export const SITE_NAME = "Kira AI Ring";

export const SITE_DESCRIPTION =
  "Kira AI Ring — an AI transcriber, voice recorder, 146-language translator and 24/7 health lab engineered into 4 grams of titanium, connected to your second brain.";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/#intelligence", label: "Intelligence" },
  { href: "/#health", label: "Health" },
  { href: "/#specs", label: "Specs" },
  { href: "/compare", label: "Compare" },
  { href: "/checkout", label: "Checkout" },
] as const;
