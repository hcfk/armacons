import { CapabilityGrid } from "@/components/capability-grid";
import { PageHero } from "@/components/page-hero";
import { content } from "@/lib/content";

export default function CapabilitiesPage() {
  return (
    <>
      <PageHero
        eyebrow={content.capabilities.index.eyebrow}
        title={content.capabilities.index.title}
        intro={content.capabilities.index.intro}
        dark
      />
      <CapabilityGrid items={content.capabilities.items} />
    </>
  );
}
