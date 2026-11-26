"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/site";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const pathname = usePathname();
  // The menu is "open for" a given path, so it closes by itself on navigation.
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;
  const setOpen = (v: boolean | ((o: boolean) => boolean)) =>
    setOpenPath((typeof v === "function" ? v(open) : v) ? pathname : null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenPath(null);
    addEventListener("keydown", onKey);
    return () => removeEventListener("keydown", onKey);
  }, []);

  const isActive = (href: string) => !href.includes("#") && href === pathname;

  return (
    <nav className={`site-nav${open ? " open" : ""}`} aria-label="Main">
      <div className="nav-inner">
        <Link className="logo" href="/" aria-label="Kira ai — home">
          <Image className="logo-img logo-l" src="/images/kira-logo-light.webp" alt="Kira ai" width={88} height={24} loading="eager" />
          <Image className="logo-img logo-d" src="/images/kira-logo-dark.webp" alt="" aria-hidden="true" width={88} height={24} loading="eager" />
        </Link>

        <ul className="nav-links" id="nav-links">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                aria-current={isActive(l.href) ? "page" : undefined}
                className={isActive(l.href) ? "active" : undefined}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="nav-right">
          <ThemeToggle />
          <Link className="nav-cta" href="/#buy">
            Pre-order
          </Link>
          <button
            type="button"
            className="nav-burger"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="nav-links"
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </nav>
  );
}
