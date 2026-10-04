import { Star } from "lucide-react";
import { site } from "@/content/site";

export function StatsBar() {
  const stats = [
    { value: `Since ${site.founded}`, label: "Designing Chennai homes" },
    { value: `${site.rating.value}`, label: `${site.rating.count} Google reviews`, star: true },
    { value: "End-to-end", label: "Design to handover" },
    { value: "3D", label: "Visualisation included" },
  ];
  return (
    <section aria-label="Studio highlights" className="border-b border-line bg-card">
      <dl className="container-x grid grid-cols-2 gap-y-6 py-8 text-center md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label}>
            <dt className="sr-only">{s.label}</dt>
            <dd className="flex items-center justify-center gap-1 font-heading text-3xl font-semibold text-accent-dark md:text-4xl">
              {s.value}
              {s.star && <Star size={22} className="fill-accent text-accent" aria-hidden />}
            </dd>
            <p className="mt-1 text-sm text-muted" aria-hidden>{s.label}</p>
          </div>
        ))}
      </dl>
    </section>
  );
}
