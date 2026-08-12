const STEPS = [
  {
    number: '01',
    title: 'Connect the systems you already pay for',
    body:
      'Your CRM, your ledger, your ticketing tool, your identity provider and the warehouse. Stonecrop reads their schemas on connect so later steps can be checked before they run.',
  },
  {
    number: '02',
    title: 'Compose the run book in plain steps',
    body:
      'Drag a step, name it the way your team already says it out loud, and attach the approval, the deadline and the fallback. Branches read like sentences, not like a flowchart nobody edits.',
  },
  {
    number: '03',
    title: 'Dry-run it against last week',
    body:
      'Replay the workflow over real traffic from the past seven days and read the diff of what it would have changed. Most teams find two mistakes here and none in production.',
  },
  {
    number: '04',
    title: 'Ship it behind an approval',
    body:
      'Whoever owns the system being written to signs off once. After that, every version, every change and every run is recorded, and rolling back is a single click.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="border-y border-[#E2DCCE] bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#12766A]">
            How it works
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#0B1F1B] sm:text-4xl">
            From spreadsheet to running workflow in an afternoon
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#4A5C57]">
            Teams that switch usually move their noisiest run book first — the one that wakes
            somebody up — and let the rest follow once people stop being paged for it.
          </p>
        </div>

        <ol className="mt-14 grid gap-6 md:grid-cols-2">
          {STEPS.map((step) => (
            <li
              key={step.number}
              className="rounded-2xl border border-[#E2DCCE] bg-[#FBFAF6] p-7 shadow-sm"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#0B1F1B] text-sm font-semibold text-[#E8A33D]">
                {step.number}
              </span>
              <h3 className="mt-5 text-lg font-semibold tracking-tight text-[#0B1F1B]">
                {step.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[#5C6B66]">{step.body}</p>
            </li>
          ))}
        </ol>

        <p className="mt-12 rounded-2xl border border-[#E2DCCE] bg-[#F2F6F3] px-7 py-6 text-[15px] leading-relaxed text-[#3E524D]">
          Migration help is included on every plan above Starter. A Stonecrop engineer sits with your
          team for two half-days, rebuilds your three heaviest run books alongside you, and leaves the
          fourth for you to do while they watch.
        </p>
      </div>
    </section>
  )
}
