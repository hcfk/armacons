import { notFound } from "next/navigation";

import { ContentSection } from "@/components/content-section";
import { PageHero } from "@/components/page-hero";
import { content, getCapability } from "@/lib/content";

export function generateStaticParams() {
  return content.capabilities.items.map((item) => ({ slug: item.slug }));
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
      <PageHero eyebrow="Capabilities" title={capability.title} intro={capability.summary} dark />
      <ContentSection
        body={capability.body}
        ctaHref="/en/contact"
        ctaLabel="Discuss a Project"
      />
    </>
  );
}
