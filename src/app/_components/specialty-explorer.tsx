"use client";

import { useState } from "react";

import { SpecialtyIcon } from "@/app/_components/home-icons";
import { specialtyExplorer } from "@/app/_data/home-content";
import { siteConfig } from "@/lib/site-config";

export function SpecialtyExplorer() {
  const [activeTab, setActiveTab] = useState(0);

  const activeSpecialty = specialtyExplorer[activeTab];

  return (
    <section id="especialidades" className="section-shell mt-24">
      <div className="max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2563eb]">
          Servicios y Especialidades
        </p>
        <h2 className="font-display mt-4 text-4xl leading-tight text-[#0f2240] md:text-5xl">
          Nuestras consultas especializadas sin rodeos.
        </h2>
        <p className="mt-4 text-base text-[#475569]">
          Te facilitamos la información de forma directa. Elige una especialidad para ver al
          instante su precio solidario, horarios y los doctores que te atenderán.
        </p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-12">
        <div className="flex flex-col gap-2 lg:col-span-4" role="tablist" aria-label="Especialidades médicas">
          {specialtyExplorer.map((specialty, index) => {
            const isActive = activeTab === index;

            return (
              <button
                key={specialty.name}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`specialty-panel-${index}`}
                id={`specialty-tab-${index}`}
                onClick={() => setActiveTab(index)}
                className={`flex w-full items-center gap-4 rounded-2xl p-5 text-left transition-all duration-300 ${
                  isActive
                    ? "bg-[#1d4ed8] !text-white hover:!text-white shadow-[0_12px_24px_-6px_rgba(29,78,216,0.25)] scale-[1.02]"
                    : "border border-transparent bg-white text-[#0f2240] hover:border-[#b0cbf7]/20 hover:bg-[#e8f0fe]"
                }`}
              >
                <span
                  className={`rounded-xl p-2 transition-all ${
                    isActive ? "bg-white/10 text-white" : "bg-[#e8f0fe] text-[#1d4ed8]"
                  }`}
                >
                  <SpecialtyIcon icon={specialty.icon} />
                </span>
                <div className="flex-1">
                  <span className="block text-sm font-bold leading-tight">{specialty.name}</span>
                  <span
                    className={`mt-1 block text-xs ${
                      isActive ? "text-[#b0cbf7]" : "text-[#475569]"
                    }`}
                  >
                    Consulta: {specialty.price}
                  </span>
                </div>
                <span className="font-display text-xs">→</span>
              </button>
            );
          })}
        </div>

        <div className="flex flex-col lg:col-span-8">
          <div
            id={`specialty-panel-${activeTab}`}
            role="tabpanel"
            aria-labelledby={`specialty-tab-${activeTab}`}
            className="premium-card flex flex-1 flex-col justify-between overflow-hidden rounded-[28px] border border-[#1d4ed8]/10 border-t-4 border-t-[#1d4ed8] bg-white p-8 md:p-10"
          >
            <div className="fade-in-up">
              <div className="flex flex-wrap items-start justify-between gap-4 border-b border-[#cbd5e1]/30 pb-6">
                <div>
                  <h3 className="font-display text-3xl font-normal text-[#0f2240]">
                    {activeSpecialty.name}
                  </h3>
                  <p className="mt-2 text-sm italic text-[#475569]">
                    {activeSpecialty.accent}
                  </p>
                </div>

                <div className="rounded-2xl border border-[#b0cbf7]/20 bg-[#e8f0fe] px-6 py-4 text-center">
                  <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#1d4ed8]">
                    Precio Solidario
                  </p>
                  <p className="mt-1 text-3xl font-extrabold text-[#1d4ed8]">
                    {activeSpecialty.price}
                  </p>
                  <p className="mt-0.5 text-[10px] text-[#475569]">Pago en consulta</p>
                </div>
              </div>

              <p className="mt-6 text-sm leading-relaxed text-[#475569] md:text-base">
                {activeSpecialty.description}
              </p>

              <div className="mt-8 space-y-6">
                <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-[#2563eb]">
                  Personal Médico y Horarios de Atención
                </h4>

                {activeSpecialty.doctors.map((doctor) => (
                  <div
                    key={doctor.name}
                    className="rounded-2xl border border-[#cbd5e1]/30 bg-[#fcfdfe] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#b0cbf7]/40 hover:shadow-sm"
                  >
                    <div className="flex flex-col gap-3 border-b border-[#cbd5e1]/20 pb-4 sm:flex-row sm:items-center sm:justify-between">
                      <p className="text-base font-bold text-[#0f2240]">{doctor.name}</p>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#e8f0fe] px-3 py-1 text-xs font-semibold text-[#1d4ed8]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#1d4ed8]" />
                        {doctor.schedule}
                      </span>
                    </div>

                    <ul className="mt-4 grid gap-3 text-xs text-[#475569] sm:grid-cols-2 md:text-sm">
                      {doctor.services.map((service) => (
                        <li key={`${doctor.name}-${service}`} className="flex items-start gap-2.5">
                          <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#e8f0fe] text-[10px] font-bold text-[#1d4ed8]">
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

            <div className="mt-8 flex flex-col gap-4 border-t border-[#cbd5e1]/30 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-xs text-[#475569]">
                ¿Quieres coordinar una cita para esta especialidad?
              </span>
              <a
                href={`${siteConfig.contact.whatsappPrimaryUrl}${encodeURIComponent(activeSpecialty.name)}`}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#1d4ed8] px-6 py-3 text-center text-xs font-bold uppercase tracking-[0.1em] !text-white shadow-[0_8px_24px_-6px_rgba(29,78,216,0.35)] transition-all duration-300 hover:!text-white hover:bg-[#0f2240] active:scale-95"
              >
                Agendar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}