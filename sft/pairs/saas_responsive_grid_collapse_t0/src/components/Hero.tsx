function MarkerPlan() {
  return (
    <svg
      viewBox="0 0 420 320"
      role="img"
      aria-label="A marker layout with pattern pieces nested on a fabric lay, beside a cut ticket"
      className="h-auto w-full"
    >
      <defs>
        <linearGradient id="hero-cloth" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#EFE6D6" />
          <stop offset="100%" stopColor="#DCCFB8" />
        </linearGradient>
        <pattern id="hero-weave" width="8" height="8" patternUnits="userSpaceOnUse">
          <path d="M0 0h8M0 4h8" stroke="#C9BAA0" strokeWidth="0.6" opacity="0.7" />
          <path d="M0 0v8M4 0v8" stroke="#C9BAA0" strokeWidth="0.6" opacity="0.4" />
        </pattern>
      </defs>

      <rect x="8" y="16" width="268" height="288" rx="10" fill="url(#hero-cloth)" />
      <rect x="8" y="16" width="268" height="288" rx="10" fill="url(#hero-weave)" />
      <rect
        x="8"
        y="16"
        width="268"
        height="288"
        rx="10"
        fill="none"
        stroke="#2C5C4F"
        strokeWidth="2"
      />

      {/* nested pattern pieces on the lay */}
      <path
        d="M28 46h84l14 62-22 74H34l-16-70z"
        fill="#F6F2EC"
        stroke="#2C5C4F"
        strokeWidth="1.8"
      />
      <path
        d="M132 42h96l10 58-18 44h-74l-20-52z"
        fill="#F6F2EC"
        stroke="#2C5C4F"
        strokeWidth="1.8"
      />
      <path
        d="M126 158h122l6 52-30 78h-70l-26-64z"
        fill="#FFFDF8"
        stroke="#C1552F"
        strokeWidth="1.8"
      />
      <path
        d="M24 206h74l10 44-14 46H30l-12-50z"
        fill="#FFFDF8"
        stroke="#C1552F"
        strokeWidth="1.8"
      />

      {/* grainline arrows */}
      <g stroke="#1E1B26" strokeWidth="1.6" strokeLinecap="round" fill="none">
        <path d="M66 62v78M60 68l6-6 6 6M60 134l6 6 6-6" />
        <path d="M186 58v66M180 64l6-6 6 6M180 118l6 6 6-6" />
        <path d="M188 178v92M182 184l6-6 6 6M182 264l6 6 6-6" />
      </g>

      <text x="24" y="300" fill="#5A5364" fontSize="11" fontFamily="monospace">
        MARKER 88.4% · LAY 6.2 YD · 14 PLY
      </text>

      {/* the cut ticket card */}
      <g>
        <rect x="290" y="40" width="122" height="150" rx="9" fill="#1E1B26" />
        <text x="304" y="64" fill="#E6DCCD" fontSize="10" fontFamily="monospace">
          CUT TICKET
        </text>
        <text x="304" y="84" fill="#F6F2EC" fontSize="15" fontWeight="700">
          CT-2214
        </text>
        <path d="M304 96h94" stroke="#4A4455" strokeWidth="1" />
        <text x="304" y="114" fill="#B9AFC2" fontSize="10">
          Chore coat / duck 12oz
        </text>
        <text x="304" y="132" fill="#B9AFC2" fontSize="10">
          Lot 4471 · shade B
        </text>
        <text x="304" y="150" fill="#B9AFC2" fontSize="10">
          XS-XXL · ratio 1-2-3-3-2-1
        </text>
        <rect x="304" y="160" width="60" height="18" rx="9" fill="#2C5C4F" />
        <text x="313" y="173" fill="#F6F2EC" fontSize="10" fontWeight="600">
          ON LINE
        </text>
      </g>

      <g>
        <rect x="290" y="204" width="122" height="100" rx="9" fill="#E6DCCD" />
        <text x="304" y="226" fill="#5A5364" fontSize="10" fontFamily="monospace">
          BUNDLES DONE
        </text>
        <text x="304" y="252" fill="#1E1B26" fontSize="22" fontWeight="800">
          38 / 52
        </text>
        <rect x="304" y="264" width="94" height="8" rx="4" fill="#CBBDA6" />
        <rect x="304" y="264" width="69" height="8" rx="4" fill="#C1552F" />
        <text x="304" y="290" fill="#5A5364" fontSize="10">
          Sew line 2 · Thu 3:40pm
        </text>
      </g>
    </svg>
  )
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-[#E0D6C6] bg-gradient-to-b from-[#FBF8F2] via-[#F6F2EC] to-[#EFE9DE]"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-5 py-20 lg:grid-cols-[1.05fr_1fr] lg:py-28">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-[#CBBDA6] bg-[#F6F2EC] px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#2C5C4F]">
            Production software for small-batch apparel
          </p>

          <h1 className="mt-6 text-[2.6rem] font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.4rem]">
            Your 400-unit run should not live in a spreadsheet and three group
            chats.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#4A4455]">
            Grainline puts every cut ticket, fabric lot, bundle and subcontractor
            handoff on one board, so your cutter, your floor lead and the label
            waiting on delivery are all reading the same number at the same time
            — the one the sew line is actually running, not the one from Monday's
            standup.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#book"
              className="rounded-full bg-[#C1552F] px-7 py-3.5 text-sm font-semibold text-[#FFF8F0] shadow-sm hover:bg-[#A8482A]"
            >
              Book a floor walk
            </a>
            <a
              href="#platform"
              className="rounded-full border border-[#2C5C4F] px-7 py-3.5 text-sm font-semibold text-[#2C5C4F] hover:bg-[#2C5C4F] hover:text-[#F6F2EC]"
            >
              See a live cut ticket
            </a>
          </div>

          <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t border-[#E0D6C6] pt-7">
            <div>
              <dt className="text-xs uppercase tracking-widest text-[#7A7286]">
                Floors running it
              </dt>
              <dd className="mt-1 text-xl font-bold">38 across 9 states</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-[#7A7286]">
                Sew-line seats
              </dt>
              <dd className="mt-1 text-xl font-bold">Unlimited, flat rate</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-[#7A7286]">
                Setup
              </dt>
              <dd className="mt-1 text-xl font-bold">One week, on site</dd>
            </div>
          </dl>
        </div>

        <div className="rounded-3xl border border-[#DCCFB8] bg-[#FFFDF8] p-5 shadow-[0_20px_60px_-30px_rgba(30,27,38,0.5)]">
          <MarkerPlan />
        </div>
      </div>
    </section>
  )
}
