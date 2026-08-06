import GreenPageHero from './GreenPageHero.jsx'

function Bullet({ children }) {
  return (
    <li className="flex items-start gap-3 font-body text-base leading-relaxed text-ink/85">
      <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ember text-ink">
        <svg width="13" height="13" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path d="M4 10.5L8 14.5L16 6" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span>{children}</span>
    </li>
  )
}

export default function ServiceDetail({ service }) {
  const s = service
  return (
    <GreenPageHero
      title={s.title}
      description={s.subtitle}
      primaryLabel="גלריית עבודות"
      primaryTo="/gallery"
      secondaryLabel="קבלו הצעת מחיר"
      secondaryTo="/contact"
    >
      <div className="flex flex-col gap-6">
        {s.panelHeading && (
          <h2 className="font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-ink text-balance sm:text-4xl">
            {s.panelHeading}
          </h2>
        )}

        {s.intro && <p className="font-body text-lg font-bold text-ink">{s.intro}</p>}

        {s.description && (
          <p className="font-body text-[17px] leading-relaxed text-muted-onlight">{s.description}</p>
        )}

        <div className="overflow-hidden rounded-[1.75rem] shadow-soft">
          <img src={s.image} alt={s.title} loading="lazy" className="aspect-[16/10] w-full object-cover" />
        </div>

        {s.servicesHeading && (
          <h3 className="mt-2 font-display text-2xl font-bold text-ink sm:text-3xl">{s.servicesHeading}</h3>
        )}

        {s.description2 && (
          <p className="font-body text-[17px] leading-relaxed text-muted-onlight">{s.description2}</p>
        )}

        {s.bullets?.length > 0 && (
          <div className="flex flex-col gap-4">
            {s.bulletsHeading && <h4 className="font-display text-lg font-bold text-ink">{s.bulletsHeading}</h4>}
            <ul className="flex flex-col gap-3">
              {s.bullets.map((b) => (
                <Bullet key={b}>{b}</Bullet>
              ))}
            </ul>
          </div>
        )}

        {s.closingHeading && (
          <h3 className="mt-2 font-display text-2xl font-bold text-ink sm:text-3xl">{s.closingHeading}</h3>
        )}

        {s.closing && (
          <p
            className={`font-body leading-relaxed ${
              s.closingHeading ? 'text-[17px] text-muted-onlight' : 'text-[15px] italic text-muted-onlight'
            }`}
          >
            {s.closing}
          </p>
        )}
      </div>
    </GreenPageHero>
  )
}
