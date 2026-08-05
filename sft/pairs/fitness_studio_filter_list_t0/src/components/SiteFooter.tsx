import { BrandMark } from './SiteHeader'

const COLUMNS = [
  {
    heading: 'Train here',
    links: [
      { href: '#programs', label: 'Programs and prices' },
      { href: '#schedule', label: 'This week on the floor' },
      { href: '#start', label: 'How to start' },
      { href: '#book-intro', label: 'Book a free intro' },
    ],
  },
  {
    heading: 'The studio',
    links: [
      { href: '#coaches', label: 'Meet the coaches' },
      { href: '#the-room', label: 'The room' },
      { href: '#members', label: 'Member stories' },
      { href: '#questions', label: 'Common questions' },
    ],
  },
  {
    heading: 'Get in touch',
    links: [
      { href: 'tel:+14105550176', label: '(410) 555 0176' },
      { href: 'mailto:hello@tidewaterstrength.com', label: 'hello@tidewaterstrength.com' },
      { href: '#the-room', label: '92 Ropewalk Street' },
      { href: '#the-room', label: "Fell's Landing, Baltimore MD 21231" },
    ],
  },
]

const HOURS = [
  'Monday to Thursday · 5:30am – 8:30pm',
  'Friday · 5:30am – 7:00pm',
  'Saturday · 7:00am – 1:00pm',
  'Sunday · 8:00am – 12:00pm',
]

export function SiteFooter() {
  return (
    <footer className="bg-[#0B2A33] text-[#F7F2EA]">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_repeat(3,1fr)]">
          <div>
            <div className="flex items-center gap-3">
              <BrandMark className="h-10 w-10" />
              <span className="leading-tight">
                <span className="block text-lg font-black tracking-tight">Tidewater</span>
                <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-[#F7F2EA]/60">
                  Strength &amp; Movement
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-[#F7F2EA]/70">
              A coached strength and conditioning room in an old rope works on the Fell&apos;s
              Landing waterfront. Twelve people to a class, four coaches, and a plan you keep on
              paper.
            </p>
            <h3 className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-[#F7F2EA]/50">
              Opening hours
            </h3>
            <ul className="mt-3 space-y-1.5 text-sm text-[#F7F2EA]/70">
              {HOURS.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>

          {COLUMNS.map((column) => (
            <nav key={column.heading} aria-label={column.heading}>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#F7F2EA]/50">
                {column.heading}
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-[#F7F2EA]/75 hover:text-[#E4682A]">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-[#F7F2EA]/15 pt-8 text-xs text-[#F7F2EA]/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Tidewater Strength &amp; Movement LLC. Founded 2017 by Marisol Reyes.</p>
          <ul className="flex flex-wrap gap-6">
            <li>
              <a href="#questions" className="hover:text-[#F7F2EA]">
                Membership terms
              </a>
            </li>
            <li>
              <a href="#questions" className="hover:text-[#F7F2EA]">
                Privacy
              </a>
            </li>
            <li>
              <a href="#the-room" className="hover:text-[#F7F2EA]">
                Accessibility at 92 Ropewalk Street
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
