# Nido Café — Especificaciones del sitio web

## Concept
A coffee shop where adults can enjoy coffee and food while children play in a designated games/play area.

## Primary audience
Parents, caregivers, and families looking for a welcoming café with children's activities.

## Goals
- Explain the café + play concept quickly.
- Show menus and play offerings.
- Make the café easy to locate and contact.
- Support bookings or event enquiries only if the business offers them.

## Brand and business facts — to confirm
- Café name: **Nido Café**
- City: **Santiago de Chile**. Owner-supplied Instagram profile states **Av. Las Condes 7430, Local 4, Las Condes, Santiago de Chile**; reconfirm before publishing.
- Website domain: TBD
- Official Instagram: https://www.instagram.com/nidocafe.play/
- Website language: **Spanish (Chile), es-CL**, including copy, navigation and metadata
- Branding/colors/fonts: **Match the existing @nidocafe.play Instagram identity**. Owner-provided Instagram screenshots analyzed in `brand_guidelines.md`; color values are approximate until original assets are provided.
- Opening hours and contact details: TBD
- Children's target ages: TBD
- Play activities and supervision policies: TBD
- Admission/session pricing: TBD
- Menu, allergy details, and dietary options: TBD
- Birthday parties/events: TBD
- Reservations/booking workflow: TBD
- Business photography and approved assets: TBD

## Artistic direction and approvals
- Preserve the existing Nido Café artistic identity, based on owner-approved Instagram references and original assets.
- Codex must read the existing `brand_guidelines.md` derived from provided screenshots and request original high-resolution logo files and authorized photographs before final production.
- Show an initial homepage direction for approval before building the rest of the site.
- Never use generic competitor photos as if they were photos of Nido Café.

## Preliminary Spanish messaging — needs owner approval
- Homepage H1 proposal: **Un café para ti. Un mundo de juegos para ellos.**
- Intro proposal: **Un espacio para compartir, disfrutar de un rico café y dejar que los más pequeños descubran, imaginen y jueguen.**
- Navigation proposal: **Inicio · Nuestro espacio · Carta · Visítanos · Preguntas frecuentes**.
- CTA proposal: **Conoce nuestro espacio** / **Cómo llegar**. Add **Reserva** only if supported.
- These texts are drafts; do not present them as Nido Café's current official slogans.

## Suggested pages
1. Inicio
2. Carta
3. Espacio de juegos
4. Visítanos / Cómo llegar
5. Preguntas frecuentes
6. Cumpleaños y eventos (solo si existen)
7. Reservas / Contacto (solo si existe el servicio)

## Proposed stack
- Next.js (App Router), TypeScript, Tailwind CSS
- Vercel hosting
- Prefer static content initially
- Supabase or third-party booking added only if needed

## Local SEO for Santiago, Chile
- Chilean Spanish on every page (`es-CL`). Use natural expressions such as "cafetería con juegos para niños" and "cafetería familiar" only where relevant.
- Validate the exact address/comuna before adding it to titles, LocalBusiness schema or map embeds; do not imply coverage of unrelated comunas.
- Configure consistent Nido Café business name, contact data, opening hours and profile links once verified.
- Use correct `CafeOrCoffeeShop` structured data with verified facts, accessible imagery and fast mobile performance.

## Content and SEO
- Descriptive titles, meta descriptions, headings and internal links.
- Accurate local business details and appropriate schema after confirmation.
- Sitemap, robots settings, canonical domain, accessible responsive layouts.
- Fast loading mobile experience with optimized photography.

## Definition of done — initial marketing site
- Approved content and branding on all agreed pages.
- Mobile, tablet and desktop layouts tested.
- Menu, play information, opening hours, contact details and location correct.
- Accessible primary navigation and working links/forms.
- SEO metadata and basic crawl/index settings configured.
- Production build passes and deployment process documented.

## Open decisions before major implementation
- Final confirmation that the Instagram-listed address is current.
- Original logo file and usable authorized high-resolution photographs (screenshots already supplied).
- Whether the play area is free, ticketed, timed, or reservation-based.
- Whether online reservations or birthday-party enquiries are needed at launch.
- Available branding, menu, photography and business policies.

## Additional homepage layout inspiration
- Use the supplied Coffee Haven screenshot for **layout only**: asymmetric rounded bento hero, a dominant visual card and two smaller stacked cards, followed by useful horizontal cards.
- Brand identity always comes from Nido Café and Instagram; do not reproduce the reference site’s assets, copy, e-commerce features, or generic coffee branding.
- See section 10 of `brand_guidelines.md` for precise implementation constraints.


## APPROVED RESPONSIVE HOMEPAGE PRIORITY — overrides older generic layout suggestions
This owner direction takes precedence over earlier homepage proposals. **Mobile and desktop are deliberately different compositions**, not merely a shrunk version of the same bento grid.

### Mobile (first screen is conversion-focused)
- Compact header with authentic Nido Café logo and a visible `Carta` navigation/CTA.
- Above the fold, give primary emphasis to **the café menu** with large clearly tappable `Ver la carta` button/card. If a verified menu is available, show a tasteful food/coffee photograph and a short menu introduction; never invent menu items or prices.
- Immediately next, prominently display an inviting **birthday celebrations banner**, ideally visible in the first viewport or with its upper portion immediately below. Suggested: `Celebra su cumpleaños en Nido Café` and `Conoce nuestros cumpleaños` (link to confirmed information or enquiry channel; don't fake online booking).
- Treat menu and birthdays as the two top actions. Avoid a tall introductory hero or carousel pushing these CTAs down. Play area, café story, location, gallery, FAQ follow lower on the page.
- Stack cards vertically with generous but controlled spacing; ensure CTA tap targets are comfortable and content fits 320–390px screens. Prioritize loading and accessibility.

### Desktop (Coffee Haven layout inspiration)
- Use the shared Coffee Haven reference for overall structure: premium, asymmetric, generously rounded bento composition with one large main image/card and two smaller stacked cards.
- Make `Ver la carta` an unmistakable, high-priority button in header or hero AND a clearly visible menu card.
- Include a visually compelling **birthday invitation card/banner** in the initial bento layout, not hidden below several scrolls. It should include `Celebra su cumpleaños en Nido Café` with an obvious `Ver cumpleaños` action.
- Use real Nido Café photographs and logo, matching the brand's sage/cream/coffee-brown with judicious turquoise/pastel accents. Do not adopt Coffee Haven branding or e-commerce interface elements like carts and "Shop Now".
- Other cards can feature `Zona de juegos` and `Cómo llegar` further down.

### Conversion and content rules
- Every menu CTA must point to a working on-site menu page/section or an owner-approved external menu, once supplied. Never use dead `#` links.
- Every birthday CTA must lead to a dedicated birthday information page or a verified contact/enquiry method. Birthday celebrations are shown in the supplied Instagram imagery; **details, packages, prices, booking process, and availability must still be confirmed**.
- No fabricated menu entries, pricing, events, booking confirmations, photos, operating hours, or contact details.
- Ask for actual menu and birthday package information before finalizing content. Temporary, explicit `Contenido por confirmar` placeholders are allowed in drafts only.
- Review both 375px mobile and 1440px desktop homepage previews with the owner before extending the rest of the site.
