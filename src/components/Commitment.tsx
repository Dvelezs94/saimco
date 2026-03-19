import Link from "next/link";
import { AnimateIn } from "./AnimateIn";

export function Commitment() {
  return (
    <section className="section section-commitment">
      <div className="container">
        <AnimateIn>
          <p className="section-label">Nuestro compromiso</p>
          <h2 className="section-title">
            Construimos soluciones que generan resultados
          </h2>
          <p className="section-desc">
            Con nuestra trayectoria comprobada, nuestro enfoque colaborativo y
            el compromiso con la excelencia, estamos listos para ayudarte a
            superar retos y aprovechar oportunidades.
          </p>
          <Link href="#contact" className="btn btn-primary btn-lg">
            Solicita una auditoría
          </Link>
        </AnimateIn>
      </div>
    </section>
  );
}
