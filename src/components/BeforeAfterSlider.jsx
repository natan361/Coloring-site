import { useState } from 'react'

export default function BeforeAfterSlider({ before, after, beforeLabel = 'לפני', afterLabel = 'אחרי' }) {
  const [position, setPosition] = useState(50)

  return (
    <div className="reveal relative aspect-video w-full select-none overflow-hidden rounded-card shadow-card">
      {/* Informative, not decorative: these two images carry the entire meaning of the
          component, so they get real alt text rather than alt="". */}
      <img
        src={after}
        alt={`${afterLabel} — החלל לאחר הצביעה`}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
        draggable={false}
      />
      <img
        src={before}
        alt={`${beforeLabel} — החלל לפני הצביעה`}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        draggable={false}
      />

      <div
        className="pointer-events-none absolute inset-y-0 w-0.5 bg-paper/90"
        style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-paper shadow-card ring-2 ring-transparent peer-focus-visible:ring-ember">
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="text-ink">
            <path
              d="M7 6l-4 4 4 4M13 6l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <input
        type="range"
        dir="ltr"
        min={0}
        max={100}
        value={position}
        onChange={(e) => setPosition(Number(e.target.value))}
        aria-label={`גררו כדי להשוות בין ${beforeLabel} ל${afterLabel}`}
        className="peer absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
      />

      {/* Physical left/right on purpose: the drag/clip-path split below is a spatial
          construct (before=left, after=right) independent of document direction, so the
          labels must match it physically rather than mirror with RTL start/end. */}
      <span className="pointer-events-none absolute left-4 top-4 rounded-pill bg-ink/70 px-3 py-1 font-body text-xs font-bold text-paper backdrop-blur-sm">
        {beforeLabel}
      </span>
      <span className="pointer-events-none absolute right-4 top-4 rounded-pill bg-ember px-3 py-1 font-body text-xs font-bold text-ink">
        {afterLabel}
      </span>
    </div>
  )
}
