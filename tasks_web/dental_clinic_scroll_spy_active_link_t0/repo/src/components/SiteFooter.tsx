const COLUMNS = [
  {
    title: 'Treatments',
    links: [
      'Checkups & hygiene',
      'White fillings',
      'Birchline clear aligners',
      'Single-tooth implants',
      'Porcelain veneers',
      'Emergency care',
    ],
  },
  {
    title: 'The practice',
    links: ['Our clinicians', 'The Halloway Street building', 'Technology', 'The Birch Plan', 'Careers at Copper Birch'],
  },
  {
    title: 'For patients',
    links: ['New patient guide', 'Nervous patients', 'Fees & payment plans', 'Insurance we bill', 'Aftercare sheets'],
  },
]

function SocialIcon({ label, path }: { label: string; path: string }) {
  return (
    <a
      href="#top"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full bg-stone-800 text-stone-300 transition-colors hover:bg-teal-800 hover:text-white"
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true" fill="none">
        <path d={path} stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  )
}

export function SiteFooter() {
  return (
    <footer className="bg-stone-900 text-stone-400">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_repeat(3,0.8fr)]">
          <div>
            <div className="flex items-center gap-3">
              <svg viewBox="0 0 40 40" className="h-9 w-9" role="img" aria-label="Copper Birch Dental">
                <rect width="40" height="40" rx="13" fill="#0f766e" />
                <path
                  d="M20 8c5.6 2.1 8.4 6.1 8.4 11.9 0 5.3-2.6 9-5 9-1.6 0-2.4-1.4-3.4-1.4s-1.8 1.4-3.4 1.4c-2.4 0-5-3.7-5-9C11.6 14.1 14.4 10.1 20 8Z"
                  fill="#f5f5f4"
                />
                <circle cx="29.5" cy="11.5" r="3.4" fill="#f59e0b" />
              </svg>
              <span className="text-base font-semibold tracking-tight text-white">Copper Birch Dental</span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed">
              Family and cosmetic dentistry on the same corner of Halloway Street since 1999. Independent, unhurried,
              and still owned by the people who work here.
            </p>
            <address className="mt-5 space-y-1 text-sm not-italic">
              <span className="block">118 Halloway Street, Rivermill</span>
              <a href="tel:+15035550164" className="block font-medium text-white hover:text-amber-300">
                (503) 555-0164
              </a>
              <a href="mailto:hello@copperbirchdental.care" className="block hover:text-amber-300">
                hello@copperbirchdental.care
              </a>
            </address>
            <div className="mt-6 flex gap-3">
              <SocialIcon
                label="Copper Birch Dental on Instagram"
                path="M4.5 8.2A3.7 3.7 0 0 1 8.2 4.5h7.6a3.7 3.7 0 0 1 3.7 3.7v7.6a3.7 3.7 0 0 1-3.7 3.7H8.2a3.7 3.7 0 0 1-3.7-3.7ZM12 8.6a3.4 3.4 0 1 0 0 6.8 3.4 3.4 0 0 0 0-6.8Zm4.6-.7h.01"
              />
              <SocialIcon
                label="Copper Birch Dental on Facebook"
                path="M13.8 20v-7.4h2.5l.4-2.9h-2.9V7.9c0-.8.2-1.4 1.4-1.4h1.6V3.9c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2.2H8.2v2.9h2.5V20Z"
              />
              <SocialIcon
                label="Copper Birch Dental patient newsletter"
                path="M3.5 6.8h17v10.4h-17Zm0 .4 8.5 6 8.5-6"
              />
            </div>
          </div>

          {COLUMNS.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">{column.title}</h3>
              <ul className="mt-5 space-y-3 text-sm">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#top" className="transition-colors hover:text-amber-300">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col justify-between gap-4 border-t border-stone-800 pt-8 text-xs sm:flex-row">
          <p>© 2026 Copper Birch Dental. Registered with the State Dental Board, licence RVM-4471.</p>
          <p className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="#top" className="hover:text-amber-300">
              Privacy notice
            </a>
            <a href="#top" className="hover:text-amber-300">
              Patient rights &amp; complaints
            </a>
            <a href="#top" className="hover:text-amber-300">
              Accessibility at Halloway Street
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
