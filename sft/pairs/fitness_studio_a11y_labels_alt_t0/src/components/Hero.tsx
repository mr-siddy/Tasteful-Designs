const HERO_STATS = [
  { value: '612', label: 'members on the books' },
  { value: '8 weeks', label: 'to a full barbell lift' },
  { value: '41', label: 'average member age' },
  { value: '1:6', label: 'coach to lifter, every session' },
]

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[#12141A] text-[#F7F3EC]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_15%_0%,rgba(225,85,43,0.28),transparent_60%),radial-gradient(60%_50%_at_90%_20%,rgba(47,108,122,0.35),transparent_65%)]"
      />
      <div className="relative mx-auto grid max-w-6xl gap-14 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-28">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-[#E1552B]/40 bg-[#E1552B]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#E1552B]">
            Fishtown · since 2014
          </p>
          <h1 className="mt-6 text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Strong in eight weeks.
            <br />
            Still lifting at eighty.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#F7F3EC]/75">
            Coalhouse is a coached barbell room in a 1908 coal depot on Frankford Avenue. You will not
            find a leaderboard, a mirror wall or a class that starts before you know how to hold the bar.
            You will find a coach on the floor for every six lifters, a written plan with your name on
            it, and a room full of nurses, carpenters and retired transit operators who have been here
            for years.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#book"
              className="rounded-full bg-[#E1552B] px-7 py-3.5 text-base font-bold text-[#12141A] transition-colors hover:bg-[#F2703F]"
            >
              Book a free intro session
            </a>
            <a
              href="#rooms"
              className="rounded-full border border-white/25 px-7 py-3.5 text-base font-semibold text-[#F7F3EC] transition-colors hover:border-[#E1552B] hover:text-[#E1552B]"
            >
              Walk through the rooms
            </a>
          </div>
          <p className="mt-5 text-sm text-[#F7F3EC]/55">
            The intro is 45 minutes, costs nothing, and ends with a written plan whether or not you join.
          </p>
        </div>

        <div className="relative">
          <svg
            viewBox="0 0 480 420"
            className="w-full drop-shadow-2xl"
            role="presentation"
            aria-hidden
            focusable="false"
          >
            <defs>
              <linearGradient id="heroBeam" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#F7F3EC" stopOpacity="0.34" />
                <stop offset="1" stopColor="#F7F3EC" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="heroFloor" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="#2F6C7A" />
                <stop offset="1" stopColor="#E1552B" />
              </linearGradient>
            </defs>
            <rect x="0" y="0" width="480" height="420" rx="28" fill="#171B22" />
            <path d="M70 20h84l-30 190H40z" fill="url(#heroBeam)" />
            <path d="M250 20h84l-30 190h-84z" fill="url(#heroBeam)" />
            <rect x="0" y="330" width="480" height="90" rx="28" fill="#0E1116" />
            <rect x="0" y="326" width="480" height="8" fill="url(#heroFloor)" />
            <rect x="60" y="286" width="360" height="44" rx="8" fill="#241A12" stroke="#E1552B" strokeWidth="3" />
            <g fill="#F7F3EC">
              <rect x="120" y="238" width="240" height="9" rx="4.5" />
            </g>
            <g fill="#2F6C7A">
              <rect x="112" y="218" width="16" height="50" rx="4" />
              <rect x="352" y="218" width="16" height="50" rx="4" />
            </g>
            <g fill="#D9A441">
              <rect x="96" y="230" width="10" height="26" rx="3" />
              <rect x="374" y="230" width="10" height="26" rx="3" />
            </g>
            <circle cx="240" cy="182" r="30" fill="#2A303A" />
            <path d="M212 196h56c14 0 24 12 24 26v64h-104v-64c0-14 10-26 24-26z" fill="#2A303A" />
            <path d="M196 244c0-8 6-14 14-14h60c8 0 14 6 14 14" fill="none" stroke="#E1552B" strokeWidth="5" />
          </svg>

          <dl className="mt-8 grid grid-cols-2 gap-4">
            {HERO_STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4"
                data-testid="hero-stat"
              >
                <dt className="text-2xl font-black tracking-tight text-[#E1552B]">{stat.value}</dt>
                <dd className="mt-1 text-xs leading-relaxed text-[#F7F3EC]/65">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
