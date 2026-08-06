import { Link } from 'react-router-dom'
import { images } from '../data/images.js'

const cards = [
  {
    title: 'צביעה מסחרית',
    text: 'הגנו על התדמית של העסק ושדרגו אותה. אנחנו מטפלים בפרויקטים גדולים — מסחר, משרדים, בנייני מגורים ותעשייה.',
    image: images.commercialBuilding,
    alt: 'בניין משרדים מסחרי',
    to: '/commercial',
  },
  {
    title: 'צביעה למגורים',
    text: 'שדרגו את פנים הבית או את החזית בגימור מושלם. אנחנו מתמחים בהכול — מצביעת בית שלם ועד חידוש ארונות.',
    image: images.residentialHouse,
    alt: 'בית פרטי מטופח',
    to: '/residential',
  },
]

export default function PropertyCards() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 sm:py-28">
      {/* faint starfield */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        aria-hidden="true"
        style={{
          backgroundImage:
            'radial-gradient(1px 1px at 20% 30%, rgba(255,255,255,0.5) 50%, transparent), radial-gradient(1px 1px at 70% 20%, rgba(255,255,255,0.4) 50%, transparent), radial-gradient(1.5px 1.5px at 40% 70%, rgba(255,255,255,0.35) 50%, transparent), radial-gradient(1px 1px at 85% 60%, rgba(255,255,255,0.4) 50%, transparent), radial-gradient(1px 1px at 12% 80%, rgba(255,255,255,0.35) 50%, transparent)',
        }}
      />

      <div className="relative mx-auto max-w-content px-6 sm:px-8">
        <h2 className="mx-auto max-w-3xl text-center font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-paper text-balance sm:text-5xl">
          אנחנו גורמים לכל נכס לזרוח
        </h2>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {cards.map((card) => (
            <article
              key={card.title}
              className="reveal flex flex-col rounded-[2rem] bg-paper-card p-6 shadow-card sm:p-8"
            >
              <h3 className="text-center font-display text-2xl font-bold text-ink">{card.title}</h3>
              <p className="mx-auto mt-3 max-w-sm text-center font-body text-[15px] leading-relaxed text-muted-onlight">
                {card.text}
              </p>

              <div className="paint-reveal relative mt-7 overflow-hidden rounded-[1.5rem]">
                <img
                  src={card.image}
                  alt={card.alt}
                  loading="lazy"
                  className="aspect-[4/3] w-full rounded-[1.5rem] object-cover"
                />
                <Link
                  to={card.to}
                  aria-label={`עוד על ${card.title}`}
                  className="absolute left-1/2 top-4 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full bg-ink text-ember shadow-soft transition-colors duration-200 hover:bg-ember hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
                >
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path
                      d="M13 14L6 7M6 7v6M6 7h6"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
