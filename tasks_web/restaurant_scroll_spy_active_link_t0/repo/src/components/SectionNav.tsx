import { useEffect, useState } from 'react'

export type NavSection = { id: string; label: string }

/** The anchored destinations, in the order they appear down the page. */
export const NAV_SECTIONS: NavSection[] = [
  { id: 'menu', label: 'Menu' },
  { id: 'hearth', label: 'The Hearth' },
  { id: 'room', label: 'The Room' },
  { id: 'evening', label: 'The Evening' },
  { id: 'cellar', label: 'Cellar' },
  { id: 'visit', label: 'Visit' },
]

// Only the middle band of the viewport counts as "being read", so a very tall
// section can't hold the highlight while the guest is already into the next one.
const SPY_BAND = '-45% 0px -45% 0px'

export function SectionNav() {
  const [activeId, setActiveId] = useState(NAV_SECTIONS[0].id)

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        }
      },
      { rootMargin: SPY_BAND, threshold: 0 },
    )

    const firstSection = document.getElementById(NAV_SECTIONS[0].id)
    if (firstSection) observer.observe(firstSection)

    return () => observer.disconnect()
  }, [])

  return (
    <nav
      aria-label="Sections of this page"
      data-testid="section-nav"
      className="hidden lg:block"
    >
      <ul className="flex items-center gap-1">
        {NAV_SECTIONS.map((section) => {
          const lit = activeId === section.id
          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                data-testid="nav-link"
                data-nav-for={section.id}
                aria-current={lit ? 'true' : undefined}
                className={[
                  'block rounded-full px-3 py-2 text-sm tracking-wide transition-colors duration-150',
                  lit
                    ? 'is-active bg-[#2A211B] font-semibold text-[#FBF6EC]'
                    : 'font-medium text-[#2A211B]/65 hover:bg-[#F0E4D2] hover:text-[#2A211B]',
                ].join(' ')}
              >
                {section.label}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
