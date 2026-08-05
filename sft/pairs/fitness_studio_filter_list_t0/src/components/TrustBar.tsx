const NUMBERS = [
  { value: '412', label: 'members training with us right now' },
  { value: '4.9', label: 'average from 218 written reviews' },
  { value: '86%', label: 'still training after twelve months' },
  { value: '6', label: 'coaches, all salaried, none on commission' },
]

const PARTNERS = [
  'Baltimore Rowing Club',
  "Fell's Landing Runners",
  'Harbor East Physical Therapy',
  'USA Weightlifting',
  'Patterson Park Fire Crew',
]

function StarRow() {
  return (
    <svg
      viewBox="0 0 120 22"
      className="h-5 w-28"
      role="img"
      aria-label="Rated 4.9 out of 5"
      focusable="false"
    >
      {[0, 24, 48, 72, 96].map((x) => (
        <path
          key={x}
          transform={`translate(${x} 0)`}
          d="M11 1.5l3 6.2 6.8 1-4.9 4.8 1.2 6.8L11 17.1 4.9 20.3l1.2-6.8L1.2 8.7l6.8-1z"
          fill="#E4682A"
        />
      ))}
    </svg>
  )
}

export function TrustBar() {
  return (
    <section id="proof" className="border-b border-[#0B2A33]/10 bg-[#0B2A33] text-[#F7F2EA]">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="text-xl font-black tracking-tight sm:text-2xl">
            Nine years on the same street, and the room is still full at 6am
          </h2>
          <div className="flex items-center gap-3">
            <StarRow />
            <span className="text-sm font-semibold text-[#F7F2EA]/70">
              4.9 from 218 reviews
            </span>
          </div>
        </div>

        <dl className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {NUMBERS.map((stat) => (
            <div key={stat.label} className="border-l-2 border-[#E4682A] pl-4">
              <dt className="text-3xl font-black tracking-tight">{stat.value}</dt>
              <dd className="mt-2 text-sm leading-snug text-[#F7F2EA]/70">{stat.label}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-12 border-t border-[#F7F2EA]/15 pt-8">
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#F7F2EA]/50">
            We coach alongside
          </h3>
          <ul className="mt-5 flex flex-wrap items-center gap-x-10 gap-y-4">
            {PARTNERS.map((name) => (
              <li key={name} className="flex items-center gap-2.5">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 shrink-0"
                  aria-hidden="true"
                  focusable="false"
                >
                  <circle cx="12" cy="12" r="10" fill="none" stroke="#1D7A6B" strokeWidth="2" />
                  <path
                    d="M7 12.6l3.2 3.2L17 9"
                    fill="none"
                    stroke="#1D7A6B"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="text-sm font-bold tracking-tight text-[#F7F2EA]/80">
                  {name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
