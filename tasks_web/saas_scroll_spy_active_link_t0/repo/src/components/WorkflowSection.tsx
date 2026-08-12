const STAGES = [
  {
    day: 'Day 0',
    title: 'Cutoff and capture',
    body: 'The moment your period closes in the ERP, Ledgerloom pulls the trial balance for every entity, snapshots the subledgers and freezes the opening position. Nobody has to remember to export anything.',
    detail: 'Runs at 11:59pm in each entity’s own time zone.',
  },
  {
    day: 'Day 1',
    title: 'Reconcile',
    body: 'Bank feeds, card statements and payment processors are matched against the ledger automatically. Your team is handed the exceptions — the eleven transactions that did not match — instead of six thousand that did.',
    detail: 'Median exception queue on day one: 34 items across 12 entities.',
  },
  {
    day: 'Day 2',
    title: 'Eliminate and consolidate',
    body: 'Intercompany pairs are netted, elimination entries are drafted against your mapping, and foreign currency translation runs at the rates you have approved rather than whatever a spreadsheet last cached.',
    detail: 'Supports 34 currencies and unlimited entity tiers.',
  },
  {
    day: 'Day 3',
    title: 'Review and explain',
    body: 'Flux analysis surfaces every movement past your threshold, routes it to the person who owns that account, and keeps the commentary attached to the number so next month’s review starts where this one ended.',
    detail: 'Reviewers see only what changed since they last signed off.',
  },
  {
    day: 'Day 4',
    title: 'Sign off and file',
    body: 'The controller signs the close, the package is locked, and every reconciliation, approval and supporting document is filed into the evidence room in the structure your auditors requested last year.',
    detail: 'Sign-off is a single, timestamped, non-reversible event.',
  },
]

export default function WorkflowSection() {
  return (
    <section id="workflow" className="scroll-mt-24 bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-700">Workflow</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Five stages, four business days, no surprises on day nine
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            The close does not get faster because people work later. It gets faster because the
            sequence is explicit, the handoffs are automatic and the exceptions arrive early enough
            to fix. This is the shape of a Ledgerloom close.
          </p>
        </div>

        <ol className="mt-14 space-y-5">
          {STAGES.map((stage, index) => (
            <li
              key={stage.title}
              className="grid gap-5 rounded-2xl border border-slate-200 bg-slate-50/70 p-7 md:grid-cols-[auto_1fr_16rem] md:items-start"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-700 text-lg font-semibold text-white">
                {index + 1}
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-amber-600">
                  {stage.day}
                </p>
                <h3 className="mt-1.5 text-xl font-semibold tracking-tight text-slate-900">
                  {stage.title}
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-600">
                  {stage.body}
                </p>
              </div>
              <p className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm leading-relaxed text-slate-500">
                {stage.detail}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
