import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { site } from "@/content/site";
import { P, unsplash } from "@/lib/images";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-white">
      <Image
        src={unsplash(P.livingCream)} // /images/hero.jpg
        alt="Elegant living room designed by AA Interiors"
        fill
        priority
        quality={60}
        sizes="100vw"
        className="-z-10 object-cover opacity-55"
      />
      <div className="container-x py-24 md:py-40">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#e6cfa4]">Interior designers in Chennai · Since {site.founded}</p>
        <h1 className="max-w-3xl text-5xl md:text-7xl">Homes designed around how you live.</h1>
        <p className="mt-6 max-w-xl text-lg text-white/85">{site.tagline}</p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Link href="/contact" className="btn btn-primary">Book free consultation</Link>
          <a href={site.phoneHref} className="btn btn-outline"><Phone size={16} aria-hidden /> {site.phone}</a>
        </div>
      </div>
    </section>
  );
}
