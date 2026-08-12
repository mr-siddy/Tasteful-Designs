const COLUMNS = [
  {
    heading: 'Treatments',
    links: [
      'Check-ups and X-rays',
      'Hygienist appointments',
      'White fillings',
      'Same-day crowns',
      'Clear aligners',
      'Emergency appointments',
    ],
  },
  {
    heading: 'The practice',
    links: [
      'Our published fees',
      'Payment plans',
      'Membership plans',
      'Meet the team',
      'Your first visit',
      'Nervous patients',
    ],
  },
  {
    heading: 'Patients',
    links: [
      'Register with us',
      'Insurance we bill',
      'Out-of-hours care',
      'Complaints procedure',
      'Practice policies',
      'Leave a review',
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-[#2A2247] text-[#C7BEEE]">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_repeat(3,0.85fr)]">
          <div>
            <div className="flex items-center gap-3">
              <svg
                viewBox="0 0 48 48"
                role="img"
                aria-label="Bramble Court Dental mark"
                className="h-10 w-10"
              >
                <circle cx="24" cy="24" r="23" fill="#FBF9F5" />
                <path
                  d="M24 13c4.6 0 7.5 2.4 7.5 6.6 0 3.2-1 5.6-1.8 9.1-.7 3.1-1.2 6.3-3.1 6.3-1.6 0-1.8-2.4-2.6-2.4-.8 0-1 2.4-2.6 2.4-1.9 0-2.4-3.2-3.1-6.3-.8-3.5-1.8-5.9-1.8-9.1 0-4.2 2.9-6.6 7.5-6.6Z"
                  fill="#332A56"
                />
                <circle cx="17.5" cy="20" r="1.6" fill="#E4735B" />
              </svg>
              <span className="text-lg font-semibold text-white">Bramble Court Dental</span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed">
              An independent eleven-chair practice in the Wyeford Quarter, owned and run by the same
              principal dentist since 2009. Every fee we charge is on the board by the door.
            </p>
            <address className="mt-6 space-y-1.5 text-sm not-italic">
              <span className="block">22 Bramble Court, Wyeford Quarter, WY3 8LN</span>
              <span className="block">
                Front desk:{' '}
                <a href="tel:5550164" className="text-white underline-offset-4 hover:underline">
                  (555) 0164
                </a>
              </span>
              <span className="block">
                Out of hours:{' '}
                <a href="tel:5550177" className="text-white underline-offset-4 hover:underline">
                  (555) 0177
                </a>
              </span>
              <span className="block">
                <a
                  href="mailto:desk@bramblecourtdental.co"
                  className="text-white underline-offset-4 hover:underline"
                >
                  desk@bramblecourtdental.co
                </a>
              </span>
            </address>
          </div>

          {COLUMNS.map((column) => (
            <nav key={column.heading} aria-label={column.heading} data-testid="footer-column">
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white">
                {column.heading}
              </h3>
              <ul className="mt-5 space-y-3 text-sm">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#top"
                      data-testid="footer-link"
                      className="transition-colors hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 grid gap-6 border-t border-white/15 pt-8 text-xs sm:grid-cols-2">
          <p>
            © 2026 Bramble Court Dental Ltd. Registered in England, company 08812446. All
            clinicians are registered with the General Dental Council.
          </p>
          <p className="sm:text-right">
            Mon–Thu 7.30am–7pm · Fri 8am–4pm · Sat 8am–1pm · Sun closed
          </p>
        </div>
      </div>
    </footer>
  )
}
