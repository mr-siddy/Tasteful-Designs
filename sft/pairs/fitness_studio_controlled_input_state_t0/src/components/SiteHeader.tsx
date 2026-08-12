const DESTINATIONS = [
  { label: 'Programs', href: '#programs' },
  { label: 'Timetable', href: '#timetable' },
  { label: 'Coaching', href: '#coaching' },
  { label: 'Membership', href: '#membership' },
  { label: 'The room', href: '#the-floor' },
]

export function ClubMark({ className = 'h-9 w-9' }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} role="img" aria-label="Ashgrove Barbell Club">
      <defs>
        <linearGradient id="club-mark-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#C7F04A" />
          <stop offset="100%" stopColor="#D9622B" />
        </linearGradient>
      </defs>
      <rect x="1.5" y="1.5" width="45" height="45" rx="13" fill="#10161C" />
      <rect x="1.5" y="1.5" width="45" height="45" rx="13" fill="none" stroke="url(#club-mark-grad)" strokeWidth="2" />
      <rect x="9" y="20.5" width="5" height="7" rx="1.6" fill="#C7F04A" />
      <rect x="34" y="20.5" width="5" height="7" rx="1.6" fill="#C7F04A" />
      <rect x="15" y="17.5" width="6" height="13" rx="2" fill="#F4F1EA" />
      <rect x="27" y="17.5" width="6" height="13" rx="2" fill="#F4F1EA" />
      <rect x="20" y="22.4" width="8" height="3.2" rx="1.6" fill="#D9622B" />
    </svg>
  )
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#10161C]/10 bg-[#F4F1EA]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4">
        <a href="#top" className="flex items-center gap-3" data-testid="brand-link">
          <ClubMark />
          <span className="leading-tight">
            <span className="block text-sm font-black uppercase tracking-[0.18em]">Ashgrove</span>
            <span className="block text-[11px] uppercase tracking-[0.3em] text-[#6E7A72]">Barbell Club</span>
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {DESTINATIONS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              data-testid="nav-link"
              className="text-sm font-semibold text-[#2A3630] transition-colors hover:text-[#10161C]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="tel:5550172" className="hidden text-sm font-semibold text-[#6E7A72] lg:block">
            (555) 0172
          </a>
          <a
            href="#trial"
            data-testid="header-cta"
            className="rounded-full bg-[#10161C] px-5 py-2.5 text-sm font-bold text-[#F4F1EA] shadow-sm transition-transform hover:-translate-y-0.5"
          >
            Two-week trial
          </a>
        </div>
      </div>
    </header>
  )
}
