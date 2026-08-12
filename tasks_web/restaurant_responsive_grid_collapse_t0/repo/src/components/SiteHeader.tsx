const NAV = [
  { label: 'The board', href: '#board' },
  { label: 'Set feasts', href: '#feasts' },
  { label: 'The room', href: '#room' },
  { label: 'Kitchen', href: '#kitchen' },
  { label: 'Questions', href: '#questions' },
]

function LanternMark() {
  return (
    <svg
      viewBox="0 0 48 48"
      role="img"
      aria-label="Persimmon Alley lantern mark"
      className="h-10 w-10"
    >
      <defs>
        <linearGradient id="lantern-mark-glow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F5A623" />
          <stop offset="100%" stopColor="#E4572E" />
        </linearGradient>
      </defs>
      <path d="M24 3v5" stroke="#FBF5EC" strokeWidth="2" strokeLinecap="round" />
      <rect x="13" y="8" width="22" height="4" rx="2" fill="#FBF5EC" />
      <path
        d="M15 12h18c2.6 4.4 3.9 8.6 3.9 12.6S35.6 33.6 33 38H15c-2.6-4.4-3.9-8.6-3.9-13.4S12.4 16.4 15 12z"
        fill="url(#lantern-mark-glow)"
      />
      <path d="M24 14v22" stroke="#7A2B14" strokeWidth="1.2" opacity="0.5" />
      <path d="M17.5 15c-1.6 3-2.4 6.2-2.4 9.6s.8 6.6 2.4 9.6" stroke="#7A2B14" strokeWidth="1.2" fill="none" opacity="0.5" />
      <path d="M30.5 15c1.6 3 2.4 6.2 2.4 9.6s-.8 6.6-2.4 9.6" stroke="#7A2B14" strokeWidth="1.2" fill="none" opacity="0.5" />
      <rect x="15" y="37" width="18" height="4" rx="2" fill="#FBF5EC" />
      <path d="M21 41v4M24 41v5M27 41v4" stroke="#E4572E" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#16110F]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-5 py-4">
        <a href="#top" className="flex items-center gap-3" data-testid="brand-link">
          <LanternMark />
          <span className="leading-tight">
            <span className="block font-serif text-lg font-semibold tracking-wide text-[#FBF5EC]">
              Persimmon Alley
            </span>
            <span className="block text-[11px] uppercase tracking-[0.28em] text-[#E4572E]">
              22 Dunbar Lane
            </span>
          </span>
        </a>

        <nav aria-label="Main" className="ml-auto hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              data-testid="nav-link"
              className="text-sm font-medium text-[#FBF5EC]/75 transition hover:text-[#E4572E]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="tel:5550172"
          className="ml-auto hidden text-sm font-medium text-[#FBF5EC]/70 hover:text-[#FBF5EC] lg:ml-0 lg:block"
        >
          555 0172
        </a>

        <a
          href="#reserve"
          data-testid="header-book"
          className="ml-auto rounded-full bg-[#E4572E] px-5 py-2.5 text-sm font-semibold text-[#16110F] shadow-lg shadow-[#E4572E]/20 transition hover:bg-[#F5A623] lg:ml-3"
        >
          Book a table
        </a>
      </div>
    </header>
  )
}
