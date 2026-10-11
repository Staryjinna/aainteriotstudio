import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { site } from "@/content/site";
import { T } from "@/lib/images";

export function Hero() {
  return (
    <section className="bg-ink text-white">
      <div className="container-x grid items-center gap-10 py-14 md:grid-cols-2 md:py-20">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#e0b27c]">Premium interiors · Chennai</p>
          <h1 className="text-5xl md:text-7xl">Tradition, beautifully modern.</h1>
          <p lang="ta" className="mt-4 text-lg text-white/70">{site.tamilName}</p>
          <p className="mt-5 max-w-xl text-lg text-white/85">{site.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn btn-primary">Book free consultation</Link>
            <a href={site.phoneHref} className="btn btn-outline"><Phone size={16} aria-hidden /> {site.phone}</a>
          </div>
        </div>
        <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-t-[999px] border border-white/20 md:max-w-md">
          <Image
            src={T.vaasal.src} // /images/hero.jpg
            alt={T.vaasal.alt}
            fill
            priority
            quality={60}
            sizes="(min-width:768px) 28rem, 24rem"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
