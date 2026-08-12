/** Hero: the promise, two actions, and an SVG of the report desk Weirline replaces. */
export function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[#08312F] text-[#F1E9DC]"
      aria-labelledby="hero-heading"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_15%_0%,rgba(23,163,152,0.35),transparent_60%),radial-gradient(60%_50%_at_95%_20%,rgba(217,119,66,0.28),transparent_65%)]"
      />
      <div className="relative mx-auto grid max-w-6xl gap-14 px-6 py-24 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:py-28">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-[#17A398]/15 px-4 py-1.5 text-[13px] font-medium uppercase tracking-[0.18em] text-[#7FE3D6]">
            Compliance software for small water systems
          </p>
          <h1
            id="hero-heading"
            className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight text-white lg:text-6xl"
          >
            Weirline
            <span className="block text-[#7FE3D6]">files the month for you</span>
          </h1>
          <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-[#F1E9DC]/85">
            Your SCADA day-file, your lab's electronic data deliverable and your sampling calendar
            arrive in one workspace, and the monthly operating report comes out the other side in
            the exact format your primacy agency asks for — reviewed, signed and archived before
            the fifth of the month, without a single spreadsheet.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#book"
              data-testid="hero-primary-cta"
              className="rounded-full bg-[#17A398] px-7 py-3.5 text-[15px] font-semibold text-[#04211F] shadow-lg shadow-[#17A398]/20 transition hover:bg-[#22C4B6]"
            >
              Book a walkthrough
            </a>
            <a
              href="#workspace"
              data-testid="hero-secondary-cta"
              className="rounded-full border border-[#F1E9DC]/30 px-7 py-3.5 text-[15px] font-medium text-[#F1E9DC] transition hover:border-[#F1E9DC]/70"
            >
              See a monthly report
            </a>
          </div>
          <p className="mt-6 text-[14px] text-[#F1E9DC]/60">
            Built in Belfast, Maine. Used by 312 systems from 800 to 60,000 connections. No setup
            fee, no per-seat charge for part-time operators.
          </p>
        </div>

        <div className="relative">
          <svg
            viewBox="0 0 460 360"
            className="w-full drop-shadow-2xl"
            role="img"
            aria-label="A monthly operating report draft beside a chlorine residual chart"
          >
            <defs>
              <linearGradient id="hero-paper" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#FBF8F3" />
                <stop offset="100%" stopColor="#EFE6D8" />
              </linearGradient>
              <linearGradient id="hero-tide" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="#17A398" stopOpacity="0.05" />
                <stop offset="100%" stopColor="#17A398" stopOpacity="0.45" />
              </linearGradient>
            </defs>

            <rect x="18" y="26" width="290" height="308" rx="16" fill="url(#hero-paper)" />
            <rect x="44" y="56" width="150" height="12" rx="6" fill="#08312F" opacity="0.85" />
            <rect x="44" y="80" width="98" height="9" rx="4.5" fill="#08312F" opacity="0.35" />
            <rect x="44" y="112" width="238" height="1.5" fill="#08312F" opacity="0.15" />
            {[0, 1, 2, 3, 4, 5].map((row) => (
              <g key={row}>
                <rect x="44" y={130 + row * 30} width="64" height="9" rx="4.5" fill="#08312F" opacity="0.3" />
                <rect x="124" y={130 + row * 30} width="92" height="9" rx="4.5" fill="#08312F" opacity="0.18" />
                <rect x="232" y={130 + row * 30} width="34" height="9" rx="4.5" fill="#17A398" opacity="0.55" />
              </g>
            ))}
            <rect x="44" y="308" width="120" height="10" rx="5" fill="#D97742" opacity="0.75" />

            <rect x="238" y="118" width="204" height="182" rx="16" fill="#04211F" />
            <text x="262" y="150" fill="#7FE3D6" fontSize="13" fontFamily="ui-sans-serif">
              Chlorine residual
            </text>
            <path
              d="M262 262 L292 240 L322 248 L352 214 L382 224 L412 192"
              fill="none"
              stroke="#17A398"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M262 262 L292 240 L322 248 L352 214 L382 224 L412 192 L412 278 L262 278 Z"
              fill="url(#hero-tide)"
            />
            <path d="M262 278h150" stroke="#F1E9DC" strokeOpacity="0.25" strokeWidth="1.5" />
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <circle key={i} cx={262 + i * 30} cy={[262, 240, 248, 214, 224, 192][i]} r="4" fill="#F1E9DC" />
            ))}

            <g transform="translate(300 36)">
              <rect width="142" height="58" rx="14" fill="#D97742" />
              <text x="20" y="26" fill="#2A1005" fontSize="12" fontFamily="ui-sans-serif">
                Filed on time
              </text>
              <text x="20" y="45" fill="#2A1005" fontSize="16" fontWeight="600" fontFamily="ui-sans-serif">
                19 min · signed
              </text>
            </g>
          </svg>
        </div>
      </div>
    </section>
  )
}
