const NAV = [
  { label: 'The menu', href: '#menu' },
  { label: 'The fire', href: '#fire' },
  { label: "Chef's counter", href: '#counter' },
  { label: 'Producers', href: '#producers' },
  { label: 'The Net Loft', href: '#net-loft' },
  { label: 'Visit', href: '#visit' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-[#E4DACB] bg-[#FAF6EF]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-6 px-5 py-4">
        <a href="#top" data-testid="brand-mark" className="flex items-center gap-3">
          <svg
            viewBox="0 0 48 48"
            role="img"
            aria-label="Cinder and Salt hearth mark"
            className="h-10 w-10 flex-none"
          >
            <circle cx="24" cy="24" r="23" fill="#123C43" />
            <path
              d="M24 11c4 5 1.5 8 3.5 10.5C29 23.5 32 22 32 22c1.8 3 1.4 7.6-1.4 10.6A9.6 9.6 0 0 1 24 36a9.6 9.6 0 0 1-6.6-3.4C14.6 29.6 14.2 25 16 22c0 0 2.4 1.4 3.6-.5C21.4 18.6 20 15.6 24 11Z"
              fill="#E08A3C"
            />
            <path d="M14 39h20" stroke="#FAF6EF" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
          <span className="leading-tight">
            <span className="block text-lg font-semibold tracking-tight text-[#123C43]">
              Cinder &amp; Salt
            </span>
            <span className="block text-[10px] uppercase tracking-[0.3em] text-[#8B8073]">
              Fenwick Harbour
            </span>
          </span>
        </a>

        <nav aria-label="Primary" className="ml-auto hidden lg:block">
          <ul className="flex items-center gap-7 text-sm font-medium text-[#4A423A]">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  data-testid="nav-link"
                  className="transition-colors hover:text-[#C4472A]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-3 lg:ml-0">
          <a
            href="tel:5550148"
            className="hidden text-sm font-medium text-[#4A423A] sm:inline-flex sm:items-center sm:gap-2"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
              <path
                d="M5 4h4l2 5-2.5 1.5a12 12 0 0 0 5 5L15 13l5 2v4a1 1 0 0 1-1.1 1A16 16 0 0 1 4 5.1 1 1 0 0 1 5 4Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
            </svg>
            (555) 0148
          </a>
          <a
            href="#book"
            data-testid="header-book"
            className="rounded-full bg-[#C4472A] px-5 py-2.5 text-sm font-semibold text-[#FAF6EF] shadow-sm transition-colors hover:bg-[#A93A20]"
          >
            Book a table
          </a>
        </div>
      </div>
    </header>
  )
}
