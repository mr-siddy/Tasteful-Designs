import { LanternMark } from './Icons'

const COLUMNS = [
  {
    title: 'Treatments',
    links: [
      'Checkup and clean',
      'Hygienist appointments',
      'White fillings',
      'Same-day crowns',
      'Clear aligners',
      'Implants',
    ],
  },
  {
    title: 'The practice',
    links: [
      'Our four clinicians',
      'Inside the lamp-works',
      'Lantern Care membership',
      'Nervous patients',
      'Fees and payment plans',
      'Careers at Lantern Lane',
    ],
  },
  {
    title: 'Patients',
    links: [
      'Your first visit',
      'Emergency appointments',
      'Referring a friend',
      'Complaints procedure',
      'Privacy notice',
      'Accessibility statement',
    ],
  },
]

export default function SiteFooter() {
  return (
    <footer className="bg-[#0f1839] text-white">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_repeat(3,0.8fr)]">
          <div>
            <div className="flex items-center gap-3">
              <LanternMark className="h-9 w-9 text-white" />
              <span className="text-lg font-semibold tracking-tight">Lantern Lane Dental</span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/65">
              A four-chair practice in the old Kelso Park lamp-works, seeing the same families
              since 1998. Forty-minute appointments, written quotes, and no commission on
              anything we recommend.
            </p>
            <address className="mt-6 not-italic text-sm leading-relaxed text-white/65">
              42 Lantern Lane
              <br />
              Kelso Park
              <br />
              <a href="tel:+15550142118" className="font-medium text-white">
                (555) 014-2118
              </a>
              <br />
              <a href="mailto:desk@lanternlanedental.co" className="font-medium text-white">
                desk@lanternlanedental.co
              </a>
            </address>
          </div>

          {COLUMNS.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
                {column.title}
              </h3>
              <ul className="mt-5 space-y-3 text-sm text-white/75">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#book" className="transition hover:text-[#f9a88c]">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 grid gap-6 border-t border-white/10 pt-8 text-xs text-white/45 sm:grid-cols-2">
          <p>
            © 1998—2026 Lantern Lane Dental Ltd. Registered practice DP-40118. Dr. Ines
            Okonkwo BDS MFDS is the principal clinician responsible for this site.
          </p>
          <p className="sm:text-right">
            Monday to Wednesday 8.00—5.30 · Thursday until 7.00 · Friday until 4.00 ·
            alternate Saturdays 9.00—1.00
          </p>
        </div>
      </div>
    </footer>
  )
}
