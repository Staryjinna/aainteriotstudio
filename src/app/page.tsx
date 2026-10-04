import Link from "next/link";
import { Hero } from "@/components/Hero";
import { StatsBar } from "@/components/StatsBar";
import { ServiceCard } from "@/components/ServiceCard";
import { ProjectGrid } from "@/components/ProjectGrid";
import { ProcessSteps } from "@/components/ProcessSteps";
import { ReviewCarousel } from "@/components/ReviewCarousel";
import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/PageHero";
import { services } from "@/content/services";
import { projects } from "@/content/projects";
import { reviews, reviewThemes } from "@/content/reviews";
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
          <SectionHeading eyebrow="What we do" title="Interiors for every room of your home" intro="Kitchens, wardrobes, ceilings, living spaces and complete turnkey homes — designed and built by one team." />
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

      <section className="section">
        <div className="container-x">
          <SectionHeading eyebrow="Reviews" title={`${site.rating.value}★ from ${site.rating.count} Google reviews`} intro={`Clients praise our ${reviewThemes.slice(0, 4).join(", ").toLowerCase()} and more.`} />
          <ReviewCarousel reviews={reviews} />
        </div>
      </section>

      <section className="section bg-[#f3ede3]">
        <div className="container-x grid items-center gap-8 md:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Pricing" title="Quality interiors within your budget" intro="Indicative starting prices for turnkey home interiors. Every home is different — get an exact quote after a free site visit." />
            <Link href="/contact" className="btn btn-primary">Get a free quote</Link>
          </div>
          {/* TODO: verify — pricing is from the old site and probably outdated */}
          <dl className="grid gap-4 sm:grid-cols-2">
            {[{ t: "2BHK", p: site.pricing.bhk2 }, { t: "3BHK", p: site.pricing.bhk3 }].map((x) => (
              <div key={x.t} className="rounded-2xl border border-line bg-card p-6">
                <dt className="text-sm text-muted">{x.t} home interiors</dt>
                <dd className="mt-1 font-heading text-4xl text-accent-dark"><span className="text-base font-body text-muted">from </span>{x.p}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <CTASection />
    </>
  );
}
