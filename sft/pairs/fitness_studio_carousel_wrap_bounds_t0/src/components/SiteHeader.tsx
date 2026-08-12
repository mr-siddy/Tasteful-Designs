import { FoundryMark } from './Icons'

const DESTINATIONS = [
  { label: 'Programs', href: '#programs' },
  { label: 'Members', href: '#stories' },
  { label: 'How we coach', href: '#method' },
  { label: 'The room', href: '#facility' },
  { label: 'Membership', href: '#membership' },
]

export default function SiteHeader() {
  return (
    <header
      data-testid="site-header"
      className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/90 backdrop-blur"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <a href="#top" className="flex items-center gap-3 text-slate-50">
          <FoundryMark />
          <span className="leading-tight">
            <span className="block text-base font-black tracking-tight">Foundry Hill</span>
            <span className="block text-[11px] uppercase tracking-[0.22em] text-lime-300">Strength Co.</span>
          </span>
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-7 text-sm font-medium text-slate-300">
            {DESTINATIONS.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition hover:text-lime-300">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <a href="tel:+14105550188" className="hidden text-sm font-medium text-slate-300 hover:text-lime-300 sm:block">
            (410) 555-0188
          </a>
          <a
            href="#join"
            className="rounded-full bg-lime-300 px-5 py-2.5 text-sm font-bold text-slate-950 shadow-lg shadow-lime-300/20 transition hover:bg-lime-200"
          >
            Book a free session
          </a>
        </div>
      </div>
    </header>
  )
}
