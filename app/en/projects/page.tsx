import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";
import { ProjectGrid } from "@/components/project-grid";
import { content } from "@/lib/content";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: content.projects.index.seoTitle,
  description: content.projects.index.seoDescription,
  path: "/en/projects",
  image: "/en/projects/opengraph-image",
});

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow={content.projects.index.eyebrow}
        title={content.projects.index.title}
        intro={content.projects.index.intro}
        dark
      />
      <ProjectGrid items={content.projects.items} />
    </>
  );
}
