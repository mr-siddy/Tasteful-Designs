const NAV = [
  { label: 'Platform', href: '#platform' },
  { label: 'Templates', href: '#templates' },
  { label: 'Reliability', href: '#reliability' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Customers', href: '#customers' },
]

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-[#E2DCCE] bg-[#F7F4EC]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <a href="#top" className="flex items-center gap-2.5" aria-label="Stonecrop home">
          <svg
            viewBox="0 0 32 32"
            className="h-8 w-8"
            role="img"
            aria-label="Stonecrop leaf mark"
          >
            <rect width="32" height="32" rx="9" fill="#0B1F1B" />
            <path d="M16 6c5 3 7 6.4 7 10.2 0 4-3.1 7.1-7 7.1s-7-3.1-7-7.1C9 12.4 11 9 16 6z" fill="#12766A" />
            <path d="M16 9.6c3 2.1 4.3 4.4 4.3 6.9 0 2.5-1.9 4.4-4.3 4.4z" fill="#E8A33D" />
            <path d="M16 21.9V27" stroke="#12766A" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span className="text-lg font-semibold tracking-tight text-[#0B1F1B]">Stonecrop</span>
        </a>

        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-[#3E524D] transition-colors hover:text-[#0B1F1B]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#sign-in"
            className="hidden text-sm font-medium text-[#3E524D] transition-colors hover:text-[#0B1F1B] sm:inline"
          >
            Sign in
          </a>
          <a
            href="#trial"
            className="rounded-full bg-[#12766A] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#0E5C53]"
          >
            Start free trial
          </a>
        </div>
      </div>
    </header>
  )
}
