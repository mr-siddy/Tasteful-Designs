import { TidewaterMark } from './Icons'

const COLUMNS = [
  {
    heading: 'Treatments',
    links: [
      { label: 'The full index', href: '#treatments' },
      { label: 'Same-day crowns', href: '#mill' },
      { label: 'Whitening and bonding', href: '#treatments' },
      { label: 'Emergency appointments', href: '#treatments' },
    ],
  },
  {
    heading: 'The practice',
    links: [
      { label: 'Our four clinicians', href: '#team' },
      { label: 'The quiet chair protocol', href: '#comfort' },
      { label: 'What a first visit involves', href: '#first-visit' },
      { label: 'Membership plans', href: '#membership' },
    ],
  },
]

const HOURS = [
  { day: 'Monday to Thursday', time: '8:00 — 18:00' },
  { day: 'Friday', time: '8:00 — 15:30' },
  { day: 'Saturday', time: '9:00 — 13:00, emergencies only' },
  { day: 'Sunday', time: 'Closed — answerphone triaged at 8:00' },
]

export function SiteFooter() {
  return (
    <footer className="bg-[#12263F] text-[#C6D3DF]">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <TidewaterMark className="h-11 w-11" />
              <span className="text-lg font-semibold tracking-tight text-white">
                Tidewater Dental Studio
              </span>
            </div>
            <p className="mt-5 text-sm leading-relaxed">
              An independent practice on Cobb Street since 2013. Four clinicians, one price list, and
              a ceramic mill behind reception.
            </p>
            <p className="mt-5 text-sm">
              40 Cobb Street
              <br />
              Marlowe Quarter, Bellhaven BH4 2QR
            </p>
          </div>

          {COLUMNS.map((column) => (
            <div key={column.heading}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">
                {column.heading}
              </h3>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm transition hover:text-[#F26D5B]">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">
              Opening hours
            </h3>
            <dl className="mt-5 space-y-3 text-sm">
              {HOURS.map((slot) => (
                <div key={slot.day}>
                  <dt className="font-medium text-white/90">{slot.day}</dt>
                  <dd>{slot.time}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-5 text-sm">
              <a href="tel:5550142200" className="font-semibold text-white hover:text-[#F26D5B]">
                (555) 014-2200
              </a>
              <br />
              <a href="mailto:desk@tidewaterdental.co" className="hover:text-[#F26D5B]">
                desk@tidewaterdental.co
              </a>
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Tidewater Dental Studio Ltd. Registered with the General Dental Council.</p>
          <ul className="flex flex-wrap gap-6">
            <li>
              <a href="#faq" className="transition hover:text-[#F26D5B]">
                Complaints procedure
              </a>
            </li>
            <li>
              <a href="#faq" className="transition hover:text-[#F26D5B]">
                Privacy notice
              </a>
            </li>
            <li>
              <a href="#faq" className="transition hover:text-[#F26D5B]">
                Accessibility
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
