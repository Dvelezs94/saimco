import Image from "next/image";
import Link from "next/link";
import { AnimateIn, AnimateStagger, AnimateStaggerChild } from "./AnimateIn";

const posts = [
  {
    title:
      "De lo manual a lo automatizado: primeros pasos en automatización industrial",
    date: "8 Abr 2024",
    category: "Automatización",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
    alt: "Automatización industrial",
  },
  {
    title:
      "Industria 4.0 en México: conectividad y datos que agregan valor",
    date: "15 Mar 2024",
    category: "Industria 4.0",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    alt: "Manufactura inteligente",
  },
  {
    title:
      "SCADA y MES: por qué importa la visibilidad en el piso de planta",
    date: "28 Feb 2024",
    category: "Control de procesos",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80",
    alt: "Sistemas de control",
  },
];

export function Blog() {
  return (
    <section id="blog" className="section section-blog">
      <div className="container">
        <AnimateIn>
          <p className="section-label">Nuestro blog</p>
          <h2 className="section-title">
            Explora ideas y mantente al día
          </h2>
          <p className="section-desc">
            Ideas y buenas prácticas sobre automatización industrial, Industria
            4.0 y digitalización para manufactura en México.
          </p>
        </AnimateIn>
        <AnimateStagger className="blog-grid" staggerChildren={0.12}>
          {posts.map((post) => (
            <AnimateStaggerChild key={post.title}>
              <Link href="#blog" className="blog-card">
                <div className="blog-card-image">
                  <Image
                    src={post.image}
                    alt={post.alt}
                    fill
                    sizes="(max-width: 809px) 100vw, 33vw"
                  />
                </div>
                <div className="blog-card-overlay">
                  <span className="blog-card-category">{post.category}</span>
                  <h3 className="blog-card-title">{post.title}</h3>
                  <span className="blog-card-date">{post.date}</span>
                </div>
              </Link>
            </AnimateStaggerChild>
          ))}
        </AnimateStagger>
      </div>
    </section>
  );
}
