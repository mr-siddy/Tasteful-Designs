const COLUMNS = [
  {
    heading: 'Platform',
    links: [
      'Document intake',
      'Classification engine',
      'Deadline clocks',
      'Exception desk',
      'Broker handoff',
    ],
  },
  {
    heading: 'Company',
    links: ['How Portway started', 'Dana and Peter', 'Working here', 'Customer stories', 'Changelog'],
  },
  {
    heading: 'Resources',
    links: ['API reference', 'ISF-10 field guide', 'Recordkeeping checklist', 'Status', 'Support'],
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-[#04101C] text-[#B6C6D4]">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.2fr_repeat(3,0.85fr)]">
          <div data-testid="footer-column">
            <div className="flex items-center gap-3">
              <svg viewBox="0 0 40 40" aria-hidden="true" className="h-9 w-9">
                <rect x="1" y="1" width="38" height="38" rx="11" fill="#0D6E8C" opacity="0.25" />
                <path
                  d="M11 27V13h8.4a4.6 4.6 0 010 9.2H15"
                  fill="none"
                  stroke="#F2A03D"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                />
                <circle cx="28" cy="26" r="3.2" fill="none" stroke="#5AC8D8" strokeWidth="2.2" />
              </svg>
              <span className="text-lg font-semibold tracking-tight text-white">Portway</span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed">
              Customs documentation for ocean freight forwarders. Drafted early, cited properly, and
              signed by your own licensed broker.
            </p>
            <address className="mt-6 not-italic text-sm leading-relaxed">
              1104 Dock Street, Suite 210
              <br />
              Tacoma, Washington 98402
              <br />
              <a href="tel:2535550148" className="hover:text-[#9BDCE7]">
                (253) 555-0148
              </a>
              <br />
              <a href="mailto:desk@portway.build" className="hover:text-[#9BDCE7]">
                desk@portway.build
              </a>
            </address>
          </div>

          {COLUMNS.map((column) => (
            <div key={column.heading} data-testid="footer-column">
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#7C8FA2]">
                {column.heading}
              </h3>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#top" className="text-sm transition-colors hover:text-[#9BDCE7]">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Portway Systems, Inc. Desk staffed 05:00 to 19:00 Pacific, Monday to Friday.</p>
          <ul className="flex flex-wrap gap-6">
            {['Privacy', 'Terms', 'Recordkeeping policy', 'Security'].map((item) => (
              <li key={item}>
                <a href="#top" className="transition-colors hover:text-[#9BDCE7]">
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
