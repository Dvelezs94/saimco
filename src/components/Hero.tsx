import Link from "next/link";
import { AnimateIn } from "./AnimateIn";

const heroImage =
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600&q=80";

export function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={heroImage}
          alt=""
          className="hero-bg-img"
          fetchPriority="high"
        />
      </div>
      <div className="hero-overlay" aria-hidden />
      <div className="container hero-content">
        <AnimateIn>
          <h1 className="hero-title">
            Automatización industrial e Industria 4.0 en México
          </h1>
          <p className="hero-subtitle">
            SAIMCO diseña soluciones y automatización para manufactura e
            industria. De control de procesos a fábricas inteligentes: te
            ayudamos a producir más con menos.
          </p>
          <div className="hero-actions">
            <Link href="#contact" className="btn btn-primary">
              Empezar
            </Link>
            <Link href="#services" className="btn btn-outline-white">
              Conoce nuestros servicios
            </Link>
          </div>
        </AnimateIn>
      </div>
      <nav className="hero-subnav" aria-label="Accesos rápidos de servicios">
        <div className="container hero-subnav-inner">
          <Link href="#services">Automatización</Link>
          <Link href="#services">Industria 4.0</Link>
          <Link href="#services">Integración</Link>
        </div>
      </nav>
    </section>
  );
}
