import type { Metadata } from "next";

import { ContentSection } from "@/components/content-section";
import { DetailSections } from "@/components/detail-sections";
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
  const flagshipProjects = content.projects.items.filter((item) => item.group === "flagship");
  const portfolioProjects = content.projects.items.filter((item) => item.group !== "flagship");

  return (
    <>
      <PageHero
        eyebrow={content.projects.index.eyebrow}
        title={content.projects.index.title}
        intro={content.projects.index.intro}
        dark
      />
      {content.projects.index.body?.length ? (
        <ContentSection body={content.projects.index.body} ctaHref="/en/contact" ctaLabel="Discuss a Project" />
      ) : null}
      {content.projects.index.sections?.length ? (
        <DetailSections sections={content.projects.index.sections} />
      ) : null}
      {flagshipProjects.length ? (
        <ProjectGrid
          items={flagshipProjects}
          eyebrow="Projects"
          title="Flagship Projects"
          intro="Major dam and hydropower references that define scale, structural depth, and integrated heavy civil execution."
        />
      ) : null}
      {portfolioProjects.length ? (
        <ProjectGrid
          items={portfolioProjects}
          eyebrow="Portfolio"
          title="Additional Hydropower References"
          intro="Operational hydro and regulator-led assets that broaden the project portfolio across provinces, project scales, and commissioning periods."
        />
      ) : null}
    </>
  );
}
