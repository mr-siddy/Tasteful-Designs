const COACHES = [
  {
    name: 'Priya Raghunathan',
    role: 'Founder & head coach',
    hue: '#fbbf24',
    creds: ['ASCA Level 2', 'Eight years with Rowing Victoria', 'Masters 71kg national qualifier'],
    bio: 'Writes every block and takes the 6am Foundations class because that is where the mistakes are cheapest to fix.',
  },
  {
    name: 'Marcus Devlin',
    role: 'Strength coach',
    hue: '#f97316',
    creds: ['Ten years MFB firefighter', 'Cert IV Strength & Conditioning', 'Powerlifting referee'],
    bio: 'Ran station fitness for a decade before he ever coached a barbell. Very hard to rattle, very fond of loaded carries.',
  },
  {
    name: 'Ines Okafor',
    role: 'Conditioning & mobility',
    hue: '#34d399',
    creds: ['B.Physiotherapy, La Trobe', 'Return-to-lifting lead', 'Marathon 2:58'],
    bio: 'Runs the Engine Room and every Return to Lifting hour, and is the reason our physio referrals actually come back.',
  },
]

export function CoachRoster() {
  return (
    <section id="coaches" className="bg-white">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-amber-600">
            Who is on the floor
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
            Three coaches, and you will know all of them
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-stone-600">
            No rotating casual staff and no app-based check-ins. The same three people write your
            programme, watch you lift it and remember what your knee did last winter.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {COACHES.map((coach) => (
            <article key={coach.name} data-testid="coach-card" className="flex flex-col">
              <svg
                viewBox="0 0 200 200"
                role="img"
                aria-label={`Portrait medallion of ${coach.name}`}
                className="w-full max-w-[180px] rounded-2xl"
              >
                <rect width="200" height="200" rx="20" fill="#f5f5f4" />
                <circle cx="100" cy="104" r="70" fill={coach.hue} opacity="0.22" />
                <circle cx="100" cy="82" r="26" fill="#57534e" />
                <path d="M46 176c0-30 24-46 54-46s54 16 54 46z" fill="#57534e" />
                <path
                  d="M34 40h132"
                  stroke={coach.hue}
                  strokeWidth="6"
                  strokeLinecap="round"
                  opacity="0.8"
                />
              </svg>

              <h3 className="mt-6 text-xl font-bold tracking-tight text-stone-900">{coach.name}</h3>
              <p className="mt-1 text-sm font-semibold uppercase tracking-widest text-amber-600">
                {coach.role}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-stone-600">{coach.bio}</p>

              <ul className="mt-5 space-y-2">
                {coach.creds.map((cred) => (
                  <li key={cred} className="flex items-start gap-2 text-sm text-stone-500">
                    <svg
                      viewBox="0 0 16 16"
                      width="14"
                      height="14"
                      aria-hidden="true"
                      className="mt-1 shrink-0"
                    >
                      <path
                        d="M3 8.5l3.2 3.2L13 5"
                        fill="none"
                        stroke="#d97706"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {cred}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
