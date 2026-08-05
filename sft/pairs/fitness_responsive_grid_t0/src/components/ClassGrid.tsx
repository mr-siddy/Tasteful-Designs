const CLASSES = [
  {
    name: 'Foundations',
    days: 'Mon & Wed',
    time: '6:00am',
    length: '45 min',
    level: 'Reset',
    coach: 'Priya',
    detail:
      'Squat, hinge, press and carry, rebuilt from the floor up. No load leaves the rack until the shape is right.',
  },
  {
    name: 'Barbell Strength',
    days: 'Tue & Thu',
    time: '6:30am',
    length: '60 min',
    level: 'Build',
    coach: 'Marcus',
    detail:
      'The main strength session: a heavy lower day and a heavy upper day, straight off the current twelve-week block.',
  },
  {
    name: 'Engine Room',
    days: 'Mon to Fri',
    time: '12:15pm',
    length: '40 min',
    level: 'Push',
    coach: 'Ines',
    detail:
      'Bike, sled and carry intervals at a pace you can hold and repeat. Lunchtime, showered and out by one.',
  },
  {
    name: 'Hinge & Carry',
    days: 'Mon & Wed',
    time: '5:30pm',
    length: '55 min',
    level: 'Build',
    coach: 'Marcus',
    detail:
      'Deadlift variations, loaded carries and the unglamorous back work that keeps desk-bound spines honest.',
  },
  {
    name: 'Saturday Barbell Club',
    days: 'Saturday',
    time: '8:00am',
    length: '90 min',
    level: 'Compete',
    coach: 'Priya',
    detail:
      'Snatch and clean-and-jerk technique, capped at eight lifters, finishing with coffee at Cavendish Roasters.',
  },
  {
    name: 'Long Slow Sunday',
    days: 'Sunday',
    time: '9:00am',
    length: '50 min',
    level: 'Reset',
    coach: 'Ines',
    detail:
      'Easy aerobic work, hip and shoulder range, and twenty minutes of breathing you will pretend to hate.',
  },
]

const LEVELS = [
  {
    name: 'Reset',
    blurb: 'Technique and range. You could hold a conversation the whole way through.',
    accent: 'bg-emerald-500',
  },
  {
    name: 'Build',
    blurb: 'Working sets at real load, with three to four minutes of rest between them.',
    accent: 'bg-amber-500',
  },
  {
    name: 'Push',
    blurb: 'Conditioning that gets uncomfortable on purpose, held for short repeated blocks.',
    accent: 'bg-orange-600',
  },
  {
    name: 'Compete',
    blurb: 'Barbell sport technique and near-maximal singles. Foundations first, please.',
    accent: 'bg-rose-600',
  },
]

export function ClassGrid() {
  return (
    <section id="timetable" className="bg-stone-950 text-stone-100">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-amber-400">
            This week on the floor
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
            Six classes, nine spots each, booked from your phone
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-stone-300">
            The timetable barely moves from term to term — people build their week around it, so we
            treat it as a promise. Every session below is coached start to finish, and every one of
            them is capped at nine so nobody waits for a rack.
          </p>
        </div>

        <div
          data-testid="class-grid"
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {CLASSES.map((session) => (
            <article
              key={session.name}
              data-testid="class-card"
              className="flex flex-col rounded-2xl border border-stone-800 bg-stone-900 p-6 transition-colors hover:border-amber-400/60"
            >
              <div className="flex items-center justify-between gap-3">
                <span
                  data-testid="class-level"
                  className="rounded-full border border-stone-700 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-amber-400"
                >
                  {session.level}
                </span>
                <span className="text-xs uppercase tracking-widest text-stone-500">
                  {session.length}
                </span>
              </div>

              <h3 className="mt-5 text-xl font-bold tracking-tight">{session.name}</h3>

              <p data-testid="class-time" className="mt-2 text-sm font-semibold text-stone-300">
                {session.days} · {session.time}
              </p>

              <p className="mt-4 flex-1 text-sm leading-relaxed text-stone-400">{session.detail}</p>

              <div className="mt-6 flex items-center gap-2 border-t border-stone-800 pt-4">
                <svg viewBox="0 0 20 20" width="16" height="16" aria-hidden="true">
                  <circle cx="10" cy="7" r="3.4" fill="none" stroke="#fbbf24" strokeWidth="1.6" />
                  <path
                    d="M4 16.5c0-3 2.7-4.6 6-4.6s6 1.6 6 4.6"
                    fill="none"
                    stroke="#fbbf24"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="text-sm text-stone-400">Coached by {session.coach}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 border-t border-stone-800 pt-12">
          <h3 className="text-lg font-bold tracking-tight">What the intensity tags mean</h3>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-stone-400">
            Every session carries one of four tags so you can read the week at a glance and stack
            hard days next to easy ones instead of by accident.
          </p>

          <div
            data-testid="level-grid"
            className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4"
          >
            {LEVELS.map((level) => (
              <div
                key={level.name}
                data-testid="level-tile"
                className="rounded-xl border border-stone-800 bg-stone-900/60 p-5"
              >
                <span className={`block h-1.5 w-10 rounded-full ${level.accent}`} />
                <h4 className="mt-4 text-sm font-bold uppercase tracking-widest text-stone-100">
                  {level.name}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-stone-400">{level.blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
