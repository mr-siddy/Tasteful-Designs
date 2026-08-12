const STEPS = [
  {
    week: 'Week one',
    title: 'We read your last four reports',
    body:
      'Send the last four monthly operating reports and your monitoring schedule. We rebuild them inside Weirline and hand you both copies side by side, so the first thing you see is your own month, reproduced exactly.',
  },
  {
    week: 'Week two',
    title: 'Sites, schedules and people',
    body:
      'Every sampling site, its code, its window and its collector goes in once. Operator licences, certification numbers and renewal dates go in with them, and the calendar for the rest of the year builds itself from that.',
  },
  {
    week: 'Week three',
    title: 'The historian and the lab',
    body:
      'We wire the nightly SCADA pull and ask your lab to point its electronic deliverable at your Weirline address. Both are read-only connections; nothing Weirline does can write back to your control system.',
  },
  {
    week: 'Week four',
    title: 'You file the month from Weirline',
    body:
      'The first live report goes out with one of our people on the phone if you want them there. After that the fourth week is just the fourth week, and most systems stop opening the spreadsheet entirely.',
  },
]

export function RolloutSteps() {
  return (
    <section id="rollout" className="bg-[#08312F] text-[#F1E9DC]" aria-labelledby="rollout-heading">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-[13px] font-semibold uppercase tracking-[0.22em] text-[#7FE3D6]">
            Rollout
          </p>
          <h2 id="rollout-heading" className="mt-4 text-4xl font-semibold tracking-tight text-white lg:text-[42px]">
            Four weeks, and nobody takes a week off to do it
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-[#F1E9DC]/75">
            Onboarding is done by people who have held an operator licence. It is scheduled around
            your sampling week, not ours, and it costs nothing.
          </p>
        </div>

        <ol className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <li
              key={s.title}
              data-testid="rollout-step"
              className="rounded-2xl bg-white/5 p-7 ring-1 ring-white/10"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#17A398] text-[17px] font-semibold text-[#04211F]">
                {i + 1}
              </span>
              <p className="mt-5 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#7FE3D6]">
                {s.week}
              </p>
              <h3 className="mt-2 text-[19px] font-semibold tracking-tight text-white">{s.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[#F1E9DC]/70">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
