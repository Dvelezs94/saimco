import Link from "next/link";

export function CTA() {
  return (
    <section id="contact" className="section section-cta">
      <div className="container" style={{ textAlign: "center" }}>
        <h2 className="section-title" style={{ marginLeft: "auto", marginRight: "auto" }}>
          ¿Listos para automatizar tu industria?
        </h2>
        <Link href="#contact" className="btn btn-primary btn-lg">
          Empezar
        </Link>
        <p className="section-desc" style={{ marginLeft: "auto", marginRight: "auto", marginTop: "1rem", marginBottom: 0 }}>
          SAIMCO — Soluciones y Automatización Industrial de México
        </p>
      </div>
    </section>
  );
}
