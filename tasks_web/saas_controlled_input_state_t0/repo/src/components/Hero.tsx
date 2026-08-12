import { IconArrowRight, IconCheck } from './icons'

const HIGHLIGHTS = [
  'Timeline assembled from your alerts, deploys and Slack threads',
  'Retro doc 80% written before anyone joins the call',
  'Action items with an owner, a date and a nudge',
]

function TimelineArt() {
  return (
    <svg
      viewBox="0 0 420 300"
      role="img"
      aria-label="An incident timeline: alert at 02:14, rollback at 02:31, recovery at 02:52, review closed on day two"
      className="h-auto w-full"
    >
      <defs>
        <linearGradient id="hero-card" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#111C31" />
          <stop offset="100%" stopColor="#0B1220" />
        </linearGradient>
        <linearGradient id="hero-line" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#F97316" />
          <stop offset="55%" stopColor="#FB7185" />
          <stop offset="100%" stopColor="#2DD4BF" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="420" height="300" rx="20" fill="url(#hero-card)" />
      <rect x="0.5" y="0.5" width="419" height="299" rx="19.5" fill="none" stroke="#FFFFFF" strokeOpacity="0.12" />
      <text x="26" y="40" fill="#94A3B8" fontSize="12" letterSpacing="1.6">
        INC-2291 · CHECKOUT LATENCY
      </text>
      <text x="26" y="66" fill="#F8FAFC" fontSize="19" fontWeight="600">
        Sev-2 · resolved in 38 minutes
      </text>
      <path d="M40 108h340" stroke="url(#hero-line)" strokeWidth="3" strokeLinecap="round" />
      {[
        { x: 40, t: '02:14', l: 'Alert' },
        { x: 153, t: '02:31', l: 'Rollback' },
        { x: 266, t: '02:52', l: 'Recovered' },
        { x: 379, t: 'Day 2', l: 'Reviewed' },
      ].map((p) => (
        <g key={p.t}>
          <circle cx={p.x} cy="108" r="7" fill="#0B1220" stroke="#F8FAFC" strokeWidth="2.5" />
          <text x={p.x} y="136" fill="#F8FAFC" fontSize="12" fontWeight="600" textAnchor="middle">
            {p.t}
          </text>
          <text x={p.x} y="153" fill="#94A3B8" fontSize="11" textAnchor="middle">
            {p.l}
          </text>
        </g>
      ))}
      <rect x="26" y="178" width="368" height="42" rx="10" fill="#FFFFFF" fillOpacity="0.05" />
      <circle cx="48" cy="199" r="9" fill="#F97316" fillOpacity="0.25" />
      <path d="m43 199 4 4 7-8" stroke="#F97316" strokeWidth="2.2" fill="none" strokeLinecap="round" />
      <text x="68" y="196" fill="#E2E8F0" fontSize="12.5">
        Add a canary gate to the checkout deploy
      </text>
      <text x="68" y="212" fill="#64748B" fontSize="11">
        Owner: platform · due 14 Feb
      </text>
      <rect x="26" y="232" width="368" height="42" rx="10" fill="#FFFFFF" fillOpacity="0.05" />
      <circle cx="48" cy="253" r="9" fill="#2DD4BF" fillOpacity="0.22" />
      <path d="M48 248v10M43 253h10" stroke="#2DD4BF" strokeWidth="2.2" strokeLinecap="round" />
      <text x="68" y="250" fill="#E2E8F0" fontSize="12.5">
        Alert on p95 checkout latency, not p50
      </text>
      <text x="68" y="266" fill="#64748B" fontSize="11">
        Owner: payments · due 21 Feb
      </text>
    </svg>
  )
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[#0B1220] text-white">
      <div className="pointer-events-none absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-orange-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-24 h-[420px] w-[420px] rounded-full bg-teal-400/10 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 pb-24 pt-20 lg:grid-cols-[1.05fr_1fr] lg:pb-28 lg:pt-24">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-orange-300">
            Incident review, on rails
          </p>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            Postlude turns the worst hour of your quarter into the best hour of learning.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
            Your team already fought the outage in Slack, in PagerDuty and in the deploy log. Postlude collects
            every one of those fragments into a single reviewable timeline, writes the first draft of the
            post-mortem while the pager is still warm, and then keeps chasing the follow-ups until each one
            actually ships. No spreadsheet, no forgotten retro doc, no repeat incident three weeks later.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#setup"
              data-testid="hero-primary-cta"
              className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-[#0B1220] shadow-lg shadow-orange-500/25 transition hover:bg-orange-400"
            >
              Set up your workspace
              <IconArrowRight />
            </a>
            <a
              href="#workflow"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
            >
              See how a review runs
            </a>
          </div>
          <ul className="mt-10 space-y-2.5">
            {HIGHLIGHTS.map((line) => (
              <li key={line} className="flex items-start gap-2.5 text-sm text-slate-300">
                <span className="mt-0.5 text-teal-300">
                  <IconCheck />
                </span>
                {line}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-4 shadow-2xl shadow-black/40">
            <TimelineArt />
          </div>
          <p className="mt-4 text-center text-xs text-slate-500">
            A live review from Northwind Freight, shared with permission.
          </p>
        </div>
      </div>
    </section>
  )
}
