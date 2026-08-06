import { Link } from 'react-router-dom'
import { Container } from './ui.jsx'
import BrandLogo from './Logo.jsx'
import business from '../data/business.js'

const legalLinks = [
  { to: '/accessibility', label: 'הצהרת נגישות' },
  { to: '/privacy', label: 'מדיניות פרטיות' },
  { to: '/terms', label: 'תנאי שימוש' },
]

const quickLinks = [
  { to: '/', label: 'דף הבית' },
  { to: '/about', label: 'אודות' },
  { to: '/residential', label: 'מגורים' },
  { to: '/commercial', label: 'מסחרי' },
  { to: '/gallery', label: 'גלריית עבודות' },
  { to: '/faq', label: 'שאלות נפוצות' },
  { to: '/contact', label: 'צור קשר' },
]

// Direct contact channels rather than dead social placeholders — a mobile
// service business converts on a tap-to-call, not on a follow.
const channels = [
  {
    label: 'וואטסאפ',
    href: business.whatsappHref,
    external: true,
    icon: 'M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm5.4 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .1-1.7-.1-.4-.1-.9-.3-1.5-.6-2.6-1.1-4.3-3.8-4.4-4-.1-.2-1-1.4-1-2.6s.6-1.8.8-2.1c.2-.2.5-.3.6-.3h.5c.1 0 .4-.1.6.4l.8 2c.1.2.1.3 0 .5l-.4.5c-.1.1-.3.3-.1.6.1.2.6 1 1.3 1.7.9.8 1.6 1 1.9 1.2.2.1.4.1.5-.1l.7-.8c.2-.2.3-.2.5-.1l2 .9c.2.1.4.2.4.3.1.1.1.6-.1 1.2z',
  },
  {
    label: 'התקשרו אלינו',
    href: business.phoneHref,
    icon: 'M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.2.4 2.4.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1l-2.3 2.2z',
  },
]

export default function Footer() {
  return (
    <footer className="bg-ink pt-20">
      <Container className="grid gap-12 pb-14 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr_1fr]">
        <div className="flex flex-col gap-5">
          <BrandLogo tone="dark" size={44} />
          <p className="max-w-xs font-body text-sm leading-relaxed text-muted-ondark">
            שירותי צביעה מקצועיים שמגיעים אליכם — לבית, למשרד ולעסק, עם גימור שנשאר לאורך זמן.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <p className="font-display text-base font-bold text-paper">ניווט מהיר</p>
          <nav className="flex flex-col gap-2.5" aria-label="ניווט תחתון">
            {quickLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="w-fit font-body text-sm font-medium text-muted-ondark transition-colors hover:text-ember"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-4">
          <p className="font-display text-base font-bold text-paper">יצירת קשר</p>
          <a
            href={business.phoneHref}
            className="w-fit font-body text-sm font-bold leading-relaxed text-paper transition-colors hover:text-ember focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
          >
            {business.phone}
          </a>
          <a
            href={business.emailHref}
            className="w-fit font-body text-sm leading-relaxed text-muted-ondark transition-colors hover:text-ember focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
          >
            {business.email}
          </a>
          <p className="font-body text-sm leading-relaxed text-muted-ondark">{business.hours}</p>
          <p className="font-body text-sm leading-relaxed text-muted-ondark">
            שירות נייד — {business.serviceArea}
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <p className="font-display text-base font-bold text-paper">דברו איתנו</p>
          <div className="flex flex-col gap-3">
            {channels.map((s) => (
              <a
                key={s.label}
                href={s.href}
                {...(s.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="group inline-flex w-fit items-center gap-3 font-body text-sm font-medium text-muted-ondark transition-colors hover:text-ember focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-ember transition-colors group-hover:bg-ember group-hover:text-ink">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d={s.icon} />
                  </svg>
                </span>
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </Container>

      <div className="border-t border-line-dark py-6">
        <Container className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          {/* /55 is the lowest opacity that still clears 4.5:1 against the ink footer. */}
          <p className="font-body text-xs text-paper/55">
            © {new Date().getFullYear()} {business.name}. כל הזכויות שמורות.
          </p>

          <nav aria-label="קישורים משפטיים" className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {legalLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="font-body text-xs font-medium text-paper/55 underline decoration-paper/20 underline-offset-4 transition-colors hover:text-ember hover:decoration-ember focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </Container>

        <Container className="pt-4">
          <p className="text-center font-body text-xs leading-relaxed text-paper/55">
            פרויקט קונספט לצורכי הדגמה ותיק עבודות. ״{business.name}״ אינו עסק פעיל, ופרטי הקשר
            והתצלומים המופיעים באתר הם להמחשה בלבד.
          </p>
        </Container>
      </div>
    </footer>
  )
}
