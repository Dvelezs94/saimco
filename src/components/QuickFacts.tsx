import { AnimateStagger, AnimateStaggerChild } from "./AnimateIn";

const facts = [
  { value: "20+", label: "Años en automatización industrial" },
  { value: "500+", label: "Proyectos entregados en México" },
  { value: "24/7", label: "Soporte y monitoreo" },
  { value: "Industria 4.0", label: "Soluciones listas para Industria 4.0" },
];

export function QuickFacts() {
  return (
    <section className="quick-facts" aria-label="Datos clave">
      <div className="container quick-facts-inner">
        <p className="quick-facts-headline">
          Confiados por fabricantes en México.
        </p>
        <AnimateStagger className="quick-facts-grid" staggerChildren={0.08}>
          {facts.map((item) => (
            <AnimateStaggerChild key={item.label} className="quick-fact">
              <span className="quick-fact-value">{item.value}</span>
              <span className="quick-fact-label">{item.label}</span>
            </AnimateStaggerChild>
          ))}
        </AnimateStagger>
      </div>
    </section>
  );
}
