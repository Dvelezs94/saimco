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

export default function Home() {
  return (
    <>
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
