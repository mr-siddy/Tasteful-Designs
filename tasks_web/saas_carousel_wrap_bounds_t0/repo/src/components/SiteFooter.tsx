import { BrandMark } from './SiteHeader'

const COLUMNS = [
  {
    heading: 'Product',
    links: ['Unit register', 'Recertification calendar', 'Applicant pipeline', 'Funder reporting', 'Inspections'],
  },
  {
    heading: 'Who it is for',
    links: ['Community land trusts', 'Housing nonprofits', 'Shared-equity programs', 'Resident cooperatives'],
  },
  {
    heading: 'Company',
    links: ['About the team', 'Pricing', 'Implementation', 'Security and uptime', 'Write for us'],
  },
]

export default function SiteFooter() {
  return (
    <footer className="border-t border-[#DDE3F0] bg-[#F4F6FB]">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_repeat(3,0.8fr)]">
          <div>
            <div className="flex items-center gap-3">
              <BrandMark className="h-9 w-9" />
              <span className="text-lg font-bold tracking-tight">Rooftree</span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-[#4B5670]">
              Operations software for the people who keep homes permanently affordable. Built in Providence by four
              people who used to do this job with a spreadsheet.
            </p>
            <address className="mt-6 not-italic text-sm leading-relaxed text-[#4B5670]">
              Rooftree Software Co-operative
              <br />
              82 Dorrance Street, Suite 410
              <br />
              Providence, RI 02903
              <br />
              <a href="#call" data-testid="footer-phone" className="mt-2 inline-block font-semibold text-[#131A2A]">
                (401) 555-0172
              </a>
            </address>
          </div>

          {COLUMNS.map((column) => (
            <nav key={column.heading} aria-label={column.heading}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#131A2A]">{column.heading}</h3>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(/[^a-z]+/g, '-')}`}
                      data-testid="footer-link"
                      className="text-sm text-[#4B5670] transition hover:text-[#131A2A]"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-[#DDE3F0] pt-8">
          <p className="text-sm text-[#6B7690]">
            © 2026 Rooftree Software Co-operative. A worker-owned company. Hosted in Ashburn, Virginia.
          </p>
          <ul className="flex flex-wrap items-center gap-6">
            {['Privacy', 'Terms', 'Accessibility statement', 'Status'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(/[^a-z]+/g, '-')}`}
                  data-testid="footer-link"
                  className="text-sm text-[#6B7690] transition hover:text-[#131A2A]"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
