import { HarbourMark, ClockIcon } from './Icons'

const NAV = [
  { label: 'Treatments', href: '#treatments' },
  { label: 'Patient stories', href: '#stories' },
  { label: 'Implants', href: '#implants' },
  { label: 'Our team', href: '#team' },
  { label: 'Membership', href: '#membership' },
  { label: 'Visit us', href: '#visit' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#0F2E4A]/10 bg-[#FAF6F1]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-6 px-5 py-4">
        <a href="#top" className="flex items-center gap-3">
          <HarbourMark />
          <span className="leading-tight">
            <span className="block text-lg font-bold tracking-tight text-[#0F2E4A]">Harbourline Dental</span>
            <span className="block text-xs font-medium uppercase tracking-[0.2em] text-[#3FA394]">Saltmere Quay</span>
          </span>
        </a>

        <nav aria-label="Primary" className="ml-auto hidden lg:block">
          <ul className="flex items-center gap-7">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm font-medium text-[#2B3A44] transition hover:text-[#F2683C]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-4 lg:ml-0">
          <span className="hidden items-center gap-2 text-sm font-medium text-[#2B3A44] sm:flex">
            <ClockIcon className="h-4 w-4 text-[#3FA394]" />
            Open till 7pm Thursdays
          </span>
          <a
            href="#visit"
            data-testid="header-book-cta"
            className="rounded-full bg-[#F2683C] px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-[#F2683C]/30 transition hover:bg-[#DD5629]"
          >
            Book a visit
          </a>
        </div>
      </div>
    </header>
  )
}
