import { Link } from 'react-router-dom'
import { Container, Button } from '../components/ui.jsx'
import GalleryGrid from '../components/GalleryGrid.jsx'
import Seo from '../components/Seo.jsx'

export default function GalleryPage() {
  return (
    <>
      <Seo
        title="גלריית עבודות"
        description="לפני ואחרי — פרויקטי צביעה לבתים, דירות ועסקים. רואים את איכות הגימור לפני שמחליטים."
      />
      {/* Lime hero */}
      <section className="relative overflow-hidden bg-ember pt-36 sm:pt-44">
        <Container className="flex flex-col items-center gap-6 pb-24 text-center sm:pb-32">
          <span className="rounded-pill bg-ink px-4 py-2 font-body text-sm font-bold text-paper">גלריית עבודות</span>
          <h1 className="max-w-3xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-ink text-balance sm:text-6xl">
            רואים איך אנחנו מחזירים חללים לחיים, עם צבע ואומנות
          </h1>
          <p className="max-w-2xl font-body text-lg leading-relaxed text-ink/75">
            מההכנה ועד השכבה האחרונה, גוון מחויבת לגימור מושלם שמדגיש את היופי והערך של כל חלל שאנחנו
            נוגעים בו. כל תמונה כאן היא פרויקט שהסתיים ונמסר ללקוח.
          </p>
          <div className="flex flex-col gap-4 pt-2 sm:flex-row">
            <Button as={Link} to="/contact" variant="onEmber">
              קבלו הצעת מחיר חינם
            </Button>
            <Button as={Link} to="/services" variant="onEmberGhost">
              לשירותים שלנו
            </Button>
          </div>
        </Container>

        {/* wave transition into the dark gallery */}
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="block h-14 w-full sm:h-24" aria-hidden="true">
          <path d="M0,54 C240,120 480,16 720,48 C960,80 1200,8 1440,58 L1440,120 L0,120 Z" fill="#0F0F10" />
        </svg>
      </section>

      {/* Dark gallery body */}
      <section className="bg-ink pb-24 pt-4 sm:pb-28">
        <Container>
          <GalleryGrid />
        </Container>
      </section>
    </>
  )
}
