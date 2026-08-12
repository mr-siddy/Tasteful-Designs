type Coach = {
  name: string
  role: string
  since: string
  bio: string
  tone: string
}

const COACHES: Coach[] = [
  {
    name: 'Priya Raman',
    role: 'Co-founder, head of programming',
    since: 'Here since 2016',
    bio: 'Eleven years in a physiotherapy clinic before she got sick of sending people back into gyms that would hurt them again. Writes about a hundred and forty programs a month and remembers all of them.',
    tone: '#C7F04A',
  },
  {
    name: 'Tobias Lund',
    role: 'Co-founder, floor coach',
    since: 'Here since 2016',
    bio: 'Built the platforms, the sled track and most of the shelving. Coaches the 5:45 shift because he has never once wanted to sleep in, which the rest of us find suspicious.',
    tone: '#D9622B',
  },
  {
    name: 'Marguerite Okafor',
    role: 'Sixty Plus lead',
    since: 'Here since 2019',
    bio: 'Came in at 58 for a trial fortnight, deadlifted 60kg by the winter, and now runs the strongest and loudest session on the timetable every Tuesday and Thursday morning.',
    tone: '#8AB6D6',
  },
  {
    name: 'Danny Whitlock',
    role: 'Engine Room and Back to Barbell',
    since: 'Here since 2021',
    bio: 'Ex-fire brigade, rebuilt his own back after a bad year, and is the reason our conditioning is written in metres and watts instead of vibes and vomit.',
    tone: '#E5C049',
  },
]

function CoachPortrait({ tone, name }: { tone: string; name: string }) {
  return (
    <svg viewBox="0 0 120 120" className="h-20 w-20" role="img" aria-label={`Portrait illustration of ${name}`}>
      <circle cx="60" cy="60" r="58" fill={tone} opacity="0.18" />
      <circle cx="60" cy="60" r="58" fill="none" stroke={tone} strokeWidth="3" />
      <circle cx="60" cy="47" r="20" fill={tone} />
      <path d="M22 108c4-22 19-33 38-33s34 11 38 33z" fill={tone} />
    </svg>
  )
}

export function CoachRoster() {
  return (
    <section id="coaches" className="border-y border-[#10161C]/10 bg-[#EAE5DA]">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="max-w-2xl">
          <p className="text-[11px] font-black uppercase tracking-[0.28em] text-[#D9622B]">
            The people on the floor
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
            Four coaches, and you will know all of their names by Friday
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#4C5B54]">
            Nobody at Ashgrove is a casual hire filling a timetable slot. Every coach writes
            programs, every coach does reviews, and every coach has been here long enough to
            remember what your shoulder was doing last March.
          </p>
        </div>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2">
          {COACHES.map((coach) => (
            <li
              key={coach.name}
              data-testid="coach-card"
              className="flex gap-6 rounded-3xl border border-[#10161C]/10 bg-[#F4F1EA] p-7"
            >
              <CoachPortrait tone={coach.tone} name={coach.name} />
              <div>
                <h3 className="text-lg font-black tracking-tight">{coach.name}</h3>
                <p className="text-sm font-semibold text-[#D9622B]">{coach.role}</p>
                <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#6E7A72]">
                  {coach.since}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[#4C5B54]">{coach.bio}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
