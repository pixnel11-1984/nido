import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Carta",
  description: "La carta de Nido Café estará disponible aquí cuando su contenido esté confirmado.",
};

export default function MenuPage() {
  return (
    <main id="contenido" className="shell detail-page">
      <p className="eyebrow">Nido Café / Carta</p>
      <h1>Nuestra <em>carta.</em></h1>
      <p className="detail-lead">Estamos preparando este espacio para que puedas conocer la carta de Nido Café.</p>
      <div className="pending-card"><span className="eyebrow">Contenido por confirmar</span><p>Publicaremos productos, precios y detalles cuando estén verificados.</p></div>
      <Link className="button button-dark" href="/">Volver al inicio <span aria-hidden="true">↗</span></Link>
    </main>
  );
}
