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
import Image from "next/image";
import { site } from "@/content/site";
import { P, T, unsplash } from "@/lib/images";
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
          <SectionHeading eyebrow="What we do" title="Interiors for every corner of your illam" intro="Vaasakal and pooja rooms to modular kitchens and wardrobes — designed and built by one team in Chennai." />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.slice(0, 8).map((s) => <ServiceCard key={s.slug} service={s} />)}
          </div>
        </div>
      </section>

      <section className="section bg-card">
        <div className="container-x">
          <SectionHeading eyebrow="Two traditions, one studio" title="Carved teak and clean modular lines" intro="Your vaasakal, pooja room and oonjal in solid wood — your kitchen and wardrobes in precision-made modular. We design them together so the whole home feels like one." />
          <div className="grid gap-5 md:grid-cols-2">
            {[
              { img: T.vaasal, label: "Traditional", text: "Vaasakal, pooja rooms, oonjal, carved woodwork", href: "/services/vaasakal-main-doors" },
              { img: { src: unsplash(P.kitchenIsland), alt: "Modern modular kitchen with island" }, label: "Modular", text: "Kitchens, wardrobes, TV units, storage", href: "/services/modular-kitchens" },
            ].map((x) => (
              <Link key={x.label} href={x.href} className="reveal group relative block aspect-[4/3] overflow-hidden rounded-2xl md:aspect-[3/2]">
                <Image src={x.img.src} alt={x.img.alt} fill sizes="(min-width:768px) 36rem, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-5 text-white">
                  <span className="block font-heading text-3xl">{x.label}</span>
                  <span className="text-sm text-white/85">{x.text}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <SectionHeading eyebrow="Our work" title="Featured projects" />
          <ProjectGrid projects={featured} showFilters={false} />
          <Link href="/projects" className="btn btn-primary mt-8">See all projects</Link>
        </div>
      </section>

      <ProcessSteps />

      <section className="section bg-[#f3ede3]">
        <div className="container-x">
          <SectionHeading eyebrow="Why Illam Interiors" title="Where tradition meets modular" intro="A Chennai home deserves both: the character of carved teak and the convenience of modern modular design." />
          <ul className="grid gap-5 md:grid-cols-3">
            {[
              { t: "Traditional craft", d: "Vaasakal, pooja rooms, oonjal and carved woodwork made by skilled carpenters." },
              { t: "Modular precision", d: "Kitchens, wardrobes and storage manufactured to exact measurements." },
              { t: "One team, turnkey", d: `Led by ${site.owner} — design, 3D visualisation, production and installation under one roof.` },
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
