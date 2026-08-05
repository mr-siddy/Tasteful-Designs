import { CedarMark } from './SiteHeader'

const COLUMNS = [
  {
    heading: 'Treatments',
    links: [
      'Check-ups and hygiene',
      'Emergency appointments',
      'Fillings and crowns',
      'Clear aligners',
      'Whitening',
      'Children’s dentistry',
    ],
  },
  {
    heading: 'The practice',
    links: [
      'Our dentists',
      'The quiet room',
      'The children’s floor',
      'Membership plans',
      'Patient reviews',
      'Careers at Cedar & Vale',
    ],
  },
  {
    heading: 'Patients',
    links: [
      'Request an appointment',
      'Insurers we bill directly',
      'Payment plans',
      'Prepare for a first visit',
      'Emergency advice',
      'Refer a friend',
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-[#062134] text-white">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_repeat(3,0.85fr)]">
          <div>
            <div className="flex items-center gap-3">
              <CedarMark className="h-10 w-10" />
              <span className="leading-tight">
                <span className="block font-serif text-lg font-semibold">Cedar &amp; Vale</span>
                <span className="block text-[11px] uppercase tracking-[0.28em] text-[#2fb99b]">
                  Dental Studio
                </span>
              </span>
            </div>
            <address className="mt-6 not-italic text-sm leading-relaxed text-white/70">
              14 Sorrel Street
              <br />
              Ashbourne Green
              <br />
              <a href="tel:+16145550142" className="mt-3 inline-block font-semibold text-white">
                (614) 555 0142
              </a>
              <br />
              <a href="mailto:desk@cedarandvale.dental" className="text-white/80 underline underline-offset-4">
                desk@cedarandvale.dental
              </a>
            </address>
            <p className="mt-6 text-sm leading-relaxed text-white/60">
              Mon–Thu 7:00am – 8:00pm · Fri 7:00am – 5:00pm · Sat 8:00am – 4:00pm · Sunday closed,
              on-call dentist until 6:00pm.
            </p>
          </div>

          {COLUMNS.map((column) => (
            <nav key={column.heading} aria-label={column.heading}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8fd3c4]">
                {column.heading}
              </h3>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#book"
                      data-testid="footer-link"
                      className="text-sm text-white/70 transition hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/15 pt-8 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 Cedar &amp; Vale Dental Studio. Principal dentist Dr. Priya Nandakumar, DDS.
            Registered with the state dental board, licence 44-91820.
          </p>
          <p className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="#book" className="hover:text-white">
              Privacy notice
            </a>
            <a href="#book" className="hover:text-white">
              Complaints procedure
            </a>
            <a href="#book" className="hover:text-white">
              Accessibility statement
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
