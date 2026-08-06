import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, Button, Blob } from './ui.jsx'

// `as` lets the contact page promote the heading to the page's single <h1> while the
// same component still renders as a section (<h2>) inside the home page.
export default function FinalCTA({ as: Heading = 'h2' }) {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    // TODO: wire to a real lead destination (email/CRM) once the client provides contact details.
    setSubmitted(true)
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-ink py-24 sm:py-32">
      <Blob className="-left-24 -bottom-24 h-[460px] w-[460px]" opacity={0.3} />

      <Container className="relative grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div className="flex flex-col items-start gap-6">
          <Heading className="font-display text-4xl leading-[1.15] tracking-tight text-paper text-balance sm:text-5xl">
            מוכנים לראות את הבית שלכם מתחדש?
          </Heading>
          <p className="max-w-md font-body text-lg leading-relaxed text-muted-ondark">
            תארו לעצמכם נכנסים הביתה, והיא סוף סוף נראית בדיוק כמו שהרגשתם שהיא צריכה להיראות — נקייה, רעננה,
            ומשהו שאתם גאים להראות לאורחים. השאירו פרטים ונחזור אליכם לתיאום ביקור והערכה בחינם, בלי התחייבות.
          </p>
        </div>

        <div className="rounded-card border border-line-dark bg-ink-2 p-8 shadow-card">
          {submitted ? (
            <div role="status" aria-live="polite" className="flex flex-col items-center gap-3 py-8 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-ember text-ink">
                <svg width="24" height="24" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M4 10.5L8 14.5L16 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <p className="font-display text-xl text-paper">קיבלנו את הפרטים!</p>
              <p className="font-body text-[15px] text-muted-ondark">ניצור איתכם קשר בהקדם לתיאום הביקור.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-body text-sm font-bold text-paper/85">
                  שם מלא
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="rounded-xl border border-line-dark bg-ink px-4 py-3 font-body text-paper placeholder:text-paper/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ember"
                  placeholder="איך קוראים לכם?"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="font-body text-sm font-bold text-paper/85">
                  טלפון
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  className="rounded-xl border border-line-dark bg-ink px-4 py-3 font-body text-paper placeholder:text-paper/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ember"
                  placeholder="050-0000000"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-body text-sm font-bold text-paper/85">
                  כמה מילים על הפרויקט (לא חובה)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  className="resize-none rounded-xl border border-line-dark bg-ink px-4 py-3 font-body text-paper placeholder:text-paper/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ember"
                  placeholder="לדוגמה: סלון וחדר שינה, כ-40 מ״ר"
                />
              </div>

              {/* Amendment 13 requires transparency at the point of collection, and a
                  separate, un-pre-checked opt-in for anything marketing-related. */}
              <div className="flex flex-col gap-3 border-t border-line-dark pt-4">
                <label htmlFor="consent" className="flex cursor-pointer items-start gap-3">
                  <input
                    id="consent"
                    name="consent"
                    type="checkbox"
                    required
                    className="mt-0.5 h-5 w-5 shrink-0 cursor-pointer accent-ember focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
                  />
                  <span className="font-body text-[13px] leading-relaxed text-muted-ondark">
                    קראתי ואני מסכים/ה ל
                    <Link
                      to="/privacy"
                      className="font-bold text-ember underline decoration-ember/40 underline-offset-4 transition-colors hover:decoration-ember"
                    >
                      מדיניות הפרטיות
                    </Link>
                    , ומאשר/ת שתחזרו אליי בטלפון לגבי הפנייה. <span aria-hidden="true">*</span>
                  </span>
                </label>

                <label htmlFor="marketing" className="flex cursor-pointer items-start gap-3">
                  <input
                    id="marketing"
                    name="marketing"
                    type="checkbox"
                    className="mt-0.5 h-5 w-5 shrink-0 cursor-pointer accent-ember focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
                  />
                  <span className="font-body text-[13px] leading-relaxed text-muted-ondark">
                    מעוניין/ת לקבל טיפים ומבצעים מדי פעם. אפשר להסיר את ההרשמה בכל רגע.
                  </span>
                </label>
              </div>

              <Button as="button" type="submit" variant="primary" className="mt-2 w-full">
                שליחה לתיאום ביקור
              </Button>

              <p className="text-center font-body text-xs text-muted-ondark">
                מסירת הפרטים היא מרצון ואינה חובה על פי דין. לא נעביר אותם לצד שלישי.
              </p>
            </form>
          )}
        </div>
      </Container>
    </section>
  )
}
