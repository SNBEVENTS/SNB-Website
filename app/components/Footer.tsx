import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-ink-border">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-20">
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex mb-5">
              <Image
                src="/logo.png"
                alt="SNB Event Agency"
                width={280}
                height={140}
                className="h-28 w-auto object-contain mix-blend-multiply"
              />
            </Link>
            <p className="text-sm text-muted leading-relaxed max-w-sm mb-8">
              We design, produce, and execute high-end corporate events that drive real business impact. Based in Barcelona, working across Spain and beyond.
            </p>
            <a
              href="mailto:info@strawsnberries.com"
              className="text-[11px] font-semibold text-gold tracking-[0.2em] uppercase hover:text-gold-light transition-colors"
            >
              info@strawsnberries.com
            </a>
          </div>

          <div>
            <div className="text-[11px] font-semibold text-muted tracking-[0.25em] uppercase mb-6">
              Navigation
            </div>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-parchment transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[11px] font-semibold text-muted tracking-[0.25em] uppercase mb-6">
              Contact
            </div>
            <ul className="space-y-3 text-sm text-muted">
              <li>Barcelona, Spain</li>
              <li>
                <a
                  href="https://wa.me/34936096253"
                  className="hover:text-parchment transition-colors"
                >
                  +34 936 096 253
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@strawsnberries.com"
                  className="hover:text-parchment transition-colors"
                >
                  info@strawsnberries.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-ink-border pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-muted">
            © 2026 SNB Events Agency. All rights reserved.
          </p>
          <p className="text-[10px] text-muted tracking-[0.25em] uppercase">
            Corporate Events · Barcelona & All of Spain
          </p>
        </div>
      </div>
    </footer>
  );
}
