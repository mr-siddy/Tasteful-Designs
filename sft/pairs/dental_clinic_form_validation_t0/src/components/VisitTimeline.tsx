const STEPS = [
  {
    step: '01',
    title: 'You send the request',
    body: 'Use the form on this page or ring the practice. Either way it lands with Joel at the front desk, who has been booking this diary for six years and knows which slots actually work for school pick-up.',
  },
  {
    step: '02',
    title: 'Paperwork before you arrive',
    body: 'We email one short medical history the day before. Filling it in at home means you are not scribbling on a clipboard while the chair sits empty, and it gives us time to read it properly.',
  },
  {
    step: '03',
    title: 'A full hour in the chair',
    body: 'Your first visit is sixty minutes, not the fifteen the industry has drifted towards. We chart every tooth, measure the gums, take two small images and scale and polish. You will meet the dentist and the hygienist who will keep seeing you.',
  },
  {
    step: '04',
    title: 'A written plan with real numbers',
    body: 'Before you leave you get a printed plan: what needs doing, what can wait a year, what we would do first if the budget is tight, and the fee beside every line. We put your fund rebate next to it so you know the gap.',
  },
  {
    step: '05',
    title: 'Care that fits your calendar',
    body: 'We book the follow-ups you actually agreed to, send one reminder rather than five, and keep your recall spacing honest — if your teeth do not need six-monthly cleans, we will say so and see you in a year.',
  },
]

export function VisitTimeline() {
  return (
    <section id="visit" className="bg-stone-50">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">
              Your first visit
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Five steps, no surprises
            </h2>
            <p className="mt-4 text-base leading-relaxed text-teal-900/70">
              If it has been a decade since your last check-up, you are in good company — roughly a
              third of the people who walk through our door say the same sentence at the desk. Here
              is exactly what happens, so nothing about the day is a surprise.
            </p>
            <div className="mt-8 rounded-3xl bg-teal-50 p-6 ring-1 ring-inset ring-teal-700/15">
              <p className="text-sm font-semibold text-teal-900">Running late?</p>
              <p className="mt-2 text-sm leading-relaxed text-teal-900/70">
                Call the practice. We would rather shuffle the diary than have you speeding down
                Sedge Lane, and we do not charge for a late arrival you warned us about.
              </p>
            </div>
          </div>

          <ol className="relative space-y-8 border-l-2 border-dashed border-teal-700/25 pl-8">
            {STEPS.map((item) => (
              <li key={item.step} data-testid="visit-step" className="relative">
                <span className="absolute -left-[3.05rem] flex h-10 w-10 items-center justify-center rounded-full bg-teal-800 text-sm font-semibold text-amber-200 shadow-sm">
                  {item.step}
                </span>
                <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-inset ring-teal-900/10">
                  <h3 className="text-xl font-semibold tracking-tight">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-teal-900/70">{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
