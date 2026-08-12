const STEPS = [
  {
    number: '01',
    title: 'Pick two lanes, not the whole book',
    body: 'We start with a shipper you know well and one you argue with. Two lanes is enough to hit every kind of document you handle and small enough that nothing on your desk changes while we set up.',
    span: 'Week one',
  },
  {
    number: '02',
    title: 'Import the history',
    body: 'Your last four hundred entries come in as classification history — part numbers, codes, the broker who approved them. This is the step that makes the first proposals feel like your own work instead of a stranger guessing.',
    span: 'Week one',
  },
  {
    number: '03',
    title: 'Run in shadow',
    body: 'For two weeks Portway drafts everything and files nothing. Your entry writers compare its work against theirs, override what is wrong, and every override teaches the classification history. Most desks find the disagreement rate under three percent by the end of it.',
    span: 'Weeks two and three',
  },
  {
    number: '04',
    title: 'Hand the desk over',
    body: 'Your team drives, we watch. Portway drafts, your broker signs, and the exception desk becomes the morning routine. We stay on a shared channel for the first quarter and answer in minutes, not tickets.',
    span: 'Week four onward',
  },
]

export function RolloutPlan() {
  return (
    <section className="bg-[#F5F7F9]">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#0D6E8C]">
            How it goes in
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight">
            Thirty days, and nobody works a weekend for it
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#42566B]">
            Dana ran an entry desk at a forwarder in Tacoma for eleven years and sat through three
            software rollouts that each ate a quarter. This is the rollout she wishes she had been
            given, in the order she would have wanted it.
          </p>
        </div>

        <ol className="mt-14 grid gap-6 md:grid-cols-2">
          {STEPS.map((step) => (
            <li
              key={step.number}
              data-testid="rollout-step"
              className="rounded-3xl border border-[#0B1F33]/10 bg-white p-8 shadow-sm shadow-[#0B1F33]/5"
            >
              <div className="flex items-baseline justify-between gap-4">
                <span className="text-3xl font-semibold tracking-tight text-[#0D6E8C]/35">
                  {step.number}
                </span>
                <span className="rounded-full bg-[#0D6E8C]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0D6E8C]">
                  {step.span}
                </span>
              </div>
              <h3 className="mt-5 text-xl font-semibold tracking-tight">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#42566B]">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
