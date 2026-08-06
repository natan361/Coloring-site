import { Link } from 'react-router-dom'

// Staggered card grid used by the Residential and Commercial hub pages. Each card links to
// its own sub-service detail page (`${basePath}/${slug}`), not to /contact.
export default function ServicesGrid({ services, basePath }) {
  return (
    <div className="grid items-start gap-6 sm:grid-cols-2">
      {services.map((service, idx) => (
        <article
          key={service.slug}
          className={`reveal flex flex-col overflow-hidden rounded-[1.75rem] bg-paper-card shadow-soft ${
            idx % 2 === 1 ? 'sm:mt-14' : ''
          }`}
        >
          <div className="paint-reveal aspect-[16/10]">
            <img src={service.image} alt="" loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div className="flex flex-1 flex-col gap-3 p-6">
            <h3 className="font-display text-xl font-bold text-ink">{service.title}</h3>
            <p className="font-body text-[15px] leading-relaxed text-muted-onlight">{service.card}</p>
            <Link
              to={`${basePath}/${service.slug}`}
              className="group mt-auto inline-flex w-fit items-center gap-2 pt-2 font-body text-sm font-bold text-ink transition-colors hover:text-rust"
            >
              לפרטים נוספים
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-ink/15 transition-transform duration-200 group-hover:-translate-x-0.5">
                <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path
                    d="M14 14L6 6M6 6h7M6 6v7"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </article>
      ))}
    </div>
  )
}
