type Clinician = {
  name: string
  role: string
  credentials: string
  bio: string
  knownFor: string
  tint: [string, string]
}

const TEAM: Clinician[] = [
  {
    name: 'Dr Amara Ellison',
    role: 'Practice principal · restorative & cosmetic',
    credentials: 'DDS, twenty-two years in practice',
    bio: 'Bought the practice from its founder in 2011 and spent the first year taking the fluorescent lights out. Handles veneers, complex rebuilds and every patient who arrives convinced they are the worst case we have seen.',
    knownFor: 'Known for: explaining things twice without being asked',
    tint: ['#99f6e4', '#0f766e'],
  },
  {
    name: 'Dr Tobias Lindqvist',
    role: 'Implants & oral surgery',
    credentials: 'DMD, implant fellowship, 900+ placements',
    bio: 'Places and restores implants himself rather than splitting the work across two practices, which is why the crown fits the post. Also the person you want removing a stubborn wisdom tooth on a Friday afternoon.',
    knownFor: 'Known for: the steadiest hands in the building',
    tint: ['#bae6fd', '#0e7490'],
  },
  {
    name: 'Dr Priya Raghavan',
    role: 'Family & children’s dentistry',
    credentials: 'DDS, paediatric certification',
    bio: 'Sees most of the under-twelves in Rivermill and has an unbeaten record at getting a first-timer to open their mouth. Runs the Saturday morning clinic so parents do not have to pull children out of school.',
    knownFor: 'Known for: the sticker drawer nobody outgrows',
    tint: ['#fde68a', '#b45309'],
  },
  {
    name: 'Hana Mizrahi',
    role: 'Lead hygienist · periodontal care',
    credentials: 'RDH, sixteen years, gum therapy lead',
    bio: 'Runs the hygiene programme and the recall system that quietly keeps six thousand people out of trouble. If your gums have been bleeding when you brush, she is the appointment you actually need first.',
    knownFor: 'Known for: never once making anyone feel judged',
    tint: ['#e9d5ff', '#7e22ce'],
  },
]

function Portrait({ name, tint }: { name: string; tint: [string, string] }) {
  const id = name.toLowerCase().replace(/[^a-z]+/g, '-')
  return (
    <svg viewBox="0 0 120 120" className="h-24 w-24" role="img" aria-label={`Portrait of ${name}`}>
      <defs>
        <linearGradient id={`portrait-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={tint[0]} />
          <stop offset="100%" stopColor={tint[1]} />
        </linearGradient>
      </defs>
      <rect width="120" height="120" rx="30" fill={`url(#portrait-${id})`} />
      <circle cx="60" cy="47" r="20" fill="#fafaf9" opacity="0.92" />
      <path d="M26 108c2-19 16-29 34-29s32 10 34 29Z" fill="#fafaf9" opacity="0.92" />
      <path d="M46 100c0-8 6-13 14-13s14 5 14 13" fill="none" stroke={tint[1]} strokeWidth="3" opacity="0.5" />
    </svg>
  )
}

export function TeamSection() {
  return (
    <section id="team" className="scroll-mt-28 border-y border-stone-200 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-600">Who you will meet</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-teal-950 sm:text-4xl">
            Four clinicians, and you keep the same one
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-stone-600">
            Copper Birch is not a chain and nobody here is a locum passing through for a quarter. You are booked with a
            named person and you stay with that person, because half of what makes dental treatment bearable is not
            having to explain yourself again from scratch.
          </p>
        </div>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2">
          {TEAM.map((clinician) => (
            <li
              key={clinician.name}
              data-testid="team-member"
              className="flex gap-6 rounded-3xl border border-stone-200 bg-stone-50 p-7"
            >
              <Portrait name={clinician.name} tint={clinician.tint} />
              <div className="min-w-0">
                <h3 className="text-lg font-semibold tracking-tight text-teal-950">{clinician.name}</h3>
                <p className="mt-1 text-sm font-medium text-teal-700">{clinician.role}</p>
                <p className="mt-0.5 text-xs uppercase tracking-wide text-stone-400">{clinician.credentials}</p>
                <p className="mt-3 text-sm leading-relaxed text-stone-600">{clinician.bio}</p>
                <p className="mt-3 text-xs font-semibold text-amber-700">{clinician.knownFor}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
