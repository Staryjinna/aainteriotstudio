import Image from "next/image";
import { PageHero, SectionHeading } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { citiesLabel, site } from "@/content/site";
import { P, unsplash } from "@/lib/images";
import { pageMeta } from "@/lib/metadata";

export const metadata = pageMeta({
  title: "About Us",
  description: `${site.name}: ${site.yearsExperience}+ years of experience and ${site.projectsCount} projects delivering luxury, turnkey full-home interiors in ${site.cities.join(" and ")}.`,
  path: "/about",
});

const why = [
  "Luxury design with premium materials and finishes",
  "Turnkey solutions — design, manufacturing and execution under one team",
  "Full home interiors, from first sketch to handover",
  "Experience across apartments, villas and commercial spaces",
  "Serving homeowners in Pune and Mumbai",
];

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About us" title={`${site.yearsExperience}+ years of luxury interiors`} />
      <section className="section">
        <div className="container-x grid items-center gap-10 md:grid-cols-2">
          <div className="space-y-5 text-lg leading-relaxed text-muted">
            {/* TODO: verify — copy written from the short brief; replace with the founder's own story */}
            <p>{site.name} designs luxury interiors and delivers them turnkey. With {site.yearsExperience}+ years in the field and {site.projectsCount} projects completed, we have shaped full homes across {site.cities.join(" and ")}.</p>
            <p>We start by understanding how you live, then bring together layout, materials and lighting into a home that feels refined and works beautifully every day. One team carries your project from design and 3D visualisation through manufacturing and on-site execution, so quality, cost and timeline have a single point of responsibility.</p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            {/* /images/team/studio.jpg */}
            <Image src={unsplash(P.livingBoho)} alt="Luxury interior styled by the Interiors By RB team" fill sizes="(min-width:768px) 36rem, 100vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="section bg-card">
        <div className="container-x grid gap-10 md:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Why choose us" title="What you can expect" />
            <ul className="space-y-3">
              {why.map((w) => <li key={w} className="flex gap-3"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" aria-hidden />{w}</li>)}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="At a glance" title={citiesLabel} />
            <dl className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-line p-5"><dd className="font-heading text-4xl text-accent-dark">{site.yearsExperience}+</dd><dt className="text-sm text-muted">Years of experience</dt></div>
              <div className="rounded-2xl border border-line p-5"><dd className="font-heading text-4xl text-accent-dark">{site.projectsCount}</dd><dt className="text-sm text-muted">Projects delivered</dt></div>
            </dl>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
