import { SectionHeading } from './PageKit'

const STEPS = [
  {
    number: '01',
    title: 'Book the intro',
    when: 'Takes a minute',
    body: 'Pick a time from the form at the bottom of this page or call the desk. Wear whatever you already own — trainers with a flat sole are useful, everything else is not.',
  },
  {
    number: '02',
    title: 'Get assessed',
    when: 'Forty-five minutes',
    body: 'Nadia walks you through twelve movement screens, talks through your history, and writes a starting load for each of the four lifts. You lift an empty bar and nothing heavier.',
  },
  {
    number: '03',
    title: 'Run the eight weeks',
    when: 'Three mornings or evenings a week',
    body: 'Foundations, in a group of no more than twelve, with two coaches on the floor. By week four you are squatting and pressing with load; by week eight you have pulled from the floor.',
  },
  {
    number: '04',
    title: 'Pick where you go next',
    when: 'At the retest',
    body: 'Most people move onto Full Club and keep training three days a week. Some go to Barbell Club, some to Masters, some to open gym with a quarterly review. Nobody gets sold anything at this point.',
  },
]

export default function OnRamp() {
  return (
    <section className="bg-[#2F6C7A] text-[#F7F3EC]">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#12141A]">The on-ramp</p>
          <h2 className="mt-3 text-3xl font-black leading-tight tracking-tight sm:text-4xl">
            What the first eight weeks actually look like
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#F7F3EC]/85 sm:text-lg">
            There is one way into the club and everybody takes it, including the people who have lifted
            before. It exists so that no coach ever has to guess what you can do.
          </p>
        </div>

        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <li
              key={step.number}
              data-testid="onramp-step"
              className="rounded-3xl border border-[#12141A]/20 bg-[#12141A]/25 p-7"
            >
              <p className="text-3xl font-black tracking-tight text-[#E1552B]">{step.number}</p>
              <h3 className="mt-3 text-lg font-black tracking-tight">{step.title}</h3>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#F7F3EC]/60">
                {step.when}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[#F7F3EC]/85">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
