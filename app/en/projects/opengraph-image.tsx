import { content } from "@/lib/content";
import { ogContentType, ogSize, renderOgCard } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgCard({
    eyebrow: content.projects.index.eyebrow,
    title: content.projects.index.title,
    detail: content.projects.index.intro,
  });
}
