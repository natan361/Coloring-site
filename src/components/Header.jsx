import { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Button } from './ui.jsx'
import BrandLogo from './Logo.jsx'
import business from '../data/business.js'
import { residentialServices } from '../data/residentialServices.js'
import { commercialServices } from '../data/commercialServices.js'

const menus = [
  { to: '/residential', label: 'מגורים', items: residentialServices },
  { to: '/commercial', label: 'מסחרי', items: commercialServices },
]
const flatLinks = [
  { to: '/gallery', label: 'גלריה' },
  { to: '/faq', label: 'שאלות נפוצות' },
]

function Caret({ className = '' }) {
  return (
    <svg width="12" height="12" viewBox="0 0 20 20" fill="none" aria-hidden="true" className={`mt-0.5 ${className}`}>
      <path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Logo({ onClick }) {
  return (
    <Link
      to="/"
      onClick={onClick}
      aria-label={`${business.name} — לדף הבית`}
      className="rounded-xl transition-transform duration-200 ease-out hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ember"
    >
      <BrandLogo tone="dark" size={34} />
    </Link>
  )
}

const navLinkClass = ({ isActive }) =>
  `flex items-center gap-1 font-body text-[15px] font-semibold transition-colors duration-200 hover:text-ember ${
    isActive ? 'text-ember' : 'text-paper/85'
  }`

export default function Header() {
  const [open, setOpen] = useState(false) // mobile
  const [expanded, setExpanded] = useState(null) // mobile accordion
  const [activeMenu, setActiveMenu] = useState(null) // desktop mega-menu
  const closeTimer = useRef()

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
        setActiveMenu(null)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const openMenu = (to) => {
    clearTimeout(closeTimer.current)
    setActiveMenu(to)
  }
  const scheduleClose = () => {
    clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setActiveMenu(null), 120)
  }

  const closeMobile = () => {
    setOpen(false)
    setExpanded(null)
  }

  const active = menus.find((m) => m.to === activeMenu)

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-5">
      <div className="relative mx-auto max-w-content">
        <div className="flex h-16 items-center justify-between gap-4 rounded-full bg-ink px-5 shadow-[0_14px_34px_-16px_rgba(0,0,0,0.7)] ring-1 ring-white/10 sm:h-[68px] sm:ps-8 sm:pe-3">
          <Logo />

          <nav className="hidden items-center gap-7 lg:flex" aria-label="ניווט ראשי">
            <NavLink to="/about" className={navLinkClass}>
              אודות
            </NavLink>
            {menus.map((menu) => (
              <NavLink
                key={menu.to}
                to={menu.to}
                className={navLinkClass}
                onMouseEnter={() => openMenu(menu.to)}
                onMouseLeave={scheduleClose}
                onFocus={() => openMenu(menu.to)}
                aria-expanded={activeMenu === menu.to}
              >
                {menu.label}
                <Caret className={`transition-transform duration-200 ${activeMenu === menu.to ? 'rotate-180' : ''}`} />
              </NavLink>
            ))}
            {flatLinks.map((link) => (
              <NavLink key={link.to} to={link.to} className={navLinkClass}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button as={Link} to="/contact" variant="primary" className="!px-6 !py-3 text-[14px]">
              קבלו הצעת מחיר
            </Button>
          </div>

          <button
            type="button"
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-paper/20 text-paper transition-colors hover:border-ember hover:text-ember focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember lg:hidden"
            aria-label={open ? 'סגירת תפריט' : 'פתיחת תפריט'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              {open ? (
                <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              ) : (
                <path d="M2 5H18M2 10H18M2 15H18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop full-width mega-menu */}
        {active && (
          <div
            className="absolute inset-x-0 top-full z-40 hidden pt-3 lg:block"
            onMouseEnter={() => openMenu(active.to)}
            onMouseLeave={scheduleClose}
          >
            <div className="rounded-[1.75rem] bg-ink p-5 shadow-card ring-1 ring-white/10">
              <div className="grid grid-cols-4 gap-3">
                {active.items.map((item) => (
                  <Link
                    key={item.slug}
                    to={`${active.to}/${item.slug}`}
                    onClick={() => setActiveMenu(null)}
                    className="group/item flex flex-col items-start gap-3 rounded-2xl p-4 transition-colors hover:bg-white/5 focus-visible:bg-white/5 focus-visible:outline-none"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-ember/12 text-ember transition-colors group-hover/item:bg-ember group-hover/item:text-ink">
                      <svg width="24" height="24" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                        <path d={item.icon} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="font-display text-base font-bold text-paper">{item.title}</span>
                    <span className="inline-flex items-center gap-1.5 font-body text-[13px] font-semibold text-ember">
                      לפרטים נוספים
                      <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="transition-transform duration-200 group-hover/item:-translate-x-0.5">
                        <path d="M12 5l-5 5 5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

        {open && (
          <nav
            className="mt-2 max-h-[75vh] overflow-y-auto rounded-3xl bg-ink p-4 shadow-card ring-1 ring-white/10 lg:hidden"
            aria-label="ניווט נייד"
          >
            <div className="flex flex-col gap-1">
              <Link to="/about" onClick={closeMobile} className="rounded-2xl px-4 py-3 font-body text-base font-semibold text-paper/85 transition-colors hover:bg-white/5 hover:text-ember">
                אודות
              </Link>

              {menus.map((menu) => (
                <div key={menu.to} className="rounded-2xl">
                  <div className="flex items-center">
                    <Link to={menu.to} onClick={closeMobile} className="flex-1 rounded-2xl px-4 py-3 font-body text-base font-semibold text-paper/85 transition-colors hover:bg-white/5 hover:text-ember">
                      {menu.label}
                    </Link>
                    <button
                      type="button"
                      aria-label={`הצגת שירותי ${menu.label}`}
                      aria-expanded={expanded === menu.to}
                      onClick={() => setExpanded((v) => (v === menu.to ? null : menu.to))}
                      className="flex h-11 w-11 items-center justify-center rounded-2xl text-paper/70 transition-colors hover:text-ember"
                    >
                      <span className={`transition-transform duration-200 ${expanded === menu.to ? 'rotate-180' : ''}`}>
                        <Caret />
                      </span>
                    </button>
                  </div>
                  {expanded === menu.to && (
                    <div className="flex flex-col gap-1 pb-2 ps-3">
                      {menu.items.map((item) => (
                        <Link
                          key={item.slug}
                          to={`${menu.to}/${item.slug}`}
                          onClick={closeMobile}
                          className="flex items-center gap-3 rounded-xl px-4 py-2.5 font-body text-[15px] font-medium text-paper/70 transition-colors hover:bg-white/5 hover:text-ember"
                        >
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-ember/12 text-ember">
                            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                              <path d={item.icon} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </span>
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {flatLinks.map((link) => (
                <Link key={link.to} to={link.to} onClick={closeMobile} className="rounded-2xl px-4 py-3 font-body text-base font-semibold text-paper/85 transition-colors hover:bg-white/5 hover:text-ember">
                  {link.label}
                </Link>
              ))}

              <Button as={Link} to="/contact" variant="primary" onClick={closeMobile} className="mt-3 w-full">
                קבלו הצעת מחיר
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
