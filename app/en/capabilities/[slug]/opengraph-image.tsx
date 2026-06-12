import { content, getCapability } from "@/lib/content";
import { ogContentType, ogSize, renderOgCard } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return content.capabilities.items.map((item) => ({ slug: item.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const capability = getCapability(slug);

  return renderOgCard({
    eyebrow: "Capabilities",
    title: capability?.title ?? "Arma Infrastructure",
    detail: capability?.summary,
  });
}
