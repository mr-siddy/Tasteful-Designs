const COLUMNS = [
  {
    heading: 'Train with us',
    links: ['Barbell Foundations', 'The Strong Hour', 'Conditioning Club', 'Mobility & Breath', 'Return to Lifting', 'Masters 55+'],
  },
  {
    heading: 'The studio',
    links: ['Meet the coaches', 'The recovery loft', 'Our coaching method', 'Member stories', 'Work at Redpine'],
  },
  {
    heading: 'Visiting',
    links: ['Book a free intro', 'Parking on Lowry Lane', 'Guest and drop-in passes', 'Gift memberships'],
  },
]

const HOURS = [
  { day: 'Monday to Thursday', time: '5:30 am – 9:00 pm' },
  { day: 'Friday', time: '5:30 am – 7:30 pm' },
  { day: 'Saturday', time: '7:00 am – 2:00 pm' },
  { day: 'Sunday', time: '8:00 am – 12:00 pm' },
]

export function SiteFooter() {
  return (
    <footer className="bg-[#0B241E] text-[#BFD2C9]">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr_1fr_1.1fr]">
          <div>
            <div className="flex items-center gap-3">
              <svg viewBox="0 0 48 48" role="img" aria-label="Redpine Strength Co. mark" className="h-10 w-10">
                <circle cx="24" cy="24" r="23" fill="#123B31" />
                <path d="M24 9 L32 24 H27 L33 35 H15 L21 24 H16 Z" fill="#E8A33D" />
                <rect x="21.5" y="35" width="5" height="5" rx="1.4" fill="#D2683F" />
              </svg>
              <span className="text-base font-semibold tracking-tight text-[#FBF7F1]">
                Redpine Strength Co.
              </span>
            </div>
            <p className="mt-5 text-sm leading-relaxed">
              A small-group strength studio in the old Kestrel Street print works. Eight lifters to a
              coach, a sauna upstairs, and no mirrors anywhere on the floor.
            </p>
            <div className="mt-6 flex gap-3">
              {['Instagram', 'Strava', 'Newsletter'].map((s) => (
                <a
                  key={s}
                  href={`#${s.toLowerCase()}`}
                  data-testid="social-link"
                  className="rounded-full border border-[#2F6B57] px-4 py-2 text-xs font-medium text-[#DCE7E1] hover:bg-[#123B31]"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {COLUMNS.map((col) => (
            <nav key={col.heading} aria-label={col.heading}>
              <h3 className="text-xs uppercase tracking-[0.22em] text-[#E8A33D]">{col.heading}</h3>
              <ul className="mt-5 space-y-3 text-sm">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#programs" className="hover:text-[#FBF7F1]">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h3 className="text-xs uppercase tracking-[0.22em] text-[#E8A33D]">Find the door</h3>
            <address className="mt-5 space-y-1 text-sm not-italic">
              <span className="block">214 Kestrel Street</span>
              <span className="block">Fairmount Hill</span>
              <span className="block">Loading door on Lowry Lane</span>
              <a href="tel:5550172" className="mt-3 block font-semibold text-[#FBF7F1]">
                (555) 0172
              </a>
              <a href="mailto:hello@redpinestrength.co" className="block text-[#FBF7F1]">
                hello@redpinestrength.co
              </a>
            </address>
            <dl className="mt-6 space-y-2 text-xs">
              {HOURS.map((h) => (
                <div key={h.day} className="flex justify-between gap-4 border-b border-[#123B31] pb-2">
                  <dt>{h.day}</dt>
                  <dd className="text-[#DCE7E1]">{h.time}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-[#123B31] pt-8 text-xs">
          <p>© 2026 Redpine Strength Co. All rights reserved.</p>
          <div className="flex flex-wrap gap-6">
            <a href="#terms" className="hover:text-[#FBF7F1]">
              Membership terms
            </a>
            <a href="#privacy" className="hover:text-[#FBF7F1]">
              Privacy notice
            </a>
            <a href="#accessibility" className="hover:text-[#FBF7F1]">
              Accessibility
            </a>
            <a href="#questions" className="hover:text-[#FBF7F1]">
              Frequently asked questions
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
