const NAV = [
  { label: 'Services', href: '#services' },
  { label: 'Your visit', href: '#visit' },
  { label: 'Our team', href: '#team' },
  { label: 'Fees & plans', href: '#plans' },
  { label: 'Questions', href: '#faq' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-teal-900/10 bg-stone-50/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-6 px-5 py-4">
        <a href="#top" data-testid="brand" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-800 to-teal-600 shadow-sm">
            <svg
              viewBox="0 0 32 32"
              className="h-6 w-6 text-amber-300"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M9 4c-3 0-5 2.6-5 6.2 0 4.4 1.5 6.6 2.4 10.6.7 3 .8 6.7 2.8 6.7 1.9 0 1.9-4.4 2.9-7.2.5-1.4 1.1-2.1 1.9-2.1s1.4.7 1.9 2.1c1 2.8 1 7.2 2.9 7.2 2 0 2.1-3.7 2.8-6.7.9-4 2.4-6.2 2.4-10.6C24 6.6 22 4 19 4c-1.7 0-2.4.8-3 1.1-.6.3-1.4.3-2 0C13.4 4.8 12.7 4 11 4" />
            </svg>
          </span>
          <span className="leading-tight">
            <span className="block text-lg font-semibold tracking-tight">Alder Court Dental</span>
            <span className="block text-xs font-medium uppercase tracking-[0.18em] text-teal-700">
              Kestrel Park
            </span>
          </span>
        </a>

        <nav aria-label="Main" className="ml-auto hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              data-testid="nav-link"
              className="text-sm font-medium text-teal-900/80 transition hover:text-teal-700"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3 lg:ml-0">
          <a
            href="tel:+12065550142"
            className="hidden items-center gap-2 text-sm font-semibold text-teal-800 sm:flex"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M4 5c0-.6.4-1 1-1h2.6c.5 0 .9.3 1 .8l.8 3c.1.4 0 .8-.4 1l-1.6 1.2a12 12 0 0 0 5.6 5.6l1.2-1.6c.2-.3.6-.5 1-.4l3 .8c.5.1.8.5.8 1V19c0 .6-.4 1-1 1h-1C8.8 20 4 15.2 4 6Z" />
            </svg>
            (206) 555-0142
          </a>
          <a
            href="#book"
            data-testid="header-cta"
            className="rounded-full bg-teal-800 px-5 py-2.5 text-sm font-semibold text-stone-50 shadow-sm transition hover:bg-teal-700"
          >
            Request a visit
          </a>
        </div>
      </div>
    </header>
  )
}
