import Link from "next/link";

import { content } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="bg-[rgb(16,38,63)] text-[rgb(245,244,241)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[1.2fr_0.9fr_1fr_1.1fr] lg:px-10">
        <div>
          <p className="eyebrow text-sm text-[rgb(214,210,200)]">{content.site.name}</p>
          <h3 className="mt-3 font-[family-name:var(--font-heading)] text-3xl uppercase tracking-wide">
            {content.site.tagline}
          </h3>
          <p className="mt-4 max-w-md text-sm leading-7 text-[rgb(214,210,200)]">
            Ankara-based infrastructure contractor focused on heavy civil, water, transport, and structural systems.
          </p>
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
          <p className="eyebrow text-sm text-[rgb(214,210,200)]">Office</p>
          <div className="mt-4 space-y-3 text-sm leading-7 text-[rgb(214,210,200)]">
            <p>Ankara, Turkey</p>
            <p>{content.contact.address}</p>
          </div>
        </div>

        <div>
          <p className="eyebrow text-sm text-[rgb(214,210,200)]">Contact</p>
          <div className="mt-4 space-y-3 text-sm">
            <p>
              <a href={`mailto:${content.site.email}`} className="opacity-85 transition-opacity hover:opacity-100">
                {content.site.email}
              </a>
            </p>
            <p>
              <a href="tel:+903122342106" className="opacity-85 transition-opacity hover:opacity-100">
                {content.site.phone}
              </a>
            </p>
            <p className="text-[rgb(214,210,200)]">For infrastructure and project inquiries</p>
          </div>
        </div>
      </div>
      <div className="border-t border-[rgba(245,244,241,0.12)]">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 text-xs uppercase tracking-[0.14em] text-[rgb(214,210,200)] lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <p>© 2026 Arma Infrastructure. All rights reserved.</p>
          <p>Heavy Civil | Water Infrastructure | Transport Structures</p>
        </div>
      </div>
    </footer>
  );
}
