"use client";

import { useState } from "react";

import { faqList } from "@/app/_data/home-content";

export function FaqAccordion() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section id="faq" className="section-shell mt-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2563eb]">
          Preguntas Frecuentes
        </p>
        <h2 className="font-display mt-4 text-4xl font-normal leading-tight text-[#0f2240] md:text-5xl">
          Resuelve tus dudas al instante.
        </h2>
        <p className="mt-4 text-base text-[#475569]">
          Te presentamos las respuestas a las preguntas más frecuentes de nuestra comunidad
          antes de programar su cita.
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-3xl space-y-4">
        {faqList.map((faq, index) => {
          const isOpen = openFaq === index;
          const panelId = `faq-panel-${index}`;

          return (
            <div
              key={faq.question}
              className="premium-card overflow-hidden rounded-[28px] border border-[#1d4ed8]/10 bg-white p-5 shadow-sm transition-all duration-300 hover:border-[#1d4ed8]/30"
            >
              <h3>
                <button
                  type="button"
                  className="flex w-full select-none items-center justify-between gap-4 text-left"
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                >
                  <span className="text-base font-bold text-[#0f2240]">{faq.question}</span>
                  <span
                    className={`text-xl font-bold text-[#1d4ed8] transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
              </h3>
              {isOpen && (
                <div
                  id={panelId}
                  className="fade-in-up mt-4 border-t border-[#cbd5e1]/20 pt-4 text-sm leading-relaxed text-[#475569]"
                >
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}