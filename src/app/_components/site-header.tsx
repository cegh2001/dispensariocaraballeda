export function SiteHeader() {
  return (
    <header className="glass-header section-shell mt-4 rounded-3xl px-4 py-3.5 md:rounded-full md:px-6 md:py-4">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between md:gap-4">
        <div className="flex shrink-0 items-center justify-center gap-2.5 md:justify-start">
          <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#1d4ed8] text-white">
            <svg
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 7a3 3 0 11-6 0 3 3 0 016 0zm-1.5 6l-3.5 3.5m-2 2L5 20v-2h2v-2h1.5"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 7a3 3 0 116 0 3 3 0 01-6 0zm1.5 6l3.5 3.5m2 2l3 3v-2h-2v-2h-1.5"
              />
            </svg>
          </span>
          <div>
            <p className="text-center text-[8px] font-bold uppercase tracking-[0.2em] text-[#2563eb] md:text-left md:text-[10px]">
              Salud Comunitaria
            </p>
            <h2 className="max-w-[200px] whitespace-normal text-center text-xs font-bold leading-tight text-[#0f2240] sm:max-w-none md:text-left md:text-sm">
              Dispensario Nuestra Señora de la Candelaria
            </h2>
          </div>
        </div>

        <nav className="flex w-full items-center justify-center gap-5 border-t border-[#cbd5e1]/30 pt-2.5 text-[10px] font-bold uppercase tracking-[0.1em] text-[#475569] md:w-auto md:gap-6 md:border-t-0 md:pt-0 md:text-xs">
          <a className="nav-link hover:text-[#1d4ed8]" href="#especialidades">
            Especialidades
          </a>
          <a className="nav-link hover:text-[#1d4ed8]" href="#como-llegar">
            Cómo Llegar
          </a>
          <a className="nav-link hover:text-[#1d4ed8]" href="#faq">
            Preguntas
          </a>
          <a className="nav-link hover:text-[#1d4ed8]" href="#contacto">
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
}