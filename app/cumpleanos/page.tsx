import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cumpleaños",
  description: "Información sobre cumpleaños en Nido Café, pendiente de confirmación.",
};

export default function BirthdaysPage() {
  return (
    <main id="contenido" className="shell detail-page">
      <h1>Cumpleaños <em>en Nido.</em></h1>
      <div className="pending-card pending-birthday"><p>Detalles por confirmar.</p></div>
      <Link className="button button-dark" href="/">Volver al inicio <span aria-hidden="true">↗</span></Link>
    </main>
  );
}
