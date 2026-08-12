const STEPS = [
  {
    week: 'Day one',
    title: 'The $25 intro session',
    body: 'Forty-five minutes with Imogen or Dara. We measure five ranges, watch you move on a light spring, and ask what you want to be able to do in a year. You leave with a plan card and the two classes we think you should start in — often not the ones you expected.',
  },
  {
    week: 'Week one',
    title: 'Two classes, both Foundations',
    body: 'You come twice. The same instructor takes both so nothing has to be explained a second time, and we deliberately keep the load boring. If anything from the intro measurements flagged, this is the week we work around it rather than through it.',
  },
  {
    week: 'Weeks two to five',
    title: 'Find the rhythm that survives your week',
    body: 'Three sessions a week is the sweet spot for most people, but two you can actually keep beats three you resent. We watch your booking pattern and, if you keep cancelling the 6:15am, we will say so and help you move it rather than let you quietly drift off the books.',
  },
  {
    week: 'Week eight',
    title: 'Re-measure and rewrite the plan',
    body: 'The same five ranges, the same spring loads, written next to the originals on the same card. Then we decide together what changes — Flow 2, Slow Strength, a mobility block, or another eight weeks of exactly what you have been doing because it is working.',
  },
]

export function FirstMonthPath() {
  return (
    <section id="start" className="bg-[#F7F1E6]">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#C2571F]">
            Your first eight weeks
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            What actually happens after you book
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#4A4436]">
            No contract, no joining fee, and nothing that renews without you clicking something. The
            path below is the same for a twenty-six-year-old cyclist and a seventy-year-old who has
            not exercised since school.
          </p>
        </div>
        <ol className="mt-14 grid gap-6 md:grid-cols-2">
          {STEPS.map((step, index) => (
            <li
              key={step.title}
              className="rounded-3xl border border-[#E3D6BE] bg-[#FFFCF5] p-7 shadow-sm"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#24493B] text-base font-semibold text-[#F7F1E6]">
                  {index + 1}
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C2571F]">
                  {step.week}
                </span>
              </div>
              <h3 className="mt-5 text-xl font-semibold tracking-tight">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#4A4436]">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
