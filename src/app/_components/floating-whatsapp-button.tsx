import { siteConfig } from "@/lib/site-config";

export function FloatingWhatsAppButton() {
  return (
    <a
      href={siteConfig.contact.whatsappPrimaryUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Agendar consulta por WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-[#25d366] hover:bg-[#20ba5a] shadow-[0_8px_24px_-6px_rgba(37,211,102,0.45)] transition-all duration-300 hover:-translate-y-1.5 hover:scale-105 active:scale-95"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25d366] opacity-40" />
      <img
        src="/whatsapp.svg"
        alt="WhatsApp"
        className="h-6 w-6 select-none"
      />
    </a>
  );
}