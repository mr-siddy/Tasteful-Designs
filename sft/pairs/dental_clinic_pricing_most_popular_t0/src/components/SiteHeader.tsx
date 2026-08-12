const NAV = [
  { href: '#services', label: 'Services' },
  { href: '#membership', label: 'Membership' },
  { href: '#how-we-work', label: 'How we work' },
  { href: '#team', label: 'Our team' },
  { href: '#faq', label: 'Questions' },
  { href: '#visit', label: 'Visit us' },
]

export function FoxgloveMark({ className = 'h-9 w-9' }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} role="img" aria-label="Foxglove Dental Studio">
      <defs>
        <linearGradient id="fox-mark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1B6B60" />
          <stop offset="100%" stopColor="#0F3B36" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="46" height="46" rx="14" fill="url(#fox-mark)" />
      <path
        d="M24 11c-5.4 0-8.6 3.1-8.6 8.2 0 4.1 1.2 7.3 2.3 10.7 1 3.1 1.6 6.4 3.4 6.4 1.5 0 1.7-2.6 2.9-2.6s1.4 2.6 2.9 2.6c1.8 0 2.4-3.3 3.4-6.4 1.1-3.4 2.3-6.6 2.3-10.7C32.6 14.1 29.4 11 24 11z"
        fill="#FBF8F3"
      />
      <path d="M24 15.5c2.6 0 4.2 1.2 4.7 3.4" stroke="#C2557E" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      <circle cx="33.5" cy="15" r="3.4" fill="#C2557E" />
    </svg>
  )
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-[#0F3B36]/10 bg-[#FBF8F3]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-6 px-5 py-4">
        <a href="#top" data-testid="brand-link" className="flex items-center gap-3">
          <FoxgloveMark />
          <span className="leading-tight">
            <span className="block font-serif text-lg font-semibold tracking-tight text-[#0F3B36]">
              Foxglove Dental Studio
            </span>
            <span className="block text-[11px] uppercase tracking-[0.2em] text-[#0F3B36]/55">
              Cobblehill Ward · Wren Harbor
            </span>
          </span>
        </a>

        <nav aria-label="Primary" className="ml-auto hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              data-testid="nav-link"
              className="text-sm font-medium text-[#14201E]/75 transition-colors hover:text-[#0F3B36]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3 lg:ml-0">
          <a
            href="tel:5550172"
            data-testid="header-phone"
            className="hidden text-sm font-semibold text-[#0F3B36] sm:inline"
          >
            (555) 0172
          </a>
          <a
            href="#visit"
            data-testid="header-cta"
            className="rounded-full bg-[#0F3B36] px-5 py-2.5 text-sm font-semibold text-[#FBF8F3] shadow-sm transition-colors hover:bg-[#14524A]"
          >
            Book a visit
          </a>
        </div>
      </div>
    </header>
  )
}
