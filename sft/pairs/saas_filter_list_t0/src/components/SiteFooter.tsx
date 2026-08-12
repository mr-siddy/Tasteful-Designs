const COLUMNS = [
  {
    heading: 'Platform',
    links: ['Workflow builder', 'Approvals and rotas', 'Connectors', 'Dry-run replay', 'Audit export'],
  },
  {
    heading: 'Templates',
    links: ['Sales operations', 'Finance and close', 'Support escalations', 'Access reviews', 'Browse all twelve'],
  },
  {
    heading: 'Resources',
    links: ['Documentation', 'Migration guide', 'Status page', 'Changelog', 'Security overview'],
  },
  {
    heading: 'Company',
    links: ['About Stonecrop', 'Careers', 'Customer stories', 'Press kit', 'Contact us'],
  },
]

export default function SiteFooter() {
  return (
    <footer id="contact" className="bg-[#08211C] py-16 text-[#B7CCC5]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2.4fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <svg viewBox="0 0 32 32" className="h-8 w-8" role="img" aria-label="Stonecrop leaf mark">
                <rect width="32" height="32" rx="9" fill="#12332C" />
                <path d="M16 6c5 3 7 6.4 7 10.2 0 4-3.1 7.1-7 7.1s-7-3.1-7-7.1C9 12.4 11 9 16 6z" fill="#12766A" />
                <path d="M16 9.6c3 2.1 4.3 4.4 4.3 6.9 0 2.5-1.9 4.4-4.3 4.4z" fill="#E8A33D" />
              </svg>
              <span className="text-lg font-semibold tracking-tight text-[#EDF1EE]">Stonecrop</span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed">
              Workflow automation for the operations, finance and support teams who are currently
              holding the process together themselves.
            </p>
            <address className="mt-6 space-y-1 text-sm not-italic">
              <span className="block">118 Wickenden Street, Providence, Rhode Island</span>
              <span className="block">hello@stonecrop.io</span>
              <span className="block">+1 401 555 0184</span>
            </address>
          </div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {COLUMNS.map((column) => (
              <nav key={column.heading} aria-label={column.heading}>
                <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-[#EDF1EE]">
                  {column.heading}
                </h3>
                <ul className="mt-4 space-y-2.5 text-sm">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a href="#top" className="transition-colors hover:text-[#7FCFC2]">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-[#173B33] pt-8 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 Stonecrop Software, Inc. Built in Providence since 2021.</p>
          <ul className="flex flex-wrap gap-6">
            <li>
              <a href="#top" className="hover:text-[#7FCFC2]">
                Privacy notice
              </a>
            </li>
            <li>
              <a href="#top" className="hover:text-[#7FCFC2]">
                Terms of service
              </a>
            </li>
            <li>
              <a href="#top" className="hover:text-[#7FCFC2]">
                Subprocessors
              </a>
            </li>
            <li>
              <a href="#top" className="hover:text-[#7FCFC2]">
                Trust centre
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
