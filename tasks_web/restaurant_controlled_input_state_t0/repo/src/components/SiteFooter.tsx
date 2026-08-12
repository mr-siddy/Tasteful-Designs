const COLUMNS = [
  {
    heading: 'The restaurant',
    links: [
      { label: 'The table, course by course', href: '#table' },
      { label: 'How a supra works', href: '#supra' },
      { label: 'The qvevri cellar', href: '#cellar' },
      { label: 'Inside the bakehouse', href: '#bakehouse' },
    ],
  },
  {
    heading: 'Sit with us',
    links: [
      { label: 'Request a table', href: '#reserve' },
      { label: 'Private supras', href: '#private' },
      { label: 'Hours and directions', href: '#visit' },
      { label: 'Questions we get weekly', href: '#faq' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer data-testid="site-footer" className="bg-stone-950 py-16 text-stone-300">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <svg
                viewBox="0 0 40 40"
                role="img"
                aria-label="Tamada mark"
                className="h-10 w-10"
              >
                <circle cx="20" cy="20" r="19" fill="#9f1239" />
                <path
                  d="M11 13c6 1 11 3 15 7 2.5 2.5 3.4 5 2.5 6.7-1 1.7-3.4 1.7-6 0-4-2.5-8.4-7.4-11.5-13.7z"
                  fill="#fbbf24"
                />
                <circle cx="27" cy="33" r="2" fill="#fde68a" />
              </svg>
              <span className="font-serif text-2xl font-semibold text-amber-50">Tamada</span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-stone-400">
              A Georgian supper house on Alberta Street since 2018. Bread against clay, wine out of
              the ground, and a toast to the people who are not at the table.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="#visit"
                aria-label="Tamada on Instagram"
                className="rounded-full border border-stone-700 p-2.5 transition hover:border-amber-400"
              >
                <svg viewBox="0 0 20 20" aria-hidden="true" className="h-4 w-4">
                  <rect x="2" y="2" width="16" height="16" rx="5" fill="none" stroke="#fbbf24" strokeWidth="1.6" />
                  <circle cx="10" cy="10" r="4" fill="none" stroke="#fbbf24" strokeWidth="1.6" />
                  <circle cx="14.6" cy="5.4" r="1.1" fill="#fbbf24" />
                </svg>
              </a>
              <a
                href="#visit"
                aria-label="Tamada newsletter"
                className="rounded-full border border-stone-700 p-2.5 transition hover:border-amber-400"
              >
                <svg viewBox="0 0 20 20" aria-hidden="true" className="h-4 w-4">
                  <rect x="2" y="4" width="16" height="12" rx="2.5" fill="none" stroke="#fbbf24" strokeWidth="1.6" />
                  <path d="M3 6l7 5 7-5" fill="none" stroke="#fbbf24" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </a>
            </div>
          </div>

          {COLUMNS.map((column) => (
            <nav key={column.heading} aria-label={column.heading}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-400">
                {column.heading}
              </h3>
              <ul className="mt-5 space-y-3 text-sm">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      data-testid="footer-link"
                      className="text-stone-400 transition hover:text-amber-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-400">
              Find us
            </h3>
            <address className="mt-5 space-y-2 text-sm not-italic leading-relaxed text-stone-400">
              <p>1830 NE Alberta Street</p>
              <p>Portland, Oregon 97211</p>
              <p>
                <a href="tel:5035550164" className="transition hover:text-amber-200">
                  (503) 555-0164
                </a>
              </p>
              <p>hello@tamadapdx.test</p>
            </address>
            <p className="mt-5 text-sm leading-relaxed text-stone-400">
              Tuesday to Sunday from 5:30pm, Sunday supra from 2:00pm, closed Mondays.
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-stone-800 pt-8 text-xs text-stone-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Tamada Supper House LLC. Cooked on Chinook and Multnomah land.</p>
          <ul className="flex flex-wrap gap-6">
            <li>
              <a href="#faq" className="transition hover:text-amber-200">
                Allergen statement
              </a>
            </li>
            <li>
              <a href="#faq" className="transition hover:text-amber-200">
                Gift certificates
              </a>
            </li>
            <li>
              <a href="#visit" className="transition hover:text-amber-200">
                Work with us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
