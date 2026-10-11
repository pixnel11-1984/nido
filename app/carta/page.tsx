import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Carta",
  description: "La carta de Nido Café estará disponible aquí cuando su contenido esté confirmado.",
};

export default function MenuPage() {
  return (
    <main id="contenido" className="shell detail-page">
      <h1>Nuestra <em>carta.</em></h1>
      <div className="pending-card"><p>Menú y precios por confirmar.</p></div>
      <Link className="button button-dark" href="/">Volver al inicio <span aria-hidden="true">↗</span></Link>
    </main>
  );
}
