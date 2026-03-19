import Image from "next/image";
import Link from "next/link";

const serviceLinks = [
  { href: "#services", label: "Automatización industrial" },
  { href: "#services", label: "Control de procesos" },
  { href: "#services", label: "Industria 4.0 e IoT" },
];

const companyLinks = [
  { href: "#home", label: "Inicio" },
  { href: "#about", label: "Acerca de" },
  { href: "#contact", label: "Contacto" },
];

const socialLinks = [
  { href: "#", label: "Twitter" },
  { href: "#", label: "LinkedIn" },
  { href: "#", label: "Instagram" },
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-cta-row">
          <h2 className="footer-cta">¿Listos para automatizar tu industria?</h2>
          <Link href="#contact" className="btn btn-outline-white btn-lg">
            Empezar
          </Link>
        </div>
        <div className="footer-main">
          <div className="footer-about">
            <Link href="#home" className="logo" aria-label="SAIMCO">
              <Image
                src="/saimco-logo-transparent.png"
                alt="SAIMCO"
                width={120}
                height={34}
                className="logo-image"
              />
            </Link>
            <p>
              Soluciones y Automatización Industrial de México. Automatización
              industrial e Industria 4.0 para manufactura y procesos.
            </p>
          </div>
          <div className="footer-col">
            <h4>Servicios</h4>
            {serviceLinks.map(({ href, label }) => (
              <Link key={label} href={href}>
                {label}
              </Link>
            ))}
          </div>
          <div className="footer-col">
            <h4>Empresa</h4>
            {companyLinks.map(({ href, label }) => (
              <Link key={label} href={href}>
                {label}
              </Link>
            ))}
          </div>
          <div className="footer-col">
            <h4>Social</h4>
            {socialLinks.map(({ href, label }) => (
              <Link key={label} href={href}>
                {label}
              </Link>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} SAIMCO. Todos los derechos reservados.</p>
          <div className="footer-social">
            {socialLinks.map(({ href, label }) => (
              <Link key={label} href={href} aria-label={label}>
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
