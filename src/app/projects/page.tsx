import { PageHero } from "@/components/PageHero";
import { ProjectGrid } from "@/components/ProjectGrid";
import { CTASection } from "@/components/CTASection";
import { projects } from "@/content/projects";
import { pageMeta } from "@/lib/metadata";

export const metadata = pageMeta({
  title: "Our Projects",
  description: "Browse modular kitchens, wardrobes, living rooms, bedrooms, false ceilings and commercial interiors by AA Interior Design Studio, Chennai.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <PageHero eyebrow="Portfolio" title="Our projects" intro="Filter by room type and tap any photo to view it full-screen." />
      <section className="section">
        <div className="container-x"><ProjectGrid projects={projects} /></div>
      </section>
      <CTASection />
    </>
  );
}
