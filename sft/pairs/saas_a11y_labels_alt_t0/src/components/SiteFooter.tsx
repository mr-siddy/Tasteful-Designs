const COLUMNS = [
  {
    heading: 'Product',
    links: ['Change policy as code', 'Approval queue', 'Evidence bundles', 'Blast-radius preview', 'Freeze windows'],
  },
  {
    heading: 'Integrations',
    links: ['GitHub Actions', 'GitLab CI', 'Buildkite', 'Argo CD', 'Terraform provider'],
  },
  {
    heading: 'Company',
    links: ['About Halyard', 'Careers', 'Security posture', 'Status history', 'Write to us'],
  },
]

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#08111D] py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_repeat(3,1fr)]">
          <div>
            <div className="flex items-center gap-2.5 text-white">
              <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden="true" focusable="false">
                <rect x="1" y="1" width="30" height="30" rx="9" fill="#132238" stroke="#F2A93B" strokeWidth="1.5" />
                <path d="M16 6v20" stroke="#4ADEC0" strokeWidth="2" strokeLinecap="round" />
                <path d="M16 10l7 4-7 4z" fill="#F2A93B" />
                <path d="M16 16l-7 4 7 4z" fill="#4ADEC0" opacity="0.8" />
              </svg>
              <span className="text-lg font-semibold tracking-tight">Halyard</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-500">
              Release control for teams that ship into audited production. Built in Providence since 2019.
            </p>
            <address className="mt-6 space-y-1 text-sm not-italic text-slate-400">
              <p>Halyard, Inc.</p>
              <p>88 Dorrance Street, Suite 400</p>
              <p>Providence, RI 02903</p>
              <p className="pt-2">
                Support, 24/7:{' '}
                <a href="tel:+14015550168" className="text-slate-300 underline decoration-white/20 underline-offset-4">
                  (401) 555 0168
                </a>
              </p>
              <p>
                <a
                  href="mailto:hello@halyard.dev"
                  className="text-slate-300 underline decoration-white/20 underline-offset-4"
                >
                  hello@halyard.dev
                </a>
              </p>
            </address>
          </div>

          {COLUMNS.map((column) => (
            <nav key={column.heading} aria-label={column.heading}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{column.heading}</h3>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#top" className="text-sm text-slate-400 transition hover:text-white">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Halyard, Inc. SOC 2 Type II · ISO 27001 · control planes in Virginia, Frankfurt and Sydney.</p>
          <div className="flex flex-wrap gap-6">
            <a href="#top" className="transition hover:text-slate-300">
              Privacy notice
            </a>
            <a href="#top" className="transition hover:text-slate-300">
              Terms of service
            </a>
            <a href="#top" className="transition hover:text-slate-300">
              Sub-processors
            </a>
            <a href="#top" className="transition hover:text-slate-300">
              Responsible disclosure
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
