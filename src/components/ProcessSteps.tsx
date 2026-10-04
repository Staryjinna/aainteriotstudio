import { processSteps } from "@/content/process";
import { SectionHeading } from "./PageHero";

export function ProcessSteps() {
  return (
    <section className="section bg-[#f3ede3]">
      <div className="container-x">
        <SectionHeading eyebrow="How we work" title="From first visit to handover in six steps" />
        <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((s, i) => (
            <li key={s.title} className="reveal rounded-2xl border border-line bg-card p-6">
              <span className="font-heading text-4xl text-accent">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-2 text-2xl">{s.title}</h3>
              <p className="mt-2 text-sm text-muted">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
