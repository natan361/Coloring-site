const steps = [
  {
    n: '1',
    title: 'קובעים פגישת ייעוץ',
    text: 'בקשו הצעת מחיר חינם וספרו לנו על הפרויקט שלכם.',
  },
  {
    n: '2',
    title: 'בוחרים את השירותים',
    text: 'בוחרים את הגוונים ואת השירותים שמתאימים בדיוק לצרכים שלכם.',
  },
  {
    n: '3',
    title: 'נהנים מהחלל המחודש',
    text: 'נרגעים בזמן שאנחנו עושים את העבודה — ומקבלים נכס שתאהבו.',
  },
]

export default function Process() {
  return (
    <section id="process" className="bg-paper py-24 sm:py-28">
      <div className="mx-auto max-w-content px-6 sm:px-8">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <span className="font-body text-xs font-bold uppercase tracking-[0.2em] text-rust">התהליך שלנו</span>
          <h2 className="font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-ink text-balance sm:text-5xl">
            אנחנו מלווים אתכם בכל שלב בפרויקט
          </h2>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {steps.map((step) => (
            <div key={step.n} className="reveal flex flex-col gap-4 rounded-[1.75rem] bg-ink p-8">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-ember font-display text-2xl font-extrabold text-ink">
                {step.n}
              </span>
              <h3 className="font-display text-xl font-bold text-paper">{step.title}</h3>
              <p className="font-body text-[15px] leading-relaxed text-muted-ondark">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
