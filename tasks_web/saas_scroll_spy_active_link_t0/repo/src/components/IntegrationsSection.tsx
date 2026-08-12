const LEDGERS = ['NetSuite', 'Sage Intacct', 'Microsoft Dynamics 365', 'QuickBooks Online', 'Xero']
const SOURCES = ['Chase', 'Silicon Valley Bank', 'Mercury', 'Stripe', 'Brex', 'Ramp', 'Bill.com']

export default function IntegrationsSection() {
  return (
    <section id="integrations" className="scroll-mt-24 bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-700">
            Integrations
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Reads your ledger. Never rewrites it behind your back.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Ledgerloom sits beside the general ledger rather than in front of it. It reads balances
            continuously and writes back only the entries a human has approved, which is the only
            arrangement a controller should accept from a system they did not build.
          </p>
        </div>

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight text-slate-900">
              One connector per entity, not one per spreadsheet
            </h3>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Each legal entity keeps its own chart of accounts, its own calendar and its own posting
              rules. Ledgerloom maps them once during implementation and holds the mapping under
              version control, so an account added in October does not quietly break the November
              consolidation.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2.5">
              {LEDGERS.map((ledger) => (
                <li
                  key={ledger}
                  className="rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-sm font-medium text-slate-700"
                >
                  {ledger}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <svg
              viewBox="0 0 360 220"
              className="w-full"
              role="img"
              aria-label="Diagram: five entity ledgers feeding one Ledgerloom close engine, which returns approved journal entries"
            >
              <defs>
                <linearGradient id="int-core" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0%" stopColor="#4338ca" />
                  <stop offset="100%" stopColor="#312e81" />
                </linearGradient>
              </defs>
              {[24, 68, 112, 156, 200].map((y, index) => (
                <g key={y}>
                  <rect
                    x="4"
                    y={y}
                    width="104"
                    height="30"
                    rx="8"
                    fill="#eef2ff"
                    stroke="#c7d2fe"
                  />
                  <text x="18" y={y + 20} fontSize="11" fill="#3730a3">
                    Entity {index + 1} ledger
                  </text>
                  <path
                    d={`M112 ${y + 15} C 150 ${y + 15}, 160 110, 196 110`}
                    stroke="#a5b4fc"
                    strokeWidth="1.6"
                    fill="none"
                  />
                </g>
              ))}
              <rect x="196" y="80" width="120" height="62" rx="14" fill="url(#int-core)" />
              <text x="216" y="106" fontSize="12" fill="#ffffff" fontWeight="600">
                Ledgerloom
              </text>
              <text x="216" y="124" fontSize="11" fill="#c7d2fe">
                close engine
              </text>
              <path d="M316 111h30" stroke="#f59e0b" strokeWidth="2" />
              <circle cx="350" cy="111" r="6" fill="#f59e0b" />
            </svg>
          </div>
        </div>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:order-1">
            <svg
              viewBox="0 0 360 200"
              className="w-full"
              role="img"
              aria-label="Chart: transactions matched automatically rising from 71 percent to 99 percent over six months"
            >
              <polyline
                points="10,170 68,142 126,118 184,86 242,58 300,30 350,24"
                fill="none"
                stroke="#4338ca"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <polyline
                points="10,170 68,142 126,118 184,86 242,58 300,30 350,24 350,190 10,190"
                fill="#eef2ff"
                stroke="none"
              />
              {[
                [10, 170],
                [126, 118],
                [242, 58],
                [350, 24],
              ].map(([cx, cy]) => (
                <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="4.5" fill="#f59e0b" />
              ))}
              <text x="10" y="188" fontSize="10" fill="#64748b">
                Month one 71% matched
              </text>
              <text x="230" y="188" fontSize="10" fill="#64748b">
                Month six 99% matched
              </text>
            </svg>
          </div>

          <div className="order-1 lg:order-2">
            <h3 className="text-2xl font-semibold tracking-tight text-slate-900">
              Matching rules that get better every period
            </h3>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              The first close on Ledgerloom matches roughly seven transactions in ten. Every
              exception your team resolves teaches the rule set how your business actually moves
              money — the recurring lockbox deposit, the processor that batches on Tuesdays, the
              vendor who nets credits against invoices. By the sixth close, matching sits at
              ninety-nine percent and the queue is short enough to clear before lunch.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2.5">
              {SOURCES.map((source) => (
                <li
                  key={source}
                  className="rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2 text-sm font-medium text-slate-700"
                >
                  {source}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
