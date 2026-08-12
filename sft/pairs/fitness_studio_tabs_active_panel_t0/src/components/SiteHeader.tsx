import { KnotMark } from './icons'

const NAV = [
  { href: '#tracks', label: 'Training' },
  { href: '#timetable', label: 'Timetable' },
  { href: '#boathouse', label: 'The room' },
  { href: '#coaches', label: 'Coaches' },
  { href: '#membership', label: 'Membership' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-[#0b3a41]/15 bg-[#faf6ef]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-6 px-5 py-4">
        <a href="#top" className="flex items-center gap-3 text-[#0b3a41]">
          <KnotMark className="h-9 w-9 text-[#12626c]" />
          <span className="leading-tight">
            <span className="block text-base font-semibold tracking-tight">Tidemark Row Club</span>
            <span className="block text-[11px] uppercase tracking-[0.22em] text-[#5b7c81]">
              Bellhaven Locks
            </span>
          </span>
        </a>

        <nav aria-label="Primary" className="ml-auto hidden items-center gap-7 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[#2c565c] transition hover:text-[#e0813d]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#book"
          data-testid="header-cta"
          className="ml-auto rounded-full bg-[#0b3a41] px-5 py-2.5 text-sm font-semibold text-[#faf6ef] shadow-sm transition hover:bg-[#12626c] md:ml-0"
        >
          Book a landing session
        </a>
      </div>
    </header>
  )
}
