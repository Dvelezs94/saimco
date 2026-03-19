import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { QuickFacts } from "@/components/QuickFacts";
import { Services } from "@/components/Services";
import { CTABar } from "@/components/CTABar";
import { Approach } from "@/components/Approach";
import { JourneyBanner } from "@/components/JourneyBanner";
import { Why } from "@/components/Why";
import { Process } from "@/components/Process";
import { Solutions } from "@/components/Solutions";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        // JSON-LD for better entity understanding (Organization)
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "SAIMCO",
            url: siteUrl,
            logo: `${siteUrl}/saimco-logo-transparent.png`,
            description:
              "Automatización industrial en México: PLC/SCADA, control de procesos, digitalización e Industria 4.0.",
            areaServed: "MX",
            knowsAbout: [
              "automatización industrial",
              "PLC",
              "SCADA",
              "control de procesos",
              "Industria 4.0",
              "IoT industrial",
            ],
          }),
        }}
      />
      <Header />
      <main>
        <Hero />
        <QuickFacts />
        <Services />
        <CTABar />
        <Approach />
        <JourneyBanner />
        <Why />
        <Process />
        <Solutions />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
