import type { MetadataRoute } from "next";

import { content } from "@/lib/content";

const SITE_URL = "https://www.armacons.com";

function absolute(path: string) {
  return `${SITE_URL}${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "/",
    "/en",
    "/en/capabilities",
    "/en/contact",
    "/en/projects",
  ];

  const corporateRoutes = content.corporate.map((page) => `/en/corporate/${page.slug}`);
  const capabilityRoutes = content.capabilities.items.map((item) => `/en/capabilities/${item.slug}`);
  const projectRoutes = content.projects.items.map((item) => `/en/projects/${item.slug}`);

  return [...staticRoutes, ...corporateRoutes, ...capabilityRoutes, ...projectRoutes].map((path) => ({
    url: absolute(path),
    lastModified: new Date(),
    changeFrequency: path === "/en" ? "weekly" : "monthly",
    priority: path === "/en" ? 1 : path.startsWith("/en/projects/") ? 0.8 : 0.7,
  }));
}
