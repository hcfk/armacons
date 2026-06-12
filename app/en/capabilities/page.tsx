import type { Metadata } from "next";
import { CapabilityGrid } from "@/components/capability-grid";
import { ContentSection } from "@/components/content-section";
import { DetailSections } from "@/components/detail-sections";
import { PageHero } from "@/components/page-hero";
import { content } from "@/lib/content";

export const metadata: Metadata = {
  title: content.capabilities.index.seoTitle,
  description: content.capabilities.index.seoDescription,
};

export default function CapabilitiesPage() {
  return (
    <>
      <PageHero
        eyebrow={content.capabilities.index.eyebrow}
        title={content.capabilities.index.title}
        intro={content.capabilities.index.intro}
        dark
        imageSrc={content.capabilities.index.heroImage}
        imageAlt={content.capabilities.index.title}
      />
      {content.capabilities.index.body?.length ? (
        <ContentSection
          body={content.capabilities.index.body}
          ctaHref="/en/projects"
          ctaLabel="View Projects"
        />
      ) : null}
      {content.capabilities.index.sections?.length ? (
        <DetailSections sections={content.capabilities.index.sections} />
      ) : null}
      <CapabilityGrid items={content.capabilities.items} />
    </>
  );
}
