# Instrucciones de Codex — Sitio web de Nido Café

## Project goal
Build a fast, accessible, welcoming, premium Spanish-language website for Nido Café, a coffee shop with a children's play area in Santiago de Chile. The site should help parents understand the experience, find the café, review the menu and play offerings, and contact or book with the business if those features are confirmed.

## Read before changing code
1. Read this `AGENTS.md`, `project_specs.md`, and `brand_guidelines.md` if present.
2. Inspect existing source files, package scripts, and configuration before creating or replacing anything.
3. If `project_specs.md` does not exist, create a first draft based on confirmed information. Mark unknown facts as `TBD`; do not invent business information.

## Planning and scope
- For a new site or major architecture change: summarize the approach, update `project_specs.md`, and request approval before major implementation.
- For small, well-defined changes: make the requested change, test it, and report results without an unnecessary approval cycle.
- Only modify files relevant to the task. Explain major structural changes first.
- Never delete or rename important files without permission.
- Do not add backend services, authentication, payments, or booking integrations unless required by the approved specification.

## Language and verified business context
- The public-facing website must use natural Chilean Spanish (`es-CL`) throughout: navigation, buttons, metadata, accessibility labels, error messages, forms and content. Do not ship English placeholder copy.
- Business name: **Nido Café**. Instagram: https://www.instagram.com/nidocafe.play/ . City: Santiago de Chile. Owner-provided Instagram screenshot lists Av. Las Condes 7430, Local 4, Las Condes, Santiago; confirm it is current before publishing.
- Display Chilean peso formatting (`es-CL`, CLP) for prices once the owner provides accurate prices; use Chilean date/time conventions.
- Never claim specific opening hours, prices, age limits, child supervision, food options or bookings without approval.

## Brand fidelity: mandatory
- Nido Café's OWN Instagram account (@nidocafe.play) is the authoritative source of artistic direction, not generic café imagery, competitors' websites or AI-generated moodboards.
- Owner-supplied Instagram grid and logo screenshots are available and analyzed in `brand_guidelines.md`; request only missing original brand assets and authorized business photos. Instagram may not be accessible programmatically; never claim to have inspected its visual identity if access is blocked.
- Follow `brand_guidelines.md` for observed colors (approximate HEX), typographic character, motifs, shapes, composition, photography and voice; refine it only when verified original assets are supplied. Mark approximations explicitly.
- Prefer original, licensed business photography and existing brand assets. Do not scrape or hotlink Instagram content without permission. Do not copy a third party's design.
- Produce a home-page visual direction for approval before building the full site. No unrelated rebrand, stock-style reinterpretation, generic gradients, cartoon template or emoji iconography.

## Design direction
- Warm, playful, refined, and welcoming to families without looking childish or cluttered.
- Modern typography, clear hierarchy, generous spacing, subtle motion, polished mobile-first layouts.
- Use a consistent accessible color system; prefer real café and play-space photography when available.
- Avoid generic gradients, excessive animation, emoji icons, and stock copy that makes unsupported claims.
- Include obvious calls to action such as `Ver carta`, `Conoce nuestro espacio`, `Cómo llegar`, and `Reservar` only if reservations are actually offered.

## Suggested pages (confirm in project_specs.md)
- Home: café and kids' play experience, primary action, key visitor information.
- Menu: drinks, food, kids' options; allergens/ingredients only when verified.
- Play Area: age guidance, supervision requirements, play rules, session lengths and pricing if confirmed.
- Parties & Events: birthday packages or private events only if offered.
- Visit Us: address, hours, contact, map, parking/transit and accessibility information when known.
- FAQ: parent-focused answers on supervision, socks, age ranges, bookings, cancellations and food policies when verified.
- Contact / booking: only if supported by real processes or integrated systems.

## Technology
- Default stack for a **new application**, subject to `project_specs.md`: TypeScript, Next.js App Router, Tailwind CSS, Vercel.
- Prefer static/server-rendered pages where possible for speed and SEO.
- Add Supabase only if real requirements call for database, authentication, storage, or complex booking. A simple café marketing site should not require it by default.
- Reuse the existing project stack instead of migrating it without approval.
- Organize reusable components in `/components`, utilities in `/lib`, pages in `/app`, and static assets in `/public`.
- Keep each component focused and keep business logic separate from route handlers.

## SEO and content
- Use semantic HTML with one clear main heading per page and logical section headings.
- Create descriptive, unique titles, meta descriptions, and readable URLs.
- Include accurate location and business details supplied by the owner; do not fabricate reviews, opening hours, prices, safety certifications, or amenities.
- Add relevant internal links and useful local-intent content without keyword stuffing or repetitive location pages.
- Include appropriate structured data (e.g., LocalBusiness/CafeOrCoffeeShop, BreadcrumbList) only when facts are verified and markup matches visible content.
- Generate sitemap and robots configuration appropriate to deployment; don't block important public pages accidentally.
- Configure canonical URLs consistently after the production domain is known.
- Optimize Core Web Vitals, responsive images, fonts, and bundle size.
- Write helpful page copy in Chilean Spanish for parents and caregivers; describe play supervision and age policies accurately once confirmed.
- Optimize for real local intent (e.g., cafetería con juegos para niños en Santiago) naturally, without keyword stuffing, fabricated locations, or unsupported rankings.
- Use `lang="es-CL"` and Spanish Open Graph/social metadata. Include a verified map link and Instagram profile.

## Accessibility and user experience
- Target WCAG 2.2 AA practices: keyboard navigation, visible focus styles, descriptive links, form labels, adequate contrast and reduced-motion support.
- Ensure tap targets are practical on mobile, navigation is straightforward, and hours/location/contact details are easy to find.
- Never imply that children are supervised by staff unless confirmed by the business.
- Do not collect information about children unless explicitly required, legally reviewed, and approved.

## Security and privacy
- Keep secrets in environment variables; never commit `.env.local` or expose server keys in client code.
- Apply least-privilege access. If Supabase is added, use row-level security and keep privileged credentials server-side.
- If forms, payments, analytics, or reservations are added, document data collection, consent, and error handling.
- Avoid logging sensitive visitor information.

## Quality and testing
- Before reporting completion, run the applicable tests, type checks, lint checks, and `npm run build` if available.
- When possible, run the app and verify important user flows and responsive behavior in a browser.
- Check success and failure paths for forms, bookings, or API features.
- Be transparent: state which checks passed and which could not be run. Never claim untested work is tested.
- Do not break existing pages or remove SEO metadata while implementing features.

## Communication style
Explain the work in plain, concise language. For implementation updates, include:
1. **What changed** — what was created or modified.
2. **How to check it** — exact steps for the owner, if any.
3. **Why it matters** — one sentence.
4. **What remains** — missing inputs, issues, or the next meaningful step.

Ask concise questions when a genuinely necessary business requirement is missing. Otherwise use clearly labeled placeholders and proceed with safe, reversible work.


## Latest owner-approved homepage priority
Read the responsive layout section at the end of `project_specs.md` and `brand_guidelines.md` as the most recent instruction. Mobile must prioritize quick menu access and a birthday celebration banner right away; desktop must preserve the premium asymmetrical Coffee Haven-inspired bento structure with both an obvious menu CTA and a prominent birthday promotion. Do not make mobile a simple scaled-down desktop hero. Never invent menu content or birthday package details.
