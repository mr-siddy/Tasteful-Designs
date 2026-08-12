const FIGURES = [
  { value: '6,400', label: 'patients on the books', note: 'families, students and shift workers' },
  { value: '27', label: 'years on Halloway Street', note: 'same building, three generations' },
  { value: '4.9', label: 'average patient rating', note: 'from 812 verified reviews' },
  { value: '1', label: 'emergency chair held daily', note: 'kept free until 15:00 every weekday' },
]

const CREDENTIALS = [
  'State Dental Board registered',
  'Certified in oral conscious sedation',
  'Digital radiography licensed',
  'Clear-aligner accredited clinicians',
]

function Star() {
  return (
    <svg viewBox="0 0 20 20" className="h-5 w-5 text-amber-500" aria-hidden="true">
      <path
        fill="currentColor"
        d="m10 1.8 2.5 5.1 5.6.8-4 3.9 1 5.6L10 14.6 4.9 17.2l1-5.6-4-3.9 5.6-.8z"
      />
    </svg>
  )
}

function SealGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0 text-teal-700" aria-hidden="true" fill="none">
      <path
        d="M12 2.7 4.8 5.6v6c0 4.6 3 8.1 7.2 9.7 4.2-1.6 7.2-5.1 7.2-9.7v-6z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="m8.6 12 2.3 2.3 4.5-4.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

export function TrustBar() {
  return (
    <section id="trust" className="border-b border-stone-200 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
        <h2 className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-stone-400">
          Why Rivermill keeps sending us its neighbours
        </h2>

        <dl className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {FIGURES.map((figure) => (
            <div key={figure.label} data-testid="trust-figure" className="text-center sm:text-left">
              <dt className="text-4xl font-semibold tracking-tight text-teal-900">{figure.value}</dt>
              <dd className="mt-1 text-sm font-medium text-stone-700">{figure.label}</dd>
              <dd className="mt-1 text-xs text-stone-500">{figure.note}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-3xl bg-stone-50 p-6 ring-1 ring-stone-200 lg:flex-row">
          <p className="flex items-center gap-3 text-sm font-medium text-stone-700">
            <span className="flex" aria-hidden="true">
              {['one', 'two', 'three', 'four', 'five'].map((id) => (
                <Star key={id} />
              ))}
            </span>
            4.9 out of 5 across 812 reviews left by patients since 2019
          </p>
          <ul className="grid gap-3 sm:grid-cols-2">
            {CREDENTIALS.map((credential) => (
              <li key={credential} className="flex items-center gap-2.5 text-sm text-stone-600">
                <SealGlyph />
                {credential}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
