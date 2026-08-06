import { images } from '../data/images.js'
import { testimonials } from '../data/testimonials.js'

// Single pull-quote band on the About page. Uses the first entry from the shared
// testimonials data so there is only one place to swap in real reviews.
const featured = testimonials[0]

export default function TestimonialPlaceholder() {
  return (
    <section className="relative overflow-hidden bg-ink py-28 sm:py-36">
      <img src={images.roomAfter1} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-25" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/60" />

      <figure className="relative m-0 mx-auto flex max-w-3xl flex-col items-center gap-6 px-6 text-center sm:px-8">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="text-ember">
          <path d="M7 7h4v6a4 4 0 0 1-4 4v-2a2 2 0 0 0 2-2H7V7zm8 0h4v6a4 4 0 0 1-4 4v-2a2 2 0 0 0 2-2h-2V7z" />
        </svg>

        <blockquote className="font-display text-2xl leading-relaxed text-paper/90 text-balance sm:text-3xl">
          {featured.quote}
        </blockquote>

        <figcaption className="flex flex-col gap-1">
          <span className="font-display text-base font-bold text-paper">{featured.name}</span>
          <span className="font-body text-sm text-muted-ondark">{featured.role}</span>
        </figcaption>
      </figure>
    </section>
  )
}
