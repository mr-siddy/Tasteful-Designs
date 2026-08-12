type Capability = {
  title: string
  body: string
  icon: JSX.Element
}

const CAPABILITIES: Capability[] = [
  {
    title: 'Reconciliation workspace',
    body: 'Bank, card and subledger balances land overnight and are matched against the trial balance line by line. What is left over is the only thing your team looks at, with the variance, the supporting document and last month’s explanation stacked in one pane.',
    icon: (
      <path d="M4 7h16M4 12h10M4 17h13" strokeLinecap="round" />
    ),
  },
  {
    title: 'Intercompany eliminations',
    body: 'Due-to and due-from balances are netted across every entity pair, the elimination entry is drafted for you, and any pair that disagrees by more than your tolerance is raised before it reaches consolidation instead of after.',
    icon: (
      <path d="M7 8a3 3 0 100 8M17 8a3 3 0 110 8M10 12h4" strokeLinecap="round" />
    ),
  },
  {
    title: 'Close checklist',
    body: 'Every task carries an owner, a business day, a dependency and a status that updates itself when the underlying work is done. The controller sees the critical path; the staff accountant sees the four things due today.',
    icon: (
      <path d="M5 7l2 2 4-4M5 15l2 2 4-4M14 8h5M14 16h5" strokeLinecap="round" />
    ),
  },
  {
    title: 'Journal entry approvals',
    body: 'Entries are prepared, reviewed and posted inside the same thread, with the preparer and reviewer recorded separately so segregation of duties is a property of the system rather than a policy in a binder.',
    icon: (
      <path d="M5 5h14v14H5zM9 12l2 2 4-5" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: 'Flux analysis',
    body: 'Month-over-month and budget-to-actual movement is calculated the moment the ledger closes, every swing past your threshold is flagged, and the commentary you write is kept with the number it explains.',
    icon: (
      <path d="M4 17l5-6 4 3 7-8" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: 'Audit evidence room',
    body: 'Statements, screenshots, approvals and the full change history of every balance are indexed by account and period, so an auditor request that used to take a week of digging is answered with a link.',
    icon: (
      <path d="M12 4l7 3v6c0 4-3 6-7 7-4-1-7-3-7-7V7z" strokeLinejoin="round" />
    ),
  },
]

export default function PlatformSection() {
  return (
    <section id="platform" className="scroll-mt-24 bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-700">Platform</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Everything the close touches, in one system of record
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            A close spread across a shared drive, six reconciliation workbooks and a Slack thread is
            not a process — it is a memory test. Ledgerloom replaces that with six connected surfaces
            your team already knows how to use.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map((capability) => (
            <article
              key={capability.title}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700">
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  aria-hidden="true"
                >
                  {capability.icon}
                </svg>
              </span>
              <h3 className="mt-5 text-lg font-semibold tracking-tight text-slate-900">
                {capability.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{capability.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
