"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Lightbox } from "./Lightbox";
import { projectTypes, typeLabels, type Project, type ProjectType } from "@/content/projects";

export function ProjectGrid({ projects, showFilters = true }: { projects: Project[]; showFilters?: boolean }) {
  const [filter, setFilter] = useState<ProjectType | "all">("all");
  const [active, setActive] = useState<{ project: Project; index: number | null } | null>(null);

  const visible = useMemo(() => (filter === "all" ? projects : projects.filter((p) => p.type === filter)), [filter, projects]);
  const available = projectTypes.filter((t) => projects.some((p) => p.type === t));

  return (
    <div>
      {showFilters && (
        <div role="group" aria-label="Filter projects" className="mb-8 flex flex-wrap gap-2">
          {(["all", ...available] as const).map((t) => (
            <button
              key={t}
              type="button"
              aria-pressed={filter === t}
              onClick={() => setFilter(t)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${filter === t ? "border-accent-dark bg-accent-dark text-white" : "border-line bg-card hover:border-accent"}`}
            >
              {t === "all" ? "All" : typeLabels[t]}
            </button>
          ))}
        </div>
      )}
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p) => (
          <li key={p.slug} className="overflow-hidden rounded-2xl border border-line bg-card">
            <button type="button" onClick={() => setActive({ project: p, index: 0 })} aria-label={`View photos of ${p.title}, ${p.location}`} className="group relative block aspect-[4/3] w-full overflow-hidden">
              <Image src={p.cover.src} alt={p.cover.alt} fill sizes="(min-width:1024px) 22rem, (min-width:640px) 45vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
            </button>
            <div className="flex items-start justify-between gap-3 p-4">
              <div>
                <h3 className="text-xl">{p.title}</h3>
                <p className="text-sm text-muted">{typeLabels[p.type]} · {p.location}</p>
              </div>
              <Link href={`/projects/${p.slug}`} className="shrink-0 text-sm font-semibold text-accent-dark hover:underline">Details</Link>
            </div>
          </li>
        ))}
      </ul>
      {active && (
        <Lightbox
          images={active.project.images}
          index={active.index}
          onChange={(i) => setActive(i === null ? null : { ...active, index: i })}
        />
      )}
    </div>
  );
}
