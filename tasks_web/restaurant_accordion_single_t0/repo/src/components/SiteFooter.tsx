const COLUMNS = [
  {
    id: 'eat',
    title: 'Eat with us',
    links: [
      { label: 'Tonight’s hearth menu', href: '#menu' },
      { label: "The chef's counter", href: '#counter' },
      { label: 'Sunday harbour lunch', href: '#visit' },
      { label: 'The Net Loft', href: '#net-loft' },
    ],
  },
  {
    id: 'about',
    title: 'The restaurant',
    links: [
      { label: 'How the fire works', href: '#fire' },
      { label: 'Our producers', href: '#producers' },
      { label: 'Questions before you come', href: '#questions' },
      { label: 'Working here', href: '#visit' },
    ],
  },
]

const SOCIAL = [
  { id: 'letters', label: 'Write to the kitchen', href: 'mailto:hello@cinderandsalt.test' },
  { id: 'journal', label: 'The harbour journal', href: '#fire' },
  { id: 'gift', label: 'Gift notes', href: '#book' },
]

export function SiteFooter() {
  return (
    <footer className="bg-[#0B262C] text-[#D9CFC0]">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <svg viewBox="0 0 48 48" role="img" aria-label="Cinder and Salt hearth mark" className="h-10 w-10">
                <circle cx="24" cy="24" r="23" fill="#E08A3C" />
                <path
                  d="M24 11c4 5 1.5 8 3.5 10.5C29 23.5 32 22 32 22c1.8 3 1.4 7.6-1.4 10.6A9.6 9.6 0 0 1 24 36a9.6 9.6 0 0 1-6.6-3.4C14.6 29.6 14.2 25 16 22c0 0 2.4 1.4 3.6-.5C21.4 18.6 20 15.6 24 11Z"
                  fill="#0B262C"
                />
              </svg>
              <span className="text-lg font-semibold tracking-tight text-[#FAF6EF]">
                Cinder &amp; Salt
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed">
              A thirty-eight seat wood-fire restaurant in the old Ropeworks at the end of Harker Quay.
              Cooking over embers since 2017.
            </p>
          </div>

          {COLUMNS.map((column) => (
            <nav key={column.id} aria-label={column.title} data-testid="footer-column">
              <h2 className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#E9C79A]">
                {column.title}
              </h2>
              <ul className="mt-4 space-y-2.5 text-sm">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="transition-colors hover:text-[#FAF6EF]">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div data-testid="footer-column">
            <h2 className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#E9C79A]">
              Find the door
            </h2>
            <address className="mt-4 space-y-1 text-sm not-italic leading-relaxed">
              <span className="block">14 Harker Quay</span>
              <span className="block">Fenwick Harbour</span>
              <a href="tel:5550148" className="block pt-2 font-medium text-[#FAF6EF]">
                (555) 0148
              </a>
            </address>
            <ul className="mt-5 space-y-2 text-sm">
              {SOCIAL.map((item) => (
                <li key={item.id}>
                  <a href={item.href} className="inline-flex items-center gap-2 transition-colors hover:text-[#FAF6EF]">
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3.5 w-3.5 text-[#E08A3C]">
                      <path d="M5 12h14m-6-6 6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-[#FAF6EF]/10 pt-6 text-xs text-[#8B8073] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Cinder &amp; Salt Ltd · Registered at 14 Harker Quay, Fenwick Harbour</p>
          <ul className="flex flex-wrap gap-5">
            <li>
              <a href="#visit" className="hover:text-[#D9CFC0]">
                Allergen information
              </a>
            </li>
            <li>
              <a href="#book" className="hover:text-[#D9CFC0]">
                Booking terms
              </a>
            </li>
            <li>
              <a href="#questions" className="hover:text-[#D9CFC0]">
                Privacy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
