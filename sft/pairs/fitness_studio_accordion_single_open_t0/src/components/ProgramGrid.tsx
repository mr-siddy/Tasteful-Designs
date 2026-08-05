type Program = {
  name: string
  price: string
  cadence: string
  cap: string
  blurb: string
  icon: 'barbell' | 'clock' | 'lungs' | 'spine' | 'heart' | 'sprout'
}

const PROGRAMS: Program[] = [
  {
    name: 'Barbell Foundations',
    price: '$180 / month',
    cadence: 'Three 60-minute sessions a week',
    cap: 'Cap 8 lifters',
    blurb:
      'The eight-week on-ramp everybody starts with. You learn the squat, hinge, press and pull with an empty bar and leave with a written plan and a loading chart you can actually read.',
    icon: 'barbell',
  },
  {
    name: 'The Strong Hour',
    price: '$210 / month',
    cadence: 'Unlimited weekday hours',
    cap: 'Cap 8 lifters',
    blurb:
      'Our main membership. Percentage-based blocks written six weeks out, coached in person, with a squat rack that is yours for the full hour — never shared, never rushed.',
    icon: 'clock',
  },
  {
    name: 'Conditioning Club',
    price: '$150 / month',
    cadence: 'Tuesday, Thursday, Saturday',
    cap: 'Cap 12 athletes',
    blurb:
      'Rower, bike and sled intervals on the turf lane, built around heart-rate zones rather than who can suffer the loudest. Forty-five minutes, showered and out by ten past.',
    icon: 'heart',
  },
  {
    name: 'Mobility & Breath',
    price: '$95 / month',
    cadence: 'Monday and Friday, 7:00 pm',
    cap: 'Cap 14 in the loft',
    blurb:
      'Loaded end-range work for hips, shoulders and ankles, closing with ten minutes of nasal-breathing drills in the loft. The class most members say fixed their desk-job back.',
    icon: 'spine',
  },
  {
    name: 'Return to Lifting',
    price: '$240 / month',
    cadence: 'Twelve-week protocol, 2:1 coaching',
    cap: 'Six places a term',
    blurb:
      'Built with Fairmount Physiotherapy for people coming back from a disc injury, a hip replacement or a long layoff. Your physio gets a progress note from us every fortnight.',
    icon: 'sprout',
  },
  {
    name: 'Masters 55+',
    price: '$130 / month',
    cadence: 'Monday, Wednesday, Friday mornings',
    cap: 'Cap 10 lifters',
    blurb:
      'Bone density, balance and carrying the shopping in one trip. Same barbells, same coaching, slightly warmer room and a pot of coffee on the bench afterwards.',
    icon: 'lungs',
  },
]

function ProgramIcon({ kind }: { kind: Program['icon'] }) {
  const common = { fill: 'none', stroke: '#123B31', strokeWidth: 2, strokeLinecap: 'round' as const }
  return (
    <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden="true">
      <rect x="1" y="1" width="30" height="30" rx="9" fill="#EFE6D8" />
      {kind === 'barbell' && (
        <g {...common}>
          <path d="M7 16h18" />
          <path d="M9 11v10M23 11v10M6 13.5v5M26 13.5v5" />
        </g>
      )}
      {kind === 'clock' && (
        <g {...common}>
          <circle cx="16" cy="16" r="8.5" />
          <path d="M16 11.5V16l3.2 2.4" />
        </g>
      )}
      {kind === 'heart' && (
        <g {...common}>
          <path d="M16 24s-7-4.4-7-9a4 4 0 017-2.5A4 4 0 0123 15c0 4.6-7 9-7 9z" />
        </g>
      )}
      {kind === 'spine' && (
        <g {...common}>
          <path d="M16 7v18" />
          <path d="M11.5 11h9M11.5 16h9M11.5 21h9" />
        </g>
      )}
      {kind === 'sprout' && (
        <g {...common}>
          <path d="M16 25v-8" />
          <path d="M16 17c-4 0-6-2-6-6 4 0 6 2 6 6zM16 17c4 0 6-2 6-5-4 0-6 2-6 5z" />
        </g>
      )}
      {kind === 'lungs' && (
        <g {...common}>
          <path d="M16 8v9" />
          <path d="M16 13c-2 0-5 1.6-5 5.4V23h4v-6M16 13c2 0 5 1.6 5 5.4V23h-4v-6" />
        </g>
      )}
    </svg>
  )
}

export function ProgramGrid() {
  return (
    <section id="programs" className="bg-[#FBF7F1]">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <p className="text-[11px] uppercase tracking-[0.28em] text-[#8A7F6C]">What we run</p>
        <div className="mt-3 flex flex-wrap items-end justify-between gap-6">
          <h2 className="max-w-2xl text-4xl font-semibold tracking-tight text-[#123B31]">
            Six programmes, all of them coached in person
          </h2>
          <p className="max-w-sm text-sm leading-relaxed text-[#5C554A]">
            Prices are monthly and include the recovery loft. Switch between programmes whenever you
            like — nobody at the desk will make it awkward.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROGRAMS.map((p) => (
            <article
              key={p.name}
              data-testid="program-card"
              className="flex flex-col rounded-3xl border border-[#E2D8C6] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <ProgramIcon kind={p.icon} />
              <h3 className="mt-5 text-xl font-semibold tracking-tight text-[#1B1A17]">{p.name}</h3>
              <p className="mt-2 text-lg font-semibold text-[#D2683F]">{p.price}</p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-[#5C554A]">{p.blurb}</p>
              <ul className="mt-6 space-y-2 border-t border-[#EFE6D8] pt-5 text-xs uppercase tracking-wider text-[#8A7F6C]">
                <li>{p.cadence}</li>
                <li>{p.cap}</li>
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
