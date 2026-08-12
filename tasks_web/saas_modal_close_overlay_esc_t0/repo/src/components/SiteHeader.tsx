const DESTINATIONS = [
  { label: 'Platform', href: '#workbench' },
  { label: 'Filings', href: '#timeline' },
  { label: 'Integrations', href: '#integrations' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Customers', href: '#customers' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#0B1F33]/10 bg-[#F5F7F9]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4">
        <a href="#top" className="flex items-center gap-3" data-testid="brand-mark">
          <svg viewBox="0 0 40 40" aria-hidden="true" className="h-9 w-9">
            <rect x="1" y="1" width="38" height="38" rx="11" fill="#0B1F33" />
            <path
              d="M11 27V13h8.4a4.6 4.6 0 010 9.2H15"
              fill="none"
              stroke="#F2A03D"
              strokeWidth="2.6"
              strokeLinecap="round"
            />
            <circle cx="28" cy="26" r="3.2" fill="none" stroke="#5AC8D8" strokeWidth="2.2" />
          </svg>
          <span className="text-lg font-semibold tracking-tight">Portway</span>
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-7 md:flex">
          {DESTINATIONS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              data-testid="nav-link"
              className="text-sm font-medium text-[#42566B] transition-colors hover:text-[#0D6E8C]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="#sign-in"
            className="hidden text-sm font-medium text-[#42566B] transition-colors hover:text-[#0D6E8C] sm:block"
          >
            Sign in
          </a>
          <a
            href="#walkthrough"
            data-testid="header-cta"
            className="rounded-full bg-[#0B1F33] px-5 py-2.5 text-sm font-semibold text-[#F5F7F9] transition-colors hover:bg-[#0D6E8C]"
          >
            Book a walkthrough
          </a>
        </div>
      </div>
    </header>
  )
}
