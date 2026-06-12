import Link from "next/link";

import { content } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="bg-[rgb(16,38,63)] text-[rgb(245,244,241)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[1.3fr_1fr_1fr] lg:px-10">
        <div>
          <p className="eyebrow text-sm text-[rgb(214,210,200)]">{content.site.name}</p>
          <h3 className="mt-3 font-[family-name:var(--font-heading)] text-3xl uppercase tracking-wide">
            {content.site.tagline}
          </h3>
        </div>

        <div>
          <p className="eyebrow text-sm text-[rgb(214,210,200)]">Explore</p>
          <div className="mt-4 flex flex-col gap-3 text-sm">
            {content.navigation.map((item) => (
              <Link key={item.href} href={item.href} className="opacity-85 transition-opacity hover:opacity-100">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="eyebrow text-sm text-[rgb(214,210,200)]">Contact</p>
          <div className="mt-4 space-y-3 text-sm">
            <p>{content.site.email}</p>
            <p>{content.site.phone}</p>
            <p>{content.contact.address}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
