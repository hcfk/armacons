import { content } from "@/lib/content";
import { ogContentType, ogSize, renderOgCard } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgCard({
    eyebrow: content.home.eyebrow,
    title: content.home.title,
    detail: content.home.intro,
  });
}
