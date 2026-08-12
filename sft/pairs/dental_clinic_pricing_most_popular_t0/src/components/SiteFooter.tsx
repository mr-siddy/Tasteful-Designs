import { FoxgloveMark } from './SiteHeader'

const COLUMNS = [
  {
    heading: 'Treatment',
    links: [
      'Cleaning and exam',
      'Fillings and repairs',
      'Same-day crowns',
      'Clear aligners',
      'Gum health therapy',
    ],
  },
  {
    heading: 'Patients',
    links: [
      'Membership plans',
      'Insurance we file',
      'Your first visit',
      'Anxiety and sedation',
      'Children and families',
    ],
  },
  {
    heading: 'Practice',
    links: ['Our team', 'The Cobblehill studio', 'Patient reviews', 'Careers', 'Referring dentists'],
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-[#0B2E2A] text-[#FBF8F3]">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.3fr,1fr,1fr,1fr]">
          <div>
            <div className="flex items-center gap-3">
              <FoxgloveMark className="h-10 w-10" />
              <span className="font-serif text-lg font-semibold">Foxglove Dental Studio</span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-[#FBF8F3]/65">
              A four-person family and restorative practice on Ellery Avenue since 2013. Eight
              patients a day, forty-five minute hygiene visits, and the price written down before
              anything is scheduled.
            </p>
            <address className="mt-6 space-y-1 text-sm not-italic text-[#FBF8F3]/65">
              <p>1140 Ellery Avenue</p>
              <p>Cobblehill Ward, Wren Harbor</p>
              <p>
                <a href="tel:5550172" data-testid="footer-link" className="font-semibold text-[#E8A6BF]">
                  (555) 0172
                </a>
              </p>
              <p>
                <a href="#visit" data-testid="footer-link" className="font-semibold text-[#E8A6BF]">
                  hello at foxglovedental studio
                </a>
              </p>
            </address>
          </div>

          {COLUMNS.map((column) => (
            <nav key={column.heading} aria-label={column.heading}>
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#FBF8F3]/50">
                {column.heading}
              </h3>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#top"
                      data-testid="footer-link"
                      className="text-sm text-[#FBF8F3]/75 transition-colors hover:text-[#FBF8F3]"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-[#FBF8F3]/15 pt-8 text-xs text-[#FBF8F3]/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Foxglove Dental Studio · Priya Raghunathan DDS, licence WH-40218</p>
          <div className="flex flex-wrap gap-6">
            <a href="#top" data-testid="footer-link" className="hover:text-[#FBF8F3]">
              Privacy notice
            </a>
            <a href="#top" data-testid="footer-link" className="hover:text-[#FBF8F3]">
              Patient rights
            </a>
            <a href="#top" data-testid="footer-link" className="hover:text-[#FBF8F3]">
              Accessibility
            </a>
            <a href="#top" data-testid="footer-link" className="hover:text-[#FBF8F3]">
              Membership terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
