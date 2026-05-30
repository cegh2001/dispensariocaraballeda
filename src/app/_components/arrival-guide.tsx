"use client";

import { useState } from "react";

import { arrivalSteps } from "@/app/_data/home-content";
import { siteConfig } from "@/lib/site-config";

export function ArrivalGuide() {
  const [activeStep, setActiveStep] = useState(0);

  const progressWidth =
    arrivalSteps.length > 1 ? (activeStep / (arrivalSteps.length - 1)) * 100 : 0;

  return (
    <section id="como-llegar" className="section-shell mt-24">
      <div className="grid gap-12 lg:grid-cols-12 lg:items-stretch">
        <div className="flex flex-col justify-between lg:col-span-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2563eb]">
              Ubicación Práctica
            </p>
            <h2 className="font-display mt-4 text-4xl font-normal leading-tight text-[#0f2240] md:text-5xl">
              Cómo llegar sin contratiempos.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#475569] md:text-base">
              El dispensario se emplaza en una tradicional calle de bajada en el casco
              histórico de Caraballeda. Te diseñamos una guía de llegada paso a paso muy
              simple desde el punto de referencia principal:
            </p>

            <div className="relative mt-8 flex items-center justify-between px-2">
              <div className="absolute left-0 right-0 top-1/2 -z-10 h-0.5 -translate-y-1/2 bg-[#cbd5e1]/30" />
              <div
                className="absolute left-0 top-1/2 -z-10 h-0.5 -translate-y-1/2 bg-[#1d4ed8] transition-all duration-500"
                style={{ width: `${progressWidth}%` }}
              />
              {arrivalSteps.map((step, index) => {
                const isActive = activeStep === index;
                const isCompleted = index < activeStep;

                return (
                  <button
                    key={step.title}
                    type="button"
                    onClick={() => setActiveStep(index)}
                    aria-label={`Ir al paso ${index + 1}: ${step.title}`}
                    className={`flex h-9 w-9 items-center justify-center rounded-full border text-xs font-bold transition-all duration-300 ${
                      isActive
                        ? "bg-[#1d4ed8] border-[#1d4ed8] !text-white scale-110"
                        : isCompleted
                          ? "border-[#1d4ed8] bg-[#e8f0fe] text-[#1d4ed8]"
                          : "border-[#cbd5e1] bg-white text-[#475569]"
                    }`}
                  >
                    {index + 1}
                  </button>
                );
              })}
            </div>

            <div className="mt-6 flex min-h-[160px] flex-col justify-between rounded-2xl border border-[#cbd5e1]/30 bg-[#fcfdfe] p-6 shadow-sm transition-all duration-300 hover:border-[#b0cbf7]/40">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#2563eb]">
                  Paso {activeStep + 1} · {arrivalSteps[activeStep].title}
                </span>
                <h4 className="mt-1 text-lg font-bold text-[#0f2240]">
                  {arrivalSteps[activeStep].subtitle}
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-[#475569] md:text-sm">
                  {arrivalSteps[activeStep].desc}
                </p>
              </div>

              <div className="mt-4 flex gap-2">
                <button
                  type="button"
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep((prev) => prev - 1)}
                  className="rounded-xl border border-[#cbd5e1] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.05em] transition-all hover:bg-[#f4f7fc] disabled:opacity-40"
                >
                  Atrás
                </button>
                <button
                  type="button"
                  disabled={activeStep === arrivalSteps.length - 1}
                  onClick={() => setActiveStep((prev) => prev + 1)}
                  className="rounded-xl bg-[#1d4ed8] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.05em] !text-white transition-all hover:bg-[#0f2240] disabled:opacity-40"
                >
                  Siguiente
                </button>
              </div>
            </div>

            <div className="mt-6 flex items-start gap-4 rounded-2xl border border-[#cbd5e1]/35 bg-white p-5 shadow-sm transition-all hover:border-[#b0cbf7]/40">
              <span className="shrink-0 rounded-xl bg-[#e8f0fe] p-2.5 text-[#1d4ed8]">
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
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </span>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#2563eb]">
                  Dirección Física
                </p>
                <p className="mt-1 text-sm font-bold text-[#0f2240]">Calle Real, Caraballeda 1165</p>
                <p className="mt-1 text-xs leading-relaxed text-[#475569]">
                  Bajando desde la Iglesia de Nuestra Señora de La Candelaria. Casco
                  Central.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 border-t border-[#cbd5e1]/30 pt-6 sm:flex-row">
            <a
              href={siteConfig.location.mapPlaceUrl}
              target="_blank"
              rel="noreferrer"
              className="flex-1 rounded-full bg-[#1d4ed8] py-3.5 text-center text-xs font-bold uppercase tracking-[0.1em] !text-white shadow-[0_8px_24px_-6px_rgba(29,78,216,0.25)] transition-all duration-300 hover:!text-white hover:bg-[#0f2240] active:scale-95"
            >
              Abrir Mapa
            </a>
            <a
              href={siteConfig.location.directionsUrl}
              target="_blank"
              rel="noreferrer"
              className="flex-1 rounded-full border border-[#1d4ed8]/15 bg-white py-3.5 text-center text-xs font-bold uppercase tracking-[0.1em] !text-[#0f2240] transition-all duration-300 hover:!text-[#1d4ed8] hover:bg-[#fcfdfe] active:scale-95"
            >
              Cómo Llegar
            </a>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div
            className="relative h-full min-h-[450px] overflow-hidden rounded-[28px] border border-[#cbd5e1]/35 shadow-[0_24px_64px_-12px_rgba(15, 34, 64, 0.05)] transition-all duration-300 hover:shadow-md"
            style={{ isolation: "isolate", transform: "translateZ(0)" }}
          >
            <iframe
              title="Ubicación exacta del Dispensario"
              src={siteConfig.location.mapEmbedUrl}
              loading="lazy"
              className="absolute inset-0 h-full w-full rounded-[28px] border-0"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ borderRadius: "28px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}