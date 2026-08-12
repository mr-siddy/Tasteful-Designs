const MARKERS = [
  { value: '12 ft', label: 'of open oak fire' },
  { value: '4 pm', label: 'the board is printed' },
  { value: '2019', label: 'in the cutting shed' },
]

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[#0b2027] text-[#f3ece0]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_90%_at_78%_18%,rgba(210,96,26,0.42),transparent_58%),radial-gradient(90%_70%_at_8%_92%,rgba(143,184,174,0.22),transparent_60%)]"
      />
      <div className="relative mx-auto grid max-w-6xl gap-14 px-5 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-28">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#f3ece0]/25 px-3.5 py-1.5 text-[11px] uppercase tracking-[0.24em] text-[#f0a35e]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#d2601a]" />
            Wood-fired · Harbour side
          </p>
          <h1 className="font-serif text-5xl font-semibold leading-[1.03] tracking-tight sm:text-6xl lg:text-7xl">
            Everything here
            <span className="block text-[#f0a35e]">meets the fire.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#f3ece0]/80">
            Salt Quarry is a coastal kitchen built inside a granite cutting shed on Rockport harbour, where one
            twelve-foot hearth of white oak and apple does nearly all the cooking. The Pigeon Cove day boats land at
            three, the board is printed at four, and whatever came in is on the coals by five.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#reserve"
              className="rounded-full bg-[#d2601a] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#d2601a]/25 transition hover:bg-[#b74f13]"
            >
              Request a table
            </a>
            <a
              href="#board"
              className="rounded-full border border-[#f3ece0]/30 px-7 py-3.5 text-sm font-semibold text-[#f3ece0] transition hover:border-[#f3ece0]/70"
            >
              Read tonight's board
            </a>
          </div>
          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-[#f3ece0]/15 pt-8">
            {MARKERS.map((marker) => (
              <div key={marker.label}>
                <dt className="font-serif text-3xl font-semibold text-[#f0a35e]">{marker.value}</dt>
                <dd className="mt-1 text-xs uppercase tracking-[0.16em] text-[#f3ece0]/60">{marker.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-[2.5rem] bg-[#f3ece0]/5 blur-2xl" aria-hidden="true" />
          <svg viewBox="0 0 460 420" className="relative w-full drop-shadow-2xl" role="img" aria-label="Illustration of the open hearth at Salt Quarry, a bank of oak logs burning under an iron grill with pans and a bottle on the shelf above">
            <defs>
              <linearGradient id="hero-stone" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1c3b45" />
                <stop offset="100%" stopColor="#0a1a20" />
              </linearGradient>
              <linearGradient id="hero-flame" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="#f6d365" />
                <stop offset="55%" stopColor="#d2601a" />
                <stop offset="100%" stopColor="#8f2f0c" />
              </linearGradient>
              <linearGradient id="hero-glow" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#d2601a" stopOpacity="0.55" />
                <stop offset="100%" stopColor="#d2601a" stopOpacity="0" />
              </linearGradient>
            </defs>
            <rect x="0" y="0" width="460" height="420" rx="30" fill="url(#hero-stone)" />
            <g opacity="0.5" stroke="#8fb8ae" strokeWidth="1.2">
              <path d="M0 96h460M0 178h460M0 262h460" />
              <path d="M92 96v82M232 96v82M340 178v84M150 262v90M300 262v90" />
            </g>
            <rect x="58" y="128" width="344" height="212" rx="16" fill="#071319" />
            <ellipse cx="230" cy="330" rx="190" ry="70" fill="url(#hero-glow)" />
            <g>
              <rect x="96" y="292" width="268" height="16" rx="6" fill="#2b1a12" />
              <rect x="116" y="276" width="228" height="14" rx="6" fill="#3a2317" transform="rotate(-2 230 283)" />
              <rect x="130" y="262" width="200" height="13" rx="6" fill="#241610" transform="rotate(3 230 268)" />
            </g>
            <path
              d="M230 128c34 40 58 62 58 96a58 58 0 0 1-116 0c0-34 24-56 58-96Z"
              fill="url(#hero-flame)"
              opacity="0.92"
            />
            <path d="M230 186c16 22 27 33 27 51a27 27 0 0 1-54 0c0-18 11-29 27-51Z" fill="#ffe6a3" opacity="0.85" />
            <g stroke="#8fb8ae" strokeWidth="4" strokeLinecap="round">
              <path d="M78 246h304" />
              <path d="M78 246v34M382 246v34" />
            </g>
            <g fill="#8fb8ae" opacity="0.9">
              <circle cx="120" cy="228" r="9" />
              <circle cx="150" cy="228" r="9" />
              <rect x="300" y="206" width="58" height="24" rx="10" />
              <rect x="252" y="196" width="16" height="34" rx="6" />
            </g>
            <g opacity="0.75">
              <rect x="58" y="88" width="344" height="12" rx="6" fill="#8fb8ae" />
              <circle cx="110" cy="66" r="12" fill="#f3ece0" opacity="0.55" />
              <circle cx="150" cy="60" r="8" fill="#f3ece0" opacity="0.4" />
              <circle cx="186" cy="68" r="6" fill="#f3ece0" opacity="0.3" />
            </g>
          </svg>
          <p className="relative mt-5 text-center text-xs uppercase tracking-[0.22em] text-[#f3ece0]/55">
            The hearth, 6:40 pm, mid-service
          </p>
        </div>
      </div>
    </section>
  )
}
