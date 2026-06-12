import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ContentSection } from "@/components/content-section";
import { DetailSections } from "@/components/detail-sections";
import { PageHero } from "@/components/page-hero";
import { content, getCapability } from "@/lib/content";
import { buildPageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return content.capabilities.items.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const capability = getCapability(slug);

  if (!capability) {
    return {};
  }

  return buildPageMetadata({
    title: capability.seoTitle ?? capability.title,
    description: capability.seoDescription ?? capability.summary,
    path: `/en/capabilities/${slug}`,
    image: `/en/capabilities/${slug}/opengraph-image`,
  });
}

export default async function CapabilityDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const capability = getCapability(slug);

  if (!capability) {
    notFound();
  }

  return (
    <>
      <PageHero
        eyebrow="Capabilities"
        title={capability.title}
        intro={capability.summary}
        dark
        imageSrc={capability.heroImage}
        imageAlt={capability.title}
      />
      <ContentSection
        body={capability.body}
        ctaHref="/en/contact"
        ctaLabel="Discuss a Project"
      />
      {capability.sections?.length ? <DetailSections sections={capability.sections} /> : null}
    </>
  );
}
