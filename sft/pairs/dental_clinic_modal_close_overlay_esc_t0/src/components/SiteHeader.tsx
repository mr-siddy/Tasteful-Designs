import { AnchorMark, PhoneIcon, ToothMark } from './Icons'

const NAV = [
  { label: 'Treatments', href: '#treatments' },
  { label: 'Book a visit', href: '#booking' },
  { label: 'The studio', href: '#comfort' },
  { label: 'Our team', href: '#team' },
  { label: 'Membership', href: '#membership' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#E4D8C8] bg-[#FAF6F1]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-6 px-6 py-4">
        <a href="#top" className="flex items-center gap-3 text-[#0B2540]">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0B2540] text-[#F6E7D6]">
            <ToothMark className="h-6 w-6" />
          </span>
          <span className="leading-tight">
            <span className="block text-lg font-semibold tracking-tight">Alder &amp; Bay</span>
            <span className="block text-[11px] uppercase tracking-[0.2em] text-[#7A6A58]">Dental Studio</span>
          </span>
        </a>

        <nav aria-label="Primary" className="ml-auto hidden items-center gap-7 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[#3E5568] transition hover:text-[#C2703D]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3 md:ml-0">
          <a
            href="tel:+12065550142"
            className="hidden items-center gap-2 text-sm font-semibold text-[#0B2540] sm:flex"
          >
            <PhoneIcon className="h-4 w-4 text-[#C2703D]" />
            (206) 555-0142
          </a>
          <a
            href="#booking"
            className="inline-flex items-center gap-2 rounded-full bg-[#C2703D] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#A85B2D]"
          >
            <AnchorMark className="h-4 w-4" />
            New patients
          </a>
        </div>
      </div>
    </header>
  )
}
