import { ClubMark } from './SiteHeader'

const COLUMNS = [
  {
    heading: 'Train',
    links: ['Barbell Foundations', 'Strength Hall', 'Engine Room', 'Back to Barbell', 'Sixty Plus'],
  },
  {
    heading: 'The club',
    links: ['Our coaches', 'The four-week cycle', 'Inside the tram shed', 'Membership tiers', 'Guest passes'],
  },
  {
    heading: 'Visit',
    links: ['Getting here on the 402', 'Bike cage and parking', 'What to bring', 'Loan shoes and chalk'],
  },
]

const HOURS = [
  ['Monday to Friday', '5:30am – 8:30pm'],
  ['Saturday', '6:45am – 1:00pm'],
  ['Sunday', 'Closed, sled servicing'],
  ['Front desk phone', '9:00am – 4:00pm'],
]

export function SiteFooter() {
  return (
    <footer className="bg-[#0C1217] text-[#CFD6CE]">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_repeat(3,0.85fr)]">
          <div>
            <div className="flex items-center gap-3">
              <ClubMark className="h-10 w-10" />
              <span className="leading-tight">
                <span className="block text-sm font-black uppercase tracking-[0.18em] text-[#F4F1EA]">
                  Ashgrove
                </span>
                <span className="block text-[11px] uppercase tracking-[0.3em] text-[#6E7A72]">
                  Barbell Club
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-[#8E9A93]">
              A twelve-platform strength hall under the Kemp Street viaduct. Written programs, named
              coaches, a capped roster and absolutely no mirrors.
            </p>
            <address className="mt-6 not-italic text-sm leading-relaxed text-[#8E9A93]">
              14 Kemp Street, Ashgrove
              <br />
              (555) 0172
              <br />
              hello@ashgrovebarbell.club
            </address>
          </div>

          {COLUMNS.map((column) => (
            <div key={column.heading}>
              <h3 className="text-[11px] font-black uppercase tracking-[0.24em] text-[#F4F1EA]">
                {column.heading}
              </h3>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#programs"
                      data-testid="footer-link"
                      className="text-sm text-[#8E9A93] transition-colors hover:text-[#F4F1EA]"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-8 border-t border-[#F4F1EA]/10 pt-10 sm:grid-cols-2">
          <div>
            <h3 className="text-[11px] font-black uppercase tracking-[0.24em] text-[#F4F1EA]">
              Opening hours
            </h3>
            <dl className="mt-5 space-y-2.5 text-sm">
              {HOURS.map(([label, value]) => (
                <div key={label} className="flex justify-between gap-6 border-b border-[#F4F1EA]/5 pb-2">
                  <dt className="text-[#8E9A93]">{label}</dt>
                  <dd className="font-semibold text-[#CFD6CE]">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="sm:text-right">
            <h3 className="text-[11px] font-black uppercase tracking-[0.24em] text-[#F4F1EA]">
              Small print
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a href="#membership" data-testid="footer-link" className="text-[#8E9A93] hover:text-[#F4F1EA]">
                  Membership terms and cancellation
                </a>
              </li>
              <li>
                <a href="#faq" data-testid="footer-link" className="text-[#8E9A93] hover:text-[#F4F1EA]">
                  Privacy and how we store your screen notes
                </a>
              </li>
              <li>
                <a href="#the-floor" data-testid="footer-link" className="text-[#8E9A93] hover:text-[#F4F1EA]">
                  Accessibility at 14 Kemp Street
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-12 text-xs text-[#6E7A72]">
          © 2026 Ashgrove Barbell Club. Built in an old tram shed. Rebuilt every four weeks.
        </p>
      </div>
    </footer>
  )
}
