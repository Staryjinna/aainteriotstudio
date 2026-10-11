"use client";

import { useActionState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { submitContact, type FormState } from "@/app/contact/actions";
import { propertyTypes } from "@/content/form";

const initial: FormState = { status: "idle" };
const field = "mt-1 w-full rounded-xl border border-line bg-card px-4 py-3 text-base focus:border-accent-dark";

export function ContactForm() {
  const [state, action, pending] = useActionState(submitContact, initial);

  useEffect(() => {
    if (state.status === "whatsapp" && state.whatsappUrl) window.open(state.whatsappUrl, "_blank", "noopener,noreferrer");
  }, [state]);

  if (state.status === "success") {
    return (
      <div role="status" className="rounded-2xl border border-line bg-card p-8 text-center">
        <h2 className="text-3xl">Thank you!</h2>
        <p className="mt-2 text-muted">{state.message}</p>
      </div>
    );
  }

  const err = (k: string) => state.errors?.[k]?.[0];
  return (
    <form action={action} className="space-y-4 rounded-2xl border border-line bg-card p-6 md:p-8" noValidate>
      {/* honeypot */}
      <div className="absolute -left-[9999px]" aria-hidden>
        <label>Website<input type="text" name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>

      <div>
        <label htmlFor="name" className="text-sm font-medium">Name</label>
        <input id="name" name="name" required autoComplete="name" aria-invalid={!!err("name")} className={field} />
        {err("name") && <p className="mt-1 text-sm text-red-700">{err("name")}</p>}
      </div>
      <div>
        <label htmlFor="phone" className="text-sm font-medium">Phone / WhatsApp</label>
        <input id="phone" name="phone" type="tel" required autoComplete="tel" inputMode="tel" aria-invalid={!!err("phone")} className={field} />
        {err("phone") && <p className="mt-1 text-sm text-red-700">{err("phone")}</p>}
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="propertyType" className="text-sm font-medium">Property type</label>
          <select id="propertyType" name="propertyType" required defaultValue="" aria-invalid={!!err("propertyType")} className={field}>
            <option value="" disabled>Select…</option>
            {propertyTypes.map((p) => <option key={p}>{p}</option>)}
          </select>
          {err("propertyType") && <p className="mt-1 text-sm text-red-700">{err("propertyType")}</p>}
        </div>
        <div>
          <label htmlFor="budget" className="text-sm font-medium">Budget (optional)</label>
          <input id="budget" name="budget" placeholder="e.g. ₹10 lakhs" className={field} />
        </div>
      </div>
      <div>
        <label htmlFor="location" className="text-sm font-medium">Location</label>
        <input id="location" name="location" required placeholder="e.g. Pallikaranai, Chennai" aria-invalid={!!err("location")} className={field} />
        {err("location") && <p className="mt-1 text-sm text-red-700">{err("location")}</p>}
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-medium">Message (optional)</label>
        <textarea id="message" name="message" rows={4} className={field} />
      </div>

      <button type="submit" disabled={pending} className="btn btn-primary w-full disabled:opacity-60">{pending ? "Sending…" : "Request free consultation"}</button>

      {state.status === "error" && <p role="alert" className="text-sm text-red-700">{state.message}</p>}
      {state.status === "whatsapp" && state.whatsappUrl && (
        <p role="status" className="text-sm text-muted">
          {state.message}{" "}
          <a href={state.whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-semibold text-accent-dark underline">
            <MessageCircle size={14} aria-hidden /> Open WhatsApp
          </a>
        </p>
      )}
    </form>
  );
}
