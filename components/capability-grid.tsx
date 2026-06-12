import Image from "next/image";
import Link from "next/link";

import { CapabilityItem } from "@/lib/content";

export function CapabilityGrid({ items }: { items: CapabilityItem[] }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-14 lg:px-10 lg:py-20">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <Link
            key={item.slug}
            href={`/en/capabilities/${item.slug}`}
            className="group overflow-hidden rounded-[28px] border border-[rgba(16,38,63,0.1)] bg-white/75 transition-all hover:-translate-y-1 hover:border-[rgba(60,136,181,0.4)]"
          >
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image
                src={item.cardImage ?? item.heroImage}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="p-8">
              <p className="eyebrow text-xs text-[rgb(46,91,122)]">Capability</p>
              <h2 className="mt-5 font-[family-name:var(--font-heading)] text-3xl uppercase leading-tight text-[rgb(16,38,63)]">
                {item.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-[rgb(42,46,51)]">{item.summary}</p>
              <span className="mt-8 inline-flex text-sm font-semibold text-[rgb(60,136,181)]">
                Open page
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
