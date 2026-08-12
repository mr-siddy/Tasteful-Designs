import { SablewoodMark } from './Icons'

const COLUMNS = [
  {
    heading: 'Classes',
    links: [
      { href: '#classes', label: 'Reformer Foundations' },
      { href: '#classes', label: 'Reformer Power' },
      { href: '#classes', label: 'Heated Vinyasa' },
      { href: '#classes', label: 'Slow Flow & Mobility' },
      { href: '#classes', label: 'Barbell Strength' },
      { href: '#classes', label: 'Postnatal Return' },
    ],
  },
  {
    heading: 'The studio',
    links: [
      { href: '#studio', label: 'Studio one — reformers' },
      { href: '#studio', label: 'Studio two — heated room' },
      { href: '#studio', label: 'The barbell loft' },
      { href: '#teachers', label: 'Meet the teachers' },
      { href: '#schedule', label: 'This week&rsquo;s timetable' },
    ],
  },
  {
    heading: 'Getting started',
    links: [
      { href: '#intro', label: 'Book an intro session' },
      { href: '#on-ramp', label: 'Your first six weeks' },
      { href: '#memberships', label: 'Memberships and prices' },
      { href: '#faq', label: 'Common questions' },
    ],
  },
]

const HOURS = [
  { day: 'Monday to Thursday', time: '6:00am — 8:00pm' },
  { day: 'Friday', time: '6:00am — 7:00pm' },
  { day: 'Saturday', time: '7:30am — 2:00pm' },
  { day: 'Sunday', time: '8:00am — 1:00pm' },
]

export default function SiteFooter() {
  return (
    <footer data-testid="site-footer" className="bg-[#16211C] text-[#C7D8CF]">
      <div className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1.1fr]">
          <div>
            <div className="flex items-center gap-3">
              <SablewoodMark title="Sablewood Movement Co." className="h-11 w-11" />
              <span className="text-base font-black tracking-tight text-[#FAF6F0]">
                Sablewood Movement Co.
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              Reformer Pilates, heated yoga and coached barbell strength on the
              top floor of the old rope works. Twelve people a class since 2017.
            </p>
            <address className="mt-5 not-italic text-sm leading-relaxed">
              218 Delaney Wharf, top floor
              <br />
              Green door beside the loading bay
              <br />
              <a href="tel:+15550148820" className="font-bold text-[#FAF6F0] hover:underline">
                (555) 014-8820
              </a>
              <br />
              <a href="mailto:desk@sablewoodmovement.co" className="hover:underline">
                desk@sablewoodmovement.co
              </a>
            </address>
          </div>

          {COLUMNS.map((column) => (
            <nav key={column.heading} aria-label={column.heading}>
              <h3 className="text-xs font-black uppercase tracking-[0.16em] text-[#9CC0AE]">
                {column.heading}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm transition hover:text-[#FAF6F0]">
                      {link.label.replace('&rsquo;', '’')}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.16em] text-[#9CC0AE]">
              Front desk hours
            </h3>
            <dl className="mt-4 space-y-2.5">
              {HOURS.map((entry) => (
                <div key={entry.day} className="text-sm">
                  <dt className="font-bold text-[#FAF6F0]">{entry.day}</dt>
                  <dd>{entry.time}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-5 text-sm leading-relaxed">
              The loft stays coached and open outside class times whenever the
              desk is staffed.
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-[#2C3B33] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm">© 2026 Sablewood Movement Co. All rights reserved.</p>
          <ul className="flex flex-wrap gap-6 text-sm">
            <li>
              <a href="#intro" className="transition hover:text-[#FAF6F0]">
                Membership terms
              </a>
            </li>
            <li>
              <a href="#intro" className="transition hover:text-[#FAF6F0]">
                Privacy
              </a>
            </li>
            <li>
              <a href="#intro" className="transition hover:text-[#FAF6F0]">
                Accessibility
              </a>
            </li>
            <li>
              <a href="#faq" className="transition hover:text-[#FAF6F0]">
                Cancellation policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
