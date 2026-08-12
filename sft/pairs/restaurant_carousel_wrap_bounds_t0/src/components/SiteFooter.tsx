import { FlameMark } from './Icons'

const COLUMNS = [
  {
    heading: 'The restaurant',
    links: [
      { label: 'From the hearth', href: '#menu' },
      { label: 'The fire', href: '#fire' },
      { label: 'Guest stories', href: '#stories' },
      { label: 'Private rooms', href: '#rooms' },
    ],
  },
  {
    heading: 'Visit',
    links: [
      { label: 'Hours and address', href: '#visit' },
      { label: 'Getting here', href: '#visit' },
      { label: 'Access', href: '#visit' },
      { label: 'Questions', href: '#faq' },
    ],
  },
  {
    heading: 'Get in touch',
    links: [
      { label: 'Reservations · 555 0172', href: 'tel:+15550172' },
      { label: 'rooms@emberandoak.kitchen', href: 'mailto:rooms@emberandoak.kitchen' },
      { label: 'Join the waiting list', href: '#reserve' },
      { label: 'Work in the kitchen', href: '#reserve' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3 text-stone-100">
              <FlameMark className="h-9 w-9" />
              <span className="text-lg font-semibold tracking-tight">Ember &amp; Oak</span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-stone-400">
              A thirty-eight seat wood-fire grill in the old Ironside brass foundry. Lit at eleven,
              open at half five, closed on Mondays so the room can breathe.
            </p>
            <p className="mt-5 text-sm text-stone-400">
              41 Foundry Lane
              <br />
              Ironside, Kessel Valley
            </p>
          </div>

          {COLUMNS.map((column) => (
            <nav key={column.heading} aria-label={column.heading}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-stone-100">
                {column.heading}
              </h3>
              <ul className="mt-5 space-y-3 text-sm">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      data-testid="footer-link"
                      className="transition-colors hover:text-amber-400"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-stone-800 pt-8 text-xs text-stone-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Ember &amp; Oak Kitchen Co. Licensed to 11:30pm. Service always included.</p>
          <p>Wood sourced from managed windfall in the Kessel valley · Kitchen powered by fire, not gas</p>
        </div>
      </div>
    </footer>
  )
}
