import { content } from "@/lib/content";
import { ogContentType, ogSize, renderOgCard } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgCard({
    eyebrow: content.contact.eyebrow,
    title: content.contact.title,
    detail: "Ankara office contact details for infrastructure and heavy civil project discussions.",
  });
}
