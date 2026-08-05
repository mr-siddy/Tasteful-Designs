const RESULTS = [
  { value: '41 → 18', label: 'days to collect an invoice' },
  { value: '+22%', label: 'average residential ticket' },
  { value: '6 → 11', label: 'trucks, same dispatch desk' },
]

export default function CaseStudy() {
  return (
    <section id="story" className="border-b border-[#EADFCF] bg-[#FBF6EE]">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#C25A2B]">Customer story</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-[2.7rem]">
              Whitlock Heating &amp; Air went from six trucks to eleven without hiring a second dispatcher
            </h2>
            <p className="mt-6 leading-relaxed text-[#3D555F]">
              Dana Whitlock took over her father's shop in 2019 with six trucks, a whiteboard and a filing cabinet of
              maintenance agreements nobody had opened since the previous spring. The board worked until the July it
              didn't: two techs drove past each other on the same street, a third sat in a driveway for ninety minutes
              waiting on a part that was already in Truck 4, and the office was still invoicing the previous week.
            </p>
            <p className="mt-4 leading-relaxed text-[#3D555F]">
              They imported eleven years of job history into Copperline in a single afternoon in March, ran a shadow week
              against the whiteboard, and went live before the first ninety-degree day. Two seasons later the shop runs
              eleven trucks off the same desk, the agreement book is worth three times what it was because renewals stop
              slipping through, and Dana closes the month on the second, not the fifteenth.
            </p>

            <dl className="mt-10 grid gap-6 border-t border-[#EADFCF] pt-8 sm:grid-cols-3">
              {RESULTS.map((result) => (
                <div key={result.label} data-testid="case-metric">
                  <dt className="text-3xl font-bold tracking-tight text-[#0E6A66]">{result.value}</dt>
                  <dd className="mt-1.5 text-sm leading-snug text-[#3D555F]">{result.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <figure className="rounded-3xl border border-[#EADFCF] bg-white p-8 shadow-sm">
            <svg viewBox="0 0 320 200" className="w-full" role="img" aria-label="Chart of Whitlock Heating and Air's collection time falling from 41 days to 18 across one season">
              <rect width="320" height="200" rx="16" fill="#FBF6EE" />
              {[0, 1, 2, 3, 4, 5].map((index) => {
                const heights = [128, 118, 96, 74, 61, 52]
                return (
                  <g key={index}>
                    <rect
                      x={30 + index * 46}
                      y={162 - heights[index]}
                      width="26"
                      height={heights[index]}
                      rx="7"
                      fill={index > 2 ? '#0E6A66' : '#C25A2B'}
                      opacity={index > 2 ? 0.85 : 0.55}
                    />
                    <text x={43 + index * 46} y="180" textAnchor="middle" fontSize="10" fontFamily="sans-serif" fill="#6A7F87">
                      {['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'][index]}
                    </text>
                  </g>
                )
              })}
              <line x1="20" y1="162" x2="300" y2="162" stroke="#EADFCF" strokeWidth="2" />
            </svg>
            <figcaption className="mt-5 text-sm text-[#6A7F87]">
              Days to collect, March through August 2025. The green months are the ones after invoicing moved onto the
              truck.
            </figcaption>
            <blockquote className="mt-7 border-t border-[#EADFCF] pt-7">
              <p className="text-lg font-medium leading-relaxed text-[#12242C]">
                “I stopped being the bottleneck. The board tells my dispatcher what I used to have to walk over and tell
                her, and I get my Sundays back.”
              </p>
              <p className="mt-4 text-sm text-[#6A7F87]">
                <span className="font-semibold text-[#12242C]">Dana Whitlock</span> · Owner, Whitlock Heating &amp; Air,
                Kalamazoo
              </p>
            </blockquote>
          </figure>
        </div>
      </div>
    </section>
  )
}
