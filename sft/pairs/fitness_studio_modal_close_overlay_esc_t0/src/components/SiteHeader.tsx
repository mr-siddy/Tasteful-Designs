import { PressMark, PhoneIcon } from './Icons'

const NAV = [
  { label: 'The classes', href: '#classes' },
  { label: 'Intro ride', href: '#intro' },
  { label: 'The room', href: '#room' },
  { label: 'Coaches', href: '#coaches' },
  { label: 'Membership', href: '#membership' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#101826]/10 bg-[#faf5ee]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-6 px-5 py-4">
        <a href="#top" className="flex items-center gap-3" data-testid="brand-link">
          <PressMark className="h-11 w-11" />
          <span className="leading-tight">
            <span className="block text-[15px] font-black uppercase tracking-[0.18em] text-[#101826]">
              Pressroom
            </span>
            <span className="block text-[11px] font-semibold uppercase tracking-[0.3em] text-[#d94a2b]">
              Athletic
            </span>
          </span>
        </a>

        <nav aria-label="Main" className="ml-auto hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-[#40485a] transition hover:text-[#d94a2b]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="tel:+441615500419"
          className="ml-auto hidden items-center gap-2 text-sm font-semibold text-[#101826] lg:ml-0 lg:flex"
        >
          <PhoneIcon className="h-4 w-4 text-[#d94a2b]" />
          0161 550 0419
        </a>

        <a
          href="#intro"
          className="rounded-full bg-[#101826] px-5 py-2.5 text-sm font-bold text-[#faf5ee] shadow-[0_10px_24px_-12px_rgba(16,24,38,0.9)] transition hover:bg-[#d94a2b]"
        >
          Book an intro ride
        </a>
      </div>
    </header>
  )
}
