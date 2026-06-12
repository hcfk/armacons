type Stat = {
  label: string;
  value: string;
};

export function StatsBand({ stats }: { stats: Stat[] }) {
  return (
    <section className="mx-auto -mt-8 max-w-7xl px-6 pb-12 lg:px-10">
      <div className="grid gap-px overflow-hidden rounded-[28px] bg-[rgba(245,244,241,0.12)] lg:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-[rgb(245,244,241)]/90 px-8 py-8">
            <p className="eyebrow text-xs text-[rgb(46,91,122)]">{stat.label}</p>
            <p className="mt-4 font-[family-name:var(--font-heading)] text-3xl uppercase text-[rgb(16,38,63)]">
              {stat.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
