import { WeirMark } from './WeirMark'

const DESTINATIONS = [
  { href: '#modules', label: 'Platform' },
  { href: '#workspace', label: 'How it works' },
  { href: '#integrations', label: 'Integrations' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'Questions' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-[#08312F]/10 bg-[#FBF8F3]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-8 px-6 py-4">
        <a href="#top" className="flex shrink-0 items-center gap-3" data-testid="brand-link">
          <WeirMark className="h-9 w-9" />
          <span className="text-lg font-semibold tracking-tight">Weirline</span>
        </a>

        <nav aria-label="Primary" className="hidden flex-1 md:block">
          <ul className="flex items-center gap-7 text-[15px] text-[#08312F]/70">
            {DESTINATIONS.map((d) => (
              <li key={d.href}>
                <a href={d.href} className="transition hover:text-[#08312F]">
                  {d.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-4">
          <a href="#login" className="hidden text-[15px] text-[#08312F]/70 hover:text-[#08312F] sm:block">
            Operator sign in
          </a>
          <a
            href="#book"
            data-testid="header-cta"
            className="rounded-full bg-[#08312F] px-5 py-2.5 text-[15px] font-medium text-[#FBF8F3] shadow-sm transition hover:bg-[#0B4340]"
          >
            Book a walkthrough
          </a>
        </div>
      </div>
    </header>
  )
}
