import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cumpleaños",
  description: "Información sobre cumpleaños en Nido Café, pendiente de confirmación.",
};

export default function BirthdaysPage() {
  return (
    <main id="contenido" className="shell detail-page">
      <p className="eyebrow">Nido Café / Cumpleaños</p>
      <h1>Momentos para <em>celebrar.</em></h1>
      <p className="detail-lead">Un cumpleaños merece un lugar especial. Estamos reuniendo los detalles para contarte cómo celebrar en Nido Café.</p>
      <div className="pending-card pending-birthday"><span className="eyebrow">Contenido por confirmar</span><p>Disponibilidad, condiciones y formas de contacto se publicarán cuando estén confirmadas.</p></div>
      <Link className="button button-dark" href="/">Volver al inicio <span aria-hidden="true">↗</span></Link>
    </main>
  );
}
