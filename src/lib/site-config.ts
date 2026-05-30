const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

const fallbackSiteUrl = "https://dispensariocaraballeda.vercel.app";

const resolvedSiteUrl =
  rawSiteUrl && /^https?:\/\//.test(rawSiteUrl) ? rawSiteUrl : fallbackSiteUrl;

const normalizedSiteUrl = resolvedSiteUrl.endsWith("/")
  ? resolvedSiteUrl.slice(0, -1)
  : resolvedSiteUrl;

const latitude = 10.609075;
const longitude = -66.847155;

export const siteConfig = {
  name: "Dispensario Nuestra Señora de la Candelaria",
  shortName: "Dispensario Candelaria",
  description:
    "Dispensario en Caraballeda, La Guaira, Venezuela, con pediatría, nutrición, medicina general, traumatología, ginecología y psicología. Horarios, precios, mapa y WhatsApp directo.",
  url: normalizedSiteUrl,
  host: new URL(normalizedSiteUrl).host,
  locale: "es_VE",
  keywords: [
    "dispensario en Caraballeda",
    "centro de salud en Caraballeda",
    "dispensario en La Guaira",
    "ginecologia en Caraballeda",
    "pediatria en Caraballeda",
    "medicina general en Caraballeda",
    "psicologia en La Guaira",
    "traumatologia en Caraballeda",
    "consulta medica en La Guaira",
    "Bajada de los Indios Caraballeda",
  ],
  contact: {
    phoneDisplay: "0424-2696131",
    phoneIntl: "+58 424-2696131",
    phoneHref: "tel:+584242696131",
    whatsappPrimaryDisplay: "0424-2696131",
    whatsappPrimaryUrl:
      "https://wa.me/584242696131?text=Hola%2C%20quiero%20agendar%20una%20cita%20en%20el%20Dispensario%20Nuestra%20Se%C3%B1ora%20de%20la%20Candelaria%20para%20la%20especialidad%20de%20",
    whatsappSecondaryDisplay: "0414-0424961",
    whatsappSecondaryIntl: "+58 414-0424961",
    whatsappSecondaryUrl:
      "https://wa.me/584140424961?text=Hola%2C%20quiero%20agendar%20una%20cita%20en%20el%20Dispensario%20Nuestra%20Se%C3%B1ora%20de%20la%20Candelaria%20para%20la%20especialidad%20de%20",
  },
  social: {
    instagram: "https://www.instagram.com/candelaria23057?igsh=enZoM2h1YnFkaHpn",
  },
  location: {
    reference: "Bajada de los Indios, bajando desde la Iglesia Nuestra Señora de La Candelaria.",
    streetAddress: "Calle Real, Caraballeda 1165",
    locality: "Caraballeda",
    region: "La Guaira",
    country: "VE",
    mapEmbedUrl: `https://www.google.com/maps?q=${latitude},${longitude}&z=17&output=embed`,
    mapPlaceUrl: `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`,
    directionsUrl: `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`,
  },
  organization: {
    legalName: "Fundación San Pedro Apóstol / Dispensario Cáritas",
    taxId: "J-00164776-7",
    priceRange: "$15-$17",
  },
  hours: "Mo-Fr 07:00-16:00",
} as const;