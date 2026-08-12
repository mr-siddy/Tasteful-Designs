const PRESSES = [
  'Harrow & Wick',
  'Ninth Street Editions',
  'Bright Kiln Press',
  'Sable Row Books',
  'Quarry & Quill',
  'Tidewater House',
]

const STATS = [
  { value: '340', label: 'presses on the platform', note: 'from one-person imprints to eleven-list houses' },
  { value: '61,400', label: 'titles under management', note: 'backlist and frontlist on the same board' },
  { value: '4.1 days', label: 'median proof turnaround', note: 'down from 9.4 in the first season on Colophon' },
  { value: '99.97%', label: 'feed delivery success', note: 'metadata drops accepted on the first attempt' },
]

export function TrustBar() {
  return (
    <section id="proof" className="border-b border-[#E3DCCE] bg-[#FBF8F2]">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="text-center text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8A8676]">
          Season-planning software for the presses that ship on time
        </h2>

        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {PRESSES.map((press) => (
            <li key={press} data-testid="press-logo" className="flex items-center gap-2.5">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 text-[#C0462A]">
                <path
                  d="M4 5.5A1.5 1.5 0 0 1 5.5 4H11v16H5.5A1.5 1.5 0 0 1 4 18.5zM20 5.5A1.5 1.5 0 0 0 18.5 4H13v16h5.5a1.5 1.5 0 0 0 1.5-1.5z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
              </svg>
              <span className="font-serif text-lg font-medium tracking-tight text-[#3B4256]">
                {press}
              </span>
            </li>
          ))}
        </ul>

        <dl className="mt-14 grid grid-cols-1 gap-8 border-t border-[#E3DCCE] pt-12 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} data-testid="trust-stat">
              <dt className="font-serif text-4xl font-semibold tracking-tight text-[#141B2E]">
                {stat.value}
              </dt>
              <dd className="mt-2">
                <span className="block text-sm font-semibold text-[#3B4256]">{stat.label}</span>
                <span className="mt-1 block text-sm leading-relaxed text-[#5C6377]">{stat.note}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
