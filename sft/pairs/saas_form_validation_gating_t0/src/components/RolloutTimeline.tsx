const STEPS = [
  {
    week: 'Week 1',
    title: 'We take your data as it is',
    copy: 'Send us the customer list, the equipment records and the open agreements in whatever shape they are in — a QuickBooks export, three spreadsheets, a competitor backup file. Our migration team maps it and sends back a sample for you to argue with.',
  },
  {
    week: 'Week 2',
    title: 'Your price book, not a generic one',
    copy: 'We load your flat-rate tasks, your labor rates by department and your supply-house catalogs. If you have never had a price book, we start you on the trade standard and you edit from there instead of from a blank page.',
  },
  {
    week: 'Week 3',
    title: 'Dispatchers train on live calls',
    copy: 'Two half-day sessions with your actual board, your actual technicians and a Rivetwork implementation lead sitting next to your dispatcher. No sandbox data, no slide deck.',
  },
  {
    week: 'Week 4',
    title: 'Go live on a Monday, not a Friday',
    copy: 'Your implementation lead is on the phone from the 6am huddle through the last call, and stays assigned to your account for the first ninety days. The old system stays readable for a year.',
  },
]

export default function RolloutTimeline() {
  return (
    <section data-testid="rollout-timeline" className="bg-[#F6F7FB]">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-28">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#1F4FD8]">
            Rollout
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-[#0A1220] sm:text-4xl">
            Four weeks from signature to your first live Monday
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#5B6577]">
            Every shop owner we talk to has been burned by an eleven-month implementation.
            Ours is scoped in weeks, run by a named person, and it does not bill you until
            the board goes live.
          </p>
        </div>

        <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, index) => (
            <li
              key={step.week}
              className="relative rounded-2xl border border-[#E4E8F2] bg-white p-7 shadow-[0_1px_2px_rgba(10,18,32,0.04)]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0A1220] text-base font-black text-white">
                {index + 1}
              </span>
              <p className="mt-5 text-xs font-bold uppercase tracking-[0.14em] text-[#FF9F1C]">
                {step.week}
              </p>
              <h3 className="mt-2 text-lg font-black leading-snug tracking-tight text-[#0A1220]">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#5B6577]">{step.copy}</p>
            </li>
          ))}
        </ol>

        <p className="mt-10 rounded-2xl border border-[#D9E1F6] bg-[#EDF1FD] p-6 text-sm font-medium leading-relaxed text-[#22304F]">
          Migration, price-book loading and training are included in every plan. There is
          no separate implementation invoice, and there is no per-seat charge for the
          office staff who only ever look at reports.
        </p>
      </div>
    </section>
  )
}
