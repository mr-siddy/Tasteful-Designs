const TIMELINE = [
  { time: '4:20am', line: 'Vano lights the tone. It takes ninety minutes to reach 380°C and it is never allowed to go out during service.' },
  { time: '5:00am', line: 'The imeruli dough is turned out — flour milled in Newberg, matsoni whey from Friday, salt, nothing else.' },
  { time: '6:15am', line: 'Khinkali get pleated. Nineteen folds, and the ones that come out at seventeen are lunch for the staff.' },
  { time: '4:30pm', line: 'First khachapuri goes on the oven wall, twelve minutes before the doors open, so the room smells right.' },
]

export function Bakehouse() {
  return (
    <section id="bakehouse" data-testid="bakehouse" className="bg-white py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-2">
        <div>
          <svg
            viewBox="0 0 420 400"
            role="img"
            aria-label="Illustration of hands pleating a khinkali dumpling beside a bowl of flour"
            className="w-full rounded-3xl bg-[#fdf8f1] shadow-xl shadow-stone-300/60"
          >
            <defs>
              <linearGradient id="bake-dough" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#fffbeb" />
                <stop offset="100%" stopColor="#e7d3ae" />
              </linearGradient>
              <linearGradient id="bake-board" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#d6c3a5" />
                <stop offset="100%" stopColor="#a8865c" />
              </linearGradient>
            </defs>

            <rect x="0" y="0" width="420" height="400" rx="24" fill="#fdf8f1" />
            <rect x="24" y="250" width="372" height="120" rx="16" fill="url(#bake-board)" />
            <g opacity="0.35" stroke="#8a6a44" strokeWidth="2">
              <path d="M24 288h372M24 322h372" />
            </g>

            <g transform="translate(210,190)">
              <path
                d="M0 60c-46 0-84-26-84-58 0-30 38-54 84-54s84 24 84 54c0 32-38 58-84 58z"
                fill="url(#bake-dough)"
                stroke="#b98f5d"
                strokeWidth="3"
              />
              {[...Array(11)].map((_, i) => {
                const angle = (Math.PI * (i + 1)) / 12
                const x = Math.cos(angle) * 74
                const y = -Math.sin(angle) * 52 - 6
                return (
                  <path
                    key={i}
                    d={`M0 -14 L${x.toFixed(1)} ${y.toFixed(1)}`}
                    stroke="#c9a06a"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                  />
                )
              })}
              <circle cx="0" cy="-16" r="16" fill="#e7d3ae" stroke="#b98f5d" strokeWidth="3" />
              <path d="M0 -32c0-14 6-22 14-26" stroke="#b98f5d" strokeWidth="3" fill="none" strokeLinecap="round" />
            </g>

            <g fill="#fff7ed" opacity="0.9">
              <circle cx="70" cy="120" r="26" />
              <circle cx="98" cy="146" r="16" />
              <circle cx="46" cy="150" r="12" />
            </g>
            <g fill="#e7d3ae">
              <circle cx="352" cy="128" r="8" />
              <circle cx="330" cy="150" r="5" />
              <circle cx="368" cy="158" r="4" />
            </g>

            <path
              d="M40 74c14-12 26-12 40 0s26 12 40 0"
              stroke="#9f1239"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              opacity="0.6"
            />
            <path
              d="M300 74c14-12 26-12 40 0s26 12 40 0"
              stroke="#9f1239"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              opacity="0.6"
            />
          </svg>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-800">
            The bakehouse
          </p>
          <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-stone-900 md:text-5xl">
            Everything starts before the street wakes up
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-stone-600">
            The tone oven came over in a crate from a workshop outside Tbilisi in the spring of
            2018, and getting it through the back wall cost more than the range did. It is a clay
            well you reach into from above: the baker wets a flat of dough, leans in to the waist,
            and slaps it against the inside wall, where it grips and blisters and comes off in four
            minutes with a black underside.
          </p>
          <p className="mt-4 text-base leading-relaxed text-stone-600">
            Nothing here is baked in the morning for the evening. Bread comes out of the wall
            during service, which is why your khachapuri arrives too hot to touch and why we ask you
            to wait a minute before stirring the yolk through it.
          </p>

          <ol className="mt-9 space-y-5 border-l-2 border-amber-300 pl-6">
            {TIMELINE.map((step) => (
              <li key={step.time} data-testid="bakehouse-step" className="relative">
                <span className="absolute -left-[31px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-amber-500 bg-white" />
                <h3 className="font-serif text-lg font-semibold text-rose-900">{step.time}</h3>
                <p className="mt-1 text-sm leading-relaxed text-stone-600">{step.line}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
