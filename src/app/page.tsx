import Link from "next/link";
import { Hero } from "@/components/Hero";
import { StatsBar } from "@/components/StatsBar";
import { ServiceCard } from "@/components/ServiceCard";
import { ProjectGrid } from "@/components/ProjectGrid";
import { ProcessSteps } from "@/components/ProcessSteps";
import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/PageHero";
import { services } from "@/content/services";
import { projects } from "@/content/projects";
import { site } from "@/content/site";
import { pageMeta } from "@/lib/metadata";

export const metadata = pageMeta({ path: "/" });

export default function HomePage() {
  const featured = projects.filter((p) => p.featured);
  return (
    <>
      <Hero />
      <StatsBar />

      <section className="section">
        <div className="container-x">
          <SectionHeading eyebrow="What we do" title="Luxury interiors for every room of your home" intro="Kitchens, wardrobes, ceilings, living spaces and complete turnkey homes — designed and built by one team." />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => <ServiceCard key={s.slug} service={s} />)}
          </div>
        </div>
      </section>

      <section className="section bg-card">
        <div className="container-x">
          <SectionHeading eyebrow="Our work" title="Featured projects" />
          <ProjectGrid projects={featured} showFilters={false} />
          <Link href="/projects" className="btn btn-primary mt-8">See all projects</Link>
        </div>
      </section>

      <ProcessSteps />

      <section className="section bg-[#f3ede3]">
        <div className="container-x">
          <SectionHeading eyebrow="Why Interiors By RB" title="Luxury design, delivered turnkey" intro={`${site.yearsExperience}+ years and ${site.projectsCount} projects across ${site.cities.join(" and ")}.`} />
          <ul className="grid gap-5 md:grid-cols-3">
            {[
              { t: "Luxury, tailored", d: "Premium materials and finishes, designed around your lifestyle." },
              { t: "Truly turnkey", d: "Design, 3D visualisation, manufacturing and execution under one team." },
              { t: "Full home interiors", d: "Every room planned as one cohesive home, from kitchen to master suite." },
            ].map((x) => (
              <li key={x.t} className="reveal rounded-2xl border border-line bg-card p-6">
                <h3 className="text-2xl">{x.t}</h3>
                <p className="mt-2 text-sm text-muted">{x.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection />
    </>
  );
}
