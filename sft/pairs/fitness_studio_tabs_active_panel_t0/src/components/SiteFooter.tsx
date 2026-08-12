import { KnotMark } from './icons'

const COLUMNS = [
  {
    heading: 'Training',
    links: [
      { href: '#tracks', label: 'The three tracks' },
      { href: '#timetable', label: 'Weekly timetable' },
      { href: '#method', label: 'How blocks work' },
      { href: '#membership', label: 'Membership' },
    ],
  },
  {
    heading: 'The club',
    links: [
      { href: '#boathouse', label: 'The room' },
      { href: '#coaches', label: 'Meet the coaches' },
      { href: '#members', label: 'Member stories' },
      { href: '#faq', label: 'Questions' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-[#062b30] text-[#cfe0e0]">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-3 text-[#faf6ef]">
              <KnotMark className="h-9 w-9 text-[#3d949c]" />
              <span className="text-base font-semibold tracking-tight">Tidemark Row Club</span>
            </div>
            <p className="mt-5 text-sm leading-relaxed">
              Indoor rowing, strength and recovery above the old chandlery. Eighteen ergs, three
              coaches on the floor, and a number that moves every eight weeks.
            </p>
          </div>

          {COLUMNS.map((column) => (
            <nav key={column.heading} aria-label={column.heading}>
              <h3 className="text-xs uppercase tracking-[0.22em] text-[#8fc0c5]">
                {column.heading}
              </h3>
              <ul className="mt-5 space-y-3 text-sm">
                {column.links.map((link) => (
                  <li key={link.href + link.label}>
                    <a href={link.href} className="transition hover:text-[#f3b27a]">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h3 className="text-xs uppercase tracking-[0.22em] text-[#8fc0c5]">Find us</h3>
            <address className="mt-5 space-y-2 text-sm not-italic leading-relaxed">
              <p>47 Cordage Lane</p>
              <p>Bellhaven Locks</p>
              <p>Desk: 01462 550 118</p>
              <p>row@tidemarkrowclub.co.uk</p>
            </address>
            <h3 className="mt-7 text-xs uppercase tracking-[0.22em] text-[#8fc0c5]">Hours</h3>
            <ul className="mt-4 space-y-1.5 text-sm">
              <li>Mon–Fri · 6:00am–9:00pm</li>
              <li>Saturday · 7:00am–2:00pm</li>
              <li>Sunday · 9:00am–1:00pm, open ergs</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-[#8fc0c5]/20 pt-8 text-xs text-[#8fc0c5] md:flex-row md:items-center md:justify-between">
          <p>© 2026 Tidemark Row Club Ltd · Registered in England 11482206</p>
          <ul className="flex flex-wrap gap-6">
            <li>
              <a href="#faq" className="transition hover:text-[#f3b27a]">
                Membership terms
              </a>
            </li>
            <li>
              <a href="#faq" className="transition hover:text-[#f3b27a]">
                Privacy
              </a>
            </li>
            <li>
              <a href="#faq" className="transition hover:text-[#f3b27a]">
                Accessibility
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
