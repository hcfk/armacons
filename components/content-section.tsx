import Link from "next/link";

type ContentSectionProps = {
  body: string[];
  ctaHref?: string;
  ctaLabel?: string;
};

export function ContentSection({ body, ctaHref, ctaLabel }: ContentSectionProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-14 lg:px-10 lg:py-20">
      <div className="section-frame rounded-[28px] p-8 lg:p-12">
        <div className="max-w-4xl space-y-5 text-[rgb(42,46,51)]">
          {body.map((paragraph) => (
            <p key={paragraph} className="text-base leading-8 lg:text-lg">
              {paragraph}
            </p>
          ))}
        </div>

        {ctaHref && ctaLabel ? (
          <div className="mt-10">
            <Link
              href={ctaHref}
              className="inline-flex items-center rounded-full bg-[rgb(16,38,63)] px-6 py-3 text-sm font-semibold text-[rgb(245,244,241)] transition-transform hover:-translate-y-0.5"
            >
              {ctaLabel}
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
