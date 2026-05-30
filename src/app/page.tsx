const specialtyCards = [
  {
    name: "Ginecologia y Obstetricia",
    price: "$17",
    accent: "Control, prevencion y acompanamiento prenatal",
    doctors: [
      {
        name: "Dra. Gleisbeth Vasquez",
        schedule: "Lunes desde las 12:00 pm y viernes desde las 7:00 am",
        services: [
          "Control prenatal integral",
          "Citologias",
          "Colposcopia y biopsia de cuello uterino",
        ],
      },
      {
        name: "Dra. Magaly Tovar",
        schedule: "Martes desde las 9:00 am",
        services: [
          "Control ginecologico anual y preventivo",
          "Consulta prenatal",
          "Citologia y colposcopia",
        ],
      },
    ],
  },
  {
    name: "Pediatria y Nutricion",
    price: "$15",
    accent: "Crecimiento, alimentacion y atencion infantil",
    doctors: [
      {
        name: "Dra. Aracelys Gonzalez",
        schedule: "Martes desde las 10:30 am y miercoles desde la 1:00 pm",
        services: [
          "Nino sano, nino enfermo y constancias medicas",
          "Evaluacion de talla baja, peso e inapetencia",
          "Diagnostico y manejo de cristalurias",
        ],
      },
    ],
  },
  {
    name: "Traumatologia y Ortopedia",
    price: "$15",
    accent: "Dolor, lesiones y movilidad con seguimiento medico",
    doctors: [
      {
        name: "Dra. Mailet Contreras",
        schedule: "Martes y jueves desde las 8:00 am",
        services: [
          "Atencion de fracturas, esguinces y luxaciones",
          "Planificacion y ejecucion de cirugia ortopedica",
          "Manejo del dolor y viscosuplementacion articular",
        ],
      },
    ],
  },
  {
    name: "Medicina General",
    price: "$15",
    accent: "Consulta medica, control y procedimientos ambulatorios",
    doctors: [
      {
        name: "Dra. Andrea de Vasconcelos",
        schedule: "Lunes a la 1:00 pm",
        services: [
          "Consulta de adultos y control de patologias",
          "EKG e interpretacion de paraclinicos",
          "Sondas, suturas y curas de heridas",
        ],
      },
      {
        name: "Dr. Ubaldo Martinez",
        schedule: "Miercoles a la 1:00 pm",
        services: [
          "Consulta medica y control de signos vitales",
          "EKG, sondas, suturas y curas de piel",
          "Recetas, informes y reposos medicos",
        ],
      },
    ],
  },
  {
    name: "Psicologia Clinica Dinamica",
    price: "$15",
    accent: "Acompanamiento emocional para adultos, ninos y familias",
    doctors: [
      {
        name: "Lcda. Maria Jose De Sousa",
        schedule: "Martes y jueves desde las 7:00 am",
        services: [
          "Psicoterapia individual y de pareja",
          "Evaluaciones psicologicas diagnosticas",
          "Atencion infantil y adolescente",
        ],
      },
    ],
  },
];

const priceCards = [
  { name: "Pediatria y Nutricion", price: "$15" },
  { name: "Medicina General", price: "$15" },
  { name: "Traumatologia y Ortopedia", price: "$15" },
  { name: "Psicologia", price: "$15" },
  { name: "Ginecologia", price: "$17" },
];

const contextBullets = [
  "Ubicado en Caraballeda, La Guaira, en la Bajada de los Indios, justo descendiendo desde la Iglesia Nuestra Senora de La Candelaria.",
  "Forma parte del casco historico tradicional del pueblo, una de las fundaciones coloniales mas antiguas del litoral.",
  "El entorno presenta ladera moderada, muros de concreto y vegetacion densa, con escorrentias y brocales que requieren lectura cuidadosa del terreno.",
];

const contactLinks = {
  appointmentMessage:
    "Hola, quiero agendar una cita en el Dispensario Nuestra Senora de la Candelaria para la especialidad de ",
  whatsappAppointments: "https://wa.me/584140424961?text=Hola%2C%20quiero%20agendar%20una%20cita%20en%20el%20Dispensario%20Nuestra%20Senora%20de%20la%20Candelaria%20para%20la%20especialidad%20de%20",
  whatsappFloating: "https://wa.me/584242696131?text=Hola%2C%20quiero%20informacion%20sobre%20el%20Dispensario%20Nuestra%20Senora%20de%20la%20Candelaria.",
  phoneLink: "tel:+584242696131",
  instagram: "https://www.instagram.com/candelaria23057?igsh=enZoM2h1YnFkaHpn",
};

