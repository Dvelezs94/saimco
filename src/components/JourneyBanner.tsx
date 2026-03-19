import Image from "next/image";
import { AnimateIn } from "./AnimateIn";

const imageUrl =
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600&q=80";

export function JourneyBanner() {
  return (
    <section className="journey-banner">
      <div className="journey-banner-bg">
        <Image
          src={imageUrl}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="journey-banner-overlay" aria-hidden />
      <AnimateIn className="journey-banner-text">
        Nuestro recorrido: automatización industrial e Industria 4.0 en México
      </AnimateIn>
    </section>
  );
}
