const CLIENTS = [
  { name: 'Halverson Freight Group', city: 'Tacoma' },
  { name: 'Bay Point Logistics', city: 'Long Beach' },
  { name: 'Meridian Drayage', city: 'Savannah' },
  { name: 'Kolstad & Reyes Customs', city: 'Newark' },
  { name: 'Cascadia Forwarding', city: 'Portland' },
]

const NUMBERS = [
  { value: '18,400', label: 'Entries filed through Portway in 2025' },
  { value: '$0', label: 'Late-ISF penalties across customer accounts last year' },
  { value: '31 hrs', label: 'Average lead time gained on the ISF deadline' },
]

export function TrustBar() {
  return (
    <section className="border-b border-[#0B1F33]/10 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="text-center text-[11px] font-semibold uppercase tracking-[0.3em] text-[#7C8FA2]">
          Filing today on Portway
        </h2>

        <ul className="mt-9 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {CLIENTS.map((client) => (
            <li key={client.name} data-testid="client-logo" className="text-center">
              <svg viewBox="0 0 56 56" aria-hidden="true" className="mx-auto h-11 w-11">
                <rect x="2" y="2" width="52" height="52" rx="16" fill="#0B1F33" opacity="0.06" />
                <path
                  d="M18 38V19h10a5.5 5.5 0 010 11h-6"
                  fill="none"
                  stroke="#0D6E8C"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                />
                <circle cx="37" cy="36" r="3" fill="#F2A03D" />
              </svg>
              <p className="mt-3 text-sm font-semibold leading-snug text-[#0B1F33]">{client.name}</p>
              <p className="mt-1 text-xs text-[#7C8FA2]">{client.city}</p>
            </li>
          ))}
        </ul>

        <dl className="mt-14 grid gap-8 border-t border-[#0B1F33]/10 pt-10 sm:grid-cols-3">
          {NUMBERS.map((item) => (
            <div key={item.label} data-testid="trust-stat">
              <dt className="text-3xl font-semibold tracking-tight text-[#0D6E8C]">{item.value}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-[#42566B]">{item.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
