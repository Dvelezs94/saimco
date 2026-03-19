import Link from "next/link";

export function CTABar() {
  return (
    <div className="cta-bar">
      <div className="container cta-bar-inner">
        <p className="cta-bar-text">
          ¿Listos para automatizar tus operaciones industriales?
        </p>
        <Link href="#contact" className="cta-bar-link">
          Contáctanos
          <span aria-hidden>→</span>
        </Link>
      </div>
    </div>
  );
}
