function WoodStackArt() {
  return (
    <svg viewBox="0 0 320 240" className="h-full w-full" role="img" aria-label="Diagram of a seasoned oak and hickory wood stack under a lean-to">
      <rect width="320" height="240" rx="20" fill="#f1e7d6" />
      <path d="M30 62h260l-18-26H48z" fill="#d8c4a4" />
      <g stroke="#8a6a4a" strokeWidth="2" fill="#e7d7bd">
        {[0, 1, 2, 3].map((row) =>
          [0, 1, 2, 3, 4, 5].map((col) => (
            <circle key={`${row}-${col}`} cx={62 + col * 40} cy={96 + row * 34} r="15" />
          )),
        )}
      </g>
      <g stroke="#b8451f" strokeWidth="2" strokeLinecap="round" fill="none">
        {[0, 1, 2, 3].map((row) =>
          [0, 1, 2, 3, 4, 5].map((col) => (
            <path key={`c-${row}-${col}`} d={`M${62 + col * 40} ${96 + row * 34}v-9M${62 + col * 40} ${96 + row * 34}l7 6`} />
          )),
        )}
      </g>
      <rect x="34" y="226" width="252" height="8" rx="4" fill="#8a6a4a" />
    </svg>
  )
}

function HeatMapArt() {
  return (
    <svg viewBox="0 0 320 240" className="h-full w-full" role="img" aria-label="Heat map of the grill surface from the hot corner to the resting shelf">
      <rect width="320" height="240" rx="20" fill="#1b1512" />
      <defs>
        <linearGradient id="dd-heat" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#f7d9a0" />
          <stop offset="38%" stopColor="#e0912f" />
          <stop offset="72%" stopColor="#b8451f" />
          <stop offset="100%" stopColor="#4a2a1c" />
        </linearGradient>
      </defs>
      <rect x="26" y="60" width="268" height="118" rx="14" fill="url(#dd-heat)" opacity="0.9" />
      <g stroke="#1b1512" strokeWidth="3" opacity="0.55">
        {[74, 92, 110, 128, 146, 164].map((y) => (
          <line key={y} x1="26" y1={y} x2="294" y2={y} />
        ))}
      </g>
      <g fill="#faf5ec" fontSize="11" fontWeight="700">
        <text x="34" y="46">620°F</text>
        <text x="140" y="46">470°F</text>
        <text x="244" y="46">280°F</text>
        <text x="34" y="206">sear</text>
        <text x="140" y="206">turn</text>
        <text x="244" y="206">rest</text>
      </g>
      <g stroke="#faf5ec" strokeWidth="1.5" opacity="0.6">
        <line x1="60" y1="188" x2="60" y2="178" />
        <line x1="165" y1="188" x2="165" y2="178" />
        <line x1="266" y1="188" x2="266" y2="178" />
      </g>
    </svg>
  )
}

function FarmMapArt() {
  return (
    <svg viewBox="0 0 320 240" className="h-full w-full" role="img" aria-label="Map of the farms and boats within a two hour drive of the restaurant">
      <rect width="320" height="240" rx="20" fill="#e9f0e4" />
      <path d="M0 172c58-24 96 14 148-4s108-46 172-14v86H0z" fill="#cfe0c6" />
      <path d="M0 196c62-18 104 16 156 0s110-30 164-6v50H0z" fill="#b8d0ac" />
      <g stroke="#8a6a4a" strokeWidth="2" strokeDasharray="5 5" fill="none">
        <path d="M160 132 78 74M160 132l86-42M160 132l-34 76M160 132l72 62" />
      </g>
      <g fill="#b8451f">
        <circle cx="78" cy="74" r="9" />
        <circle cx="246" cy="90" r="9" />
        <circle cx="126" cy="208" r="9" />
        <circle cx="232" cy="194" r="9" />
      </g>
      <circle cx="160" cy="132" r="13" fill="#1b1512" />
      <circle cx="160" cy="132" r="5" fill="#e0912f" />
      <g fill="#3d3128" fontSize="10" fontWeight="700">
        <text x="60" y="60">Chatham</text>
        <text x="228" y="76">Warren Co.</text>
        <text x="96" y="228">Sneads Ferry</text>
        <text x="206" y="228">Wanchese</text>
      </g>
    </svg>
  )
}

const BLOCKS = [
  {
    kicker: 'The wood',
    title: 'We burn two cords a month and we know where every split came from',
    body: [
      'White oak for the long heat, shagbark hickory for the last ten minutes of anything with a bone in it. Both come off storm-fall and orchard-clearing within ninety minutes of Durham, split in June and stacked under the lean-to behind the building for at least fourteen months.',
      'Green wood makes acrid smoke and acrid smoke gets into fish faster than anything else, so nothing under a year goes on the fire. There is no charcoal in the building. The coals you see under the grate at seven o’clock were logs at three.',
    ],
    art: <WoodStackArt />,
  },
  {
    kicker: 'The grill',
    title: 'One surface, three temperatures, and a crank that moves the whole grate',
    body: [
      'Inés welded the asador herself in the spring of 2019 after two winters of drawings. A hand crank raises and lowers the eighteen-foot grate in inch increments, so the cook changes the heat by changing the distance rather than by moving the food.',
      'The left corner sits around 620°F and sears; the middle turns; the right shelf holds at 280°F where a chuleta rests for as long as it cooked. Nobody uses a thermometer on the line — you learn the shelf by cooking on it for six months.',
    ],
    art: <HeatMapArt />,
  },
  {
    kicker: 'The sourcing',
    title: 'Four farms, two boats, and a standing Thursday order',
    body: [
      'Beef comes from retired dairy cows out of Chatham County, dry-aged forty days in the walk-in you pass on the way to the restroom. Vegetables are grown eleven miles away and arrive twice a week in crates we return.',
      'Fish is landed at Sneads Ferry and Wanchese and driven in overnight, which is why the board changes and why we will sometimes tell you at seven that the turbot is gone. We would rather do that than buy from a truck that has been to Boston.',
    ],
    art: <FarmMapArt />,
  },
]

export default function FireDeepDive() {
  return (
    <section id="fire" aria-labelledby="fire-heading" className="bg-[#faf5ec]">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-3xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#b8451f]">How it works</p>
          <h2 id="fire-heading" className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
            There is no second kitchen behind the wall
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#5d4c3d]">
            Three things decide what a plate tastes like here, and none of them is a recipe. This is the
            long version, for the people who ask the server and then ask again.
          </p>
        </div>

        <div className="mt-16 space-y-20">
          {BLOCKS.map((block, index) => (
            <article
              key={block.kicker}
              className={`grid items-center gap-10 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:[&>div:first-child]:order-2' : ''}`}
            >
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#8a6a4a]">{block.kicker}</p>
                <h3 className="mt-3 text-2xl font-black leading-tight tracking-tight sm:text-3xl">{block.title}</h3>
                {block.body.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)} className="mt-4 text-base leading-relaxed text-[#5d4c3d]">
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="overflow-hidden rounded-3xl border border-[#1b1512]/10 shadow-lg shadow-[#1b1512]/5">
                {block.art}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
