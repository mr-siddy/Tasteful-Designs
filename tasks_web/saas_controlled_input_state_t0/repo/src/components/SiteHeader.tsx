import { IconArrowRight, LogoMark } from './icons'

const NAV = [
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'How it works', href: '#workflow' },
  { label: 'Set up', href: '#setup' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-[#0B1220]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-6 px-6 py-4">
        <a href="#top" className="flex items-center gap-2.5 text-white">
          <LogoMark />
          <span className="text-lg font-semibold tracking-tight">Postlude</span>
        </a>
        <nav aria-label="Primary" className="hidden flex-1 items-center gap-7 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-300 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-3 md:ml-0">
          <a href="#setup" className="hidden text-sm font-medium text-slate-300 hover:text-white sm:block">
            Sign in
          </a>
          <a
            href="#setup"
            data-testid="header-cta"
            className="inline-flex items-center gap-1.5 rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-[#0B1220] transition hover:bg-orange-400"
          >
            Start a review
            <IconArrowRight />
          </a>
        </div>
      </div>
    </header>
  )
}
