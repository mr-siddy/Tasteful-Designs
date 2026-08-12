const STATS = [
  { value: '4.8', label: 'Average of 1,240 guest reviews' },
  { value: '#3', label: 'Ashgrove Register — best new tables of the year' },
  { value: '11', label: 'Plates that have never once left the board' },
  { value: '38', label: 'Seats held back for walk-ins every night' },
]

const PRESS = [
  {
    quote:
      'The cumin lamb skewers alone justify the queue, and the queue is part of the point. Nobody here is pretending dinner is a quiet activity.',
    source: 'The Ashgrove Register',
  },
  {
    quote:
      'Wen Tso-lin cooks with the volume up. Her mapo tofu is the most confident plate of food served in this city after midnight.',
    source: 'Harbour & Lane Quarterly',
  },
]

function Stars() {
  return (
    <span className="flex items-center gap-1" aria-hidden="true">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-4 w-4 fill-[#F5A623]">
          <path d="M10 1.6l2.5 5.2 5.7.8-4.1 4 1 5.7-5.1-2.7-5.1 2.7 1-5.7-4.1-4 5.7-.8z" />
        </svg>
      ))}
    </span>
  )
}

export function ProofBar() {
  return (
    <section id="proof" className="border-y border-[#E4572E]/20 bg-[#1D1512]">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="text-center text-[11px] font-semibold uppercase tracking-[0.35em] text-[#E4572E]">
          Word has got around the lane
        </h2>

        <div data-testid="stat-grid" className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.value} data-testid="stat-tile" className="text-center md:text-left">
              <p className="font-serif text-4xl font-semibold text-[#FBF5EC]">{stat.value}</p>
              <p className="mt-2 text-sm leading-relaxed text-[#FBF5EC]/60">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {PRESS.map((item) => (
            <figure
              key={item.source}
              data-testid="press-quote"
              className="rounded-2xl border border-white/10 bg-[#241B18] p-6"
            >
              <Stars />
              <blockquote className="mt-4 font-serif text-lg italic leading-relaxed text-[#FBF5EC]/85">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-xs uppercase tracking-[0.25em] text-[#2F7A6B]">
                {item.source}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
