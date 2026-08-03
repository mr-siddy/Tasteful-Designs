const STEPS = [
  {
    number: '01',
    title: 'A twenty-minute call, or a coffee at the desk',
    detail:
      'Tell us what your week looks like and what you are trying to be able to do. If Tidewater is the wrong room for that, we will say so and point you somewhere better — that has happened about forty times and we are fine with it.',
    aside: 'No cost, no card, no tour of a supplement wall.',
  },
  {
    number: '02',
    title: 'The movement screen',
    detail:
      'Forty minutes on the floor with a coach, in whatever you already own. You squat, hinge, press, pull and carry an empty bar while somebody writes down what your joints actually do under load.',
    aside: 'Bring a shift roster if your week is irregular.',
  },
  {
    number: '03',
    title: 'Foundations Six, or straight into a track',
    detail:
      'Most people spend six coached sessions learning the five lifts properly in a group of four. If you have lifted before, your screen may send you straight into the strength or conditioning track instead.',
    aside: 'Start any Monday of the month.',
  },
  {
    number: '04',
    title: 'Your first twelve-week block',
    detail:
      'You get a printed plan, a standing class time and a test week at each end of the block. From there the rhythm is simple: train, review in week three, adjust in pen, retest in week twelve.',
    aside: 'Month to month from here. Cancel with a week of notice.',
  },
]

export function HowItWorks() {
  return (
    <section id="start" className="border-b border-[#0B2A33]/10 bg-[#0B2A33] text-[#F7F2EA]">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E4682A]">
            From first call to first block
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
            Four steps, about two weeks, and nothing you have to decide on the spot
          </h2>
        </div>

        <ol className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <li key={step.number} data-testid="step-card" className="relative">
              <div className="flex items-center gap-4">
                <span className="text-4xl font-black text-[#E4682A]">{step.number}</span>
                <span
                  aria-hidden="true"
                  className="h-px flex-1 bg-gradient-to-r from-[#E4682A]/60 to-transparent"
                />
              </div>
              <h3 className="mt-5 text-lg font-black leading-snug tracking-tight">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#F7F2EA]/75">{step.detail}</p>
              <p className="mt-4 text-xs font-bold uppercase tracking-wider text-[#1D7A6B]">
                {step.aside}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-14 flex flex-wrap items-center gap-5 rounded-3xl bg-[#F7F2EA]/5 p-8">
          <p className="flex-1 text-base leading-relaxed text-[#F7F2EA]/80">
            Intros run Monday to Thursday between 10am and 2pm, and on Saturday mornings for people
            who work weekdays. Marisol takes most of them herself.
          </p>
          <a
            href="#book-intro"
            className="rounded-full bg-[#E4682A] px-7 py-3.5 text-sm font-bold text-white hover:bg-[#c9551d]"
          >
            Book a free intro
          </a>
        </div>
      </div>
    </section>
  )
}
