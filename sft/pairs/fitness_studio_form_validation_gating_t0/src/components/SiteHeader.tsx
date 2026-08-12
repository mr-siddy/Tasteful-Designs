import { SablewoodMark } from './Icons'

const NAV = [
  { href: '#classes', label: 'Classes' },
  { href: '#memberships', label: 'Memberships' },
  { href: '#studio', label: 'The studio' },
  { href: '#teachers', label: 'Teachers' },
  { href: '#schedule', label: 'Schedule' },
]

export default function SiteHeader() {
  return (
    <header
      data-testid="site-header"
      className="sticky top-0 z-40 border-b border-[#E4DCD0] bg-[#FAF6F0]/95 backdrop-blur"
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <a href="#top" className="flex items-center gap-3" data-testid="brand">
          <SablewoodMark title="Sablewood Movement Co." />
          <span className="leading-tight">
            <span className="block text-base font-black tracking-tight text-[#16211C]">
              Sablewood Movement Co.
            </span>
            <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7A8A80]">
              Delaney Wharf · est. 2017
            </span>
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-[#3C4A42] transition hover:text-[#1F4A3C]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="tel:+15550148820"
            className="hidden text-sm font-semibold text-[#3C4A42] transition hover:text-[#1F4A3C] sm:block"
          >
            (555) 014-8820
          </a>
          <a
            href="#intro"
            className="rounded-full bg-[#1F4A3C] px-5 py-2.5 text-sm font-bold text-[#FAF6F0] shadow-[0_10px_24px_-12px_rgba(31,74,60,0.9)] transition hover:bg-[#173A2F]"
          >
            Book an intro session
          </a>
        </div>
      </div>
    </header>
  )
}
