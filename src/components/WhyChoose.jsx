import { Link } from 'react-router-dom'
import { Button } from './ui.jsx'
import { images } from '../data/images.js'

// Translated from the reference's trust badges. These are factual CLAIMS (rating, license,
// years, local ownership) — the client must confirm each is true before the site goes live.
const points = ['מדורגים ב-5 כוכבים', 'שנות ניסיון רבות', 'רישיון וביטוח מלא', 'עסק מקומי בבעלות אישית']

export default function WhyChoose() {
  return (
    <section className="bg-ink-2 py-24 sm:py-28">
      <div className="mx-auto grid max-w-content items-center gap-12 px-6 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col items-start gap-6">
          <h2 className="font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-paper text-balance sm:text-5xl">
            למה גוון היא הבחירה הנכונה לאזור
          </h2>
          <p className="max-w-lg font-body text-lg leading-relaxed text-muted-ondark">
            אנחנו מכירים את האתגרים הייחודיים של צביעה באזור — מהשמש החזקה של הקיץ ועד הקור של החורף. הניסיון שלנו
            מבטיח שנשתמש בהכנה ובחומרים הנכונים לתוצאה שנשארת, בכל נכס שלכם.
          </p>

          <ul className="flex flex-col gap-3.5">
            {points.map((point) => (
              <li key={point} className="flex items-center gap-3 font-body text-base font-semibold text-paper/90">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ember text-ink">
                  <svg width="13" height="13" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M4 10.5L8 14.5L16 6" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {point}
              </li>
            ))}
          </ul>

          <div className="mt-2 flex flex-col gap-4 sm:flex-row">
            <Button as={Link} to="/contact" variant="primary">
              קבלו הצעת מחיר
            </Button>
            <Button as={Link} to="/about" variant="ghost">
              קראו עוד עלינו
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-[2rem_5rem_2rem_5rem] shadow-card">
            {/* Sells the outcome, not the labour. teamPro showed a carpenter with a saw —
                the wrong trade for a painting company. */}
            <img
              src={images.interiorWarm}
              alt="סלון בגוונים חמים לאחר צביעה"
              loading="lazy"
              className="aspect-[5/4] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
