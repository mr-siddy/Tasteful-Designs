const CYCLE = [
  {
    week: 'Week 1',
    title: 'Load goes on paper first',
    body: 'Your coach writes the block off your screen, your last four weeks of numbers and whatever your week actually looks like. It is printed. It is stuck to your platform. You never have to guess.',
  },
  {
    week: 'Week 2 to 3',
    title: 'We chase one correction at a time',
    body: 'Eight people, one coach, four sets each. That is enough time to fix your bracing this fortnight and your bar path the next, instead of shouting six cues at you and hoping one sticks.',
  },
  {
    week: 'Week 4',
    title: 'The review, standing at the whiteboard',
    body: 'Twenty minutes, every four weeks, with the numbers open. What went up, what stalled, what hurt. Then the next block gets written in front of you and you sign off on it.',
  },
]

function CycleDiagram() {
  return (
    <svg
      viewBox="0 0 300 300"
      className="h-full w-full"
      role="img"
      aria-label="Diagram of the four-week coaching cycle: write, train, review, rewrite"
    >
      <defs>
        <linearGradient id="cycle-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#C7F04A" />
          <stop offset="100%" stopColor="#D9622B" />
        </linearGradient>
      </defs>
      <circle cx="150" cy="150" r="118" fill="none" stroke="#10161C" strokeOpacity="0.12" strokeWidth="26" />
      <circle
        cx="150"
        cy="150"
        r="118"
        fill="none"
        stroke="url(#cycle-grad)"
        strokeWidth="26"
        strokeLinecap="round"
        strokeDasharray="556 185"
        transform="rotate(-90 150 150)"
      />
      <circle cx="150" cy="150" r="76" fill="#10161C" />
      <text x="150" y="140" textAnchor="middle" fill="#C7F04A" fontSize="34" fontWeight="800">
        4
      </text>
      <text x="150" y="168" textAnchor="middle" fill="#F4F1EA" fontSize="14" letterSpacing="2">
        WEEKS
      </text>
      <text x="150" y="190" textAnchor="middle" fill="#8E9A93" fontSize="11" letterSpacing="1">
        then we rewrite it
      </text>
      <g fill="#10161C">
        <circle cx="150" cy="32" r="9" />
        <circle cx="268" cy="150" r="9" />
        <circle cx="150" cy="268" r="9" />
        <circle cx="32" cy="150" r="9" />
      </g>
    </svg>
  )
}

export function CoachingMethod() {
  return (
    <section id="coaching" className="bg-[#F4F1EA]">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="order-2 lg:order-1">
            <p className="text-[11px] font-black uppercase tracking-[0.28em] text-[#D9622B]">
              How the coaching actually works
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Nobody here trains on a whiteboard workout
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#4C5B54]">
              A class is a room full of people doing the same thing regardless of what they need.
              That is fine for a while and then it stops working, usually around the time your
              shoulder starts complaining. We run four-week written blocks instead, and the whole
              club is built around being able to keep that promise at 6:15 on a Tuesday.
            </p>

            <ol className="mt-10 space-y-7">
              {CYCLE.map((step, index) => (
                <li key={step.title} data-testid="cycle-step" className="flex gap-5">
                  <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#10161C] text-sm font-black text-[#C7F04A]">
                    {index + 1}
                  </span>
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-[0.2em] text-[#6E7A72]">
                      {step.week}
                    </p>
                    <h3 className="mt-1 text-lg font-black tracking-tight">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#4C5B54]">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="order-1 lg:order-2">
            <div className="rounded-[32px] border border-[#10161C]/10 bg-white p-10 shadow-sm">
              <CycleDiagram />
              <p className="mt-8 text-center text-sm leading-relaxed text-[#4C5B54]">
                Thirteen blocks a year, thirteen reviews, thirteen chances to change your mind about
                what you are training for. Priya keeps every one of them in a folder with your name
                on it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
