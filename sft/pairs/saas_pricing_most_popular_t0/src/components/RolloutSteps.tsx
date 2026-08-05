const STEPS = [
  {
    week: 'Day 1',
    title: 'We import your history',
    body: 'Send us a customer export, a price book and last season of job history in whatever shape it is in — CSV, a QuickBooks dump, or a folder of spreadsheets. Copperline loads it and shows you the addresses, equipment and agreements it found so you can spot anything missing.',
  },
  {
    week: 'Day 2–4',
    title: 'We map your job types',
    body: 'An onboarding lead who used to dispatch sits down with your dispatcher and builds the board you actually run: job types, arrival windows, truck list, skills, van bins, and the agreement tiers you sell. Nothing is a template you have to fight.',
  },
  {
    week: 'Week 2',
    title: 'You run a shadow week',
    body: 'Your dispatcher runs Copperline alongside the whiteboard for five days. Techs use the app on real calls, you compare the numbers at the end of each day, and we fix whatever pinches before it matters.',
  },
  {
    week: 'Week 3',
    title: 'You go live, whiteboard down',
    body: 'The board becomes the system of record. Invoicing and payments switch on, the old scheduler goes read-only, and your onboarding lead stays on the phone through your first full week — including the Saturday.',
  },
]

export default function RolloutSteps() {
  return (
    <section id="rollout" className="border-b border-[#EADFCF] bg-[#FBF6EE]">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#C25A2B]">Getting started</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-[2.7rem]">
            Switched over in three weeks, in the middle of a season
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#3D555F]">
            Nobody replaces their dispatch system in January because they are bored. Shops move when the old one breaks
            in the middle of a heat wave, so the rollout is built to happen while you are still taking calls.
          </p>
        </div>

        <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, index) => (
            <li
              key={step.title}
              data-testid="rollout-step"
              className="relative rounded-2xl border border-[#EADFCF] bg-white p-7 shadow-sm"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#12242C] text-sm font-bold text-white">
                {index + 1}
              </span>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-[#0E6A66]">{step.week}</p>
              <h3 className="mt-2 text-lg font-semibold tracking-tight">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#3D555F]">{step.body}</p>
            </li>
          ))}
        </ol>

        <p className="mt-10 rounded-2xl border border-[#EADFCF] bg-white p-6 text-sm leading-relaxed text-[#3D555F]">
          Onboarding is included on every plan. There is no implementation fee, no minimum term, and if you decide it is
          not for you, we export everything back to you as CSV within one business day.
        </p>
      </div>
    </section>
  )
}
