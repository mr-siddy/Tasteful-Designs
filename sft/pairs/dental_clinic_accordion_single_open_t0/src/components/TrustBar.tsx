const STATS = [
  { value: '4.9', label: 'average from 612 reviews' },
  { value: '17', label: 'years on Bramble Court' },
  { value: '5,400', label: 'registered patients' },
  { value: '11', label: 'chairs, four of them quiet rooms' },
]

const INSURERS = ['Wyeford Mutual', 'Northbank Health', 'Denplan Essentials', 'Cormorant Care']

function Star() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 text-[#E4735B]">
      <path
        d="m12 3 2.7 5.7 6.3.9-4.6 4.4 1.1 6.2-5.5-3-5.5 3 1.1-6.2L3 9.6l6.3-.9L12 3Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function TrustBar() {
  return (
    <section id="proof" className="border-b border-[#E3DCD0] bg-white">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex" aria-hidden="true">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
            <p className="text-sm leading-snug text-[#5A5347]">
              <span className="font-semibold text-[#332A56]">Rated 4.9 out of 5</span> by patients
              across Wyeford, Halyard and Stone Reach.
            </p>
          </div>

          <dl className="grid grid-cols-2 gap-x-10 gap-y-6 sm:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label} data-testid="trust-stat">
                <dt className="text-3xl font-semibold tracking-tight text-[#332A56]">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-xs uppercase tracking-[0.14em] text-[#8B8375]">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-12 border-t border-[#EFE9E0] pt-8">
          <h3 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8B8375]">
            We bill these insurers directly
          </h3>
          <ul className="mt-5 flex flex-wrap items-center gap-4">
            {INSURERS.map((name) => (
              <li
                key={name}
                data-testid="insurer-badge"
                className="flex items-center gap-2.5 rounded-xl border border-[#EFE9E0] bg-[#FBF9F5] px-4 py-2.5"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 text-[#5B4BA8]">
                  <path
                    d="M12 3l7 3v6c0 4.2-2.9 7.6-7 9-4.1-1.4-7-4.8-7-9V6l7-3Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 12l2 2 4-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-sm font-medium text-[#4A4438]">{name}</span>
              </li>
            ))}
            <li className="text-sm text-[#6A6255]">
              Not insured? Our own membership plans start at £14.50 a month.
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
