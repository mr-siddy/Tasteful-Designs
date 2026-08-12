const STATS = [
  { figure: '2,412', label: 'households on our books' },
  { figure: '9 yrs', label: 'on Water Street' },
  { figure: '1 visit', label: 'average for a full crown' },
  { figure: '4.9 / 5', label: '638 verified reviews' },
]

const CREDENTIALS = [
  'Vermont State Dental Society',
  'American Dental Association',
  'CEREC Doctors faculty',
  'Delta Dental in-network',
]

/** Social proof band: the numbers, then the memberships people recognise. */
export default function ProofBar() {
  return (
    <section data-testid="proof" className="border-b border-[#0f4c4f]/10 bg-[#f2e9da]">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <h2 className="sr-only">Why families trust Quarry Hill Dental</h2>

        <dl className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} data-testid="proof-stat">
              <dt className="font-serif text-3xl font-semibold text-[#0f4c4f] sm:text-4xl">
                {stat.figure}
              </dt>
              <dd className="mt-1 text-sm leading-snug text-[#0d2b2e]/70">{stat.label}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-12 flex flex-col gap-6 border-t border-[#0f4c4f]/15 pt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0d2b2e]/50">
            Accredited by
          </p>
          {CREDENTIALS.map((name) => (
            <div key={name} className="flex items-center gap-2.5" data-testid="credential">
              <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
                <path
                  d="M12 2.5l7.5 3.2v5.6c0 4.6-3.1 8.6-7.5 10.2-4.4-1.6-7.5-5.6-7.5-10.2V5.7L12 2.5z"
                  fill="#0f4c4f"
                  opacity="0.12"
                />
                <path
                  d="M12 2.5l7.5 3.2v5.6c0 4.6-3.1 8.6-7.5 10.2-4.4-1.6-7.5-5.6-7.5-10.2V5.7L12 2.5z"
                  fill="none"
                  stroke="#0f4c4f"
                  strokeWidth="1.3"
                />
                <path
                  d="M8.6 12.2l2.5 2.5 4.5-4.8"
                  fill="none"
                  stroke="#c68a3e"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
              <span className="text-sm font-medium text-[#0d2b2e]/75">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
