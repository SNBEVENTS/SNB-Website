import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { cases, getCase } from "../cases";

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCase(slug);
  if (!study) return {};

  return {
    title: `${study.title} | SNB Events Agency`,
    description: study.intro,
    openGraph: {
      title: `${study.title} | SNB Events Agency`,
      description: study.intro,
      images: [{ url: study.hero.src }],
      type: "article",
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCase(slug);
  if (!study) notFound();

  const facts = [
    { label: "Client", value: study.client },
    { label: "Activity", value: study.activity },
    { label: "Location", value: study.location },
    { label: "Guests", value: study.guests },
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/portfolio"
            className="text-[11px] font-semibold text-muted tracking-[0.25em] uppercase hover:text-parchment transition-colors"
          >
            ← Portfolio
          </Link>
          <p className="text-[11px] font-semibold text-gold tracking-[0.3em] uppercase mt-8 mb-4">
            {study.category}
          </p>
          <h1 className="font-heading text-4xl md:text-6xl text-parchment leading-[1.05] tracking-tight mb-6">
            {study.title}
          </h1>
          <p className="text-muted leading-relaxed text-base md:text-lg max-w-2xl">
            {study.intro}
          </p>
        </div>
      </section>

      <div className="w-full h-[55vh] md:h-[75vh] overflow-hidden">
        <img
          src={study.hero.src}
          alt={study.hero.alt}
          className={`w-full h-full object-cover ${study.hero.position ?? "object-center"}`}
        />
      </div>

      {/* Facts */}
      <section className="py-12 px-6 border-b border-ink-border">
        <dl className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {facts.map((fact) => (
            <div key={fact.label}>
              <dt className="text-[10px] font-semibold text-muted tracking-[0.3em] uppercase mb-2">
                {fact.label}
              </dt>
              <dd className="font-heading text-xl text-parchment">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Narrative + objectives */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-7">
            <p className="text-[11px] font-semibold text-muted tracking-[0.3em] uppercase mb-6">
              The Event
            </p>
            {study.description.map((para) => (
              <p key={para.slice(0, 32)} className="text-muted leading-relaxed mb-5">
                {para}
              </p>
            ))}
          </div>

          <div className="md:col-span-5">
            <p className="text-[11px] font-semibold text-muted tracking-[0.3em] uppercase mb-6">
              What It Set Out to Do
            </p>
            <ul className="divide-y divide-ink-border border-t border-ink-border">
              {study.objectives.map((objective) => (
                <li key={objective} className="py-5 text-sm text-muted leading-relaxed">
                  {objective}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Client quote */}
      {study.testimonial && (
        <section className="pb-16 md:pb-24 px-6">
          <figure className="max-w-7xl mx-auto border-t border-ink-border pt-12">
            <blockquote className="font-heading text-xl md:text-3xl text-parchment italic leading-relaxed max-w-4xl">
              &ldquo;{study.testimonial.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-8">
              <p className="text-sm font-semibold text-parchment">{study.testimonial.name}</p>
              <p className="text-[11px] text-muted tracking-wide mt-1">
                {study.testimonial.role}
              </p>
            </figcaption>
          </figure>
        </section>
      )}

      {/* Gallery */}
      <section className="pb-16 md:pb-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          {study.gallery.map((shot) => (
            <div key={shot.src} className="overflow-hidden aspect-[3/4]">
              <img
                src={shot.src}
                alt={shot.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 px-6 bg-ink relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={study.hero.src}
            alt=""
            className="w-full h-full object-cover opacity-15"
            aria-hidden="true"
          />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <p className="text-[11px] font-semibold text-gold tracking-[0.4em] uppercase mb-8">
            Let&apos;s Work Together
          </p>
          <h2 className="font-heading text-[clamp(2.5rem,6vw,5rem)] text-surface leading-[0.95] tracking-tight mb-12 max-w-3xl">
            Planning something like this?
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-gold px-8 py-4 text-[11px] font-semibold text-ink tracking-[0.3em] uppercase hover:bg-gold-light transition-colors"
          >
            Start a Conversation →
          </Link>
        </div>
      </section>
    </>
  );
}
