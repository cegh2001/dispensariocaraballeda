"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/lib/site-config";

// SVG Icons for Specialties
function StethoscopeIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  );
}

// Child Icon
function ChildIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
    </svg>
  );
}

// Bone/Trauma Icon
function BoneIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
    </svg>
  );
}

// Heart/Gynecology Icon
function HeartIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  );
}

// Brain/Psychology Icon
function BrainIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  );
}

const specialtyExplorer = [
  {
    name: "Ginecología",
    price: "$17",
    icon: <HeartIcon />,
    accent: "Prevención, consulta ginecológica y citología de control",
    description: "Espacio especializado para el cuidado de la salud femenina en todas sus etapas, enfocado en la prevención, consulta ginecológica general y citologías de control.",
    doctors: [
      {
        name: "Dra. Gleisbeth Vásquez",
        schedule: "Lunes desde las 12:00 pm y viernes desde las 7:00 am",
        services: [
          "Consulta ginecológica general",
          "Citologías de control anual",
        ],
      },
      {
        name: "Dra. Magaly Tovar",
        schedule: "Martes desde las 9:00 am",
        services: [
          "Control ginecológico preventivo",
          "Citología y ecografía ginecológica",
        ],
      },
    ],
  },
  {
    name: "Pediatría y Nutrición",
    price: "$15",
    icon: <ChildIcon />,
    accent: "Crecimiento, alimentación sana y atención infantil cercana",
    description: "Evaluación completa del crecimiento físico y desarrollo psicomotor de bebés, niños y adolescentes, coordinando pautas de nutrición adaptadas a cada etapa.",
    doctors: [
      {
        name: "Dra. Aracelys González",
        schedule: "Martes desde las 10:30 am y miércoles desde la 1:00 pm",
        services: [
          "Consulta de niño sano, control de patologías y constancias médicas",
          "Evaluación de talla baja, peso corporal e inapetencia crónica",
          "Diagnóstico y manejo clínico de cristalurias infantiles",
        ],
      },
    ],
  },
  {
    name: "Traumatología y Ortopedia",
    price: "$15",
    icon: <BoneIcon />,
    accent: "Alivio del dolor, tratamiento de lesiones y movilidad",
    description: "Especialidad dedicada al diagnóstico y tratamiento de lesiones del sistema musculoesquelético, ofreciendo soluciones prácticas y no invasivas para recuperar el bienestar.",
    doctors: [
      {
        name: "Dra. Mailet Contreras",
        schedule: "Martes y jueves desde las 8:00 am",
        services: [
          "Atención inmediata de fracturas, esguinces y luxaciones",
          "Planificación y evaluación de cirugía ortopédica",
          "Manejo avanzado del dolor articular y viscosuplementación",
        ],
      },
    ],
  },
  {
    name: "Medicina General",
    price: "$15",
    icon: <StethoscopeIcon />,
    accent: "Consulta clínica primaria, control crónico y curas",
    description: "Atención médica inicial para adultos y jóvenes. Evaluación general de síntomas, prescripción de tratamientos y seguimiento continuo de patologías comunes.",
    doctors: [
      {
        name: "Dra. Andrea de Vasconcelos",
        schedule: "Lunes a la 1:00 pm",
        services: [
          "Consulta integral de adultos y control de patologías crónicas",
          "Toma de Electrocardiograma (EKG) e interpretación de laboratorios",
          "Procedimientos menores: sondas, suturas y curas de heridas",
        ],
      },
      {
        name: "Dr. Ubaldo Martínez",
        schedule: "Miércoles a la 1:00 pm",
        services: [
          "Consulta clínica general y control de signos vitales",
          "Toma de EKG, colocación de sondas y curas en piel",
          "Emisión de recetas médicas, informes detallados y reposos",
        ],
      },
    ],
  },
  {
    name: "Psicología Clínica",
    price: "$15",
    icon: <BrainIcon />,
    accent: "Acompañamiento emocional y psicoterapia familiar",
    description: "Un espacio seguro y confidencial enfocado en brindarte herramientas para afrontar crisis emocionales, ansiedad, duelo o dificultades familiares y de pareja.",
    doctors: [
      {
        name: "Lcda. María José De Sousa",
        schedule: "Martes y jueves desde las 7:00 am",
        services: [
          "Psicoterapia individual para adultos y terapia de pareja",
          "Evaluaciones psicológicas diagnósticas completas",
          "Atención psicológica especializada en niños y adolescentes",
        ],
      },
    ],
  },
];

