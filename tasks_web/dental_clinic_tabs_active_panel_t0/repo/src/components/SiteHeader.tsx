import { ToothLeafMark } from './Icons'

const DESTINATIONS = [
  { href: '#treatments', label: 'Treatments' },
  { href: '#pathways', label: 'Care pathways' },
  { href: '#team', label: 'Our dentists' },
  { href: '#membership', label: 'Membership' },
  { href: '#faq', label: 'Questions' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-[#123B36]/10 bg-[#FBF7F0]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-6 px-5 py-4">
        <a href="#top" className="flex items-center gap-3" data-testid="brand-link">
          <ToothLeafMark />
          <span className="leading-tight">
            <span className="block text-lg font-semibold tracking-tight text-[#123B36]">Marigold Dental Co.</span>
            <span className="block text-xs uppercase tracking-[0.2em] text-[#8A7A5C]">Fernbank · since 2011</span>
          </span>
        </a>

        <nav aria-label="Primary" className="ml-auto hidden items-center gap-7 lg:flex">
          {DESTINATIONS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              data-testid="nav-link"
              className="text-sm font-medium text-[#123B36]/75 transition hover:text-[#123B36]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3 lg:ml-0">
          <a href="tel:5550172" className="hidden text-sm font-semibold text-[#123B36] sm:block">
            555 0172
          </a>
          <a
            href="#book"
            data-testid="header-cta"
            className="rounded-full bg-[#123B36] px-5 py-2.5 text-sm font-semibold text-[#FBF7F0] shadow-sm transition hover:bg-[#0C2B27]"
          >
            Book a visit
          </a>
        </div>
      </div>
    </header>
  )
}
