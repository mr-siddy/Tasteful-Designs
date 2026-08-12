import { LogoMark } from './icons'

const COLUMNS = [
  {
    heading: 'Product',
    links: ['Capabilities', 'Integrations', 'Pricing', 'Changelog', 'Status page'],
  },
  {
    heading: 'Practice',
    links: [
      'The incident review handbook',
      'Severity definitions that hold up',
      'Writing blameless drafts',
      'Contributing-factor taxonomy',
    ],
  },
  {
    heading: 'Company',
    links: ['About Postlude', 'Working here', 'Security and trust', 'Terms of service', 'Privacy notice'],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#070D18] text-slate-400">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_repeat(3,1fr)]">
          <div>
            <a href="#top" className="flex items-center gap-2.5 text-white">
              <LogoMark className="h-7 w-7" />
              <span className="text-base font-semibold tracking-tight">Postlude</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              Incident review for teams who would rather learn once than relearn every quarter. Built by nine
              people in Lisbon who have all been paged at three in the morning.
            </p>
            <address className="mt-5 not-italic text-sm leading-relaxed">
              Rua da Prata 82, 1100-421 Lisboa, Portugal
              <br />
              hello@postlude.app · +351 21 040 7788
            </address>
          </div>
          {COLUMNS.map((col) => (
            <nav key={col.heading} aria-label={col.heading}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white">{col.heading}</h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#top" className="text-sm transition hover:text-white">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-7 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Postlude Unipessoal Lda. All rights reserved.</p>
          <p>
            Data in Frankfurt or Virginia, never both. SOC 2 Type II report available under NDA from
            hello@postlude.app.
          </p>
        </div>
      </div>
    </footer>
  )
}
