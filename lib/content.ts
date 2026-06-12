import siteContent from "@/content/site.en.json";

export type CorporatePage = (typeof siteContent.corporate)[number];
export type CapabilityItem = (typeof siteContent.capabilities.items)[number];

export const content = siteContent;

export function getCorporatePage(slug: string) {
  return content.corporate.find((page) => page.slug === slug);
}

export function getCapability(slug: string) {
  return content.capabilities.items.find((item) => item.slug === slug);
}
