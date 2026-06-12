import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ContentSection } from "@/components/content-section";
import { DetailSections } from "@/components/detail-sections";
import { PageHero } from "@/components/page-hero";
import { content, getCorporatePage } from "@/lib/content";
import { buildPageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return content.corporate.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getCorporatePage(slug);

  if (!page) {
    return {};
  }

  return buildPageMetadata({
    title: page.seoTitle ?? page.title,
    description: page.seoDescription ?? page.intro,
    path: `/en/corporate/${slug}`,
  });
}

export default async function CorporateDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getCorporatePage(slug);

  if (!page) {
    notFound();
  }

  const ctaMap: Record<string, { href: string; label: string }> = {
    about: { href: "/en/capabilities", label: "Explore Capabilities" },
    "mission-vision": { href: "/en/corporate/values-principles", label: "View Values" },
    "values-principles": { href: "/en/corporate/management-message", label: "Management Message" },
    "management-message": { href: "/en/corporate/environmental-policy", label: "Environmental Policy" },
    "environmental-policy": { href: "/en/corporate/quality-management", label: "Quality Management" },
    "quality-management": { href: "/en/contact", label: "Contact Arma" }
  };

  const cta = ctaMap[slug];

  return (
    <>
      <PageHero eyebrow={page.eyebrow} title={page.title} intro={page.intro} />
      <ContentSection body={page.body} ctaHref={cta?.href} ctaLabel={cta?.label} />
      {page.sections?.length ? <DetailSections sections={page.sections} /> : null}
    </>
  );
}
