const COLUMNS = [
  {
    heading: 'Treatments',
    links: [
      'New patient exams',
      'Emergency care',
      'Clear aligners',
      'Ceramic crowns',
      'Implants & bridges',
    ],
  },
  {
    heading: 'The practice',
    links: ['Our team', 'Your first visit', 'Fees & membership', 'Inside the practice', 'Reviews'],
  },
  {
    heading: 'Patients',
    links: ['Request an appointment', 'Health funds we bill', 'Payment plans', 'Common questions'],
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-teal-950 text-teal-50/80">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_repeat(3,0.9fr)]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-teal-800">
                <svg
                  viewBox="0 0 32 32"
                  className="h-5 w-5 text-amber-300"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M11 5c-3.3 0-5 2.5-5 6 0 4.3 1.6 6.4 2.4 10.3.7 3 .8 5.7 2.6 5.7 1.7 0 1.8-4.2 2.7-6.9.4-1.3 1-2 1.8-2s1.4.7 1.8 2c.9 2.7 1 6.9 2.7 6.9 1.8 0 1.9-2.7 2.6-5.7C23.4 17.4 25 15.3 25 11c0-3.5-1.7-6-5-6-1.6 0-2.3.8-2.9 1-.6.3-1.3.3-1.9 0-.6-.2-1.3-1-2.9-1" />
                </svg>
              </span>
              <span className="text-lg font-semibold text-stone-50">Alder Court Dental</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              A small family and restorative practice on Alder Court, looking after Kestrel Park,
              Ferndale and Bellview since 2014.
            </p>
            <address className="mt-5 space-y-1 text-sm not-italic">
              <p>22 Alder Court, Kestrel Park</p>
              <p>
                <a href="tel:+12065550142" className="font-semibold text-stone-50 hover:text-amber-200">
                  (206) 555-0142
                </a>
              </p>
              <p>
                <a
                  href="mailto:hello@aldercourtdental.com"
                  className="hover:text-amber-200"
                >
                  hello@aldercourtdental.com
                </a>
              </p>
            </address>
          </div>

          {COLUMNS.map((column) => (
            <nav key={column.heading} aria-label={column.heading} data-testid="footer-column">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-stone-50">
                {column.heading}
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#book" className="transition hover:text-amber-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-stone-50/10 pt-8 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Alder Court Dental. Registered dental practice AC-40219.</p>
          <ul className="flex flex-wrap gap-6">
            <li>
              <a href="#faq" className="hover:text-amber-200">
                Privacy
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-amber-200">
                Patient rights
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-amber-200">
                Accessibility
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
