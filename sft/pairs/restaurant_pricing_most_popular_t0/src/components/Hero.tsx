function HearthIllustration() {
  return (
    <svg viewBox="0 0 420 380" className="h-full w-full" role="img" aria-label="The brick hearth at Ember and Rye">
      <defs>
        <linearGradient id="hero-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2b221b" />
          <stop offset="100%" stopColor="#120e0b" />
        </linearGradient>
        <radialGradient id="hero-glow" cx="0.5" cy="0.72" r="0.55">
          <stop offset="0%" stopColor="#e8b04b" stopOpacity="0.95" />
          <stop offset="45%" stopColor="#e2622a" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#e2622a" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="hero-fire" x1="0" y1="1" x2="0.3" y2="0">
          <stop offset="0%" stopColor="#b8431a" />
          <stop offset="60%" stopColor="#e2622a" />
          <stop offset="100%" stopColor="#f2d08a" />
        </linearGradient>
      </defs>

      <rect width="420" height="380" rx="26" fill="url(#hero-sky)" />
      <ellipse cx="210" cy="300" rx="190" ry="130" fill="url(#hero-glow)" />

      {/* brick arch */}
      <path
        d="M78 330V186a132 132 0 0 1 264 0v144"
        fill="none"
        stroke="#4a3a2d"
        strokeWidth="26"
        strokeLinecap="round"
      />
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <path
          key={i}
          d={`M${78 + i * 0.5} ${300 - i * 15}h20`}
          stroke="#6b5240"
          strokeWidth="2"
          opacity="0.55"
        />
      ))}
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <path
          key={`r-${i}`}
          d={`M${322 - i * 0.5} ${300 - i * 15}h20`}
          stroke="#6b5240"
          strokeWidth="2"
          opacity="0.55"
        />
      ))}

      {/* grate */}
      <rect x="128" y="296" width="164" height="8" rx="4" fill="#2f2721" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <rect key={`bar-${i}`} x={136 + i * 28} y="286" width="4" height="14" rx="2" fill="#3d332b" />
      ))}

      {/* logs */}
      <rect x="140" y="272" width="140" height="16" rx="8" fill="#5a4433" transform="rotate(-4 210 280)" />
      <rect x="150" y="258" width="120" height="15" rx="7" fill="#6b5240" transform="rotate(5 210 266)" />
      <circle cx="152" cy="280" r="6" fill="#e2622a" opacity="0.8" />
      <circle cx="272" cy="266" r="5" fill="#e8b04b" opacity="0.7" />

      {/* flames */}
      <path
        d="M210 130c26 34 38 56 38 76 0 22-17 38-38 38s-38-16-38-38c0-20 12-42 38-76Z"
        fill="url(#hero-fire)"
        opacity="0.92"
      />
      <path
        d="M210 176c12 18 18 30 18 41 0 12-8 21-18 21s-18-9-18-21c0-11 6-23 18-41Z"
        fill="#f7e3b0"
        opacity="0.85"
      />

      {/* sparks */}
      {[
        [146, 168],
        [268, 152],
        [180, 108],
        [244, 196],
        [128, 226],
        [292, 222],
      ].map(([cx, cy], i) => (
        <circle key={`spark-${i}`} cx={cx} cy={cy} r={i % 2 ? 2.5 : 1.8} fill="#e8b04b" opacity="0.7" />
      ))}

      {/* rye stalks */}
      <g stroke="#8a7b5f" strokeWidth="2" strokeLinecap="round" opacity="0.8">
        <path d="M56 340v-58" />
        <path d="M56 296c-9-4-12-11-11-19 8 1 12 7 11 19Z" fill="#8a7b5f" stroke="none" />
        <path d="M56 312c9-4 12-11 11-19-8 1-12 7-11 19Z" fill="#8a7b5f" stroke="none" />
        <path d="M368 340v-46" />
        <path d="M368 306c-8-3-11-9-10-16 7 1 11 6 10 16Z" fill="#8a7b5f" stroke="none" />
      </g>

      <rect x="40" y="336" width="340" height="6" rx="3" fill="#2f2721" />
    </svg>
  )
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[#171310] text-[#f7f2ea]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_20%_0%,rgba(226,98,42,0.28),transparent_70%)]" />
      <div className="pointer-events-none absolute -right-24 top-24 h-72 w-72 rounded-full bg-[#e8b04b]/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-6 py-20 md:py-28 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#e2622a]/40 bg-[#e2622a]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#e8b04b]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#e2622a]" />
            Open Wednesday to Sunday
          </p>

          <h1 className="font-serif text-4xl font-semibold leading-[1.06] tracking-tight sm:text-5xl lg:text-6xl">
            Everything here
            <span className="block text-[#e8b04b]">meets the fire first.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#d9cfc2]">
            Ember &amp; Rye is a twenty-eight seat supper house built around one twelve-foot brick
            hearth on Halstead Row. There is no gas line in our kitchen. Every plate that leaves the
            pass — the bread, the carrots, the dry-aged sirloin, even the pears in the dessert — has
            spent time over oak and apple wood cut forty minutes north of here.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#visit"
              data-testid="hero-primary-cta"
              className="rounded-xl bg-[#e2622a] px-6 py-3.5 text-sm font-semibold text-[#171310] shadow-lg shadow-[#e2622a]/20 transition hover:bg-[#e8b04b]"
            >
              Book a table for two
            </a>
            <a
              href="#packages"
              data-testid="hero-secondary-cta"
              className="rounded-xl border border-[#f7f2ea]/25 px-6 py-3.5 text-sm font-semibold text-[#f7f2ea] transition hover:border-[#e8b04b] hover:text-[#e8b04b]"
            >
              Plan a private dinner
            </a>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-[#f7f2ea]/12 pt-8">
            <div>
              <dt className="text-[11px] uppercase tracking-[0.18em] text-[#9a8d80]">On the Row</dt>
              <dd className="font-serif text-2xl font-semibold text-[#f7f2ea]">9 years</dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-[0.18em] text-[#9a8d80]">Sourcing radius</dt>
              <dd className="font-serif text-2xl font-semibold text-[#f7f2ea]">60 miles</dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-[0.18em] text-[#9a8d80]">Seats</dt>
              <dd className="font-serif text-2xl font-semibold text-[#f7f2ea]">28</dd>
            </div>
          </dl>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-br from-[#e2622a]/25 via-transparent to-[#e8b04b]/10 blur-2xl" />
          <div className="relative aspect-[420/380] w-full overflow-hidden rounded-[28px] border border-[#f7f2ea]/12 shadow-2xl shadow-black/40">
            <HearthIllustration />
          </div>
          <figcaption className="mt-4 text-center text-xs uppercase tracking-[0.18em] text-[#9a8d80]">
            The hearth, lit at 6:40 every morning
          </figcaption>
        </div>
      </div>
    </section>
  )
}
