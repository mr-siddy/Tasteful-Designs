const NAV = [
  { label: 'Programs', href: '#programs' },
  { label: 'Timetable', href: '#timetable' },
  { label: 'Coaching', href: '#method' },
  { label: 'Membership', href: '#membership' },
  { label: 'Questions', href: '#questions' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#E2D8C6] bg-[#FBF7F1]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-6 px-5 py-4">
        <a href="#hero" data-testid="brand-link" className="flex items-center gap-3">
          <svg
            viewBox="0 0 48 48"
            role="img"
            aria-label="Redpine Strength Co. pine mark"
            className="h-10 w-10"
          >
            <circle cx="24" cy="24" r="23" fill="#123B31" />
            <path d="M24 9 L32 24 H27 L33 35 H15 L21 24 H16 Z" fill="#E8A33D" />
            <rect x="21.5" y="35" width="5" height="5" rx="1.4" fill="#D2683F" />
          </svg>
          <span className="leading-tight">
            <span className="block text-base font-semibold tracking-tight text-[#123B31]">
              Redpine Strength Co.
            </span>
            <span className="block text-[11px] uppercase tracking-[0.22em] text-[#7B7263]">
              Fairmount Hill
            </span>
          </span>
        </a>

        <nav aria-label="Primary" className="ml-auto hidden items-center gap-7 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              data-testid="nav-link"
              className="text-sm font-medium text-[#3F3A31] hover:text-[#123B31]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="tel:5550172"
          className="hidden text-sm font-medium text-[#2F6B57] lg:inline"
        >
          (555) 0172
        </a>
        <a
          href="#start"
          data-testid="header-cta"
          className="ml-auto rounded-full bg-[#123B31] px-5 py-2.5 text-sm font-semibold text-[#FBF7F1] shadow-sm transition hover:bg-[#0B241E] md:ml-0"
        >
          Book a free intro
        </a>
      </div>
    </header>
  )
}
