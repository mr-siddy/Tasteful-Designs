const STEPS = [
  {
    week: 'Week 1',
    title: 'We read your spreadsheets',
    body:
      'Send us whatever you have — the master unit workbook, the waitlist, last year’s monitoring file. An implementation lead maps the columns and comes back with a list of the eleven questions your data raises. There is always a list.',
  },
  {
    week: 'Week 2',
    title: 'Portfolio import and a first look',
    body:
      'Units, households, leases and affordability terms land in a private workspace. You walk through it with us building by building and correct the things that are wrong, which is faster than describing them.',
  },
  {
    week: 'Week 3',
    title: 'Your policies, encoded',
    body:
      'Preference weighting, recertification windows, inspection templates, resale formula. We configure them together on a call and you approve the wording of every automatic message that goes to a household.',
  },
  {
    week: 'Week 4',
    title: 'Staff training, two hours',
    body:
      'One session for the whole team, recorded for the person who is on leave. Housing managers do their real work in the system during the session — no sample data, no imaginary tenants named after fruit.',
  },
  {
    week: 'Week 5',
    title: 'Go live, and the first export',
    body:
      'You run your next funder report out of Rooftree with an implementation lead on the call. Most organisations are done in under an hour, and that hour is the one that convinces the board.',
  },
]

export default function RolloutSteps() {
  return (
    <section id="rollout" className="border-b border-[#DDE3F0] bg-[#F4F6FB]">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0E8F6F]">Getting started</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Five weeks from spreadsheets to a live register</h2>
          <p className="mt-5 text-lg leading-relaxed text-[#4B5670]">
            Implementation is included, done by people who have migrated housing portfolios before, and priced at zero
            because a half-finished migration helps neither of us.
          </p>
        </div>

        <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {STEPS.map((step, position) => (
            <li
              key={step.week}
              data-testid="rollout-step"
              className="relative rounded-2xl border border-[#DDE3F0] bg-white p-6 shadow-sm"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#131A2A] text-sm font-bold text-white">
                {position + 1}
              </span>
              <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#3D4EE0]">{step.week}</p>
              <h3 className="mt-2 text-base font-semibold leading-snug tracking-tight">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#4B5670]">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
