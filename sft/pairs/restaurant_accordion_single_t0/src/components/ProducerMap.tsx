type Producer = {
  id: string
  name: string
  what: string
  distance: string
  detail: string
}

const PRODUCERS: Producer[] = [
  {
    id: 'wren',
    name: 'The Wren, skippered by Delia Okoro',
    what: 'Turbot, mackerel, gurnard',
    distance: '400 metres',
    detail:
      'A twelve-metre day boat that lands at the slipway four times a week. Delia texts a photo of the box at six and we write the menu off it.',
  },
  {
    id: 'callowfield',
    name: 'Callowfield Market Garden',
    what: 'Celeriac, leeks, leaves, herbs',
    distance: '6 miles',
    detail:
      'Two and a half acres behind the church at Callowfield, worked by Rosa and Tam Hendry. Everything is cut the morning it is delivered.',
  },
  {
    id: 'bramblefold',
    name: 'Bramble Fold Dairy and Farm',
    what: 'Beef, sheep cheese, cream',
    distance: '18 miles',
    detail:
      'Grass-fed shorthorn hung fifty-five days on the bone, and a hard sheep cheese aged in their own cellar for eleven months.',
  },
  {
    id: 'hallow',
    name: 'Hallow Mill',
    what: 'Stone-ground flour',
    distance: '11 miles',
    detail:
      'A working water mill on the Wend that grinds a single-estate wheat for us every Thursday. It is the flour in every flatbread we serve.',
  },
  {
    id: 'wendvalley',
    name: 'Wend Valley Orchards',
    what: 'Cider, apples, greengages',
    distance: '14 miles',
    detail:
      'Forty varieties on old standard trees. Their keeved cider is on tap at the bar and their vinegar is in almost every dressing.',
  },
]

export function ProducerMap() {
  return (
    <section id="producers" aria-labelledby="producers-heading" className="bg-[#FAF6EF]">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="max-w-2xl">
          <p className="text-[11px] uppercase tracking-[0.28em] text-[#8B8073]">Where it comes from</p>
          <h2
            id="producers-heading"
            className="mt-3 text-4xl font-semibold tracking-tight text-[#123C43]"
          >
            Five people, none of them more than twenty miles away
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#6B6155]">
            We do not buy through a wholesaler and we do not have a supplier list as long as your arm.
            These five cover most of what lands on the pass, we pay them within seven days, and their
            names go on the menu because they did the harder half of the work.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <svg
            viewBox="0 0 360 320"
            role="img"
            aria-label="Hand-drawn map of Fenwick Harbour showing the restaurant on Harker Quay and the five producers around it"
            className="h-auto w-full rounded-3xl border border-[#E4DACB] bg-[#F3EADC] p-5"
          >
            <path d="M0 250c60-20 90 6 150-4s90-40 150-30 60 40 60 40v64H0Z" fill="#B8C6C2" opacity="0.6" />
            <path d="M0 268c60-18 96 8 156-2s84-34 144-24 60 34 60 34v44H0Z" fill="#7FA0A5" opacity="0.5" />
            <g stroke="#C9B79B" strokeWidth="2" strokeDasharray="6 7" fill="none">
              <path d="M186 244 96 150M186 244l-40-96M186 244l68-104M186 244l112-64" />
            </g>
            <g fontFamily="sans-serif" fontSize="11" fill="#4A423A">
              <circle cx="186" cy="244" r="12" fill="#C4472A" />
              <text x="150" y="278">Harker Quay</text>
              <circle cx="96" cy="150" r="8" fill="#123C43" />
              <text x="40" y="140">Callowfield</text>
              <circle cx="146" cy="148" r="8" fill="#123C43" />
              <text x="118" y="130">The Wren</text>
              <circle cx="254" cy="140" r="8" fill="#123C43" />
              <text x="238" y="126">Hallow Mill</text>
              <circle cx="298" cy="180" r="8" fill="#123C43" />
              <text x="264" y="204">Bramble Fold</text>
              <circle cx="76" cy="216" r="8" fill="#123C43" />
              <text x="26" y="236">Wend Valley</text>
            </g>
            <path d="M330 30v34m-17-17h34" stroke="#8B8073" strokeWidth="2" strokeLinecap="round" />
            <text x="322" y="24" fontFamily="sans-serif" fontSize="11" fill="#8B8073">
              N
            </text>
          </svg>

          <ul className="space-y-4">
            {PRODUCERS.map((producer) => (
              <li
                key={producer.id}
                data-testid="producer-card"
                className="rounded-2xl border border-[#E4DACB] bg-white p-6 shadow-sm"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h3 className="text-lg font-semibold tracking-tight text-[#171310]">
                    {producer.name}
                  </h3>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F3EADC] px-3 py-1 text-xs font-medium text-[#6B6155]">
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3.5 w-3.5 text-[#C4472A]">
                      <path
                        d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11Z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      />
                      <circle cx="12" cy="10" r="2.4" fill="currentColor" />
                    </svg>
                    {producer.distance}
                  </span>
                </div>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#C4472A]">
                  {producer.what}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[#6B6155]">{producer.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
