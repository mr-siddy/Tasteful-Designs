const NAV = [
  { href: '#table', label: 'The table' },
  { href: '#supra', label: 'How a supra works' },
  { href: '#cellar', label: 'Qvevri cellar' },
  { href: '#bakehouse', label: 'Bakehouse' },
  { href: '#visit', label: 'Visit' },
]

export function SiteHeader() {
  return (
    <header
      data-testid="site-header"
      className="sticky top-0 z-40 border-b border-stone-200/70 bg-[#fdf8f1]/95 backdrop-blur"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4">
        <a href="#hero" className="flex items-center gap-3" data-testid="brand">
          <svg
            viewBox="0 0 48 48"
            role="img"
            aria-label="Tamada mark: a clay drinking horn above a vine"
            className="h-11 w-11"
          >
            <defs>
              <linearGradient id="brand-clay" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#9f1239" />
                <stop offset="100%" stopColor="#4c0519" />
              </linearGradient>
            </defs>
            <circle cx="24" cy="24" r="23" fill="url(#brand-clay)" />
            <path
              d="M13 15c7 1 13 4 18 9 3 3 4 6 3 8-1 2-4 2-7 0-5-3-10-9-14-17z"
              fill="#fbbf24"
            />
            <path d="M11 13c3 0 6 .4 9 1.2L18 18c-2-.7-4-1.1-6-1.2z" fill="#fde68a" />
            <path
              d="M24 34c0 4 3 6 8 6"
              stroke="#fbbf24"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
            <circle cx="33" cy="40" r="2.4" fill="#fde68a" />
          </svg>
          <span className="leading-tight">
            <span className="block font-serif text-2xl font-semibold tracking-tight text-rose-950">
              Tamada
            </span>
            <span className="block text-[10px] uppercase tracking-[0.3em] text-stone-500">
              Georgian supper house
            </span>
          </span>
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-8 text-sm font-medium text-stone-600">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  data-testid="nav-link"
                  className="transition hover:text-rose-800"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="tel:5035550164"
            className="hidden text-sm font-medium text-stone-600 transition hover:text-rose-800 sm:block"
          >
            (503) 555-0164
          </a>
          <a
            href="#reserve"
            data-testid="header-reserve"
            className="rounded-full bg-rose-900 px-5 py-2.5 text-sm font-semibold text-amber-50 shadow-lg shadow-rose-900/20 transition hover:bg-rose-800"
          >
            Reserve a table
          </a>
        </div>
      </div>
    </header>
  )
}
