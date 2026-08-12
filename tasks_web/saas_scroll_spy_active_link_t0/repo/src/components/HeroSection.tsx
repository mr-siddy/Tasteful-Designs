export default function HeroSection() {
  return (
    <section
      id="overview"
      className="relative overflow-hidden bg-gradient-to-br from-indigo-950 via-indigo-900 to-slate-900"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-32 h-[28rem] w-[28rem] rounded-full bg-indigo-500/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 left-1/4 h-80 w-80 rounded-full bg-amber-400/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:py-28">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-indigo-400/40 bg-indigo-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-indigo-200">
            Multi-entity close management
          </p>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Close the books in four days, not fourteen.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-indigo-100">
            Ledgerloom runs the month-end close for finance teams carrying more than one legal
            entity. Reconciliations, intercompany eliminations, journal approvals and the evidence
            your auditors ask for all live in one system, tied out to the general ledger and
            timestamped as the work happens.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#demo"
              className="rounded-xl bg-amber-400 px-6 py-3 text-base font-semibold text-slate-900 shadow-lg shadow-amber-500/20 transition-colors hover:bg-amber-300"
            >
              Book a 30-minute demo
            </a>
            <a
              href="#workflow"
              className="rounded-xl border border-indigo-300/40 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              See the close workflow
            </a>
          </div>

          <p className="mt-6 text-sm text-indigo-300">
            Implementation runs three weeks and is led by a controller, not a sales engineer. Your
            first close on Ledgerloom is side by side with your existing checklist.
          </p>
        </div>

        <div className="relative">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur">
            <div className="rounded-2xl bg-white p-6">
              <div className="flex items-baseline justify-between">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                  March close — day 3 of 4
                </h2>
                <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                  On track
                </span>
              </div>

              <svg
                viewBox="0 0 320 190"
                className="mt-5 w-full"
                role="img"
                aria-label="Close progress by entity: Verdant Grocers 96 percent, Halcyon Robotics 88 percent, Tidewater Health 74 percent, Cobalt Logistics 61 percent"
              >
                <defs>
                  <linearGradient id="hero-bar" x1="0" x2="1" y1="0" y2="0">
                    <stop offset="0%" stopColor="#4338ca" />
                    <stop offset="100%" stopColor="#818cf8" />
                  </linearGradient>
                </defs>
                {[
                  { label: 'Verdant Grocers', value: 96, y: 8 },
                  { label: 'Halcyon Robotics', value: 88, y: 52 },
                  { label: 'Tidewater Health', value: 74, y: 96 },
                  { label: 'Cobalt Logistics', value: 61, y: 140 },
                ].map((row) => (
                  <g key={row.label}>
                    <text x="0" y={row.y + 10} fontSize="11" fill="#475569">
                      {row.label}
                    </text>
                    <rect x="0" y={row.y + 18} width="320" height="10" rx="5" fill="#e2e8f0" />
                    <rect
                      x="0"
                      y={row.y + 18}
                      width={(row.value / 100) * 320}
                      height="10"
                      rx="5"
                      fill="url(#hero-bar)"
                    />
                    <text x="290" y={row.y + 10} fontSize="11" fill="#4338ca" fontWeight="600">
                      {row.value}%
                    </text>
                  </g>
                ))}
              </svg>

              <dl className="mt-6 grid grid-cols-3 gap-3 border-t border-slate-100 pt-5">
                <div>
                  <dt className="text-xs text-slate-500">Open items</dt>
                  <dd className="text-xl font-semibold text-slate-900">14</dd>
                </div>
                <div>
                  <dt className="text-xs text-slate-500">Auto-tied</dt>
                  <dd className="text-xl font-semibold text-slate-900">99.4%</dd>
                </div>
                <div>
                  <dt className="text-xs text-slate-500">Awaiting review</dt>
                  <dd className="text-xl font-semibold text-slate-900">3</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
