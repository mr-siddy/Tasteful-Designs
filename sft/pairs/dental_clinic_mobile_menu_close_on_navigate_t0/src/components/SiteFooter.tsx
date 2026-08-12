import { FoundryMark } from './SiteHeader'

const COLUMNS = [
  {
    heading: 'Treatments',
    links: [
      { label: 'New patient exam', href: '#treatments' },
      { label: 'Hygienist and gum care', href: '#treatments' },
      { label: 'Same-day ceramic crowns', href: '#mill' },
      { label: 'Root canal treatment', href: '#treatments' },
      { label: 'Clear aligners', href: '#treatments' },
    ],
  },
  {
    heading: 'The practice',
    links: [
      { label: 'Our dentists', href: '#team' },
      { label: 'Your first visit', href: '#visit' },
      { label: 'Nervous patients', href: '#comfort' },
      { label: 'Membership plans', href: '#membership' },
      { label: 'Patient reviews', href: '#reviews' },
    ],
  },
  {
    heading: 'Visiting',
    links: [
      { label: 'Opening hours', href: '#hours' },
      { label: 'Parking and access', href: '#hours' },
      { label: 'Common questions', href: '#faq' },
      { label: 'Emergency appointments', href: '#book' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-[#0f2621] text-[#cbdcd4]">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_repeat(3,0.9fr)]">
          <div>
            <div className="flex items-center gap-3">
              <FoundryMark className="h-11 w-11" />
              <span className="leading-tight">
                <span className="block font-serif text-lg font-semibold text-white">
                  Foundry Row
                </span>
                <span className="block text-[11px] uppercase tracking-[0.3em] text-[#e2864f]">
                  Dental
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed">
              Nine chairs in the old Kilnwood brass works, owner-run since 2011. Every price
              published, every crown milled on site, and the kettle is always on.
            </p>
            <address className="mt-6 space-y-1 text-sm not-italic">
              <p>12 Kilnwood Street, Foundry Quarter</p>
              <p>Portland, Oregon 97209</p>
              <p>
                <a href="tel:+15035550197" data-testid="footer-phone" className="hover:text-white">
                  (503) 555 0197
                </a>
              </p>
              <p>
                <a
                  href="mailto:desk@foundryrowdental.test"
                  data-testid="footer-email"
                  className="hover:text-white"
                >
                  desk@foundryrowdental.test
                </a>
              </p>
            </address>
          </div>

          {COLUMNS.map((col) => (
            <nav key={col.heading} aria-label={col.heading}>
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#e2864f]">
                {col.heading}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      data-testid="footer-link"
                      className="text-sm transition hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-[#f3e9dd]/15 pt-8 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Foundry Row Dental LLC · Oregon dental licence 14-2287 and 14-3951</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li>
              <a href="#privacy" data-testid="footer-legal" className="hover:text-white">
                Privacy notice
              </a>
            </li>
            <li>
              <a href="#terms" data-testid="footer-legal" className="hover:text-white">
                Terms of treatment
              </a>
            </li>
            <li>
              <a href="#complaints" data-testid="footer-legal" className="hover:text-white">
                Complaints procedure
              </a>
            </li>
            <li>
              <a href="#accessibility" data-testid="footer-legal" className="hover:text-white">
                Accessibility statement
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
