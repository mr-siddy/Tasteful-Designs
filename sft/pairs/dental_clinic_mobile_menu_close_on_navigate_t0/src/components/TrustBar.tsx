const NUMBERS = [
  { value: '15 yrs', label: 'On Kilnwood Street', note: 'Same owners since 2011' },
  { value: '9', label: 'Chairs under the skylights', note: 'Three of them paediatric' },
  { value: '4,180', label: 'Crowns milled on site', note: 'Finished the same afternoon' },
  { value: '4.9 / 5', label: 'From 612 patient reviews', note: 'Collected after every visit' },
]

const ACCREDITATIONS = [
  'Oregon Dental Association',
  'Academy of General Dentistry',
  'Foundry Quarter Traders Guild',
  'Kilnwood Primary School dental programme',
]

function StarRow() {
  return (
    <span className="flex items-center gap-0.5" aria-hidden="true">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-4 w-4">
          <path
            d="M10 1.6l2.5 5.3 5.7.8-4.1 4 1 5.7L10 14.7 4.9 17.4l1-5.7-4.1-4 5.7-.8z"
            fill="#d9682f"
          />
        </svg>
      ))}
    </span>
  )
}

export function TrustBar() {
  return (
    <section id="proof" className="border-y border-[#14312c]/10 bg-[#14312c] text-[#f3e9dd]">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-serif text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            The numbers we get asked about
          </h2>
          <p className="flex items-center gap-2 text-sm text-[#cbdcd4]">
            <StarRow />
            4.9 average across 612 reviews
          </p>
        </div>

        <dl className="mt-9 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {NUMBERS.map((n) => (
            <div key={n.label} className="border-l border-[#d9682f]/50 pl-5">
              <dt className="font-serif text-3xl font-semibold text-white">{n.value}</dt>
              <dd className="mt-1.5 text-sm font-medium text-[#e6d6c5]">{n.label}</dd>
              <dd className="mt-1 text-xs text-[#a9c0b7]">{n.note}</dd>
            </div>
          ))}
        </dl>

        <h3 className="mt-12 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#a9c0b7]">
          Registered and involved with
        </h3>
        <ul className="mt-5 flex flex-wrap items-center gap-x-8 gap-y-4">
          {ACCREDITATIONS.map((name) => (
            <li key={name} className="flex items-center gap-2.5 text-sm text-[#e6d6c5]">
              <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" aria-hidden="true">
                <path
                  d="M12 2.5l8 3.2v6.1c0 4.6-3.3 8.2-8 9.7-4.7-1.5-8-5.1-8-9.7V5.7z"
                  fill="none"
                  stroke="#d9682f"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.4 12.2l2.6 2.5 4.6-5"
                  fill="none"
                  stroke="#f3e9dd"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
