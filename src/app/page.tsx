import { ArrivalGuide } from "@/app/_components/arrival-guide";
import { CommunityBenefits } from "@/app/_components/community-benefits";
import { ContactSection } from "@/app/_components/contact-section";
import { FaqAccordion } from "@/app/_components/faq-accordion";
import { FloatingWhatsAppButton } from "@/app/_components/floating-whatsapp-button";
import { HomeHero } from "@/app/_components/home-hero";
import { SiteFooter } from "@/app/_components/site-footer";
import { SiteHeader } from "@/app/_components/site-header";
import { SpecialtyExplorer } from "@/app/_components/specialty-explorer";
import { medicalSpecialtiesSchema } from "@/app/_data/home-content";
import { siteConfig } from "@/lib/site-config";
export default function Home() {
  return (
    <>
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
            medicalSpecialty: medicalSpecialtiesSchema,
          }),
        }}
      />

      <FloatingWhatsAppButton />
      <SiteHeader />

      <main className="pb-24 pt-8">
        <HomeHero />
        <CommunityBenefits />
        <SpecialtyExplorer />
        <ArrivalGuide />
        <FaqAccordion />
        <ContactSection />
      </main>

      <SiteFooter />
    </>
  );
}
