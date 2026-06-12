import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";
import { ProjectGrid } from "@/components/project-grid";
import { content } from "@/lib/content";

export const metadata: Metadata = {
  title: content.projects.index.seoTitle,
  description: content.projects.index.seoDescription,
};

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
