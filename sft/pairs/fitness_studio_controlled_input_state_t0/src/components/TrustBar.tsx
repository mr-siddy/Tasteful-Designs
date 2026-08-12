const CREDENTIALS = [
  {
    figure: '9 years',
    line: 'Coaching on the same street corner, through two floods and one very bad winter.',
  },
  {
    figure: '4.9 / 5',
    line: 'Across 318 member reviews collected at the six-month check-in, not at the front desk.',
  },
  {
    figure: '61%',
    line: 'Of members came to us having never touched a barbell before their trial fortnight.',
  },
  {
    figure: '0',
    line: 'Lock-in contracts. Membership is month to month and you cancel it in one email.',
  },
]

const PARTNERS = [
  'Kemp Street Physiotherapy',
  'Ashgrove Rowing Club',
  'Marrow & Fig Kitchen',
  'Northfield Fire Brigade',
]

function PartnerGlyph({ index }: { index: number }) {
  const shapes = [
    <path key="a" d="M6 24 L16 6 L26 24 Z" fill="none" stroke="currentColor" strokeWidth="2.4" />,
    <circle key="b" cx="16" cy="16" r="10" fill="none" stroke="currentColor" strokeWidth="2.4" />,
    <rect key="c" x="6" y="6" width="20" height="20" rx="5" fill="none" stroke="currentColor" strokeWidth="2.4" />,
    <path key="d" d="M6 16 H26 M16 6 V26" fill="none" stroke="currentColor" strokeWidth="2.4" />,
  ]
  return (
    <svg viewBox="0 0 32 32" className="h-7 w-7 text-[#6E7A72]" role="img" aria-label="Partner mark">
      {shapes[index % shapes.length]}
    </svg>
  )
}

export function TrustBar() {
  return (
    <section id="proof" className="border-b border-[#10161C]/10 bg-[#EAE5DA]">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="text-center text-xs font-black uppercase tracking-[0.32em] text-[#6E7A72]">
          What nine years on Kemp Street looks like
        </h2>

        <dl className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {CREDENTIALS.map((item) => (
            <div key={item.figure} className="rounded-2xl border border-[#10161C]/10 bg-[#F4F1EA] p-6">
              <dt className="text-3xl font-black tracking-tight text-[#10161C]">{item.figure}</dt>
              <dd className="mt-3 text-sm leading-relaxed text-[#4C5B54]">{item.line}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#6E7A72]">
            We train alongside
          </p>
          {PARTNERS.map((partner, index) => (
            <div key={partner} className="flex items-center gap-2.5">
              <PartnerGlyph index={index} />
              <span className="text-sm font-semibold text-[#4C5B54]">{partner}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
