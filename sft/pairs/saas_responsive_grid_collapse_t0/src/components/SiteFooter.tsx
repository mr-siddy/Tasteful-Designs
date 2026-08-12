const COLUMNS = [
  {
    heading: 'Platform',
    links: [
      { label: 'Cut tickets', href: '#platform' },
      { label: 'Fabric lots', href: '#platform' },
      { label: 'Sew-line boards', href: '#platform' },
      { label: 'Subcontractor handoffs', href: '#platform' },
      { label: 'Integrations', href: '#integrations' },
    ],
  },
  {
    heading: 'For the floor',
    links: [
      { label: 'Setup week', href: '#rollout' },
      { label: 'Cormorant case study', href: '#case-study' },
      { label: 'Yield and rework reporting', href: '#how' },
      { label: 'Printed ticket templates', href: '#faq' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'Why we built this', href: '#how' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Customers', href: '#customers' },
      { label: 'Questions', href: '#faq' },
    ],
  },
]

export default function SiteFooter() {
  return (
    <footer className="bg-[#1E1B26] text-[#B9AFC2]">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <svg viewBox="0 0 40 40" role="img" aria-label="Grainline" className="h-9 w-9">
                <rect x="1" y="1" width="38" height="38" rx="11" fill="#2C5C4F" />
                <path d="M20 8v24" stroke="#F6F2EC" strokeWidth="2" strokeLinecap="round" />
                <path
                  d="M15 13l5-5 5 5M15 27l5 5 5-5"
                  fill="none"
                  stroke="#C1552F"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-lg font-black tracking-tight text-[#F6F2EC]">
                Grainline
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed">
              Production software for small-batch apparel, built by two people who
              ran a 22-machine sew floor for nine years and got tired of the
              spreadsheet.
            </p>
            <p className="mt-5 text-sm">
              118 Hobart Mill Road, Suite 2<br />
              Fall River, MA 02723
            </p>
            <p className="mt-3 text-sm">
              <a href="#book" className="hover:text-[#F6F2EC]">
                hello@grainline.works
              </a>
              <br />
              (508) 555-0164
            </p>
          </div>

          {COLUMNS.map((col) => (
            <nav key={col.heading} aria-label={col.heading}>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#F6F2EC]">
                {col.heading}
              </h3>
              <ul className="mt-5 space-y-3 text-sm">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="hover:text-[#F6F2EC]">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-[#332E3E] pt-8 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            Support Monday to Friday, 6am to 6pm Eastern — the hours a cut floor
            actually runs.
          </p>
          <p>© 2026 Grainline Systems LLC · Terms · Privacy · Status</p>
        </div>
      </div>
    </footer>
  )
}
