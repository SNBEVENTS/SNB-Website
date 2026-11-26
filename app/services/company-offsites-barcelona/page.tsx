import Link from "next/link";
import type { Metadata } from "next";

const TITLE = "Company Offsites in Barcelona | SNB Events Agency";
const DESCRIPTION =
  "We plan and run company offsites in Barcelona, Sitges, the Costa Brava and across Catalonia. Villas, meeting space, food, transfers and the programme around the work, handled end to end.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "https://www.snbagency.com/services/company-offsites-barcelona" },
  // openGraph replaces the root's wholesale rather than merging into it, so
  // url, siteName and the image are repeated here or they would be dropped.
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://www.snbagency.com/services/company-offsites-barcelona",
    siteName: "SNB Events Agency",
    images: [{ url: "/villa-rosa.jpg", width: 1200, height: 630, alt: "A company offsite in Catalonia" }],
    type: "website",
  },
};

const includes = [
  "Villa, hotel and venue sourcing",
  "Meeting space and AV production",
  "Private chefs and catering",
  "Airport transfers and group transport",
  "Accommodation and rooming lists",
  "Activities, excursions and downtime",
  "Evening programmes and dinners",
  "On-site management for the whole stay",
];

const programme = [
  {
    n: "01",
    title: "Arrival",
    body: "Transfers from the airport, a base everyone can settle into, and something waiting for them when they walk in. The first hour sets the tone for the rest of the stay.",
  },
  {
    n: "02",
    title: "The Working Days",
    body: "Meeting space that does not feel like a hotel conference floor, with the AV, the food and the timings handled so your team can stay in the room and concentrate.",
  },
  {
    n: "03",
    title: "The Breaks",
    body: "What happens when the laptops close matters as much as the agenda. A beach day, a long dinner, something local and genuinely worth looking forward to.",
  },
  {
    n: "04",
    title: "The Send-Off",
    body: "A final evening that lands, departure transfers that run themselves, and nothing left for your team to chase once they are home.",
  },
];

const places = [
  {
    title: "Barcelona",
    body: "City-centre hotels and meeting space, with the restaurants, rooftops and culture of the city built into the programme. Easiest for international groups flying in from several places at once.",
  },
  {
    title: "Sitges and the Coast",
    body: "Forty minutes from the airport and a different world. Private villas with pools and space to spread out, the sea in walking distance, and evenings that do not need a venue to work.",
  },
  {
    title: "The Catalan Countryside",
    body: "Masias, wineries and estates inland, for groups who want to be genuinely away from everything. Further to reach and worth it when the point of the week is to disconnect.",
  },
];

const faqs = [
  {
    q: "How many people can you handle?",
    a: "We have run events for teams of twenty and for companies of several hundred. Group size changes which venues are realistic more than it changes how we work.",
  },
  {
    q: "How long should an offsite be?",
    a: "Most sit somewhere between two and four days. The hackathon offsite we ran for Junior.ai in Sitges ran four full days, which gave their team real time to work without the week feeling like travel.",
  },
  {
    q: "Where do you run offsites?",
    a: "Barcelona, Sitges, the Costa Brava and across Catalonia, and the rest of Spain when a brief calls for it. We are based in Barcelona, so the venues and suppliers we use are ones we know first hand.",
  },
  {
    q: "Do you handle accommodation and transfers?",
    a: "Yes. Venue sourcing, hotel and villa accommodation, rooming lists, airport transfers and group transport are all part of what we run, alongside the programme itself.",
  },
  {
    q: "What does a company offsite in Barcelona cost?",
    a: "It depends on group size, how many nights, and the kind of venue you have in mind, so a single figure would be misleading. Tell us your group size and your budget and we will tell you honestly what is realistic for it.",
  },
];

