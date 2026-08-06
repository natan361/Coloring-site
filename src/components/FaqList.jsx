import { Link } from 'react-router-dom'
import { Button } from './ui.jsx'
import { faqs } from '../data/faqs.js'

export default function FaqList() {
  return (
    <div className="flex flex-col gap-10">
      <div className="text-center">
        <h2 className="font-display text-3xl text-ink sm:text-4xl">שאלות נפוצות</h2>
        <p className="mt-2 font-body text-muted-onlight">אנחנו נשאלים על זה הרבה</p>
      </div>

      <div className="mx-auto flex w-full max-w-2xl flex-col gap-4">
        {faqs.map((item) => (
          <details
            key={item.q}
            className="reveal group rounded-pill bg-paper-card px-6 open:rounded-[1.75rem]"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-body text-[17px] font-bold text-ink">
              {item.q}
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ember text-ink transition-transform duration-300 group-open:rotate-45">
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M10 3v14M3 10h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
            </summary>
            <p className="pb-5 font-body text-[15px] leading-relaxed text-muted-onlight">{item.a}</p>
          </details>
        ))}
      </div>

      <div className="reveal mx-auto w-full max-w-2xl rounded-[2rem] bg-ember p-8 text-center sm:p-10">
        <h3 className="font-display text-2xl font-bold text-ink">יש לכם עוד שאלות?</h3>
        <p className="mx-auto mt-2 max-w-md font-body text-ink/75">
          צרו קשר עם אחד המומחים שלנו כדי לגלות איך נוכל לעזור לכם היום.
        </p>
        <Button as={Link} to="/contact" variant="onEmber" className="mt-5">
          צור קשר
        </Button>
      </div>
    </div>
  )
}
