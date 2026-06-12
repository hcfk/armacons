import siteContent from "@/content/site.en.json";

export type NavItem = {
  label: string;
  href: string;
};

export type StatItem = {
  label: string;
  value: string;
};

export type CorporatePage = {
  slug: string;
  seoTitle?: string;
  seoDescription?: string;
  title: string;
  eyebrow: string;
  intro: string;
  body: string[];
};

export type CapabilityItem = {
  slug: string;
  seoTitle?: string;
  seoDescription?: string;
  title: string;
  heroImage: string;
  cardImage?: string;
  summary: string;
  body: string[];
};

export type ProjectHighlight = {
  label: string;
  value: string;
};

export type ProjectItem = {
  slug: string;
  seoTitle?: string;
  seoDescription?: string;
  title: string;
  location: string;
  category: string;
  status: string;
  period: string;
  heroImage: string;
  gallery: string[];
  summary: string;
  body: string[];
  highlights: ProjectHighlight[];
};

export type SiteContent = {
  site: {
    name: string;
    tagline: string;
    phone: string;
    email: string;
  };
  navigation: NavItem[];
  home: {
    seoTitle: string;
    seoDescription: string;
    eyebrow: string;
    title: string;
    intro: string;
    stats: StatItem[];
  };
  corporate: CorporatePage[];
  projects: {
    index: {
      seoTitle: string;
      seoDescription: string;
      eyebrow: string;
      title: string;
      intro: string;
    };
    items: ProjectItem[];
  };
  capabilities: {
    index: {
      seoTitle: string;
      seoDescription: string;
      eyebrow: string;
      title: string;
      intro: string;
      heroImage: string;
    };
    items: CapabilityItem[];
  };
  contact: {
    eyebrow: string;
    title: string;
    intro: string;
    address: string;
  };
};

export const content = siteContent as SiteContent;

export function getCorporatePage(slug: string) {
  return content.corporate.find((page) => page.slug === slug);
}

export function getCapability(slug: string) {
  return content.capabilities.items.find((item) => item.slug === slug);
}

export function getProject(slug: string) {
  return content.projects.items.find((item) => item.slug === slug);
}
