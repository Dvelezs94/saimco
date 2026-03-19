"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#home", label: "Inicio" },
  { href: "#services", label: "Servicios" },
  { href: "#about", label: "Acerca de" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-inner">
        <Link href="#home" className="logo" aria-label="SAIMCO - Inicio">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/saimco-logo-transparent.png"
            alt="SAIMCO — Soluciones y Automatización Industrial de México"
            className="logo-image"
            width={140}
            height={40}
            fetchPriority="high"
          />
        </Link>
        <nav className="nav" aria-label="Navegación principal">
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
          <Link href="#contact" className="btn btn-primary">
            Contacto
          </Link>
        </nav>
        <button
          type="button"
          className="menu-btn"
          aria-label="Abrir menú"
          aria-expanded={mobileOpen}
          onClick={() => {
            setMobileOpen((o) => !o);
            document.body.style.overflow = mobileOpen ? "" : "hidden";
          }}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <div className={`mobile-nav ${mobileOpen ? "is-open" : ""}`}>
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            onClick={() => {
              setMobileOpen(false);
              document.body.style.overflow = "";
            }}
          >
            {label}
          </Link>
        ))}
        <Link
          href="#contact"
          onClick={() => {
            setMobileOpen(false);
            document.body.style.overflow = "";
          }}
          className="btn btn-primary"
        >
          Contacto
        </Link>
      </div>
    </header>
  );
}
