type IconName = 'barbell' | 'engine' | 'hinge' | 'pair' | 'clipboard'

function ProgramIcon({ name }: { name: IconName }) {
  const common = { fill: 'none', stroke: '#0B2A33', strokeWidth: 2.2, strokeLinecap: 'round' as const }
  return (
    <svg viewBox="0 0 40 40" className="h-10 w-10" aria-hidden="true" focusable="false">
      <rect x="0" y="0" width="40" height="40" rx="12" fill="#1D7A6B" fillOpacity="0.12" />
      {name === 'barbell' && (
        <g {...common}>
          <path d="M8 20h24" />
          <path d="M11 15v10M29 15v10" />
          <path d="M7 17v6M33 17v6" />
        </g>
      )}
      {name === 'engine' && (
        <g {...common}>
          <circle cx="20" cy="20" r="10" />
          <path d="M20 13v7l5 3" />
        </g>
      )}
      {name === 'hinge' && (
        <g {...common}>
          <path d="M10 28c4-10 16-10 20 0" />
          <circle cx="20" cy="13" r="3.4" />
        </g>
      )}
      {name === 'pair' && (
        <g {...common}>
          <circle cx="15" cy="15" r="4" />
          <circle cx="26" cy="17" r="3.2" />
          <path d="M8 30c1.5-5 5-7 7-7s5.5 2 7 7" />
          <path d="M24 30c.8-3 2-4.5 3.5-4.5S31 27 32 30" />
        </g>
      )}
      {name === 'clipboard' && (
        <g {...common}>
          <rect x="11" y="9" width="18" height="23" rx="3" />
          <path d="M16 9h8M16 18h9M16 23h9M16 28h5" />
        </g>
      )}
    </svg>
  )
}

const PROGRAMS: {
  name: string
  price: string
  cadence: string
  icon: IconName
  spec: string
  blurb: string
  cta: string
}[] = [
  {
    name: 'Foundations Six',
    price: '$220',
    cadence: 'six sessions, once',
    icon: 'clipboard',
    spec: 'Groups of four · six weeks · start any Monday',
    blurb:
      'Where almost everyone begins. Six coached sessions that teach the squat, hinge, press, pull and carry from the floor up, ending with a written plan and a barbell you are no longer nervous about.',
    cta: 'Start Foundations',
  },
  {
    name: 'Strength Track',
    price: '$189',
    cadence: 'per month',
    icon: 'barbell',
    spec: 'Unlimited strength classes · capped at 12 · platforms reserved',
    blurb:
      'A twelve-week block written for you and reviewed every third week. You lift on a platform with a coach in the room, and your numbers go on the wall where you can argue with them.',
    cta: 'See the strength block',
  },
  {
    name: 'Conditioning Track',
    price: '$159',
    cadence: 'per month',
    icon: 'engine',
    spec: 'Unlimited engine classes · rower, bike, turf lane',
    blurb:
      'Intervals that build a base rather than a highlight reel: rowing, sled work and carries paced off numbers we test in week one and retest in week ten.',
    cta: 'See the engine block',
  },
  {
    name: 'Semi-Private Coaching',
    price: '$320',
    cadence: 'per month',
    icon: 'pair',
    spec: 'Four lifters to one coach · two fixed slots each week',
    blurb:
      'For anyone coming back from a shoulder, a knee or a long time away. Same coach every session, your own plan, and three other people who are doing the same careful work.',
    cta: 'Ask about semi-private',
  },
  {
    name: 'Open Floor + Programming',
    price: '$95',
    cadence: 'per month',
    icon: 'hinge',
    spec: 'Open hours access · monthly written plan · one check-in',
    blurb:
      'For experienced lifters who want the room, the platforms and a plan, but not a class. Includes one thirty-minute review with a coach every month.',
    cta: 'Take the open floor',
  },
]

export function Programs() {
  return (
    <section id="programs" className="border-b border-[#0B2A33]/10 bg-[#F7F2EA]">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1D7A6B]">
            Ways to train here
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
            Five ways in, and a coach will tell you honestly which one is yours
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#3C4E54]">
            Membership is month to month. Nobody is upsold at the door, nothing auto-renews into a
            year, and you can move between tracks at the start of any block without paying a fee to
            do it.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROGRAMS.map((program) => (
            <article
              key={program.name}
              data-testid="program-card"
              className="flex flex-col rounded-3xl border border-[#0B2A33]/10 bg-white p-7 shadow-sm transition hover:shadow-md"
            >
              <ProgramIcon name={program.icon} />
              <h3 className="mt-5 text-xl font-black tracking-tight">{program.name}</h3>
              <p className="mt-3 flex items-baseline gap-2">
                <span className="text-3xl font-black text-[#E4682A]">{program.price}</span>
                <span className="text-sm font-semibold text-[#5B6B70]">{program.cadence}</span>
              </p>
              <p className="mt-4 text-xs font-bold uppercase tracking-wider text-[#1D7A6B]">
                {program.spec}
              </p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-[#3C4E54]">{program.blurb}</p>
              <a
                href="#book-intro"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#0B2A33] hover:text-[#E4682A]"
              >
                {program.cta}
                <svg
                  viewBox="0 0 20 20"
                  className="h-4 w-4"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    d="M4 10h12M11 5l5 5-5 5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </article>
          ))}
        </div>

        <p className="mt-10 rounded-2xl border border-dashed border-[#0B2A33]/20 bg-white/60 px-6 py-5 text-sm text-[#3C4E54]">
          Shift workers and full-time students train on the same plan for $30 less each month — ask
          Marisol at your intro, no paperwork required beyond a roster or a student card.
        </p>
      </div>
    </section>
  )
}
