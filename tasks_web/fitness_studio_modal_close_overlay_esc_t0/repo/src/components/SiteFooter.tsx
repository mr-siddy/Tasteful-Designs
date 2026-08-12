import { PressMark, PinIcon, PhoneIcon, ClockIcon } from './Icons'

const COLUMNS = [
  {
    title: 'The timetable',
    links: [
      { label: 'The Ride · 45 minutes', href: '#classes' },
      { label: 'Ride + Lift · 60 minutes', href: '#classes' },
      { label: 'Press Strength · 50 minutes', href: '#classes' },
      { label: 'Sprint Deck · 30 minutes', href: '#classes' },
      { label: 'Long Haul · 75 minutes', href: '#classes' },
      { label: 'Reset · 40 minutes', href: '#classes' },
    ],
  },
  {
    title: 'The studio',
    links: [
      { label: 'The room and the sound', href: '#room' },
      { label: 'Meet the coaches', href: '#coaches' },
      { label: 'How a first visit goes', href: '#first-visit' },
      { label: 'Membership tiers', href: '#membership' },
      { label: 'Member stories', href: '#stories' },
    ],
  },
  {
    title: 'Before you come',
    links: [
      { label: 'Book the £9 intro ride', href: '#intro' },
      { label: 'Parking and the bus 14', href: '#faq' },
      { label: 'Shoes, towels and lockers', href: '#faq' },
      { label: 'Coming back from injury', href: '#faq' },
      { label: 'Cancellations', href: '#faq' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-[#101826] text-[#faf5ee]">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_repeat(3,0.9fr)]">
          <div>
            <div className="flex items-center gap-3">
              <PressMark className="h-12 w-12" />
              <h2 className="text-lg font-black uppercase leading-tight tracking-[0.14em]">
                Pressroom
                <span className="block text-[11px] font-semibold tracking-[0.3em] text-[#d94a2b]">
                  Athletic
                </span>
              </h2>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-[#faf5ee]/60">
              Coached indoor cycling, strength and recovery in the old Marlowe Gazette printworks.
              Twenty-four bikes, six formats, and a coach who knows your name by the third visit.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-[#faf5ee]/75">
              <li className="flex gap-3">
                <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#d94a2b]" />
                <span>
                  88 Hallam Fields Road
                  <br />
                  Marlowe Quarter, MQ2 4RN
                </span>
              </li>
              <li className="flex gap-3">
                <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#d94a2b]" />
                <a href="tel:+441615500419" className="hover:text-[#efa63c]">
                  0161 550 0419
                </a>
              </li>
              <li className="flex gap-3">
                <ClockIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#d94a2b]" />
                <span>Weekdays from 5:30 am · Sundays until 4:00 pm</span>
              </li>
            </ul>
          </div>

          {COLUMNS.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h3 className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#efa63c]">
                {column.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-[#faf5ee]/70 transition hover:text-[#faf5ee]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-[#faf5ee]/12 pt-8 text-xs text-[#faf5ee]/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Pressroom Athletic Ltd · registered in England, company 11482093</p>
          <ul className="flex flex-wrap gap-5">
            <li>
              <a href="#faq" className="hover:text-[#faf5ee]">
                Membership terms
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-[#faf5ee]">
                Privacy notice
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-[#faf5ee]">
                Accessibility at the studio
              </a>
            </li>
            <li>
              <a href="#top" className="hover:text-[#faf5ee]">
                Back to the top
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
