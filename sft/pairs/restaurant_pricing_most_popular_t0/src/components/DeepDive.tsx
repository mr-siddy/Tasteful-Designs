function FireDiagram() {
  return (
    <svg viewBox="0 0 320 240" className="h-full w-full" role="img" aria-label="How the fire is banked across the hearth">
      <defs>
        <linearGradient id="dd-heat" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#e8b04b" stopOpacity="0.85" />
          <stop offset="55%" stopColor="#e2622a" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#8a7b5f" stopOpacity="0.25" />
        </linearGradient>
      </defs>
      <rect width="320" height="240" rx="20" fill="#efe6d8" />
      <rect x="24" y="150" width="272" height="14" rx="7" fill="#4a3a2d" />
      <rect x="24" y="120" width="272" height="30" rx="8" fill="url(#dd-heat)" />
      <g fill="#171310" fontSize="10" fontFamily="ui-sans-serif, system-ui">
        <text x="40" y="184">Burn side</text>
        <text x="140" y="184">Working coals</text>
        <text x="244" y="184">Rest</text>
        <text x="40" y="200" fill="#6f645b">650°F</text>
        <text x="140" y="200" fill="#6f645b">420°F</text>
        <text x="244" y="200" fill="#6f645b">210°F</text>
      </g>
      <path d="M56 106c8-16 12-26 12-34 6 8 9 16 9 24" fill="none" stroke="#b8431a" strokeWidth="3" strokeLinecap="round" />
      <path d="M74 108c6-12 9-20 9-27 5 7 7 13 7 20" fill="none" stroke="#e2622a" strokeWidth="3" strokeLinecap="round" />
      <g stroke="#8a7b5f" strokeWidth="1.4" strokeDasharray="4 4">
        <path d="M112 60v88" />
        <path d="M216 60v88" />
      </g>
      <circle cx="180" cy="90" r="18" fill="none" stroke="#171310" strokeWidth="1.4" />
      <path d="M180 80v10l7 4" stroke="#171310" strokeWidth="1.6" fill="none" strokeLinecap="round" />
      <text x="204" y="94" fontSize="10" fill="#6f645b" fontFamily="ui-sans-serif, system-ui">
        rake every 20 min
      </text>
    </svg>
  )
}

function AgerDiagram() {
  return (
    <svg viewBox="0 0 320 240" className="h-full w-full" role="img" aria-label="The dry-ageing cabinet and its schedule">
      <rect width="320" height="240" rx="20" fill="#efe6d8" />
      <rect x="72" y="26" width="176" height="190" rx="14" fill="#171310" />
      <rect x="84" y="38" width="152" height="166" rx="10" fill="#221c17" stroke="#e2622a" strokeOpacity="0.35" />
      {[0, 1, 2].map((row) => (
        <g key={row}>
          <rect x="92" y={50 + row * 54} width="136" height="6" rx="3" fill="#4a3a2d" />
          {[0, 1, 2].map((col) => (
            <path
              key={col}
              d={`M${104 + col * 44} ${56 + row * 54}c10 0 18 8 18 18s-8 20-18 20-16-9-16-20 6-18 16-18Z`}
              fill="#8a3d24"
              opacity={0.55 + row * 0.15}
            />
          ))}
        </g>
      ))}
      <g fontFamily="ui-sans-serif, system-ui" fontSize="10" fill="#6f645b">
        <text x="16" y="70">Day 0</text>
        <text x="16" y="124">Day 21</text>
        <text x="16" y="178">Day 42</text>
        <text x="256" y="70">34°F</text>
        <text x="256" y="124">82% RH</text>
        <text x="256" y="178">Cut</text>
      </g>
      <path d="M52 66h16M52 120h16M52 174h16" stroke="#b8431a" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M262 84v28M262 138v28" stroke="#8a7b5f" strokeWidth="1.2" strokeDasharray="3 3" />
    </svg>
  )
}

