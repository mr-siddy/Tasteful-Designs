import { ArrowIcon, StarIcon } from './icons'

const HERO_STATS = [
  { value: '2,400', label: 'crews dispatched every morning' },
  { value: '1.3M', label: 'work orders closed out last year' },
  { value: '11 min', label: 'average time to reroute a full day' },
]

function DispatchBoardArt() {
  return (
    <svg viewBox="0 0 420 320" className="h-auto w-full" role="img" aria-label="Illustration of the Taskflow dispatch board">
      <defs>
        <linearGradient id="heroSky" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1e293b" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
        <linearGradient id="heroAmber" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#f97316" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="420" height="320" rx="20" fill="url(#heroSky)" />
      <rect x="16" y="16" width="388" height="34" rx="10" fill="#0b1220" />
      <circle cx="34" cy="33" r="4.5" fill="#f87171" />
      <circle cx="50" cy="33" r="4.5" fill="#fbbf24" />
      <circle cx="66" cy="33" r="4.5" fill="#34d399" />
      <rect x="86" y="26" width="120" height="14" rx="7" fill="#1e293b" />
      <rect x="320" y="24" width="68" height="18" rx="9" fill="url(#heroAmber)" />

      {[16, 154, 292].map((x, column) => (
        <g key={x}>
          <rect x={x} y="64" width="112" height="240" rx="14" fill="#0b1220" stroke="#1e293b" strokeWidth="1.5" />
          <rect x={x + 12} y="78" width="60" height="10" rx="5" fill="#334155" />
          <circle cx={x + 92} cy="83" r="8" fill="#1e293b" />
          <text x={x + 92} y="87" textAnchor="middle" fontSize="9" fill="#94a3b8" fontFamily="ui-sans-serif, system-ui">
            {['DW', 'MB', 'PR'][column]}
          </text>
          {[0, 1, 2, 3].map((row) => (
            <g key={row}>
              <rect
                x={x + 10}
                y={102 + row * 50}
                width="92"
                height="40"
                rx="9"
                fill={column === 1 && row === 1 ? 'url(#heroAmber)' : '#111c30'}
                stroke={column === 1 && row === 1 ? 'none' : '#1e293b'}
                strokeWidth="1.2"
              />
              <rect
                x={x + 20}
                y={112 + row * 50}
                width={column === 1 && row === 1 ? 54 : 46 + row * 6}
                height="7"
                rx="3.5"
                fill={column === 1 && row === 1 ? '#7c2d12' : '#334155'}
              />
              <rect
                x={x + 20}
                y={125 + row * 50}
                width={30 + row * 4}
                height="6"
                rx="3"
                fill={column === 1 && row === 1 ? '#9a3412' : '#1e293b'}
              />
            </g>
          ))}
        </g>
      ))}
      <path
        d="M116 172c30 0 30 -40 60 -40"
        stroke="#22d3ee"
        strokeWidth="2.4"
        fill="none"
        strokeDasharray="5 5"
        strokeLinecap="round"
      />
      <circle cx="116" cy="172" r="4.5" fill="#22d3ee" />
      <circle cx="176" cy="132" r="4.5" fill="#22d3ee" />
    </svg>
  )
}

export default function Hero() {
  return (
    <section id="top" data-testid="hero" className="relative overflow-hidden bg-slate-950 pb-20 pt-16 sm:pt-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-gradient-to-br from-amber-500/20 via-orange-500/10 to-cyan-500/10 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-6xl gap-14 px-5 lg:grid-cols-[1.05fr_1fr] lg:items-center">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-amber-300">
            Built in Pittsburgh for the trades
          </p>
          <h1 className="mt-6 text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Taskflow keeps every crew, van and work order on one board.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
            Dispatch software written by two people who ran the phones at a forty-truck heating and
            cooling shop. Schedule the morning in a single pass, reroute the afternoon in seconds when
            a boiler call comes in, and let the crew close out the job from the driveway before they
            pull away.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#demo"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-400 px-6 py-3.5 text-base font-semibold text-slate-950 shadow-lg shadow-amber-500/20 transition hover:bg-amber-300"
            >
              Book a 20-minute demo
              <ArrowIcon />
            </a>
            <a
              href="#board"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 px-6 py-3.5 text-base font-semibold text-slate-100 transition hover:border-slate-500"
            >
              See the dispatch board
            </a>
          </div>
          <p className="mt-5 flex items-center gap-2 text-sm text-slate-400">
            <span className="flex text-amber-400">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </span>
            4.8 out of 5 across 612 reviews from owners and dispatch leads
          </p>
        </div>

        <div className="relative">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-4 shadow-2xl shadow-slate-950/60">
            <DispatchBoardArt />
          </div>
          <dl className="mt-6 grid grid-cols-3 gap-3">
            {HERO_STATS.map((stat) => (
              <div key={stat.value} className="rounded-2xl border border-slate-800 bg-slate-900/50 px-4 py-4">
                <dt className="text-2xl font-bold tracking-tight text-amber-300">{stat.value}</dt>
                <dd className="mt-1 text-xs leading-snug text-slate-400">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
