import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: `${SITE_URL}/`, lastModified, changeFrequency: "weekly", priority: 1, images: [`${SITE_URL}/images/ring-black.webp`] },
    { url: `${SITE_URL}/compare`, lastModified, changeFrequency: "monthly", priority: 0.8, images: [`${SITE_URL}/images/compare-kira.webp`] },
  ];
}
