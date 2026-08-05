const NUMBERS = [
  { value: '80', label: 'winters open on Cedar Bluff Road' },
  { value: '3', label: 'generations of the Ostrowski family' },
  { value: '212', label: 'perch dinners on an average Friday' },
  { value: '22', label: 'years Curt has run the broiler' },
]

const PRESS = [
  {
    quote:
      'The relish tray alone is worth the drive, and the old fashioned is the best argument in the state for brandy over whiskey.',
    source: 'Lakeland Monthly',
  },
  {
    quote:
      'A supper club that never had to be revived, because it never stopped. The Friday fry line starts at 3:45 and nobody minds.',
    source: 'The Northern Table',
  },
  {
    quote: 'Delia Ostrowski runs the warmest dining room within a hundred miles of here.',
    source: 'Harlow Bend Register',
  },
]

export function TrustBar() {
  return (
    <section className="border-y border-[#17130F]/10 bg-[#EFE7D5]">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="text-[11px] uppercase tracking-[0.32em] text-[#7C6B4B]">
          What the neighbours and the notebooks say
        </h2>

        <dl className="mt-8 grid grid-cols-2 gap-8 border-b border-[#17130F]/10 pb-12 lg:grid-cols-4">
          {NUMBERS.map((entry) => (
            <div key={entry.label} data-testid="trust-number">
              <dt className="text-4xl font-semibold tracking-tight text-[#1C4535]">
                {entry.value}
              </dt>
              <dd className="mt-2 text-sm leading-snug text-[#5C5445]">{entry.label}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {PRESS.map((entry) => (
            <figure key={entry.source} data-testid="press-quote" className="flex flex-col gap-4">
              <svg viewBox="0 0 32 24" aria-hidden="true" className="h-6 w-8 text-[#D2A24C]">
                <path
                  d="M0 24V12C0 5.4 4.6.7 11 0v5.2C7.6 6 6 8 6 11h5v13H0Zm18 0V12C18 5.4 22.6.7 29 0v5.2C25.6 6 24 8 24 11h5v13h-11Z"
                  fill="currentColor"
                />
              </svg>
              <blockquote className="text-base leading-relaxed text-[#2E2A22]">
                {entry.quote}
              </blockquote>
              <figcaption className="mt-auto text-xs font-semibold uppercase tracking-[0.2em] text-[#7C2D2D]">
                {entry.source}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
