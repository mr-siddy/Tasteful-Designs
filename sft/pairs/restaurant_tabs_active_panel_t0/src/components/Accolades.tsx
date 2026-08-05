const AWARDS = [
  { title: 'Restaurant of the Year', body: 'The Providence Journal, 2024' },
  { title: 'Semifinalist, Best Chef Northeast', body: 'James Beard Foundation, 2025' },
  { title: 'Top 25 Tables in Rhode Island', body: 'Rhode Island Monthly, 2023–2026' },
  { title: 'Certified Whole-Animal Kitchen', body: 'New England Fire & Smoke Guild' },
]

function Laurel() {
  return (
    <svg viewBox="0 0 64 44" aria-hidden="true" className="h-11 w-16 shrink-0">
      <path
        d="M20 40C10 36 6 27 8 16c8 1 13 6 15 13"
        fill="none"
        stroke="#b45309"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M44 40c10-4 14-13 12-24-8 1-13 6-15 13"
        fill="none"
        stroke="#b45309"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M32 8l3.4 7.1 7.6 1-5.6 5.4 1.4 7.7L32 25.5l-6.8 3.7 1.4-7.7-5.6-5.4 7.6-1z"
        fill="#f59e0b"
      />
    </svg>
  )
}

export function Accolades() {
  return (
    <section
      id="acclaim"
      data-testid="accolades"
      className="border-y border-stone-200 bg-white py-16"
    >
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col items-center gap-4 text-center">
          <div
            className="flex items-center gap-1 text-amber-500"
            role="img"
            aria-label="Rated 4.8 out of 5 by guests"
          >
            {[0, 1, 2, 3, 4].map((i) => (
              <svg key={i} viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-current">
                <path d="M12 2.6l2.9 6 6.6.9-4.8 4.6 1.2 6.6L12 17.6 6.1 20.7l1.2-6.6L2.5 9.5l6.6-.9z" />
              </svg>
            ))}
          </div>
          <h2 className="font-serif text-3xl font-semibold tracking-tight md:text-4xl">
            4.8 from 1,240 guests, and a fire that has not gone out since March
          </h2>
          <p className="max-w-2xl text-stone-600">
            We do not advertise. Everything below arrived because someone sat down, ate, and then
            told other people about it — which is still the only marketing a dining room can
            actually trust.
          </p>
        </div>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {AWARDS.map((award) => (
            <li
              key={award.title}
              data-testid="award"
              className="flex items-start gap-4 rounded-2xl border border-stone-200 bg-stone-50 p-6"
            >
              <Laurel />
              <div>
                <h3 className="text-sm font-semibold leading-snug text-stone-900">{award.title}</h3>
                <p className="mt-1 text-sm text-stone-500">{award.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
