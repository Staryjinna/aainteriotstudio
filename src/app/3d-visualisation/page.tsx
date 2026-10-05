import Image from "next/image";
import { Box, Film, Glasses } from "lucide-react";
import { PageHero, SectionHeading } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { P, unsplash } from "@/lib/images";
import { pageMeta } from "@/lib/metadata";

export const metadata = pageMeta({
  title: "3D Interior Visualisation",
  description: "See your home before it's built: photorealistic 3D renders, 360° VR walkthroughs and walkthrough animations from Interiors By RB, Pune & Mumbai.",
  path: "/3d-visualisation",
});

const items = [
  { icon: Box, title: "Photorealistic renders", text: "Accurate colours, materials and lighting for every room, so there are no surprises." },
  { icon: Glasses, title: "360° VR walkthroughs", text: "Look around your future home from every angle before production starts." },
  { icon: Film, title: "Walkthrough animations", text: "A guided video tour of your design that you can share with family." },
];

export default function VisualisationPage() {
  return (
    <>
      <PageHero eyebrow="3D visualisation" title="See your home before it is built" intro="Finalise layouts, finishes and colours with confidence — before a single panel is cut." />
      <section className="section">
        <div className="container-x">
          <div className="relative mb-12 aspect-[16/9] overflow-hidden rounded-2xl">
            {/* /images/services/3d.jpg — replace with a real render */}
            <Image src={unsplash(P.livingModern)} alt="Photorealistic 3D rendered living room" fill priority sizes="(min-width:1152px) 72rem, 100vw" className="object-cover" />
          </div>
          <SectionHeading title="What you get" />
          <ul className="grid gap-5 md:grid-cols-3">
            {items.map(({ icon: Icon, title, text }) => (
              <li key={title} className="rounded-2xl border border-line bg-card p-6">
                <Icon className="text-accent-dark" aria-hidden />
                <h3 className="mt-3 text-2xl">{title}</h3>
                <p className="mt-2 text-sm text-muted">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CTASection />
    </>
  );
}
