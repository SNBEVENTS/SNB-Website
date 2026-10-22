"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "@/public/logo.png";

const links = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

function subscribeToScroll(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  window.addEventListener("resize", onChange);
  return () => {
    window.removeEventListener("scroll", onChange);
    window.removeEventListener("resize", onChange);
  };
}

// A page marks its full-bleed hero with data-hero. While that hero is still
// behind the bar, the bar goes transparent so the hero runs to the very top of
// the screen. Measuring against the header's own height rather than a constant
// keeps this correct if the logo size ever changes.
function isOverHero() {
  const hero = document.querySelector("[data-hero]");
  const header = document.querySelector("header");
  if (!hero || !header) return false;
  return hero.getBoundingClientRect().bottom > header.offsetHeight;
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [lastPathname, setLastPathname] = useState(pathname);

  const overHero = useSyncExternalStore(
    subscribeToScroll,
    isOverHero,
    // Server and first paint: the home page is the one with a hero, and it is
    // rendered at the top, so the bar starts transparent there and solid
    // everywhere else. Anything else would flash the wrong colour.
    () => pathname === "/"
  );

  // Solid whenever the hero is not behind the bar — and always while the mobile
  // menu is open, or the panel's links would sit on moving video.
  const solid = !overHero || open;

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
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300 ${
        solid
          ? "bg-surface/95 backdrop-blur-sm border-ink-border"
          : "bg-transparent border-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
          <Image
            src={logo}
            alt="SNB Event Agency"
            className={`h-24 w-auto object-contain transition-[filter] duration-300 ${
              // brightness-0 then invert paints the whole mark white rather than
              // inverting its colours, which would turn the strawberry cyan.
              solid ? "mix-blend-multiply" : "brightness-0 invert"
            }`}
            priority
          />
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[11px] font-semibold tracking-[0.2em] uppercase transition-colors ${
                solid
                  ? "text-muted hover:text-parchment"
                  : "text-surface/85 hover:text-surface"
              }`}
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
            className={`block h-px w-6 transition-all duration-300 ${
              solid ? "bg-parchment" : "bg-surface"
            } ${open ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span
            className={`block h-px w-6 transition-all duration-300 ${
              solid ? "bg-parchment" : "bg-surface"
            } ${open ? "opacity-0" : "opacity-100"}`}
          />
          <span
            className={`block h-px transition-all duration-300 ${
              solid ? "bg-parchment" : "bg-surface"
            } ${open ? "w-6 -translate-y-[7px] -rotate-45" : "w-4"}`}
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
