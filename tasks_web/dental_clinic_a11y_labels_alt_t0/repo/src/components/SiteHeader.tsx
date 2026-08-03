const DESTINATIONS = [
  { href: '#services', label: 'Treatments' },
  { href: '#studio', label: 'The studio' },
  { href: '#team', label: 'Our dentists' },
  { href: '#hours', label: 'Hours & parking' },
  { href: '#membership', label: 'Membership' },
]

export function CedarMark({ className = 'h-9 w-9' }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" focusable="false">
      <circle cx="24" cy="24" r="23" fill="#0b2d45" />
      <path
        d="M24 11c4.4 0 6.6 2.1 9 2.1 3.4 0 5.6 2.6 5.6 6.7 0 5.4-2.4 9.4-3.6 13.4-1 3.3-1.9 5.4-3.7 5.4-2 0-2.6-3.3-3.3-6.1-.6-2.2-1.2-3.6-2-3.6-.9 0-1.5 1.4-2 3.6-.7 2.8-1.4 6.1-3.4 6.1-1.8 0-2.7-2.1-3.7-5.4-1.2-4-3.5-8-3.5-13.4 0-4.1 2.1-6.7 5.5-6.7 2.5 0 4.7-2.1 9.1-2.1z"
        fill="#f6fafb"
      />
      <path d="M24 15.5v9" stroke="#2fb99b" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  )
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-[#0b2d45]/10 bg-[#f6fafb]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-6 px-5 py-4">
        <a href="#top" className="flex items-center gap-3" data-testid="brand-link">
          <CedarMark />
          <span className="leading-tight">
            <span className="block font-serif text-lg font-semibold tracking-tight">
              Cedar &amp; Vale
            </span>
            <span className="block text-[11px] uppercase tracking-[0.28em] text-[#2fb99b]">
              Dental Studio
            </span>
          </span>
        </a>

        <nav aria-label="Primary" className="ml-auto hidden items-center gap-7 lg:flex">
          {DESTINATIONS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              data-testid="nav-link"
              className="text-sm font-medium text-[#0b2d45]/75 transition hover:text-[#0b2d45]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3 lg:ml-0">
          <a
            href="tel:+16145550142"
            className="hidden text-sm font-semibold text-[#0b2d45] sm:block"
            data-testid="header-phone"
          >
            (614) 555 0142
          </a>
          <a
            href="#book"
            data-testid="header-cta"
            className="rounded-full bg-[#0b2d45] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#17466a]"
          >
            Book a visit
          </a>
        </div>
      </div>
      <p className="bg-[#0b2d45] px-5 py-2 text-center text-xs font-medium tracking-wide text-[#d8f0ea]">
        Chairs open 7:00am to 8:00pm Monday to Thursday · Saturdays 8:00am to 4:00pm · Registered
        patients are seen the same week in an emergency
      </p>
    </header>
  )
}
