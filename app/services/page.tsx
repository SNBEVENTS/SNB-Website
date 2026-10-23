import Link from "next/link";
import type { Metadata } from "next";
import HeroMedia from "./HeroMedia";

export const metadata: Metadata = {
  title: "Corporate Event Services in Barcelona | SNB Events Agency",
  description:
    "Corporate event planning and production in Barcelona: offsites, conferences, parties, team building and product launches — venues, catering and AV handled.",
  // openGraph replaces the root's wholesale rather than merging into it, so
  // url, siteName and the image are repeated here or they would be dropped.
  openGraph: {
    title: "Corporate Event Services in Barcelona | SNB Events Agency",
    description:
      "Corporate event planning and production in Barcelona: offsites, conferences, parties, team building and product launches — venues, catering and AV handled.",
    url: "https://www.snbagency.com/services",
    siteName: "SNB Events Agency",
    images: [{ url: "/gallery-outdoor.jpg", width: 1200, height: 630, alt: "SNB Events Agency" }],
    type: "website",
  },
};

const services = [
  {
    n: "01",
    title: "Corporate Offsites & Retreats",
    badge: "DMC Barcelona",
    tagline: "Strategy. Alignment. Impact.",
    description:
      "We design and produce corporate offsites, company retreats and incentive trips that go beyond the hotel conference room. As a destination management company based in Barcelona, we handle venue sourcing, hotel accommodation, airport transfers, meeting rooms, AV production and delegate management across Catalonia, Sitges, the Costa Brava and the rest of Spain. Whether you are taking your leadership team off-grid to reset and re-align, or bringing a global organisation together for a company-wide summit or sales kick-off, we build events that create the conditions for real strategic work.",
    details: [
      "Leadership summits & board retreats",
      "Conferences, congresses & seminars",
      "Sales kick-offs & annual meetings",
      "Strategic planning offsites",
      "Incentive travel & reward trips",
      "Venue sourcing & hotel accommodation",
      "Airport transfers & group transport",
      "Delegate registration & management",
    ],
    image: "/villa-rosa.jpg",
    imagePosition: "object-[center_35%]",
  },
  {
    n: "02",
    title: "Corporate & Company Events",
    badge: null,
    tagline: "From summer parties to end-of-year celebrations.",
    description:
      "Not every event needs to be a landmark moment — but every event deserves to be done well. We plan and manage staff parties, summer socials, Christmas and end-of-year celebrations, company anniversaries, gala dinners and award ceremonies for local businesses and growing companies. Venue hire, catering and bar, entertainment and DJs, styling and decor, furniture hire, photography and staffing are all arranged and run by us. Whether you are a team of 20 or 200, we handle the planning and logistics so you can show up and enjoy it.",
    details: [
      "Summer parties & seasonal socials",
      "Christmas & end-of-year celebrations",
      "Company anniversaries & milestones",
      "Gala dinners & award ceremonies",
      "Staff away days & kick-off meetings",
      "Venue hire across Barcelona",
      "Catering, bar & entertainment",
      "Event styling, decor & furniture hire",
    ],
    image: "/Hero.jpg",
    imagePosition: "object-center",
  },

  {
    n: "03",
    title: "Team Building & Experiences",
    badge: null,
    tagline: "Invest in your people.",
    description:
      "Culture doesn't build itself — it's built in moments. We create team building events, away days and shared experiences that reconnect people, rebuild momentum and reinforce what your organisation values. From sailing regattas, treasure hunts and gastronomy workshops to hands-on activity days, onboarding events and multi-day team programmes, we design environments that bring out the best in your people — and handle the activity booking, group transport, catering and on-site coordination that make them run.",
    details: [
      "Team building days & activities",
      "Away days & offsite programmes",
      "Culture & values workshops",
      "Sailing, treasure hunts & gastronomy",
      "Onboarding & new-starter events",
      "Employee engagement & wellbeing days",
      "Employee milestone celebrations",
      "Activity booking & group coordination",
    ],
    image: "/team-building.jpg",
    imagePosition: "object-[center_55%]",
  },
  {
    n: "04",
    title: "Brand Activations",
    badge: null,
    tagline: "Make the market take notice.",
    description:
      "A great brand launch is a statement. It sets the tone for everything that follows. We produce product launches, press previews, influencer and media events, pop-ups, showroom openings, roadshows and large-scale consumer activations — from the concept and set design through to staging, lighting, sound, branding and content capture. A brand event isn't just an event; it's a positioning exercise.",
    details: [
      "Product launches & press previews",
      "Brand activations & pop-ups",
      "Influencer & media events",
      "Showroom openings & roadshows",
      "Trade shows, stands & exhibitions",
      "Consumer experiences & sampling",
      "Set design, staging & production",
      "Lighting, sound & audiovisual",
    ],
    image: "/brand-activation-fomo.jpg",
    imagePosition: "object-[center_55%]",
  },
];

export default function Services() {
  return (
    <>
      {/* Hero — video background */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        <HeroMedia />
        <div className="absolute inset-0 bg-ink/55" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 md:pb-28 w-full">
          <p className="text-[11px] font-semibold text-surface/60 tracking-[0.3em] uppercase mb-8">
            Services
          </p>
          <h1 className="font-heading text-[clamp(3rem,7vw,7rem)] text-surface leading-[0.95] tracking-tight mb-10 max-w-4xl">
            What We Do
          </h1>
          <p className="text-xl text-surface/70 max-w-2xl leading-relaxed">
            Full-service corporate event planning, production and event management in Barcelona
            and across Spain. You tell us what you want — we handle venues, suppliers, catering,
            production and every last detail on the day.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto divide-y divide-ink-border border-b border-ink-border">
          {services.map((service) => (
            <div key={service.n} className="py-12 md:py-16">
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
      <section className="py-24 md:py-32 px-6 bg-ink relative overflow-hidden">
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
          <h2 className="font-heading text-[clamp(2.25rem,5vw,4.5rem)] text-surface leading-[1.05] tracking-tight mb-10 max-w-3xl">
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
