import { site } from "@/content/site";

export function StatsBar() {
  const stats = [
    { value: `${site.yearsExperience}+`, label: "Years of experience" },
    { value: site.projectsCount, label: "Projects delivered" },
    { value: "Turnkey", label: "Design to handover" },
    { value: site.cities.join(" · "), label: "Cities we serve" },
  ];
  return (
    <section aria-label="Studio highlights" className="border-b border-line bg-card">
      <dl className="container-x grid grid-cols-2 gap-y-6 py-8 text-center md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label}>
            <dt className="sr-only">{s.label}</dt>
            <dd className="font-heading text-3xl font-semibold text-accent-dark md:text-4xl">{s.value}</dd>
            <p className="mt-1 text-sm text-muted" aria-hidden>{s.label}</p>
          </div>
        ))}
      </dl>
    </section>
  );
}
