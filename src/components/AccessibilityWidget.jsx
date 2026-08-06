import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

// Accessibility menu required by IS 5568. Each toggle sets a class on <html>;
// the actual styling lives in index.css under the `a11y-*` classes.
// Choices persist in localStorage so they survive a return visit.

const STORAGE_KEY = 'gavan:a11y'

const TOGGLES = [
  { id: 'contrast', label: 'ניגודיות גבוהה', cls: 'a11y-contrast' },
  { id: 'links', label: 'הדגשת קישורים', cls: 'a11y-links' },
  { id: 'readable', label: 'גופן קריא', cls: 'a11y-readable' },
  { id: 'stopMotion', label: 'עצירת אנימציות', cls: 'a11y-stop-motion' },
  { id: 'bigCursor', label: 'סמן עכבר גדול', cls: 'a11y-big-cursor' },
]

const DEFAULTS = {
  fontScale: 0,
  contrast: false,
  links: false,
  readable: false,
  stopMotion: false,
  bigCursor: false,
}

const FONT_STEPS = [0, 1, 2, 3] // 100%, 112.5%, 125%, 137.5%

function readStored() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? { ...DEFAULTS, ...JSON.parse(raw) } : { ...DEFAULTS }
  } catch {
    return { ...DEFAULTS }
  }
}

export default function AccessibilityWidget() {
  const [open, setOpen] = useState(false)
  const [settings, setSettings] = useState(readStored)
  const panelRef = useRef(null)
  const triggerRef = useRef(null)

  // Reflect settings onto <html> and persist them.
  useEffect(() => {
    const root = document.documentElement
    TOGGLES.forEach(({ id, cls }) => root.classList.toggle(cls, Boolean(settings[id])))
    root.classList.remove('a11y-font-1', 'a11y-font-2', 'a11y-font-3')
    if (settings.fontScale > 0) root.classList.add(`a11y-font-${settings.fontScale}`)

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(settings))
    } catch {
      /* storage unavailable (private mode) — settings simply won't persist */
    }
  }, [settings])

  // Close on Escape, and return focus to the trigger.
  useEffect(() => {
    if (!open) return
    function onKey(e) {
      if (e.key === 'Escape') {
        setOpen(false)
        triggerRef.current?.focus()
      }
    }
    function onClickOutside(e) {
      if (
        panelRef.current &&
        !panelRef.current.contains(e.target) &&
        !triggerRef.current.contains(e.target)
      ) {
        setOpen(false)
      }
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onClickOutside)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onClickOutside)
    }
  }, [open])

  const update = (patch) => setSettings((s) => ({ ...s, ...patch }))
  const isDefault = JSON.stringify(settings) === JSON.stringify(DEFAULTS)

  return (
    <div className="a11y-widget fixed bottom-5 start-5 z-[70] print:hidden">
      {open && (
        <div
          ref={panelRef}
          role="dialog"
          aria-modal="false"
          aria-label="תפריט נגישות"
          className="absolute bottom-16 start-0 w-[19rem] rounded-card border border-line-dark bg-ink-2 p-5 shadow-card"
        >
          <div className="flex items-center justify-between gap-4 pb-4">
            <h2 className="font-display text-lg font-extrabold text-paper">תפריט נגישות</h2>
            <button
              type="button"
              onClick={() => {
                setOpen(false)
                triggerRef.current?.focus()
              }}
              aria-label="סגירת תפריט הנגישות"
              className="flex h-8 w-8 items-center justify-center rounded-full text-paper/60 transition-colors hover:bg-white/10 hover:text-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
            >
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <div className="flex flex-col gap-2 border-t border-line-dark pt-4">
            <p className="font-body text-sm font-bold text-paper/85" id="a11y-font-label">
              גודל טקסט
            </p>
            <div className="flex gap-2" role="group" aria-labelledby="a11y-font-label">
              {FONT_STEPS.map((step) => (
                <button
                  key={step}
                  type="button"
                  onClick={() => update({ fontScale: step })}
                  aria-pressed={settings.fontScale === step}
                  className={`flex-1 rounded-pill border-2 py-2 font-body text-sm font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember ${
                    settings.fontScale === step
                      ? 'border-ember bg-ember text-ink'
                      : 'border-paper/20 text-paper/80 hover:border-ember hover:text-ember'
                  }`}
                >
                  {['רגיל', 'א+', 'א++', 'א+++'][step]}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-4 flex flex-col gap-1 border-t border-line-dark pt-4">
            {TOGGLES.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                onClick={() => update({ [id]: !settings[id] })}
                aria-pressed={Boolean(settings[id])}
                className="flex items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-start font-body text-sm font-medium text-paper/85 transition-colors hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
              >
                {label}
                <span
                  aria-hidden="true"
                  className={`flex h-5 w-9 shrink-0 items-center rounded-pill p-0.5 transition-colors ${
                    settings[id] ? 'bg-ember' : 'bg-white/15'
                  }`}
                >
                  <span
                    className={`h-4 w-4 rounded-full bg-ink transition-transform duration-200 ${
                      settings[id] ? '-translate-x-4' : 'translate-x-0'
                    }`}
                  />
                </span>
              </button>
            ))}
          </div>

          <div className="mt-4 flex flex-col gap-3 border-t border-line-dark pt-4">
            <button
              type="button"
              onClick={() => setSettings({ ...DEFAULTS })}
              disabled={isDefault}
              className="rounded-pill border-2 border-paper/20 py-2.5 font-body text-sm font-bold text-paper/80 transition-colors hover:border-ember hover:text-ember disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-paper/20 disabled:hover:text-paper/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
            >
              איפוס הגדרות
            </button>
            <Link
              to="/accessibility"
              onClick={() => setOpen(false)}
              className="text-center font-body text-sm font-bold text-ember underline decoration-ember/40 underline-offset-4 transition-colors hover:decoration-ember focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
            >
              להצהרת הנגישות המלאה
            </Link>
          </div>
        </div>
      )}

      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? 'סגירת תפריט הנגישות' : 'פתיחת תפריט הנגישות'}
        /* Ink fill rather than ember: the button sits on both the dark sections and the
           lime hero, and an ember pill disappears entirely against the lime. */
        className="flex h-12 w-12 items-center justify-center rounded-full bg-ink text-ember ring-2 ring-ember/70 shadow-card transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:ring-ember active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
      >
        {/* Universal accessibility symbol */}
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <circle cx="12" cy="4.2" r="1.9" />
          <path d="M20 7.4c-2.5.9-5.1 1.4-8 1.4s-5.5-.5-8-1.4a1 1 0 1 0-.6 1.9c1.9.6 3.9 1.1 5.9 1.3v2.2c0 .6-.1 1.1-.3 1.7l-2.1 5.8a1.05 1.05 0 0 0 2 .7l1.9-5.3c.2-.5.6-.8 1.2-.8s1 .3 1.2.8l1.9 5.3a1.05 1.05 0 0 0 2-.7l-2.1-5.8c-.2-.6-.3-1.1-.3-1.7v-2.2c2-.2 4-.7 5.9-1.3a1 1 0 1 0-.6-1.9z" />
        </svg>
      </button>
    </div>
  )
}
