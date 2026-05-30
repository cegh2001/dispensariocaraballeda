import { specialtyExplorer } from "@/app/_data/home-content";
import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/5 bg-[#0f2240] pb-12 pt-16 text-[#faf6f0]">
      <div className="section-shell">
        <div className="grid gap-12 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <span className="font-display text-2xl font-normal">
              Dispensario Nuestra Señora de la Candelaria
            </span>
            <p className="mt-4 text-xs leading-relaxed text-[#b0cbf7]">
              Salud solidaria para Caraballeda y La Guaira. Brindamos servicios médicos
              transparentes, cercanos y de gran dignidad comunitaria.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#b0cbf7]">
              Enlaces
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs text-[#b0cbf7]">
              <li>
                <a className="transition hover:text-white" href="#especialidades">
                  Consultas
                </a>
              </li>
              <li>
                <a className="transition hover:text-white" href="#como-llegar">
                  Ubicación y Mapa
                </a>
              </li>
              <li>
                <a className="transition hover:text-white" href="#faq">
                  Preguntas Frecuentes
                </a>
              </li>
              <li>
                <a className="transition hover:text-white" href="#contacto">
                  Escríbenos directo
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#b0cbf7]">
              Especialidades
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs text-[#b0cbf7]">
              {specialtyExplorer.map((specialty) => (
                <li key={specialty.name}>{specialty.name}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#b0cbf7]">
              Ubicación Física
            </h4>
            <p className="mt-4 text-xs leading-relaxed text-[#b0cbf7]">
              {siteConfig.location.streetAddress}. Casco histórico de Caraballeda, Estado La
              Guaira, Venezuela.
            </p>
          </div>
        </div>

        <div className="mb-8 mt-12 flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-white/15 hover:bg-white/8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-4">
            <span className="shrink-0 rounded-xl bg-white/10 p-3 text-[#2563eb]">
              <svg
                className="h-5 w-5 text-[#b0cbf7]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </span>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.1em] text-white">
                Diseño & Desarrollo Web Profesional
              </h4>
              <p className="mt-1 max-w-xl text-xs leading-relaxed text-[#b0cbf7]/80">
                Sitio web diseñado y programado a medida por <strong>Carlos González</strong>.
                ¿Desea crear, rediseñar o modernizar su sitio web comercial o institucional
                con esta misma calidad premium?
              </p>
            </div>
          </div>
          <a
            href="mailto:cargonzalez0601@gmail.com?subject=Consulta%20sobre%20Dise%C3%B1o%20y%20Desarrollo%20de%20Sitio%20Web"
            className="shrink-0 rounded-full border border-transparent bg-[#2563eb] px-6 py-2.5 text-center text-xs font-bold uppercase tracking-[0.1em] !text-white shadow-[0_4px_12px_rgba(37,99,235,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1d4ed8] active:scale-95"
          >
            Contactar al Desarrollador
          </a>
        </div>

        <div className="mt-8 flex flex-col gap-4 text-[10px] font-bold uppercase tracking-[0.16em] text-[#b0cbf7] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Fundación San Pedro Apóstol. Todos los derechos reservados.</p>
          <p>
            Creado por{" "}
            <a href="mailto:cargonzalez0601@gmail.com" className="underline transition hover:text-white">
              Carlos González
            </a>{" "}
            · cargonzalez0601@gmail.com
          </p>
          <p>RIF: {siteConfig.organization.taxId} · Cáritas Diocesana</p>
        </div>
      </div>
    </footer>
  );
}