import Link from "next/link";
import Image from "next/image";

const links = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
];

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/95 backdrop-blur-sm border-b border-ink-border">
      <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="SNB Event Agency"
            width={240}
            height={120}
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

        <div className="md:hidden flex flex-col gap-1.5 cursor-pointer">
          <span className="block w-6 h-px bg-parchment" />
          <span className="block w-6 h-px bg-parchment" />
          <span className="block w-4 h-px bg-parchment" />
        </div>
      </nav>
    </header>
  );
}
