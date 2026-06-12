import { content } from "@/lib/content";
import { ogContentType, ogSize, renderOgCard } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgCard({
    eyebrow: content.capabilities.index.eyebrow,
    title: content.capabilities.index.title,
    detail: content.capabilities.index.intro,
  });
}
