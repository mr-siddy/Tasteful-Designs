const STEPS = [
  {
    title: 'The phone call',
    minutes: '6 minutes',
    body:
      'Sasha answers between 7am and 5pm and will ask what brought you in, whether anything hurts right now, and how you feel about dental visits generally. That last answer goes at the top of your chart, and it changes how the first appointment is built.',
  },
  {
    title: 'Paperwork before you arrive',
    minutes: '10 minutes, at home',
    body:
      'Medical history, medications and insurance details go in from your own kitchen table the night before. Nobody hands you a clipboard in a waiting room and then calls your name three questions in.',
  },
  {
    title: 'The first visit',
    minutes: '75 minutes',
    body:
      'A full set of x-rays, intraoral photographs, a gum measurement chart and an unhurried look at everything. Dr. Raghunathan then walks the photographs with you on the screen and explains what she is seeing in words you can repeat to somebody else.',
  },
  {
    title: 'The written plan',
    minutes: 'Same day',
    body:
      'Everything that needs doing, split into what is urgent, what can wait a year, and what is genuinely optional. Each line carries a price, your insurance or membership contribution, and what you would pay. You take it home. Nobody schedules treatment at this appointment.',
  },
  {
    title: 'Treatment, at your pace',
    minutes: 'You choose the order',
    body:
      'We start wherever you want to start. Long appointments can be split, urgent work can be spaced out over months, and if you decide to do nothing for now we keep you on hygiene recall and check it has not moved.',
  },
]

function StepIcon({ index }: { index: number }) {
  return (
    <svg viewBox="0 0 56 56" className="h-14 w-14" aria-hidden="true">
      <circle cx="28" cy="28" r="27" fill="#0F3B36" />
      <circle cx="28" cy="28" r="21" fill="none" stroke="#E8A6BF" strokeWidth="1.5" opacity="0.6" />
      <text
        x="28"
        y="35"
        textAnchor="middle"
        fontSize="20"
        fontWeight="600"
        fill="#FBF8F3"
        fontFamily="Georgia, serif"
      >
        {index + 1}
      </text>
    </svg>
  )
}

export function VisitJourney() {
  return (
    <section id="first-visit" className="bg-[#F3EDE4]" aria-labelledby="journey-heading">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#C2557E]">
            Your first visit
          </p>
          <h2
            id="journey-heading"
            className="mt-4 font-serif text-3xl font-semibold tracking-tight text-[#0F3B36] sm:text-4xl"
          >
            Five steps, and none of them are a surprise
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#14201E]/70">
            The most common thing patients tell us they were dreading was not the drill. It was not
            knowing what was about to happen or what it was going to cost. So here is the entire
            sequence, start to finish.
          </p>
        </div>

        <ol className="mt-14 space-y-6">
          {STEPS.map((step, index) => (
            <li
              key={step.title}
              data-testid="journey-step"
              className="flex flex-col gap-5 rounded-3xl border border-[#0F3B36]/10 bg-[#FBF8F3] p-7 sm:flex-row sm:items-start"
            >
              <StepIcon index={index} />
              <div>
                <div className="flex flex-wrap items-baseline gap-3">
                  <h3 className="font-serif text-xl font-semibold text-[#0F3B36]">{step.title}</h3>
                  <span className="rounded-full bg-[#DCEDE7] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#0F3B36]">
                    {step.minutes}
                  </span>
                </div>
                <p className="mt-3 leading-relaxed text-[#14201E]/75">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
