const HOURS = [
  { day: 'Tuesday – Thursday', time: '5:30pm – 10:00pm' },
  { day: 'Friday – Saturday', time: '5:00pm – 11:30pm' },
  { day: 'Sunday supra', time: '2:00pm – 9:00pm' },
  { day: 'Monday', time: 'Closed — the oven rests too' },
]

export function VisitUs() {
  return (
    <section id="visit" data-testid="visit" className="bg-rose-950 py-24 text-amber-50">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
            Come and sit down
          </p>
          <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            1830 NE Alberta Street, corner of 19th
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-rose-100/85">
            Look for the marigold door and the smell of bread. We are four blocks from the 72 bus,
            there is a bike corral out front, and if you get here early the counter seats are the
            best place in the room to watch a khachapuri come off the oven wall.
          </p>

          <dl className="mt-10 grid max-w-lg gap-4">
            {HOURS.map((row) => (
              <div
                key={row.day}
                data-testid="hours-row"
                className="flex items-baseline justify-between gap-6 border-b border-rose-800/70 pb-3"
              >
                <dt className="text-sm font-semibold uppercase tracking-widest text-rose-100/80">
                  {row.day}
                </dt>
                <dd className="font-serif text-lg text-amber-300">{row.time}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#reserve"
              data-testid="visit-cta"
              className="rounded-full bg-amber-500 px-8 py-4 text-base font-semibold text-rose-950 shadow-xl shadow-amber-900/30 transition hover:bg-amber-400"
            >
              Request a table
            </a>
            <a
              href="tel:5035550164"
              className="rounded-full border border-rose-700 px-8 py-4 text-base font-semibold text-amber-50 transition hover:border-amber-400 hover:text-amber-400"
            >
              Call (503) 555-0164
            </a>
          </div>
        </div>

        <svg
          viewBox="0 0 380 340"
          role="img"
          aria-label="Simplified map of the corner of NE Alberta Street and 19th Avenue showing Tamada"
          className="w-full rounded-3xl border border-rose-800/60 bg-rose-900/40"
        >
          <rect x="0" y="0" width="380" height="340" rx="24" fill="#3f0716" />
          <rect x="0" y="150" width="380" height="46" fill="#5d0f22" />
          <rect x="158" y="0" width="40" height="340" fill="#5d0f22" />
          <g stroke="#fbbf24" strokeWidth="2" strokeDasharray="10 12" opacity="0.6">
            <path d="M0 173h380" />
            <path d="M178 0v340" />
          </g>

          <g fill="#7f172f">
            <rect x="24" y="42" width="106" height="84" rx="8" />
            <rect x="228" y="30" width="120" height="96" rx="8" />
            <rect x="24" y="222" width="118" height="86" rx="8" />
          </g>

          <g>
            <rect x="228" y="216" width="122" height="96" rx="10" fill="#fbbf24" />
            <rect x="252" y="252" width="30" height="60" rx="4" fill="#7c2d12" />
            <circle cx="277" cy="284" r="3" fill="#fde68a" />
            <text
              x="289"
              y="242"
              textAnchor="middle"
              fontFamily="Georgia, serif"
              fontSize="20"
              fill="#4c0519"
            >
              Tamada
            </text>
          </g>

          <text x="86" y="182" fontSize="11" fill="#fde68a" letterSpacing="3">
            NE ALBERTA ST
          </text>
          <text
            x="178"
            y="66"
            fontSize="11"
            fill="#fde68a"
            letterSpacing="3"
            transform="rotate(90 178 66)"
          >
            NE 19TH AVE
          </text>
          <circle cx="60" cy="264" r="9" fill="none" stroke="#fde68a" strokeWidth="2" />
          <path d="M60 258v12M54 264h12" stroke="#fde68a" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
    </section>
  )
}
