import Image from "next/image";
import Link from "next/link";

import { ProjectItem } from "@/lib/content";

type ProjectGridProps = {
  items: ProjectItem[];
  eyebrow?: string;
  title?: string;
  intro?: string;
};

export function ProjectGrid({ items, eyebrow, title, intro }: ProjectGridProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-14 lg:px-10 lg:py-20">
      {eyebrow || title || intro ? (
        <div className="mb-8 max-w-3xl">
          {eyebrow ? <p className="eyebrow text-sm text-[rgb(46,91,122)]">{eyebrow}</p> : null}
          {title ? (
            <h2 className="mt-3 font-[family-name:var(--font-heading)] text-4xl uppercase text-[rgb(16,38,63)]">
              {title}
            </h2>
          ) : null}
          {intro ? <p className="mt-4 text-base leading-8 text-[rgb(42,46,51)]">{intro}</p> : null}
        </div>
      ) : null}
      <div className="grid gap-8 lg:grid-cols-2">
        {items.map((item) => (
          <Link
            key={item.slug}
            href={`/en/projects/${item.slug}`}
            className="group overflow-hidden rounded-[30px] border border-[rgba(16,38,63,0.1)] bg-white/80 transition-all hover:-translate-y-1 hover:border-[rgba(60,136,181,0.35)]"
          >
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image
                src={item.heroImage}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="p-8">
              <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.14em] text-[rgb(46,91,122)]">
                <span>{item.category}</span>
                <span>{item.location}</span>
              </div>
              <h2 className="mt-4 font-[family-name:var(--font-heading)] text-4xl uppercase leading-tight text-[rgb(16,38,63)]">
                {item.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-[rgb(42,46,51)]">{item.summary}</p>
              <div className="mt-6 flex items-center justify-between text-sm">
                <span className="font-semibold text-[rgb(16,38,63)]">{item.status}</span>
                <span className="font-semibold text-[rgb(60,136,181)]">Open project</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
