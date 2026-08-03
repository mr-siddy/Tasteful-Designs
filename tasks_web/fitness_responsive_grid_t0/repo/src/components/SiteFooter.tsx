const COLUMNS = [
  {
    heading: 'Train with us',
    links: [
      { label: 'Foundations', href: '#programs' },
      { label: 'Small-Group Strength', href: '#programs' },
      { label: 'Saturday Barbell Club', href: '#timetable' },
      { label: 'Return to Lifting', href: '#programs' },
      { label: 'One-to-one coaching', href: '#programs' },
    ],
  },
  {
    heading: 'The studio',
    links: [
      { label: 'Our method', href: '#method' },
      { label: 'Meet the coaches', href: '#coaches' },
      { label: 'Member stories', href: '#stories' },
      { label: 'Timetable', href: '#timetable' },
      { label: 'Common questions', href: '#faq' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-stone-950 text-stone-300">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <svg viewBox="0 0 40 40" width="34" height="34" aria-hidden="true">
                <rect x="1" y="1" width="38" height="38" rx="11" fill="#0c0a09" stroke="#fbbf24" />
                <path d="M9 20h4v-6h3v12h-3v-4H9z" fill="#fbbf24" />
                <path d="M31 20h-4v-6h-3v12h3v-4h4z" fill="#fbbf24" />
                <rect x="17" y="18.5" width="6" height="3" rx="1.5" fill="#f5f5f4" />
              </svg>
              <span className="text-sm font-black uppercase tracking-[0.2em] text-stone-100">
                Northline Strength Co.
              </span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-stone-400">
              Small-group barbell coaching in Brunswick East since 2019. Nine lifters a class,
              three coaches, twelve weeks written in advance.
            </p>
          </div>

          {COLUMNS.map((column) => (
            <nav key={column.heading} aria-label={column.heading}>
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.28em] text-stone-500">
                {column.heading}
              </h3>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      data-testid="footer-link"
                      className="text-sm text-stone-300 hover:text-amber-400"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.28em] text-stone-500">
              Find us
            </h3>
            <address className="mt-5 space-y-3 text-sm not-italic leading-relaxed text-stone-400">
              <p>
                42 Cavendish Lane
                <br />
                Brunswick East VIC 3057
              </p>
              <p>
                <a href="tel:+61390428817" className="hover:text-amber-400">
                  (03) 9042 8817
                </a>
              </p>
              <p>
                <a href="mailto:coach@northlinestrength.com.au" className="hover:text-amber-400">
                  coach@northlinestrength.com.au
                </a>
              </p>
            </address>

            <h3 className="mt-8 text-[11px] font-semibold uppercase tracking-[0.28em] text-stone-500">
              Staffed hours
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-stone-400">
              <li>Monday to Friday · 5:45am – 7:30pm</li>
              <li>Saturday · 7:30am – 12:00pm</li>
              <li>Sunday · 8:30am – 11:00am</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-stone-800 pt-8 text-xs text-stone-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Northline Strength Co. ABN 41 728 116 903. Built on Wurundjeri land.</p>
          <ul className="flex flex-wrap gap-6">
            <li>
              <a href="#faq" className="hover:text-amber-400">
                Terms of membership
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-amber-400">
                Privacy
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-amber-400">
                Accessibility
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
