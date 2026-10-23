import type { MetadataRoute } from "next";
import { cases } from "./portfolio/cases";

const SITE = "https://www.snbagency.com";

/*
  The case study URLs are derived from the same data the pages are built from,
  so adding a case study adds it here too — nothing to keep in step by hand.

  lastModified is deliberately omitted. We have no accurate per-page modified
  date, and stamping every URL with the build date would tell Google the whole
  site changed on every deploy, which is both untrue and a good way to have the
  field discounted altogether.
*/
export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = [
    { url: SITE, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE}/services`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/portfolio`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/about`, changeFrequency: "yearly", priority: 0.7 },
    { url: `${SITE}/contact`, changeFrequency: "yearly", priority: 0.7 },
    { url: `${SITE}/blog`, changeFrequency: "monthly", priority: 0.6 },
  ];

  const caseStudies: MetadataRoute.Sitemap = cases.map((study) => ({
    url: `${SITE}/portfolio/${study.slug}`,
    changeFrequency: "yearly",
    priority: 0.7,
  }));

  return [...pages, ...caseStudies];
}
