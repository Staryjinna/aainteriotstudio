import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { credits } from "@/content/credits";

export const metadata: Metadata = {
  title: "Photo credits",
  description: "Attribution for placeholder photographs used on this site.",
  alternates: { canonical: "/credits" },
  robots: { index: false },
};

export default function CreditsPage() {
  return (
    <>
      <PageHero title="Photo credits" intro="Some photographs on this site are placeholders from the open-licensed works below. Illam Interiors' own project photos will replace them." />
      <section className="section">
        <ul className="container-x space-y-4 text-sm">
          {credits.map((c) => (
            <li key={c.file} className="rounded-xl border border-line bg-card p-4">
              <p className="font-semibold">{c.title}</p>
              <p className="text-muted">
                by {c.creator} · <a href={c.licenseUrl} className="underline" target="_blank" rel="noopener noreferrer">{c.license}</a> ·{" "}
                <a href={c.source} className="underline" target="_blank" rel="noopener noreferrer">source</a>. Resized and cropped.
              </p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
