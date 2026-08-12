const NUMBERS = [
  { value: '612', label: 'members on the books this season' },
  { value: '8:1', label: 'the hard cap on every group class' },
  { value: '9 yrs', label: 'the room has been open on Almond Court' },
  { value: '4.9', label: 'average of 288 written member reviews' },
]

const CREDENTIALS = [
  'Meridian Reformer Certification',
  'New England Movement Therapy Alliance',
  'Blackstone General referral partner',
  'Cobbler’s Hill Small Business Guild',
]

function CredentialMark({ index }: { index: number }) {
  const glyphs = [
    <path key="a" d="M6 18 L14 6 L22 18 Z" fill="none" stroke="#24493B" strokeWidth="2" />,
    <circle key="b" cx="14" cy="12" r="7" fill="none" stroke="#24493B" strokeWidth="2" />,
    <path key="c" d="M6 12 L12 18 L22 6" fill="none" stroke="#24493B" strokeWidth="2" />,
    <rect key="d" x="6" y="5" width="16" height="14" rx="4" fill="none" stroke="#24493B" strokeWidth="2" />,
  ]
  return (
    <svg viewBox="0 0 28 24" className="h-6 w-7 shrink-0" aria-hidden="true">
      {glyphs[index % glyphs.length]}
    </svg>
  )
}

export function TrustBar() {
  return (
    <section id="proof" className="border-y border-[#E3D6BE] bg-[#FFFCF5]">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <h2 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#C2571F]">
          What the room actually is
        </h2>
        <dl className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {NUMBERS.map((item) => (
            <div key={item.value} className="border-l-2 border-[#C2571F] pl-4">
              <dt className="text-4xl font-semibold tracking-tight">{item.value}</dt>
              <dd className="mt-2 text-sm leading-snug text-[#6B6455]">{item.label}</dd>
            </div>
          ))}
        </dl>
        <ul className="mt-12 grid gap-4 border-t border-[#EFE4CE] pt-8 sm:grid-cols-2 lg:grid-cols-4">
          {CREDENTIALS.map((credential, index) => (
            <li key={credential} className="flex items-center gap-3 text-sm text-[#4A4436]">
              <CredentialMark index={index} />
              <span>{credential}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
