import { WeirMark } from './WeirMark'

const COLUMNS = [
  {
    title: 'Platform',
    links: ['Sampling calendar', 'Lab intake', 'Report engine', 'Audit binder', 'SCADA import'],
  },
  {
    title: 'Company',
    links: ['Why Weirline exists', 'The team in Belfast', 'Careers', 'Operator training notes', 'Release log'],
  },
  {
    title: 'Resources',
    links: ['Sample monthly report', 'Monitoring schedule guide', 'Sanitary survey checklist', 'Status page'],
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-[#04211F] text-[#F1E9DC]">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_repeat(3,1fr)]">
          <div>
            <div className="flex items-center gap-3">
              <WeirMark className="h-9 w-9" />
              <span className="text-lg font-semibold tracking-tight text-white">Weirline</span>
            </div>
            <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-[#F1E9DC]/60">
              Compliance software for small drinking-water systems. Built above the chandlery at
              44 Front Street, Belfast, Maine 04915.
            </p>
            <p className="mt-5 text-[15px] text-[#F1E9DC]/60">
              (207) 555-0164
              <span className="mt-1 block">operators@weirline.co</span>
            </p>
            <p className="mt-5 text-[14px] text-[#F1E9DC]/45">
              Office hours 7am–5pm Eastern.
              <span className="mt-1 block">6am from the 1st to the 5th of the month.</span>
            </p>
          </div>

          {COLUMNS.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="text-[13px] font-semibold uppercase tracking-[0.18em] text-[#7FE3D6]">
                {col.title}
              </h3>
              <ul className="mt-5 space-y-3 text-[15px] text-[#F1E9DC]/65">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#top" className="transition hover:text-white">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-8 text-[14px] text-[#F1E9DC]/45">
          <p>© 2026 Weirline Systems, Inc. All rights reserved.</p>
          <ul className="flex flex-wrap gap-6">
            {['Privacy', 'Terms', 'Security', 'Accessibility'].map((l) => (
              <li key={l}>
                <a href="#top" className="transition hover:text-white">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
