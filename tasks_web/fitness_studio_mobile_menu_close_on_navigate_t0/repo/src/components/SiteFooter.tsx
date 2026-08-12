const COLUMNS = [
  {
    heading: 'The studio',
    links: [
      { label: 'Classes', href: '#classes' },
      { label: 'This week’s timetable', href: '#timetable' },
      { label: 'How we coach', href: '#method' },
      { label: 'The two rooms', href: '#studio' },
    ],
  },
  {
    heading: 'Joining',
    links: [
      { label: 'Your first eight weeks', href: '#start' },
      { label: 'Memberships & prices', href: '#memberships' },
      { label: 'Book an intro session', href: '#visit' },
      { label: 'Questions before booking', href: '#faq' },
    ],
  },
  {
    heading: 'People',
    links: [
      { label: 'Instructors', href: '#instructors' },
      { label: 'Member stories', href: '#stories' },
      { label: 'Post-operative programme', href: '#classes' },
      { label: 'Teaching at Sundial', href: '#visit' },
    ],
  },
]

const HOURS = [
  ['Monday – Thursday', '6:00am – 8:30pm'],
  ['Friday', '6:00am – 7:00pm'],
  ['Saturday', '7:30am – 2:00pm'],
  ['Sunday', '8:00am – 1:00pm'],
]

export function SiteFooter() {
  return (
    <footer className="border-t border-[#E3D6BE] bg-[#F1E7D2]">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_repeat(3,0.8fr)]">
          <div>
            <div className="flex items-center gap-3">
              <svg viewBox="0 0 40 40" className="h-8 w-8" aria-hidden="true">
                <circle cx="20" cy="20" r="18" fill="#24493B" />
                <path d="M20 26 L20 10 L28 26 Z" fill="#C2571F" />
              </svg>
              <span className="text-base font-semibold tracking-tight">Sundial Movement Studio</span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-[#5B5445]">
              Reformer Pilates, barre-strength and mobility coaching in a former shoe factory on
              Almond Court. Ten reformers, eight people to a class, and a plan card with your name
              written on it since 2016.
            </p>
            <dl className="mt-7 space-y-2 text-sm text-[#5B5445]">
              {HOURS.map(([day, hours]) => (
                <div key={day} className="flex justify-between gap-6 border-b border-[#E0D2B4] pb-2">
                  <dt>{day}</dt>
                  <dd className="text-[#3D372E]">{hours}</dd>
                </div>
              ))}
            </dl>
          </div>

          {COLUMNS.map((column) => (
            <nav key={column.heading} aria-label={column.heading}>
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C2571F]">
                {column.heading}
              </h3>
              <ul className="mt-5 space-y-3 text-sm text-[#5B5445]">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="hover:text-[#C2571F]">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-[#E0D2B4] pt-8 text-xs text-[#6B6455] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Sundial Movement Studio · 17 Almond Court, Providence RI 02903 · (401) 555 0173</p>
          <ul className="flex gap-6">
            <li>
              <a href="#faq">Cancellation policy</a>
            </li>
            <li>
              <a href="#faq">Accessibility</a>
            </li>
            <li>
              <a href="#faq">Privacy</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
