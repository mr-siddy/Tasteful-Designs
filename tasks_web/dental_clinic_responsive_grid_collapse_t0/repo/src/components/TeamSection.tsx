const TEAM = [
  {
    initials: 'NO',
    name: 'Dr. Nadia Okonkwo',
    role: 'Restorative dentist · co-owner',
    bio: 'Trained at Tufts, eleven years in practice, and the one who talked the partnership into buying the mill. Teaches the chairside ceramics weekend twice a year in Montpelier.',
    tint: '#0f4c4f',
  },
  {
    initials: 'EB',
    name: 'Dr. Elliot Braga',
    role: 'Family & paediatric dentist · co-owner',
    bio: 'Grew up in Winooski, came back after residency in Rochester. Sees most of our under-twelves and keeps a drawer of stickers that is genuinely better than the competition.',
    tint: '#1c6f6b',
  },
  {
    initials: 'RV',
    name: 'Ruth Vandermeer, RDH',
    role: 'Hygiene lead',
    bio: 'Twenty-two years of hygiene, the last nine here. Runs the periodontal programme and will tell you the truth about your gums without ever once making you feel small.',
    tint: '#c68a3e',
  },
]

/** Who you will actually see, with monogram portraits rather than stock photos. */
export default function TeamSection() {
  return (
    <section id="team" data-testid="team" className="bg-white">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#c68a3e]">
            The people in the building
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-[#0d2b2e] sm:text-4xl">
            Two dentists, four hygienists, nobody in a call centre
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#0d2b2e]/70">
            When you ring at half past eight you get Marisol at the front desk, who has
            been here since we opened and knows which chair you like. You see the same
            dentist every visit unless you ask not to.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((person) => (
            <article
              key={person.name}
              data-testid="team-member"
              className="rounded-2xl border border-[#0f4c4f]/10 bg-[#faf5ec] p-7"
            >
              <svg viewBox="0 0 96 96" className="h-20 w-20" role="img" aria-label={person.name}>
                <circle cx="48" cy="48" r="46" fill={person.tint} opacity="0.14" />
                <circle cx="48" cy="48" r="38" fill={person.tint} opacity="0.9" />
                <text
                  x="48"
                  y="58"
                  textAnchor="middle"
                  fontSize="28"
                  fontFamily="Georgia, serif"
                  fill="#faf5ec"
                >
                  {person.initials}
                </text>
              </svg>
              <h3 className="mt-5 font-serif text-xl font-semibold text-[#0d2b2e]">
                {person.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-[#1c6f6b]">{person.role}</p>
              <p className="mt-4 text-[15px] leading-relaxed text-[#0d2b2e]/70">{person.bio}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
