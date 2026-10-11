import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { MapEmbed } from "@/components/MapEmbed";
import { fullAddress, site, whatsappUrl } from "@/content/site";
import { pageMeta } from "@/lib/metadata";

export const metadata = pageMeta({
  title: "Contact & Free Consultation",
  description: `Book a free home interior consultation in Chennai. Call ${site.phone}, WhatsApp us or visit our studio in Pallikaranai.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Book your free consultation" intro="Tell us about your home and we'll call you back to arrange a site visit." />
      <section className="section">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          <ContactForm />
          <div className="space-y-6">
            <ul className="space-y-4">
              <li className="flex gap-3"><Phone className="mt-1 shrink-0 text-accent-dark" size={20} aria-hidden /><a href={site.phoneHref} className="text-lg font-semibold hover:underline">{site.phone}</a></li>
              <li className="flex gap-3"><MessageCircle className="mt-1 shrink-0 text-accent-dark" size={20} aria-hidden /><a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold hover:underline">Chat on WhatsApp</a></li>
              {site.email && <li className="flex gap-3"><Mail className="mt-1 shrink-0 text-accent-dark" size={20} aria-hidden /><a href={`mailto:${site.email}`} className="break-all hover:underline">{site.email}</a></li>}
              <li className="flex gap-3"><MapPin className="mt-1 shrink-0 text-accent-dark" size={20} aria-hidden /><span>{fullAddress}</span></li>
              <li className="flex gap-3"><Clock className="mt-1 shrink-0 text-accent-dark" size={20} aria-hidden /><span>{site.hours}</span></li>
            </ul>
            <MapEmbed />
          </div>
        </div>
      </section>
    </>
  );
}
