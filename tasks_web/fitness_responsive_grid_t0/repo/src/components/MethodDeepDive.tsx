function AssessmentDiagram() {
  return (
    <svg
      viewBox="0 0 320 220"
      role="img"
      aria-label="Diagram of the six movement screens recorded at a Northline assessment"
      className="w-full"
    >
      <rect width="320" height="220" rx="18" fill="#f5f5f4" />
      {[0, 1, 2].map((row) =>
        [0, 1].map((col) => (
          <g key={`${row}-${col}`} transform={`translate(${28 + col * 148}, ${24 + row * 60})`}>
            <rect width="130" height="44" rx="10" fill="#ffffff" stroke="#e7e5e4" />
            <circle cx="22" cy="22" r="9" fill="#fde68a" />
            <path
              d="M18 22l3 3 6-6"
              fill="none"
              stroke="#92400e"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <rect x="42" y="14" width="70" height="6" rx="3" fill="#d6d3d1" />
            <rect x="42" y="26" width="46" height="6" rx="3" fill="#e7e5e4" />
          </g>
        )),
      )}
    </svg>
  )
}

function BlockDiagram() {
  return (
    <svg
      viewBox="0 0 320 220"
      role="img"
      aria-label="Chart showing load rising across three four-week blocks with a deload week between"
      className="w-full"
    >
      <rect width="320" height="220" rx="18" fill="#1c1917" />
      <line x1="30" y1="180" x2="292" y2="180" stroke="#44403c" strokeWidth="2" />
      {[
        [40, 60],
        [70, 76],
        [100, 92],
        [130, 48],
        [160, 96],
        [190, 112],
        [220, 128],
        [250, 70],
      ].map(([x, h], i) => (
        <rect
          key={x}
          x={x}
          y={180 - h}
          width="22"
          height={h}
          rx="5"
          fill={i === 3 || i === 7 ? '#57534e' : '#fbbf24'}
        />
      ))}
      <text x="30" y="205" fill="#a8a29e" fontSize="12">
        Week 1
      </text>
      <text x="232" y="205" fill="#a8a29e" fontSize="12">
        Week 12
      </text>
    </svg>
  )
}

function LadderDiagram() {
  return (
    <svg
      viewBox="0 0 320 220"
      role="img"
      aria-label="Illustration of a load ladder rising two and a half kilograms per rung"
      className="w-full"
    >
      <rect width="320" height="220" rx="18" fill="#fffbeb" />
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={i}>
          <rect
            x={34 + i * 50}
            y={168 - i * 26}
            width="42"
            height={16 + i * 26}
            rx="6"
            fill="#f59e0b"
            opacity={0.35 + i * 0.15}
          />
          <text
            x={55 + i * 50}
            y={160 - i * 26}
            textAnchor="middle"
            fill="#78350f"
            fontSize="11"
            fontWeight="bold"
          >
            +{(i * 2.5).toFixed(1)}
          </text>
        </g>
      ))}
      <line x1="24" y1="186" x2="296" y2="186" stroke="#d97706" strokeWidth="2" />
    </svg>
  )
}

const BLOCKS = [
  {
    eyebrow: 'Step one',
    title: 'A sixty-minute assessment before you lift anything',
    body: 'You start on the floor with a coach and a clipboard, not in a class. We screen six positions — overhead reach, ankle range, single-leg balance, a hinge, a squat and a loaded carry — and write down what we see, including the things you have stopped mentioning to people. Nothing is scored, nothing is judged, and you get the sheet emailed to you the same afternoon.',
    figure: <AssessmentDiagram />,
    flip: false,
  },
  {
    eyebrow: 'Step two',
    title: 'Twelve weeks written before week one begins',
    body: 'Northline programmes in twelve-week blocks: three four-week waves with a deliberate lighter week between them. Because the whole block exists on paper before it starts, your coach can tell you in February what the last Thursday in April looks like. Loads move by percentage, not by mood, and the deload weeks are not optional.',
    figure: <BlockDiagram />,
    flip: true,
  },
  {
    eyebrow: 'Step three',
    title: 'Two and a half kilograms at a time',
    body: 'Most people do not stall because they train too little. They stall because they jump. We add the smallest plate we own to the bar, hold it for two sessions, then add it again — a ladder that looks embarrassingly slow in March and is thirty kilograms taller by September. Your numbers live on the whiteboard so the ladder is never a guess.',
    figure: <LadderDiagram />,
    flip: false,
  },
]

export function MethodDeepDive() {
  return (
    <section id="method" className="bg-white">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-amber-600">
            How the coaching works
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
            Boring on purpose, for a very long time
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-stone-600">
            There is no secret here and we would rather show you the whole method than sell you a
            transformation. Three things carry almost all of the result.
          </p>
        </div>

        <div className="mt-14 space-y-16">
          {BLOCKS.map((block) => (
            <article
              key={block.title}
              data-testid="method-block"
              className="grid items-center gap-10 lg:grid-cols-2"
            >
              <div className={block.flip ? 'lg:order-2' : ''}>
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-stone-400">
                  {block.eyebrow}
                </p>
                <h3 className="mt-3 text-2xl font-bold tracking-tight text-stone-900">
                  {block.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-stone-600">{block.body}</p>
              </div>
              <div className={block.flip ? 'lg:order-1' : ''}>{block.figure}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
