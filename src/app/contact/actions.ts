"use server";

import { Resend } from "resend";
import { z } from "zod";
import { site, whatsappUrl } from "@/content/site";
import { propertyTypes } from "@/content/form";


const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  phone: z.string().trim().regex(/^[+\d][\d\s-]{8,16}$/, "Enter a valid phone number"),
  propertyType: z.enum(propertyTypes, { error: "Select a property type" }),
  location: z.string().trim().min(2, "Please enter your location").max(120),
  budget: z.string().trim().max(60).optional(),
  message: z.string().trim().max(2000).optional(),
  website: z.string().max(0).optional(), // honeypot — must stay empty
});

export type FormState = {
  status: "idle" | "success" | "error" | "whatsapp";
  message?: string;
  errors?: Record<string, string[] | undefined>;
  whatsappUrl?: string;
};

export async function submitContact(_prev: FormState, formData: FormData): Promise<FormState> {
  const raw = Object.fromEntries(formData) as Record<string, string>;

  // Honeypot: pretend success so bots learn nothing.
  if (raw.website) return { status: "success", message: "Thank you! We'll call you shortly." };

  const parsed = schema.safeParse(raw);
  if (!parsed.success) {
    return { status: "error", message: "Please fix the highlighted fields.", errors: z.flattenError(parsed.error).fieldErrors };
  }
  const d = parsed.data;

  const text = [
    `New enquiry — ${site.brand}`,
    `Name: ${d.name}`,
    `Phone: ${d.phone}`,
    `Property: ${d.propertyType}`,
    `Location: ${d.location}`,
    `Budget: ${d.budget || "—"}`,
    `Message: ${d.message || "—"}`,
  ].join("\n");

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !to) {
    // Email not configured: hand the enquiry to WhatsApp instead.
    return { status: "whatsapp", whatsappUrl: whatsappUrl(text), message: "Opening WhatsApp so you can send your enquiry." };
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL || `${site.brand} Website <onboarding@resend.dev>`,
      to: to.split(",").map((s) => s.trim()),
      subject: `New enquiry from ${d.name} (${d.propertyType}, ${d.location})`,
      text,
    });
    if (error) throw new Error(error.message);
    return { status: "success", message: "Thank you! We'll call you shortly." };
  } catch (e) {
    console.error("Contact form email failed", e);
    return { status: "whatsapp", whatsappUrl: whatsappUrl(text), message: "We couldn't send your message by email — please send it via WhatsApp." };
  }
}
