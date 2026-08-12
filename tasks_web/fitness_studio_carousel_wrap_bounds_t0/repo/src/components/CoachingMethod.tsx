import { ChartIcon, ShieldIcon, SparkIcon } from './Icons'

function AssessmentDiagram() {
  return (
    <svg viewBox="0 0 360 240" className="w-full" role="img" aria-label="Diagram of the seven checkpoints in the movement screen">
      <defs>
        <linearGradient id="method-panel" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f5f5f4" />
          <stop offset="100%" stopColor="#e7e5e4" />
        </linearGradient>
      </defs>
      <rect width="360" height="240" rx="18" fill="url(#method-panel)" />
      <line x1="70" y1="200" x2="290" y2="200" stroke="#a8a29e" strokeWidth="2" strokeLinecap="round" />
      {[
        { x: 96, h: 46, label: 'Ankle' },
        { x: 134, h: 78, label: 'Hip' },
        { x: 172, h: 62, label: 'Spine' },
        { x: 210, h: 104, label: 'Shoulder' },
        { x: 248, h: 84, label: 'Grip' },
      ].map((bar) => (
        <g key={bar.label}>
          <rect x={bar.x} y={200 - bar.h} width="22" height={bar.h} rx="7" fill="#65a30d" opacity="0.85" />
          <circle cx={bar.x + 11} cy={200 - bar.h - 10} r="5" fill="#0f172a" />
        </g>
      ))}
      <text x="70" y="42" fontSize="15" fontWeight="700" fill="#0f172a" fontFamily="ui-sans-serif, system-ui, sans-serif">
        Movement screen
      </text>
      <text x="70" y="62" fontSize="12" fill="#57534e" fontFamily="ui-sans-serif, system-ui, sans-serif">
        Seven checkpoints, scored 1–3
      </text>
    </svg>
  )
}

function ProgressionChart() {
  return (
    <svg viewBox="0 0 360 240" className="w-full" role="img" aria-label="Line chart of a member's squat rising across four twelve-week blocks">
      <rect width="360" height="240" rx="18" fill="#0f172a" />
      {[60, 100, 140, 180].map((y) => (
        <line key={y} x1="44" y1={y} x2="330" y2={y} stroke="#334155" strokeWidth="1" />
      ))}
      <polyline
        points="52,182 122,158 192,124 262,96 328,64"
        fill="none"
        stroke="#a3e635"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {[
        [52, 182],
        [122, 158],
        [192, 124],
        [262, 96],
        [328, 64],
      ].map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="5" fill="#0f172a" stroke="#a3e635" strokeWidth="3" />
      ))}
      <text x="44" y="34" fontSize="14" fontWeight="700" fill="#f8fafc" fontFamily="ui-sans-serif, system-ui, sans-serif">
        Back squat, four blocks
      </text>
      <text x="44" y="222" fontSize="11" fill="#94a3b8" fontFamily="ui-sans-serif, system-ui, sans-serif">
        Block 1
      </text>
      <text x="286" y="222" fontSize="11" fill="#94a3b8" fontFamily="ui-sans-serif, system-ui, sans-serif">
        Block 4
      </text>
    </svg>
  )
}

function RetestDiagram() {
  return (
    <svg viewBox="0 0 360 240" className="w-full" role="img" aria-label="Diagram of a twelve-week block ending in a retest week">
      <rect width="360" height="240" rx="18" fill="#ecfccb" />
      {Array.from({ length: 12 }, (_, week) => (
        <rect
          key={week}
          x={30 + week * 25}
          y={92 + (week % 3) * 6}
          width="16"
          height={56 - (week % 3) * 12}
          rx="6"
          fill={week === 11 ? '#0f172a' : '#65a30d'}
          opacity={week === 11 ? 1 : 0.55 + week * 0.03}
        />
      ))}
      <text x="30" y="52" fontSize="15" fontWeight="700" fill="#1a2e05" fontFamily="ui-sans-serif, system-ui, sans-serif">
        Twelve weeks, then retest
      </text>
      <text x="30" y="196" fontSize="12" fill="#3f6212" fontFamily="ui-sans-serif, system-ui, sans-serif">
        Week 12 is measured, not maximal
      </text>
    </svg>
  )
}

const BLOCKS = [
  {
    eyebrow: 'Step one',
    icon: <ShieldIcon className="h-6 w-6" />,
    title: 'We measure before we prescribe',
    body: [
      'Every member starts with a 50-minute screen: seven joint checkpoints scored one to three, a resting heart rate, a grip test, and twenty minutes of questions about your work, your sleep and the injuries you have stopped mentioning.',
      'Nothing is loaded that day. The point is to find the two things that will limit you in month three, so your first program already accounts for them instead of discovering them the hard way.',
    ],
    visual: <AssessmentDiagram />,
    flip: false,
  },
  {
    eyebrow: 'Step two',
    icon: <ChartIcon className="h-6 w-6" />,
    title: 'Your program is written down and it is yours',
    body: [
      'You get a printed twelve-week block with sets, reps, tempo and target loads — not a whiteboard that changes at 5:58am. Two people on adjacent platforms are almost never doing the same thing, because they did not walk in with the same shoulders.',
      'Your coach reviews it every Friday and edits the following week in front of you. If a week went badly, the program changes; if you slept four hours, the coach changes today.',
    ],
    visual: <ProgressionChart />,
    flip: true,
  },
  {
    eyebrow: 'Step three',
    icon: <SparkIcon className="h-6 w-6" />,
    title: 'Week twelve tells the truth',
    body: [
      'Each block ends in a retest week: the same five lifts, the same warm-up, the same rest intervals, measured the same way. It is deliberately not a max-out day — we are looking for a number we can trust, not a number that makes a good video.',
      'You leave retest week with a one-page comparison to the block before it, and the next block is built from what it says. That is the whole loop, and it has not changed in eleven years.',
    ],
    visual: <RetestDiagram />,
    flip: false,
  },
]

export default function CoachingMethod() {
  return (
    <section id="method" data-testid="coaching-method" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-lime-700">How we coach</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
            Measure, write it down, retest
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            There is no secret method here, and we would be suspicious of anyone selling one. There
            is a loop we run properly, for everybody, every twelve weeks.
          </p>
        </div>

        <div className="mt-16 space-y-20">
          {BLOCKS.map((block) => (
            <div
              key={block.title}
              data-testid="method-block"
              className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              <div className={block.flip ? 'lg:order-2' : ''}>
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-lime-300 text-slate-900">
                  {block.icon}
                </span>
                <p className="mt-5 text-xs font-bold uppercase tracking-[0.24em] text-lime-700">{block.eyebrow}</p>
                <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">{block.title}</h3>
                {block.body.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)} className="mt-4 text-base leading-relaxed text-slate-600">
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className={block.flip ? 'lg:order-1' : ''}>
                <div className="overflow-hidden rounded-[2rem] border border-slate-200 shadow-lg">{block.visual}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