/*
  FAQPage structured data. Google can surface these as expandable questions in
  the result itself, which is worth real clicks for a query like this one. The
  markup must match the visible text on the page exactly, so both are rendered
  from the same `faqs` array rather than written out twice.
*/
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function CompanyOffsitesBarcelona() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="pt-36 md:pt-44 pb-12 md:pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-[11px] font-semibold text-muted tracking-[0.3em] uppercase mb-6">
            Company Offsites
          </p>
          <h1 className="font-heading text-[clamp(2.75rem,6vw,6rem)] text-parchment leading-[0.95] tracking-tight mb-10 max-w-4xl">
            Company Offsites<br />in Barcelona.
          </h1>
          <p className="text-xl text-muted leading-relaxed max-w-3xl">
            We plan and run company offsites in Barcelona, Sitges, the Costa Brava and across
            Catalonia. The villa, the meeting space, the food, the transfers and the programme
            around the work, all handled end to end, so the only thing your team has to do is
            turn up and think.
          </p>
        </div>
      </section>

      <section className="px-6 pb-12 md:pb-16">
        <div className="max-w-7xl mx-auto overflow-hidden h-64 md:h-[420px]">
          <img
            src="/portfolio/hackathon-offsite-sitges/garden-tables.jpg"
            alt="Tables set under the palms at a villa in Sitges for a company offsite"
            className="w-full h-full object-cover object-[center_62%]"
          />
        </div>
      </section>

      {/* What we handle */}
      <section className="px-6 py-12 md:py-16 bg-ink-raised">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-5">
            <p className="text-[11px] font-semibold text-gold tracking-[0.3em] uppercase mb-6">
              What We Handle
            </p>
            <h2 className="font-heading text-3xl md:text-5xl text-parchment leading-[1.1] mb-8">
              Everything<br />Around the Work.
            </h2>
            <p className="text-muted leading-relaxed">
              Your team owns the agenda. We own the rest of it, from the first venue shortlist to
              the last transfer out. As a destination management company based in Barcelona, the
              suppliers we book are ones we have worked with before, which is what keeps the
              week calm when something inevitably changes at short notice.
            </p>
          </div>
          <div className="md:col-span-7 md:pt-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4 border-t border-ink-border pt-8">
              {includes.map((item) => (
                <div key={item} className="flex items-center gap-4 text-sm text-muted">
                  <span className="w-1 h-1 bg-gold flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Shape of a programme */}
      <section className="px-6 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <p className="text-[11px] font-semibold text-muted tracking-[0.3em] uppercase mb-6">
            The Shape of It
          </p>
          <h2 className="font-heading text-3xl md:text-5xl text-parchment leading-[1.1] mb-12 max-w-2xl">
            How an Offsite Runs.
          </h2>
          <div className="divide-y divide-ink-border border-y border-ink-border">
            {programme.map((step) => (
              <div key={step.n} className="py-8 md:py-10 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-16">
                <span className="md:col-span-1 text-[11px] text-gold font-semibold tracking-widest pt-1">
                  {step.n}
                </span>
                <h3 className="md:col-span-3 font-heading text-xl md:text-2xl text-parchment leading-snug">
                  {step.title}
                </h3>
                <p className="md:col-span-8 text-muted leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where */}
      <section className="px-6 py-12 md:py-16 bg-ink-raised">
        <div className="max-w-7xl mx-auto">
          <p className="text-[11px] font-semibold text-gold tracking-[0.3em] uppercase mb-6">
            Where
          </p>
          <h2 className="font-heading text-3xl md:text-5xl text-parchment leading-[1.1] mb-12 max-w-2xl">
            Three Very Different Weeks.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            {places.map((place) => (
              <div key={place.title} className="border-t border-ink-border pt-8">
                <h3 className="font-heading text-xl md:text-2xl text-parchment mb-4">
                  {place.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">{place.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case study */}
      <section className="px-6 py-12 md:py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="overflow-hidden h-72 md:h-[460px]">
            <img
              src="/portfolio/hackathon-offsite-sitges/pool-loungers.jpg"
              alt="The villa pool during the Junior.ai hackathon offsite in Sitges"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div>
            <p className="text-[11px] font-semibold text-gold tracking-[0.3em] uppercase mb-6">
              Offsite Case Study
            </p>
            <h2 className="font-heading text-3xl md:text-5xl text-parchment leading-[1.1] mb-8">
              Four Days<br />in Sitges.
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Junior.ai brought fifty people to Sitges for a four-day hackathon. We ran everything
              around the work: the villa, a private chef on site, yoga in the mornings, a beach day
              with branded kit and beach tennis, and a winery dinner with flamenco between courses.
              A videographer stayed with the group all four days, so they went home with the footage
              as well as the week.
            </p>
            <blockquote className="border-l-2 border-gold pl-6 mb-8">
              <p className="text-parchment italic leading-relaxed mb-3">
                &ldquo;They immediately understood the vision for the event and got to work straight
                away. Their knowledge of Barcelona and their extensive network of local vendors made
                the whole process incredibly smooth.&rdquo;
              </p>
              <cite className="block text-[11px] text-muted not-italic tracking-[0.2em] uppercase">
                Gemma Bryant, Office Manager, Junior.ai
              </cite>
            </blockquote>
            <Link
              href="/portfolio/hackathon-offsite-sitges"
              className="text-[11px] font-semibold text-pop-pink tracking-[0.2em] uppercase hover:opacity-75 transition-opacity"
            >
              Read the Full Case Study →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-12 md:py-16 bg-ink-raised">
        <div className="max-w-7xl mx-auto">
          <p className="text-[11px] font-semibold text-gold tracking-[0.3em] uppercase mb-6">
            Questions
          </p>
          <h2 className="font-heading text-3xl md:text-5xl text-parchment leading-[1.1] mb-12 max-w-2xl">
            Before You Ask.
          </h2>
          <div className="divide-y divide-ink-border border-y border-ink-border">
            {faqs.map((f) => (
              <div key={f.q} className="py-8 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-16">
                <h3 className="md:col-span-5 font-heading text-lg md:text-xl text-parchment leading-snug">
                  {f.q}
                </h3>
                <p className="md:col-span-7 text-muted leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 px-6 bg-ink">
        <div className="max-w-7xl mx-auto">
          <p className="text-[11px] font-semibold text-gold tracking-[0.4em] uppercase mb-8">
            Planning One?
          </p>
          <h2 className="font-heading text-[clamp(2.5rem,6vw,5rem)] text-surface leading-[0.95] tracking-tight mb-10 max-w-2xl">
            Tell Us About Your Offsite.
          </h2>
          <p className="text-surface/70 leading-relaxed max-w-2xl mb-10">
            Group size, rough dates and what you want the week to achieve is enough to start. We
            read every enquiry ourselves and reply within 48 hours.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gold text-ink px-9 py-4 text-[11px] font-semibold tracking-[0.2em] uppercase hover:opacity-90 transition-opacity"
          >
            Start a Conversation →
          </Link>
        </div>
      </section>
    </>
  );
}
