import Link from "next/link";
import type { Metadata } from "next";
import { posts } from "./posts";

export const metadata: Metadata = {
  title: "Blog | Corporate Event Ideas & Advice | SNB Events Agency",
  description:
    "Practical advice on planning corporate events in Barcelona: offsites, team building, brand launches and end-of-year parties.",
  // openGraph replaces the root's wholesale rather than merging into it, so
  // url, siteName and the image are repeated here or they would be dropped.
  openGraph: {
    title: "Blog | Corporate Event Ideas & Advice | SNB Events Agency",
    description:
      "Practical advice on planning corporate events in Barcelona: offsites, team building, brand launches and end-of-year parties.",
    url: "https://www.snbagency.com/blog",
    siteName: "SNB Events Agency",
    images: [{ url: "/agency.JPG", width: 1200, height: 630, alt: "SNB Events Agency" }],
    type: "website",
  },
};

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
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
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
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
