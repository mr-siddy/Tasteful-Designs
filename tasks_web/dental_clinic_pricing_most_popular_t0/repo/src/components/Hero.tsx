const CHIPS = [
  'Same-day crowns, milled here',
  'Nitrous and numbing gel included',
  'Written price before we book anything',
]

function OperatoryIllustration() {
  return (
    <svg
      viewBox="0 0 420 380"
      className="h-full w-full"
      role="img"
      aria-label="Illustration of the arched operatory window at Foxglove Dental Studio"
    >
      <defs>
        <linearGradient id="hero-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#DCEDE7" />
          <stop offset="100%" stopColor="#F3EDE4" />
        </linearGradient>
        <linearGradient id="hero-chair" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#14524A" />
          <stop offset="100%" stopColor="#0F3B36" />
        </linearGradient>
        <linearGradient id="hero-bloom" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E8A6BF" />
          <stop offset="100%" stopColor="#C2557E" />
        </linearGradient>
      </defs>

      <path d="M40 340V150a170 170 0 0 1 340 0v190z" fill="url(#hero-sky)" />
      <path
        d="M40 340V150a170 170 0 0 1 340 0v190z"
        fill="none"
        stroke="#0F3B36"
        strokeOpacity="0.25"
        strokeWidth="3"
      />
      <path d="M210 20v320M40 210h340" stroke="#0F3B36" strokeOpacity="0.15" strokeWidth="3" />

      <circle cx="300" cy="118" r="34" fill="#F7D9A8" opacity="0.9" />

      <g>
        <rect x="118" y="238" width="184" height="26" rx="13" fill="url(#hero-chair)" />
        <rect x="140" y="188" width="120" height="58" rx="18" fill="url(#hero-chair)" />
        <rect x="96" y="256" width="34" height="62" rx="12" fill="#14524A" />
        <rect x="196" y="262" width="16" height="58" rx="8" fill="#0F3B36" />
        <rect x="160" y="316" width="90" height="12" rx="6" fill="#0F3B36" opacity="0.7" />
      </g>

      <g stroke="#0F3B36" strokeWidth="4" fill="none" strokeLinecap="round">
        <path d="M312 300v-56a26 26 0 0 0-26-26h-18" />
        <circle cx="312" cy="312" r="12" fill="#FBF8F3" />
      </g>

      <g>
        <path d="M92 330c0-46 6-78 18-104" stroke="#1B6B60" strokeWidth="5" fill="none" strokeLinecap="round" />
        <ellipse cx="104" cy="206" rx="15" ry="21" fill="url(#hero-bloom)" />
        <ellipse cx="118" cy="242" rx="13" ry="18" fill="url(#hero-bloom)" opacity="0.85" />
        <ellipse cx="96" cy="266" rx="11" ry="16" fill="url(#hero-bloom)" opacity="0.7" />
        <path d="M110 288c14-4 22-14 24-28" stroke="#1B6B60" strokeWidth="4" fill="none" strokeLinecap="round" />
      </g>

      <g opacity="0.55">
        <circle cx="356" cy="252" r="6" fill="#C2557E" />
        <circle cx="372" cy="286" r="4" fill="#1B6B60" />
        <circle cx="342" cy="300" r="3" fill="#0F3B36" />
      </g>
    </svg>
  )
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[#FBF8F3]"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-[#DCEDE7] via-[#F3EDE4] to-transparent blur-2xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-32 top-24 h-[420px] w-[420px] rounded-full bg-gradient-to-tr from-[#F6DDE6] to-transparent blur-2xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-5 py-20 md:py-28 lg:grid-cols-[1.05fr,0.95fr] lg:items-center">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-[#0F3B36]/15 bg-white/70 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0F3B36]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C2557E]" aria-hidden="true" />
            Accepting new patients · Cobblehill Ward
          </p>

          <h1
            id="hero-heading"
            className="mt-6 font-serif text-4xl font-semibold leading-[1.08] tracking-tight text-[#0F3B36] sm:text-5xl lg:text-6xl"
          >
            Dentistry at the pace of the person in the chair
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#14201E]/75">
            We see eight patients a day instead of twenty-two, so a cleaning runs forty-five
            unhurried minutes and a consultation ends with a written plan you can take home and
            think about. No sales script, no surprise line items, no rushing you back into the
            waiting room while the numbing is still wearing off.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#visit"
              data-testid="hero-primary-cta"
              className="rounded-full bg-[#0F3B36] px-7 py-3.5 text-sm font-semibold text-[#FBF8F3] shadow-lg shadow-[#0F3B36]/20 transition-colors hover:bg-[#14524A]"
            >
              Book a first visit
            </a>
            <a
              href="#membership"
              data-testid="hero-secondary-cta"
              className="rounded-full border border-[#0F3B36]/25 px-7 py-3.5 text-sm font-semibold text-[#0F3B36] transition-colors hover:border-[#0F3B36]/60"
            >
              See membership plans
            </a>
          </div>

          <ul className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-7">
            {CHIPS.map((chip) => (
              <li
                key={chip}
                data-testid="hero-chip"
                className="flex items-center gap-2.5 text-sm font-medium text-[#14201E]/70"
              >
                <svg viewBox="0 0 20 20" className="h-4 w-4 shrink-0 text-[#1B6B60]" aria-hidden="true">
                  <circle cx="10" cy="10" r="9" fill="currentColor" opacity="0.14" />
                  <path
                    d="M6 10.4l2.6 2.6L14 7.6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {chip}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="rounded-[32px] border border-[#0F3B36]/10 bg-white/70 p-5 shadow-xl shadow-[#0F3B36]/10">
            <OperatoryIllustration />
          </div>
          <div className="absolute -bottom-6 left-6 rounded-2xl border border-[#0F3B36]/10 bg-white px-5 py-4 shadow-lg shadow-[#0F3B36]/10">
            <p className="text-2xl font-semibold text-[#0F3B36]">45 min</p>
            <p className="text-xs uppercase tracking-[0.16em] text-[#14201E]/55">Every hygiene visit</p>
          </div>
        </div>
      </div>
    </section>
  )
}
