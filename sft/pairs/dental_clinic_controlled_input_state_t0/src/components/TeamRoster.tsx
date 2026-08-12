type Clinician = {
  name: string
  role: string
  credentials: string
  bio: string
  hue: string
  accent: string
  initials: string
}

const TEAM: Clinician[] = [
  {
    name: 'Dr. Ines Okonkwo',
    role: 'Principal dentist',
    credentials: 'BDS, MFDS · registered 2004',
    hue: '#2b3a7a',
    accent: '#f9c58d',
    initials: 'IO',
    bio: 'Bought the practice from Dr. Halloran in 2014 and immediately doubled every appointment length. Restorative work and implants; the person most patients meet first.',
  },
  {
    name: 'Dr. Samuel Reyes-Ward',
    role: 'Dentist',
    credentials: 'BDS, PGCert Endodontics · registered 2011',
    hue: '#3d5192',
    accent: '#f2704a',
    initials: 'SR',
    bio: 'Takes the root canals nobody else wants and finishes most of them in a single visit. Teaches one day a fortnight at the dental school on Farrow Street.',
  },
  {
    name: 'Nadia Brennan',
    role: 'Lead hygienist',
    credentials: 'Dip DH · registered 2009',
    hue: '#1f7a6a',
    accent: '#a8e0d4',
    initials: 'NB',
    bio: 'Fifteen years of gum work and the calmest hands in the building. If your gums bleed when you brush, you will be seeing a lot of Nadia for the first six months.',
  },
  {
    name: 'Marta Kowalczyk',
    role: 'Practice manager',
    credentials: 'At Lantern Lane since 2007',
    hue: '#8a4f7d',
    accent: '#f0c6e4',
    initials: 'MK',
    bio: 'Answers the phone, holds the diary, and is the one who finds you a Thursday evening slot when the system says there is nothing until March.',
  },
]

function Portrait({ hue, accent, initials }: Pick<Clinician, 'hue' | 'accent' | 'initials'>) {
  return (
    <svg viewBox="0 0 200 200" className="h-24 w-24" role="img" aria-label={`Illustrated portrait, ${initials}`}>
      <defs>
        <clipPath id={`portrait-clip-${initials}`}>
          <circle cx="100" cy="100" r="92" />
        </clipPath>
      </defs>
      <circle cx="100" cy="100" r="92" fill={accent} />
      <g clipPath={`url(#portrait-clip-${initials})`}>
        <path d="M100 118c34 0 62 26 66 60v30H34v-30c4-34 32-60 66-60z" fill={hue} />
        <circle cx="100" cy="80" r="38" fill={hue} />
        <path d="M62 74c6-24 26-38 38-38s32 14 38 38c-6-6-20-12-38-12s-32 6-38 12z" fill="#152046" opacity="0.55" />
      </g>
      <circle cx="100" cy="100" r="92" fill="none" stroke="#152046" strokeOpacity="0.12" strokeWidth="4" />
    </svg>
  )
}

export default function TeamRoster() {
  return (
    <section id="team" className="bg-[#faf6f0]">
      <div className="mx-auto max-w-6xl px-5 py-20 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#f2704a]">
            The four of us
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#152046] sm:text-4xl">
            You will see the same faces every time
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#1f2a4d]/75">
            Lantern Lane has never used locums. Continuity is most of what makes dentistry
            feel less frightening, so we would rather you waited an extra week for the person
            who already knows your mouth than be squeezed in with a stranger tomorrow.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2">
          {TEAM.map((person) => (
            <li
              key={person.name}
              className="flex gap-6 rounded-3xl border border-[#152046]/10 bg-white p-7 shadow-sm"
            >
              <Portrait hue={person.hue} accent={person.accent} initials={person.initials} />
              <div>
                <h3 className="text-lg font-semibold tracking-tight text-[#152046]">
                  {person.name}
                </h3>
                <p className="mt-1 text-sm font-semibold text-[#f2704a]">{person.role}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.12em] text-[#2b3a7a]/60">
                  {person.credentials}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[#1f2a4d]/75">{person.bio}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
