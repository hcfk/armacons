import type { Metadata } from "next";
import Link from "next/link";

import { CapabilityGrid } from "@/components/capability-grid";
import { ContentSection } from "@/components/content-section";
import { DetailSections } from "@/components/detail-sections";
import { PageHero } from "@/components/page-hero";
import { StatsBand } from "@/components/stats-band";
import { content } from "@/lib/content";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: content.home.seoTitle,
  description: content.home.seoDescription,
  path: "/en",
});

export default function HomePage() {
  return (
    <>
      <PageHero
        eyebrow={content.home.eyebrow}
        title={content.home.title}
        intro={content.home.intro}
        dark
      />
      <StatsBand stats={content.home.stats} />
      <ContentSection
        body={content.home.body}
        ctaHref="/en/corporate/about"
        ctaLabel="View Corporate Pages"
      />
      {content.home.sections?.length ? <DetailSections sections={content.home.sections} /> : null}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 pt-4 lg:px-10">
        <div>
          <p className="eyebrow text-sm text-[rgb(46,91,122)]">Capabilities</p>
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-4xl uppercase text-[rgb(16,38,63)]">
            Six core infrastructure disciplines
          </h2>
        </div>
        <Link href="/en/contact" className="hidden rounded-full border border-[rgb(16,38,63)] px-5 py-3 text-sm font-semibold lg:inline-flex">
          Contact Arma
        </Link>
      </div>
      <CapabilityGrid items={content.capabilities.items} />
    </>
  );
}
