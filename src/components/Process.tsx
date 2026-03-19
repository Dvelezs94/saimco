import { AnimateIn, AnimateStagger, AnimateStaggerChild } from "./AnimateIn";

const steps = [
  { num: "01.", title: "Descubrimiento", text: "Analizamos tus procesos, equipos y objetivos para definir el alcance correcto de automatización e Industria 4.0." },
  { num: "02.", title: "Diseño", text: "Diseñamos soluciones: PLCs, SCADA, IoT y MES—alineadas con tu estrategia de producción y digital." },
  { num: "03.", title: "Implementación", text: "Integramos, comisionamos y capacitamos a tu equipo para que el sistema opere con confiabilidad en planta." },
  { num: "04.", title: "Soporte", text: "Monitoreamos el desempeño y te acompañamos para que tu automatización y datos sigan aportando valor." },
];

export function Process() {
  return (
    <section className="section section-process">
      <div className="container">
        <AnimateIn>
          <h2 className="section-title">Nuestro proceso</h2>
          <p className="section-desc" style={{ color: "rgba(255,255,255,0.9)", maxWidth: "560px" }}>
            Un proceso claro y probado para entregar proyectos de
            automatización industrial e Industria 4.0 desde la idea hasta la
            operación.
          </p>
        </AnimateIn>
        <AnimateStagger className="process-steps" staggerChildren={0.08}>
          {steps.map((step) => (
            <AnimateStaggerChild key={step.num}>
              <article className="process-step">
                <span className="process-num">{step.num}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            </AnimateStaggerChild>
          ))}
        </AnimateStagger>
      </div>
    </section>
  );
}
