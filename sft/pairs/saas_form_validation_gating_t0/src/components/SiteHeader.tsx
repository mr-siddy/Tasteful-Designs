const NAV = [
  { label: 'Platform', href: '#platform' },
  { label: 'Dispatch', href: '#dispatch' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Customers', href: '#customers' },
  { label: 'FAQ', href: '#faq' },
]

export default function SiteHeader() {
  return (
    <header
      data-testid="site-header"
      className="sticky top-0 z-30 border-b border-[#E4E8F2] bg-white/90 backdrop-blur"
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <a href="#top" className="flex items-center gap-3" aria-label="Rivetwork home">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[linear-gradient(140deg,#1F4FD8_0%,#0A1220_120%)]">
            <svg viewBox="0 0 24 24" className="h-6 w-6" role="img" aria-label="Rivetwork bolt mark">
              <circle cx="12" cy="12" r="9" fill="none" stroke="#FF9F1C" strokeWidth="1.6" />
              <path d="M12 5.5 8.4 12.6h3l-.9 5.6 4.6-7.4h-3.2z" fill="#FFFFFF" />
            </svg>
          </span>
          <span className="text-lg font-black tracking-tight text-[#0A1220]">
            Rivetwork
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {NAV.map((entry) => (
            <a
              key={entry.href}
              href={entry.href}
              className="text-sm font-semibold text-[#3D4658] transition hover:text-[#1F4FD8]"
            >
              {entry.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#walkthrough"
            className="hidden text-sm font-semibold text-[#3D4658] transition hover:text-[#1F4FD8] sm:inline"
          >
            Sign in
          </a>
          <a
            href="#walkthrough"
            className="rounded-xl bg-[#1F4FD8] px-4 py-2.5 text-sm font-bold text-white shadow-[0_10px_24px_-12px_rgba(31,79,216,0.9)] transition hover:bg-[#1A41B8]"
          >
            Book a walkthrough
          </a>
        </div>
      </div>
    </header>
  )
}
