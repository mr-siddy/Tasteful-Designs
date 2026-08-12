const STEPS = [
  {
    week: 'Week 0',
    title: 'A free session, no pitch',
    body:
      'Sixty minutes with a coach: the movement screen, a few empty-bar reps, and an honest answer about whether we are the right room for you. Two or three times a month we tell someone we are not.',
  },
  {
    week: 'Weeks 1–2',
    title: 'Learn the five lifts',
    body:
      'Squat, press, deadlift, row and carry, loaded to about half of what you could do. It will feel too easy on purpose — we are buying you a fourth week that does not hurt.',
  },
  {
    week: 'Weeks 3–5',
    title: 'The first real block',
    body:
      'Loads climb on a written plan, your coach edits it every Friday, and you start recognising the people who train at your hour. This is where the habit is actually built.',
  },
  {
    week: 'Weeks 6–7',
    title: 'Add the second session',
    body:
      'Most members add conditioning here. Two days of lifting plus one hard breathing day is the combination that has moved the most numbers for the most people over eleven years.',
  },
  {
    week: 'Week 8',
    title: 'First retest',
    body:
      'Same lifts, same warm-up, measured the same way as week one. You get a one-page comparison and, almost always, the first evidence that you are not the same person who walked in.',
  },
]

export default function FirstEightWeeks() {
  return (
    <section data-testid="first-eight-weeks" className="bg-stone-100 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-lime-700">What happens next</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
            Your first eight weeks, week by week
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Nobody should have to guess what they are signing up for. This is the path almost every
            member walks, and we will tell you at week eight whether it worked.
          </p>
        </div>

        <ol className="mt-14 space-y-5">
          {STEPS.map((step, position) => (
            <li
              key={step.week}
              data-testid="week-step"
              className="grid gap-5 rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200 sm:grid-cols-[auto_1fr] sm:items-start"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-lg font-black text-lime-300">
                {position + 1}
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-lime-700">{step.week}</p>
                <h3 className="mt-2 text-xl font-bold tracking-tight text-slate-900">{step.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-slate-600">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
