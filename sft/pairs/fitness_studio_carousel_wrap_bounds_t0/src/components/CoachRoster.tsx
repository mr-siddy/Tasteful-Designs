import { MemberPortrait } from './Icons'

const COACHES = [
  {
    name: 'Ingrid Halvorsen',
    initials: 'IH',
    tint: '#bef264',
    role: 'Head coach · owner',
    since: 'Opened the room in 2015',
    credentials: 'USAW L2 · CSCS',
    bio: 'Former collegiate thrower who spent six years coaching in Locust Point before signing the Ellicott Street lease. Writes every Barbell Club block and still coaches the 5am.',
  },
  {
    name: 'Terrence Baptiste',
    initials: 'TB',
    tint: '#7dd3fc',
    role: 'Conditioning lead',
    since: 'Coaching here since 2018',
    credentials: 'CSCS · Concept2 certified',
    bio: 'Rowed for Morgan State, then spent four years in cardiac rehab. He is the reason our conditioning is built on zone-2 work instead of on who can vomit first.',
  },
  {
    name: 'Yesenia Ocampo-Reyes',
    initials: 'YO',
    tint: '#fdba74',
    role: 'Foundations coach',
    since: 'Coaching here since 2020',
    credentials: 'NASM-CPT · PN L1',
    bio: 'Teaches almost every Foundations block, which means she has introduced roughly four hundred people to a barbell without one of them feeling stupid.',
  },
  {
    name: 'Desmond Achterberg',
    initials: 'DA',
    tint: '#c4b5fd',
    role: 'Masters 50+ coach',
    since: 'Coaching here since 2021',
    credentials: 'CSCS · Functional Aging Specialist',
    bio: 'Retired physical therapist who joined as a member at fifty-two, got certified at fifty-four, and now runs the fastest-growing class in the building.',
  },
]

export default function CoachRoster() {
  return (
    <section id="coaches" data-testid="coaches" className="bg-stone-100 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-lime-700">The coaches</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
            Six coaches, none of them part-time
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Coaching is the job here, not a side hustle between shifts. Four of the six have been on
            this floor for more than five years, and every one of them writes programs.
          </p>
        </div>

        <ul className="mt-14 grid gap-6 md:grid-cols-2">
          {COACHES.map((coach) => (
            <li
              key={coach.name}
              data-testid="coach-card"
              className="flex gap-5 rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200"
            >
              <MemberPortrait tint={coach.tint} initials={coach.initials} />
              <div>
                <h3 className="text-lg font-bold tracking-tight text-slate-900">{coach.name}</h3>
                <p className="text-sm font-semibold text-lime-700">{coach.role}</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-slate-400">{coach.credentials}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{coach.bio}</p>
                <p className="mt-3 text-xs font-medium text-slate-500">{coach.since}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
