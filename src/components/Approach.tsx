import Image from "next/image";
import Link from "next/link";
import { AnimateIn } from "./AnimateIn";

const approachImage =
  "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80";

const listItems = [
  "Alianzas de largo plazo con fabricantes en todo México",
  "Proyectos de extremo a extremo: diseño, integración, capacitación y soporte",
  "Industria 4.0 e IoT aplicados a entornos reales de producción",
];

export function Approach() {
  return (
    <section id="about" className="section section-approach">
      <div className="container">
        <AnimateIn className="approach-grid">
          <div className="approach-image-wrap">
            <Image
              src={approachImage}
              alt="Equipo SAIMCO y proyectos industriales"
              width={600}
              height={600}
              sizes="(max-width: 809px) 100vw, 50vw"
            />
            <div className="approach-image-card">
              <span style={{ fontSize: "0.75rem", color: "#666" }}>
                Desempeño del proyecto
              </span>
              <div className="approach-chart" aria-hidden />
            </div>
          </div>
          <div>
            <p className="section-label">Sobre nosotros</p>
            <h2 className="section-title">
              Enfoque innovador para la solución industrial
            </h2>
            <p className="section-desc">
              SAIMCO—Soluciones y Automatización Industrial de México—specializes
              en automatización e Industria 4.0. Te ayudamos a que plantas
              y fábricas incrementen eficiencia, calidad y conectividad.
            </p>
            <ul className="approach-list">
              {listItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Link href="#about" className="link-arrow">
              Lee nuestra historia →
            </Link>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
