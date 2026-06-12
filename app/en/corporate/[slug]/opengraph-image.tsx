import { content, getCorporatePage } from "@/lib/content";
import { ogContentType, ogSize, renderOgCard } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return content.corporate.map((page) => ({ slug: page.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getCorporatePage(slug);

  return renderOgCard({
    eyebrow: page?.eyebrow ?? "Corporate",
    title: page?.title ?? "Arma Infrastructure",
    detail: page?.intro,
  });
}
