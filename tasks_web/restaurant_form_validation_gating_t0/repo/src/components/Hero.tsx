const STATS = [
  { value: '18 ft', label: 'of oak-fired grill' },
  { value: '4:00 am', label: 'the bakehouse lights up' },
  { value: '52 + 60', label: 'seats in the room and at the Long Table' },
]

function GrillIllustration() {
  return (
    <svg viewBox="0 0 420 340" className="h-full w-full" role="img" aria-label="Illustration of the oak-fired asador grill with hanging racks and a bed of coals">
      <defs>
        <linearGradient id="hero-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2a1e18" />
          <stop offset="100%" stopColor="#120c09" />
        </linearGradient>
        <linearGradient id="hero-flame" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#b8451f" />
          <stop offset="55%" stopColor="#e0912f" />
          <stop offset="100%" stopColor="#f7d9a0" />
        </linearGradient>
        <radialGradient id="hero-glow" cx="50%" cy="78%" r="55%">
          <stop offset="0%" stopColor="#e0912f" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#e0912f" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="420" height="340" rx="26" fill="url(#hero-sky)" />
      <rect width="420" height="340" rx="26" fill="url(#hero-glow)" />

      {/* brick hearth back wall */}
      <g opacity="0.35" stroke="#5b3d2b" strokeWidth="1.5">
        {[60, 84, 108, 132, 156, 180].map((y) => (
          <line key={y} x1="46" y1={y} x2="374" y2={y} />
        ))}
        {[46, 106, 166, 226, 286, 346].map((x) => (
          <line key={x} x1={x} y1="52" x2={x} y2="188" />
        ))}
      </g>

      {/* hanging rack and chains */}
      <g stroke="#c9a97f" strokeWidth="3" strokeLinecap="round">
        <line x1="118" y1="56" x2="118" y2="128" />
        <line x1="302" y1="56" x2="302" y2="128" />
      </g>
      <rect x="104" y="126" width="212" height="9" rx="4" fill="#c9a97f" />

      {/* grill baskets holding fish and chops */}
      <g fill="none" stroke="#e8d5b5" strokeWidth="3">
        <rect x="128" y="140" width="72" height="44" rx="6" />
        <rect x="222" y="140" width="72" height="44" rx="6" />
        <line x1="128" y1="162" x2="200" y2="162" />
        <line x1="222" y1="162" x2="294" y2="162" />
      </g>
      <path d="M136 158c14-9 34-9 48 0-14 9-34 9-48 0z" fill="#d9b48a" />
      <rect x="232" y="150" width="24" height="15" rx="3" fill="#a85230" />
      <rect x="262" y="150" width="24" height="15" rx="3" fill="#a85230" />

      {/* coal bed */}
      <rect x="72" y="238" width="276" height="20" rx="10" fill="#3b2a20" />
      {[
        [96, 244],
        [128, 240],
        [160, 246],
        [196, 241],
        [232, 246],
        [268, 240],
        [304, 245],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r={i % 2 ? 7 : 9} fill="#b8451f" opacity="0.9" />
      ))}

      {/* flames */}
      <path
        d="M210 236c8-24-13-31-16-49-2-13 6-20 6-20s-16 7-16 26c0 9 4 14 4 14s-14-4-14-19c-12 10-19 23-19 37 0 20 17 33 30 33 5 0 12-2 12-2z"
        fill="url(#hero-flame)"
        opacity="0.95"
      />
      <path
        d="M262 236c6-17-9-23-11-36-2-9 4-15 4-15s-12 5-12 19c0 7 3 11 3 11s-10-3-10-14c-9 8-14 17-14 27 0 15 12 25 22 25 4 0 8-1 8-1z"
        fill="url(#hero-flame)"
        opacity="0.8"
      />

      {/* stacked oak split at the side */}
      <g fill="#6b4a32">
        <rect x="40" y="252" width="46" height="14" rx="4" />
        <rect x="46" y="270" width="46" height="14" rx="4" />
        <rect x="38" y="288" width="46" height="14" rx="4" />
      </g>
      <rect x="46" y="306" width="330" height="12" rx="6" fill="#241a14" />
    </svg>
  )
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[#1b1512] text-[#faf5ec]">
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            'radial-gradient(65% 55% at 12% 8%, rgba(224,145,47,0.28), transparent 62%), radial-gradient(60% 60% at 92% 82%, rgba(184,69,31,0.34), transparent 60%)',
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-[#e0912f]/40 bg-[#e0912f]/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.24em] text-[#e0b57a]">
            Brightleaf · Durham, NC
          </p>
          <h1 className="mt-6 text-5xl font-black leading-[1.03] tracking-tight sm:text-6xl">
            Cooked over oak and hickory, six feet from your seat
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#e6d9c6]">
            Cinder &amp; Rye is a Basque-leaning asador in a 1926 tobacco drying shed on Ferris Street.
            One fire does all the savoury cooking — no gas line, no salamander, no sous-vide bath — and the
            bakehouse on the other side of the brick wall has been running since four that morning.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#long-table"
              className="rounded-full bg-[#e0912f] px-7 py-3.5 text-base font-bold text-[#1b1512] shadow-lg shadow-black/30 transition hover:bg-[#f0a744]"
            >
              Book the Long Table
            </a>
            <a
              href="#menu"
              className="rounded-full border border-[#faf5ec]/30 px-7 py-3.5 text-base font-bold text-[#faf5ec] transition hover:border-[#faf5ec]/70"
            >
              Read tonight&rsquo;s menu
            </a>
          </div>

          <dl className="mt-12 grid gap-6 border-t border-[#faf5ec]/15 pt-8 sm:grid-cols-3">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <dt className="text-2xl font-black text-[#e0912f]">{stat.value}</dt>
                <dd className="mt-1 text-sm leading-snug text-[#c9baa5]">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[34px] bg-gradient-to-br from-[#e0912f]/25 to-transparent blur-2xl" aria-hidden="true" />
          <div className="relative aspect-[42/34] w-full overflow-hidden rounded-[26px] border border-[#faf5ec]/12 shadow-2xl shadow-black/50">
            <GrillIllustration />
          </div>
          <p className="mt-4 text-center text-sm text-[#a9977f]">
            The grill Inés Arrieta welded in the parking lot in the spring of 2019.
          </p>
        </div>
      </div>
    </section>
  )
}
