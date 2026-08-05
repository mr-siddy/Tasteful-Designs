const STATS = [
  { figure: '4.9', caption: 'Average of 268 member reviews' },
  { figure: '91%', caption: 'Still training after twelve months' },
  { figure: '1,340', caption: 'Intro sessions coached since 2016' },
  { figure: '0', caption: 'Contracts, joining fees or lock-ins' },
]

const CREDENTIALS = [
  { short: 'CSCS', full: 'Certified Strength & Conditioning Specialist' },
  { short: 'USAW-2', full: 'USA Weightlifting Advanced Coach' },
  { short: 'PN-1', full: 'Precision Nutrition Level 1' },
  { short: 'FRCms', full: 'Functional Range Conditioning Mobility' },
]

export function TrustBar() {
  return (
    <section className="border-b border-[#E2D8C6] bg-[#EFE6D8]">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#8A7F6C]">
              Trusted on the Hill
            </p>
            <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight text-[#123B31]">
              Eleven years of neighbours getting stronger in the same building
            </h2>
          </div>
          <div className="flex items-center gap-2" data-testid="rating-block">
            {[0, 1, 2, 3, 4].map((i) => (
              <svg key={i} viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                <path
                  d="M12 2.6l2.9 5.9 6.5.95-4.7 4.6 1.1 6.5L12 17.5l-5.8 3.05 1.1-6.5-4.7-4.6 6.5-.95z"
                  fill="#E8A33D"
                />
              </svg>
            ))}
            <span className="ml-2 text-sm font-medium text-[#3F3A31]">
              4.9 from 268 reviews
            </span>
          </div>
        </div>

        <dl className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.caption} className="border-l-2 border-[#D2683F] pl-4" data-testid="trust-stat">
              <dt className="text-3xl font-semibold tracking-tight text-[#123B31]">{s.figure}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-[#5C554A]">{s.caption}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-12 flex flex-wrap items-center gap-4 border-t border-[#DDD1BC] pt-8">
          <p className="text-xs uppercase tracking-[0.2em] text-[#8A7F6C]">
            Every coach on the floor holds
          </p>
          {CREDENTIALS.map((c) => (
            <span
              key={c.short}
              title={c.full}
              data-testid="credential-badge"
              className="inline-flex items-center gap-2 rounded-full border border-[#C9BBA2] bg-[#FBF7F1] px-4 py-2 text-xs font-semibold tracking-wide text-[#123B31]"
            >
              <svg viewBox="0 0 20 20" className="h-4 w-4" aria-hidden="true">
                <circle cx="10" cy="10" r="9" fill="none" stroke="#2F6B57" strokeWidth="2" />
                <path
                  d="M6 10.4l2.6 2.6L14.2 7.4"
                  fill="none"
                  stroke="#2F6B57"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {c.short}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
