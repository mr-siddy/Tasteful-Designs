import { ClubMark } from './Icons'
import { Shell } from './PageKit'

const NAV = [
  { href: '#programs', label: 'Programs' },
  { href: '#membership', label: 'Membership' },
  { href: '#method', label: 'How coaching works' },
  { href: '#studio', label: 'The studio' },
  { href: '#coaches', label: 'Coaches' },
  { href: '#faq', label: 'Questions' },
]

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#E2D6C6] bg-[#FBF7F1]/95 backdrop-blur">
      <Shell className="flex h-20 items-center justify-between gap-6">
        <a href="#top" data-testid="brand-link" className="flex items-center gap-3">
          <ClubMark />
          <span className="leading-tight">
            <span className="block text-base font-black tracking-tight text-[#14181D]">Foundry Row</span>
            <span className="block text-[11px] font-semibold uppercase tracking-[0.22em] text-[#7A6E60]">
              Strength Club
            </span>
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              data-testid="nav-link"
              className="text-sm font-semibold text-[#4A4438] transition-colors hover:text-[#D9481F]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+13125550184"
            data-testid="header-phone"
            className="hidden text-sm font-semibold text-[#4A4438] sm:block"
          >
            (312) 555-0184
          </a>
          <a
            href="#intro"
            data-testid="header-cta"
            className="rounded-full bg-[#14181D] px-5 py-2.5 text-sm font-bold text-[#FBF7F1] shadow-sm transition-colors hover:bg-[#D9481F]"
          >
            Book a free intro
          </a>
        </div>
      </Shell>
    </header>
  )
}
