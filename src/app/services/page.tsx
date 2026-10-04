import { PageHero } from "@/components/PageHero";
import { ServiceCard } from "@/components/ServiceCard";
import { CTASection } from "@/components/CTASection";
import { services } from "@/content/services";
import { pageMeta } from "@/lib/metadata";

export const metadata = pageMeta({
  title: "Interior Design Services in Chennai",
  description: "Complete home interiors, modular kitchens, wardrobes, false ceilings, living & bedroom interiors, commercial interiors and 3D visualisation in Chennai.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Services" title="Everything your interior needs, under one roof" intro="From a single modular kitchen to a complete turnkey home, our team handles design, manufacturing and installation." />
      <section className="section">
        <div className="container-x grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => <ServiceCard key={s.slug} service={s} />)}
        </div>
      </section>
      <CTASection />
    </>
  );
}
