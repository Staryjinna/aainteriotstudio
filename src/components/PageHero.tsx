export function PageHero({ title, intro, eyebrow }: { title: string; intro?: string; eyebrow?: string }) {
  return (
    <section className="border-b border-line bg-[#f3ede3]">
      <div className="container-x py-14 md:py-20">
        {eyebrow && <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent-dark">{eyebrow}</p>}
        <h1 className="max-w-3xl text-4xl md:text-6xl">{title}</h1>
        {intro && <p className="mt-5 max-w-2xl text-lg text-muted">{intro}</p>}
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, intro }: { eyebrow?: string; title: string; intro?: string }) {
  return (
    <div className="mb-10 max-w-2xl">
      {eyebrow && <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent-dark">{eyebrow}</p>}
      <h2 className="text-3xl md:text-5xl">{title}</h2>
      {intro && <p className="mt-4 text-muted">{intro}</p>}
    </div>
  );
}
