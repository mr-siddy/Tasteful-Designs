const NAV = [
  { label: 'Supper', href: '#supper' },
  { label: 'Friday fish fry', href: '#fish-fry' },
  { label: 'The bar', href: '#bar' },
  { label: 'Lantern Room', href: '#lantern-room' },
  { label: 'Visit', href: '#visit' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#1C4535]/25 bg-[#0C1F17]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-6 px-5 py-4">
        <a href="#top" className="flex items-center gap-3" data-testid="brand-link">
          <svg
            viewBox="0 0 48 48"
            role="img"
            aria-label="The Blue Iris Supper Club mark: a brass iris blossom"
            className="h-10 w-10 shrink-0"
          >
            <circle cx="24" cy="24" r="23" fill="#132D22" stroke="#D2A24C" strokeWidth="1.5" />
            <path
              d="M24 9c4 6 4 11 0 16-4-5-4-10 0-16Z"
              fill="#8FA9DA"
            />
            <path
              d="M24 25c-5-4-11-4-15 1 5 5 11 5 15-1Z"
              fill="#6C86BD"
            />
            <path d="M24 25c5-4 11-4 15 1-5 5-11 5-15-1Z" fill="#6C86BD" />
            <path
              d="M24 25c-2 5-2 9 0 14 2-5 2-9 0-14Z"
              fill="#D2A24C"
            />
            <circle cx="24" cy="25" r="2.6" fill="#E8C87E" />
          </svg>
          <span className="leading-tight">
            <span className="block text-[10px] uppercase tracking-[0.34em] text-[#D2A24C]">
              Est. 1946
            </span>
            <span className="block text-lg font-semibold tracking-tight text-[#F6F1E4]">
              The Blue Iris
            </span>
          </span>
        </a>

        <nav aria-label="Primary" className="ml-auto hidden items-center gap-7 lg:flex">
          {NAV.map((entry) => (
            <a
              key={entry.href}
              href={entry.href}
              data-testid="nav-link"
              className="text-sm font-medium text-[#D9D2C0] transition-colors hover:text-[#E8C87E]"
            >
              {entry.label}
            </a>
          ))}
        </nav>

        <a
          href="tel:5550179"
          className="ml-auto hidden text-sm font-medium text-[#D9D2C0] transition-colors hover:text-[#E8C87E] lg:ml-0 lg:block"
        >
          (555) 0179
        </a>
        <a
          href="#reserve"
          data-testid="header-reserve"
          className="rounded-full bg-[#D2A24C] px-5 py-2.5 text-sm font-semibold text-[#17130F] transition-colors hover:bg-[#E8C87E]"
        >
          Reserve a table
        </a>
      </div>
    </header>
  )
}
