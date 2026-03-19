<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Proyecto SAIMCO (sitio web)

Sitio de landing para `SAIMCO` enfocado en automatización industrial en México (copy en español).

## Stack y convenciones del repo

- Framework: `Next.js` (App Router) en `src/app/*` (ver `src/app/layout.tsx` y `src/app/page.tsx`).
- UI: React + `TypeScript`, con animaciones usando `framer-motion` en `src/components/AnimateIn.tsx` (`AnimateIn`, `AnimateStagger`, `AnimateStaggerChild`).
- Estilos: `src/app/globals.css` importa `tailwindcss` y define clases/CSS variables personalizadas (el “look” editorial del sitio).
- Fuentes: `next/font/google` en `src/app/layout.tsx` (familias `Figtree` e `Inter`).
- SEO: `src/app/layout.tsx` define `export const metadata` (título y `description`).

## Estructura principal

`src/app/page.tsx` compone la landing en secciones usando componentes en `src/components/*`:

- `Header`, `Hero`, `QuickFacts`, `Services`, `CTABar`, `Approach`, `JourneyBanner`, `Why`, `Process`, `Solutions`, `Testimonials`, `CTA`, `Footer`.

## Dónde editar copy

- Textos visibles por sección: `src/components/*.tsx` (suelen estar en arrays de `const` o como props/strings dentro del componente).
- Copy de SEO (y algunos textos de alto nivel): `src/app/layout.tsx`.
