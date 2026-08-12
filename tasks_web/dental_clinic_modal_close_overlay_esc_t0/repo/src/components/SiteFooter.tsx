import { AnchorMark, PhoneIcon, PinIcon, ToothMark } from './Icons'

const COLUMNS = [
  {
    heading: 'Treatments',
    links: [
      { label: 'New-patient exam', href: '#treatments' },
      { label: 'Same-day crowns', href: '#treatments' },
      { label: 'Studio whitening', href: '#treatments' },
      { label: 'Clear aligners', href: '#treatments' },
      { label: 'Implants', href: '#treatments' },
    ],
  },
  {
    heading: 'The practice',
    links: [
      { label: 'Inside the studio', href: '#comfort' },
      { label: 'Your first visit', href: '#first-visit' },
      { label: 'Our team', href: '#team' },
      { label: 'Patient stories', href: '#stories' },
      { label: 'Questions', href: '#faq' },
    ],
  },
  {
    heading: 'Practical',
    links: [
      { label: 'Book a visit', href: '#booking' },
      { label: 'Membership', href: '#membership' },
      { label: 'Insurance we file', href: '#trust-heading' },
      { label: 'Emergencies', href: '#faq' },
      { label: 'Parking and transit', href: '#faq' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-[#08192B] text-[#BFCBD6]">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_repeat(3,1fr)]">
          <div>
            <a href="#top" className="flex items-center gap-3 text-white">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#C2703D] text-white">
                <ToothMark className="h-6 w-6" />
              </span>
              <span className="leading-tight">
                <span className="block text-lg font-semibold tracking-tight">Alder &amp; Bay</span>
                <span className="block text-[11px] uppercase tracking-[0.2em] text-[#8FA3B5]">Dental Studio</span>
              </span>
            </a>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-[#8FA3B5]">
              A nine-person family and cosmetic practice in a 1920s ship-chandlery storefront on Ballard
              Avenue. Independent since 2014, and intending to stay that way.
            </p>
            <address className="mt-6 space-y-3 text-sm not-italic">
              <a href="tel:+12065550142" className="flex items-center gap-2 text-white transition hover:text-[#E9A876]">
                <PhoneIcon className="h-4 w-4 text-[#C2703D]" />
                (206) 555-0142
              </a>
              <span className="flex items-start gap-2">
                <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#C2703D]" />
                5412 Ballard Ave NW
                <br />
                Seattle, WA 98107
              </span>
              <a
                href="mailto:hello@alderandbay.dental"
                className="flex items-center gap-2 text-white transition hover:text-[#E9A876]"
              >
                <AnchorMark className="h-4 w-4 text-[#C2703D]" />
                hello@alderandbay.dental
              </a>
            </address>
          </div>

          {COLUMNS.map((column) => (
            <nav key={column.heading} aria-label={column.heading}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">{column.heading}</h3>
              <ul className="mt-5 space-y-3 text-sm">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="transition hover:text-[#E9A876]">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 border-t border-white/10 pt-8">
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">Studio hours</h3>
          <dl className="mt-4 grid gap-4 text-sm sm:grid-cols-4">
            <div>
              <dt className="text-[#8FA3B5]">Monday – Thursday</dt>
              <dd className="mt-1 text-white">7:00am – 5:00pm</dd>
            </div>
            <div>
              <dt className="text-[#8FA3B5]">Friday</dt>
              <dd className="mt-1 text-white">7:00am – 2:00pm</dd>
            </div>
            <div>
              <dt className="text-[#8FA3B5]">Saturday</dt>
              <dd className="mt-1 text-white">By arrangement</dd>
            </div>
            <div>
              <dt className="text-[#8FA3B5]">Emergencies</dt>
              <dd className="mt-1 text-white">On-call line, seven days</dd>
            </div>
          </dl>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-[#8FA3B5] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Alder &amp; Bay Dental Studio PLLC. Washington licence DE-60214.</p>
          <ul className="flex flex-wrap gap-6">
            <li>
              <a href="#faq" className="transition hover:text-[#E9A876]">
                Privacy notice
              </a>
            </li>
            <li>
              <a href="#faq" className="transition hover:text-[#E9A876]">
                Accessibility
              </a>
            </li>
            <li>
              <a href="#faq" className="transition hover:text-[#E9A876]">
                Financial policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
