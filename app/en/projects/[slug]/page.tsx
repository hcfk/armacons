import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { ContentSection } from "@/components/content-section";
import { DetailSections } from "@/components/detail-sections";
import { PageHero } from "@/components/page-hero";
import { content, getProject } from "@/lib/content";
import { buildPageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return content.projects.items.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {};
  }

  return buildPageMetadata({
    title: project.seoTitle ?? project.title,
    description: project.seoDescription ?? project.summary,
    path: `/en/projects/${slug}`,
    image: `/en/projects/${slug}/opengraph-image`,
  });
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <PageHero
        eyebrow="Projects"
        title={project.title}
        intro={project.summary}
        dark
        imageSrc={project.heroImage}
        imageAlt={project.title}
      />

      <section className="mx-auto -mt-8 max-w-7xl px-6 pb-12 lg:px-10">
        <div className="grid gap-px overflow-hidden rounded-[28px] bg-[rgba(16,38,63,0.08)] md:grid-cols-2 xl:grid-cols-4">
          <div className="bg-[rgb(245,244,241)] px-8 py-7">
            <p className="eyebrow text-xs text-[rgb(46,91,122)]">Location</p>
            <p className="mt-3 text-sm font-semibold text-[rgb(16,38,63)]">{project.location}</p>
          </div>
          <div className="bg-[rgb(245,244,241)] px-8 py-7">
            <p className="eyebrow text-xs text-[rgb(46,91,122)]">Category</p>
            <p className="mt-3 text-sm font-semibold text-[rgb(16,38,63)]">{project.category}</p>
          </div>
          <div className="bg-[rgb(245,244,241)] px-8 py-7">
            <p className="eyebrow text-xs text-[rgb(46,91,122)]">Status</p>
            <p className="mt-3 text-sm font-semibold text-[rgb(16,38,63)]">{project.status}</p>
          </div>
          <div className="bg-[rgb(245,244,241)] px-8 py-7">
            <p className="eyebrow text-xs text-[rgb(46,91,122)]">Project Period</p>
            <p className="mt-3 text-sm font-semibold text-[rgb(16,38,63)]">{project.period}</p>
          </div>
        </div>
      </section>

      <ContentSection body={project.body} />
      {project.sections?.length ? <DetailSections sections={project.sections} /> : null}

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-10 lg:pb-16">
        <div className="section-frame rounded-[28px] p-8 lg:p-12">
          <p className="eyebrow text-sm text-[rgb(46,91,122)]">Technical Highlights</p>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {project.highlights.map((item) => (
              <div key={item.label} className="rounded-[22px] border border-[rgba(16,38,63,0.08)] bg-white/80 p-6">
                <p className="text-xs uppercase tracking-[0.14em] text-[rgb(46,91,122)]">{item.label}</p>
                <p className="mt-3 font-[family-name:var(--font-heading)] text-3xl uppercase leading-tight text-[rgb(16,38,63)]">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-10 lg:pb-24">
        <p className="eyebrow text-sm text-[rgb(46,91,122)]">Project Gallery</p>
        <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {project.gallery.map((image, index) => (
            <div key={image} className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-[rgba(16,38,63,0.08)]">
              <Image
                src={image}
                alt={`${project.title} gallery image ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
