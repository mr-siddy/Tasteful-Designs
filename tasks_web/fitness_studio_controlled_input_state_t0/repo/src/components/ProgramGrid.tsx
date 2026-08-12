type Program = {
  name: string
  price: string
  cadence: string
  blurb: string
  detail: string
  icon: 'barbell' | 'sled' | 'clock' | 'spine' | 'heart' | 'rings'
}

const PROGRAMS: Program[] = [
  {
    name: 'Barbell Foundations',
    price: '$52',
    cadence: 'per session, 8-week block',
    blurb:
      'Squat, hinge, press, pull. Six weeks of teaching the four lifts properly before we ever put a number on the bar you care about.',
    detail: 'Best if you have never lifted, or lifted badly for a decade.',
    icon: 'barbell',
  },
  {
    name: 'Strength Hall',
    price: '$44',
    cadence: 'per session, unlimited on the Hall tier',
    blurb:
      'The main room. Your written program, your platform, a coach walking the floor and correcting one thing per set instead of twelve.',
    detail: 'Runs eleven times a week, capped at eight lifters.',
    icon: 'rings',
  },
  {
    name: 'Engine Room',
    price: '$38',
    cadence: 'per session, 45 minutes',
    blurb:
      'Conditioning that is written, not improvised: sled pushes, bike intervals, carries. Hard, measured, and never a punishment for eating.',
    detail: 'Paired with Strength Hall on your two lightest lifting days.',
    icon: 'sled',
  },
  {
    name: 'Back to Barbell',
    price: '$68',
    cadence: 'per session, semi-private pair',
    blurb:
      'For returning members and cranky backs. Built with the physios two doors down at Kemp Street, and progressed by millimetres.',
    detail: 'Requires a fifty-minute movement screen before your first block.',
    icon: 'spine',
  },
  {
    name: 'Early Shift',
    price: '$40',
    cadence: 'per session, 5:45am start',
    blurb:
      'Same written program, run before the trams. Doors at 5:30, coffee on the bench at 5:35, barbells down by seven and you are at work by eight.',
    detail: 'Monday, Wednesday and Friday, all year.',
    icon: 'clock',
  },
  {
    name: 'Sixty Plus',
    price: '$36',
    cadence: 'per session, small group',
    blurb:
      'Strength for people who intend to carry their own shopping at eighty. Loaded, progressive, unpatronising, and quite loud on Thursdays.',
    detail: 'Coached by Marguerite, who is 63 and deadlifts more than most of us.',
    icon: 'heart',
  },
]

function ProgramIcon({ kind }: { kind: Program['icon'] }) {
  const paths: Record<Program['icon'], JSX.Element> = {
    barbell: (
      <g>
        <rect x="8" y="21" width="32" height="6" rx="3" fill="currentColor" />
        <rect x="4" y="15" width="7" height="18" rx="2.5" fill="currentColor" />
        <rect x="37" y="15" width="7" height="18" rx="2.5" fill="currentColor" />
      </g>
    ),
    sled: (
      <g>
        <path d="M9 34h30l-5-16H14z" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinejoin="round" />
        <path d="M17 18v-6h14v6" fill="none" stroke="currentColor" strokeWidth="3.4" />
      </g>
    ),
    clock: (
      <g>
        <circle cx="24" cy="24" r="15" fill="none" stroke="currentColor" strokeWidth="3.4" />
        <path d="M24 15v10l7 4" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" />
      </g>
    ),
    spine: (
      <g>
        <path d="M24 8v32" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" />
        <path d="M16 14h16M14 22h20M16 30h16M19 38h10" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" />
      </g>
    ),
    heart: (
      <path
        d="M24 38S9 29 9 19.5A7.5 7.5 0 0 1 24 16a7.5 7.5 0 0 1 15 3.5C39 29 24 38 24 38z"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.4"
        strokeLinejoin="round"
      />
    ),
    rings: (
      <g fill="none" stroke="currentColor" strokeWidth="3.4">
        <circle cx="17" cy="24" r="10" />
        <circle cx="31" cy="24" r="10" />
      </g>
    ),
  }
  return (
    <svg viewBox="0 0 48 48" className="h-11 w-11 text-[#10161C]" role="img" aria-label={`${kind} icon`}>
      {paths[kind]}
    </svg>
  )
}

export function ProgramGrid() {
  return (
    <section id="programs" className="bg-[#F4F1EA]">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-[11px] font-black uppercase tracking-[0.28em] text-[#D9622B]">
              Six coached programs
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Pick the door you come in through. The program is written either way.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#4C5B54]">
              Every one of these runs off the same four-week review cycle. The difference is who is
              in the room with you, how long you have, and whether you are rebuilding or building.
            </p>
          </div>
          <a
            href="#membership"
            data-testid="programs-link"
            className="rounded-full border border-[#10161C]/25 px-6 py-3 text-sm font-bold transition-colors hover:border-[#10161C]"
          >
            Compare membership
          </a>
        </div>

        <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROGRAMS.map((program) => (
            <li
              key={program.name}
              data-testid="program-card"
              className="flex flex-col rounded-3xl border border-[#10161C]/10 bg-white p-7 shadow-[0_1px_0_rgba(16,22,28,0.06)] transition-shadow hover:shadow-xl"
            >
              <ProgramIcon kind={program.icon} />
              <h3 className="mt-5 text-xl font-black tracking-tight">{program.name}</h3>
              <p className="mt-2 flex items-baseline gap-2">
                <span className="text-2xl font-black text-[#D9622B]">{program.price}</span>
                <span className="text-xs uppercase tracking-[0.12em] text-[#6E7A72]">
                  {program.cadence}
                </span>
              </p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-[#4C5B54]">{program.blurb}</p>
              <p className="mt-5 border-t border-dashed border-[#10161C]/15 pt-4 text-xs font-semibold uppercase tracking-[0.1em] text-[#6E7A72]">
                {program.detail}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
