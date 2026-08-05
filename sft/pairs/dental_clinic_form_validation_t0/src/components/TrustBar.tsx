const STATS = [
  { value: '4.9', label: 'Average rating', detail: 'from 612 verified patient reviews' },
  { value: '11 yrs', label: 'On Alder Court', detail: 'same address, same front desk' },
  { value: '6 min', label: 'Average wait', detail: 'measured across the last 500 visits' },
  { value: '3,400+', label: 'Patients cared for', detail: 'across Kestrel Park and Ferndale' },
]

const INSURERS = ['Meridian Health', 'Cascadia Benefits', 'Northline', 'Baywater', 'Pactolus Care']

export function TrustBar() {
  return (
    <section id="proof" className="border-b border-teal-900/10 bg-stone-100">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="flex flex-col gap-4 text-center">
          <div className="mx-auto flex items-center gap-1" aria-hidden="true">
            {[0, 1, 2, 3, 4].map((star) => (
              <svg key={star} viewBox="0 0 20 20" className="h-5 w-5 text-amber-500" fill="currentColor">
                <path d="m10 1.6 2.6 5.3 5.8.8-4.2 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L1.6 7.7l5.8-.8z" />
              </svg>
            ))}
          </div>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Kestrel Park keeps sending us their neighbours
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-teal-900/70">
            Most of our new patients arrive because someone on their street told them we run to
            schedule and quote honestly. Here is what that has added up to.
          </p>
        </div>

        <dl className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              data-testid="trust-stat"
              className="rounded-3xl bg-stone-50 p-6 shadow-sm ring-1 ring-inset ring-teal-900/10"
            >
              <dt className="text-sm font-semibold uppercase tracking-wide text-teal-700">
                {stat.label}
              </dt>
              <dd className="mt-2 text-4xl font-semibold tracking-tight text-teal-900">
                {stat.value}
              </dd>
              <p className="mt-2 text-sm leading-relaxed text-teal-900/60">{stat.detail}</p>
            </div>
          ))}
        </dl>

        <div className="mt-12 rounded-3xl border border-dashed border-teal-900/20 px-6 py-7">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">
            We bill these funds directly, on the spot
          </p>
          <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {INSURERS.map((insurer) => (
              <li
                key={insurer}
                data-testid="insurer"
                className="flex items-center gap-2 text-sm font-semibold text-teal-900/70"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6 text-teal-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 3 4.5 6v6c0 4.4 3.2 7.9 7.5 9 4.3-1.1 7.5-4.6 7.5-9V6z" />
                  <path d="m9 12 2.2 2.2L15.5 10" strokeLinecap="round" />
                </svg>
                {insurer}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-center text-sm text-teal-900/60">
            No fund? Our in-house membership plans start at $29 a month and cover both check-ups
            and cleans.
          </p>
        </div>
      </div>
    </section>
  )
}
