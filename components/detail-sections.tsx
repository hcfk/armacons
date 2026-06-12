import { DetailSection } from "@/lib/content";

export function DetailSections({ sections }: { sections: DetailSection[] }) {
  if (!sections.length) {
    return null;
  }

  return (
    <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-10 lg:pb-24">
      <div className="grid gap-6 lg:grid-cols-2">
        {sections.map((section) => (
          <div
            key={section.title}
            className="rounded-[28px] border border-[rgba(16,38,63,0.08)] bg-white/80 p-8 shadow-[0_18px_50px_rgba(16,38,63,0.06)]"
          >
            <h2 className="font-[family-name:var(--font-heading)] text-3xl uppercase leading-tight text-[rgb(16,38,63)]">
              {section.title}
            </h2>
            {section.intro ? (
              <p className="mt-4 text-sm leading-7 text-[rgb(42,46,51)]">{section.intro}</p>
            ) : null}
            <div className="mt-6 space-y-4">
              {section.items.map((item) => (
                <div key={item} className="rounded-[22px] bg-[rgb(245,244,241)] px-5 py-4 text-sm leading-7 text-[rgb(42,46,51)]">
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
