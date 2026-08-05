function BoardArt() {
  return (
    <svg viewBox="0 0 400 260" className="w-full rounded-2xl border border-[#EADFCF] bg-white shadow-md" role="img" aria-label="Three trucks on the dispatch board with drive time between calls">
      <rect width="400" height="260" rx="18" fill="#FFFFFF" />
      <rect x="20" y="20" width="360" height="30" rx="10" fill="#12242C" opacity="0.05" />
      <text x="34" y="40" fontSize="12" fontFamily="sans-serif" fill="#3D555F">
        7am · 9am · 11am · 1pm · 3pm
      </text>
      {[0, 1, 2].map((row) => (
        <g key={row} transform={`translate(0 ${68 + row * 62})`}>
          <text x="24" y="26" fontSize="12" fontWeight="600" fontFamily="sans-serif" fill="#12242C">
            {['Truck 4', 'Truck 7', 'Truck 9'][row]}
          </text>
          <rect x="86" y="8" width={110 + row * 30} height="26" rx="8" fill="#C25A2B" opacity={0.75 - row * 0.18} />
          <rect x={210 + row * 34} y="8" width={92 - row * 12} height="26" rx="8" fill="#0E6A66" opacity="0.65" />
          <path d={`M${198 + row * 34} 21h12`} stroke="#6A7F87" strokeWidth="2" strokeDasharray="3 3" />
        </g>
      ))}
      <rect x="20" y="228" width="360" height="1" fill="#EADFCF" />
    </svg>
  )
}

function StockArt() {
  return (
    <svg viewBox="0 0 400 260" className="w-full rounded-2xl border border-[#EADFCF] bg-white shadow-md" role="img" aria-label="Van stock list showing part counts falling below their restock threshold">
      <rect width="400" height="260" rx="18" fill="#FFFFFF" />
      {[
        { part: '45/5 dual capacitor', count: 6, min: 4 },
        { part: '3/4in copper coupling', count: 2, min: 8 },
        { part: 'Universal blower motor', count: 1, min: 2 },
        { part: 'R-410A, 25lb', count: 3, min: 2 },
      ].map((row, index) => (
        <g key={row.part} transform={`translate(0 ${28 + index * 56})`}>
          <rect x="20" y="0" width="360" height="44" rx="10" fill="#FBF6EE" stroke="#EADFCF" />
          <text x="38" y="27" fontSize="12" fontFamily="sans-serif" fill="#12242C">
            {row.part}
          </text>
          <rect x="292" y="12" width="70" height="20" rx="10" fill={row.count < row.min ? '#C25A2B' : '#0E6A66'} opacity="0.16" />
          <text
            x="327"
            y="26"
            textAnchor="middle"
            fontSize="11"
            fontWeight="700"
            fontFamily="sans-serif"
            fill={row.count < row.min ? '#C25A2B' : '#0E6A66'}
          >
            {row.count} on truck
          </text>
        </g>
      ))}
    </svg>
  )
}

function InvoiceArt() {
  return (
    <svg viewBox="0 0 400 260" className="w-full rounded-2xl border border-[#EADFCF] bg-white shadow-md" role="img" aria-label="An invoice marked paid at the curb with the card deposit scheduled">
      <rect width="400" height="260" rx="18" fill="#FFFFFF" />
      <rect x="34" y="30" width="150" height="12" rx="6" fill="#12242C" opacity="0.8" />
      <rect x="34" y="56" width="96" height="9" rx="4.5" fill="#12242C" opacity="0.3" />
      {[0, 1, 2].map((line) => (
        <g key={line} transform={`translate(0 ${96 + line * 34})`}>
          <rect x="34" y="0" width={190 - line * 26} height="9" rx="4.5" fill="#12242C" opacity="0.35" />
          <rect x="300" y="0" width="66" height="9" rx="4.5" fill="#12242C" opacity="0.2" />
        </g>
      ))}
      <rect x="34" y="206" width="332" height="1" fill="#EADFCF" />
      <rect x="248" y="218" width="118" height="26" rx="13" fill="#0E6A66" opacity="0.14" />
      <text x="307" y="235" textAnchor="middle" fontSize="12" fontWeight="700" fontFamily="sans-serif" fill="#0E6A66">
        Paid · 4:12pm
      </text>
      <circle cx="360" cy="46" r="20" fill="#E8813F" opacity="0.18" />
      <path d="M352 46l6 6 12-13" stroke="#C25A2B" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const BLOCKS = [
  {
    kicker: 'Dispatch',
    title: 'The board knows who is closest and who has the part',
    body: 'When a no-cool call comes in at 7:12am, Copperline already knows Truck 7 finishes its tune-up eleven minutes away, that the tech is certified on that furnace family, and that the run capacitor the job probably needs is sitting in bin 3 of that van. The dispatcher drags the call, the tech accepts from the driveway, and the homeowner gets a text with a name, a photo and an arrival window that is honest.',
    points: [
      'Drive-time aware assignment, not a guess off a map',
      'Skill and certification matching per equipment family',
      'Homeowner gets an on-the-way text with a real window',
    ],
    art: <BoardArt />,
  },
  {
    kicker: 'Van stock',
    title: 'Your parts count stops being fiction on day three',
    body: 'Shops lose real money to trucks nobody has counted since spring. In Copperline every van is a stocking location: parts are scanned onto the job they were used on, counts fall in real time, and anything under its threshold lands on the warehouse pick list before the morning meeting. When a tech says the job needs a blower motor, you can see from the office whether one is already forty minutes away in Truck 9.',
    points: [
      'Per-truck bins with minimum and restock levels',
      'Overnight pick list, printed or on the warehouse screen',
      'Parts cost lands on the job, so margin is per-ticket and real',
    ],
    art: <StockArt />,
  },
  {
    kicker: 'Money',
    title: 'The invoice is finished before the tailgate closes',
    body: 'Copperline turns the completed work order into an invoice on the spot — labour, parts, the agreement discount and tax already applied from your price book. The homeowner taps to pay by card or ACH, or takes financing in the same flow, and the deposit is scheduled before the truck is back on the road. Receivables that used to sit for six weeks now average eighteen days, and nobody is chasing a signature.',
    points: [
      'Card, ACH and financing from the technician app',
      'Agreement pricing applied automatically, no mental math',
      'Aging report your bookkeeper can actually reconcile',
    ],
    art: <InvoiceArt />,
  },
]

export default function DeepDive() {
  return (
    <section id="deep-dive" className="border-b border-[#EADFCF] bg-white">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#C25A2B]">How it actually works</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-[2.7rem]">
            Three things a shop has to get right every single day
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#3D555F]">
            Software that only schedules is half a system. Here is what Copperline does with the call, the part and the
            money — in that order, because that is the order the day happens in.
          </p>
        </div>

        <div className="mt-16 space-y-20">
          {BLOCKS.map((block, index) => (
            <article
              key={block.title}
              data-testid="deep-dive-block"
              className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0E6A66]">{block.kicker}</p>
                <h3 className="mt-3 text-2xl font-bold tracking-tight sm:text-[1.75rem]">{block.title}</h3>
                <p className="mt-5 leading-relaxed text-[#3D555F]">{block.body}</p>
                <ul className="mt-6 space-y-3">
                  {block.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm text-[#12242C]">
                      <svg viewBox="0 0 20 20" className="mt-0.5 h-4 w-4 flex-none" aria-hidden="true" focusable="false">
                        <circle cx="10" cy="10" r="9" fill="#0E6A66" opacity="0.12" />
                        <path d="M6 10.3l2.8 2.8L14.2 7" stroke="#0E6A66" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>{block.art}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
