const LAYOUTS = [
  {
    id: 'long-table',
    name: 'One long table',
    capacity: '14 seated',
    price: 'From $1,450 for the room',
    detail:
      'The way we like it: everyone at one oak table under the roof lights, food down the middle, the whole hearth menu served family style.',
  },
  {
    id: 'two-tables',
    name: 'Two tables of eight',
    capacity: '16 seated',
    price: 'From $1,600 for the room',
    detail:
      'For a party that needs to move around a bit. Same menu, two services running side by side, and a bit more floor for standing between courses.',
  },
  {
    id: 'standing',
    name: 'Standing, with the coals lit',
    capacity: '30 standing',
    price: 'From $1,100 for three hours',
    detail:
      'Flatbreads and skewers cooked on the small hearth in the loft itself, cider and sherry poured at the sideboard, no seating plan to argue about.',
  },
]

export function NetLoft() {
  return (
    <section id="net-loft" aria-labelledby="loft-heading" className="bg-[#FAF6EF]">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#8B8073]">Upstairs</p>
            <h2 id="loft-heading" className="mt-3 text-4xl font-semibold tracking-tight text-[#123C43]">
              The Net Loft, where the ropes used to dry
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#6B6155]">
              The room above the kitchen is the old drying loft — eleven metres of bare rafters, four
              roof lights over the water, and a table Tam Hendry built out of the original floor
              joists. It takes fourteen at one table, and because it sits directly over the hearth it
              is the warmest room on the quay in February.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#6B6155]">
              We do not hire it out as an empty room. Every booking is cooked by the same kitchen off
              the same fire, and one of us stays with you all night — usually Priya, who will happily
              tell your guests which boat the fish came off.
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                'Own stair and own bar',
                'Step-free lift from the quay',
                'Screen and speakers behind the panelling',
                'No hire fee on Wednesdays in winter',
              ].map((item) => (
                <li key={item} data-testid="loft-feature" className="flex items-start gap-2.5 text-sm text-[#4A423A]">
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="mt-0.5 h-4 w-4 flex-none text-[#C4472A]">
                    <path d="m5 12 5 5L19 7" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="#book"
              className="mt-9 inline-flex items-center gap-2 rounded-full border border-[#123C43] px-6 py-3 text-sm font-semibold text-[#123C43] transition-colors hover:bg-[#123C43] hover:text-[#FAF6EF]"
            >
              Ask about a date
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
                <path d="M5 12h14m-6-6 6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          <div>
            <svg
              viewBox="0 0 420 260"
              role="img"
              aria-label="Illustration of the Net Loft: bare rafters, roof lights and one long oak table set for fourteen"
              className="h-auto w-full rounded-3xl border border-[#E4DACB] bg-[#F3EADC] p-5"
            >
              <path d="M30 120 210 30l180 90v110H30Z" fill="#E4DACB" />
              <path d="M30 120 210 30l180 90" fill="none" stroke="#8B8073" strokeWidth="3" strokeLinejoin="round" />
              <g stroke="#C9B79B" strokeWidth="4" strokeLinecap="round">
                <path d="M90 96v124M150 66v154M270 66v154M330 96v124" />
              </g>
              <g fill="#F2E8D6" opacity="0.9">
                <rect x="118" y="74" width="42" height="26" rx="4" transform="rotate(-27 139 87)" />
                <rect x="262" y="74" width="42" height="26" rx="4" transform="rotate(27 283 87)" />
              </g>
              <rect x="86" y="176" width="248" height="20" rx="6" fill="#8B6B4A" />
              <g fill="#123C43">
                {[104, 140, 176, 212, 248, 284, 316].map((x) => (
                  <circle key={`n-${x}`} cx={x} cy="164" r="8" />
                ))}
                {[104, 140, 176, 212, 248, 284, 316].map((x) => (
                  <circle key={`s-${x}`} cx={x} cy="208" r="8" />
                ))}
              </g>
              <g fill="#E08A3C">
                <circle cx="176" cy="186" r="5" />
                <circle cx="212" cy="186" r="5" />
                <circle cx="248" cy="186" r="5" />
              </g>
            </svg>

            <ul className="mt-8 grid gap-4 sm:grid-cols-3">
              {LAYOUTS.map((layout) => (
                <li
                  key={layout.id}
                  data-testid="loft-layout"
                  className="rounded-2xl border border-[#E4DACB] bg-white p-5 shadow-sm"
                >
                  <h3 className="text-base font-semibold tracking-tight text-[#171310]">
                    {layout.name}
                  </h3>
                  <p className="mt-2 text-sm font-semibold text-[#C4472A]">{layout.capacity}</p>
                  <p className="mt-1 text-xs text-[#8B8073]">{layout.price}</p>
                  <p className="mt-3 text-sm leading-relaxed text-[#6B6155]">{layout.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
