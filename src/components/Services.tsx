import Image from "next/image";
import { AnimateIn, AnimateStagger, AnimateStaggerChild } from "./AnimateIn";

// Industrial automation & manufacturing imagery
const largeImage =
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=85";
const smallImages = [
  "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=85",
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=85",
];

export function Services() {
  return (
    <section id="services" className="section section-services">
      <div className="container">
        <AnimateIn>
          <div className="services-header">
            <div>
              <h2 className="section-title">
                Servicios de Automatización e Industria 4.0
              </h2>
            </div>
            <p className="section-desc">
              Diseñamos, integramos y damos soporte a soluciones de
              automatización industrial y digital en todo México: de PLC y
              SCADA a IoT y manufactura inteligente.
            </p>
          </div>
        </AnimateIn>
        <AnimateStagger className="services-grid-asymmetric" staggerChildren={0.1}>
          <AnimateStaggerChild className="service-image-large">
            <Image
              src={largeImage}
              alt="Equipos de automatización industrial y paneles de control"
              fill
              sizes="(max-width: 809px) 100vw, 50vw"
              priority
            />
          </AnimateStaggerChild>
          {smallImages.map((src, i) => (
            <AnimateStaggerChild key={i} className="service-image-small">
              <Image
                src={src}
                alt={
                  i === 0
                    ? "Sistemas de manufactura y control"
                    : "Fábrica inteligente e Industria 4.0"
                }
                fill
                sizes="(max-width: 809px) 100vw, 50vw"
              />
            </AnimateStaggerChild>
          ))}
        </AnimateStagger>
      </div>
    </section>
  );
}
