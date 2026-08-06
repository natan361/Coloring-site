// Single source of truth for business facts used across the site, the footer,
// the JSON-LD block and the legal pages.
//
// NOTE — this is a PORTFOLIO / CONCEPT build. The client did not take the project,
// so the contact details below are placeholders chosen for demonstration only.
// They are not a real business, a real phone line or a real inbox.

export const business = {
  name: 'גוון',
  legalName: 'גוון צביעה בע״מ',
  tagline: 'צביעה מקצועית לבית ולעסק',

  phone: '050-4821973',
  phoneHref: 'tel:+972504821973',
  whatsappHref: 'https://wa.me/972504821973',

  email: 'info@gavan.co.il',
  emailHref: 'mailto:info@gavan.co.il',

  // Mobile/service-area business — no storefront address.
  serviceArea: 'גוש דן והשרון',
  serviceAreaLong: 'תל אביב, רמת גן, גבעתיים, הרצליה, רעננה, כפר סבא, פתח תקווה והסביבה',
  hours: 'א׳–ה׳ 08:00–18:00, ו׳ 08:00–13:00',

  // Accessibility coordinator (רכז נגישות) — required by IS 5568.
  a11yCoordinator: 'דני לוי',
  a11yCoordinatorPhone: '050-4821973',
  a11yCoordinatorEmail: 'access@gavan.co.il',

  // Canonical origin, including the GitHub Pages project sub-path.
  // Feeds the canonical tags, Open Graph URLs, the sitemap and the JSON-LD.
  // Change this one line if the site moves to a custom domain.
  siteUrl: 'https://natan361.github.io/Coloring-site',

  // Last review date shown on the legal pages.
  legalUpdated: '6 באוגוסט 2026',
}

export default business
