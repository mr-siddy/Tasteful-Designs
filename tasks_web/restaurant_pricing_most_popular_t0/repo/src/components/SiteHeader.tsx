const NAV = [
  { label: 'The hearth', href: '#hearth' },
  { label: 'Menu', href: '#menu' },
  { label: 'Private dining', href: '#packages' },
  { label: 'The room', href: '#room' },
  { label: 'Visit', href: '#visit' },
]

export function BrandMark({ className = 'h-9 w-9' }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} role="img" aria-label="Ember and Rye">
      <defs>
        <linearGradient id="brand-flame" x1="0" y1="1" x2="0.4" y2="0">
          <stop offset="0%" stopColor="#b8431a" />
          <stop offset="55%" stopColor="#e2622a" />
          <stop offset="100%" stopColor="#e8b04b" />
        </linearGradient>
      </defs>
      <circle cx="24" cy="24" r="23" fill="#171310" />
      <path
        d="M24 9c4.6 5.2 6.8 9.4 6.8 13.2 0 2.3-.9 4.2-2.4 5.6.4-2.6-.4-4.9-2.4-6.9.3 4.6-1.4 7.4-4.3 9.4-2.1 1.4-3.2 3.1-3.2 5 0 3.6 3.1 6.4 7.5 6.4 5.4 0 9.4-3.9 9.4-9.3 0-7.3-4.9-14.1-11.4-23.4Z"
        fill="url(#brand-flame)"
      />
      <path
        d="M17.4 22.6c-1.9 3-2.9 5.8-2.9 8.3 0 2.6 1 4.8 2.7 6.4-.7-3.4.2-6.3 2.7-8.8-1.6-1.7-2.4-3.7-2.5-5.9Z"
        fill="#e8b04b"
        opacity="0.75"
      />
      <path d="M6 40h36" stroke="#e2622a" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    </svg>
  )
}

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-[#171310]/10 bg-[#f7f2ea]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-6 px-6 py-4">
        <a href="#top" data-testid="brand-link" className="flex items-center gap-3">
          <BrandMark />
          <span className="leading-tight">
            <span className="block font-serif text-lg font-semibold tracking-tight">Ember &amp; Rye</span>
            <span className="block text-[11px] uppercase tracking-[0.22em] text-[#6f645b]">
              Halstead Row
            </span>
          </span>
        </a>

        <nav aria-label="Primary" className="ml-auto hidden items-center gap-7 md:flex">
          {NAV.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-testid="nav-link"
              className="text-sm font-medium text-[#3b322b] transition hover:text-[#b8431a]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3 md:ml-0">
          <a
            href="tel:+14015550188"
            className="hidden text-sm font-medium text-[#6f645b] hover:text-[#171310] sm:block"
          >
            (401) 555-0188
          </a>
          <a
            href="#visit"
            data-testid="header-cta"
            className="rounded-xl bg-[#171310] px-4 py-2.5 text-sm font-semibold text-[#f7f2ea] shadow-sm transition hover:bg-[#b8431a]"
          >
            Reserve a table
          </a>
        </div>
      </div>
    </header>
  )
}
