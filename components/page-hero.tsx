import Image from "next/image";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  intro: string;
  dark?: boolean;
};

export function PageHero({ eyebrow, title, intro, dark = false }: PageHeroProps) {
  return (
    <section
      className={
        dark
          ? "relative overflow-hidden bg-[rgb(16,38,63)] text-[rgb(245,244,241)]"
          : "text-[rgb(16,38,63)]"
      }
    >
      {dark ? (
        <>
          <Image
            src="/images/arma_ilisu_main.webp"
            alt="Arma Infrastructure main project visual"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,38,63,0.88)_0%,rgba(16,38,63,0.72)_38%,rgba(16,38,63,0.55)_60%,rgba(16,38,63,0.68)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.15),rgba(0,0,0,0.35))]" />
        </>
      ) : null}

      <div className={`mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24 ${dark ? "relative z-10" : ""}`}>
        <p className="eyebrow text-sm opacity-80">{eyebrow}</p>
        <h1 className="mt-5 max-w-4xl font-[family-name:var(--font-heading)] text-5xl uppercase leading-none tracking-[0.02em] lg:text-7xl">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-7 opacity-90 lg:text-lg">{intro}</p>
      </div>
    </section>
  );
}
