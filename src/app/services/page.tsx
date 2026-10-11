import { PageHero } from "@/components/PageHero";
import { ServiceCard } from "@/components/ServiceCard";
import { CTASection } from "@/components/CTASection";
import { services } from "@/content/services";
import { pageMeta } from "@/lib/metadata";

export const metadata = pageMeta({
  title: "Interior Design Services in Chennai",
  description: "Vaasakal & main doors, pooja rooms, traditional furniture, modular kitchens, wardrobes, false ceilings and complete turnkey home interiors in Chennai.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Services" title="Traditional craft. Modular precision." intro="From a single modular kitchen to a complete turnkey home, our team handles design, carpentry, manufacturing and installation across Chennai." />
      <section className="section">
        <div className="container-x grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => <ServiceCard key={s.slug} service={s} />)}
        </div>
      </section>
      <CTASection />
    </>
  );
}
