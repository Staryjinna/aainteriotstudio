import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { LightboxGallery } from "@/components/Lightbox";
import { CTASection } from "@/components/CTASection";
import { getProject, projects, typeLabels } from "@/content/projects";
import { pageMeta } from "@/lib/metadata";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  return pageMeta({ title: `${p.title} – ${typeLabels[p.type]} Interior, ${p.location}`, description: p.summary, path: `/projects/${p.slug}`, image: p.cover.src });
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();
  return (
    <>
      <PageHero eyebrow={`${typeLabels[p.type]} · ${p.location}`} title={p.title} intro={p.summary} />
      <section className="section">
        <div className="container-x">
          <LightboxGallery images={p.images} />
          <Link href="/projects" className="mt-8 inline-block font-semibold text-accent-dark hover:underline">← All projects</Link>
        </div>
      </section>
      <CTASection />
    </>
  );
}
