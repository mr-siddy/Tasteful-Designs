const NAV = [
  { label: 'Treatments', href: '#treatments' },
  { label: 'Our fees', href: '#fees' },
  { label: 'The practice', href: '#practice' },
  { label: 'Meet the team', href: '#team' },
  { label: 'Questions', href: '#questions' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-[#E3DCD0] bg-[#FBF9F5]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-6 px-5 py-4">
        <a href="#top" data-testid="brand-mark" className="flex items-center gap-3">
          <svg
            viewBox="0 0 48 48"
            role="img"
            aria-label="Bramble Court Dental mark: a tooth inside a bramble leaf"
            className="h-11 w-11 flex-none"
          >
            <circle cx="24" cy="24" r="23" fill="#332A56" />
            <path
              d="M24 13c4.6 0 7.5 2.4 7.5 6.6 0 3.2-1 5.6-1.8 9.1-.7 3.1-1.2 6.3-3.1 6.3-1.6 0-1.8-2.4-2.6-2.4-.8 0-1 2.4-2.6 2.4-1.9 0-2.4-3.2-3.1-6.3-.8-3.5-1.8-5.9-1.8-9.1 0-4.2 2.9-6.6 7.5-6.6Z"
              fill="#FBF9F5"
            />
            <path
              d="M31 15.5c2.6-1.2 5-1 6.4.3-1 2.2-3.2 3.6-5.7 3.5"
              fill="#E4735B"
            />
            <circle cx="17.5" cy="20" r="1.6" fill="#E4735B" />
          </svg>
          <span className="leading-tight">
            <span className="block text-lg font-semibold tracking-tight text-[#332A56]">
              Bramble Court Dental
            </span>
            <span className="block text-[11px] uppercase tracking-[0.22em] text-[#8B8375]">
              Wyeford Quarter · since 2009
            </span>
          </span>
        </a>

        <nav aria-label="Primary" className="ml-auto hidden lg:block">
          <ul className="flex items-center gap-7 text-sm font-medium text-[#4A4438]">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  data-testid="nav-link"
                  className="transition-colors hover:text-[#5B4BA8]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-3 lg:ml-0">
          <a
            href="tel:5550164"
            data-testid="header-phone"
            className="hidden items-center gap-2 rounded-full border border-[#E3DCD0] px-4 py-2 text-sm font-medium text-[#332A56] sm:inline-flex"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
              <path
                d="M5 4h4l2 5-2.5 1.5a12 12 0 0 0 5 5L15 13l5 2v4a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinejoin="round"
              />
            </svg>
            (555) 0164
          </a>
          <a
            href="#book"
            data-testid="header-cta"
            className="rounded-full bg-[#332A56] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#453a6f]"
          >
            Book a check-up
          </a>
        </div>
      </div>
    </header>
  )
}
