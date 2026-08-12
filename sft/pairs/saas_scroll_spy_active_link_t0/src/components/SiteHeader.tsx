import { useEffect, useState } from 'react'

export type NavSection = { id: string; label: string }

/** The anchored destinations the sticky nav walks the reader through. */
export const NAV_SECTIONS: NavSection[] = [
  { id: 'platform', label: 'Platform' },
  { id: 'workflow', label: 'Workflow' },
  { id: 'integrations', label: 'Integrations' },
  { id: 'controls', label: 'Controls' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'customers', label: 'Customers' },
  { id: 'faq', label: 'FAQ' },
]

const LINK_BASE =
  'inline-flex items-center whitespace-nowrap border-b-2 px-1 pb-1 text-sm font-medium transition-colors duration-150'

export default function SiteHeader() {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    // jsdom and server renders have no observer; the nav is still usable as links.
    if (typeof IntersectionObserver === 'undefined') return

    const targets = NAV_SECTIONS.map((section) => document.getElementById(section.id)).filter(
      (element): element is HTMLElement => element !== null,
    )
    if (targets.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        // The reader is "in" whichever observed section the viewport band covers
        // highest on screen, so weigh the whole batch, not one arbitrary entry.
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible.length === 0) return
        setActiveSection(visible[0].target.id)
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 },
    )

    targets.forEach((target) => observer.observe(target))
    return () => observer.disconnect()
  }, [])

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center gap-6 px-6 py-4">
        <a href="#overview" className="flex shrink-0 items-center gap-2.5" data-testid="brand-mark">
          <svg
            viewBox="0 0 32 32"
            className="h-8 w-8"
            role="img"
            aria-label="Ledgerloom woven-thread monogram"
          >
            <rect x="1" y="1" width="30" height="30" rx="9" fill="#4338ca" />
            <path
              d="M8 11h16M8 16h16M8 21h16"
              stroke="#c7d2fe"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path d="M12 7v18M20 7v18" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span className="text-lg font-semibold tracking-tight text-slate-900">Ledgerloom</span>
        </a>

        <nav
          aria-label="Page sections"
          data-testid="section-nav"
          className="hidden flex-1 lg:block"
        >
          <ul className="flex items-center justify-center gap-7">
            {NAV_SECTIONS.map((section) => {
              const isCurrent = section.id === activeSection
              return (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    data-testid={`nav-link-${section.id}`}
                    aria-current={isCurrent ? 'true' : undefined}
                    className={`${LINK_BASE} ${
                      isCurrent
                        ? 'nav-link-active border-amber-400 text-indigo-700'
                        : 'border-transparent text-slate-600 hover:border-slate-300 hover:text-slate-900'
                    }`}
                  >
                    {section.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-3 lg:ml-0">
          <a
            href="#pricing"
            className="hidden text-sm font-medium text-slate-600 hover:text-slate-900 sm:inline"
          >
            Sign in
          </a>
          <a
            href="#demo"
            className="rounded-xl bg-indigo-700 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-800"
          >
            Book a demo
          </a>
        </div>
      </div>
    </header>
  )
}