const arrivalSteps = [
  {
    title: "Punto de Inicio",
    subtitle: "Plaza de Caraballeda",
    desc: "Usa como referencia central la histórica Plaza de Caraballeda y la emblemática Iglesia Nuestra Señora de La Candelaria.",
  },
  {
    title: "El Descenso",
    subtitle: "Bajada de los Indios",
    desc: "Desde la plaza de la iglesia, baja por la pintoresca Bajada de los Indios en dirección hacia la calle principal.",
  },
  {
    title: "Destino",
    subtitle: "Llegada al Dispensario",
    desc: "El dispensario se encuentra ubicado a mano derecha en la franja central tradicional del pueblo, con su entrada de rejas verdes.",
  },
];

const faqList = [
  {
    question: "¿Cómo puedo agendar una consulta médica?",
    answer: "Puedes agendar fácilmente escribiendo a nuestro WhatsApp principal o secundario. Haz clic en cualquiera de los botones de WhatsApp de la página para iniciar un chat directo y elegir la especialidad que necesitas.",
  },
  {
    question: "¿Tengo que pagar antes de asistir a la consulta?",
    answer: "No, el pago se realiza directamente en nuestras instalaciones el día de tu cita médica. Mantenemos precios sumamente transparentes y accesibles ($15 o $17) para apoyar el bienestar de la comunidad.",
  },
  {
    question: "¿Cuáles son los métodos de pago aceptados?",
    answer: "Aceptamos efectivo (dólares o bolívares) y métodos de pago móvil locales. Para cualquier duda específica sobre los métodos de facturación, consúltanos directamente vía WhatsApp antes de asistir.",
  },
  {
    question: "¿El dispensario cuenta con farmacia comunitaria?",
    answer: "Sí, el dispensario cuenta con el apoyo de Cáritas y la Fundación San Pedro Apóstol para suministrar medicamentos esenciales a precios solidarios o donaciones en casos especiales, según la disponibilidad del inventario.",
  },
];

