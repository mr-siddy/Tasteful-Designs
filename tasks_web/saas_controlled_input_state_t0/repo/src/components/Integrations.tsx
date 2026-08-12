import { IntegrationGlyph } from './icons'

const TOOLS = [
  { name: 'Slack', note: 'Declare, pin and close from the channel', glyph: 0 },
  { name: 'PagerDuty', note: 'Pages and acknowledgements on the timeline', glyph: 1 },
  { name: 'Opsgenie', note: 'Rotation and escalation history', glyph: 2 },
  { name: 'Datadog', note: 'Monitor transitions with the graph snapshot', glyph: 3 },
  { name: 'Grafana', note: 'Panel links pinned at the right minute', glyph: 4 },
  { name: 'GitHub', note: 'Deploys, reverts and the linked PR', glyph: 5 },
  { name: 'Linear', note: 'Two-way sync for every action item', glyph: 6 },
  { name: 'Jira', note: 'Remediation tickets in your existing project', glyph: 7 },
]

export function Integrations() {
  return (
    <section id="integrations" className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-600">Connected</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#0B1220] sm:text-4xl">
              It plugs into the tools that were already on fire
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
              Nothing here asks your team to change how they run an incident. Postlude reads what those systems
              already emit, and writes back only where you ask it to.
            </p>
          </div>
          <p className="text-sm text-slate-500">Setup takes one OAuth grant per tool.</p>
        </div>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TOOLS.map((t) => (
            <li
              key={t.name}
              data-testid="integration-card"
              className="flex items-start gap-3.5 rounded-2xl border border-slate-200 bg-white p-5"
            >
              <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                <IntegrationGlyph shape={t.glyph} />
              </span>
              <span>
                <span className="block text-sm font-semibold text-[#0B1220]">{t.name}</span>
                <span className="mt-1 block text-xs leading-relaxed text-slate-600">{t.note}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
