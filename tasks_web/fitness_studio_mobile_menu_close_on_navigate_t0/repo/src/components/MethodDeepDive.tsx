function AssessDiagram() {
  return (
    <svg viewBox="0 0 320 200" className="h-full w-full" role="img" aria-label="Diagram of a movement screen: hip, spine and shoulder range plotted on three arcs">
      <rect width="320" height="200" rx="20" fill="#FFFCF5" stroke="#E3D6BE" />
      <g fill="none" stroke="#8FB8C9" strokeWidth="2">
        <path d="M60 160 A 70 70 0 0 1 200 160" />
        <path d="M85 160 A 45 45 0 0 1 175 160" />
        <path d="M110 160 A 20 20 0 0 1 150 160" />
      </g>
      <g stroke="#C2571F" strokeWidth="3" strokeLinecap="round">
        <path d="M130 160 L188 118" />
        <path d="M130 160 L104 106" />
      </g>
      <circle cx="130" cy="160" r="6" fill="#24493B" />
      <g fill="#4A4436" fontSize="11" fontFamily="ui-sans-serif, system-ui">
        <text x="214" y="70">Hip flexion</text>
        <text x="214" y="106">Thoracic rotation</text>
        <text x="214" y="142">Shoulder overhead</text>
      </g>
      <g fill="#C2571F">
        <circle cx="204" cy="66" r="4" />
        <circle cx="204" cy="102" r="4" />
        <circle cx="204" cy="138" r="4" />
      </g>
    </svg>
  )
}

function PatternDiagram() {
  return (
    <svg viewBox="0 0 320 200" className="h-full w-full" role="img" aria-label="Diagram showing a hinge pattern repeated at four increasing spring loads">
      <rect width="320" height="200" rx="20" fill="#FFFCF5" stroke="#E3D6BE" />
      {[0, 1, 2, 3].map((step) => (
        <g key={step} transform={`translate(${28 + step * 72}, 40)`}>
          <rect width="52" height={40 + step * 26} y={100 - step * 26} rx="8" fill="#24493B" opacity={0.25 + step * 0.25} />
          <path d="M8 96 L26 74 L44 96" fill="none" stroke="#C2571F" strokeWidth="3" strokeLinecap="round" />
          <text x="26" y="156" textAnchor="middle" fontSize="11" fill="#7A7263" fontFamily="ui-sans-serif, system-ui">
            {['1 red', '2 red', '2R 1B', '3 red'][step]}
          </text>
        </g>
      ))}
    </svg>
  )
}

function BreathDiagram() {
  return (
    <svg viewBox="0 0 320 200" className="h-full w-full" role="img" aria-label="Diagram of a breath cycle drawn as a wave over a ribcage outline">
      <rect width="320" height="200" rx="20" fill="#FFFCF5" stroke="#E3D6BE" />
      <path
        d="M20 130 C 60 60, 100 60, 140 130 S 220 200, 300 100"
        fill="none"
        stroke="#8FB8C9"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <g fill="none" stroke="#24493B" strokeWidth="2.5" strokeLinecap="round">
        <path d="M120 44 C 150 32, 190 32, 220 44" />
        <path d="M114 62 C 148 48, 192 48, 226 62" />
        <path d="M110 80 C 146 64, 194 64, 230 80" />
      </g>
      <circle cx="170" cy="150" r="7" fill="#C2571F" />
      <text x="170" y="182" textAnchor="middle" fontSize="11" fill="#7A7263" fontFamily="ui-sans-serif, system-ui">
        exhale on the effort
      </text>
    </svg>
  )
}

const BLOCKS = [
  {
    eyebrow: 'One — assess',
    title: 'We measure before we load anything',
    body: 'Your intro session is forty-five minutes and most of it is us watching. Overhead reach, hip flexion under load, thoracic rotation left versus right, a single-leg balance held for thirty seconds, and a conversation about what hurts and when. The numbers go on a plan card with your name on it, and we re-measure the same five things every eight weeks so progress is a column of figures rather than a feeling.',
    Diagram: AssessDiagram,
  },
  {
    eyebrow: 'Two — pattern',
    title: 'Train the pattern, then add the spring',
    body: 'A hinge is a hinge whether you are on the carriage with one red spring or under a barbell. We teach the shape at a load you can hold conversation through, keep it there for as long as it takes, and only then step it up — 1 red, 2 red, 2 red and a blue, 3 red. Nobody at Sundial gets a harder class because eight weeks went by; they get it because the pattern held.',
    Diagram: PatternDiagram,
  },
  {
    eyebrow: 'Three — breathe',
    title: 'Breath is the part everybody skips',
    body: 'Bracing without breathing is how people leave a Pilates class with a headache and a stiff neck. We spend real minutes on exhaling through the effort, on getting the lower ribs to move laterally, and on what to do when a movement makes you hold your breath — which is almost always a signal that the load or the range is wrong, not that you are weak.',
    Diagram: BreathDiagram,
  },
]

export function MethodDeepDive() {
  return (
    <section id="method" className="bg-[#F7F1E6]">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#C2571F]">
            How we coach
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Three things we do that a drop-in class cannot
          </h2>
        </div>
        <div className="mt-14 space-y-16">
          {BLOCKS.map((block, index) => (
            <article
              key={block.title}
              className={`grid items-center gap-10 lg:grid-cols-2 ${
                index % 2 === 1 ? 'lg:[&>div:first-child]:order-2' : ''
              }`}
            >
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#24493B]">
                  {block.eyebrow}
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                  {block.title}
                </h3>
                <p className="mt-5 text-base leading-relaxed text-[#4A4436]">{block.body}</p>
              </div>
              <div className="rounded-3xl border border-[#E3D6BE] bg-white/50 p-4">
                <block.Diagram />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
