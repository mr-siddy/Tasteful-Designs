const CLOCKS = [
  { filing: 'ISF-10', shipment: 'MSKU 704 118 2', due: '4h 12m', tone: '#F2A03D' },
  { filing: 'CBP 7501', shipment: 'OOLU 219 550 7', due: '1d 06h', tone: '#5AC8D8' },
  { filing: 'Commercial invoice', shipment: 'TCNU 883 041 9', due: '2d 19h', tone: '#7FD4A2' },
]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[#0B1F33] text-[#E7EEF4]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(13,110,140,0.55),transparent_58%),radial-gradient(ellipse_at_bottom_left,rgba(242,160,61,0.22),transparent_52%)]"
      />
      <div className="relative mx-auto grid max-w-6xl gap-14 px-5 py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-28">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-[#5AC8D8]/40 bg-[#5AC8D8]/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#9BDCE7]">
            Ocean freight · customs
          </p>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]">
            Portway files the customs paperwork before the ship does
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#B6C6D4]">
            Your ISF is due twenty-four hours before the box is loaded in Ningbo, the entry summary
            ten working days after arrival, and right now both of those deadlines live in somebody's
            inbox next to a scanned packing list. Portway reads the documents as they land, proposes
            the classification with the ruling behind it, and counts every clock down against the
            vessel's actual ETD — so the filing is ready days early instead of at 11pm on a Sunday.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#walkthrough"
              data-testid="hero-cta-primary"
              className="rounded-full bg-[#F2A03D] px-7 py-3.5 text-sm font-semibold text-[#0B1F33] shadow-lg shadow-black/25 transition-colors hover:bg-[#FFB865]"
            >
              Book a walkthrough
            </a>
            <a
              href="#timeline"
              data-testid="hero-cta-secondary"
              className="rounded-full border border-[#E7EEF4]/25 px-7 py-3.5 text-sm font-semibold text-[#E7EEF4] transition-colors hover:border-[#5AC8D8] hover:text-[#9BDCE7]"
            >
              See a shipment end to end
            </a>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-[#E7EEF4]/15 pt-8">
            {[
              { value: '9 min', label: 'Median time from invoice to draft entry' },
              { value: '0.4%', label: 'Post-summary corrections across 2025' },
              { value: '61', label: 'Forwarders filing on Portway today' },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="text-2xl font-semibold text-[#F2A03D]">{stat.value}</dt>
                <dd className="mt-1.5 text-xs leading-relaxed text-[#93A7B8]">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="rounded-3xl border border-[#E7EEF4]/12 bg-[#122C45]/85 p-6 shadow-2xl shadow-black/40">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-[#E7EEF4]">Clocks running</p>
              <span className="rounded-full bg-[#7FD4A2]/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#7FD4A2]">
                Live
              </span>
            </div>

            <ul className="mt-5 space-y-3">
              {CLOCKS.map((clock) => (
                <li
                  key={clock.filing}
                  data-testid="hero-clock"
                  className="rounded-2xl border border-[#E7EEF4]/10 bg-[#0B1F33]/70 p-4"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="text-sm font-semibold text-[#E7EEF4]">{clock.filing}</span>
                    <span className="text-sm font-semibold" style={{ color: clock.tone }}>
                      {clock.due}
                    </span>
                  </div>
                  <p className="mt-1 font-mono text-[11px] tracking-tight text-[#93A7B8]">
                    {clock.shipment}
                  </p>
                  <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#E7EEF4]/10">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: clock.filing === 'ISF-10' ? '84%' : clock.filing === 'CBP 7501' ? '46%' : '22%',
                        background: clock.tone,
                      }}
                    />
                  </div>
                </li>
              ))}
            </ul>

            <svg viewBox="0 0 320 96" role="img" aria-label="Filings cleared per week, trending up over eight weeks" className="mt-6 w-full">
              <defs>
                <linearGradient id="hero-spark" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#5AC8D8" stopOpacity="0.55" />
                  <stop offset="100%" stopColor="#5AC8D8" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M4 78 L44 70 L84 74 L124 56 L164 48 L204 52 L244 30 L284 22 L316 14 L316 92 L4 92 Z"
                fill="url(#hero-spark)"
              />
              <path
                d="M4 78 L44 70 L84 74 L124 56 L164 48 L204 52 L244 30 L284 22 L316 14"
                fill="none"
                stroke="#5AC8D8"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="316" cy="14" r="4" fill="#F2A03D" />
            </svg>
            <p className="mt-3 text-xs leading-relaxed text-[#93A7B8]">
              Filings cleared per week at Halverson Freight Group, January through March.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
