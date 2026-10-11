import { PageHero } from "@/components/PageHero";
import { ProjectGrid } from "@/components/ProjectGrid";
import { CTASection } from "@/components/CTASection";
import { projects } from "@/content/projects";
import { pageMeta } from "@/lib/metadata";

export const metadata = pageMeta({
  title: "Our Projects",
  description: "Browse traditional and modular interiors by Illam Interiors, Chennai — vaasakal, pooja rooms, traditional furniture and modular interiors.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <PageHero eyebrow="Portfolio" title="Our projects" intro="Traditional and modular work side by side. Filter by type and tap any photo to view it full-screen." />
      <section className="section">
        <div className="container-x"><ProjectGrid projects={projects} /></div>
      </section>
      <CTASection />
    </>
  );
}
