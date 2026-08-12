function BrassWorksSkyline() {
  return (
    <svg
      viewBox="0 0 480 320"
      className="h-auto w-full"
      role="img"
      aria-label="Illustration of the converted brass works that houses the practice, with skylights and a chimney"
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f6e3d1" />
          <stop offset="100%" stopColor="#fbf6f0" />
        </linearGradient>
        <linearGradient id="brick" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#14312c" />
          <stop offset="100%" stopColor="#1e463f" />
        </linearGradient>
      </defs>
      <rect width="480" height="320" rx="24" fill="url(#sky)" />
      <circle cx="376" cy="82" r="42" fill="#f7d2b3" opacity="0.75" />
      <path d="M0 236h480v60a24 24 0 0 1-24 24H24A24 24 0 0 1 0 296z" fill="#e8d8c6" />
      <rect x="52" y="128" width="196" height="108" fill="url(#brick)" />
      <rect x="248" y="156" width="150" height="80" fill="#1e463f" />
      <rect x="86" y="72" width="22" height="60" fill="#14312c" />
      <path d="M52 128l32-30 32 30zM116 128l32-30 32 30zM180 128l32-30 32 30z" fill="#d9682f" />
      <path d="M248 156l30-26 30 26zM308 156l30-26 30 26z" fill="#e2864f" />
      <g fill="#f6e3d1">
        <rect x="70" y="160" width="26" height="34" rx="3" />
        <rect x="112" y="160" width="26" height="34" rx="3" />
        <rect x="154" y="160" width="26" height="34" rx="3" />
        <rect x="196" y="160" width="26" height="34" rx="3" />
        <rect x="266" y="182" width="24" height="30" rx="3" />
        <rect x="304" y="182" width="24" height="30" rx="3" />
        <rect x="342" y="182" width="24" height="30" rx="3" />
      </g>
      <rect x="128" y="196" width="44" height="40" rx="4" fill="#d9682f" />
      <path d="M0 236h480" stroke="#14312c" strokeWidth="3" opacity="0.2" />
      <g stroke="#14312c" strokeWidth="2" opacity="0.35">
        <path d="M28 268h64M28 284h40M412 268h40M388 284h64" />
      </g>
    </svg>
  )
}

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-[#f3e9dd] via-[#fbf6f0] to-[#fbf6f0]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full bg-[#d9682f]/15 blur-3xl"
      />
      <div className="mx-auto grid max-w-6xl gap-14 px-5 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-[#14312c]/15 bg-white/70 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#14312c]">
            <span className="h-2 w-2 rounded-full bg-[#d9682f]" />
            Foundry Quarter · since 2011
          </p>
          <h1 className="mt-6 font-serif text-4xl font-semibold leading-[1.06] tracking-tight text-[#14312c] sm:text-5xl lg:text-[3.4rem]">
            Foundry Row Dental
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#3f524b]">
            Nine chairs under the skylights of the old Kilnwood brass works, run by the two
            dentists who own it. We open at a quarter to seven so a filling costs you a coffee
            break instead of a day off, we publish every price before you sit down, and we mill
            crowns in the building so most people walk out finished in a single visit.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#book"
              data-testid="hero-cta"
              className="rounded-full bg-[#14312c] px-7 py-3.5 text-center text-sm font-semibold text-white shadow-lg shadow-[#14312c]/20 transition hover:bg-[#1e463f]"
            >
              Book a chair
            </a>
            <a
              href="#treatments"
              data-testid="hero-secondary-cta"
              className="rounded-full border border-[#14312c]/25 px-7 py-3.5 text-center text-sm font-semibold text-[#14312c] transition hover:bg-[#f3e9dd]"
            >
              See what everything costs
            </a>
          </div>
          <dl className="mt-10 grid max-w-lg grid-cols-3 gap-6 border-t border-[#14312c]/10 pt-7">
            <div>
              <dt className="text-[11px] uppercase tracking-[0.18em] text-[#6b7d75]">Opens</dt>
              <dd className="mt-1 font-serif text-2xl text-[#14312c]">6:45am</dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-[0.18em] text-[#6b7d75]">
                New patient exam
              </dt>
              <dd className="mt-1 font-serif text-2xl text-[#14312c]">$95</dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-[0.18em] text-[#6b7d75]">
                Crown in one visit
              </dt>
              <dd className="mt-1 font-serif text-2xl text-[#14312c]">2 hrs</dd>
            </div>
          </dl>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-[28px] border border-[#14312c]/10 bg-white/60 p-3 shadow-xl shadow-[#14312c]/10">
            <BrassWorksSkyline />
          </div>
          <div className="mt-4 flex items-center gap-3 rounded-2xl border border-[#14312c]/10 bg-white/80 px-5 py-4 shadow-sm">
            <svg viewBox="0 0 24 24" className="h-7 w-7 shrink-0" aria-hidden="true">
              <circle cx="12" cy="12" r="11" fill="#14312c" />
              <path
                d="M7 12.4l3.2 3.1L17 8.8"
                stroke="#fbf6f0"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
            <p className="text-sm leading-snug text-[#3f524b]">
              12 Kilnwood Street, three minutes from the Foundry Quarter tram stop, with a
              step-free entrance off the courtyard and free parking behind the building.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
