const NAV = [
  { label: 'The board', href: '#capabilities' },
  { label: 'How it works', href: '#deep-dive' },
  { label: 'Your trade', href: '#trades' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Customers', href: '#customers' },
]

export default function SiteHeader() {
  return (
    <header className="border-b border-[#EADFCF] bg-[#FBF6EE]/95">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-5">
        <a href="#hero" data-testid="brand" className="flex items-center gap-3">
          <svg viewBox="0 0 40 40" className="h-9 w-9" role="img" aria-label="Copperline">
            <rect x="0" y="0" width="40" height="40" rx="11" fill="#12242C" />
            <path
              d="M11 27c0-6 4-11 9-11s9 3 9 7"
              stroke="#C25A2B"
              strokeWidth="3.2"
              fill="none"
              strokeLinecap="round"
            />
            <circle cx="29" cy="23" r="3.4" fill="#E8813F" />
            <circle cx="11" cy="27" r="2.4" fill="#FBF6EE" />
          </svg>
          <span className="text-lg font-bold tracking-tight">Copperline</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              data-testid="nav-link"
              className="text-sm font-medium text-[#3D555F] transition hover:text-[#12242C]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a href="tel:+16165550142" className="hidden text-sm font-semibold text-[#0E6A66] lg:inline">
            (616) 555 0142
          </a>
          <a href="#walkthrough" className="hidden text-sm font-medium text-[#3D555F] hover:text-[#12242C] sm:inline">
            Sign in
          </a>
          <a
            href="#walkthrough"
            data-testid="header-cta"
            className="rounded-lg bg-[#C25A2B] px-4 py-2.5 text-sm font-semibold text-white shadow-sm shadow-[#C25A2B]/30 transition hover:bg-[#a94a20]"
          >
            Book a walkthrough
          </a>
        </div>
      </div>
    </header>
  )
}
