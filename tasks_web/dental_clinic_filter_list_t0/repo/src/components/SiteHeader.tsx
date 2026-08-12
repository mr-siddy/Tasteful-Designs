import { TidewaterMark } from './Icons'

const NAV = [
  { label: 'Treatments', href: '#treatments' },
  { label: 'Same-day crowns', href: '#mill' },
  { label: 'Our team', href: '#team' },
  { label: 'Membership', href: '#membership' },
  { label: 'Questions', href: '#faq' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-[#12263F]/10 bg-[#F1F5F7]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-6 px-6 py-4">
        <a href="#hero" className="flex items-center gap-3">
          <TidewaterMark className="h-11 w-11" />
          <span className="leading-tight">
            <span className="block text-lg font-semibold tracking-tight text-[#12263F]">
              Tidewater Dental Studio
            </span>
            <span className="block text-xs font-medium uppercase tracking-[0.18em] text-[#5B7089]">
              Marlowe Quarter
            </span>
          </span>
        </a>

        <nav aria-label="Main" className="ml-auto hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[#12263F]/80 transition hover:text-[#F26D5B]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-4 lg:ml-0">
          <a href="tel:5550142" className="hidden text-sm font-semibold text-[#12263F] sm:block">
            (555) 014-2200
          </a>
          <a
            href="#book"
            className="rounded-full bg-[#F26D5B] px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-[#F26D5B]/30 transition hover:bg-[#e05a48]"
          >
            Book a visit
          </a>
        </div>
      </div>
    </header>
  )
}
