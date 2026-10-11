import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { nav } from "@/content/nav";
import { site } from "@/content/site";
import { MobileNav } from "./MobileNav";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/90 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2.5" aria-label={`${site.name} home`}>
          <Image src="/images/logo-mark.png" alt="" width={36} height={37} className="h-9 w-auto" />
          <span className="font-heading text-2xl font-semibold leading-none tracking-wide">ILLAM <span className="text-accent-dark">Interiors</span></span>
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-6 text-sm font-medium lg:flex">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="hover:text-accent-dark">{n.label}</Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href={site.phoneHref} className="hidden items-center gap-2 text-sm font-medium xl:flex">
            <Phone size={16} aria-hidden /> {site.phone}
          </a>
          <Link href="/contact" className="btn btn-primary !px-4 !py-2 text-sm">Free Consultation</Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
