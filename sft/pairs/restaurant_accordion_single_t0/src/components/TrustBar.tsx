type Credential = {
  id: string
  headline: string
  detail: string
  icon: 'leaf' | 'star' | 'anchor' | 'clock'
}

const CREDENTIALS: Credential[] = [
  {
    id: 'guide',
    headline: 'Harbour Guide, two flames',
    detail: 'Held since 2023 for "cooking that tastes of the boat it came off".',
    icon: 'leaf',
  },
  {
    id: 'rating',
    headline: '4.8 from 1,240 diners',
    detail: 'Averaged across the booking book and the harbour review board.',
    icon: 'star',
  },
  {
    id: 'boats',
    headline: 'Twelve day boats, no wholesaler',
    detail: 'We buy off the quay six mornings a week and print the boat names.',
    icon: 'anchor',
  },
  {
    id: 'years',
    headline: 'Nine years on the quay',
    detail: 'Same room, same hearth, and eleven of us who have been here five years or more.',
    icon: 'clock',
  },
]

function CredentialIcon({ icon }: { icon: Credential['icon'] }) {
  const shared = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  }
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 text-[#C4472A]">
      {icon === 'leaf' && <path d="M20 4c0 9-5 14-13 14H4c0-9 5-14 13-14ZM4 20c4-6 8-8 12-9" {...shared} />}
      {icon === 'star' && (
        <path d="m12 3 2.7 5.6 6.3.9-4.5 4.3 1 6.2-5.5-3-5.5 3 1-6.2L3 9.5l6.3-.9Z" {...shared} />
      )}
      {icon === 'anchor' && (
        <>
          <circle cx="12" cy="5" r="2.4" {...shared} />
          <path d="M12 7.4V21M5 13a7 7 0 0 0 14 0M8 10h8" {...shared} />
        </>
      )}
      {icon === 'clock' && (
        <>
          <circle cx="12" cy="12" r="8.5" {...shared} />
          <path d="M12 7v5.4l3.4 2" {...shared} />
        </>
      )}
    </svg>
  )
}

export function TrustBar() {
  return (
    <section aria-labelledby="trust-heading" className="border-b border-[#E4DACB] bg-[#F3EADC]">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 id="trust-heading" className="text-2xl font-semibold tracking-tight text-[#123C43]">
            What the room has earned
          </h2>
          <div className="flex items-center gap-2" data-testid="rating-stars">
            {[0, 1, 2, 3, 4].map((i) => (
              <svg key={i} viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 text-[#E08A3C]">
                <path
                  d="m12 3 2.7 5.6 6.3.9-4.5 4.3 1 6.2-5.5-3-5.5 3 1-6.2L3 9.5l6.3-.9Z"
                  fill="currentColor"
                />
              </svg>
            ))}
            <span className="ml-1 text-sm font-medium text-[#4A423A]">4.8 average</span>
          </div>
        </div>

        <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {CREDENTIALS.map((item) => (
            <li key={item.id} data-testid="credential" className="flex gap-4">
              <span className="mt-0.5 flex h-11 w-11 flex-none items-center justify-center rounded-full bg-[#FAF6EF] ring-1 ring-[#E4DACB]">
                <CredentialIcon icon={item.icon} />
              </span>
              <span>
                <h3 className="text-base font-semibold tracking-tight text-[#171310]">
                  {item.headline}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[#6B6155]">{item.detail}</p>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
