import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/content/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link href={`/services/${service.slug}`} className="reveal group block overflow-hidden rounded-2xl border border-line bg-card transition hover:shadow-lg">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image src={service.image.src} alt={service.image.alt} fill sizes="(min-width:1024px) 22rem, (min-width:640px) 45vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
      </div>
      <div className="p-5">
        <h3 className="text-2xl">{service.title}</h3>
        <p className="mt-2 text-sm text-muted">{service.short}</p>
      </div>
    </Link>
  );
}
