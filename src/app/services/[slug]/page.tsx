import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { getService, services } from "@/content/services";
import { pageMeta } from "@/lib/metadata";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return pageMeta({ title: `${s.title} in Chennai`, description: `${s.short} ${s.long}`.slice(0, 158), path: `/services/${s.slug}`, image: s.image.src });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();
  return (
    <>
      <PageHero eyebrow="Service" title={s.title} intro={s.short} />
      <section className="section">
        <div className="container-x grid items-start gap-10 md:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image src={s.image.src} alt={s.image.alt} fill priority sizes="(min-width:768px) 36rem, 100vw" className="object-cover" />
          </div>
          <div>
            <p className="text-lg leading-relaxed text-muted">{s.long}</p>
            <ul className="mt-6 space-y-3">
              {s.features.map((f) => <li key={f} className="flex gap-3"><Check className="mt-0.5 shrink-0 text-accent-dark" size={18} aria-hidden />{f}</li>)}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn btn-primary">Get a free quote</Link>
              <Link href="/projects" className="btn btn-outline border-line">See our projects</Link>
            </div>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
