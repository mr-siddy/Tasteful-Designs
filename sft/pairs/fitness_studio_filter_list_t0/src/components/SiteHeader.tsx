const DESTINATIONS = [
  { href: '#programs', label: 'Programs' },
  { href: '#schedule', label: 'Schedule' },
  { href: '#coaches', label: 'Coaches' },
  { href: '#the-room', label: 'The room' },
  { href: '#questions', label: 'Questions' },
]

export function BrandMark({ className = 'h-9 w-9' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      role="img"
      aria-label="Tidewater Strength and Movement"
      focusable="false"
    >
      <circle cx="24" cy="24" r="23" fill="#0B2A33" />
      <path
        d="M6 30c4.5 0 4.5-4 9-4s4.5 4 9 4 4.5-4 9-4 4.5 4 9 4"
        fill="none"
        stroke="#1D7A6B"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <rect x="11" y="17" width="4" height="8" rx="1.2" fill="#E4682A" />
      <rect x="33" y="17" width="4" height="8" rx="1.2" fill="#E4682A" />
      <rect x="15" y="20" width="18" height="2.4" rx="1.2" fill="#F7F2EA" />
    </svg>
  )
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-[#0B2A33]/10 bg-[#F7F2EA]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-6 px-5 py-4">
        <a href="#top" className="flex items-center gap-3" data-testid="brand-link">
          <BrandMark />
          <span className="leading-tight">
            <span className="block text-base font-black tracking-tight">Tidewater</span>
            <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-[#5B6B70]">
              Strength &amp; Movement
            </span>
          </span>
        </a>

        <nav aria-label="Primary" className="ml-auto hidden md:block">
          <ul className="flex items-center gap-7 text-sm font-semibold">
            {DESTINATIONS.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-[#0B2A33]/80 hover:text-[#E4682A]">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="tel:+14105550176"
          className="hidden text-sm font-semibold text-[#5B6B70] hover:text-[#0B2A33] lg:inline"
        >
          (410) 555 0176
        </a>
        <a
          href="#book-intro"
          data-testid="header-cta"
          className="ml-auto rounded-full bg-[#E4682A] px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-[#c9551d] md:ml-0"
        >
          Book a free intro
        </a>
      </div>
    </header>
  )
}
