import { Link } from 'react-router-dom'
import { Button } from './ui.jsx'

function Roller({ className }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" className={className}>
      <rect x="6" y="12" width="40" height="14" rx="7" fill="currentColor" />
      <rect x="10" y="16" width="32" height="6" rx="3" fill="#0F0F10" opacity="0.18" />
      <path
        d="M32 26v6a4 4 0 0 1-4 4H20a4 4 0 0 0-4 4v10"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <rect x="12" y="52" width="8" height="9" rx="2" fill="currentColor" />
    </svg>
  )
}

export default function BlobCTA() {
  return (
    <section className="bg-ink py-20 sm:py-24">
      <div className="mx-auto max-w-content px-6 sm:px-8">
        <div className="reveal relative overflow-hidden rounded-[2.5rem] bg-ember px-6 py-16 text-center shadow-ember sm:px-16 sm:py-20">
          <Roller className="pointer-events-none absolute -start-6 -top-6 h-28 w-28 -rotate-12 text-ink/10 sm:h-40 sm:w-40" />
          <Roller className="pointer-events-none absolute -end-4 bottom-2 h-24 w-24 rotate-[200deg] text-ink/10 sm:h-36 sm:w-36" />

          <h2 className="relative mx-auto max-w-2xl font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-ink text-balance sm:text-5xl">
            קבעו הצעת מחיר חינם עוד היום
          </h2>
          <p className="relative mx-auto mt-4 max-w-md font-body text-lg leading-relaxed text-ink/80">
            בואו ניתן לנכס שלכם את המראה הנקי והמקצועי שמגיע לו — בלי התחייבות ובלי לחץ.
          </p>

          <div className="relative mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button as={Link} to="/contact" variant="onEmber">
              בקשו הצעת מחיר חינם
            </Button>
            <Button as={Link} to="/contact" variant="onEmberGhost" className="gap-2">
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path
                  d="M4 4h3l1.5 4-2 1.5a11 11 0 0 0 4 4l1.5-2 4 1.5v3a1 1 0 0 1-1 1A13 13 0 0 1 3 5a1 1 0 0 1 1-1z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
              התקשרו אלינו
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
