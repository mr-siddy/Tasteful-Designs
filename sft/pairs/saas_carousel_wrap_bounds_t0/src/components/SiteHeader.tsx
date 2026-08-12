const NAV = [
  { label: 'What it does', href: '#capabilities' },
  { label: 'How it works', href: '#compliance' },
  { label: 'Integrations', href: '#integrations' },
  { label: 'Customer stories', href: '#stories' },
  { label: 'Questions', href: '#faq' },
]

export function BrandMark({ className = 'h-8 w-8' }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} role="img" aria-label="Rooftree">
      <rect x="0" y="0" width="40" height="40" rx="11" fill="#131A2A" />
      <path d="M8 21.5 20 10l12 11.5" fill="none" stroke="#3D4EE0" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12.5 21v9h15v-9" fill="none" stroke="#F4F6FB" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="20" cy="25.5" r="2.6" fill="#0E8F6F" />
    </svg>
  )
}

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#DDE3F0] bg-[#F4F6FB]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <a href="#hero" data-testid="brand-link" className="flex items-center gap-3">
          <BrandMark />
          <span className="text-lg font-bold tracking-tight">
            Rooftree
            <span className="ml-2 hidden text-xs font-semibold uppercase tracking-[0.2em] text-[#6B7690] sm:inline">
              Housing operations
            </span>
          </span>
        </a>

        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              data-testid="nav-link"
              className="text-sm font-medium text-[#4B5670] transition hover:text-[#131A2A]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#signin"
            data-testid="nav-signin"
            className="hidden text-sm font-semibold text-[#4B5670] transition hover:text-[#131A2A] sm:inline"
          >
            Sign in
          </a>
          <a
            href="#demo"
            data-testid="header-cta"
            className="rounded-lg bg-[#3D4EE0] px-4 py-2.5 text-sm font-semibold text-white shadow-sm shadow-[#3D4EE0]/30 transition hover:bg-[#2f3ec4]"
          >
            Book a walkthrough
          </a>
        </div>
      </div>
    </header>
  )
}
