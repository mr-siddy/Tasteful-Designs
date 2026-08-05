type Person = {
  name: string
  role: string
  since: string
  bio: string
  initials: string
  tint: string
}

const TEAM: Person[] = [
  {
    name: 'Dr. Nadia Rehman',
    role: 'Principal dentist',
    since: 'Opened the practice in 2014',
    bio: 'Nadia trained at Ashbourne and spent four years in a busy public clinic before opening Alder Court. She takes the nervous patients, the ones who have avoided a chair for years, and the awkward front teeth nobody else wants to touch.',
    initials: 'NR',
    tint: 'from-teal-700 to-teal-500',
  },
  {
    name: 'Dr. Marcus Oyelaran',
    role: 'Restorative dentist & implants',
    since: 'Joined 2018',
    bio: 'Marcus places and restores every implant himself, so there is never a handover halfway through. He also runs our single-visit crown work and quietly holds the record for the shortest crown appointment in the practice: 94 minutes.',
    initials: 'MO',
    tint: 'from-amber-600 to-amber-400',
  },
  {
    name: 'Tessa Lindqvist',
    role: 'Senior oral health therapist',
    since: 'Joined 2016',
    bio: 'Tessa handles cleans, gum therapy and children. She is the reason our under-tens ask to come back, and the reason a stubborn pocket of gum disease gets a plan instead of a lecture.',
    initials: 'TL',
    tint: 'from-teal-600 to-cyan-400',
  },
  {
    name: 'Joel Barrantes',
    role: 'Practice manager',
    since: 'Joined 2020',
    bio: 'Joel reads every appointment request, rings you back, argues with health funds on your behalf and knows which Tuesday slot will get you back to work by two. If you have ever been quoted a gap over the phone, that was him.',
    initials: 'JB',
    tint: 'from-teal-800 to-teal-600',
  },
]

export function TeamSection() {
  return (
    <section id="team" className="bg-teal-950 text-stone-50">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
            The people in the room
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Four of us, and you will see the same faces every time
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-teal-50/80">
            Alder Court is deliberately small. There is no rotating roster of locums, no third
            dentist we have not met, and no chance of explaining your history twice. Continuity is
            the whole point.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {TEAM.map((person) => (
            <article
              key={person.name}
              data-testid="team-member"
              className="flex gap-5 rounded-3xl bg-teal-900/60 p-7 ring-1 ring-inset ring-stone-50/10"
            >
              <span
                className={`flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${person.tint} text-xl font-semibold text-stone-50 shadow-lg`}
                aria-hidden="true"
              >
                {person.initials}
              </span>
              <div>
                <h3 className="text-xl font-semibold tracking-tight">{person.name}</h3>
                <p className="mt-1 text-sm font-semibold text-amber-200">{person.role}</p>
                <p className="text-xs uppercase tracking-wide text-teal-50/50">{person.since}</p>
                <p className="mt-3 text-sm leading-relaxed text-teal-50/80">{person.bio}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-6 rounded-3xl bg-teal-900/40 p-8 ring-1 ring-inset ring-stone-50/10 sm:grid-cols-3">
          <div>
            <p className="text-3xl font-semibold text-amber-200">1 chair</p>
            <p className="mt-1 text-sm text-teal-50/75">per dentist, per hour — never doubled up</p>
          </div>
          <div>
            <p className="text-3xl font-semibold text-amber-200">42 hours</p>
            <p className="mt-1 text-sm text-teal-50/75">of continuing education each, every year</p>
          </div>
          <div>
            <p className="text-3xl font-semibold text-amber-200">0 quotas</p>
            <p className="mt-1 text-sm text-teal-50/75">nobody here is paid to sell you treatment</p>
          </div>
        </div>
      </div>
    </section>
  )
}