const quickFacts = [
  { label: "Horario general", value: "Lunes a viernes, 7:00 am a 4:00 pm" },
  { label: "Telefono", value: "0424-2696131" },
  { label: "WhatsApp citas", value: "0414-0424961" },
  { label: "RIF", value: "J-00164776-7" },
];

export default function Home() {
  return (
    <main className="pb-24 text-[var(--deep-sea)]">
      <a
        href={contactLinks.whatsappFloating}
        target="_blank"
        rel="noreferrer"
        aria-label="Escribir por WhatsApp"
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-3 rounded-full border border-white/20 bg-[var(--candelaria)] px-5 py-3 text-sm font-semibold text-white shadow-[0_20px_45px_rgba(20,90,90,0.35)] transition hover:-translate-y-0.5 hover:bg-[var(--deep-sea)]"
      >
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/16 text-base">
          WS
        </span>
        0424-2696131
      </a>

      <section className="section-shell pt-5 md:pt-8">
        <header className="soft-card reveal rounded-[30px] px-5 py-4 md:px-7">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--clay)]">
                Salud comunitaria en Caraballeda
              </p>
              <p className="mt-2 text-lg font-semibold text-[var(--deep-sea)]">
                Dispensario Nuestra Senora de la Candelaria
              </p>
            </div>

            <nav className="flex flex-wrap gap-3 text-sm font-medium text-[var(--ink-soft)]">
              <a className="transition hover:text-[var(--candelaria)]" href="#especialidades">
                Especialidades
              </a>
              <a className="transition hover:text-[var(--candelaria)]" href="#precios">
                Precios
              </a>
              <a className="transition hover:text-[var(--candelaria)]" href="#ubicacion">
                Ubicacion
              </a>
              <a className="transition hover:text-[var(--candelaria)]" href="#contacto">
                Contacto
              </a>
            </nav>
          </div>
        </header>
      </section>

      <section className="section-shell pt-8 md:pt-10">
        <div className="hero-grid">
          <div className="reveal delay-1 rounded-[34px] border border-[var(--border-soft)] bg-[linear-gradient(180deg,rgba(255,250,244,0.94),rgba(246,240,232,0.72))] px-6 py-8 shadow-[0_30px_70px_rgba(23,51,54,0.08)] md:px-10 md:py-12">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[var(--candelaria)]">
              Fundacion San Pedro Apostol · Dispensario Caritas
            </p>
            <h1 className="font-display mt-5 max-w-3xl text-5xl leading-[0.98] text-[var(--deep-sea)] md:text-7xl">
              Cuidado medico cercano, claro y digno para la comunidad.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--ink-soft)] md:text-lg">
              Un centro de salud con vocacion social, ubicado en la Bajada de los
              Indios de Caraballeda, con consultas accesibles, contacto directo y
              atencion humana en cinco especialidades clave.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={contactLinks.whatsappAppointments}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[var(--candelaria)] px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[var(--deep-sea)]"
              >
                Agendar por WhatsApp
              </a>
              <a
                href={contactLinks.phoneLink}
                className="inline-flex items-center justify-center rounded-full border border-[var(--deep-sea)]/15 bg-white/70 px-6 py-3.5 text-sm font-semibold text-[var(--deep-sea)] transition hover:-translate-y-0.5 hover:border-[var(--candelaria)] hover:text-[var(--candelaria)]"
              >
                Llamar al dispensario
              </a>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {quickFacts.map((fact) => (
                <article
                  key={fact.label}
                  className="rounded-[24px] border border-[var(--border-soft)] bg-white/64 px-4 py-4"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--clay)]">
                    {fact.label}
                  </p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-[var(--deep-sea)]">
                    {fact.value}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <aside className="soft-card reveal delay-2 rounded-[34px] px-6 py-7 md:px-7 md:py-8">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--clay)]">
              Identidad del centro
            </p>
            <h2 className="font-display mt-4 text-3xl leading-tight text-[var(--deep-sea)] md:text-4xl">
              Una presencia medica arraigada al barrio, al mar y a la historia local.
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-7 text-[var(--ink-soft)] md:text-base">
              <p>
                El dispensario se ubica en una de las areas tradicionales del casco
                central de Caraballeda, descendiendo desde la Iglesia Nuestra Senora
                de La Candelaria hacia la calle principal.
              </p>
              <p>
                La lectura del sitio habla de una ladera moderada, vegetacion densa,
                muros de bloque y escorrentias visibles: un contexto real que pide un
                servicio de salud cercano, practico y presente.
              </p>
            </div>

            <div className="mt-8 grid gap-3">
              <div className="rounded-[26px] bg-[var(--mist)] px-5 py-4">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--candelaria)]">
                  Direccion
                </p>
                <p className="mt-2 text-sm font-semibold text-[var(--deep-sea)]">
                  Caraballeda, La Guaira · Calle/Bajada de los Indios
                </p>
              </div>
              <div className="rounded-[26px] bg-[var(--deep-sea)] px-5 py-5 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--sand)]">
                  Mision practica
                </p>
                <p className="mt-2 text-sm leading-7 text-white/82">
                  Facilitar el acceso a consulta, orientacion y seguimiento con un
                  tarifario claro y horarios visibles.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="section-shell pt-8 md:pt-10">
        <div className="grain-band reveal delay-2 rounded-[34px] px-6 py-7 md:px-8 md:py-8">
          <div className="grid gap-4 md:grid-cols-3">
            <article>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--clay)]">
                5 areas de atencion
              </p>
              <p className="mt-2 text-sm leading-7 text-[var(--ink-soft)]">
                Pediatria, nutricion, medicina general, traumatologia, ginecologia y
                psicologia clinica.
              </p>
            </article>
            <article>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--clay)]">
                Precios accesibles
              </p>
              <p className="mt-2 text-sm leading-7 text-[var(--ink-soft)]">
                La mayoria de las consultas se mantienen en $15 para cuidar la
                transparencia del servicio.
              </p>
            </article>
            <article>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--clay)]">
                Contacto directo
              </p>
              <p className="mt-2 text-sm leading-7 text-[var(--ink-soft)]">
                WhatsApp, telefono e Instagram disponibles para orientar a pacientes y
                familiares.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="especialidades" className="section-shell pt-16 md:pt-20">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="reveal delay-1 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--clay)]">
              Especialidades
            </p>
            <h2 className="font-display mt-4 text-4xl text-[var(--deep-sea)] md:text-5xl">
              Horarios claros y servicios explicados sin rodeos.
            </h2>
          </div>
          <p className="reveal delay-2 max-w-xl text-sm leading-7 text-[var(--ink-soft)] md:text-base">
            Cada bloque resume especialidad, doctores, dias de atencion y enfoque
            principal para que el paciente pueda decidir rapido.
          </p>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {specialtyCards.map((specialty, index) => (
            <article
              key={specialty.name}
              className="soft-card reveal rounded-[30px] px-5 py-6 md:px-6"
              style={{ animationDelay: `${index * 80 + 120}ms` }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--clay)]">
                    {specialty.price} consulta
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold leading-tight text-[var(--deep-sea)]">
                    {specialty.name}
                  </h3>
                </div>
                <span className="rounded-full bg-[var(--mist)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--candelaria)]">
                  Activa
                </span>
              </div>

              <p className="mt-4 text-sm leading-7 text-[var(--ink-soft)]">
                {specialty.accent}
              </p>

              <div className="mt-5 space-y-4">
                {specialty.doctors.map((doctor) => (
                  <div
                    key={doctor.name}
                    className="rounded-[24px] border border-[var(--deep-sea)]/8 bg-white/70 px-4 py-4"
                  >
                    <p className="text-base font-semibold text-[var(--deep-sea)]">
                      {doctor.name}
                    </p>
                    <p className="mt-2 text-sm font-medium text-[var(--candelaria)]">
                      {doctor.schedule}
                    </p>
                    <ul className="mt-3 space-y-2 text-sm leading-6 text-[var(--ink-soft)]">
                      {doctor.services.map((service) => (
                        <li key={service} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--clay)]" />
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="precios" className="section-shell pt-16 md:pt-20">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="reveal delay-1 rounded-[34px] border border-[var(--border-soft)] bg-[var(--deep-sea)] px-6 py-8 text-white md:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--sand)]">
              Tarifario general
            </p>
            <h2 className="font-display mt-4 text-4xl leading-tight md:text-5xl">
              Precios transparentes para evitar dudas antes de la cita.
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-7 text-white/76 md:text-base">
              El criterio del sitio es simple: mostrar costos visibles desde arriba,
              sin esconder informacion y sin obligar a escribir primero para saber el
              valor de la consulta.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {priceCards.map((item, index) => (
              <article
                key={item.name}
                className="soft-card reveal rounded-[28px] px-5 py-6"
                style={{ animationDelay: `${index * 80 + 160}ms` }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--clay)]">
                  Consulta
                </p>
                <h3 className="mt-3 text-xl font-semibold text-[var(--deep-sea)]">
                  {item.name}
                </h3>
                <p className="mt-6 text-4xl font-extrabold text-[var(--candelaria)]">
                  {item.price}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="ubicacion" className="section-shell pt-16 md:pt-20">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.92fr]">
          <article className="soft-card reveal delay-1 rounded-[34px] px-6 py-7 md:px-8 md:py-8">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--clay)]">
              Ubicacion y contexto
            </p>
            <h2 className="font-display mt-4 text-4xl leading-tight text-[var(--deep-sea)] md:text-5xl">
              Un servicio de salud que entiende el lugar donde trabaja.
            </h2>

            <div className="mt-6 space-y-4">
              {contextBullets.map((bullet) => (
                <div
                  key={bullet}
                  className="rounded-[24px] border border-[var(--deep-sea)]/8 bg-[var(--mist)]/55 px-4 py-4"
                >
                  <p className="text-sm leading-7 text-[var(--ink-soft)] md:text-base">
                    {bullet}
                  </p>
                </div>
              ))}
            </div>
          </article>

          <article className="reveal delay-2 rounded-[34px] border border-[var(--border-soft)] bg-white/72 px-6 py-7 shadow-[0_24px_70px_rgba(23,51,54,0.08)] md:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--clay)]">
              Lectura de terreno
            </p>
            <div className="mt-5 space-y-4 text-sm leading-7 text-[var(--ink-soft)] md:text-base">
              <p>
                La inspeccion visual describe pendiente moderada, restos de brocales,
                maleza crecida, vegetacion densa, muros perimetrales y tendido electrico
                aereo. Eso refuerza la necesidad de una comunicacion simple sobre acceso,
                horarios y referencia urbana.
              </p>
              <p>
                Tambien se observan cunetas parcialmente obstruidas, sedimentos y algunos
                desechos dispersos en margenes de via, datos utiles para futuras piezas de
                gestion comunitaria o expediente institucional.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section id="contacto" className="section-shell pt-16 md:pt-20">
        <div className="dark-panel reveal rounded-[36px] px-6 py-8 text-white md:px-8 md:py-10">
          <div className="grid gap-7 lg:grid-cols-[1.08fr_0.92fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--sand)]">
                Contacto y citas
              </p>
              <h2 className="font-display mt-4 text-4xl leading-tight md:text-5xl">
                La cita puede empezar con un mensaje claro.
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/78 md:text-base">
                Si ya sabes la especialidad que necesitas, escribe por WhatsApp con el
                mensaje predefinido. Si necesitas orientacion general, tambien puedes
                llamar o revisar el Instagram institucional.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={contactLinks.whatsappAppointments}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[var(--deep-sea)] transition hover:-translate-y-0.5 hover:bg-[var(--mist)]"
                >
                  Quiero agendar una cita
                </a>
                <a
                  href={contactLinks.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-[var(--sand)] hover:text-[var(--sand)]"
                >
                  Ver Instagram oficial
                </a>
              </div>
            </div>

            <div className="grid gap-4">
              <article className="rounded-[28px] border border-white/12 bg-white/6 px-5 py-5">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--sand)]">
                  Telefono general
                </p>
                <a className="mt-2 block text-xl font-semibold" href={contactLinks.phoneLink}>
                  0424-2696131
                </a>
              </article>
              <article className="rounded-[28px] border border-white/12 bg-white/6 px-5 py-5">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--sand)]">
                  WhatsApp de citas
                </p>
                <a
                  className="mt-2 block text-xl font-semibold"
                  href={contactLinks.whatsappAppointments}
                  target="_blank"
                  rel="noreferrer"
                >
                  0414-0424961
                </a>
              </article>
              <article className="rounded-[28px] border border-white/12 bg-white/6 px-5 py-5">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--sand)]">
                  Horario general
                </p>
                <p className="mt-2 text-xl font-semibold">Lunes a viernes · 7:00 am a 4:00 pm</p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
