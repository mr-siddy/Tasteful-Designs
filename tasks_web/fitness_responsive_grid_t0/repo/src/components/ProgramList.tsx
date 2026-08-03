const PROGRAMS = [
  {
    name: 'Foundations',
    price: '$260',
    unit: 'six-week block',
    detail:
      'Two sessions a week with a coach who assumes you have never touched a barbell. You leave able to squat, hinge, press and carry without being told to be careful.',
    tag: 'Start here',
  },
  {
    name: 'Small-Group Strength',
    price: '$58',
    unit: 'per week',
    detail:
      'The core membership. Two coached sessions a week off a twelve-week block, with your loads tracked on the whiteboard and adjusted every Monday.',
    tag: 'Most chosen',
  },
  {
    name: 'Strength + Engine',
    price: '$76',
    unit: 'per week',
    detail:
      'Unlimited access to every strength session plus the midday Engine Room conditioning work. For people training four or five days and wanting it planned.',
    tag: null,
  },
  {
    name: 'Saturday Barbell Club',
    price: '$34',
    unit: 'per week',
    detail:
      'Ninety minutes of snatch, clean and jerk technique on Saturday mornings, capped at eight lifters and open to members and visitors alike.',
    tag: null,
  },
  {
    name: 'Return to Lifting',
    price: '$95',
    unit: 'per session',
    detail:
      'Written with your physiotherapist, usually after a back, shoulder or knee episode. We share notes with Merri Creek Physio so nobody guesses.',
    tag: 'Referral',
  },
  {
    name: 'One-to-one coaching',
    price: '$110',
    unit: 'per session',
    detail:
      'Private hours for competition prep, a stubborn lift, or anyone who would rather learn without an audience before joining a group.',
    tag: null,
  },
]

export function ProgramList() {
  return (
    <section id="programs" className="bg-stone-50">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-amber-600">
            What we run
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
            Six ways into the room, one programme underneath
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-stone-600">
            Everything below draws from the same twelve-week block, so a Foundations lifter and a
            Barbell Club regular are pulling in the same direction on the same day. Prices are per
            person, billed fortnightly, and there is no lock-in contract.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {PROGRAMS.map((program) => (
            <li
              key={program.name}
              data-testid="program-card"
              className="flex flex-col rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-bold tracking-tight text-stone-900">{program.name}</h3>
                {program.tag && (
                  <span className="shrink-0 rounded-full bg-amber-100 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-amber-800">
                    {program.tag}
                  </span>
                )}
              </div>

              <p className="mt-4 flex items-baseline gap-2">
                <span className="text-3xl font-black tracking-tight text-stone-900">
                  {program.price}
                </span>
                <span className="text-sm text-stone-500">{program.unit}</span>
              </p>

              <p className="mt-4 flex-1 text-sm leading-relaxed text-stone-600">{program.detail}</p>

              <a
                href="#trial"
                data-testid="program-link"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-stone-900 hover:text-amber-600"
              >
                Ask about {program.name}
                <svg viewBox="0 0 20 20" width="14" height="14" aria-hidden="true">
                  <path
                    d="M4 10h11M11 5l5 5-5 5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
