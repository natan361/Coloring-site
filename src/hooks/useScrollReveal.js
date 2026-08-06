import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function useScrollReveal() {
  // App itself doesn't remount between routes (only the routed page content does), so
  // the reveal scan must re-run on every navigation, not just once on first mount.
  const { pathname } = useLocation()

  useEffect(() => {
    const mm = gsap.matchMedia()

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const ctx = gsap.context(() => {
        const groups = new Map()
        document.querySelectorAll('.reveal').forEach((el) => {
          const key = el.closest('section') || document.body
          if (!groups.has(key)) groups.set(key, [])
          groups.get(key).push(el)
        })

        groups.forEach((els) => {
          gsap.set(els, { opacity: 0, y: 28 })
          ScrollTrigger.batch(els, {
            start: 'top 88%',
            once: true,
            onEnter: (batch) =>
              gsap.to(batch, {
                opacity: 1,
                y: 0,
                duration: 0.7,
                ease: 'power3.out',
                stagger: 0.09,
              }),
          })
        })

        // Web fonts swap in after ScrollTrigger's initial measurement and reflow the
        // page (taller headings etc.), leaving trigger positions for lower sections
        // stale. Recalculate once the real fonts are in place.
        document.fonts?.ready?.then(() => ScrollTrigger.refresh())
      })

      return () => ctx.revert()
    })

    return () => mm.revert()
  }, [pathname])
}
