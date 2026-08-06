import { images } from '../data/images.js'

// Trust section: answers the "what actually happens when they show up" question that
// stops people from booking. Each point names the fear and closes it concretely.
const points = [
  {
    title: 'מגיעים בשעה שסיכמנו',
    body: 'לא "בין 8 ל-12". שעה מדויקת, והודעה בדרך. אם משהו משתנה — אתם יודעים לפני, לא אחרי.',
  },
  {
    title: 'הבית נשאר בית, גם באמצע העבודה',
    body: 'מכסים רהיטים ורצפות, מפרידים את אזור העבודה, ובסוף כל יום אוספים ומטאטאים. אפשר לישון בבית.',
  },
  {
    title: 'מחיר סגור מראש, בכתב',
    body: 'ההצעה מפרטת חדר-חדר ומה כלול. אין "גילינו שצריך עוד שכבה" באמצע — אלא אם ביקשתם שינוי.',
  },
  {
    title: 'רישיון, ביטוח, וצוות קבוע',
    body: 'אותם אנשים לאורך כל הפרויקט, עם ביטוח צד ג׳ מלא. אתם יודעים מי נכנס לכם הביתה.',
  },
  {
    title: 'לא הולכים עד שאתם מרוצים',
    body: 'סיור סיום משותף. כל תיקון שתסמנו — מטופל לפני שאנחנו אורזים, בלי ויכוח ובלי תוספת.',
  },
]

export default function ExperienceSection() {
  return (
    <section className="bg-ink-2 py-24 sm:py-32">
      <div className="mx-auto grid max-w-content items-center gap-14 px-6 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <div className="flex flex-col items-start gap-8">
          <div className="flex flex-col gap-4">
            <h2 className="font-display text-3xl font-extrabold leading-[1.15] tracking-tight text-paper text-balance sm:text-4xl">
              למה לצפות מהעבודה עם גוון
            </h2>
            <p className="max-w-md font-body text-lg leading-relaxed text-muted-ondark">
              רוב האנשים לא דוחים צביעה בגלל המחיר. הם דוחים אותה כי הם לא יודעים מה הולך
              לקרות לבית שלהם בשבוע הקרוב. אז הנה בדיוק מה שקורה.
            </p>
          </div>

          <ul className="flex flex-col gap-6">
            {points.map((point) => (
              <li key={point.title} className="flex gap-4">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ember">
                  <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="text-ink">
                    <path d="M4 10.5L8 14.5L16 6" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <div className="flex flex-col gap-1">
                  <span className="font-display text-lg font-bold text-paper">{point.title}</span>
                  <span className="font-body text-[15px] leading-relaxed text-muted-ondark">{point.body}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* rollerWall is a real painter on scaffolding over sheeted floors — it matches
            what the list above promises. teamPro (the previous image) showed a carpenter
            with a saw, which read as the wrong trade entirely. */}
        <div className="paint-reveal aspect-[4/5] overflow-hidden rounded-card shadow-card sm:aspect-[4/3] lg:aspect-[4/5]">
          <img
            src={images.rollerWall}
            alt="צבע מהצוות שלנו צובע קיר מפיגום, כשהרצפה מכוסה ביריעות מגן"
            loading="lazy"
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  )
}
