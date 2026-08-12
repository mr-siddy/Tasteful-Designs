const PARTNERS = [
  'Ninth Street Land Trust',
  'Harbor Commons Housing',
  'Piedmont Mutual Homes',
  'Wabash Neighborhood Trust',
  'Saltmarsh Community Homes',
]

const NUMBERS = [
  { value: '148', label: 'nonprofits and land trusts on Rooftree' },
  { value: '31', label: 'states with at least one portfolio' },
  { value: '$41M', label: 'in grant funds reported through the export tool last year' },
  { value: '4.9 / 5', label: 'average rating from housing directors after year one' },
]

export default function TrustBar() {
  return (
    <section id="trust" className="border-b border-[#DDE3F0] bg-white">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-[#6B7690]">
          Stewarding permanently affordable housing with Rooftree
        </h2>

        <ul className="mt-8 grid grid-cols-2 items-center gap-6 md:grid-cols-5">
          {PARTNERS.map((partner, position) => (
            <li key={partner} data-testid="partner-logo" className="flex flex-col items-center gap-2 text-center">
              <svg viewBox="0 0 48 48" className="h-9 w-9" role="img" aria-label={partner}>
                <rect x="2" y="2" width="44" height="44" rx="13" fill="#F4F6FB" stroke="#DDE3F0" />
                {position % 3 === 0 && (
                  <path d="M14 28 24 16l10 12v6H14z" fill="none" stroke="#3D4EE0" strokeWidth="2.4" strokeLinejoin="round" />
                )}
                {position % 3 === 1 && (
                  <g fill="none" stroke="#0E8F6F" strokeWidth="2.4" strokeLinecap="round">
                    <path d="M15 33h18" />
                    <path d="M19 33V21l5-5 5 5v12" />
                  </g>
                )}
                {position % 3 === 2 && (
                  <g fill="none" stroke="#131A2A" strokeWidth="2.2" strokeLinejoin="round">
                    <circle cx="24" cy="24" r="9" />
                    <path d="M24 15v18M15 24h18" />
                  </g>
                )}
              </svg>
              <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#4B5670]">{partner}</span>
            </li>
          ))}
        </ul>

        <dl className="mt-12 grid gap-8 border-t border-[#DDE3F0] pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {NUMBERS.map((item) => (
            <div key={item.label} data-testid="trust-stat">
              <dt className="text-3xl font-bold tracking-tight text-[#131A2A]">{item.value}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-[#4B5670]">{item.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
