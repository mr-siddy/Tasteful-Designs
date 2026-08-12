function TicketFlow() {
  return (
    <svg
      viewBox="0 0 320 210"
      role="img"
      aria-label="A cut ticket moving from marker to spreader to bundle to finishing"
      className="h-auto w-full"
    >
      <rect x="0" y="0" width="320" height="210" rx="14" fill="#FFFDF8" />
      {['Marker', 'Spread', 'Bundle', 'Finish'].map((step, i) => (
        <g key={step}>
          <rect
            x={16 + i * 76}
            y={54}
            width={62}
            height={62}
            rx={12}
            fill={i < 3 ? '#2C5C4F' : '#E6DCCD'}
          />
          <text
            x={47 + i * 76}
            y={90}
            textAnchor="middle"
            fontSize="11"
            fontWeight="700"
            fill={i < 3 ? '#F6F2EC' : '#5A5364'}
          >
            {step}
          </text>
          {i < 3 && (
            <path
              d={`M${82 + i * 76} 85h10`}
              stroke="#C1552F"
              strokeWidth="2"
              markerEnd=""
              strokeLinecap="round"
            />
          )}
        </g>
      ))}
      <text x="16" y="36" fontSize="11" fontFamily="monospace" fill="#7A7286">
        CT-2214 · 400 UNITS · LOT 4471
      </text>
      <rect x="16" y="140" width="288" height="10" rx="5" fill="#E6DCCD" />
      <rect x="16" y="140" width="196" height="10" rx="5" fill="#C1552F" />
      <text x="16" y="172" fontSize="11" fill="#5A5364">
        268 of 400 sewn · 0 shade mismatches · 3 in rework
      </text>
      <text x="16" y="192" fontSize="11" fill="#5A5364">
        Promised to Cormorant Workwear: Friday, 4pm
      </text>
    </svg>
  )
}

function YieldChart() {
  return (
    <svg
      viewBox="0 0 320 210"
      role="img"
      aria-label="Fabric yield per style rising over four seasons"
      className="h-auto w-full"
    >
      <rect x="0" y="0" width="320" height="210" rx="14" fill="#1E1B26" />
      <text x="18" y="32" fontSize="11" fontFamily="monospace" fill="#B9AFC2">
        MARKER EFFICIENCY BY SEASON
      </text>
      {[
        { season: 'S23', value: 78 },
        { season: 'F23', value: 82 },
        { season: 'S24', value: 86 },
        { season: 'F24', value: 88 },
      ].map((d, i) => (
        <g key={d.season}>
          <rect
            x={30 + i * 70}
            y={190 - d.value * 1.35}
            width={44}
            height={d.value * 1.35 - 30}
            rx={6}
            fill={i === 3 ? '#C1552F' : '#2C5C4F'}
          />
          <text
            x={52 + i * 70}
            y={182}
            textAnchor="middle"
            fontSize="11"
            fill="#B9AFC2"
          >
            {d.season}
          </text>
          <text
            x={52 + i * 70}
            y={184 - d.value * 1.35}
            textAnchor="middle"
            fontSize="11"
            fontWeight="700"
            fill="#F6F2EC"
          >
            {d.value}%
          </text>
        </g>
      ))}
    </svg>
  )
}

function MondayBoard() {
  return (
    <svg
      viewBox="0 0 320 210"
      role="img"
      aria-label="A Monday production board listing four open runs and their promised dates"
      className="h-auto w-full"
    >
      <rect x="0" y="0" width="320" height="210" rx="14" fill="#EFE9DE" />
      <text x="18" y="30" fontSize="11" fontFamily="monospace" fill="#7A7286">
        MONDAY · OPEN RUNS
      </text>
      {[
        { style: 'Chore coat 12oz', pct: 0.67, due: 'Fri' },
        { style: 'Field pant', pct: 0.41, due: 'Tue' },
        { style: 'Camp shirt', pct: 0.88, due: 'Wed' },
        { style: 'Knit crew', pct: 0.22, due: 'Mon' },
      ].map((r, i) => (
        <g key={r.style}>
          <text x={18} y={62 + i * 36} fontSize="12" fill="#1E1B26" fontWeight="600">
            {r.style}
          </text>
          <rect x={18} y={70 + i * 36} width={230} height={8} rx={4} fill="#DCCFB8" />
          <rect
            x={18}
            y={70 + i * 36}
            width={230 * r.pct}
            height={8}
            rx={4}
            fill={r.pct > 0.6 ? '#2C5C4F' : '#C1552F'}
          />
          <text x={262} y={76 + i * 36} fontSize="11" fill="#5A5364">
            due {r.due}
          </text>
        </g>
      ))}
    </svg>
  )
}

