import Image from "next/image";
import { PageHero, SectionHeading } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { site } from "@/content/site";
import { reviewThemes } from "@/content/reviews";
import { P, unsplash } from "@/lib/images";
import { pageMeta } from "@/lib/metadata";

export const metadata = pageMeta({
  title: "About Us",
  description: `Founded in Chennai in ${site.founded}, ${site.name} designs and builds complete interiors for homes, offices and retail spaces. ${site.rating.value}★ on Google.`,
  path: "/about",
});

const why = [
  "End-to-end, hassle-free home interiors with consultation at your home",
  "Experience on residential projects with leading Chennai builders",
  "Strong modular kitchen expertise",
  "Commercial work with Chennai corporates",
  "Highest standards, within your budget & time",
];

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About us" title="Interiors designed in Chennai, since 2013" />
      <section className="section">
        <div className="container-x grid items-center gap-10 md:grid-cols-2">
          <div className="space-y-5 text-lg leading-relaxed text-muted">
            <p>Founded in Chennai in {site.founded}, {site.name} designs and builds complete interiors for homes, offices and retail spaces. We start by understanding how you live or work, then bring together colour, materials and layout into a space that feels calm and works hard every day.</p>
            <p>One team stays with you from the first consultation to the day you move in — design, 3D visualisation, modular manufacturing and on-site execution — so there&apos;s a single point of responsibility for quality, cost and timeline.</p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            {/* /images/team/studio.jpg */}
            <Image src={unsplash(P.livingBoho)} alt="Interior styled by the AA Interiors team" fill sizes="(min-width:768px) 36rem, 100vw" className="object-cover" />
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
            <SectionHeading eyebrow="Founder" title={site.founder} />
            <p className="text-muted">{site.name} is a proprietorship led by {site.founder}, working with a team of {site.teamSize} designers, carpenters and site supervisors. {/* TODO: verify — team size conflicts between sources (11–25 vs 1–10) */}</p>
            <p className="mt-6 font-semibold">What clients say about us</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {reviewThemes.map((t) => <li key={t} className="rounded-full border border-line px-3 py-1 text-sm">{t}</li>)}
            </ul>
            <p lang="ta" className="mt-8 text-2xl text-accent-dark">{site.tamilName}</p>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
