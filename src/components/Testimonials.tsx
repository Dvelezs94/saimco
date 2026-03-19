import Image from "next/image";
import { AnimateIn, AnimateStagger, AnimateStaggerChild } from "./AnimateIn";

const testimonials = [
  {
    quote:
      "El equipo de SAIMCO entendió nuestra línea de producción desde el primer día. La automatización que implementaron redujo el tiempo muerto y nos hizo visibles los datos.",
    name: "Ricardo Hernández",
    company: "Planta de manufactura, Monterrey",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&fit=crop&crop=face",
  },
  {
    quote:
      "El impacto del trabajo de SAIMCO en nuestra organización ha sido transformador. Ahora tenemos control y visibilidad que antes no teníamos.",
    name: "Ana Martínez",
    company: "Industria de procesos, Estado de México",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&fit=crop&crop=face",
  },
  {
    quote:
      "La profundidad de conocimiento de su equipo en PLCs, SCADA e Industria 4.0 nos ayudó a navegar una actualización compleja. Profesionales y en tiempo.",
    name: "Carlos Ruiz",
    company: "Proveedor automotriz",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&fit=crop&crop=face",
  },
  {
    quote:
      "SAIMCO superó nuestras expectativas. Agradecemos su acompañamiento y el impacto positivo que han tenido en nuestras operaciones.",
    name: "Laura Gómez",
    company: "Alimentos y bebidas",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&fit=crop&crop=face",
  },
];

export function Testimonials() {
  return (
    <section className="section section-testimonials">
      <div className="container">
        <AnimateIn>
          <p className="section-label">Testimonios</p>
          <h2 className="section-title">Lo que dicen nuestros clientes</h2>
          <p className="section-desc">
            Fabricantes y plantas en todo México confían en SAIMCO para
            proyectos de automatización e Industria 4.0.
          </p>
        </AnimateIn>
        <div className="testimonials-slider">
          <AnimateStagger
            className="testimonials-track"
            staggerChildren={0.1}
            delayChildren={0.05}
          >
            {testimonials.map((t) => (
              <AnimateStaggerChild key={t.name}>
                <blockquote className="testimonial">
                  <p>{t.quote}</p>
                  <Image
                    src={t.avatar}
                    alt=""
                    width={48}
                    height={48}
                    className="testimonial-avatar"
                  />
                  <footer>
                    <strong>{t.name}</strong>
                    <span>{t.company}</span>
                  </footer>
                </blockquote>
              </AnimateStaggerChild>
            ))}
          </AnimateStagger>
        </div>
      </div>
    </section>
  );
}
