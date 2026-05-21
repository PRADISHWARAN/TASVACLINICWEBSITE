import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/site";

export function FloatingWhatsApp() {
  return (
    <a
      href={buildWhatsAppLink("Hi Tasvaa, I'd like to book a consultation.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-5 sm:right-6 z-40 flex items-center gap-2.5 group"
    >
      {/* Tooltip label — visible on hover */}
      <span className="hidden sm:flex items-center rounded-full bg-coffee text-primary-foreground text-xs font-medium px-3.5 py-2 shadow-soft opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap">
        Chat with us
      </span>

      {/* Button */}
      <div className="relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-luxe hover:scale-105 transition-transform duration-300">
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-50 animate-ping" />
        <MessageCircle className="relative h-6 w-6" />
      </div>
    </a>
  );
}
