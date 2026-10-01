import Link from "next/link";
import type { Metadata } from "next";
import { cases } from "./cases";

export const metadata: Metadata = {
  title: "Portfolio | SNB Events Agency",
  description:
    "Corporate events we have designed and produced in Barcelona and across Spain — offsites, brand activations, team building and company celebrations.",
};

export default function PortfolioPage() {
  return (
    <>
      <section className="pt-40 pb-16 px-6 border-b border-ink-border">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold text-gold tracking-[0.3em] uppercase mb-5">
            Portfolio
          </p>
          <h1 className="font-heading text-4xl md:text-6xl text-parchment leading-[1.05] tracking-tight mb-6">
            Our Events
          </h1>
          <p className="text-muted leading-relaxed max-w-xl">
            A closer look at events we have designed and produced — what the brief was, what we
            built, and how the day ran.
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {cases.map((study) => (
            <Link key={study.slug} href={`/portfolio/${study.slug}`} className="group">
              <div className="overflow-hidden aspect-[4/3] mb-5">
                <img
                  src={study.hero.src}
                  alt={study.hero.alt}
                  className={`w-full h-full object-cover ${
                    study.hero.position ?? "object-center"
                  } group-hover:scale-105 transition-transform duration-700`}
                />
              </div>
              <p className="text-[10px] font-semibold text-gold tracking-[0.3em] uppercase mb-2">
                {study.category} · {study.location}
              </p>
              <h2 className="font-heading text-2xl text-parchment mb-3 group-hover:text-gold transition-colors">
                {study.title}
              </h2>
              <p className="text-sm text-muted leading-relaxed max-w-lg">{study.intro}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