const communityBenefits = [
  {
    title: "Médicos Comprometidos",
    desc: "Profesionales dedicados al Casco Central de Caraballeda y su bienestar integral.",
    icon: (
      <svg className="h-5 w-5 text-[#1d4ed8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Precios Transparentes",
    desc: "Consultas unificadas a $15 y $17 para evitar cualquier sorpresa o recargo oculto.",
    icon: (
      <svg className="h-5 w-5 text-[#1d4ed8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M12 16v0" />
      </svg>
    ),
  },
  {
    title: "Agendamiento Ágil",
    desc: "Coordina directamente a través de WhatsApp tu turno sin intermediarios ni demoras.",
    icon: (
      <svg className="h-5 w-5 text-[#1d4ed8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [greeting, setGreeting] = useState("Te damos la bienvenida");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Buen día");
    else if (hour < 19) setGreeting("Buenas tardes");
    else setGreeting("Buenas noches");
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      {/* Structural Schema SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalClinic",
            "@id": `${siteConfig.url}/#medical-clinic`,
            name: siteConfig.name,
            legalName: siteConfig.organization.legalName,
            url: siteConfig.url,
            description: siteConfig.description,
            telephone: siteConfig.contact.phoneIntl,
            taxID: siteConfig.organization.taxId,
            priceRange: siteConfig.organization.priceRange,
            address: {
              "@type": "PostalAddress",
              streetAddress: siteConfig.location.streetAddress,
              addressLocality: siteConfig.location.locality,
              addressRegion: siteConfig.location.region,
              addressCountry: siteConfig.location.country,
            },
            areaServed: ["Caraballeda", "La Guaira", "Venezuela"],
            hasMap: siteConfig.location.mapPlaceUrl,
            sameAs: [siteConfig.social.instagram],
            openingHours: siteConfig.hours,
            medicalSpecialty: [
              "Pediatria",
              "Nutricion",
              "Medicina General",
              "Traumatologia",
              "Ginecologia",
              "Psicologia",
            ],
          }),
        }}
      />

      {/* Floating Circular WhatsApp Button - Simple, Clean & Responsive */}
      <a
        href={siteConfig.contact.whatsappPrimaryUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Agendar consulta por WhatsApp"
        className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-[#25d366] hover:bg-[#20ba5a] shadow-[0_8px_24px_-6px_rgba(37,211,102,0.45)] transition-all duration-300 hover:-translate-y-1.5 hover:scale-105 active:scale-95"
      >
        {/* Pulsing Outer Ripple Effect */}
        <span className="absolute inset-0 rounded-full bg-[#25d366] opacity-40 animate-ping -z-10" />
        <img src="/whatsapp.svg" alt="WhatsApp" className="h-6 w-6 select-none" />
      </a>

      {/* Header / Sticky Glass Navigation with Sliding Underline Links */}
      <header className="glass-header section-shell mt-4 rounded-3xl md:rounded-full px-4 md:px-6 py-3.5 md:py-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-4">
          <div className="flex items-center gap-2.5 shrink-0 justify-center md:justify-start">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#1d4ed8] text-white shrink-0">
              <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a3 3 0 11-6 0 3 3 0 016 0zm-1.5 6l-3.5 3.5m-2 2L5 20v-2h2v-2h1.5" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 7a3 3 0 116 0 3 3 0 01-6 0zm1.5 6l3.5 3.5m2 2l3 3v-2h-2v-2h-1.5" />
              </svg>
            </span>
            <div>
              <p className="text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-[#2563eb] text-center md:text-left">
                Salud Comunitaria
              </p>
              <h2 className="text-xs md:text-sm font-bold text-[#0f2240] leading-tight text-center md:text-left max-w-[200px] sm:max-w-none whitespace-normal">
                Dispensario Nuestra Señora de la Candelaria
              </h2>
            </div>
          </div>

          <nav className="flex items-center justify-center gap-5 md:gap-6 text-[10px] md:text-xs font-bold uppercase tracking-[0.1em] text-[#475569] border-t border-[#cbd5e1]/30 md:border-t-0 pt-2.5 md:pt-0 w-full md:w-auto">
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

      <main className="pb-24 pt-8">
        {/* Editorial Hero Section */}
        <section className="section-shell fade-in-up">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-stretch">
            {/* Main Greeting & Headline Card */}
            <div className="lg:col-span-8 flex flex-col justify-between premium-card premium-card-warm p-8 md:p-12 rounded-[28px] overflow-hidden">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-[#e8f0fe] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#1d4ed8]">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#1d4ed8]" />
                  Fundación San Pedro Apóstol
                </div>

                <p className="mt-8 text-lg font-bold text-[#2563eb] font-display italic">
                  ¡{greeting}! Te damos la bienvenida.
                </p>

                <h1 className="font-display mt-4 text-4xl font-normal leading-[1.08] text-[#0f2240] md:text-6xl max-w-2xl">
                  Cuidado médico cercano, digno y a precios solidarios.
                </h1>

                <p className="mt-6 text-base md:text-lg leading-relaxed text-[#475569] max-w-2xl">
                  Un centro de salud con profunda vocación social, arraigado en la Bajada de los
                  Indios de Caraballeda. Te ofrecemos atención humana y de calidad en especialidades clave para ti.
                </p>
              </div>

              <div className="mt-12 flex flex-col sm:flex-row gap-4">
                <a
                  href={siteConfig.contact.whatsappPrimaryUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#1d4ed8] !text-white hover:!text-white hover:bg-[#0f2240] px-8 py-4 rounded-full text-xs font-bold uppercase tracking-[0.1em] text-center transition-all duration-300 shadow-[0_8px_24px_-6px_rgba(29,78,216,0.35)] hover:-translate-y-0.5 active:scale-95"
                >
                  Agendar Cita Médica
                </a>
                <a
                  href={siteConfig.contact.phoneHref}
                  className="bg-white border border-[#1d4ed8]/15 !text-[#0f2240] hover:!text-[#1d4ed8] hover:bg-[#fcfdfe] hover:border-[#1d4ed8] px-8 py-4 rounded-full text-xs font-bold uppercase tracking-[0.1em] text-center transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
                >
                  Llamar Directo
                </a>
              </div>
            </div>

            {/* Quick Details Sidebar with premium-card-dark fixed background */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              {/* Devotional / Historical Card */}
              <div className="premium-card premium-card-dark p-8 flex-1 flex flex-col justify-between rounded-[28px] overflow-hidden">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#b0cbf7]">
                    Caraballeda
                  </p>
                  <h3 className="font-display mt-4 text-2xl leading-snug text-white font-normal">
                    Presencia médica unida a la historia del pueblo.
                  </h3>
                  <p className="mt-4 text-sm text-[#b0cbf7]/80 leading-relaxed">
                    Estamos ubicados en el casco histórico central, bajando desde la Plaza de la Iglesia Nuestra Señora de La Candelaria.
                  </p>
                </div>
                <div className="mt-8 border-t border-white/10 pt-4 flex items-center justify-between">
                  <span className="hidden text-xs text-[#b0cbf7]">SEO Local la Guaira</span>
                  <span className="text-xs text-white/50">Cáritas de Venezuela</span>
                </div>
              </div>

              {/* Status Card */}
              <div className="premium-card p-8 bg-white flex flex-col justify-between rounded-[28px] overflow-hidden border border-[#1d4ed8]/10">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-[0.1em] text-[#2563eb]">
                      Consultas Activas
                    </span>
                    <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#1d4ed8]" />
                  </div>
                  <h4 className="mt-4 text-xl font-bold text-[#0f2240]">
                    Lunes a Viernes
                  </h4>
                  <p className="mt-1 text-sm text-[#475569]">
                    Atención matutina y vespertina según cada especialidad clínica.
                  </p>
                </div>
                <div className="mt-6 text-xs text-[#475569] bg-[#f4f7fc] p-3 rounded-xl border border-dashed border-[#cbd5e1]">
                  RIF: J-00164776-7 · Solidario
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Unique Benefits Highlights Row */}
        <section className="section-shell mt-12">
          <div className="grid gap-6 sm:grid-cols-3">
            {communityBenefits.map((benefit, i) => (
              <div key={i} className="premium-card p-6 bg-white flex items-start gap-4 rounded-[28px] overflow-hidden border border-[#1d4ed8]/10">
                <span className="p-3 rounded-2xl bg-[#e8f0fe] text-[#1d4ed8] shrink-0">
                  {benefit.icon}
                </span>
                <div>
                  <h4 className="text-sm font-bold text-[#0f2240]">{benefit.title}</h4>
                  <p className="mt-1 text-xs text-[#475569] leading-relaxed">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Unified Specialty & Pricing Explorer */}
        <section id="especialidades" className="section-shell mt-24">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2563eb]">
              Servicios y Especialidades
            </p>
            <h2 className="font-display mt-4 text-4xl leading-tight text-[#0f2240] md:text-5xl">
              Nuestras consultas especializadas sin rodeos.
            </h2>
            <p className="mt-4 text-base text-[#475569]">
              Te facilitamos la información de forma directa. Elige una especialidad para ver al instante su precio solidario, horarios y los doctores que te atenderán.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-12">
            {/* Tabs List */}
            <div className="lg:col-span-4 flex flex-col gap-2">
              {specialtyExplorer.map((spec, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className={`flex items-center gap-4 w-full p-5 rounded-2xl text-left transition-all duration-300 ${
                    activeTab === i
                      ? "bg-[#1d4ed8] !text-white hover:!text-white shadow-[0_12px_24px_-6px_rgba(29,78,216,0.25)] scale-[1.02]"
                      : "bg-white hover:bg-[#e8f0fe] text-[#0f2240] border border-transparent hover:border-[#b0cbf7]/20"
                  }`}
                >
                  <span className={`p-2 rounded-xl transition-all ${activeTab === i ? "bg-white/10 text-white" : "bg-[#e8f0fe] text-[#1d4ed8]"}`}>
                    {spec.icon}
                  </span>
                  <div className="flex-1">
                    <span className="block text-sm font-bold leading-tight">{spec.name}</span>
                    <span className={`block text-xs mt-1 ${activeTab === i ? "text-[#b0cbf7]" : "text-[#475569]"}`}>
                      Consulta: {spec.price}
                    </span>
                  </div>
                  <span className="text-xs font-display">→</span>
                </button>
              ))}
            </div>

            {/* Active Tab Panel */}
            <div className="lg:col-span-8 flex flex-col">
              <div className="premium-card p-8 md:p-10 bg-white flex-1 flex flex-col justify-between border-t-4 border-t-[#1d4ed8] rounded-[28px] overflow-hidden border border-[#1d4ed8]/10">
                <div className="fade-in-up">
                  <div className="flex flex-wrap items-start justify-between gap-4 border-b border-[#cbd5e1]/30 pb-6">
                    <div>
                      <h3 className="font-display text-3xl font-normal text-[#0f2240]">
                        {specialtyExplorer[activeTab].name}
                      </h3>
                      <p className="mt-2 text-sm text-[#475569] italic">
                        {specialtyExplorer[activeTab].accent}
                      </p>
                    </div>

                    <div className="bg-[#e8f0fe] border border-[#b0cbf7]/20 rounded-2xl px-6 py-4 text-center">
                      <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#1d4ed8]">
                        Precio Solidario
                      </p>
                      <p className="text-3xl font-extrabold text-[#1d4ed8] mt-1">
                        {specialtyExplorer[activeTab].price}
                      </p>
                      <p className="text-[10px] text-[#475569] mt-0.5">Pago en consulta</p>
                    </div>
                  </div>

                  <p className="mt-6 text-sm md:text-base text-[#475569] leading-relaxed">
                    {specialtyExplorer[activeTab].description}
                  </p>

                  <div className="mt-8 space-y-6">
                    <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-[#2563eb]">
                      Personal Médico y Horarios de Atención
                    </h4>

                    {specialtyExplorer[activeTab].doctors.map((doctor, index) => (
                      <div
                        key={index}
                        className="bg-[#fcfdfe] border border-[#cbd5e1]/30 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-sm hover:border-[#b0cbf7]/40"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-4 border-b border-[#cbd5e1]/20">
                          <p className="text-base font-bold text-[#0f2240]">
                            {doctor.name}
                          </p>
                          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1d4ed8] bg-[#e8f0fe] px-3 py-1 rounded-full">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#1d4ed8]" />
                            {doctor.schedule}
                          </span>
                        </div>

                        <ul className="mt-4 grid gap-3 sm:grid-cols-2 text-xs md:text-sm text-[#475569]">
                          {doctor.services.map((service, sIndex) => (
                            <li key={sIndex} className="flex items-start gap-2.5">
                              <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#e8f0fe] text-[#1d4ed8] text-[10px] font-bold">
                                ✓
                              </span>
                              <span>{service}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[#cbd5e1]/30 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <span className="text-xs text-[#475569]">
                    ¿Quieres coordinar una cita para esta especialidad?
                  </span>
                  <a
                    href={`${siteConfig.contact.whatsappPrimaryUrl}${encodeURIComponent(
                      specialtyExplorer[activeTab].name
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-[#1d4ed8] !text-white hover:!text-white hover:bg-[#0f2240] px-6 py-3 rounded-full text-xs font-bold uppercase tracking-[0.1em] text-center transition-all duration-300 shadow-[0_8px_24px_-6px_rgba(29,78,216,0.35)] active:scale-95"
                  >
                    Agendar por WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Route Stepper & Map (Interactive arrival guide) */}
        <section id="como-llegar" className="section-shell mt-24">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-stretch">
            {/* Route description & stepper */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2563eb]">
                  Ubicación Práctica
                </p>
                <h2 className="font-display mt-4 text-4xl leading-tight text-[#0f2240] md:text-5xl font-normal">
                  Cómo llegar sin contratiempos.
                </h2>
                <p className="mt-4 text-sm md:text-base text-[#475569] leading-relaxed">
                  El dispensario se emplaza en una tradicional calle de bajada en el casco histórico de Caraballeda. Te diseñamos una guía de llegada paso a paso muy simple desde el punto de referencia principal:
                </p>

                {/* Progress bar / Stepper UI */}
                <div className="mt-8 flex items-center justify-between relative px-2">
                  <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-[#cbd5e1]/30 -translate-y-1/2 -z-10" />
                  <div
                    className="absolute left-0 top-1/2 h-0.5 bg-[#1d4ed8] -translate-y-1/2 -z-10 transition-all duration-500"
                    style={{ width: `${(activeStep / (arrivalSteps.length - 1)) * 100}%` }}
                  />
                  {arrivalSteps.map((step, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveStep(idx)}
                      className={`h-9 w-9 rounded-full flex items-center justify-center font-bold text-xs border transition-all duration-300 ${
                        activeStep === idx
                          ? "bg-[#1d4ed8] border-[#1d4ed8] !text-white scale-110"
                          : idx < activeStep
                          ? "bg-[#e8f0fe] border-[#1d4ed8] text-[#1d4ed8]"
                          : "bg-white border-[#cbd5e1] text-[#475569]"
                      }`}
                    >
                      {idx + 1}
                    </button>
                  ))}
                </div>

                {/* Active Step Panel */}
                <div className="mt-6 bg-[#fcfdfe] border border-[#cbd5e1]/30 rounded-2xl p-6 transition-all duration-300 min-h-[160px] flex flex-col justify-between hover:border-[#b0cbf7]/40 shadow-sm">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#2563eb]">
                      Paso {activeStep + 1} · {arrivalSteps[activeStep].title}
                    </span>
                    <h4 className="text-lg font-bold text-[#0f2240] mt-1">
                      {arrivalSteps[activeStep].subtitle}
                    </h4>
                    <p className="mt-2 text-xs md:text-sm text-[#475569] leading-relaxed">
                      {arrivalSteps[activeStep].desc}
                    </p>
                  </div>

                  <div className="mt-4 flex gap-2">
                    <button
                      disabled={activeStep === 0}
                      onClick={() => setActiveStep((prev) => prev - 1)}
                      className="px-4 py-2 rounded-xl border border-[#cbd5e1] text-[10px] font-bold uppercase tracking-[0.05em] disabled:opacity-40 hover:bg-[#f4f7fc] transition-all"
                    >
                      Atrás
                    </button>
                    <button
                      disabled={activeStep === arrivalSteps.length - 1}
                      onClick={() => setActiveStep((prev) => prev + 1)}
                      className="px-4 py-2 rounded-xl bg-[#1d4ed8] !text-white text-[10px] font-bold uppercase tracking-[0.05em] disabled:opacity-40 hover:bg-[#0f2240] transition-all"
                    >
                      Siguiente
                    </button>
                  </div>
                </div>

                {/* Elegant Location Address Widget */}
                <div className="mt-6 bg-white border border-[#cbd5e1]/35 rounded-2xl p-5 flex items-start gap-4 shadow-sm hover:border-[#b0cbf7]/40 transition-all">
                  <span className="p-2.5 rounded-xl bg-[#e8f0fe] text-[#1d4ed8] shrink-0">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[#2563eb]">Dirección Física</p>
                    <p className="text-sm font-bold text-[#0f2240] mt-1">Calle Real, Caraballeda 1165</p>
                    <p className="text-xs text-[#475569] mt-1 leading-relaxed">
                      Bajando desde la Iglesia de Nuestra Señora de La Candelaria. Casco Central.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons styled with robust Tailwind utilities and white text forced */}
              <div className="mt-8 pt-6 border-t border-[#cbd5e1]/30 flex flex-col sm:flex-row gap-3">
                <a
                  href={siteConfig.location.mapPlaceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#1d4ed8] !text-white hover:!text-white hover:bg-[#0f2240] flex-1 text-center py-3.5 rounded-full text-xs font-bold uppercase tracking-[0.1em] transition-all duration-300 shadow-[0_8px_24px_-6px_rgba(29,78,216,0.25)] active:scale-95"
                >
                  Abrir Mapa
                </a>
                <a
                  href={siteConfig.location.directionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white border border-[#1d4ed8]/15 !text-[#0f2240] hover:!text-[#1d4ed8] hover:bg-[#fcfdfe] flex-1 text-center py-3.5 rounded-full text-xs font-bold uppercase tracking-[0.1em] transition-all duration-300 active:scale-95"
                >
                  Cómo Llegar
                </a>
              </div>
            </div>

            {/* Premium, Full-Bleed Map Card with Forced Rounding Clipping */}
            <div className="lg:col-span-7">
              <div 
                className="relative overflow-hidden rounded-[28px] border border-[#cbd5e1]/35 shadow-[0_24px_64px_-12px_rgba(15, 34, 64, 0.05)] h-full min-h-[450px] transition-all duration-300 hover:shadow-md"
                style={{ isolation: "isolate", transform: "translateZ(0)" }}
              >
                <iframe
                  title="Ubicación exacta del Dispensario"
                  src={siteConfig.location.mapEmbedUrl}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full border-0 rounded-[28px]"
                  referrerPolicy="no-referrer-when-downgrade"
                  style={{ borderRadius: "28px" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Dynamic FAQ Section (Accordion) */}
        <section id="faq" className="section-shell mt-24">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2563eb]">
              Preguntas Frecuentes
            </p>
            <h2 className="font-display mt-4 text-4xl leading-tight text-[#0f2240] md:text-5xl font-normal">
              Resuelve tus dudas al instante.
            </h2>
            <p className="mt-4 text-base text-[#475569]">
              Te presentamos las respuestas a las preguntas más frecuentes de nuestra comunidad antes de programar su cita.
            </p>
          </div>

          <div className="mt-12 max-w-3xl mx-auto space-y-4">
            {faqList.map((faq, idx) => (
              <div
                key={idx}
                className="premium-card p-5 bg-white cursor-pointer transition-all duration-300 rounded-[28px] overflow-hidden border border-[#1d4ed8]/10 hover:border-[#1d4ed8]/30 shadow-sm"
                onClick={() => toggleFaq(idx)}
              >
                <div className="flex items-center justify-between gap-4 select-none">
                  <h3 className="text-base font-bold text-[#0f2240]">
                    {faq.question}
                  </h3>
                  <span className={`text-xl font-bold transition-transform duration-300 text-[#1d4ed8] ${openFaq === idx ? "rotate-45" : ""}`}>
                    +
                  </span>
                </div>
                {openFaq === idx && (
                  <div className="mt-4 pt-4 border-t border-[#cbd5e1]/20 text-sm text-[#475569] leading-relaxed fade-in-up">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Contact panel section with premium-card-dark fixed background */}
        <section id="contacto" className="section-shell mt-24">
          <div className="premium-card premium-card-dark p-8 md:p-12 rounded-[28px] overflow-hidden transition-all duration-300 hover:shadow-md">
            <div className="grid gap-12 lg:grid-cols-12 items-stretch">
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#b0cbf7]">
                    Contacto Directo
                  </p>
                  <h2 className="font-display mt-4 text-4xl leading-tight text-white md:text-5xl font-normal">
                    La cita médica ideal empieza con un mensaje de apoyo.
                  </h2>
                  <p className="mt-6 text-sm md:text-base text-[#b0cbf7]/80 leading-relaxed max-w-xl">
                    Escríbenos al canal que te resulte más cómodo. Coordinamos tu atención rápidamente. Tu salud es nuestra prioridad número uno en Caraballeda.
                  </p>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <a
                    href={siteConfig.contact.whatsappPrimaryUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-[#2563eb] hover:bg-[#1d4ed8] !text-white hover:!text-white text-center px-8 py-4 rounded-full text-xs font-bold uppercase tracking-[0.1em] transition-all duration-300 shadow-[0_8px_24px_-6px_rgba(37,99,235,0.25)] hover:-translate-y-0.5 active:scale-95"
                  >
                    Escribir por WhatsApp
                  </a>
                  <a
                    href={siteConfig.location.directionsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-white/5 border border-white/12 !text-white hover:bg-white/10 hover:border-white/20 text-center px-8 py-4 rounded-full text-xs font-bold uppercase tracking-[0.1em] transition-all duration-300 active:scale-95"
                  >
                    Ruta de Google Maps
                  </a>
                </div>
              </div>

              {/* Single unified and non-redundant Contact Widget Card */}
              <div className="lg:col-span-5">
                <div className="bg-white/5 border border-white/12 rounded-[24px] p-6 space-y-6">
                  <div className="flex items-center gap-4">
                    <span className="p-3 rounded-xl bg-white/10 text-[#b0cbf7] shrink-0">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-[#b0cbf7]">WhatsApp Principal</p>
                      <a
                        className="mt-1 block text-base font-bold text-white hover:text-[#b0cbf7] transition"
                        href={siteConfig.contact.whatsappPrimaryUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {siteConfig.contact.whatsappPrimaryDisplay}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="p-3 rounded-xl bg-white/10 text-[#b0cbf7] shrink-0">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-[#b0cbf7]">Llamar al Dispensario</p>
                      <a className="mt-1 block text-base font-bold text-white hover:text-[#b0cbf7] transition" href={siteConfig.contact.phoneHref}>
                        {siteConfig.contact.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="p-3 rounded-xl bg-white/10 text-[#b0cbf7] shrink-0">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-[#b0cbf7]">Instagram del Centro</p>
                      <a
                        className="mt-1 block text-xs font-semibold text-[#b0cbf7] hover:text-white transition"
                        href={siteConfig.social.instagram}
                        target="_blank"
                        rel="noreferrer"
                      >
                        @candelaria23057
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 border-t border-white/10 pt-4">
                    <span className="p-3 rounded-xl bg-white/10 text-[#b0cbf7] shrink-0">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-[#b0cbf7]">Horario de Atención</p>
                      <p className="mt-1 text-sm font-bold text-white">Lunes a Viernes · 7:00 am a 4:00 pm</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer System */}
      <footer className="bg-[#0f2240] text-[#faf6f0] border-t border-white/5 pt-16 pb-12">
        <div className="section-shell">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 pb-12 border-b border-white/10">
            <div>
              <span className="font-display text-2xl font-normal">Dispensario Nuestra Señora de la Candelaria</span>
              <p className="mt-4 text-xs text-[#b0cbf7] leading-relaxed">
                Salud solidaria para Caraballeda y La Guaira. Brindamos servicios médicos transparentes, cercanos y de gran dignidad comunitaria.
              </p>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#b0cbf7]">Enlaces</h4>
              <ul className="mt-4 space-y-2.5 text-xs text-[#b0cbf7]">
                <li><a className="hover:text-white transition" href="#especialidades">Consultas</a></li>
                <li><a className="hover:text-white transition" href="#como-llegar">Ubicación y Mapa</a></li>
                <li><a className="hover:text-white transition" href="#faq">Preguntas Frecuentes</a></li>
                <li><a className="hover:text-white transition" href="#contacto">Escríbenos directo</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#b0cbf7]">Especialidades</h4>
              <ul className="mt-4 space-y-2.5 text-xs text-[#b0cbf7]">
                <li>Ginecología</li>
                <li>Pediatría y Nutrición</li>
                <li>Traumatología y Ortopedia</li>
                <li>Medicina General</li>
                <li>Psicología Clínica</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#b0cbf7]">Ubicación Física</h4>
              <p className="mt-4 text-xs text-[#b0cbf7] leading-relaxed">
                Calle Real, Caraballeda 1165. Casco histórico de Caraballeda, Estado La Guaira, Venezuela.
              </p>
            </div>
          </div>

          {/* Creador Callout Card - Libertad Creativa para la firma de Carlos González */}
          <div className="mt-12 mb-8 p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 transition-all duration-300 hover:bg-white/8 hover:border-white/15">
            <div className="flex items-start gap-4">
              <span className="p-3 rounded-xl bg-white/10 text-[#2563eb] shrink-0">
                <svg className="h-5 w-5 text-[#b0cbf7]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </span>
              <div>
                <h4 className="text-xs font-bold text-white tracking-[0.1em] uppercase">
                  Diseño & Desarrollo Web Profesional
                </h4>
                <p className="text-xs text-[#b0cbf7]/80 mt-1 leading-relaxed max-w-xl">
                  Sitio web diseñado y programado a medida por <strong>Carlos González</strong>. ¿Desea crear, rediseñar o modernizar su sitio web comercial o institucional con esta misma calidad premium?
                </p>
              </div>
            </div>
            <a
              href="mailto:cargonzalez0601@gmail.com?subject=Consulta%20sobre%20Dise%C3%B1o%20y%20Desarrollo%20de%20Sitio%20Web"
              className="bg-[#2563eb] hover:bg-[#1d4ed8] !text-white text-center py-2.5 px-6 rounded-full text-xs font-bold uppercase tracking-[0.1em] transition-all duration-300 shadow-[0_4px_12px_rgba(37,99,235,0.2)] hover:-translate-y-0.5 active:scale-95 border border-transparent shrink-0"
            >
              Contactar al Desarrollador
            </a>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-[10px] font-bold uppercase tracking-[0.16em] text-[#b0cbf7]">
            <p>© {new Date().getFullYear()} Fundación San Pedro Apóstol. Todos los derechos reservados.</p>
            <p>Creado por <a href="mailto:cargonzalez0601@gmail.com" className="hover:text-white transition underline">Carlos González</a> · cargonzalez0601@gmail.com</p>
            <p>RIF: J-00164776-7 · Cáritas Diocesana</p>
          </div>
        </div>
      </footer>
    </>
  );
}