const BLOCKS = [
  {
    id: 'lifecycle',
    eyebrow: 'One ticket, end to end',
    title: 'The ticket that leaves the cutting table is the ticket that ships',
    body:
      'On most floors a run is re-entered four times: once on the marker sheet, once on the spreader’s clipboard, once on the bundle tags and once in whatever the office uses to invoice. Every re-entry is a chance for the ply count or the size ratio to drift, and by the time anyone notices, three hundred sleeves are already cut. Grainline issues the ticket once and then follows it, so the number on the packing list is the number the cutter started with.',
    points: [
      'Ply count, lay length and marker efficiency captured at the spreader',
      'Bundle tags generated from the ticket, not typed from it',
      'Short-ships flagged at the operation that caused them',
    ],
    art: <TicketFlow />,
    flip: false,
  },
  {
    id: 'fabric',
    eyebrow: 'Fabric that knows what it costs',
    title: 'Yardage stops being a guess in the second week',
    body:
      'Fabric is the biggest line on a small-batch invoice and usually the least measured. Grainline records yield against every marker you actually cut — not the theoretical one from the pattern software — and shows you the styles quietly costing you a quarter yard per garment. One workwear label on our board found four cents a unit in a sleeve rotation and eleven cents in a re-nested pocket bag.',
    points: [
      'Roll-level yardage reserved against open tickets',
      'Shrinkage and shade band recorded on receipt, not at cutting',
      'Yield trend per style, per season, per mill',
    ],
    art: <YieldChart />,
    flip: true,
  },
  {
    id: 'monday',
    eyebrow: 'The Monday number',
    title: 'Answer “where is my order” without walking the floor',
    body:
      'The question that eats a production manager’s week is not hard, it is just expensive to answer: someone has to walk two lines and read a whiteboard. Grainline answers it from the board, in the language the label uses — units sewn, units finished, units boxed, and the honest date. Labels get a read-only view of their own runs, which is usually the end of the Monday phone call entirely.',
    points: [
      'Read-only run status for the label, scoped to their styles',
      'Promised dates that recalculate when the line actually slips',
      'A weekly export the bookkeeper can reconcile against invoices',
    ],
    art: <MondayBoard />,
    flip: false,
  },
]

export default function TicketDeepDive() {
  return (
    <section
      id="how"
      aria-labelledby="how-heading"
      className="border-b border-[#E0D6C6] bg-[#FBF8F2]"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 lg:py-24">
        <h2
          id="how-heading"
          className="max-w-3xl text-3xl font-black tracking-tight sm:text-4xl"
        >
          How a run actually moves through a Grainline floor
        </h2>

        <div className="mt-16 space-y-20">
          {BLOCKS.map((block) => (
            <div
              key={block.id}
              className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              <div className={block.flip ? 'lg:order-2' : ''}>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C1552F]">
                  {block.eyebrow}
                </p>
                <h3 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
                  {block.title}
                </h3>
                <p className="mt-5 leading-relaxed text-[#4A4455]">{block.body}</p>
                <ul className="mt-6 space-y-3">
                  {block.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm text-[#4A4455]">
                      <svg
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                        className="mt-0.5 h-5 w-5 shrink-0"
                      >
                        <circle cx="10" cy="10" r="9" fill="#E6DCCD" />
                        <path
                          d="M6 10.5l2.6 2.6L14 8"
                          fill="none"
                          stroke="#2C5C4F"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className={
                  'rounded-3xl border border-[#DCCFB8] bg-[#F6F2EC] p-5 ' +
                  (block.flip ? 'lg:order-1' : '')
                }
              >
                {block.art}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
