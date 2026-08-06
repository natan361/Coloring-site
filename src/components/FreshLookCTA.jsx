import { Link } from 'react-router-dom'
import { Button } from './ui.jsx'
import { images } from '../data/images.js'

export default function FreshLookCTA() {
  return (
    <section className="bg-paper py-20 sm:py-24">
      <div className="mx-auto max-w-content px-6 sm:px-8">
        <div className="grid items-stretch gap-6 lg:grid-cols-[1.05fr_1fr] lg:gap-0">
          {/* Lime blob with the closing message (right in RTL) */}
          <div className="relative z-10 flex flex-col items-start justify-center gap-6 rounded-[2.5rem_6rem_2.5rem_6rem] bg-ember px-8 py-14 shadow-ember sm:px-14 lg:me-[-3rem]">
            <h2 className="font-display text-4xl font-black leading-[1.05] tracking-tight text-ink text-balance sm:text-5xl">
              מראה חדש מתחיל בדיוק כאן.
            </h2>
            <p className="max-w-md font-body text-lg leading-relaxed text-ink/80">
              טיפול קטן היום מונע נזק גדול והוצאות מיותרות בהמשך. בואו ניתן לנכס שלכם את המראה שהוא ראוי לו.
            </p>
            <Button as={Link} to="/contact" variant="onEmber">
              בקשו הצעת מחיר חינם
            </Button>
          </div>

          {/* Worker / paint-action photo (left in RTL) */}
          <div className="overflow-hidden rounded-[6rem_2.5rem_6rem_2.5rem] shadow-card">
            <img
              src={images.paintRoller}
              alt="עבודת צביעה בתהליך"
              loading="lazy"
              className="h-full min-h-[280px] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
