import Link from "next/link";

export const posts = [
  {
    slug: "planning-company-offsite",
    date: "June 2026",
    tag: "Offsites",
    tagColor: "text-pop-pink",
    title: "5 Things to Consider When Planning Your Company Offsite",
    excerpt:
      "An offsite is only as good as its design. Before you book the venue, there are five questions every leadership team should answer — and most don't.",
  },
  {
    slug: "barcelona-corporate-events",
    date: "May 2026",
    tag: "Destinations",
    tagColor: "text-pop-orange",
    title: "Why Barcelona is Europe's Top City for Corporate Events",
    excerpt:
      "World-class venues, year-round sun, and a city that knows how to host. Here's why more companies are bringing their events to Barcelona.",
  },
  {
    slug: "brand-launch-that-lands",
    date: "April 2026",
    tag: "Brand Events",
    tagColor: "text-pop-yellow",
    title: "How to Make Your Brand Launch Actually Land",
    excerpt:
      "Most brand launches are forgettable. Here's what the best ones have in common — and how to make sure yours isn't one of the ones people forget.",
  },
  {
    slug: "team-building-that-works",
    date: "March 2026",
    tag: "Team Building",
    tagColor: "text-pop-pink",
    title: "Team Building That People Actually Enjoy",
    excerpt:
      "The words 'team building' make most people cringe. Here's how to design an experience your team will actually talk about — for the right reasons.",
  },
  {
    slug: "eoy-party-planning",
    date: "February 2026",
    tag: "Company Events",
    tagColor: "text-pop-orange",
    title: "How to Plan an End-of-Year Party That Feels Effortless",
    excerpt:
      "EOY parties shouldn't be stressful to organise. A simple brief, the right supplier, and a bit of lead time is all it takes to get it right.",
  },
  {
    slug: "corporate-retreat-roi",
    date: "January 2026",
    tag: "Retreats",
    tagColor: "text-pop-yellow",
    title: "The Real ROI of a Corporate Retreat",
    excerpt:
      "Retreats are often seen as a cost. The companies that get the most out of them treat them as an investment — and design them accordingly.",
  },
];

export default function Blog() {
  return (
    <>
      <section className="pt-40 pb-24 px-6 border-b border-ink-border">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold text-pop-orange tracking-[0.2em] uppercase mb-5">
            Blog
          </p>
          <h1 className="font-heading text-5xl md:text-7xl text-parchment leading-[1.05] tracking-tight mb-8 max-w-3xl">
            Ideas & Insights
          </h1>
          <p className="text-xl text-muted max-w-2xl leading-relaxed">
            Practical thinking on corporate events, from the people who plan them.
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink-border">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-surface p-10 flex flex-col gap-5 hover:bg-ink-raised transition-colors"
            >
              <div className="flex items-center gap-4">
                <span className={`text-xs font-semibold ${post.tagColor} tracking-[0.15em] uppercase`}>
                  {post.tag}
                </span>
                <span className="text-xs text-muted">{post.date}</span>
              </div>
              <h2 className="font-heading text-xl text-parchment leading-snug">
                {post.title}
              </h2>
              <p className="text-sm text-muted leading-relaxed flex-1">
                {post.excerpt}
              </p>
              <span className="text-xs font-semibold text-pop-pink tracking-[0.15em] uppercase">
                Read more →
              </span>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
