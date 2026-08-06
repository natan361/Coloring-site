import { galleryItems } from '../data/galleryItems.js'
import { images } from '../data/images.js'
import BeforeAfterSlider from './BeforeAfterSlider.jsx'

// Each pair is one room, not two unrelated textures — the point of the wipe is that a
// visitor recognises the same space and sees what changed.
const comparisons = [
  {
    before: images.roomBefore1,
    after: images.roomAfter1,
    label: 'סלון — הסרת צבע מתקלף וצביעה מחדש',
  },
  {
    before: images.roomBefore2,
    after: images.roomAfter2,
    label: 'חדר שינה — תיקון טיח, שפכטל וצביעה',
  },
]

export default function GalleryGrid() {
  return (
    <div className="flex flex-col gap-16">
      <div className="flex flex-col gap-6">
        <h3 className="text-center font-display text-2xl font-bold text-paper">גררו את הקו וראו את ההבדל</h3>
        <div className="grid gap-6 sm:grid-cols-2">
          {comparisons.map((pair, i) => (
            <figure key={i} className="m-0 flex flex-col gap-3">
              <BeforeAfterSlider before={pair.before} after={pair.after} />
              <figcaption className="text-center font-body text-sm text-muted-ondark">
                {pair.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div className="grid auto-rows-[180px] grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5">
        {galleryItems.map((item, i) => (
          <div key={i} className={`reveal paint-reveal rounded-card ${item.span}`}>
            <img src={item.src} alt={item.alt} loading="lazy" className="h-full w-full rounded-card object-cover" />
          </div>
        ))}
      </div>
    </div>
  )
}
