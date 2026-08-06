import business from '../data/business.js'

// Brand lockup: a paint-roller mark in a rounded tile + the "גוון" wordmark.
// The mark deliberately matches favicon.ico exactly, so the browser tab, the search
// result and the header all read as the same brand.

export function LogoMark({ size = 34, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
      className={`shrink-0 ${className}`}
    >
      <rect width="40" height="40" rx="11" className="fill-ember" />
      {/* roller sleeve */}
      <rect x="7.5" y="10" width="19" height="9" rx="4.5" className="fill-ink" />
      {/* frame + handle dropping from the sleeve */}
      <path
        d="M17 19v5.2h7.4a3.4 3.4 0 0 1 3.4 3.4V32"
        strokeWidth="3"
        strokeLinecap="round"
        className="stroke-ink"
        fill="none"
      />
      {/* a single drip — the detail that keeps it from reading as a generic icon */}
      <circle cx="10.8" cy="24.6" r="2.1" className="fill-ink" />
    </svg>
  )
}

export default function Logo({ tone = 'dark', size = 34, showTagline = true, className = '' }) {
  // tone describes the BACKGROUND: 'dark' = on ink, 'light' = on paper/lime.
  const word = tone === 'dark' ? 'text-paper' : 'text-ink'
  const tag = tone === 'dark' ? 'text-ember' : 'text-rust'

  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <LogoMark size={size} />
      <span className="flex flex-col leading-none">
        <span className={`font-display text-[22px] font-extrabold tracking-tight ${word}`}>
          {business.name}
        </span>
        {showTagline && (
          <span className={`mt-1 font-body text-[10px] font-bold tracking-[0.18em] ${tag}`}>
            צביעה מקצועית
          </span>
        )}
      </span>
    </span>
  )
}
