import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | SNB Events Agency Barcelona",
  description:
    "Meet the team behind SNB Events Agency — your full-service corporate events partner in Barcelona, planning and running events across Spain.",
  // openGraph replaces the root's wholesale rather than merging into it, so
  // url, siteName and the image are repeated here or they would be dropped.
  openGraph: {
    title: "About Us | SNB Events Agency Barcelona",
    description:
      "Meet the team behind SNB Events Agency — your full-service corporate events partner in Barcelona, planning and running events across Spain.",
    url: "https://www.snbagency.com/about",
    siteName: "SNB Events Agency",
    images: [{ url: "/agency.JPG", width: 1200, height: 630, alt: "SNB Events Agency" }],
    type: "website",
  },
};

const steps = [
  {
    n: "01",
    title: "Discovery",
    desc: "We listen first. Understanding your objectives, your audience, and your constraints is the foundation of everything we build.",
  },
  {
    n: "02",
    title: "Concept & Design",
    desc: "We develop a creative and logistical concept tailored to your goals — venues, formats, experiences, considered from the ground up.",
  },
  {
    n: "03",
    title: "Production",
    desc: "We manage every supplier, every detail, and every timeline. You stay informed without being overwhelmed.",
  },
  {
    n: "04",
    title: "Delivery",
    desc: "We run the event with precision and calm — so your team can be present and your guests experience it fully.",
  },
];

export default function About() {
  return (
    <>
      {/* Hero — with full team photo placeholder */}
      <section className="pt-40 pb-0 px-6">
        <div className="max-w-7xl mx-auto mb-12">
          <p className="text-[11px] font-semibold text-muted tracking-[0.3em] uppercase mb-8">
            About SNB Events Agency
          </p>
          {/* Headline and intro side by side on desktop, stacked on a phone.
              items-end sets the intro on the headline's last line rather than
              floating it against the top of a three-line block. */}
          <div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-12">
            {/* flex rather than a 12-column grid: a 7-column track was 692px
                wide while the headline only needs ~290px, which pushed the
                intro far out to the right. As a flex item the headline is only
                as wide as its longest line, so the intro sits right beside it. */}
            <h1 className="md:flex-none font-heading text-[clamp(3rem,6vw,6rem)] text-parchment leading-[0.95] tracking-tight">
              We Plan It.<br />We Run It.<br /><em>You Love It.</em>
            </h1>
            <p className="text-xl text-muted leading-relaxed md:max-w-2xl md:pb-2">
              SNB Events Agency is your full-service corporate events partner in Barcelona. From the
              first brief to the last guest leaving, we handle the venue, the suppliers, the
              production and every piece of logistics in between. We have spent years delivering
              offsites, conferences, launches and celebrations across Catalonia and the rest of
              Spain, for teams of twenty and for companies of several hundred — so you can focus on
              showing up and enjoying it.
            </p>
          </div>
        </div>

        <div className="w-full h-[50vh] md:h-[70vh] overflow-hidden">
          <img
            src="/agency.JPG"
            alt="SNB Event Agency neon sign"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </section>

      {/* Story */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          <div className="flex flex-col gap-8">
            <div className="overflow-hidden">
              <img
                src="/team-duo.jpg"
                alt="SNB Events Agency team"
                className="w-full h-[480px] md:h-[580px] object-cover object-center"
              />
            </div>
            <blockquote className="border-l-2 border-gold pl-8">
              <p className="font-heading text-xl md:text-2xl text-parchment italic leading-relaxed mb-4">
                &ldquo;Every event should do something. Create alignment. Shift culture. Launch a brand. Move people.&rdquo;
              </p>
              <cite className="block text-[11px] text-muted not-italic tracking-[0.2em] uppercase">
                — SNB Events Agency
              </cite>
            </blockquote>
          </div>

          <div className="md:pt-16">
            <h2 className="font-heading text-3xl md:text-5xl text-parchment leading-[1.1] mb-10">
              Built on Precision.<br />Driven by Results.
            </h2>
            <div className="space-y-6 text-muted leading-relaxed">
              <p>
                SNB Events Agency was founded on a simple conviction: great corporate events
                don&apos;t happen by accident. They require a team of specialists who understand
                business, understand people, and are obsessive about craft.
              </p>
              <p>
                From the earliest conversations with a client to the last guest leaving the room,
                we are fully committed to every detail. We take time to understand your objectives,
                your audience, and what success actually means to you — then we build an experience
                that delivers it.
              </p>
              <p>
                We work with leading brands, global businesses, and ambitious teams across
                industries. Our client list is built on trust, not transactions.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 border border-ink-border">
              {[
                { n: "10+", label: "Years of experience" },
                { n: "4", label: "Languages spoken" },
                { n: "100%", label: "Bespoke events" },
                { n: "BCN", label: "Based in Barcelona" },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className={`p-8 ${i % 2 === 0 ? "border-r border-ink-border" : ""} ${i < 2 ? "border-b border-ink-border" : ""}`}
                >
                  <div className="font-heading text-3xl text-parchment mb-1">{stat.n}</div>
                  <div className="text-[11px] text-muted tracking-[0.15em] uppercase">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Photo strip */}
      <div className="w-full h-[50vh] md:h-[65vh] overflow-hidden">
        <img
          src="/about-banner.jpg"
          alt="SNB Events Agency event setup"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* From Brief to Brilliant — with photo */}
      <section className="py-24 md:py-32 px-6 bg-ink-raised">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
            <div className="md:sticky md:top-32">
              <p className="text-[11px] font-semibold text-muted tracking-[0.3em] uppercase mb-8">
                How We Work
              </p>
              <h2 className="font-heading text-3xl md:text-5xl text-parchment leading-[1.1] mb-10">
                From Brief<br />to Brilliant
              </h2>

              <div className="overflow-hidden h-56 md:h-72">
                <img
                  src="/cheers.jpg"
                  alt="Celebration at an SNB Events Agency event"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            <div className="divide-y divide-ink-border border-y border-ink-border">
              {steps.map((step) => (
                <div key={step.n} className="py-10 flex gap-8">
                  <span className="text-[11px] text-gold font-semibold tracking-widest mt-1 flex-shrink-0 w-8">
                    {step.n}
                  </span>
                  <div>
                    <div className="font-heading text-xl text-parchment mb-3">{step.title}</div>
                    <p className="text-sm text-muted leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-36 px-6 bg-ink relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/team-duo.jpg"
            alt=""
            className="w-full h-full object-cover object-center opacity-10"
            aria-hidden="true"
          />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <p className="text-[11px] font-semibold text-gold tracking-[0.4em] uppercase mb-8">
            Work With Us
          </p>
          <h2 className="font-heading text-[clamp(2.5rem,6vw,6rem)] text-surface leading-[0.95] tracking-tight mb-14 max-w-2xl">
            Let&apos;s Work Together
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 text-[11px] font-semibold text-surface tracking-[0.3em] uppercase border-b border-gold pb-1 hover:text-gold transition-colors"
          >
            Get in Touch →
          </Link>
        </div>
      </section>
    </>
  );
}
