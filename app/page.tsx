import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main id="contenido">
      <div className="shell page-intro">
        <p className="eyebrow">Un espacio para compartir</p>
        <p className="intro-line">Café para ti. Juego para ellos. <span>Un momento para todos.</span></p>
      </div>

      <section className="shell mobile-menu" aria-labelledby="mobile-menu-title">
        <div className="mobile-menu-top">
          <p className="eyebrow">Nido Café / Menú</p>
          <span aria-hidden="true">01</span>
        </div>
        <div className="mobile-menu-body">
          <h1 id="mobile-menu-title">Nuestra <em>carta.</em></h1>
          <p>Un espacio para descubrir lo que te espera en Nido Café.</p>
        </div>
        <div className="mobile-menu-pending">
          <p className="eyebrow">Contenido por confirmar</p>
          <p>La carta y sus precios se publicarán aquí cuando estén verificados.</p>
        </div>
      </section>

      <section className="shell bento" aria-label="Nido Café: café y celebraciones">
        <article className="bento-main">
          <div className="hero-copy">
            <p className="eyebrow">Bienvenidos a Nido Café</p>
            <h1 id="home-title">Un café para ti,<br /><em>diversión para ellos.</em></h1>
            <h2 className="mobile-hero-title">Un café para ti,<br /><em>diversión para ellos.</em></h2>
            <p>Un espacio para encontrarse, disfrutar y dejar que la imaginación siga su curso.</p>
            <Link className="button button-dark" href="#espacio">Conoce nuestro espacio <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="hero-art-frame">
              <Image src="/Nido-logo-01.jpg" alt="" fill sizes="(max-width: 800px) 60vw, 28vw" priority className="hero-logo" />
            </div>
          </div>
          <span className="hero-index" aria-hidden="true">01 / NIDO CAFÉ</span>
        </article>

        <article className="bento-menu">
          <div className="card-top"><span className="eyebrow">El café también es protagonista</span></div>
          <div className="menu-ornament" aria-hidden="true"><span>N</span></div>
          <div className="card-bottom">
            <div>
              <h2>Nuestra <em>carta</em></h2>
              <p>Algo rico para acompañar cada momento.</p>
            </div>
            <Link className="button button-outline" href="/carta">Ver la carta <span aria-hidden="true">↗</span></Link>
          </div>
        </article>

        <article className="bento-birthday">
          <div className="birthday-mark" aria-hidden="true"><span /><span /><span /></div>
          <div className="birthday-content">
            <p className="eyebrow">Momentos para recordar</p>
            <h2>Celebra su cumpleaños <em>en Nido Café</em></h2>
            <Link className="text-link" href="/cumpleanos">Ver cumpleaños <span aria-hidden="true">↗</span></Link>
          </div>
        </article>
      </section>

      <section className="shell story-section" id="espacio" aria-labelledby="space-title">
        <div className="section-heading">
          <p className="eyebrow">Una pausa para todos</p>
          <h2 id="space-title">Un lugar para <em>estar juntos.</em></h2>
        </div>
        <p>En Nido Café se encuentran dos mundos: un momento de café para grandes y un espacio de juego para los más pequeños. Queremos que cada visita se sienta cercana, simple y especial.</p>
      </section>

      <section className="shell lower-grid" aria-label="Más sobre Nido Café">
        <div className="lower-card play-card">
          <span className="eyebrow">Para los más pequeños</span>
          <h2>El juego también <em>tiene su lugar.</em></h2>
          <p>Pronto compartiremos más sobre el espacio de juegos.</p>
        </div>
        <div className="lower-card visit-card" id="visitanos">
          <span className="eyebrow">Ven a conocernos</span>
          <h2>Nos vemos <em>en Nido.</em></h2>
          <p>Estamos en Santiago de Chile. Confirmaremos aquí la dirección y los horarios antes de publicar el sitio.</p>
          <a className="text-link" href="https://www.instagram.com/nidocafe.play/" target="_blank" rel="noopener noreferrer">Visita nuestro Instagram <span aria-hidden="true">↗</span><span className="sr-only"> (abre en una nueva pestaña)</span></a>
        </div>
      </section>
    </main>
  );
}
