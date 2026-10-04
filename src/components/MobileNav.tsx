"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { nav } from "@/content/nav";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((o) => !o)}
        className="grid h-10 w-10 place-items-center rounded-full border border-line"
      >
        {open ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
      </button>
      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="absolute inset-x-0 top-16 border-b border-line bg-bg px-4 py-4 shadow-lg">
          <ul className="flex flex-col">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} onClick={() => setOpen(false)} className="block border-b border-line py-3 text-lg font-medium last:border-0">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
