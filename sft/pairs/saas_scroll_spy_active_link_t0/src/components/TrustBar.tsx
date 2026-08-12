const CUSTOMERS = [
  { name: 'Verdant Grocers', glyph: 'M4 14c4-9 12-9 16 0' },
  { name: 'Halcyon Robotics', glyph: 'M5 5h14v14H5z' },
  { name: 'Tidewater Health', glyph: 'M12 4v16M4 12h16' },
  { name: 'Cobalt Logistics', glyph: 'M3 16l6-8 5 6 7-9' },
  { name: 'Pemberton Roasters', glyph: 'M6 6h12v6a6 6 0 01-12 0z' },
]

const STATS = [
  { value: '4.2 days', label: 'median close across our customer base, down from 11.6 at kickoff' },
  { value: '1,180', label: 'legal entities closed on Ledgerloom every month' },
  { value: '99.4%', label: 'of balance-sheet accounts tie out without a human touching them' },
  { value: '0', label: 'auditor findings on evidence completeness across 2025 engagements' },
]

export default function TrustBar() {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-center text-sm font-semibold uppercase tracking-widest text-slate-500">
          Finance teams closing 400 entities a month already run on Ledgerloom
        </h2>

        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {CUSTOMERS.map((customer) => (
            <li key={customer.name} className="flex items-center gap-2 text-slate-400">
              <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true" fill="none">
                <path
                  d={customer.glyph}
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
              <span className="text-base font-semibold tracking-tight text-slate-500">
                {customer.name}
              </span>
            </li>
          ))}
        </ul>

        <dl className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.value} className="border-l-2 border-amber-400 pl-5">
              <dt className="text-3xl font-semibold tracking-tight text-slate-900">{stat.value}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-slate-600">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
