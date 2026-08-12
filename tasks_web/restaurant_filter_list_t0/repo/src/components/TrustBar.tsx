const CREDENTIALS = [
  {
    title: 'Nashville Scene',
    detail: 'Restaurant of the Year, 2024',
  },
  {
    title: 'Southern Foodways',
    detail: 'Hearth cooking symposium host, 2023 and 2025',
  },
  {
    title: 'Tennessee Grown',
    detail: 'Certified — 82% of spend inside the state',
  },
  {
    title: 'James Beard Foundation',
    detail: 'Semifinalist, Best Chef Southeast — Nell Kavanagh',
  },
]

const NUMBERS = [
  { value: '4.8', label: 'Average of 1,240 guest reviews' },
  { value: '11', label: 'Farms, mills and boats we buy from' },
  { value: '2.5t', label: 'Split white oak burned each year' },
  { value: '0', label: 'Gas burners in the building' },
]

export function TrustBar() {
  return (
    <section aria-labelledby="proof-heading" className="border-b border-[#241C17]/10 bg-[#241C17] text-[#FBF6EE]">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <h2 id="proof-heading" className="text-sm font-bold uppercase tracking-[0.22em] text-[#F2A65A]">
          What people keep saying about the room
        </h2>

        <div className="mt-9 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {CREDENTIALS.map((item) => (
            <div key={item.title} className="flex gap-3">
              <svg viewBox="0 0 24 24" className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" focusable="false">
                <path
                  d="M12 3l2.5 5.2 5.5.8-4 3.9 1 5.6-5-2.7-5 2.7 1-5.6-4-3.9 5.5-.8z"
                  fill="#F2A65A"
                />
              </svg>
              <div>
                <h3 className="text-sm font-black tracking-tight">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-[#D9CDBE]">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <dl className="mt-12 grid gap-8 border-t border-[#FBF6EE]/15 pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {NUMBERS.map((stat) => (
            <div key={stat.label}>
              <dt className="text-4xl font-black tracking-tight text-[#F2A65A]">{stat.value}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-[#D9CDBE]">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
