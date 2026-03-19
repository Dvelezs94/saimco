import { AnimateIn, AnimateStagger, AnimateStaggerChild } from "./AnimateIn";

const whyCards = [
  {
    title: "Comprobado en industria",
    text: "Implementamos soluciones de automatización e Industria 4.0 para fabricantes en todo México: de industrias discretas a procesos.",
    icon: "globe",
  },
  {
    title: "Integración total",
    text: "De PLCs y variadores a SCADA, MES e IoT: diseñamos e integramos sistemas alineados a tus procesos y metas.",
    icon: "lightbulb",
  },
  {
    title: "Listos para Industria 4.0",
    text: "Aprovechamos IoT, datos y conectividad para avanzar hacia manufactura inteligente y digitalización.",
    icon: "chart",
  },
];

function IconGlobe() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function IconLightbulb() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18h6M10 22h4M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
    </svg>
  );
}

function IconChart() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  );
}

const iconMap = { globe: IconGlobe, lightbulb: IconLightbulb, chart: IconChart };

export function Why() {
  return (
    <section className="section section-why">
      <div className="container">
        <AnimateIn>
          <p className="section-label">Por qué elegirnos</p>
          <h2 className="section-title">
            Generamos valor para clientes industriales
          </h2>
          <p className="section-desc">
            Nos enfocamos en automatización sólida, una gestión clara del
            proyecto y soluciones que incrementan la productividad y te preparan
            para Industria 4.0.
          </p>
        </AnimateIn>
        <AnimateStagger className="why-grid" staggerChildren={0.12}>
          {whyCards.map((card) => {
            const Icon = iconMap[card.icon as keyof typeof iconMap] ?? IconGlobe;
            return (
              <AnimateStaggerChild key={card.title}>
                <article className="why-card">
                  <div className="why-card-icon">
                    <Icon />
                  </div>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </article>
              </AnimateStaggerChild>
            );
          })}
        </AnimateStagger>
      </div>
    </section>
  );
}
