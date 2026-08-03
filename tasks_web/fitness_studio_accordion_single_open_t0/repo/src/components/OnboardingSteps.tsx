const STEPS = [
  {
    n: '01',
    title: 'A coffee and a conversation',
    body: 'Forty minutes at the front bench with a coach. What you have done before, what hurts, what your week really allows. No sales script, no clipboard tour of the machines — we do not own any machines.',
    meta: 'Free · Book any weekday',
  },
  {
    n: '02',
    title: 'The movement screen',
    body: 'Nine positions, a resting heart rate and two carries. It takes half an hour and tells us where to start loading and what to leave alone for six weeks. You get the results written down before you leave.',
    meta: 'Free · Thirty minutes',
  },
  {
    n: '03',
    title: 'Two coached sessions',
    body: 'You train on the floor with a real group at a real hour. Bar work, a warm-up you will keep using, and the first page of your plan. Most people book their third session before they have finished stretching.',
    meta: 'Free · Any timetabled hour',
  },
  {
    n: '04',
    title: 'Pick a programme, start Monday',
    body: 'Choose the block that fits, month to month, cancel with a fortnight of notice. Your coach writes six weeks ahead and reviews it with you at the end of every block over the same coffee you started with.',
    meta: 'From $95 a month',
  },
]

export function OnboardingSteps() {
  return (
    <section id="start" className="bg-[#FBF7F1]">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#8A7F6C]">Getting started</p>
            <h2 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight text-[#123B31]">
              Four steps from the front door to your first squat block
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-[#5C554A]">
            The first three steps cost nothing and we will not ask for a card number to book them.
            Most members take about ten days to get through all four.
          </p>
        </div>

        <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => (
            <li
              key={s.n}
              data-testid="onboarding-step"
              className="relative rounded-3xl border border-[#E2D8C6] bg-white p-7 shadow-sm"
            >
              <span className="text-4xl font-semibold tracking-tight text-[#E8A33D]">{s.n}</span>
              <h3 className="mt-4 text-lg font-semibold tracking-tight text-[#1B1A17]">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#5C554A]">{s.body}</p>
              <p className="mt-6 border-t border-[#EFE6D8] pt-4 text-xs uppercase tracking-wider text-[#2F6B57]">
                {s.meta}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
