import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: "https://www.mxsolution.in/",
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://www.mxsolution.in/projects",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
