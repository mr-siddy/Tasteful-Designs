const STATS = [
  { value: '4.9', label: 'Average rating', detail: 'from 1,842 verified patient reviews' },
  { value: '11 yrs', label: 'On Sorrel Street', detail: 'same principal dentist since 2015' },
  { value: '6,400', label: 'Registered patients', detail: '1,100 of them under sixteen' },
  { value: '96%', label: 'Seen within a week', detail: 'for urgent pain, measured across 2025' },
]

const INSURERS = ['Harbour Mutual', 'Northline Health', 'Verrow Benefits', 'Ashbourne Civic Plan']

function StarRow() {
  return (
    <span className="flex items-center gap-0.5" aria-hidden="true">
      {[0, 1, 2, 3, 4].map((index) => (
        <svg key={index} viewBox="0 0 20 20" className="h-4 w-4" focusable="false">
          <path
            d="M10 1.6l2.5 5.2 5.7.8-4.1 4 1 5.7-5.1-2.7-5.1 2.7 1-5.7-4.1-4 5.7-.8z"
            fill="#ffb648"
          />
        </svg>
      ))}
    </span>
  )
}

export function TrustBar() {
  return (
    <section data-testid="trust-bar" className="border-b border-[#0b2d45]/10 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="font-serif text-2xl font-semibold">
            The neighbourhood practice people actually keep going back to
          </h2>
          <div className="flex items-center gap-3">
            <StarRow />
            <p className="text-sm font-medium text-[#0b2d45]/70">
              4.9 out of 5 · 1,842 reviews since 2015
            </p>
          </div>
        </div>

        <dl className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              data-testid="proof-stat"
              className="rounded-2xl border border-[#0b2d45]/10 bg-[#f6fafb] p-6"
            >
              <dt className="font-serif text-4xl font-semibold text-[#0b2d45]">{stat.value}</dt>
              <dd className="mt-2 text-sm font-semibold uppercase tracking-[0.14em] text-[#2fb99b]">
                {stat.label}
              </dd>
              <dd className="mt-1 text-sm leading-relaxed text-[#0b2d45]/70">{stat.detail}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-[#0b2d45]/10 pt-8">
          <p className="text-sm font-semibold text-[#0b2d45]/70">Billed directly, no paperwork:</p>
          {INSURERS.map((insurer) => (
            <span
              key={insurer}
              data-testid="insurer-badge"
              className="flex items-center gap-2 text-sm font-medium text-[#0b2d45]/60"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" focusable="false">
                <path
                  d="M12 2.5l8 3v6.2c0 4.6-3.2 8.5-8 9.8-4.8-1.3-8-5.2-8-9.8V5.5z"
                  fill="none"
                  stroke="#2fb99b"
                  strokeWidth="1.8"
                />
                <path
                  d="M8.4 12.2l2.6 2.5 4.6-5"
                  fill="none"
                  stroke="#0b2d45"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
              {insurer}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
