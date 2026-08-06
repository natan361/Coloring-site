export function Container({ className = '', children }) {
  return <div className={`mx-auto max-w-content px-6 sm:px-8 ${className}`}>{children}</div>
}

export function Eyebrow({ children, tone = 'dark' }) {
  // Ember on the light "paper" background falls to a 2.75:1 contrast ratio (fails WCAG
  // AA's 4.5:1 for normal text). Rust is the closest on-brand color that still passes.
  const color = tone === 'dark' ? 'text-ember' : 'text-rust'
  const dot = tone === 'dark' ? 'bg-ember' : 'bg-rust'
  return (
    <span className={`inline-flex items-center gap-2 font-body text-sm font-bold tracking-wide ${color}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${dot}`} aria-hidden="true" />
      {children}
    </span>
  )
}

export function Button({ as: Tag = 'a', variant = 'primary', className = '', children, ...props }) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-pill px-8 py-4 font-body font-bold text-[15px] transition-transform duration-200 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember active:scale-[0.97] cursor-pointer'
  const variants = {
    primary:
      'bg-ember text-ink shadow-ember hover:bg-ember-deep hover:-translate-y-0.5',
    ghost:
      'border-2 border-paper/25 text-paper hover:border-ember hover:text-ember hover:-translate-y-0.5',
    ghostDark:
      'border-2 border-ink/15 text-ink hover:border-ember hover:text-ember hover:-translate-y-0.5',
    onEmber: 'bg-ink text-paper hover:bg-ink/85 hover:-translate-y-0.5',
    onEmberGhost: 'border-2 border-ink/35 text-ink hover:bg-ink/10 hover:-translate-y-0.5',
  }
  return (
    <Tag className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Tag>
  )
}

export function SectionHeading({ eyebrow, title, description, tone = 'light', align = 'start' }) {
  const titleColor = tone === 'dark' ? 'text-paper' : 'text-ink'
  const descColor = tone === 'dark' ? 'text-muted-ondark' : 'text-muted-onlight'
  const alignClass = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-start'
  return (
    <div className={`reveal flex max-w-2xl flex-col gap-4 ${alignClass}`}>
      {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
      <h2 className={`font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-balance sm:text-5xl ${titleColor}`}>
        {title}
      </h2>
      {description && <p className={`font-body text-lg leading-relaxed ${descColor}`}>{description}</p>}
    </div>
  )
}

export function Blob({ className = '', color = '#C6F53D', opacity = 0.35 }) {
  return (
    <svg
      className={`blob pointer-events-none absolute ${className}`}
      viewBox="0 0 600 600"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill={color}
        opacity={opacity}
        d="M451.5,320.5Q437,441,320.5,470Q204,499,138,404.5Q72,310,111,209Q150,108,262,88Q374,68,436,158Q498,248,451.5,320.5Z"
      />
    </svg>
  )
}
