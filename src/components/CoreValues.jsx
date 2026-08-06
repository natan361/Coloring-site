const values = [
  {
    title: 'אמינות ושקיפות',
    text: 'אנחנו נותנים הצעות מחיר שקופות ומפורטות, בלי עלויות נסתרות. המילה שלנו היא התחייבות, ואנחנו מתייחסים לנכס שלכם בכבוד שהוא ראוי לו.',
    span: 'sm:col-span-2',
  },
  {
    title: 'חומרים איכותיים',
    text: 'אנחנו עובדים עם המובילים בתחום ומשתמשים בצבעים ובציפויים עמידים ואיכותיים, שמתאימים במיוחד לתנאי מזג האוויר המשתנים באזור.',
    span: '',
  },
  {
    title: 'מקצועיות מוכחת',
    text: 'עם שנים רבות של ניסיון באזור, צוות הצבעים המקצועי שלנו מיומן בשיטות העבודה המתקדמות ביותר ומבטיח גימור מושלם בכל פעם.',
    span: '',
  },
  {
    title: 'מיקוד מקומי',
    text: 'אנחנו חיים ועובדים כאן. אנחנו מחוברים לקהילה ומחויבים לתת שירות לשכנים שלנו בכל האזור והסביבה.',
    span: 'sm:col-span-2',
  },
]

export default function CoreValues() {
  return (
    <section className="bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-content px-6 sm:px-8">
        <h2 className="max-w-3xl font-display text-3xl font-extrabold leading-[1.15] tracking-tight text-paper text-balance sm:text-4xl">
          הערכים שלנו: שירות ברמה גבוהה, מבוסס על יושרה
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {values.map((value) => (
            <div
              key={value.title}
              className={`reveal flex flex-col gap-3 rounded-card border border-line-dark bg-ink-2 p-8 ${value.span}`}
            >
              <h3 className="font-display text-xl text-paper">{value.title}</h3>
              <p className="font-body text-[15px] leading-relaxed text-muted-ondark">{value.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
