import Image from "next/image";
import { PageHero, SectionHeading } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { fullAddress, site } from "@/content/site";
import { T } from "@/lib/images";
import { pageMeta } from "@/lib/metadata";

export const metadata = pageMeta({
  title: "About Us",
  description: `${site.name} is a Chennai interior design studio led by ${site.owner}, blending traditional woodwork — vaasakal, pooja rooms, oonjal — with modern modular interiors.`,
  path: "/about",
});

const why = [
  "Traditional and modular interiors under one roof",
  "Solid-wood vaasakal, carved doors and pooja rooms",
  "Modular kitchens and wardrobes made to exact measurements",
  "Turnkey: design, 3D visualisation, production and installation",
  "A studio in Pallikaranai — close to the homes we build",
];

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About us" title="Illam: a home that honours where you come from" intro="In Tamil, illam means home. Our work starts there." />
      <section className="section">
        <div className="container-x grid items-center gap-10 md:grid-cols-2">
          <div className="space-y-5 text-lg leading-relaxed text-muted">
            {/* TODO: verify — copy written from the brief; replace with the owner's own story */}
            <p>{site.name} is a Chennai interior design studio led by {site.owner}. We design premium homes that carry the warmth of Tamil tradition — carved teak vaasakal, pooja rooms, oonjal swings — alongside the efficiency of modern modular kitchens, wardrobes and storage.</p>
            <p>One team carries your project from the first site visit and 3D design through carpentry, manufacturing and installation, so quality, cost and timeline have a single point of responsibility.</p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            {/* /images/team/studio.jpg */}
            <Image src={T.hallTrad.src} alt={T.hallTrad.alt} fill sizes="(min-width:768px) 36rem, 100vw" className="object-cover" />
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
            <SectionHeading eyebrow="Meet the owner" title={site.owner} />
            <p className="text-muted">{site.owner} leads every project personally, from the first consultation at your home to the day of handover.</p>
            <p className="mt-6 font-semibold">Studio</p>
            <p className="text-muted">{fullAddress}</p>
            <p lang="ta" className="mt-8 text-2xl text-accent-dark">{site.tamilName}</p>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
