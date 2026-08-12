function FloorPlan() {
  return (
    <svg
      viewBox="0 0 420 300"
      className="h-full w-full"
      role="img"
      aria-label="Overhead plan of the training floor: eight platforms, a rig, and the conditioning row"
    >
      <defs>
        <linearGradient id="floor-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#111827" />
          <stop offset="100%" stopColor="#0c0a09" />
        </linearGradient>
      </defs>
      <rect width="420" height="300" rx="18" fill="url(#floor-bg)" />
      <rect x="14" y="14" width="392" height="272" rx="12" fill="none" stroke="#3f3f46" strokeWidth="2" />

      {[0, 1, 2, 3].map((column) =>
        [0, 1].map((row) => (
          <g key={`${column}-${row}`}>
            <rect
              x={34 + column * 92}
              y={40 + row * 78}
              width="74"
              height="58"
              rx="7"
              fill="#1c1917"
              stroke="#bef264"
              strokeWidth="1.6"
            />
            <rect x={44 + column * 92} y={64 + row * 78} width="54" height="5" rx="2.5" fill="#a8a29e" />
            <circle cx={49 + column * 92} cy={66.5 + row * 78} r="6.5" fill="none" stroke="#fbbf24" strokeWidth="1.6" />
            <circle cx={93 + column * 92} cy={66.5 + row * 78} r="6.5" fill="none" stroke="#fbbf24" strokeWidth="1.6" />
          </g>
        )),
      )}

      <rect x="34" y="204" width="166" height="62" rx="8" fill="#1c1917" stroke="#57534e" strokeWidth="1.6" />
      <text x="46" y="230" fill="#a8a29e" fontSize="12" fontFamily="sans-serif">
        Rower + bike row
      </text>
      <text x="46" y="250" fill="#78716c" fontSize="10" fontFamily="sans-serif">
        six ergs, two assault bikes
      </text>

      <rect x="216" y="204" width="170" height="62" rx="8" fill="#1c1917" stroke="#57534e" strokeWidth="1.6" />
      <text x="228" y="230" fill="#a8a29e" fontSize="12" fontFamily="sans-serif">
        Recovery loft
      </text>
      <text x="228" y="250" fill="#78716c" fontSize="10" fontFamily="sans-serif">
        sled track, mats, sauna
      </text>

      <text x="34" y="30" fill="#bef264" fontSize="11" fontFamily="sans-serif" letterSpacing="2">
        EIGHT PLATFORMS
      </text>
    </svg>
  )
}

function RackDrawing() {
  return (
    <svg viewBox="0 0 420 300" className="h-full w-full" role="img" aria-label="A competition squat rack loaded with plates">
      <defs>
        <linearGradient id="rack-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1c1917" />
          <stop offset="100%" stopColor="#0c0a09" />
        </linearGradient>
      </defs>
      <rect width="420" height="300" rx="18" fill="url(#rack-bg)" />
      <rect x="96" y="40" width="18" height="212" rx="6" fill="#292524" stroke="#57534e" strokeWidth="1.5" />
      <rect x="306" y="40" width="18" height="212" rx="6" fill="#292524" stroke="#57534e" strokeWidth="1.5" />
      <rect x="96" y="40" width="228" height="16" rx="6" fill="#292524" stroke="#57534e" strokeWidth="1.5" />
      {[80, 108, 136, 164, 192, 220].map((y) => (
        <g key={y}>
          <circle cx="105" cy={y} r="3.4" fill="#0c0a09" stroke="#78716c" strokeWidth="1.2" />
          <circle cx="315" cy={y} r="3.4" fill="#0c0a09" stroke="#78716c" strokeWidth="1.2" />
        </g>
      ))}
      <rect x="64" y="130" width="292" height="9" rx="4.5" fill="#d6d3d1" />
      <ellipse cx="92" cy="134" rx="12" ry="46" fill="#111827" stroke="#bef264" strokeWidth="2.4" />
      <ellipse cx="328" cy="134" rx="12" ry="46" fill="#111827" stroke="#bef264" strokeWidth="2.4" />
      <ellipse cx="74" cy="134" rx="8" ry="30" fill="#1c1917" stroke="#fbbf24" strokeWidth="2" />
      <ellipse cx="346" cy="134" rx="8" ry="30" fill="#1c1917" stroke="#fbbf24" strokeWidth="2" />
      <rect x="60" y="252" width="300" height="26" rx="6" fill="#1c1917" stroke="#3f3f46" strokeWidth="1.6" />
      <path d="M78 265h284" stroke="#292524" strokeWidth="2" />
    </svg>
  )
}

