function AlleyIllustration() {
  return (
    <svg
      viewBox="0 0 420 360"
      role="img"
      aria-label="Illustration of lanterns strung over the Dunbar Lane dining room and a lit wok range"
      className="h-full w-full"
    >
      <defs>
        <linearGradient id="hero-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#241B18" />
          <stop offset="100%" stopColor="#3A241C" />
        </linearGradient>
        <radialGradient id="hero-flame" cx="50%" cy="70%" r="60%">
          <stop offset="0%" stopColor="#F5A623" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#E4572E" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="hero-lantern" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F5A623" />
          <stop offset="100%" stopColor="#E4572E" />
        </linearGradient>
      </defs>

      <rect width="420" height="360" rx="24" fill="url(#hero-sky)" />
      <circle cx="210" cy="250" r="150" fill="url(#hero-flame)" />

      <path d="M6 60c70 26 150 34 204 20s140-26 204-6" stroke="#FBF5EC" strokeWidth="1.5" fill="none" opacity="0.45" />
      {[
        { x: 58, y: 74, r: 15 },
        { x: 124, y: 88, r: 19 },
        { x: 196, y: 82, r: 14 },
        { x: 266, y: 74, r: 21 },
        { x: 344, y: 66, r: 16 },
      ].map((lamp) => (
        <g key={lamp.x}>
          <line x1={lamp.x} y1={lamp.y - lamp.r - 8} x2={lamp.x} y2={lamp.y - lamp.r} stroke="#FBF5EC" strokeWidth="1.2" opacity="0.6" />
          <ellipse cx={lamp.x} cy={lamp.y} rx={lamp.r} ry={lamp.r * 1.18} fill="url(#hero-lantern)" opacity="0.94" />
          <ellipse cx={lamp.x} cy={lamp.y} rx={lamp.r * 0.34} ry={lamp.r * 1.18} fill="#7A2B14" opacity="0.28" />
          <line x1={lamp.x} y1={lamp.y + lamp.r * 1.18} x2={lamp.x} y2={lamp.y + lamp.r * 1.18 + 9} stroke="#E4572E" strokeWidth="1.6" />
        </g>
      ))}

      <rect x="40" y="196" width="340" height="14" rx="4" fill="#0E0A09" />
      <rect x="52" y="210" width="316" height="86" rx="6" fill="#1D1512" />
      <rect x="52" y="210" width="316" height="86" rx="6" fill="none" stroke="#E4572E" strokeWidth="1" opacity="0.4" />

      {[96, 168, 240, 312].map((cx) => (
        <g key={cx}>
          <ellipse cx={cx} cy="196" rx="30" ry="9" fill="#0B0807" />
          <ellipse cx={cx} cy="192" rx="26" ry="7.5" fill="#2F2320" />
          <path d={`M${cx - 16} 190c6 10 26 10 32 0`} stroke="#F5A623" strokeWidth="2.5" fill="none" opacity="0.85" />
          <path d={`M${cx - 8} 182c3-9 -1-14 -4-18 8 3 13 11 11 20z`} fill="#E4572E" opacity="0.9" />
          <path d={`M${cx + 6} 184c2-7 0-11 -3-14 7 2 11 8 9 16z`} fill="#F5A623" opacity="0.8" />
        </g>
      ))}

      <g opacity="0.75">
        <rect x="70" y="232" width="88" height="6" rx="3" fill="#FBF5EC" opacity="0.35" />
        <rect x="70" y="248" width="132" height="6" rx="3" fill="#FBF5EC" opacity="0.22" />
        <rect x="70" y="264" width="104" height="6" rx="3" fill="#FBF5EC" opacity="0.22" />
        <rect x="236" y="232" width="108" height="38" rx="4" fill="#2F7A6B" opacity="0.55" />
        <path d="M248 258l14-16 12 14 10-9 16 20z" fill="#FBF5EC" opacity="0.35" />
      </g>

      <rect x="52" y="308" width="316" height="34" rx="8" fill="#0E0A09" />
      <text x="72" y="331" fill="#F5A623" fontSize="15" fontFamily="serif" letterSpacing="4">
        WALK-INS AFTER 9
      </text>
    </svg>
  )
}

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden bg-[#16110F]">
      <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-[#E4572E]/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#2F7A6B]/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-[#E4572E]/40 bg-[#E4572E]/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#F5A623]">
            Ashgrove Works · open till 1am
          </p>
          <h1 className="mt-6 font-serif text-5xl font-semibold leading-[1.05] text-[#FBF5EC] sm:text-6xl">
            Persimmon Alley
          </h1>
          <p className="mt-3 font-serif text-2xl italic text-[#E4572E]">
            A Sichuan–Taiwanese night market under one long roof
          </p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#FBF5EC]/75">
            Chef Wen Tso-lin cooks off a six-ring wok range and a charcoal skewer trough in the old
            letterpress works on Dunbar Lane. Numbers go up on the proofing press at five, the
            lanterns come on at six, and the last plate leaves the pass somewhere around one in the
            morning. Two thirds of the room is kept for walk-ins, every night.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#reserve"
              data-testid="hero-primary-cta"
              className="rounded-full bg-[#E4572E] px-7 py-3.5 text-sm font-semibold text-[#16110F] shadow-xl shadow-[#E4572E]/25 transition hover:bg-[#F5A623]"
            >
              Reserve a table
            </a>
            <a
              href="#board"
              data-testid="hero-secondary-cta"
              className="rounded-full border border-[#FBF5EC]/25 px-7 py-3.5 text-sm font-semibold text-[#FBF5EC] transition hover:border-[#E4572E] hover:text-[#E4572E]"
            >
              See tonight&rsquo;s board
            </a>
          </div>

          <dl className="mt-12 flex flex-wrap gap-x-10 gap-y-6 border-t border-white/10 pt-8">
            <div>
              <dt className="text-[11px] uppercase tracking-[0.25em] text-[#FBF5EC]/45">Dinner</dt>
              <dd className="mt-1 font-serif text-xl text-[#FBF5EC]">Tue–Sun, 5pm</dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-[0.25em] text-[#FBF5EC]/45">Late kitchen</dt>
              <dd className="mt-1 font-serif text-xl text-[#FBF5EC]">Thu–Sat till 1am</dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-[0.25em] text-[#FBF5EC]/45">Walk-in seats</dt>
              <dd className="mt-1 font-serif text-xl text-[#FBF5EC]">38 of 56</dd>
            </div>
          </dl>
        </div>

        <div className="relative">
          <div className="absolute inset-0 -rotate-2 rounded-[28px] border border-[#E4572E]/25" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/50">
            <AlleyIllustration />
          </div>
          <p className="mt-4 text-center text-xs uppercase tracking-[0.25em] text-[#FBF5EC]/45">
            The lane at nine on a Friday
          </p>
        </div>
      </div>
    </section>
  )
}
