import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/content/site";

export function WhatsAppFab() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-4 right-4 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#1a7f43] text-white shadow-lg transition hover:scale-105"
    >
      <MessageCircle size={28} aria-hidden />
    </a>
  );
}
