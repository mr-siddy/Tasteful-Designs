const COLUMNS = [
  {
    heading: 'The club',
    links: [
      { label: 'Supper menu', href: '#supper' },
      { label: 'Friday fish fry', href: '#fish-fry' },
      { label: 'The brandy bar', href: '#bar' },
      { label: 'The Lantern Room', href: '#lantern-room' },
    ],
  },
  {
    heading: 'Plan a visit',
    links: [
      { label: 'Reserve a table', href: '#reserve' },
      { label: 'Hours and directions', href: '#visit' },
      { label: 'Gift certificates', href: '#visit' },
      { label: 'Dock and parking', href: '#visit' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-[#0A1A13] text-[#A9B49F]">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <svg viewBox="0 0 48 48" aria-hidden="true" className="h-9 w-9">
              <circle cx="24" cy="24" r="23" fill="#132D22" stroke="#D2A24C" strokeWidth="1.5" />
              <path d="M24 9c4 6 4 11 0 16-4-5-4-10 0-16Z" fill="#8FA9DA" />
              <path d="M24 25c-5-4-11-4-15 1 5 5 11 5 15-1Z" fill="#6C86BD" />
              <path d="M24 25c5-4 11-4 15 1-5 5-11 5-15-1Z" fill="#6C86BD" />
              <path d="M24 25c-2 5-2 9 0 14 2-5 2-9 0-14Z" fill="#D2A24C" />
            </svg>
            <span className="text-lg font-semibold tracking-tight text-[#F6F1E4]">
              The Blue Iris
            </span>
          </div>
          <p className="mt-5 text-sm leading-relaxed">
            A supper club on the east shore of Lake Wanetka since 1946. Owned and run by the
            Ostrowski family, all three generations of it.
          </p>
        </div>

        {COLUMNS.map((column) => (
          <nav key={column.heading} aria-label={column.heading}>
            <h3 className="text-xs uppercase tracking-[0.24em] text-[#E8C87E]">{column.heading}</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {column.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    data-testid="footer-link"
                    className="transition-colors hover:text-[#F6F1E4]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div>
          <h3 className="text-xs uppercase tracking-[0.24em] text-[#E8C87E]">Find us</h3>
          <address className="mt-5 space-y-3 text-sm not-italic leading-relaxed">
            <p>
              4118 Cedar Bluff Road
              <br />
              Harlow Bend
            </p>
            <p>
              <a href="tel:5550179" className="hover:text-[#F6F1E4]">
                (555) 0179
              </a>
              <br />
              <a href="mailto:hello@blueirissupperclub.test" className="hover:text-[#F6F1E4]">
                hello@blueirissupperclub.test
              </a>
            </p>
            <p>
              Wednesday – Sunday from 4:30pm
              <br />
              Closed Monday and Tuesday
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-[#F6F1E4]/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 The Blue Iris Supper Club · Established 1946</p>
          <p>Relish tray included with every supper. It always has been.</p>
        </div>
      </div>
    </footer>
  )
}
