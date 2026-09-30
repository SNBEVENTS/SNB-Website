import Link from "next/link";

const services = [
  {
    n: "01",
    title: "Corporate Offsites & Retreats",
    badge: "DMC Barcelona",
    tagline: "Strategy. Alignment. Impact.",
    description:
      "We design and produce corporate offsites and retreats that go beyond the hotel conference room. Whether you're taking your leadership team off-grid to reset and re-align, or bringing together a global organisation for a company-wide summit, we build events that create the conditions for real strategic work.",
    details: [
      "Leadership summits",
      "Company-wide conferences",
      "Strategic planning offsites",
      "Board & executive retreats",
    ],
    image: "/villa-rosa.jpg",
    imagePosition: "object-[center_35%]",
  },
  {
    n: "02",
    title: "Brand Activations",
    badge: null,
    tagline: "Make the market take notice.",
    description:
      "A great brand launch is a statement. It sets the tone for everything that follows. We create launch experiences that are bold, intentional, and built for impact — from intimate media previews to large-scale consumer activations. A brand event isn't just an event; it's a positioning exercise.",
    details: [
      "Product launches",
      "Brand activations",
      "Press & media events",
      "Consumer experiences",
    ],
    image: "/brand-activation-fomo.jpg",
    imagePosition: "object-[center_55%]",
  },
  {
    n: "03",
    title: "Team Building & Experiences",
    badge: null,
    tagline: "Invest in your people.",
    description:
      "Culture doesn't build itself — it's built in moments. We create team building events and shared experiences that reconnect people, rebuild momentum, and reinforce what your organisation values. From hands-on activity days to full-programme team experiences, we design environments that bring out the best in your people.",
    details: [
      "Team building days",
      "Activity & challenge events",
      "Culture & values sessions",
      "Employee milestone celebrations",
    ],
    image: "/team-building.jpg",
    imagePosition: "object-[center_55%]",
  },
  {
    n: "04",
    title: "Corporate & Company Events",
    badge: null,
    tagline: "From summer parties to end-of-year celebrations.",
    description:
      "Not every event needs to be a landmark moment — but every event deserves to be done well. We help local businesses and growing companies organise standout staff parties, summer socials, and end-of-year celebrations. Whether you're a team of 20 or 200, we handle the planning and logistics so you can show up and enjoy it.",
    details: [
      "Summer & seasonal parties",
      "End-of-year celebrations",
      "Company socials & away days",
      "Local business events",
    ],
    image: "/Hero.jpg",
    imagePosition: "object-center",
  },
];

export default function Services() {
  return (
    <>
      {/* Hero — video background */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video.mov" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-ink/55" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 md:pb-28 w-full">
          <p className="text-[11px] font-semibold text-surface/60 tracking-[0.3em] uppercase mb-8">
            Services
          </p>
          <h1 className="font-heading text-[clamp(3rem,7vw,7rem)] text-surface leading-[0.95] tracking-tight mb-10 max-w-4xl">
            What We Do
          </h1>
          <p className="text-xl text-surface/70 max-w-2xl leading-relaxed">
            You tell us what you want — we handle every last detail and make it brilliant.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto divide-y divide-ink-border border-b border-ink-border">
          {services.map((service) => (
            <div key={service.n} className="py-20 md:py-28">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
                {/* Left column — number, title, tagline, photo */}
                <div className="md:col-span-4">
                  <p className="text-[11px] text-gold font-semibold tracking-[0.3em] uppercase mb-4">
                    {service.n}
                    {service.badge && (
                      <span className="ml-3 border border-gold/50 px-2 py-0.5 text-[10px]">
                        {service.badge}
                      </span>
                    )}
                  </p>
                  <h2 className="font-heading text-2xl md:text-3xl text-parchment mb-3 leading-[1.1]">
                    {service.title}
                  </h2>
                  <p className="text-sm text-muted italic mb-8">{service.tagline}</p>

                  {service.image && (
                    <div className="overflow-hidden h-52 md:h-64">
                      <img
                        src={service.image}
                        alt={service.title}
                        className={`w-full h-full object-cover ${service.imagePosition}`}
                      />
                    </div>
                  )}
                </div>

                {/* Right column — description, details */}
                <div className="md:col-span-8">
                  <p className="text-muted leading-relaxed mb-10 text-base md:text-lg">
                    {service.description}
                  </p>
                  <div className="border-t border-ink-border pt-8">
                    <p className="text-[11px] font-semibold text-muted tracking-[0.25em] uppercase mb-5">
                      Including
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.details.map((d) => (
                        <div key={d} className="flex items-center gap-4 text-sm text-muted">
                          <span className="w-1 h-1 bg-gold flex-shrink-0" />
                          {d}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-36 md:py-48 px-6 bg-ink relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/brand-activation.jpg"
            alt=""
            className="w-full h-full object-cover opacity-15"
            aria-hidden="true"
          />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <p className="text-[11px] font-semibold text-gold tracking-[0.4em] uppercase mb-8">
            Have Something in Mind?
          </p>
          <h2 className="font-heading text-[clamp(2.5rem,6vw,6rem)] text-surface leading-[0.95] tracking-tight mb-14 max-w-3xl">
            Let&apos;s Build Something Extraordinary
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 text-[11px] font-semibold text-surface tracking-[0.3em] uppercase border-b border-gold pb-1 hover:text-gold transition-colors"
          >
            Enquire Now →
          </Link>
        </div>
      </section>
    </>
  );
}
