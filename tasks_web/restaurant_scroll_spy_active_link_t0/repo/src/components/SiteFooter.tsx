const COLUMNS = [
  {
    heading: 'The house',
    links: [
      { label: 'The hearth and the mill', href: '#hearth' },
      { label: 'The Long Room', href: '#room' },
      { label: 'Shape of an evening', href: '#evening' },
      { label: 'Guest stories', href: '#visit' },
    ],
  },
  {
    heading: 'Eating here',
    links: [
      { label: 'This month\'s card', href: '#menu' },
      { label: 'The whole table, £62', href: '#menu' },
      { label: 'Cellar list', href: '#cellar' },
      { label: 'Mill Room suppers', href: '#room' },
    ],
  },
  {
    heading: 'Practicalities',
    links: [
      { label: 'Reservations', href: '#reserve' },
      { label: 'Access and parking', href: '#visit' },
      { label: 'Allergies', href: '#visit' },
      { label: 'Gift notes', href: '#reserve' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-[#14100D] text-[#F0E4D2]">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_repeat(3,0.9fr)]">
          <div>
            <div className="flex items-center gap-3">
              <svg viewBox="0 0 40 44" role="img" aria-label="Lantern and Rye mark" className="h-10 w-9">
                <path d="M20 1 L20 6" stroke="#D8A244" strokeWidth="1.6" strokeLinecap="round" />
                <path d="M12 7 h16 l-2 4 H14 Z" fill="#D8A244" />
                <path d="M14 11 h12 l3 20 a9 9 0 0 1 -18 0 Z" fill="none" stroke="#D8A244" strokeWidth="1.6" />
                <path d="M20 17 c3 4 3 7 0 10 c-3 -3 -3 -6 0 -10 Z" fill="#B7411F" />
                <path d="M11 34 h18" stroke="#D8A244" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
              <span className="font-serif text-xl font-semibold tracking-tight text-[#FBF6EC]">
                Lantern &amp; Rye
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-[#F0E4D2]/65">
              A hearth-fired supper house in a former rope factory on the Ironbridge canal.
              One fire, one mill, one seating a night, since 2016.
            </p>
            <address className="mt-6 space-y-1 text-sm not-italic text-[#F0E4D2]/65">
              <p>62 Dorwich Street, Ironbridge Quarter</p>
              <p>Bristol BS1 4QN</p>
              <p>
                <a href="tel:01175550184" className="hover:text-[#D8A244]">
                  0117 555 0184
                </a>
              </p>
            </address>
            <div className="mt-6 flex gap-3">
              <a
                href="#visit"
                aria-label="Lantern and Rye on the guest book"
                className="rounded-full border border-[#F0E4D2]/20 p-2.5 transition-colors hover:border-[#D8A244]"
              >
                <svg viewBox="0 0 20 20" className="h-4 w-4" aria-hidden="true">
                  <rect x="2" y="2" width="16" height="16" rx="5" fill="none" stroke="#D8A244" strokeWidth="1.7" />
                  <circle cx="10" cy="10" r="4" fill="none" stroke="#D8A244" strokeWidth="1.7" />
                  <circle cx="14.6" cy="5.4" r="1" fill="#D8A244" />
                </svg>
              </a>
              <a
                href="#visit"
                aria-label="Lantern and Rye kitchen notes"
                className="rounded-full border border-[#F0E4D2]/20 p-2.5 transition-colors hover:border-[#D8A244]"
              >
                <svg viewBox="0 0 20 20" className="h-4 w-4" aria-hidden="true">
                  <path d="M3 4 h14 v12 H3 Z" fill="none" stroke="#D8A244" strokeWidth="1.7" />
                  <path d="M6 8 h8 M6 11 h5" stroke="#D8A244" strokeWidth="1.7" strokeLinecap="round" />
                </svg>
              </a>
              <a
                href="mailto:table@lanternandrye.co.uk"
                aria-label="Email the front desk"
                className="rounded-full border border-[#F0E4D2]/20 p-2.5 transition-colors hover:border-[#D8A244]"
              >
                <svg viewBox="0 0 20 20" className="h-4 w-4" aria-hidden="true">
                  <path d="M2 5 h16 v10 H2 Z" fill="none" stroke="#D8A244" strokeWidth="1.7" />
                  <path d="M2 5 l8 6 8 -6" fill="none" stroke="#D8A244" strokeWidth="1.7" />
                </svg>
              </a>
            </div>
          </div>

          {COLUMNS.map((column) => (
            <nav key={column.heading} aria-label={column.heading}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D8A244]">
                {column.heading}
              </h3>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-[#F0E4D2]/70 transition-colors hover:text-[#FBF6EC]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-[#F0E4D2]/12 pt-8 text-xs text-[#F0E4D2]/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2016 – 2026 Lantern &amp; Rye Ltd. Registered in England, 09884120.</p>
          <ul className="flex flex-wrap gap-6">
            <li>
              <a href="#visit" className="hover:text-[#D8A244]">
                Allergen policy
              </a>
            </li>
            <li>
              <a href="#visit" className="hover:text-[#D8A244]">
                Privacy
              </a>
            </li>
            <li>
              <a href="#reserve" className="hover:text-[#D8A244]">
                Booking terms
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
