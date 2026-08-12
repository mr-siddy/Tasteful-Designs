const HERO_STATS = [
  { figure: '240', label: 'members, capped' },
  { figure: '12', label: 'lifting platforms' },
  { figure: '8', label: 'people per session, max' },
  { figure: '4 wks', label: 'between program reviews' },
]

function HallIllustration() {
  return (
    <svg
      viewBox="0 0 420 340"
      className="h-full w-full"
      role="img"
      aria-label="Illustration of the Ashgrove training hall: a lifting platform under the viaduct arches"
    >
      <defs>
        <linearGradient id="hero-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1B2830" />
          <stop offset="100%" stopColor="#0B1116" />
        </linearGradient>
        <linearGradient id="hero-glow" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#C7F04A" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#D9622B" stopOpacity="0.55" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="420" height="340" rx="26" fill="url(#hero-sky)" />
      <circle cx="322" cy="78" r="62" fill="url(#hero-glow)" opacity="0.35" />

      <g stroke="#2E3E45" strokeWidth="3" fill="none">
        <path d="M32 176V96a44 44 0 0 1 88 0v80" />
        <path d="M148 176V96a44 44 0 0 1 88 0v80" />
        <path d="M264 176V96a44 44 0 0 1 88 0v80" />
      </g>
      <rect x="18" y="60" width="384" height="12" rx="6" fill="#26343B" />

      <rect x="70" y="238" width="280" height="16" rx="4" fill="#3A2A20" />
      <rect x="70" y="238" width="280" height="5" rx="2.5" fill="#54402F" />

      <g>
        <rect x="96" y="196" width="228" height="9" rx="4.5" fill="#F4F1EA" />
        <circle cx="106" cy="200.5" r="26" fill="#10161C" stroke="#C7F04A" strokeWidth="5" />
        <circle cx="314" cy="200.5" r="26" fill="#10161C" stroke="#C7F04A" strokeWidth="5" />
        <circle cx="150" cy="200.5" r="17" fill="#D9622B" />
        <circle cx="270" cy="200.5" r="17" fill="#D9622B" />
      </g>

      <g fill="#F4F1EA">
        <circle cx="210" cy="128" r="17" />
        <rect x="200" y="148" width="20" height="42" rx="9" />
        <rect x="182" y="152" width="14" height="46" rx="7" transform="rotate(9 189 175)" />
        <rect x="224" y="152" width="14" height="46" rx="7" transform="rotate(-9 231 175)" />
        <rect x="192" y="205" width="14" height="34" rx="7" />
        <rect x="214" y="205" width="14" height="34" rx="7" />
      </g>

      <g fill="#6E7A72" opacity="0.75">
        <rect x="34" y="268" width="66" height="8" rx="4" />
        <rect x="34" y="284" width="112" height="8" rx="4" />
        <rect x="320" y="268" width="66" height="24" rx="8" />
      </g>
    </svg>
  )
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[#10161C] text-[#F4F1EA]">
      <div
        className="pointer-events-none absolute -right-24 -top-32 h-[420px] w-[420px] rounded-full opacity-25 blur-3xl"
        style={{ background: 'radial-gradient(circle, #C7F04A 0%, transparent 68%)' }}
      />
      <div
        className="pointer-events-none absolute -bottom-40 left-[-8rem] h-[360px] w-[360px] rounded-full opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(circle, #D9622B 0%, transparent 70%)' }}
      />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-5 py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-28">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-[#C7F04A]/40 bg-[#C7F04A]/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.26em] text-[#C7F04A]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C7F04A]" />
            Under the Kemp Street viaduct since 2016
          </p>

          <h1 className="mt-6 text-4xl font-black leading-[1.04] tracking-tight sm:text-5xl lg:text-[3.6rem]">
            A program with your
            <span className="block text-[#C7F04A]">name written at the top.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#CFD6CE]">
            Ashgrove Barbell Club is a twelve-platform strength hall with a capped roster of 240
            members. You do not turn up and find out what the class is today. You train the program
            a named coach wrote for your body, your week and your history of dodgy shoulders, and
            that coach rewrites it every four weeks with you standing next to them.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#trial"
              data-testid="hero-primary-cta"
              className="rounded-full bg-[#C7F04A] px-7 py-3.5 text-sm font-black uppercase tracking-wide text-[#10161C] shadow-lg shadow-[#C7F04A]/20 transition-transform hover:-translate-y-0.5"
            >
              Claim the two-week trial
            </a>
            <a
              href="#timetable"
              data-testid="hero-secondary-cta"
              className="rounded-full border border-[#F4F1EA]/30 px-7 py-3.5 text-sm font-bold text-[#F4F1EA] transition-colors hover:border-[#F4F1EA]/70"
            >
              See this week&rsquo;s timetable
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-7 sm:grid-cols-4">
            {HERO_STATS.map((stat) => (
              <div key={stat.label}>
                <dt className="text-3xl font-black tracking-tight text-[#C7F04A]">{stat.figure}</dt>
                <dd className="mt-1 text-xs uppercase tracking-[0.16em] text-[#8E9A93]">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-[28px] border border-[#F4F1EA]/12 bg-[#0C1217] p-4 shadow-2xl">
            <HallIllustration />
          </div>
          <div className="absolute -bottom-6 left-6 rounded-2xl border border-[#10161C]/10 bg-[#F4F1EA] px-5 py-4 text-[#10161C] shadow-xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6E7A72]">Next intake</p>
            <p className="text-lg font-black">Monday 6:15am &middot; three spots</p>
          </div>
        </div>
      </div>
    </section>
  )
}
