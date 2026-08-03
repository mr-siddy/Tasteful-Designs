const SHOPS = [
  { name: 'Whitlock Heating & Air', city: 'Kalamazoo, MI' },
  { name: 'Ferrer Plumbing Co.', city: 'Toledo, OH' },
  { name: 'Northgate Electric', city: 'Fort Wayne, IN' },
  { name: 'Ridgeway Mechanical', city: 'Peoria, IL' },
  { name: 'Bell & Cutler HVAC', city: 'Dayton, OH' },
  { name: 'Sawtooth Refrigeration', city: 'Rockford, IL' },
]

const NUMBERS = [
  { value: '1,180', label: 'shops on the board' },
  { value: '94%', label: 'first-visit fix rate' },
  { value: '$2.1M', label: 'van stock recovered in 2025' },
  { value: '18 days', label: 'average receivable, down from 41' },
]

export default function TrustBar() {
  return (
    <section id="proof" className="border-b border-[#EADFCF] bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-center text-xs font-semibold uppercase tracking-[0.24em] text-[#6A7F87]">
          Dispatching for shops from Kalamazoo to Peoria
        </h2>

        <ul className="mt-9 grid grid-cols-2 gap-x-6 gap-y-7 sm:grid-cols-3 lg:grid-cols-6">
          {SHOPS.map((shop) => (
            <li key={shop.name} data-testid="customer-logo" className="flex flex-col items-center gap-2 text-center">
              <svg viewBox="0 0 48 48" className="h-8 w-8" aria-hidden="true" focusable="false">
                <rect x="4" y="4" width="40" height="40" rx="12" fill="#12242C" opacity="0.06" />
                <path d="M14 32V22l10-8 10 8v10" stroke="#12242C" strokeWidth="2.6" fill="none" strokeLinejoin="round" />
                <path d="M21 32v-7h6v7" stroke="#C25A2B" strokeWidth="2.6" fill="none" strokeLinejoin="round" />
              </svg>
              <span className="text-sm font-semibold leading-tight text-[#12242C]">{shop.name}</span>
              <span className="text-xs text-[#6A7F87]">{shop.city}</span>
            </li>
          ))}
        </ul>

        <dl className="mt-14 grid gap-8 rounded-2xl border border-[#EADFCF] bg-[#FBF6EE] p-8 sm:grid-cols-2 lg:grid-cols-4">
          {NUMBERS.map((item) => (
            <div key={item.label}>
              <dt className="text-3xl font-bold tracking-tight text-[#12242C]">{item.value}</dt>
              <dd className="mt-1.5 text-sm leading-snug text-[#3D555F]">{item.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
