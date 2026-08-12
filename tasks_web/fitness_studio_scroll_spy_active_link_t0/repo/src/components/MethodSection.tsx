type Phase = {
  number: string
  title: string
  weeks: string
  body: string
}

const PHASES: Phase[] = [
  {
    number: '01',
    title: 'Assess',
    weeks: 'Week 0',
    body:
      'Sixty minutes with a coach: movement screen, a few loaded sets to see how you brace, an honest conversation about your last two years of training, and whatever your physio has told you. Nothing gets written until this is done.',
  },
  {
    number: '02',
    title: 'Build',
    weeks: 'Weeks 1–4',
    body:
      'Volume goes up while loads stay conservative. This is the part people want to skip and the part that decides whether week ten hurts. Expect to leave most sessions feeling like you could have done more.',
  },
  {
    number: '03',
    title: 'Load',
    weeks: 'Weeks 5–9',
    body:
      'Percentages climb into the eighties, accessory work narrows to what your weak point actually is, and your coach starts adjusting on the day based on what the bar speed says rather than what the card says.',
  },
  {
    number: '04',
    title: 'Test',
    weeks: 'Weeks 10–12',
    body:
      'Volume drops, the bar gets heavy, and you re-test the same lifts you tested in week zero. The numbers go on your card, we compare them out loud, and the next block gets written from what they say.',
  },
]

const SAMPLE_WEEK: ReadonlyArray<readonly [string, string, string]> = [
  ['Monday', 'Strength Block', 'Squat waves · pressing · midline'],
  ['Tuesday', 'Engine Room', 'Row intervals at tested pace'],
  ['Thursday', 'Strength Block', 'Deadlift · rows · single-leg work'],
  ['Saturday', 'Olympic Technique', 'Snatch drilling and video review'],
]

export function MethodSection() {
  return (
    <section id="method" data-testid="method-section" className="border-b border-white/10 bg-stone-100 text-stone-800">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-stone-500">How we coach</p>
          <h2 className="mt-4 text-4xl font-black uppercase tracking-tight text-stone-950">
            One twelve-week block at a time
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-stone-600">
            Nobody here trains without a plan, and no plan runs longer than twelve weeks without
            being re-written. Four phases, a re-test at the end of each one, and a coach who can
            explain every line on your card.
          </p>
        </div>

        <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PHASES.map((phase) => (
            <li
              key={phase.number}
              data-testid="method-step"
              className="rounded-2xl border border-stone-300 bg-white p-7"
            >
              <p className="text-4xl font-black text-lime-600">{phase.number}</p>
              <h3 className="mt-4 text-xl font-bold text-stone-950">{phase.title}</h3>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-stone-500">
                {phase.weeks}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-stone-600">{phase.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-14 grid gap-8 rounded-2xl border border-stone-300 bg-white p-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h3 className="text-2xl font-bold text-stone-950">What a normal week looks like</h3>
            <p className="mt-4 leading-relaxed text-stone-600">
              Most members train three or four times a week and take the fourth day as Open
              Platform. Nothing on this list is compulsory — if you can only make Tuesday and
              Saturday, your coach writes a two-day block instead of pretending you will show up
              four times.
            </p>
            <p className="mt-4 text-sm text-stone-500">
              Sample block for a member in their second cycle, training four days.
            </p>
          </div>
          <table className="w-full text-left text-sm">
            <caption className="sr-only">A sample four-day training week at Northline</caption>
            <thead>
              <tr className="border-b border-stone-300 text-xs uppercase tracking-wide text-stone-500">
                <th scope="col" className="py-2 pr-4 font-semibold">Day</th>
                <th scope="col" className="py-2 pr-4 font-semibold">Session</th>
                <th scope="col" className="py-2 font-semibold">Focus</th>
              </tr>
            </thead>
            <tbody>
              {SAMPLE_WEEK.map(([day, session, focus]) => (
                <tr key={day} data-testid="sample-day" className="border-b border-stone-200 last:border-0">
                  <th scope="row" className="py-3 pr-4 font-bold text-stone-900">{day}</th>
                  <td className="py-3 pr-4 text-stone-700">{session}</td>
                  <td className="py-3 text-stone-600">{focus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
