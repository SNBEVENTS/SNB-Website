"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "@/public/logo.png";

const links = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [lastPathname, setLastPathname] = useState(pathname);

  // Close on route change, so the panel never outlives the page it opened on.
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/95 backdrop-blur-sm border-b border-ink-border">
      <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
          <Image
            src={logo}
            alt="SNB Event Agency"
            className="h-24 w-auto object-contain mix-blend-multiply"
            priority
          />
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[11px] font-semibold text-muted hover:text-parchment transition-colors tracking-[0.2em] uppercase"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="text-[11px] font-semibold text-[#f72585] tracking-[0.2em] uppercase hover:opacity-75 transition-opacity"
          >
            Get in Touch →
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="md:hidden flex w-11 h-11 -mr-3 flex-col items-end justify-center gap-1.5 cursor-pointer"
        >
          <span
            className={`block h-px w-6 bg-parchment transition-transform duration-300 ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-parchment transition-opacity duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-px bg-parchment transition-all duration-300 ${
              open ? "w-6 -translate-y-[7px] -rotate-45" : "w-4"
            }`}
          />
        </button>
      </nav>

      <div
        id="mobile-menu"
        hidden={!open}
        className="md:hidden border-t border-ink-border bg-surface"
      >
        <div className="flex flex-col px-6 py-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-4 text-[11px] font-semibold text-muted hover:text-parchment transition-colors tracking-[0.2em] uppercase"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="py-4 text-[11px] font-semibold text-[#f72585] tracking-[0.2em] uppercase hover:opacity-75 transition-opacity"
          >
            Get in Touch →
          </Link>
        </div>
      </div>
    </header>
  );
}
