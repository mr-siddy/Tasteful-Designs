import { ClockIcon } from './Icons'

const STEPS = [
  {
    time: '5:30pm',
    title: 'The doors open on a fire that has been going six hours',
    detail:
      'First seating walks into a room that already smells of oak. The nine hearth stools are held for walk-ins until 6:15, so if you did not book, come early and eat at the fire.',
  },
  {
    time: '6:00pm',
    title: 'Bread, butter, and a decision to make',
    detail:
      'Every table starts with hearth bread and bone butter whether you order it or not. While you eat it, your server walks you through the four dishes that were not on the menu yesterday.',
  },
  {
    time: '7:15pm',
    title: 'The grill takes over',
    detail:
      'Fish and vegetables go on almond wood at the cooler end, beef and lamb over the oak coals. Nothing is fired until the course before it has been cleared — expect twelve minutes between plates, not two.',
  },
  {
    time: '9:00pm',
    title: 'Second seating, and the cellar opens up',
    detail:
      'Theo starts pouring the bottles that are too good to sit half-finished. This is the hour to ask what he has open, and the hour the kitchen starts improvising.',
  },
  {
    time: '11:00pm',
    title: 'Last plates, and the coals go to bed',
    detail:
      'The final order goes in at 10:30. What is left of the fire is banked for the morning stock pot, which is why the broth tastes like the night before.',
  },
]

export function EveningFlow() {
  return (
    <section id="evening" className="bg-white text-stone-900" aria-labelledby="evening-heading">
      <div className="mx-auto max-w-5xl px-5 py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-orange-700">
            What to expect
          </p>
          <h2 id="evening-heading" className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            How an evening runs
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-stone-600">
            A full dinner here takes about two and a half hours. We would rather tell you that now
            than rush you later.
          </p>
        </div>

        <ol className="mt-14 space-y-10 border-l-2 border-stone-200 pl-8">
          {STEPS.map((step, i) => (
            <li key={step.time} data-testid="evening-step" className="relative">
              <span className="absolute -left-[43px] flex h-8 w-8 items-center justify-center rounded-full bg-stone-900 text-xs font-semibold text-amber-400">
                {i + 1}
              </span>
              <div className="flex items-center gap-2 text-orange-700">
                <ClockIcon className="h-5 w-5" />
                <span className="text-sm font-semibold tracking-wide">{step.time}</span>
              </div>
              <h3 className="mt-2 text-xl font-semibold tracking-tight">{step.title}</h3>
              <p className="mt-2 leading-relaxed text-stone-600">{step.detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
