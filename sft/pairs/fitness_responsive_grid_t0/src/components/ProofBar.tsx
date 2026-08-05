const STATS = [
  { value: '312', label: 'members on the floor each week' },
  { value: '4.9', label: 'average across 268 Google reviews' },
  { value: '7 yrs', label: 'in the same Cavendish Lane warehouse' },
  { value: '86%', label: 'of trial weeks turn into memberships' },
]

const PARTNERS = [
  { name: 'Merri Creek Physiotherapy', kind: 'circle' as const },
  { name: 'Rowing Victoria', kind: 'wave' as const },
  { name: 'Brunswick Sports Medicine', kind: 'cross' as const },
  { name: 'Lyndon Barbell Club', kind: 'bar' as const },
]

function PartnerMark({ name, kind }: { name: string; kind: 'circle' | 'wave' | 'cross' | 'bar' }) {
  return (
    <li className="flex items-center gap-3" data-testid="partner">
      <svg viewBox="0 0 32 32" width="30" height="30" aria-hidden="true" className="shrink-0">
        <rect width="32" height="32" rx="9" fill="#e7e5e4" />
        {kind === 'circle' && (
          <>
            <circle cx="16" cy="16" r="8" fill="none" stroke="#78716c" strokeWidth="2.5" />
            <circle cx="16" cy="16" r="2.5" fill="#d97706" />
          </>
        )}
        {kind === 'wave' && (
          <path
            d="M6 20q5-8 10 0t10 0"
            fill="none"
            stroke="#78716c"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        )}
        {kind === 'cross' && (
          <>
            <rect x="13.5" y="7" width="5" height="18" rx="2" fill="#78716c" />
            <rect x="7" y="13.5" width="18" height="5" rx="2" fill="#d97706" />
          </>
        )}
        {kind === 'bar' && (
          <>
            <rect x="6" y="14.5" width="20" height="3" rx="1.5" fill="#78716c" />
            <rect x="8" y="10" width="4" height="12" rx="1.5" fill="#d97706" />
            <rect x="20" y="10" width="4" height="12" rx="1.5" fill="#d97706" />
          </>
        )}
      </svg>
      <span className="text-sm font-medium leading-tight text-stone-600">{name}</span>
    </li>
  )
}

export function ProofBar() {
  return (
    <section id="proof" className="border-b border-stone-200 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <h2 className="sr-only">Northline by the numbers</h2>

        <dl className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} data-testid="stat">
              <dt className="text-3xl font-black tracking-tight text-stone-900">{stat.value}</dt>
              <dd className="mt-2 text-sm leading-snug text-stone-500">{stat.label}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-12 border-t border-stone-200 pt-8">
          <h3 className="text-[11px] font-semibold uppercase tracking-[0.28em] text-stone-400">
            We work alongside
          </h3>
          <ul className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PARTNERS.map((partner) => (
              <PartnerMark key={partner.name} name={partner.name} kind={partner.kind} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
