const DESTINATIONS = [
  { label: 'Treatments', href: '#treatments' },
  { label: 'Same-day crowns', href: '#same-day' },
  { label: 'Our team', href: '#team' },
  { label: 'Membership', href: '#membership' },
  { label: 'Visits & hours', href: '#visit' },
]

/** Sticky top bar: brand mark, the five destinations, phone, booking action. */
export default function SiteHeader() {
  return (
    <header
      data-testid="site-header"
      className="sticky top-0 z-40 border-b border-[#0f4c4f]/10 bg-[#faf5ec]/95 backdrop-blur"
    >
      <div className="mx-auto flex max-w-6xl items-center gap-6 px-5 py-4">
        <a href="#top" className="flex items-center gap-3" data-testid="brand">
          <svg
            viewBox="0 0 44 44"
            className="h-10 w-10 shrink-0"
            role="img"
            aria-label="Quarry Hill Dental mark"
          >
            <defs>
              <linearGradient id="qh-mark" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#1c6f6b" />
                <stop offset="100%" stopColor="#0f4c4f" />
              </linearGradient>
            </defs>
            <rect width="44" height="44" rx="13" fill="url(#qh-mark)" />
            <path
              d="M9 30l7-11 5 7 4-6 10 10z"
              fill="#f2e9da"
              opacity="0.9"
            />
            <path
              d="M22 9c3.4 0 5 2 5 4.6 0 2.1-.9 3.4-.9 6.2 0 2.4.7 3.6.7 5.2 0 1.4-.7 2.3-1.7 2.3-1.5 0-1.8-2.6-3.1-2.6s-1.6 2.6-3.1 2.6c-1 0-1.7-.9-1.7-2.3 0-1.6.7-2.8.7-5.2 0-2.8-.9-4.1-.9-6.2C17 11 18.6 9 22 9z"
              fill="#c68a3e"
            />
          </svg>
          <span className="leading-tight">
            <span className="block font-serif text-lg font-semibold text-[#0d2b2e]">
              Quarry Hill Dental
            </span>
            <span className="block text-[11px] uppercase tracking-[0.18em] text-[#1c6f6b]">
              Water Street · Burlington
            </span>
          </span>
        </a>

        <nav aria-label="Main" className="ml-auto hidden items-center gap-7 lg:flex">
          {DESTINATIONS.map((d) => (
            <a
              key={d.href}
              href={d.href}
              data-testid="nav-link"
              className="text-sm font-medium text-[#0d2b2e]/80 transition-colors hover:text-[#0f4c4f]"
            >
              {d.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3 lg:ml-0">
          <a
            href="tel:+18025550142"
            data-testid="header-phone"
            className="hidden text-sm font-semibold text-[#0f4c4f] sm:block"
          >
            (802) 555 0142
          </a>
          <a
            href="#book"
            data-testid="header-cta"
            className="rounded-full bg-[#0f4c4f] px-5 py-2.5 text-sm font-semibold text-[#faf5ec] shadow-sm transition-colors hover:bg-[#134e4a]"
          >
            Book a visit
          </a>
        </div>
      </div>
    </header>
  )
}
