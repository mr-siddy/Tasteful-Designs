const AWARDS = [
  {
    source: 'Ironbridge Gazette',
    line: 'Restaurant of the Year, 2024',
    note: '"The only kitchen in the city where the fire is the head chef."',
  },
  {
    source: 'The Marlow Guide',
    line: 'Two Forks, 2023 – 2025',
    note: 'Held for three consecutive editions, with a note for the milling room.',
  },
  {
    source: 'Fenland Produce Trust',
    line: 'Grower Partner of the Year',
    note: 'For nine years of fixed-price contracts with eleven Fenland farms.',
  },
]

const STATS = [
  { value: '4.9', label: 'Average from 1,284 guest reviews' },
  { value: '11', label: 'Farms and boats we buy from directly' },
  { value: '28', label: 'Days the sirloin hangs in our own room' },
  { value: '96%', label: 'Of tables rebooked within the year' },
]

function Star() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4" aria-hidden="true">
      <path
        d="M10 1.6 12.5 7l5.9.7-4.4 4 1.2 5.8L10 14.6 4.8 17.5 6 11.7 1.6 7.7 7.5 7Z"
        fill="#D8A244"
      />
    </svg>
  )
}

export function TrustBar() {
  return (
    <section data-section="proof" className="border-b border-[#2A211B]/10 bg-[#F0E4D2]">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#B7411F]">
              What people keep saying
            </p>
            <h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-[#1B1410]">
              Nine years, one fire, and a very short menu
            </h2>
          </div>
          <div className="flex items-center gap-3 rounded-full bg-[#FBF6EC] px-5 py-3 shadow-sm">
            <span className="flex gap-0.5">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </span>
            <span className="text-sm font-semibold text-[#1B1410]">4.9 out of 5</span>
            <span className="text-sm text-[#2A211B]/60">· 1,284 guests</span>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {AWARDS.map((award) => (
            <article
              key={award.source}
              className="rounded-3xl bg-[#FBF6EC] p-7 shadow-sm ring-1 ring-[#2A211B]/5"
            >
              <svg viewBox="0 0 44 44" className="h-9 w-9" aria-hidden="true">
                <circle cx="22" cy="18" r="13" fill="none" stroke="#B7411F" strokeWidth="2.5" />
                <path d="M15 30 L11 43 L22 38 L33 43 L29 30" fill="#D8A244" />
                <path d="M17 18 l4 4 l8 -8" fill="none" stroke="#B7411F" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
              <h3 className="mt-5 font-serif text-xl font-semibold text-[#1B1410]">
                {award.source}
              </h3>
              <p className="mt-1 text-sm font-semibold uppercase tracking-[0.14em] text-[#B7411F]">
                {award.line}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#2A211B]/75">{award.note}</p>
            </article>
          ))}
        </div>

        <dl className="mt-10 grid gap-6 rounded-3xl bg-[#2A211B] px-8 py-10 text-[#FBF6EC] sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.value}>
              <dt className="font-serif text-4xl font-semibold text-[#D8A244]">{stat.value}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-[#F0E4D2]/75">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
