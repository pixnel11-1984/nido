import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/cormorant-garamond/600.css";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/500.css";
import "@fontsource/dm-sans/600.css";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Nido Café | Un café para ti, diversión para ellos",
    template: "%s | Nido Café",
  },
  description:
    "Conoce Nido Café: un espacio para compartir un café mientras los más pequeños descubren y juegan. Una primera mirada a nuestra carta y celebraciones.",
  openGraph: {
    locale: "es_CL",
    type: "website",
    title: "Nido Café | Un café para ti, diversión para ellos",
    description:
      "Un espacio para compartir un café y disfrutar en familia en Santiago de Chile.",
  },
  robots: { index: false, follow: false },
};

function Header() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" href="/" aria-label="Nido Café, ir al inicio">
          <Image src="/Nido-logo-01.jpg" alt="" width={64} height={64} priority />
          <span>Nido Café</span>
        </Link>
        <nav className="desktop-nav" aria-label="Navegación principal">
          <Link href="/#espacio">Nuestro espacio</Link>
          <Link href="/carta">Carta</Link>
          <Link href="/cumpleanos">Cumpleaños</Link>
          <Link href="/#visitanos">Visítanos</Link>
        </nav>
        <Link className="header-cta header-menu-cta" href="/carta">Ver la carta <span aria-hidden="true">↗</span></Link>
        <Link className="header-cta header-birthday-cta" href="/cumpleanos">Celebra su cumpleaños <span aria-hidden="true">↗</span></Link>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <div>
          <p className="footer-name">Nido Café</p>
          <p>Un café para ti, diversión para ellos.</p>
        </div>
        <div className="footer-links">
          <Link href="/carta">Carta</Link>
          <Link href="/cumpleanos">Cumpleaños</Link>
          <a href="https://www.instagram.com/nidocafe.play/" target="_blank" rel="noopener noreferrer">Instagram <span className="sr-only">(abre en una nueva pestaña)</span></a>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-CL" data-scroll-behavior="smooth">
      <body>
        <a className="skip-link" href="#contenido">Ir al contenido</a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
