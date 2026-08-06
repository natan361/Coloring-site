import { useState } from 'react'
import { testimonials as slides } from '../data/testimonials.js'

function Stars({ count }) {
  return (
    <div className="flex gap-1" role="img" aria-label={`דירוג ${count} מתוך 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} width="18" height="18" viewBox="0 0 20 20" aria-hidden="true" className={i < count ? 'text-ember' : 'text-paper/20'}>
          <path
            fill="currentColor"
            d="M10 1.6l2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4L2.2 7.3l5.4-.8L10 1.6z"
          />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [i, setI] = useState(0)
  const active = slides[i]
  const go = (dir) => setI((prev) => (prev + dir + slides.length) % slides.length)

  return (
    <section className="bg-ink py-24 sm:py-28">
      <div className="mx-auto max-w-content px-6 sm:px-8">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
          <h2 className="font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-paper text-balance sm:text-5xl">
            בתים ועסקים מרוצים ברחבי האזור
          </h2>
          <p className="font-body text-lg leading-relaxed text-muted-ondark">
            רוב הלקוחות שלנו מגיעים מהמלצה של לקוח קודם. אלה הדברים שהם אומרים לנו — ולשכנים
            שלהם — אחרי שהעבודה נגמרה.
          </p>
        </div>

        <div className="mt-16 grid items-center gap-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[2rem_5rem_2rem_5rem] shadow-card">
            <img
              src={active.image}
              alt={`${active.project} — ${active.role}`}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover transition-opacity duration-300"
            />
          </div>

          <figure className="m-0 flex flex-col gap-6 rounded-[2rem] bg-ink-2 p-8 sm:p-10">
            <div className="flex items-center justify-between gap-4">
              <svg width="44" height="44" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="text-ember">
                <path d="M7 7h4v6a4 4 0 0 1-4 4v-2a2 2 0 0 0 2-2H7V7zm8 0h4v6a4 4 0 0 1-4 4v-2a2 2 0 0 0 2-2h-2V7z" />
              </svg>
              <Stars count={active.rating} />
            </div>

            <blockquote className="font-display text-xl font-medium leading-snug text-paper/90 sm:text-[22px]">
              {active.quote}
            </blockquote>

            <figcaption className="flex flex-col gap-1 border-t border-line-dark pt-5">
              <span className="font-display text-base font-bold text-paper">{active.name}</span>
              <span className="font-body text-sm text-muted-ondark">{active.role}</span>
              <span className="font-body text-sm font-semibold text-ember">{active.project}</span>
            </figcaption>

            <div className="mt-2 flex items-center gap-3">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="הקודם"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-line-dark text-paper transition-colors hover:border-ember hover:text-ember focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
              >
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M8 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="הבא"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-line-dark text-paper transition-colors hover:border-ember hover:text-ember focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
              >
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M12 5l-5 5 5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <div className="ms-2 flex gap-2">
                {slides.map((_, idx) => (
                  <span
                    key={idx}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === i ? 'w-6 bg-ember' : 'w-2 bg-paper/25'
                    }`}
                  />
                ))}
              </div>
            </div>
          </figure>
        </div>
      </div>
    </section>
  )
}
