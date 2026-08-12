type Treatment = {
  name: string
  price: string
  blurb: string
  includes: string[]
  glyph: JSX.Element
}

const stroke = { stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' } as const

const TREATMENTS: Treatment[] = [
  {
    name: 'Checkup, clean & X-rays',
    price: 'from $145',
    blurb:
      'Forty minutes with a hygienist rather than a rushed scale-and-polish, finishing with a plain-English rundown of anything worth watching over the next year.',
    includes: ['Full-mouth digital X-rays', 'Gum pocket charting', 'Written treatment plan'],
    glyph: (
      <svg viewBox="0 0 32 32" className="h-7 w-7" fill="none" aria-hidden="true">
        <path
          d="M16 5c6 2.2 9 6.5 9 12.7 0 5.7-2.8 9.6-5.4 9.6-1.7 0-2.5-1.5-3.6-1.5s-1.9 1.5-3.6 1.5C9.8 27.3 7 23.4 7 17.7 7 11.5 10 7.2 16 5Z"
          {...stroke}
        />
        <path d="M16 9.5v9" {...stroke} />
      </svg>
    ),
  },
  {
    name: 'White composite fillings',
    price: 'from $210',
    blurb:
      'Tooth-coloured composite shaded against the tooth beside it, placed in layers so the repair disappears instead of announcing itself in every photograph.',
    includes: ['Shade matched in daylight', 'Rubber dam for a dry field', 'Five-year workmanship cover'],
    glyph: (
      <svg viewBox="0 0 32 32" className="h-7 w-7" fill="none" aria-hidden="true">
        <path d="M16 4.5 6 9v8.5c0 5.6 4.1 9.8 10 11.5 5.9-1.7 10-5.9 10-11.5V9Z" {...stroke} />
        <path d="m11.5 16 3.2 3.2 6.1-6.6" {...stroke} />
      </svg>
    ),
  },
  {
    name: 'Birchline clear aligners',
    price: 'from $3,400',
    blurb:
      'Our own scanned-and-milled aligner programme for crowding and relapse after childhood braces, typically nine to fourteen months with reviews every six weeks.',
    includes: ['3D scan, no impression trays', 'Refinement trays included', 'Retainers for the first year'],
    glyph: (
      <svg viewBox="0 0 32 32" className="h-7 w-7" fill="none" aria-hidden="true">
        <path d="M5 12c4-3.5 18-3.5 22 0-1 8-4.5 13-11 15C9.5 25 6 20 5 12Z" {...stroke} />
        <path d="M8.5 14h15M11 19h10" {...stroke} />
      </svg>
    ),
  },
  {
    name: 'Single-tooth implants',
    price: 'from $4,200',
    blurb:
      'Placed and restored under one roof by Dr Lindqvist, so the person who puts the post in is the person who fits the crown four months later.',
    includes: ['Cone-beam scan and guide', 'Titanium post and abutment', 'Milled porcelain crown'],
    glyph: (
      <svg viewBox="0 0 32 32" className="h-7 w-7" fill="none" aria-hidden="true">
        <path d="M10 8.5c0-2.5 2.7-4 6-4s6 1.5 6 4-2.7 4-6 4-6-1.5-6-4Z" {...stroke} />
        <path d="M16 12.5v15M12 16.5h8M12.5 21h7M13 25.5h6" {...stroke} />
      </svg>
    ),
  },
  {
    name: 'Porcelain veneers',
    price: 'from $1,150',
    blurb:
      'A conservative preparation and a wax mock-up you wear home for a weekend, so nothing irreversible happens until you have lived with the shape.',
    includes: ['Trial smile before any drilling', 'Milled in the Halloway lab', 'Ten-year porcelain guarantee'],
    glyph: (
      <svg viewBox="0 0 32 32" className="h-7 w-7" fill="none" aria-hidden="true">
        <path d="M16 4.5 27 12l-4.2 15.5H9.2L5 12Z" {...stroke} />
        <path d="M11 12h10l-5 15.5Z" {...stroke} />
      </svg>
    ),
  },
  {
    name: 'Same-day emergency care',
    price: 'from $190',
    blurb:
      'One chair is kept empty every weekday until three in the afternoon for broken cusps, lost crowns and the toothache that started overnight.',
    includes: ['Phones answered from 7:15', 'Pain settled the same visit', 'No new-patient surcharge'],
    glyph: (
      <svg viewBox="0 0 32 32" className="h-7 w-7" fill="none" aria-hidden="true">
        <circle cx="16" cy="16" r="11.5" {...stroke} />
        <path d="M16 9.5V16l4.5 3" {...stroke} />
      </svg>
    ),
  },
]

export function TreatmentsSection() {
  return (
    <section id="treatments" className="scroll-mt-28 bg-stone-50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-600">What we do</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-teal-950 sm:text-4xl">
            Everything most families need, priced before we start
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-stone-600">
            These are the six things we do most weeks. The figure beside each one is what the straightforward version
            actually costs at Copper Birch — not a teaser rate that doubles once you are in the chair. Anything more
            involved gets a written quote at the end of your examination, and you take it home to think about.
          </p>
        </div>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TREATMENTS.map((treatment) => (
            <li
              key={treatment.name}
              data-testid="treatment-card"
              className="flex flex-col rounded-3xl border border-stone-200 bg-white p-7 shadow-sm transition-shadow hover:shadow-lg hover:shadow-stone-900/5"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 text-teal-700">
                {treatment.glyph}
              </span>
              <h3 className="mt-5 text-lg font-semibold tracking-tight text-teal-950">{treatment.name}</h3>
              <p className="mt-2 text-sm font-semibold text-amber-700" data-testid="treatment-price">
                {treatment.price}
              </p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-stone-600">{treatment.blurb}</p>
              <ul className="mt-5 space-y-2 border-t border-stone-100 pt-5">
                {treatment.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-stone-500">
                    <svg viewBox="0 0 16 16" className="mt-1 h-3.5 w-3.5 shrink-0 text-teal-600" aria-hidden="true">
                      <path
                        fill="currentColor"
                        d="M6.2 11.6 3 8.4l1.1-1.1 2.1 2.1 5.7-5.7L13 4.8z"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <p className="mt-10 rounded-2xl bg-teal-50 px-6 py-5 text-sm text-teal-900 ring-1 ring-teal-100">
          Treatment over $800 can be split across six months at no interest through our own practice plan, and we bill
          most major insurers on the spot so you only pay the gap. Ask at reception — nobody will make you fill in a form
          to find out the number.
        </p>
      </div>
    </section>
  )
}
