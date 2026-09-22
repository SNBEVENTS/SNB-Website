import Link from "next/link";

const services = [
  {
    n: "01",
    title: "Corporate Offsites & Retreats",
    badge: "DMC Barcelona",
    desc: "From leadership summits to full-company retreats — we find the venue, handle the logistics and make it one they won't forget.",
    img: "/gallery-outdoor.jpg",
    position: "object-[center_60%]",
  },
  {
    n: "02",
    title: "Brand Activations",
    badge: null,
    desc: "Bold, intentional, built for impact. We turn your brand moment into an experience people actually talk about.",
    img: "/brand-activation.jpg",
    position: "object-center",
  },
  {
    n: "03",
    title: "Team Building & Experiences",
    badge: null,
    desc: "Culture is built in moments. We design experiences that reconnect your people and send them home energised.",
    img: "/team-building.jpg",
    position: "object-[center_75%]",
  },
  {
    n: "04",
    title: "Corporate & Company Events",
    badge: null,
    desc: "Summer parties, end-of-year nights, company socials — we handle everything so you can actually enjoy it.",
    img: "/Hero.jpg",
    position: "object-center",
  },
];

const testimonials = [
  {
    quote: "SNB made our annual offsite the best one yet. Every detail was handled — we just showed up.",
    name: "Sarah K.",
    role: "Head of People, Tech Company",
  },
  {
    quote: "Fast, flexible and genuinely fun to work with. They completely got our brand from day one.",
    name: "Marc L.",
    role: "Brand Manager, Consumer Goods",
  },
  {
    quote: "From first call to final event, everything was seamless. Our guests were blown away.",
    name: "Emma T.",
    role: "Events Lead, Financial Services",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-screen flex items-end pb-20 md:pb-28 px-6 relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 bottom-14 md:bottom-28 z-0">
          <img
            src="/Hero.jpg"
            alt=""
            className="w-full h-full object-cover object-center"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-ink/60" />
        </div>
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <p className="text-[11px] font-semibold text-gold-light tracking-[0.4em] uppercase mb-6">
            Barcelona · Ibiza · All of Spain
          </p>
          <h1 className="font-heading text-[clamp(3rem,8vw,7.5rem)] text-surface leading-[0.95] tracking-tight mb-8">
            Your Event.<br />
            Our Expertise.<br />
            <em>Zero Stress.</em>
          </h1>
          <p className="text-base md:text-lg text-surface/75 max-w-xl leading-relaxed mb-10">
            We bring your corporate vision to life, every time. From A to Z — venues, logistics,
            suppliers, on-the-day production. You bring the people. We bring everything else.
          </p>
          <div className="flex flex-wrap items-center gap-8 md:gap-12">
            <Link
              href="/contact"
              className="text-[11px] font-semibold text-surface tracking-[0.3em] uppercase border-b border-gold pb-1 hover:text-gold transition-colors"
            >
              Start a Conversation →
            </Link>
            <Link
              href="/services"
              className="text-[11px] font-semibold text-surface/60 tracking-[0.3em] uppercase hover:text-surface transition-colors"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* What We Do — photo cards */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="text-[11px] font-semibold text-muted tracking-[0.3em] uppercase mb-4">
              What We Do
            </p>
            <h2 className="font-heading text-3xl md:text-5xl text-parchment">
              Everything, End to End
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((s) => (
              <Link
                key={s.n}
                href="/services"
                className="group relative overflow-hidden aspect-[4/3]"
              >
                <img
                  src={s.img}
                  alt={s.title}
                  className={`absolute inset-0 w-full h-full object-cover ${s.position} group-hover:scale-105 transition-transform duration-700`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent group-hover:from-ink/80 transition-colors duration-300" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[11px] text-gold font-semibold tracking-[0.3em] uppercase">
                      {s.n}
                    </span>
                    {s.badge && (
                      <span className="text-[10px] font-semibold text-gold-light tracking-[0.2em] uppercase border border-gold-light/50 px-2 py-0.5">
                        {s.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="font-heading text-2xl md:text-3xl text-surface mb-3">{s.title}</h3>
                  <p className="text-sm text-surface/70 leading-relaxed max-w-sm">{s.desc}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/services"
              className="text-[11px] font-semibold text-gold tracking-[0.25em] uppercase hover:text-gold-light transition-colors"
            >
              Explore All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Full-bleed photo */}
      <div className="w-full h-[55vh] md:h-[70vh] overflow-hidden">
        <img
          src="/gallery-outdoor.jpg"
          alt="SNB Events Agency outdoor event setup"
          className="w-full h-full object-cover object-[center_60%]"
        />
      </div>

      {/* Why SNB — with team photo */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          <div className="overflow-hidden">
            <img
              src="/team.jpg"
              alt="SNB Events Agency team"
              className="w-full h-[500px] md:h-[620px] object-cover object-[center_20%]"
            />
          </div>

          <div>
            <p className="text-[11px] font-semibold text-muted tracking-[0.3em] uppercase mb-6">
              Why SNB Events Agency
            </p>
            <h2 className="font-heading text-3xl md:text-5xl text-parchment leading-[1.1] mb-8">
              Your Event, Exactly How You Want It
            </h2>
            <p className="text-muted leading-relaxed mb-5">
              You tell us what you&apos;re dreaming of and we make it happen — handling every single
              thing in between. We&apos;re flexible, we move fast, and we know exactly who to call.
            </p>
            <p className="text-muted leading-relaxed mb-10">
              No two events look the same because no two clients are the same. Everything we do is
              personalised to you, your team, and what you&apos;re trying to achieve.
            </p>

            <div className="divide-y divide-ink-border">
              {[
                {
                  label: "Experienced & Multilingual",
                  desc: "Years of high-stakes event delivery across industries and languages. We work seamlessly with international clients and cross-border briefs.",
                },
                {
                  label: "Flexible & Detail-Obsessed",
                  desc: "When things shift — as they always do — we adapt without losing grip on what matters. No brief is too specific, no request too unusual.",
                },
                {
                  label: "Quick to Respond & Results-Driven",
                  desc: "Your time matters. Expect fast, clear communication and events that deliver real business outcomes.",
                },
              ].map((item) => (
                <div key={item.label} className="py-8">
                  <h3 className="font-heading text-lg text-parchment mb-2">{item.label}</h3>
                  <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Link
                href="/about"
                className="text-[11px] font-semibold text-gold tracking-[0.25em] uppercase border-b border-gold pb-1 hover:text-gold-light hover:border-gold-light transition-colors"
              >
                About Us →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials + logos */}
      <section className="py-24 md:py-32 px-6 bg-ink-raised">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <p className="text-[11px] font-semibold text-muted tracking-[0.3em] uppercase mb-4">
              Client Stories
            </p>
            <h2 className="font-heading text-3xl md:text-5xl text-parchment">What They Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-surface p-10 border border-ink-border">
                <p className="font-heading text-lg text-parchment italic leading-relaxed mb-8">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="text-sm font-semibold text-parchment">{t.name}</p>
                <p className="text-[11px] text-muted tracking-wide mt-1">{t.role}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-12 border-t border-ink-border">
            <p className="text-[11px] font-semibold text-muted tracking-[0.3em] uppercase mb-8 text-center">
              Trusted By
            </p>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-x-8 gap-y-6 items-center justify-items-center">
              {[
                "Junior.ai",
                "Puig",
                "Preply",
                "EBS Bartender School",
                "Truss",
                "Rituals",
                "Kodify",
                "Deel",
                "Purina",
                "Havanna",
              ].map((name) => (
                <div
                  key={name}
                  className="text-[11px] font-semibold text-muted/70 tracking-[0.2em] uppercase text-center"
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured work */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="text-[11px] font-semibold text-muted tracking-[0.3em] uppercase mb-4">
                Featured Work
              </p>
              <h2 className="font-heading text-3xl md:text-5xl text-parchment">Our Events</h2>
            </div>
            <Link
              href="/services"
              className="hidden md:inline text-[11px] font-semibold text-gold tracking-[0.25em] uppercase hover:text-gold-light transition-colors"
            >
              All Services →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { src: "/gallery-outdoor.jpg", pos: "object-[center_60%]", cat: "COMPANY EVENT", title: "Summer Garden Party, Barcelona" },
              { src: "/brand-activation.jpg", pos: "object-center", cat: "BRAND ACTIVATION", title: "Brand Activation, Barcelona" },
              { src: "/team-building.jpg", pos: "object-top", cat: "TEAM BUILDING", title: "Activity Day, Ibiza" },
            ].map((item) => (
              <div key={item.src} className="group cursor-pointer">
                <div className="overflow-hidden aspect-[3/4] mb-5">
                  <img
                    src={item.src}
                    alt={item.title}
                    className={`w-full h-full object-cover ${item.pos} group-hover:scale-105 transition-transform duration-700`}
                  />
                </div>
                <p className="text-[10px] font-semibold text-gold tracking-[0.3em] uppercase mb-1.5">
                  {item.cat}
                </p>
                <p className="font-heading text-lg text-parchment">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-36 md:py-48 px-6 bg-ink relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/Hero.jpg"
            alt=""
            className="w-full h-full object-cover opacity-15"
            aria-hidden="true"
          />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <p className="text-[11px] font-semibold text-gold tracking-[0.4em] uppercase mb-8">
            Let&apos;s Work Together
          </p>
          <h2 className="font-heading text-[clamp(2.5rem,7vw,7rem)] text-surface leading-[0.95] tracking-tight mb-14 max-w-3xl">
            Ready to Plan Your Next Event?
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 text-[11px] font-semibold text-surface tracking-[0.3em] uppercase border-b border-gold pb-1 hover:text-gold transition-colors"
          >
            Start a Conversation →
          </Link>
        </div>
      </section>
    </>
  );
}
