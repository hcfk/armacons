import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";
import { content } from "@/lib/content";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact Arma Infrastructure | Ankara Office",
  description: content.contact.intro,
  path: "/en/contact",
  image: "/en/contact/opengraph-image",
});

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow={content.contact.eyebrow} title={content.contact.title} intro={content.contact.intro} />
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-10 lg:py-20">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="section-frame rounded-[28px] p-8">
            <p className="eyebrow text-xs text-[rgb(46,91,122)]">Email</p>
            <p className="mt-4 text-lg text-[rgb(16,38,63)]">{content.site.email}</p>
          </div>
          <div className="section-frame rounded-[28px] p-8">
            <p className="eyebrow text-xs text-[rgb(46,91,122)]">Phone</p>
            <p className="mt-4 text-lg text-[rgb(16,38,63)]">{content.site.phone}</p>
          </div>
          <div className="section-frame rounded-[28px] p-8">
            <p className="eyebrow text-xs text-[rgb(46,91,122)]">Location</p>
            <p className="mt-4 text-lg text-[rgb(16,38,63)]">{content.contact.address}</p>
          </div>
        </div>
      </section>
    </>
  );
}
