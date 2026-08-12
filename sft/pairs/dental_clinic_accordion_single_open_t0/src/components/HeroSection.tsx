const QUICK_FACTS = [
  { value: '£0', label: 'Quotes, always written before we start' },
  { value: '3pm', label: 'Emergency chair held empty until' },
  { value: '10', label: 'Months interest-free on plans over £400' },
  { value: 'Sat', label: 'Family mornings, 8am to 1pm' },
]

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-[#E3DCD0] bg-gradient-to-br from-[#FBF9F5] via-[#F6F1E9] to-[#EDE7F5]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full bg-[#5B4BA8]/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 left-1/4 h-80 w-80 rounded-full bg-[#E4735B]/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-5 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-28">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-[#D8CFF0] bg-white/70 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#5B4BA8]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#E4735B]" />
            Independent since 2009
          </p>

          <h1 className="mt-6 text-[2.6rem] font-semibold leading-[1.08] tracking-tight text-[#332A56] sm:text-6xl">
            The price is on the wall
            <span className="block text-[#E4735B]">before you sit down</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#5A5347]">
            Every fee we charge is printed on the board in our waiting room and published further
            down this page. Nobody at Bramble Court is treated without a written quote they have
            read and signed first, so the only surprise you get here is how quickly it was over.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#book"
              data-testid="hero-cta"
              className="rounded-full bg-[#332A56] px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-[#332A56]/20 transition-colors hover:bg-[#453a6f]"
            >
              Book a check-up — £46
            </a>
            <a
              href="#fees"
              data-testid="hero-secondary-cta"
              className="rounded-full border border-[#332A56]/25 bg-white px-7 py-3.5 text-base font-semibold text-[#332A56] transition-colors hover:border-[#332A56]/60"
            >
              Read the whole price list
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-7 sm:grid-cols-4">
            {QUICK_FACTS.map((fact) => (
              <div key={fact.label} data-testid="hero-fact">
                <dt className="text-2xl font-semibold tracking-tight text-[#332A56]">
                  {fact.value}
                </dt>
                <dd className="mt-1 text-sm leading-snug text-[#6A6255]">{fact.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <svg
            viewBox="0 0 420 380"
            role="img"
            aria-label="Illustration of the Bramble Court waiting room price board beside a dental chair"
            className="h-auto w-full drop-shadow-xl"
          >
            <defs>
              <linearGradient id="hero-wall" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#F1ECE3" />
              </linearGradient>
              <linearGradient id="hero-board" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#3B3163" />
                <stop offset="100%" stopColor="#2A2247" />
              </linearGradient>
            </defs>

            <rect x="8" y="8" width="404" height="364" rx="26" fill="url(#hero-wall)" />
            <rect x="8" y="8" width="404" height="364" rx="26" fill="none" stroke="#E3DCD0" />

            <rect x="40" y="42" width="216" height="230" rx="16" fill="url(#hero-board)" />
            <text x="62" y="80" fill="#FBF9F5" fontSize="17" fontWeight="600">
              Our fees today
            </text>
            <path d="M62 92h172" stroke="#7E71C4" strokeWidth="1.5" />
            {[
              ['Check-up', '£46'],
              ['Hygienist, 30 min', '£62'],
              ['White filling', '£145'],
              ['Same-day crown', '£680'],
              ['Emergency visit', '£75'],
            ].map(([item, price], index) => (
              <g key={item}>
                <text x="62" y={118 + index * 29} fill="#D9D3F0" fontSize="13">
                  {item}
                </text>
                <text
                  x="234"
                  y={118 + index * 29}
                  fill="#FBF9F5"
                  fontSize="13"
                  fontWeight="600"
                  textAnchor="end"
                >
                  {price}
                </text>
              </g>
            ))}
            <rect x="62" y="248" width="76" height="8" rx="4" fill="#E4735B" />

            <g>
              <rect x="286" y="150" width="94" height="122" rx="18" fill="#E9E2F6" />
              <rect x="298" y="176" width="70" height="74" rx="14" fill="#5B4BA8" />
              <circle cx="333" cy="140" r="26" fill="#F3B7A5" />
              <path d="M312 141a21 21 0 0 1 42 0" fill="#332A56" />
              <path
                d="M286 272c0-22 20-32 47-32s47 10 47 32"
                fill="#332A56"
                opacity="0.15"
              />
            </g>

            <g transform="translate(292 44)">
              <circle cx="30" cy="30" r="28" fill="#FBF9F5" stroke="#E4735B" strokeWidth="2" />
              <path
                d="M18 30l8 9 16-18"
                fill="none"
                stroke="#E4735B"
                strokeWidth="3.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>

            <path
              d="M40 300h340"
              stroke="#E3DCD0"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="7 9"
            />
            <text x="40" y="332" fill="#6A6255" fontSize="13">
              22 Bramble Court, Wyeford Quarter
            </text>
            <text x="40" y="352" fill="#8B8375" fontSize="12">
              Mon–Thu 7.30am–7pm · Fri 8am–4pm · Sat 8am–1pm
            </text>
          </svg>
        </div>
      </div>
    </section>
  )
}
