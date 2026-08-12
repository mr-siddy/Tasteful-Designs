type Coach = {
  name: string
  role: string
  credentials: string
  bio: string
  accent: string
  ring: string
}

const COACHES: Coach[] = [
  {
    name: 'Dana Whitlock',
    role: 'Head coach & founder',
    credentials: 'NSCA CSCS · 19 years coaching',
    bio: 'Opened Northline in 2014 after a decade in university strength and conditioning. Writes most of the masters programming and still coaches the 06:00 on Mondays.',
    accent: '#bef264',
    ring: '#3f6212',
  },
  {
    name: 'Ruben Okafor',
    role: 'Weightlifting coach',
    credentials: 'USAW Level 2 · National masters competitor',
    bio: 'Runs the platforms on Wednesday nights and Saturday mornings. If your snatch stalls somewhere between the knee and the hip, he is the reason it stops doing that.',
    accent: '#fbbf24',
    ring: '#92400e',
  },
  {
    name: 'Priya Sandhu',
    role: 'Foundations coach',
    credentials: 'USAW Level 1 · BSc Sport Science',
    bio: 'Takes almost every new member through their first eight weeks. Has taught more people to deadlift than the rest of the staff combined and is unreasonably patient about it.',
    accent: '#7dd3fc',
    ring: '#075985',
  },
  {
    name: 'Marcus Feld',
    role: 'Conditioning coach',
    credentials: 'Concept2 certified · former rowing coach',
    bio: 'Builds the Engine Room sessions off tested paces so nobody spends forty-five minutes going too hard to improve. Also maintains the ergs, which is why they still work.',
    accent: '#f472b6',
    ring: '#9d174d',
  },
]

function CoachPortrait({ accent, ring, name }: { accent: string; ring: string; name: string }) {
  return (
    <svg viewBox="0 0 120 120" className="h-24 w-24 shrink-0" role="img" aria-label={`Portrait illustration of ${name}`}>
      <circle cx="60" cy="60" r="58" fill="#0c0a09" stroke={ring} strokeWidth="2.5" />
      <circle cx="60" cy="46" r="19" fill="none" stroke={accent} strokeWidth="3" />
      <path d="M24 104c4-21 18-31 36-31s32 10 36 31" fill="none" stroke={accent} strokeWidth="3" strokeLinecap="round" />
      <path d="M42 40c6-9 30-9 36 0" fill="none" stroke={ring} strokeWidth="3" strokeLinecap="round" />
      <path d="M34 96h52" stroke="#292524" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

export function CoachesSection() {
  return (
    <section data-testid="coaches-section" className="border-b border-white/10 bg-stone-900">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-lime-300">Who coaches you</p>
          <h2 className="mt-4 text-4xl font-black uppercase tracking-tight text-stone-50">
            Four full-time coaches
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-stone-300">
            Nobody here is coaching between shifts at another gym. All four are on staff, all four
            know your name, and all four can pick up your block if your usual coach is away.
          </p>
        </div>

        <ul className="mt-14 grid gap-6 md:grid-cols-2">
          {COACHES.map((coach) => (
            <li
              key={coach.name}
              data-testid="coach-card"
              className="flex gap-6 rounded-2xl bg-stone-950/60 p-7 ring-1 ring-white/10"
            >
              <CoachPortrait accent={coach.accent} ring={coach.ring} name={coach.name} />
              <div>
                <h3 className="text-xl font-bold text-stone-50">{coach.name}</h3>
                <p className="text-sm font-semibold text-lime-300">{coach.role}</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-stone-500">
                  {coach.credentials}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-stone-300">{coach.bio}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
