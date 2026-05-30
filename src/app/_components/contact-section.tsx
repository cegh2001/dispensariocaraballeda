import { siteConfig } from "@/lib/site-config";

export function ContactSection() {
  return (
    <section id="contacto" className="section-shell mt-24">
      <div className="premium-card premium-card-dark overflow-hidden rounded-[28px] p-8 transition-all duration-300 hover:shadow-md md:p-12">
        <div className="grid items-stretch gap-12 lg:grid-cols-12">
          <div className="flex flex-col justify-between lg:col-span-7">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#b0cbf7]">
                Contacto Directo
              </p>
              <h2 className="font-display mt-4 text-4xl font-normal leading-tight text-white md:text-5xl">
                La cita médica ideal empieza con un mensaje de apoyo.
              </h2>
              <p className="mt-6 max-w-xl text-sm leading-relaxed text-[#b0cbf7]/80 md:text-base">
                Escríbenos al canal que te resulte más cómodo. Coordinamos tu atención
                rápidamente. Tu salud es nuestra prioridad número uno en Caraballeda.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={siteConfig.contact.whatsappPrimaryUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#2563eb] px-8 py-4 text-center text-xs font-bold uppercase tracking-[0.1em] !text-white shadow-[0_8px_24px_-6px_rgba(37,99,235,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:!text-white hover:bg-[#1d4ed8] active:scale-95"
              >
                Escribir por WhatsApp
              </a>
              <a
                href={siteConfig.location.directionsUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/12 bg-white/5 px-8 py-4 text-center text-xs font-bold uppercase tracking-[0.1em] !text-white transition-all duration-300 hover:border-white/20 hover:bg-white/10 active:scale-95"
              >
                Ruta de Google Maps
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="space-y-6 rounded-[24px] border border-white/12 bg-white/5 p-6">
              <div className="flex items-center gap-4">
                <span className="shrink-0 rounded-xl bg-white/10 p-3 text-[#b0cbf7]">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#b0cbf7]">
                    WhatsApp Principal
                  </p>
                  <a
                    className="mt-1 block text-base font-bold text-white transition hover:text-[#b0cbf7]"
                    href={siteConfig.contact.whatsappPrimaryUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {siteConfig.contact.whatsappPrimaryDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="shrink-0 rounded-xl bg-white/10 p-3 text-[#b0cbf7]">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#b0cbf7]">
                    Instagram del Centro
                  </p>
                  <a
                    className="mt-1 block text-xs font-semibold text-[#b0cbf7] transition hover:text-white"
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noreferrer"
                  >
                    @candelaria23057
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 border-t border-white/10 pt-4">
                <span className="shrink-0 rounded-xl bg-white/10 p-3 text-[#b0cbf7]">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#b0cbf7]">
                    Horario de Atención
                  </p>
                  <p className="mt-1 text-sm font-bold text-white">
                    Lunes a Viernes · 7:00 am a 4:00 pm
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}