const COLUMNS = [
  {
    heading: 'Platform',
    links: [
      { label: 'Reconciliation workspace', href: '#platform' },
      { label: 'Intercompany eliminations', href: '#platform' },
      { label: 'Close checklist', href: '#workflow' },
      { label: 'Audit evidence room', href: '#controls' },
      { label: 'Integrations', href: '#integrations' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About Ledgerloom', href: '#overview' },
      { label: 'Careers — 7 open roles', href: '#overview' },
      { label: 'Customer stories', href: '#customers' },
      { label: 'Security and trust', href: '#controls' },
      { label: 'Pricing', href: '#pricing' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'The four-day close playbook', href: '#workflow' },
      { label: 'Intercompany tie-out template', href: '#platform' },
      { label: 'Implementation guide', href: '#faq' },
      { label: 'Release notes', href: '#overview' },
      { label: 'Status page', href: '#overview' },
    ],
  },
]

export default function SiteFooter() {
  return (
    <footer className="bg-slate-950 py-16 text-slate-400">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_repeat(3,1fr)]">
          <div>
            <div className="flex items-center gap-2.5">
              <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden="true">
                <rect x="1" y="1" width="30" height="30" rx="9" fill="#4338ca" />
                <path
                  d="M8 11h16M8 16h16M8 21h16"
                  stroke="#c7d2fe"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path d="M12 7v18M20 7v18" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <span className="text-lg font-semibold tracking-tight text-white">Ledgerloom</span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed">
              Close management for finance teams carrying more than one legal entity. Built in
              Portland by accountants who got tired of the eleventh business day.
            </p>
            <address className="mt-6 space-y-1 text-sm not-italic">
              <p>1204 SE Water Avenue, Suite 310</p>
              <p>Portland, Oregon 97214</p>
              <p>
                <a href="#demo" className="hover:text-white">
                  sales@ledgerloom.io
                </a>{' '}
                · (503) 555-0147
              </p>
            </address>
          </div>

          {COLUMNS.map((column) => (
            <nav key={column.heading} aria-label={column.heading}>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
                {column.heading}
              </h3>
              <ul className="mt-5 space-y-3 text-sm">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="transition-colors hover:text-white">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-slate-800 pt-8 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Ledgerloom Systems, Inc. All rights reserved.</p>
          <ul className="flex flex-wrap gap-6">
            <li>
              <a href="#controls" className="hover:text-white">
                Privacy notice
              </a>
            </li>
            <li>
              <a href="#controls" className="hover:text-white">
                Terms of service
              </a>
            </li>
            <li>
              <a href="#controls" className="hover:text-white">
                Subprocessors
              </a>
            </li>
            <li>
              <a href="#controls" className="hover:text-white">
                Accessibility statement
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
