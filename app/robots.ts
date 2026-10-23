import type { MetadataRoute } from "next";

const SITE = "https://www.snbagency.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // The contact form endpoint. Nothing to index, and it only answers POST.
      disallow: "/api/",
    },
    sitemap: `${SITE}/sitemap.xml`,
  };
}
