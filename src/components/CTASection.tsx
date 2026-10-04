import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";
import { site, whatsappUrl } from "@/content/site";

export function CTASection() {
  return (
    <section className="section">
      <div className="container-x">
        <div className="rounded-3xl bg-ink px-6 py-14 text-center text-white md:px-16">
          <h2 className="mx-auto max-w-2xl text-3xl md:text-5xl">Ready to plan your dream home?</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/75">Book a free consultation at your home. We&apos;ll visit, measure and talk through ideas and budget — no obligation.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn btn-primary">Get a free quote</Link>
            <a href={site.phoneHref} className="btn btn-outline"><Phone size={16} aria-hidden /> Call {site.phone}</a>
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="btn btn-outline"><MessageCircle size={16} aria-hidden /> WhatsApp</a>
          </div>
        </div>
      </div>
    </section>
  );
}