function SourcingMap() {
  return (
    <svg viewBox="0 0 320 240" className="h-full w-full" role="img" aria-label="Farms and boats inside a sixty mile radius">
      <rect width="320" height="240" rx="20" fill="#efe6d8" />
      <circle cx="160" cy="122" r="98" fill="#e2622a" opacity="0.06" />
      <circle cx="160" cy="122" r="98" fill="none" stroke="#b8431a" strokeWidth="1.2" strokeDasharray="5 5" />
      <circle cx="160" cy="122" r="62" fill="none" stroke="#8a7b5f" strokeWidth="1" strokeDasharray="4 4" />
      <circle cx="160" cy="122" r="28" fill="none" stroke="#8a7b5f" strokeWidth="1" strokeDasharray="4 4" />
      <path
        d="M40 168c26-14 40-6 62-18s26-34 52-38 40 14 66 8 42-16 60-6"
        fill="none"
        stroke="#8a7b5f"
        strokeWidth="1.6"
        opacity="0.6"
      />
      {[
        [92, 88, 'Wren Hill'],
        [214, 78, 'Cobb Farm'],
        [232, 158, 'Sakonnet'],
        [104, 172, 'Ardley'],
        [168, 52, 'Pell Orchard'],
      ].map(([x, y, label]) => (
        <g key={label as string}>
          <circle cx={x as number} cy={y as number} r="5" fill="#b8431a" />
          <text
            x={(x as number) + 9}
            y={(y as number) + 4}
            fontSize="9.5"
            fill="#5b5148"
            fontFamily="ui-sans-serif, system-ui"
          >
            {label}
          </text>
        </g>
      ))}
      <g>
        <circle cx="160" cy="122" r="9" fill="#171310" />
        <path d="M160 116v12M154 122h12" stroke="#e8b04b" strokeWidth="1.6" strokeLinecap="round" />
        <text x="160" y="148" fontSize="10" fill="#171310" textAnchor="middle" fontFamily="ui-sans-serif, system-ui">
          Halstead Row
        </text>
      </g>
      <text x="24" y="228" fontSize="9.5" fill="#6f645b" fontFamily="ui-sans-serif, system-ui">
        Outer ring: 60 miles
      </text>
    </svg>
  )
}

const BLOCKS = [
  {
    eyebrow: 'The fire',
    title: 'One hearth, three temperatures, all night',
    body: [
      'The hearth is not a grill with a fancy name. It is a twelve-foot brick box that we light at twenty to seven every morning and let burn down for four hours before the first thing goes near it. Cooking on it means managing a gradient rather than turning a dial.',
      'Oak burns down on the left, the working coals sit in the middle at roughly 420 degrees, and the right-hand end stays low enough to rest a carved sirloin without cooking it further. Desmond rakes coals from left to right every twenty minutes through service. That rhythm is the entire kitchen.',
    ],
    figure: <FireDiagram />,
  },
  {
    eyebrow: 'The ager',
    title: 'Forty-two days behind glass, in the dining room',
    body: [
      'We put the dry-ager in the dining room on purpose. Whole sirloins from Cobb Farm hang at 34 degrees and 82 percent humidity where you can see them, and every cut on the board has a date on its tag so you know exactly how long it has been in there.',
      'Forty-two days is where we stop. Past that the funk starts to sit on top of the beef rather than under it, and what we want is a piece of meat that still tastes like the animal. We break the sirloins down ourselves every Tuesday morning.',
    ],
    figure: <AgerDiagram />,
  },
  {
    eyebrow: 'The sourcing',
    title: 'Sixty miles, fourteen suppliers, no distributor',
    body: [
      'Everything savoury on the menu comes from inside a sixty-mile ring drawn around the front door. Vegetables from Wren Hill and Ardley, beef and lamb from Cobb Farm, fish landed by two Sakonnet day boats, apples and cider from the Pell orchard whose wood we also burn.',
      'That constraint is why the menu turns over so often, and why we will occasionally tell you at seven o’clock that the halibut is gone. It also means we can tell you the name of the person who grew or caught almost anything you are eating, which we think is worth the trouble.',
    ],
    figure: <SourcingMap />,
  },
]

export default function DeepDive() {
  return (
    <section id="hearth" className="bg-[#efe6d8]" aria-labelledby="deep-dive-heading">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#b8431a]">
            How the room works
          </p>
          <h2
            id="deep-dive-heading"
            className="mt-3 font-serif text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Three things worth explaining properly
          </h2>
        </div>

        <div className="mt-14 space-y-16">
          {BLOCKS.map((block, index) => (
            <article
              key={block.title}
              data-testid="deep-dive-block"
              className="grid items-center gap-10 lg:grid-cols-2"
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : undefined}>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#6f645b]">
                  {block.eyebrow}
                </p>
                <h3 className="mt-3 font-serif text-2xl font-semibold tracking-tight sm:text-3xl">
                  {block.title}
                </h3>
                {block.body.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)} className="mt-4 leading-relaxed text-[#5b5148]">
                    {paragraph}
                  </p>
                ))}
              </div>
              <figure
                className={`overflow-hidden rounded-3xl border border-[#171310]/10 bg-white p-4 shadow-sm ${
                  index % 2 === 1 ? 'lg:order-1' : ''
                }`}
              >
                <div className="aspect-[4/3] w-full">{block.figure}</div>
              </figure>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
