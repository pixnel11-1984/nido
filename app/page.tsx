import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main id="contenido">
      <section className="shell mobile-menu" aria-labelledby="mobile-menu-title">
        <div className="mobile-menu-body">
          <h1 id="mobile-menu-title">Nuestra <em>carta.</em></h1>
        </div>
        <p className="mobile-menu-pending">Menú y precios por confirmar.</p>
      </section>

      <section className="shell bento" aria-label="Nido Café: café y celebraciones">
        <article className="bento-main">
          <div className="hero-copy">
            <h1 id="home-title">Un café para ti,<br /><em>diversión para ellos.</em></h1>
            <h2 className="mobile-hero-title">Un café para ti,<br /><em>diversión para ellos.</em></h2>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="hero-art-frame">
              <Image src="/Nido-logo-01.jpg" alt="" fill sizes="(max-width: 800px) 60vw, 28vw" priority className="hero-logo" />
            </div>
          </div>
        </article>

        <article className="bento-menu">
          <div className="menu-ornament" aria-hidden="true"><span>N</span></div>
          <div className="card-bottom">
            <h2>Nuestra <em>carta</em></h2>
            <Link className="button button-outline" href="/carta">Ver la carta <span aria-hidden="true">↗</span></Link>
          </div>
        </article>

        <article className="bento-birthday">
          <div className="birthday-mark" aria-hidden="true"><span /><span /><span /></div>
          <div className="birthday-content">
            <h2>Celebra su cumpleaños <em>en Nido Café</em></h2>
            <Link className="text-link" href="/cumpleanos">Ver cumpleaños <span aria-hidden="true">↗</span></Link>
          </div>
        </article>
      </section>

      <section className="shell lower-grid" aria-label="Más sobre Nido Café">
        <div className="lower-card play-card" id="espacio">
          <span className="eyebrow">Espacio de juegos</span>
          <h2>Un lugar <em>para jugar.</em></h2>
        </div>
        <div className="lower-card visit-card" id="visitanos">
          <span className="eyebrow">Santiago de Chile</span>
          <h2>Nos vemos <em>en Nido.</em></h2>
          <a className="text-link" href="https://www.instagram.com/nidocafe.play/" target="_blank" rel="noopener noreferrer">Instagram <span aria-hidden="true">↗</span><span className="sr-only"> (abre en una nueva pestaña)</span></a>
        </div>
      </section>
    </main>
  );
}
