const TEAM = [
  {
    name: 'Margo Ferrante',
    role: 'Chef and owner',
    bio: 'Ran the pit at a barbecue counter on Dunmore Avenue for six years before signing the lease here in 2017. Works the hearth rail five nights a week and still breaks down the sirloins on Tuesdays.',
    initials: 'MF',
  },
  {
    name: 'Desmond Oyelaran',
    role: 'Hearth cook',
    bio: 'Lights the fire at twenty to seven every morning and decides how the coal bed is laid out for the night. Came to us from a bakery, which is why the hearth bread is what it is.',
    initials: 'DO',
  },
  {
    name: 'Priya Raghunathan',
    role: 'Wine director',
    bio: 'Keeps a cellar list of ninety bottles, more than half of them from growers within a day’s drive. Will happily find you something for thirty-eight dollars rather than sell you the expensive thing.',
    initials: 'PR',
  },
  {
    name: 'Delphine Marchetti',
    role: 'Events and front of house',
    bio: 'Answers the events line, holds the book, and has run every one of the three hundred and twelve private dinners this room has hosted. Knows which table wobbles.',
    initials: 'DM',
  },
]

const ROOM_FACTS = [
  { label: 'Dining room', value: '28 seats across nine tables' },
  { label: 'Back room', value: '24 seats at one oak table' },
  { label: 'Bar', value: '10 stools, open until midnight' },
  { label: 'Accessibility', value: 'Step-free from Halstead Row' },
]

function PortraitFrame({ initials }: { initials: string }) {
  return (
    <svg viewBox="0 0 120 120" className="h-20 w-20" role="img" aria-label={`Portrait mark for ${initials}`}>
      <defs>
        <linearGradient id={`portrait-${initials}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e2622a" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#8a3d24" stopOpacity="0.9" />
        </linearGradient>
      </defs>
      <rect width="120" height="120" rx="28" fill={`url(#portrait-${initials})`} />
      <circle cx="60" cy="48" r="20" fill="#f7f2ea" opacity="0.92" />
      <path d="M22 112c4-24 18-36 38-36s34 12 38 36Z" fill="#f7f2ea" opacity="0.92" />
      <text
        x="60"
        y="70"
        textAnchor="middle"
        fontSize="20"
        fontWeight="700"
        fill="#171310"
        fontFamily="ui-serif, Georgia, serif"
      >
        {initials}
      </text>
    </svg>
  )
}

export default function TheRoom() {
  return (
    <section id="room" className="bg-[#efe6d8]" aria-labelledby="room-heading">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-start">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#b8431a]">
              The room
            </p>
            <h2
              id="room-heading"
              className="mt-3 font-serif text-3xl font-semibold tracking-tight sm:text-4xl"
            >
              A brick mill floor, nine tables and a fire you can hear
            </h2>
            <p className="mt-5 leading-relaxed text-[#5b5148]">
              Ember &amp; Rye occupies the ground floor of the old Dunmore worsted mill, which spent
              thirty years as a furniture warehouse before we got the keys. We kept the brick, the
              iron columns and the four-metre windows onto Halstead Row, and put the hearth where the
              loading door used to be so the chimney could run straight up the old flue.
            </p>
            <p className="mt-4 leading-relaxed text-[#5b5148]">
              It is loud in the good way — no music after the first seating, just the fire, the pans
              and forty people talking. Tables are far enough apart that you can hold a conversation,
              and the back room shuts behind a pair of oak doors when a private dinner is running.
            </p>

            <dl className="mt-8 grid gap-4 sm:grid-cols-2">
              {ROOM_FACTS.map((fact) => (
                <div
                  key={fact.label}
                  data-testid="room-fact"
                  className="rounded-2xl border border-[#171310]/10 bg-white p-4"
                >
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#6f645b]">
                    {fact.label}
                  </dt>
                  <dd className="mt-1 text-sm font-medium text-[#171310]">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <h3 className="font-serif text-2xl font-semibold tracking-tight">Who you will meet</h3>
            <ul className="mt-6 space-y-5">
              {TEAM.map((person) => (
                <li
                  key={person.name}
                  data-testid="team-card"
                  className="flex gap-4 rounded-2xl border border-[#171310]/10 bg-white p-5 shadow-sm"
                >
                  <PortraitFrame initials={person.initials} />
                  <div>
                    <p className="font-serif text-lg font-semibold tracking-tight">{person.name}</p>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#b8431a]">
                      {person.role}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-[#5b5148]">{person.bio}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
