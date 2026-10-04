import Link from "next/link";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { nav } from "@/content/nav";
import { site, fullAddress } from "@/content/site";

export function Footer() {
  return (
    <footer className="mt-10 bg-ink text-white/80">
      <div className="container-x grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-heading text-3xl font-semibold text-white">{site.name}</p>
          <p lang="ta" className="mt-1 text-white/60">{site.tamilName}</p>
          <p className="mt-4 max-w-md text-sm leading-relaxed">{site.tagline}</p>
          <div className="mt-5 flex gap-4 text-sm">
            <a href={site.socials.instagram} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:underline">Instagram</a>
            <a href={site.socials.facebook} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:underline">Facebook</a>
          </div>
        </div>
        <div>
          <p className="mb-3 font-semibold text-white">Explore</p>
          <ul className="space-y-2 text-sm">
            {nav.map((n) => (
              <li key={n.href}><Link href={n.href} className="hover:text-white">{n.label}</Link></li>
            ))}
          </ul>
        </div>
        <div className="space-y-3 text-sm">
          <p className="mb-3 font-semibold text-white">Visit &amp; contact</p>
          <p className="flex gap-2"><MapPin size={16} className="mt-0.5 shrink-0" aria-hidden /> {fullAddress}</p>
          <p className="flex gap-2"><Phone size={16} className="mt-0.5 shrink-0" aria-hidden /> <a href={site.phoneHref} className="hover:text-white">{site.phone}</a></p>
          <p className="flex gap-2"><Mail size={16} className="mt-0.5 shrink-0" aria-hidden /> <a href={`mailto:${site.email}`} className="break-all hover:text-white">{site.email}</a></p>
          <p className="flex gap-2"><Clock size={16} className="mt-0.5 shrink-0" aria-hidden /> {site.hours}</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">
        © {new Date().getFullYear()} {site.name}. Interior designers in Chennai since {site.founded}.
      </div>
    </footer>
  );
}
