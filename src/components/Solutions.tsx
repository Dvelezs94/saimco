import Image from "next/image";
import Link from "next/link";
import { AnimateIn } from "./AnimateIn";

const imageUrl =
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80";

export function Solutions() {
  return (
    <section className="section section-solutions">
      <div className="container">
        <AnimateIn className="solutions-grid">
          <div className="solutions-image">
            <Image
              src={imageUrl}
              alt="Automatización industrial y sistemas de control"
              width={600}
              height={800}
              sizes="(max-width: 809px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="section-label">Nuestras soluciones</p>
            <h2 className="section-title">
              Construimos soluciones para tareas industriales diversas
            </h2>
            <p className="section-desc">
              De máquinas individuales a líneas completas y plantas: brindamos
              automatización, control de procesos y soluciones de Industria 4.0
              adaptadas a tu sector y escala.
            </p>
            <Link href="#contact" className="btn btn-outline-light">
              Solicita una auditoría
            </Link>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
