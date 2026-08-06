import { Link } from 'react-router-dom'
import { Container, Button } from './ui.jsx'
import { images } from '../data/images.js'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-paper pb-16 pt-28 sm:pb-24 sm:pt-32">
      {/* soft ambient lime glow, top-start corner */}
      <div className="pointer-events-none absolute -start-32 -top-24 h-96 w-96 rounded-full bg-ember/25 blur-3xl" aria-hidden="true" />

      <Container className="relative grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-8">
        {/* Text — sits inside the organic lime shape (right side in RTL) */}
        <div className="relative">
          <div className="absolute -inset-4 -z-10 rotate-1 rounded-[3rem_7rem_3rem_7rem] bg-ember/45 blur-[2px] sm:-inset-6" aria-hidden="true" />
          <div className="relative rounded-[2.75rem_6rem_2.75rem_6rem] bg-ember px-8 py-10 shadow-ember sm:px-12 sm:py-14">
            <span className="inline-flex items-center gap-2 rounded-pill bg-ink px-4 py-2 font-body text-[13px] font-bold text-paper">
              שירות מקצועי בכל האזור
            </span>

            <h1 className="mt-6 font-display text-[2.6rem] font-black leading-[1.02] tracking-tight text-ink text-balance sm:text-6xl">
              צביעה מקצועית.
              <br />
              אפס כאב ראש.
            </h1>

            <p className="mt-5 max-w-md font-body text-[17px] leading-relaxed text-ink/80">
              ניסיון מוכח של שנים רבות, בשירות מקצועי ואמין לכל אזור השירות והסביבה.
            </p>

            <div className="mt-8">
              <Button as={Link} to="/contact" variant="onEmber">
                קבלו הצעת מחיר חינם
              </Button>
            </div>
          </div>
        </div>

        {/* Photo — family / homeowners (left side in RTL) */}
        <div className="relative">
          <div className="overflow-hidden rounded-[2.5rem_5rem_2.5rem_5rem] shadow-card">
            <img
              src={images.heroFamily}
              alt="משפחה מרוצה מול הבית המחודש"
              loading="eager"
              className="aspect-[4/5] w-full object-cover sm:aspect-[5/6]"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
