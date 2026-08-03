const HERO_STATS = [
  { value: '11 min', label: 'median dispatch to accepted' },
  { value: '4,100', label: 'trucks on the board each morning' },
  { value: '2.4 days', label: 'faster to paid invoice' },
]

export default function Hero() {
  return (
    <section
      id="hero"
      className="border-b border-[#EADFCF] bg-gradient-to-b from-[#FBF6EE] via-[#F7EFE2] to-[#FBF6EE]"
    >
      <div className="mx-auto grid max-w-6xl gap-14 px-6 py-20 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:py-24">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-[#EADFCF] bg-white px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#0E6A66]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#0E6A66]" />
            Field service software
          </p>
          <h1 className="mt-6 text-[2.6rem] font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]">
            Every truck, every part, every invoice — on one board.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#3D555F]">
            Copperline is dispatch, van stock and invoicing for shops running one to forty trucks. Your dispatcher drags
            a call onto a truck, the technician's phone updates before they finish backing out of the last driveway, and
            the invoice is paid at the curb instead of on Thursday night at the kitchen table.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#walkthrough"
              data-testid="hero-cta"
              className="rounded-xl bg-[#12242C] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-[#12242C]/20 transition hover:bg-[#1d3a45]"
            >
              Book a 20-minute walkthrough
            </a>
            <a
              href="#pricing"
              data-testid="hero-secondary-cta"
              className="rounded-xl border border-[#12242C]/20 px-7 py-4 text-sm font-semibold text-[#12242C] transition hover:border-[#12242C]/60 hover:bg-white"
            >
              See plans and pricing
            </a>
          </div>
          <p className="mt-5 text-sm text-[#6A7F87]">
            No card to start. Import last season's job history in an afternoon. Cancel any month, keep your data.
          </p>

          <dl className="mt-10 grid gap-6 border-t border-[#EADFCF] pt-8 sm:grid-cols-3">
            {HERO_STATS.map((stat) => (
              <div key={stat.label}>
                <dt className="text-2xl font-bold tracking-tight text-[#C25A2B]">{stat.value}</dt>
                <dd className="mt-1 text-sm leading-snug text-[#3D555F]">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-[#E8813F]/25 via-[#0E6A66]/10 to-transparent blur-2xl" />
          <svg viewBox="0 0 460 380" className="w-full rounded-3xl border border-[#EADFCF] bg-white shadow-xl" role="img" aria-label="Copperline dispatch board with four trucks scheduled through the morning">
            <rect x="0" y="0" width="460" height="380" rx="22" fill="#FFFFFF" />
            <rect x="0" y="0" width="460" height="52" rx="22" fill="#12242C" />
            <rect x="0" y="34" width="460" height="18" fill="#12242C" />
            <circle cx="26" cy="26" r="6" fill="#E8813F" />
            <text x="44" y="31" fill="#FBF6EE" fontSize="14" fontFamily="sans-serif" fontWeight="600">
              Tuesday · 6 calls open
            </text>
            <text x="330" y="31" fill="#8FB0AE" fontSize="12" fontFamily="sans-serif">
              4 trucks rolling
            </text>

            {[0, 1, 2, 3].map((row) => (
              <g key={row} transform={`translate(0 ${76 + row * 74})`}>
                <rect x="18" y="0" width="424" height="58" rx="12" fill="#FBF6EE" stroke="#EADFCF" />
                <circle cx="48" cy="29" r="13" fill={row === 1 ? '#0E6A66' : '#C25A2B'} opacity="0.14" />
                <circle cx="48" cy="29" r="5" fill={row === 1 ? '#0E6A66' : '#C25A2B'} />
                <rect x="74" y="16" width={132 - row * 14} height="9" rx="4.5" fill="#12242C" opacity="0.8" />
                <rect x="74" y="34" width={186 - row * 22} height="8" rx="4" fill="#12242C" opacity="0.32" />
                <rect x="320" y="19" width="102" height="22" rx="11" fill={row === 1 ? '#0E6A66' : '#12242C'} opacity="0.1" />
                <text
                  x="371"
                  y="34"
                  textAnchor="middle"
                  fontSize="11"
                  fontFamily="sans-serif"
                  fontWeight="600"
                  fill={row === 1 ? '#0E6A66' : '#3D555F'}
                >
                  {['Accepted', 'On site', 'Quoted', 'Paid'][row]}
                </text>
              </g>
            ))}
          </svg>
          <p className="mt-4 text-center text-xs uppercase tracking-[0.2em] text-[#6A7F87]">
            The dispatch board · Whitlock Heating &amp; Air, 7:40am
          </p>
        </div>
      </div>
    </section>
  )
}
