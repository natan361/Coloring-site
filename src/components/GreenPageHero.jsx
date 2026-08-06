import { Link } from 'react-router-dom'
import { Container, Button } from './ui.jsx'

export default function GreenPageHero({
  eyebrow,
  title,
  description,
  primaryLabel,
  primaryTo,
  secondaryLabel,
  secondaryTo,
  children,
}) {
  return (
    <section className="grain relative bg-ember pb-20 pt-36 sm:pb-28 sm:pt-44">
      <Container className="flex flex-col items-center gap-6 text-center">
        {eyebrow && (
          <span className="rounded-pill bg-ink px-4 py-2 font-body text-sm font-bold text-paper">{eyebrow}</span>
        )}
        <h1 className="max-w-3xl font-display text-4xl leading-[1.15] tracking-tight text-ink text-balance sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="max-w-2xl font-body text-lg leading-relaxed text-ink/75">{description}</p>
        )}
        {(primaryLabel || secondaryLabel) && (
          <div className="flex flex-col gap-4 pt-2 sm:flex-row">
            {primaryLabel && (
              <Button as={Link} to={primaryTo} variant="onEmber">
                {primaryLabel}
              </Button>
            )}
            {secondaryLabel && (
              <Button as={Link} to={secondaryTo} variant="onEmberGhost">
                {secondaryLabel}
              </Button>
            )}
          </div>
        )}
      </Container>

      {children && (
        <Container className="relative mt-16">
          <div className="rounded-[2.5rem] bg-paper-panel p-6 shadow-card sm:p-10 lg:p-14">{children}</div>
        </Container>
      )}
    </section>
  )
}
