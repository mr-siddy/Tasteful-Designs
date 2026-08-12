const TEAM = [
  {
    name: 'Dr. Priya Raghunathan, DDS',
    role: 'Owner and general dentist',
    since: 'Opened the practice in 2013',
    bio:
      'Nine years in a twenty-two-patients-a-day corporate group taught her exactly what she did not want to build. She does the restorative work, mills the crowns, and still writes every treatment plan by hand before it is typed up.',
    hue: '#0F3B36',
    accent: '#E8A6BF',
  },
  {
    name: 'Marcus Ellery-Boyd',
    role: 'Lead hygienist',
    since: 'Here since 2015',
    bio:
      'Hand scales before he reaches for the ultrasonic, which is slower and which patients notice. If you are on a three-month recall for gum therapy, Marcus is the person you will see every time — same chair, same hands.',
    hue: '#14524A',
    accent: '#7FC2B2',
  },
  {
    name: 'Sasha Nowak',
    role: 'Practice manager',
    since: 'Here since 2016',
    bio:
      'Answers the phone at 7am, holds the two emergency slots, and knows every insurance plan in Wren Harbor well enough to tell you what it will actually pay before you commit to anything.',
    hue: '#C2557E',
    accent: '#F6DDE6',
  },
  {
    name: 'Dr. Owen Tarrant, DMD',
    role: 'Associate dentist, Tuesdays and Thursdays',
    since: 'Here since 2021',
    bio:
      'Handles aligners and paediatric visits. He is the reason children under twelve get booked back-to-back on Thursday mornings, so a family walks out together instead of coming back three separate times.',
    hue: '#1B6B60',
    accent: '#DCEDE7',
  },
]

function PortraitAvatar({ hue, accent, initials }: { hue: string; accent: string; initials: string }) {
  return (
    <svg viewBox="0 0 120 120" className="h-24 w-24" role="img" aria-label={`Portrait illustration, ${initials}`}>
      <rect width="120" height="120" rx="28" fill={accent} />
      <circle cx="60" cy="46" r="22" fill={hue} />
      <path d="M22 116c0-22 17-36 38-36s38 14 38 36z" fill={hue} opacity="0.85" />
      <circle cx="92" cy="28" r="9" fill={hue} opacity="0.35" />
      <text
        x="60"
        y="53"
        textAnchor="middle"
        fontSize="18"
        fontWeight="700"
        fill="#FBF8F3"
        fontFamily="Georgia, serif"
      >
        {initials}
      </text>
    </svg>
  )
}

function initialsOf(name: string): string {
  const clean = name.replace(/^Dr\.\s*/, '').replace(/,.*$/, '')
  return clean
    .split(/[\s-]+/)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
}

export function TeamSection() {
  return (
    <section id="team" className="bg-[#FBF8F3]" aria-labelledby="team-heading">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#C2557E]">
            The four of us
          </p>
          <h2
            id="team-heading"
            className="mt-4 font-serif text-3xl font-semibold tracking-tight text-[#0F3B36] sm:text-4xl"
          >
            A small practice on purpose
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#14201E]/70">
            Nobody here rotates between locations and nobody is a locum. If you book a cleaning in
            March and another in October, the same person does both, and they remember which side
            of your mouth is the sensitive one.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {TEAM.map((person) => (
            <article
              key={person.name}
              data-testid="team-card"
              className="flex gap-6 rounded-3xl border border-[#0F3B36]/10 bg-white p-7 shadow-sm"
            >
              <PortraitAvatar hue={person.hue} accent={person.accent} initials={initialsOf(person.name)} />
              <div>
                <h3 className="font-serif text-xl font-semibold text-[#0F3B36]">{person.name}</h3>
                <p className="mt-1 text-sm font-semibold text-[#C2557E]">{person.role}</p>
                <p className="text-xs uppercase tracking-[0.14em] text-[#14201E]/50">{person.since}</p>
                <p className="mt-3 text-sm leading-relaxed text-[#14201E]/75">{person.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
