"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { Img } from "@/lib/images";

type Props = { images: Img[]; index: number | null; onChange: (i: number | null) => void };

/** Controlled modal image viewer (Esc closes, arrow keys navigate). */
export function Lightbox({ images, index, onChange }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const open = index !== null;
  const step = useCallback(
    (d: number) => onChange(index === null ? null : (index + d + images.length) % images.length),
    [index, images.length, onChange],
  );

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onChange(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, step, onChange]);

  if (index === null) return null;
  const img = images[index];
  return (
    <div role="dialog" aria-modal="true" aria-label="Image viewer" className="fixed inset-0 z-[90] flex items-center justify-center bg-black/90 p-4" onClick={() => onChange(null)}>
      <button ref={closeRef} type="button" aria-label="Close" onClick={() => onChange(null)} className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white/15 text-white hover:bg-white/25">
        <X aria-hidden />
      </button>
      {images.length > 1 && (
        <>
          <button type="button" aria-label="Previous image" onClick={(e) => { e.stopPropagation(); step(-1); }} className="absolute left-2 grid h-11 w-11 place-items-center rounded-full bg-white/15 text-white hover:bg-white/25 md:left-6">
            <ChevronLeft aria-hidden />
          </button>
          <button type="button" aria-label="Next image" onClick={(e) => { e.stopPropagation(); step(1); }} className="absolute right-2 grid h-11 w-11 place-items-center rounded-full bg-white/15 text-white hover:bg-white/25 md:right-6">
            <ChevronRight aria-hidden />
          </button>
        </>
      )}
      <div className="relative h-[80vh] w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
        <Image src={img.src} alt={img.alt} fill sizes="100vw" className="object-contain" />
      </div>
    </div>
  );
}

/** Thumbnail grid that opens the lightbox — used on project detail pages. */
export function LightboxGallery({ images }: { images: Img[] }) {
  const [index, setIndex] = useState<number | null>(null);
  return (
    <>
      <ul className="grid gap-4 sm:grid-cols-2">
        {images.map((img, i) => (
          <li key={img.src + i}>
            <button type="button" onClick={() => setIndex(i)} className="relative block aspect-[4/3] w-full overflow-hidden rounded-2xl" aria-label={`Open image: ${img.alt}`}>
              <Image src={img.src} alt={img.alt} fill sizes="(min-width:640px) 50vw, 100vw" className="object-cover transition duration-500 hover:scale-105" />
            </button>
          </li>
        ))}
      </ul>
      <Lightbox images={images} index={index} onChange={setIndex} />
    </>
  );
}
