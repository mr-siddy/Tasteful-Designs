const TOOLS = [
  { code: 'QB', name: 'QuickBooks Online', note: 'Invoices, payments and customers, synced nightly' },
  { code: 'XR', name: 'Xero', note: 'Two-way sync on chart of accounts and tax codes' },
  { code: 'ST', name: 'Stripe', note: 'Card and ACH taken in the driveway, fees reconciled' },
  { code: 'TW', name: 'Twilio', note: 'Arrival-window texts from your own shop number' },
  { code: 'GC', name: 'Google Calendar', note: 'Read-only mirror of each tech’s day for the family' },
  { code: 'SL', name: 'Slack', note: 'Emergency calls and callbacks posted to #dispatch' },
  { code: 'GS', name: 'Gusto', note: 'Clocked hours and overtime pushed straight to payroll' },
  { code: 'CS', name: 'CSV & API', note: 'A documented REST API and a nightly export you own' },
]

export default function Integrations() {
  return (
    <section id="integrations" data-testid="integrations" className="border-y border-slate-800 bg-slate-900/60 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">Connections</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            It talks to the tools your office already runs on
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-400">
            Nobody is switching accountants because they switched dispatch software. Taskflow writes
            into the books you already keep, and every connection is set up by our team during
            onboarding rather than left to you and a help article.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TOOLS.map((tool) => (
            <div
              key={tool.name}
              data-testid="integration-card"
              className="flex gap-4 rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
            >
              <svg viewBox="0 0 40 40" className="h-10 w-10 shrink-0" role="img" aria-label={`${tool.name} logo`}>
                <rect x="1" y="1" width="38" height="38" rx="12" fill="#0f172a" stroke="#22d3ee" strokeOpacity="0.35" strokeWidth="1.4" />
                <text
                  x="20"
                  y="25"
                  textAnchor="middle"
                  fontSize="13"
                  fontWeight="700"
                  fill="#67e8f9"
                  fontFamily="ui-sans-serif, system-ui, sans-serif"
                >
                  {tool.code}
                </text>
              </svg>
              <div>
                <h3 className="text-sm font-semibold text-white">{tool.name}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-400">{tool.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
