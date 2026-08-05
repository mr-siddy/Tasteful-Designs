const NAV = [
  { label: 'Programs', href: '#programs' },
  { label: 'Timetable', href: '#timetable' },
  { label: 'Method', href: '#method' },
  { label: 'Coaches', href: '#coaches' },
  { label: 'Questions', href: '#faq' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-stone-800 bg-stone-950/95 text-stone-100 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-6 px-5 py-4">
        <a href="#top" className="flex items-center gap-3" data-testid="brand-mark">
          <svg
            viewBox="0 0 40 40"
            width="36"
            height="36"
            aria-hidden="true"
            className="shrink-0"
          >
            <rect x="1" y="1" width="38" height="38" rx="11" fill="#0c0a09" stroke="#fbbf24" />
            <path d="M9 20h4v-6h3v12h-3v-4H9z" fill="#fbbf24" />
            <path d="M31 20h-4v-6h-3v12h3v-4h4z" fill="#fbbf24" />
            <rect x="17" y="18.5" width="6" height="3" rx="1.5" fill="#f5f5f4" />
          </svg>
          <span className="leading-tight">
            <span className="block text-sm font-black uppercase tracking-[0.2em]">Northline</span>
            <span className="block text-[11px] uppercase tracking-[0.28em] text-amber-400">
              Strength Co.
            </span>
          </span>
        </a>

        <nav aria-label="Main" className="ml-auto hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              data-testid="nav-link"
              className="text-sm font-medium text-stone-300 transition-colors hover:text-amber-400"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="tel:+61390428817"
          className="ml-auto hidden text-sm font-medium text-stone-400 hover:text-stone-100 lg:ml-0 lg:block"
        >
          (03) 9042 8817
        </a>

        <a
          href="#trial"
          data-testid="header-cta"
          className="rounded-full bg-amber-400 px-5 py-2.5 text-sm font-bold text-stone-950 transition-colors hover:bg-amber-300"
        >
          Book a free trial
        </a>
      </div>
    </header>
  )
}
