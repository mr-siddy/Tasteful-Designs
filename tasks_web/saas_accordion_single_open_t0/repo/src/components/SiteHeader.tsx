const NAV = [
  { href: '#platform', label: 'Platform' },
  { href: '#board', label: 'Season board' },
  { href: '#proofs', label: 'Proofs' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#customers', label: 'Presses' },
  { href: '#questions', label: 'Questions' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-[#E3DCCE] bg-[#FBF8F2]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4">
        <a href="#top" className="flex flex-none items-center gap-3" data-testid="brand-link">
          <svg viewBox="0 0 40 40" role="img" aria-label="Colophon printer's mark" className="h-9 w-9">
            <rect width="40" height="40" rx="10" fill="#141B2E" />
            <path d="M11 27V13h7.5a4.5 4.5 0 0 1 0 9H15" stroke="#FBF8F2" strokeWidth="2.4" fill="none" strokeLinecap="round" />
            <circle cx="27.5" cy="15" r="3.2" fill="#C0462A" />
            <path d="M24 27h8" stroke="#C0462A" strokeWidth="2.4" strokeLinecap="round" />
          </svg>
          <span className="text-lg font-semibold tracking-tight text-[#141B2E]">Colophon</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              data-testid="nav-link"
              className="text-sm font-medium text-[#5C6377] transition-colors hover:text-[#141B2E]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-none items-center gap-3">
          <a
            href="#signin"
            className="hidden text-sm font-medium text-[#5C6377] transition-colors hover:text-[#141B2E] sm:block"
          >
            Sign in
          </a>
          <a
            href="#demo"
            className="rounded-full bg-[#141B2E] px-5 py-2.5 text-sm font-semibold text-[#FBF8F2] shadow-sm transition-colors hover:bg-[#2A3350]"
          >
            Book a walkthrough
          </a>
        </div>
      </div>
    </header>
  )
}
