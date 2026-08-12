const SHOPS = [
  'Kestrel Mechanical',
  'Bowden & Sons Plumbing',
  'Northline Refrigeration',
  'Verdigris Air',
  'Tallgrass Service Co.',
]

const NUMBERS = [
  {
    figure: '51 min',
    label: 'less drive time per tech, per day',
    note: 'Median across 380 shops in their second quarter on Rivetwork.',
  },
  {
    figure: '94%',
    label: 'first-visit completion rate',
    note: 'Truck stock and job history reach the tech before the call does.',
  },
  {
    figure: '6.2 days',
    label: 'faster from final wrench to paid',
    note: 'Invoices leave the truck signed instead of leaving the office on Friday.',
  },
  {
    figure: '11 hrs',
    label: 'of dispatcher time back each week',
    note: 'One board, no re-keying between the whiteboard and the accounting system.',
  },
]

export default function TrustBar() {
  return (
    <section data-testid="trust-bar" className="border-b border-[#E4E8F2] bg-white">
      <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-20">
        <h2 className="text-center text-xs font-bold uppercase tracking-[0.2em] text-[#5B6577]">
          Dispatching every day at 2,140 shops across 41 states
        </h2>

        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {SHOPS.map((shop) => (
            <li key={shop} className="flex items-center gap-2.5">
              <svg viewBox="0 0 24 24" className="h-6 w-6" role="img" aria-label={`${shop} logo`}>
                <rect x="2" y="2" width="20" height="20" rx="6" fill="#E7ECF7" />
                <path
                  d="M7 15.5 12 7l5 8.5z"
                  fill="none"
                  stroke="#1F4FD8"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-sm font-bold tracking-tight text-[#3D4658]">{shop}</span>
            </li>
          ))}
        </ul>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {NUMBERS.map((item) => (
            <div key={item.figure} className="border-l-2 border-[#FF9F1C] pl-5">
              <p className="text-3xl font-black tracking-tight text-[#0A1220]">{item.figure}</p>
              <h3 className="mt-1 text-sm font-bold text-[#1F4FD8]">{item.label}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5B6577]">{item.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
