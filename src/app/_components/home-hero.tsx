import { TimeGreeting } from "@/app/_components/time-greeting";
import { siteConfig } from "@/lib/site-config";

export function HomeHero() {
  return (
    <section className="section-shell fade-in-up">
      <div className="grid gap-8 lg:grid-cols-12 lg:items-stretch">
        <div className="premium-card premium-card-warm flex flex-col justify-between overflow-hidden rounded-[28px] p-8 md:p-12 lg:col-span-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#e8f0fe] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#1d4ed8]">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#1d4ed8]" />
              Fundación San Pedro Apóstol
            </div>

            <p className="font-display mt-8 text-lg font-bold italic text-[#2563eb]">
              ¡<TimeGreeting />! Te damos la bienvenida.
            </p>

            <h1 className="font-display mt-4 max-w-2xl text-4xl font-normal leading-[1.08] text-[#0f2240] md:text-6xl">
              Cuidado médico cercano, digno y a precios solidarios.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#475569] md:text-lg">
              Un centro de salud con profunda vocación social, arraigado en la Bajada de los
              Indios de Caraballeda. Te ofrecemos atención humana y de calidad en
              especialidades clave para ti.
            </p>
          </div>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <a
              href={siteConfig.contact.whatsappPrimaryUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#1d4ed8] px-8 py-4 text-center text-xs font-bold uppercase tracking-[0.1em] !text-white shadow-[0_8px_24px_-6px_rgba(29,78,216,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:!text-white hover:bg-[#0f2240] active:scale-95"
            >
              Agendar Cita Médica
            </a>
            <a
              href={siteConfig.contact.phoneHref}
              className="rounded-full border border-[#1d4ed8]/15 bg-white px-8 py-4 text-center text-xs font-bold uppercase tracking-[0.1em] !text-[#0f2240] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#1d4ed8] hover:!text-[#1d4ed8] hover:bg-[#fcfdfe] active:scale-95"
            >
              Llamar Directo
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-6 lg:col-span-4">
          <div className="premium-card premium-card-dark flex flex-1 flex-col justify-between overflow-hidden rounded-[28px] p-8">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#b0cbf7]">
                Caraballeda
              </p>
              <h3 className="font-display mt-4 text-2xl font-normal leading-snug text-white">
                Presencia médica unida a la historia del pueblo.
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[#b0cbf7]/80">
                Estamos ubicados en el casco histórico central, bajando desde la Plaza de
                la Iglesia Nuestra Señora de La Candelaria.
              </p>
            </div>
            <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-4">
              <span className="hidden text-xs text-[#b0cbf7]">SEO Local la Guaira</span>
              <span className="text-xs text-white/50">Cáritas de Venezuela</span>
            </div>
          </div>

          <div className="premium-card flex flex-col justify-between overflow-hidden rounded-[28px] border border-[#1d4ed8]/10 bg-white p-8">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-[0.1em] text-[#2563eb]">
                  Consultas Activas
                </span>
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#1d4ed8]" />
              </div>
              <h4 className="mt-4 text-xl font-bold text-[#0f2240]">Lunes a Viernes</h4>
              <p className="mt-1 text-sm text-[#475569]">
                Atención matutina y vespertina según cada especialidad clínica.
              </p>
            </div>
            <div className="mt-6 rounded-xl border border-dashed border-[#cbd5e1] bg-[#f4f7fc] p-3 text-xs text-[#475569]">
              RIF: {siteConfig.organization.taxId}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}