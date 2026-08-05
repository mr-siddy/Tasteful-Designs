const HIGHLIGHTS = [
  { figure: '6:1', caption: 'Lifters per coach, capped' },
  { figure: '420', caption: 'Members on the Hill' },
  { figure: '11 yrs', caption: 'On Kestrel Street' },
]

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-br from-[#0B241E] via-[#123B31] to-[#2F6B57] text-[#FBF7F1]"
    >
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#E8A33D]/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 left-10 h-96 w-96 rounded-full bg-[#D2683F]/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-5 py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-32">
        <div>
          <p className="text-[11px] uppercase tracking-[0.28em] text-[#E8A33D]">
            Est. 2016 · 214 Kestrel Street
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
            <span className="block">Redpine Strength Co.</span>
            <span className="mt-2 block text-[#E8A33D]">
              Barbells, breathwork, and a coach who knows your name.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#DCE7E1]">
            We are a small-group strength studio in an old print works on Fairmount Hill. Eight
            lifters to a coach, a written plan you keep, a sauna upstairs, and absolutely no
            mirrors — because the barbell already tells you the truth about your last rep.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#start"
              data-testid="hero-primary-cta"
              className="rounded-full bg-[#E8A33D] px-7 py-3.5 text-sm font-semibold text-[#1B1A17] shadow-lg shadow-black/20 transition hover:bg-[#F2B441]"
            >
              Claim a free intro session
            </a>
            <a
              href="#timetable"
              data-testid="hero-secondary-cta"
              className="rounded-full border border-[#FBF7F1]/40 px-7 py-3.5 text-sm font-semibold text-[#FBF7F1] transition hover:bg-[#FBF7F1]/10"
            >
              See this week's timetable
            </a>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-[#FBF7F1]/15 pt-8">
            {HIGHLIGHTS.map((h) => (
              <div key={h.figure}>
                <dt className="text-2xl font-semibold tracking-tight text-[#E8A33D]">{h.figure}</dt>
                <dd className="mt-1 text-xs leading-snug text-[#BFD2C9]">{h.caption}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="rounded-[2rem] border border-[#FBF7F1]/15 bg-[#0B241E]/60 p-6 shadow-2xl shadow-black/30">
            <svg
              viewBox="0 0 400 320"
              role="img"
              aria-label="Illustration of the Redpine lifting floor: three racks, a platform and the recovery loft above"
              className="h-auto w-full"
            >
              <defs>
                <linearGradient id="hero-floor" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#2F6B57" />
                  <stop offset="100%" stopColor="#0B241E" />
                </linearGradient>
              </defs>
              <rect x="0" y="0" width="400" height="320" rx="24" fill="url(#hero-floor)" />
              <rect x="24" y="212" width="352" height="84" rx="10" fill="#0B241E" opacity="0.75" />
              <rect x="40" y="228" width="120" height="52" rx="6" fill="#123B31" stroke="#E8A33D" strokeWidth="2" />
              <text x="100" y="259" textAnchor="middle" fill="#E8A33D" fontSize="13" fontFamily="sans-serif">
                Platform 1
              </text>
              <rect x="176" y="228" width="80" height="52" rx="6" fill="#123B31" stroke="#2F6B57" strokeWidth="2" />
              <rect x="272" y="228" width="88" height="52" rx="6" fill="#123B31" stroke="#2F6B57" strokeWidth="2" />

              {[60, 160, 260].map((x) => (
                <g key={x}>
                  <rect x={x} y="70" width="10" height="140" rx="4" fill="#EFE6D8" opacity="0.85" />
                  <rect x={x + 70} y="70" width="10" height="140" rx="4" fill="#EFE6D8" opacity="0.85" />
                  <rect x={x} y="104" width="80" height="8" rx="4" fill="#D2683F" />
                </g>
              ))}

              <circle cx="200" cy="52" r="26" fill="#E8A33D" opacity="0.9" />
              <path
                d="M40 40 H360"
                stroke="#FBF7F1"
                strokeWidth="3"
                strokeLinecap="round"
                opacity="0.5"
              />
              <text x="200" y="58" textAnchor="middle" fill="#0B241E" fontSize="16" fontWeight="700" fontFamily="sans-serif">
                140
              </text>
            </svg>
            <p className="mt-5 text-sm leading-relaxed text-[#BFD2C9]">
              Three platforms, nine racks, one 40-foot turf lane and a recovery loft with a sauna
              and two cold tubs — all of it under the print works' original skylights.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
