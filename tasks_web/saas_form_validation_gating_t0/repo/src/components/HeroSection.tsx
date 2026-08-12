const BOARD_COLUMNS = [
  {
    title: 'Unassigned',
    tone: '#FF9F1C',
    cards: [
      { job: 'No cooling — 4 rooftop units', site: 'Weatherly Middle School' },
      { job: 'Condensate leak over server rack', site: 'Halvorsen Data Center' },
    ],
  },
  {
    title: 'Dispatched',
    tone: '#1F4FD8',
    cards: [
      { job: 'Quarterly PM — chiller loop', site: 'Bramble Creek Apartments' },
      { job: 'Reheat coil replacement', site: 'Northgate Surgical' },
    ],
  },
  {
    title: 'On site',
    tone: '#12B76A',
    cards: [{ job: 'Compressor swap, R-454B retrofit', site: 'Fairlane Cold Storage' }],
  },
]

export default function HeroSection() {
  return (
    <section
      id="top"
      data-testid="hero"
      className="relative overflow-hidden bg-[linear-gradient(155deg,#0A1220_0%,#132A56_58%,#1F4FD8_130%)] text-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,159,28,0.35),transparent_65%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-52 -left-32 h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle_at_center,rgba(31,79,216,0.55),transparent_68%)]"
      />

      <div className="relative mx-auto grid w-full max-w-6xl gap-14 px-6 py-20 sm:py-28 lg:grid-cols-[1.05fr_1fr] lg:items-center">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#FFD9A0]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF9F1C]" aria-hidden="true" />
            Built for mechanical contractors
          </p>

          <h1 className="text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Your dispatch board should not live on a whiteboard and a group text.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#C6D2EA]">
            Rivetwork gives HVAC, plumbing and refrigeration shops one live board for
            every call, one work order that carries photos and meter readings all the
            way to the invoice, and a truck-side app that keeps working in a crawlspace
            with no bars. Shops that switch cut an average of fifty-one minutes of
            drive time per technician per day.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#walkthrough"
              className="rounded-xl bg-[#FF9F1C] px-6 py-3.5 text-center text-base font-bold text-[#0A1220] shadow-[0_14px_34px_-14px_rgba(255,159,28,0.9)] transition hover:bg-[#F08C00]"
            >
              Book a walkthrough
            </a>
            <a
              href="#dispatch"
              className="rounded-xl border border-white/25 px-6 py-3.5 text-center text-base font-bold text-white transition hover:border-white/60 hover:bg-white/10"
            >
              See the dispatch board
            </a>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/15 pt-8">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-[#9FB2D6]">
                Shops running it
              </dt>
              <dd className="mt-1 text-2xl font-black text-white">2,140</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-[#9FB2D6]">
                Work orders a week
              </dt>
              <dd className="mt-1 text-2xl font-black text-white">918k</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-[#9FB2D6]">
                Faster invoicing
              </dt>
              <dd className="mt-1 text-2xl font-black text-white">6.2 days</dd>
            </div>
          </dl>
        </div>

        <div className="relative">
          <div className="rounded-3xl border border-white/15 bg-[#0A1220]/70 p-4 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.9)] backdrop-blur">
            <div className="mb-4 flex items-center justify-between px-2">
              <p className="text-sm font-bold text-white">Tuesday · Yard 2 · Grand Rapids</p>
              <p className="text-xs font-semibold text-[#9FB2D6]">14 techs on shift</p>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {BOARD_COLUMNS.map((column) => (
                <div key={column.title} className="rounded-2xl bg-white/5 p-3">
                  <p className="mb-3 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.12em] text-white">
                    <span
                      aria-hidden="true"
                      className="h-2 w-2 rounded-full"
                      style={{ backgroundColor: column.tone }}
                    />
                    {column.title}
                  </p>
                  <ul className="space-y-2">
                    {column.cards.map((card) => (
                      <li
                        key={card.job}
                        className="rounded-xl bg-white p-3 text-[#0A1220] shadow-sm"
                      >
                        <p className="text-[11px] font-bold leading-snug">{card.job}</p>
                        <p className="mt-1 text-[10px] font-medium text-[#5B6577]">
                          {card.site}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <svg
              viewBox="0 0 420 120"
              className="mt-4 h-28 w-full"
              role="img"
              aria-label="Route map showing four stops between the yard and the last call of the day"
            >
              <defs>
                <linearGradient id="routeFade" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#FF9F1C" />
                  <stop offset="100%" stopColor="#1F4FD8" />
                </linearGradient>
              </defs>
              <rect x="0" y="0" width="420" height="120" rx="14" fill="#0F1B33" />
              <path
                d="M20 92 C 90 92, 84 34, 150 34 S 236 96, 302 62 S 372 26, 400 30"
                fill="none"
                stroke="url(#routeFade)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="7 6"
              />
              <circle cx="20" cy="92" r="7" fill="#FF9F1C" />
              <circle cx="150" cy="34" r="6" fill="#FFFFFF" />
              <circle cx="302" cy="62" r="6" fill="#FFFFFF" />
              <circle cx="400" cy="30" r="7" fill="#12B76A" />
              <text x="14" y="112" fill="#9FB2D6" fontSize="10">
                Yard
              </text>
              <text x="126" y="22" fill="#9FB2D6" fontSize="10">
                7:40a
              </text>
              <text x="278" y="84" fill="#9FB2D6" fontSize="10">
                10:15a
              </text>
              <text x="356" y="18" fill="#9FB2D6" fontSize="10">
                Last call
              </text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
