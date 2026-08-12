const COLUMNS = [
  {
    heading: 'Platform',
    links: ['Dispatch board', 'Work orders', 'Truck app', 'Parts and truck stock', 'Agreements and PM', 'Billing and payroll'],
  },
  {
    heading: 'Trades we serve',
    links: ['Commercial HVAC', 'Residential service', 'Plumbing', 'Commercial refrigeration', 'Controls and building automation'],
  },
  {
    heading: 'Company',
    links: ['About Rivetwork', 'Customer stories', 'Careers (nine open roles)', 'Field notes blog', 'Status and uptime'],
  },
]

export default function SiteFooter() {
  return (
    <footer data-testid="site-footer" className="bg-[#0A1220] text-[#A9BAD9]">
      <div className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_repeat(3,1fr)]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[linear-gradient(140deg,#1F4FD8_0%,#0A1220_120%)]">
                <svg viewBox="0 0 24 24" className="h-6 w-6" role="img" aria-label="Rivetwork bolt mark">
                  <circle cx="12" cy="12" r="9" fill="none" stroke="#FF9F1C" strokeWidth="1.6" />
                  <path d="M12 5.5 8.4 12.6h3l-.9 5.6 4.6-7.4h-3.2z" fill="#FFFFFF" />
                </svg>
              </span>
              <span className="text-lg font-black tracking-tight text-white">Rivetwork</span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed">
              Field-service operations for mechanical contractors. Built in Grand Rapids
              by people who spent a decade dispatching before they wrote a line of this.
            </p>
            <address className="mt-6 space-y-1 text-sm not-italic">
              <p>418 Ionia Avenue SW, Suite 300</p>
              <p>Grand Rapids, Michigan 49503</p>
              <p>
                <a href="#walkthrough" className="font-semibold text-white hover:text-[#FF9F1C]">
                  (616) 555-0142
                </a>
              </p>
              <p>
                <a href="#walkthrough" className="font-semibold text-white hover:text-[#FF9F1C]">
                  walkthrough@rivetwork.io
                </a>
              </p>
            </address>
          </div>

          {COLUMNS.map((column) => (
            <div key={column.heading}>
              <h3 className="text-xs font-black uppercase tracking-[0.16em] text-white">
                {column.heading}
              </h3>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#platform" className="text-sm transition hover:text-white">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-6 border-t border-white/10 pt-8 sm:grid-cols-2">
          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.16em] text-white">
              Support hours
            </h3>
            <p className="mt-3 text-sm leading-relaxed">
              Phone support 5am–9pm Eastern, seven days a week. Emergency line for a board
              that is down, staffed around the clock, every day of the year including
              holidays.
            </p>
          </div>
          <div className="flex flex-wrap items-start gap-x-6 gap-y-3 text-sm sm:justify-end">
            <a href="#faq" className="transition hover:text-white">
              Privacy policy
            </a>
            <a href="#faq" className="transition hover:text-white">
              Terms of service
            </a>
            <a href="#faq" className="transition hover:text-white">
              Security and SOC 2
            </a>
            <a href="#faq" className="transition hover:text-white">
              Accessibility statement
            </a>
          </div>
        </div>

        <p className="mt-10 text-xs text-[#6E80A3]">
          © 2026 Rivetwork Systems, Inc. Rivetwork is a registered trademark. QuickBooks,
          Sage Intacct and every other product named here belong to their respective owners.
        </p>
      </div>
    </footer>
  )
}
