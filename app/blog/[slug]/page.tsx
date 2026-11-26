import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { posts, getPost } from "../posts";

const SITE = "https://www.snbagency.com";

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

/*
  "March 2026" -> "2026-03-01".

  Deliberately not `new Date(...).toISOString()`: that parses to local midnight
  and then converts to UTC, so anywhere east of Greenwich the date lands on the
  last day of the previous month. We only have month precision anyway, so the
  string is built directly and no timezone is involved.
*/
function isoDate(date: string) {
  const [month, year] = date.split(" ");
  const index = MONTHS.indexOf(month);
  if (index === -1) return year;
  return `${year}-${String(index + 1).padStart(2, "0")}-01`;
}

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  const url = `${SITE}/blog/${post.slug}`;
  return {
    title: `${post.title} | SNB Events Agency`,
    description: post.excerpt,
    alternates: { canonical: url },
    // openGraph replaces the root's wholesale rather than merging into it, so
    // url, siteName and the image are repeated here or they would be dropped.
    openGraph: {
      title: `${post.title} | SNB Events Agency`,
      description: post.excerpt,
      url,
      siteName: "SNB Events Agency",
      images: [{ url: post.image, width: 1200, height: 630, alt: post.imageAlt }],
      type: "article",
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  // Two more posts to read, in listing order, wrapping past the end.
  const index = posts.findIndex((p) => p.slug === post.slug);
  const more = [posts[(index + 1) % posts.length], posts[(index + 2) % posts.length]];

  /*
    Article structured data. headline, image and dates are what Google reads
    for an article result; publisher ties it back to the business. The date is
    the month shown on the post, normalised to the first of that month, since
    that is the only precision we have.
  */
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: `${SITE}${post.image}`,
    datePublished: isoDate(post.date),
    author: { "@type": "Organization", name: "SNB Events Agency", url: SITE },
    publisher: { "@type": "Organization", name: "SNB Events Agency", url: SITE },
    mainEntityOfPage: `${SITE}/blog/${post.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Header */}
      <section className="pt-36 md:pt-44 pb-10 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="text-[11px] font-semibold text-muted tracking-[0.25em] uppercase hover:text-parchment transition-colors"
          >
            ← Blog
          </Link>
          <div className="flex items-center gap-4 mt-10 mb-6">
            <span
              className={`text-xs font-semibold ${post.tagColor} tracking-[0.15em] uppercase`}
            >
              {post.tag}
            </span>
            <span className="text-xs text-muted">{post.date}</span>
            <span className="text-xs text-muted">{post.readingTime}</span>
          </div>
          <h1 className="font-heading text-[clamp(2.25rem,5vw,4rem)] text-parchment leading-[1.05] tracking-tight mb-8">
            {post.title}
          </h1>
          <p className="text-xl text-muted leading-relaxed">{post.intro}</p>
        </div>
      </section>

      {/* Hero image */}
      <section className="px-6 pb-12 md:pb-16">
        <div className="max-w-5xl mx-auto overflow-hidden h-64 md:h-[420px]">
          <img
            src={post.image}
            alt={post.imageAlt}
            className={`w-full h-full object-cover ${post.imagePosition ?? "object-center"}`}
          />
        </div>
      </section>

      {/* Body */}
      <article className="px-6 pb-12 md:pb-16">
        <div className="max-w-3xl mx-auto">
          {post.body.map((section) => (
            <section key={section.heading} className="mb-12 last:mb-0">
              <h2 className="font-heading text-2xl md:text-3xl text-parchment leading-snug mb-6">
                {section.heading}
              </h2>
              <div className="space-y-5">
                {section.paragraphs.map((p) => (
                  <p key={p.slice(0, 40)} className="text-muted leading-relaxed text-base md:text-lg">
                    {p}
                  </p>
                ))}
              </div>
            </section>
          ))}

          <div className="border-t border-ink-border mt-14 pt-10">
            <p className="font-heading text-xl md:text-2xl text-parchment italic leading-relaxed">
              {post.closing}
            </p>
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="py-12 md:py-16 px-6 bg-ink">
        <div className="max-w-7xl mx-auto">
          <p className="text-[11px] font-semibold text-gold tracking-[0.4em] uppercase mb-8">
            Planning Something?
          </p>
          <h2 className="font-heading text-[clamp(2.25rem,5vw,4.5rem)] text-surface leading-[0.95] tracking-tight mb-10 max-w-2xl">
            We Can Help With That.
          </h2>
          <p className="text-surface/70 leading-relaxed max-w-2xl mb-10">
            Tell us the rough shape of what you have in mind. We read every enquiry ourselves and
            reply within 48 hours.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gold text-ink px-9 py-4 text-[11px] font-semibold tracking-[0.2em] uppercase hover:opacity-90 transition-opacity"
          >
            Start a Conversation →
          </Link>
        </div>
      </section>

      {/* Keep reading */}
      <section className="px-6 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <p className="text-[11px] font-semibold text-muted tracking-[0.3em] uppercase mb-8">
            Keep Reading
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ink-border">
            {more.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="bg-surface p-10 flex flex-col gap-5 hover:bg-ink-raised transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`text-xs font-semibold ${p.tagColor} tracking-[0.15em] uppercase`}
                  >
                    {p.tag}
                  </span>
                  <span className="text-xs text-muted">{p.date}</span>
                </div>
                <h3 className="font-heading text-xl text-parchment leading-snug">{p.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{p.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
