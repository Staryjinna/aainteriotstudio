"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import type { Review } from "@/content/reviews";

export function ReviewCarousel({ reviews }: { reviews: Review[] }) {
  const track = useRef<HTMLUListElement>(null);
  const scroll = (dir: number) => track.current?.scrollBy({ left: dir * (track.current.clientWidth * 0.8), behavior: "smooth" });
  return (
    <div>
      <ul ref={track} className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 [scrollbar-width:none] sm:mx-0 sm:px-0" tabIndex={0} aria-label="Customer reviews">
        {reviews.map((r, i) => (
          <li key={i} className="w-[85%] shrink-0 snap-start rounded-2xl border border-line bg-card p-6 sm:w-[24rem]">
            <div className="flex gap-0.5" role="img" aria-label={`${r.rating} out of 5 stars`}>
              {Array.from({ length: r.rating }).map((_, s) => <Star key={s} size={18} className="fill-accent text-accent" aria-hidden />)}
            </div>
            <blockquote className="mt-4 font-heading text-2xl leading-snug">&ldquo;{r.text}&rdquo;</blockquote>
            <p className="mt-4 text-sm text-muted">{r.name} · {r.source}</p>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex gap-2">
        <button type="button" onClick={() => scroll(-1)} aria-label="Previous reviews" className="grid h-10 w-10 place-items-center rounded-full border border-line bg-card hover:border-accent"><ChevronLeft size={18} aria-hidden /></button>
        <button type="button" onClick={() => scroll(1)} aria-label="Next reviews" className="grid h-10 w-10 place-items-center rounded-full border border-line bg-card hover:border-accent"><ChevronRight size={18} aria-hidden /></button>
      </div>
    </div>
  );
}
