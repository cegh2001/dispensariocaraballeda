export type SpecialtyIconName =
  | "heart"
  | "child"
  | "bone"
  | "stethoscope"
  | "brain";

export type CommunityBenefitIconName = "location" | "price" | "chat";

export interface SpecialtyDoctor {
  name: string;
  schedule: string;
  services: string[];
}

export interface Specialty {
  name: string;
  price: string;
  icon: SpecialtyIconName;
  accent: string;
  description: string;
  doctors: SpecialtyDoctor[];
}

export interface ArrivalStep {
  title: string;
  subtitle: string;
  desc: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface CommunityBenefit {
  title: string;
  desc: string;
  icon: CommunityBenefitIconName;
}

export const medicalSpecialtiesSchema = [
  "Pediatria",
  "Nutricion",
  "Medicina General",
  "Traumatologia",
  "Ginecologia",
  "Psicologia",
] as const;

export const specialtyExplorer: Specialty[] = [
  {
    name: "Ginecología",
    price: "$17",
    icon: "heart",
    accent: "Prevención, consulta ginecológica y citología de control",
    description:
      "Espacio especializado para el cuidado de la salud femenina en todas sus etapas, enfocado en la prevención, consulta ginecológica general y citologías de control.",
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
    icon: "child",
    accent: "Crecimiento, alimentación sana y atención infantil cercana",
    description:
      "Evaluación completa del crecimiento físico y desarrollo psicomotor de bebés, niños y adolescentes, coordinando pautas de nutrición adaptadas a cada etapa.",
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
    icon: "bone",
    accent: "Alivio del dolor, tratamiento de lesiones y movilidad",
    description:
      "Especialidad dedicada al diagnóstico y tratamiento de lesiones del sistema musculoesquelético, ofreciendo soluciones prácticas y no invasivas para recuperar el bienestar.",
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
    icon: "stethoscope",
    accent: "Consulta clínica primaria, control crónico y curas",
    description:
      "Atención médica inicial para adultos y jóvenes. Evaluación general de síntomas, prescripción de tratamientos y seguimiento continuo de patologías comunes.",
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
    icon: "brain",
    accent: "Acompañamiento emocional y psicoterapia familiar",
    description:
      "Un espacio seguro y confidencial enfocado en brindarte herramientas para afrontar crisis emocionales, ansiedad, duelo o dificultades familiares y de pareja.",
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

export const arrivalSteps: ArrivalStep[] = [
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

export const faqList: FaqItem[] = [
  {
    question: "¿Cómo puedo agendar una consulta médica?",
    answer:
      "Puedes agendar fácilmente escribiendo a nuestro WhatsApp principal o secundario. Haz clic en cualquiera de los botones de WhatsApp de la página para iniciar un chat directo y elegir la especialidad que necesitas.",
  },
  {
    question: "¿Tengo que pagar antes de asistir a la consulta?",
    answer:
      "No, el pago se realiza directamente en nuestras instalaciones el día de tu cita médica. Mantenemos precios sumamente transparentes y accesibles ($15 o $17) para apoyar el bienestar de la comunidad.",
  },
  {
    question: "¿Cuáles son los métodos de pago aceptados?",
    answer:
      "Aceptamos efectivo (dólares o bolívares) y métodos de pago móvil locales. Para cualquier duda específica sobre los métodos de facturación, consúltanos directamente vía WhatsApp antes de asistir.",
  },
  {
    question: "¿El dispensario cuenta con farmacia comunitaria?",
    answer:
      "Sí, el dispensario cuenta con el apoyo de Cáritas y la Fundación San Pedro Apóstol para suministrar medicamentos esenciales a precios solidarios o donaciones en casos especiales, según la disponibilidad del inventario.",
  },
];

export const communityBenefits: CommunityBenefit[] = [
  {
    title: "Médicos Comprometidos",
    desc: "Profesionales dedicados al Casco Central de Caraballeda y su bienestar integral.",
    icon: "location",
  },
  {
    title: "Precios Transparentes",
    desc: "Consultas unificadas a $15 y $17 para evitar cualquier sorpresa o recargo oculto.",
    icon: "price",
  },
  {
    title: "Agendamiento Ágil",
    desc: "Coordina directamente a través de WhatsApp tu turno sin intermediarios ni demoras.",
    icon: "chat",
  },
];