function AirDrawing() {
  return (
    <svg viewBox="0 0 420 300" className="h-full w-full" role="img" aria-label="Cutaway of the recovery loft with sled track and sauna">
      <defs>
        <linearGradient id="loft-bg" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#0c0a09" />
          <stop offset="100%" stopColor="#1f2937" />
        </linearGradient>
      </defs>
      <rect width="420" height="300" rx="18" fill="url(#loft-bg)" />
      <path d="M30 236h360" stroke="#57534e" strokeWidth="3" strokeLinecap="round" />
      <path d="M30 236l40-46h280l40 46" fill="none" stroke="#3f3f46" strokeWidth="2" />
      <rect x="60" y="150" width="96" height="86" rx="8" fill="#1c1917" stroke="#fbbf24" strokeWidth="1.8" />
      <path d="M76 172h64M76 190h64M76 208h40" stroke="#78716c" strokeWidth="3" strokeLinecap="round" />
      <text x="60" y="140" fill="#fbbf24" fontSize="11" fontFamily="sans-serif" letterSpacing="1.5">
        SAUNA
      </text>
      <rect x="190" y="196" width="76" height="40" rx="6" fill="#111827" stroke="#bef264" strokeWidth="1.8" />
      <path d="M266 216h84" stroke="#bef264" strokeWidth="2.4" strokeDasharray="8 7" strokeLinecap="round" />
      <text x="190" y="186" fill="#bef264" fontSize="11" fontFamily="sans-serif" letterSpacing="1.5">
        SLED TRACK · 22M
      </text>
      <circle cx="352" cy="120" r="26" fill="none" stroke="#57534e" strokeWidth="2" />
      <path d="M352 100v20l14 8" stroke="#a8a29e" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

type FacilityBlock = {
  kicker: string
  title: string
  body: string
  points: string[]
  drawing: () => JSX.Element
  flip: boolean
}

const BLOCKS: FacilityBlock[] = [
  {
    kicker: 'The main floor',
    title: 'Eight platforms, never a queue',
    body:
      'We capped classes at twelve people because that is how many can train on eight platforms without anyone standing around holding a clipboard. Bars are calibrated, the plates are matched pairs, and the rig takes a 25 kilo bar for anyone who wants one.',
    points: [
      'Eight full lifting platforms with competition bars',
      'Six squat racks, four of them with spotter arms',
      'Dumbbells to 50 kg and kettlebells in 4 kg steps',
    ],
    drawing: FloorPlan,
    flip: false,
  },
  {
    kicker: 'The equipment',
    title: 'Kit that survives being used properly',
    body:
      'Everything on this floor was bought to be dropped. That sounds obvious until you have trained somewhere that asks you to lower the bar quietly. Our platforms are sprung, our bumpers are replaced on a schedule, and nothing is bolted down where it stops people working.',
    points: [
      'Calibrated plates for anyone testing a max',
      'Trap bars, safety squat bars and a belt squat',
      'Chalk allowed — actual chalk, in a bucket',
    ],
    drawing: RackDrawing,
    flip: true,
  },
  {
    kicker: 'Recovery',
    title: 'The loft at the back of the building',
    body:
      'A twenty-two metre sled track, a matted area big enough to do your rehab work without apologising to anyone, and a four-person sauna that runs from six in the morning. Recovery is written into your block, not left as something you are supposed to find time for.',
    points: [
      'Sauna running 06:00 to 20:00 every weekday',
      'Two treatment rooms shared with Harbour Physio',
      'Showers, towels and a locker for full members',
    ],
    drawing: AirDrawing,
    flip: false,
  },
]

export function FacilitySection() {
  return (
    <section id="facility" data-testid="facility-section" className="border-b border-white/10 bg-stone-900">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-lime-300">The floor</p>
          <h2 className="mt-4 text-4xl font-black uppercase tracking-tight text-stone-50">
            Six thousand square feet on Alder Way
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-stone-300">
            The building was a marine parts warehouse until 2014. We kept the ceiling height, the
            north-facing windows and the concrete, and spent the budget on platforms instead of
            televisions.
          </p>
        </div>

        <div className="mt-16 space-y-16">
          {BLOCKS.map((block) => {
            const Drawing = block.drawing
            return (
              <article
                key={block.title}
                data-testid="facility-block"
                className="grid items-center gap-10 lg:grid-cols-2"
              >
                <div className={block.flip ? 'lg:order-2' : ''}>
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-amber-400">
                    {block.kicker}
                  </p>
                  <h3 className="mt-3 text-2xl font-bold text-stone-50">{block.title}</h3>
                  <p className="mt-4 leading-relaxed text-stone-300">{block.body}</p>
                  <ul className="mt-6 space-y-3">
                    {block.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-sm text-stone-300">
                        <svg viewBox="0 0 20 20" className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" fill="none">
                          <circle cx="10" cy="10" r="8.2" stroke="#bef264" strokeWidth="1.6" />
                          <path d="M6.4 10.3l2.5 2.5 4.7-5" stroke="#bef264" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`overflow-hidden rounded-2xl ring-1 ring-white/10 ${block.flip ? 'lg:order-1' : ''}`}>
                  <Drawing />
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
