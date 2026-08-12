const CONTROLS = [
  {
    title: 'Segregation of duties, enforced',
    body: 'A preparer cannot approve their own entry, and the system will not let an administrator quietly grant themselves both roles. Role changes are themselves logged and reviewable.',
  },
  {
    title: 'An immutable close record',
    body: 'Every balance, comment, attachment and approval is written once and never edited in place. Corrections are new events with a reason attached, which is exactly what a control tester wants to see.',
  },
  {
    title: 'Evidence packaged for the auditor',
    body: 'Export a period as a structured package — reconciliations, statements, approvals and the flux commentary — organised by account and cycle instead of by whoever happened to save the file.',
  },
  {
    title: 'Access your IT team recognises',
    body: 'SAML single sign-on, SCIM provisioning, enforced multi-factor authentication and per-entity permissions, so a regional accountant sees their entity and nothing else.',
  },
]

export default function ControlsSection() {
  return (
    <section id="controls" className="scroll-mt-24 bg-indigo-950 py-24 text-white">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">Controls</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Controls your auditors can test themselves
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-indigo-100">
            Speed is worth nothing if the close cannot survive a walkthrough. Ledgerloom was built
            with a former audit senior on the team, and every acceleration in the product has a
            control behind it that a tester can sample without asking your staff for a favour.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-indigo-400/40 bg-indigo-900/60 px-4 py-2 text-sm font-medium text-indigo-100">
              SOC 2 Type II
            </span>
            <span className="rounded-full border border-indigo-400/40 bg-indigo-900/60 px-4 py-2 text-sm font-medium text-indigo-100">
              ISO 27001
            </span>
            <span className="rounded-full border border-indigo-400/40 bg-indigo-900/60 px-4 py-2 text-sm font-medium text-indigo-100">
              US and EU data residency
            </span>
          </div>

          <svg
            viewBox="0 0 240 130"
            className="mt-10 w-64"
            role="img"
            aria-label="Shield over a stack of ledger lines, marking a signed and locked close"
          >
            <path
              d="M60 12l42 16v34c0 24-18 36-42 42-24-6-42-18-42-42V28z"
              fill="#312e81"
              stroke="#818cf8"
              strokeWidth="2"
            />
            <path
              d="M44 60l12 12 22-26"
              fill="none"
              stroke="#f59e0b"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {[20, 44, 68, 92].map((y) => (
              <rect
                key={y}
                x="126"
                y={y}
                width={y === 92 ? 60 : 104}
                height="10"
                rx="5"
                fill="#4338ca"
              />
            ))}
          </svg>
        </div>

        <dl className="grid gap-5 sm:grid-cols-2">
          {CONTROLS.map((control) => (
            <div
              key={control.title}
              className="rounded-2xl border border-indigo-800 bg-indigo-900/50 p-6"
            >
              <dt className="text-lg font-semibold tracking-tight text-white">{control.title}</dt>
              <dd className="mt-3 text-sm leading-relaxed text-indigo-200">{control.body}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
