import GreenPageHero from './GreenPageHero.jsx'
import business from '../data/business.js'

// Shared shell for the legal pages (accessibility statement, privacy policy, terms).
// Deliberately plainer than the marketing pages — these are read, not sold.

export function LegalSection({ title, children }) {
  return (
    <section className="flex flex-col gap-3 border-t border-line pt-8 first:border-none first:pt-0">
      <h2 className="font-display text-2xl font-extrabold tracking-tight text-ink">{title}</h2>
      <div className="flex flex-col gap-3 font-body text-[15px] leading-relaxed text-muted-onlight">
        {children}
      </div>
    </section>
  )
}

export function LegalList({ items }) {
  return (
    <ul className="flex list-none flex-col gap-2 ps-0">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rust" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function LegalLayout({ eyebrow, title, description, children }) {
  return (
    <GreenPageHero eyebrow={eyebrow} title={title} description={description}>
      <div className="mx-auto flex max-w-3xl flex-col gap-8">
        {children}
        <p className="border-t border-line pt-6 font-body text-sm text-muted-onlight">
          עודכן לאחרונה: {business.legalUpdated}
        </p>
      </div>
    </GreenPageHero>
  )
}
