import Image from "next/image";
import { Box, Layers, PenLine } from "lucide-react";
import { PageHero, SectionHeading } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { P, unsplash } from "@/lib/images";
import { pageMeta } from "@/lib/metadata";

export const metadata = pageMeta({
  title: "3D Interior Visualisation",
  description: "See your home before it's built: realistic 3D renders of your home — traditional and modular options side by side — from Illam Interiors, Chennai.",
  path: "/3d-visualisation",
});

const items = [
  { icon: Box, title: "Realistic renders", text: "Accurate colours, materials and lighting for every room, so there are no surprises." },
  { icon: Layers, title: "Traditional & modern, compared", text: "See a carved teak option and a modern laminate option for the same wall before you decide." },
  { icon: PenLine, title: "Revisions before production", text: "Refine the design with us until you are happy — before a single panel is cut." },
];

export default function VisualisationPage() {
  return (
    <>
      <PageHero eyebrow="3D visualisation" title="See your home before it is built" intro="Finalise layouts, finishes and colours with confidence — before a single panel is cut." />
      <section className="section">
        <div className="container-x">
          <div className="relative mb-12 aspect-[16/9] overflow-hidden rounded-2xl">
            {/* /images/services/3d.jpg — replace with a real render */}
            <Image src={unsplash(P.livingModern)} alt="3D rendered living room" fill priority sizes="(min-width:1152px) 72rem, 100vw" className="object-cover" />
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
