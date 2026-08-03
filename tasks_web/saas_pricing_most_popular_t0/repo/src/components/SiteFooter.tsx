const COLUMNS = [
  {
    heading: 'Product',
    links: ['Dispatch board', 'Technician app', 'Van stock', 'Quoting', 'Invoicing and payments', 'Maintenance agreements'],
  },
  {
    heading: 'Trades',
    links: ['HVAC', 'Plumbing', 'Electrical', 'Refrigeration', 'Mixed shops'],
  },
  {
    heading: 'Company',
    links: ['About Copperline', 'Careers', 'Customer stories', 'Onboarding team', 'Status'],
  },
]

export default function SiteFooter() {
  return (
    <footer className="bg-[#0D1B22] text-[#A9C0C4]">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_repeat(3,minmax(0,1fr))]">
          <div>
            <div className="flex items-center gap-3">
              <svg viewBox="0 0 40 40" className="h-9 w-9" aria-hidden="true" focusable="false">
                <rect width="40" height="40" rx="11" fill="#C25A2B" />
                <path d="M11 27c0-6 4-11 9-11s9 3 9 7" stroke="#12242C" strokeWidth="3.2" fill="none" strokeLinecap="round" />
                <circle cx="29" cy="23" r="3.4" fill="#12242C" />
              </svg>
              <span className="text-lg font-bold tracking-tight text-white">Copperline</span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed">
              Dispatch, van stock and invoicing for the shops that keep the heat on and the water running.
            </p>
            <address className="mt-6 not-italic text-sm leading-relaxed">
              Copperline Software, Inc.
              <br />
              240 Ionia Avenue SW
              <br />
              Grand Rapids, Michigan 49503
            </address>
            <p className="mt-4 text-sm">
              <a href="tel:+16165550142" className="font-semibold text-white hover:text-[#E8813F]">
                (616) 555 0142
              </a>
              <span className="block text-xs">Support 6am–9pm Eastern, seven days a week</span>
            </p>
          </div>

          {COLUMNS.map((column) => (
            <nav key={column.heading} aria-label={column.heading}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">{column.heading}</h3>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#hero" data-testid="footer-link" className="text-sm hover:text-white">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Copperline Software, Inc. Built in Grand Rapids.</p>
          <ul className="flex flex-wrap gap-6">
            <li>
              <a href="#hero" className="hover:text-white">
                Privacy
              </a>
            </li>
            <li>
              <a href="#hero" className="hover:text-white">
                Terms
              </a>
            </li>
            <li>
              <a href="#hero" className="hover:text-white">
                Security
              </a>
            </li>
            <li>
              <a href="#hero" className="hover:text-white">
                Accessibility
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
