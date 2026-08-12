const NUMBERS = [
  {
    value: '612',
    caption: 'members, of whom 214 have trained here longer than three years',
  },
  {
    value: '91%',
    caption: 'of people who finish the eight week on-ramp are still training at month twelve',
  },
  {
    value: '0',
    caption: 'sessions run without a coach on the floor since the doors opened in 2014',
  },
  {
    value: '38',
    caption: 'members referred by their physical therapist or their GP last year',
  },
]

const PARTNERS = [
  'Frankford Physical Therapy',
  'Kensington Family Practice',
  'Delaware Rowing Collective',
  'Girard Fire Company 12',
  'Fishtown Ceramics Co-op',
  'SEPTA Local 234 Retirees',
]

export default function ProofBar() {
  return (
    <section className="border-y border-[#12141A]/10 bg-[#F7F3EC]">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-[#12141A]/50">
          What the room actually looks like on a Tuesday
        </h2>
        <dl className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {NUMBERS.map((item) => (
            <div key={item.value + item.caption} data-testid="proof-stat">
              <dt className="text-4xl font-black tracking-tight text-[#12141A]">{item.value}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-[#12141A]/65">{item.caption}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-12 border-t border-[#12141A]/10 pt-8">
          <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-[#12141A]/45">
            Who sends people to us
          </h3>
          <ul className="mt-5 flex flex-wrap items-center gap-x-8 gap-y-4">
            {PARTNERS.map((partner) => (
              <li
                key={partner}
                data-testid="partner-mark"
                className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.1em] text-[#12141A]/55"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#E1552B]" aria-hidden focusable="false">
                  <rect x="2" y="10" width="20" height="4" rx="2" fill="currentColor" />
                  <rect x="4" y="6" width="4" height="12" rx="1.6" fill="currentColor" />
                  <rect x="16" y="6" width="4" height="12" rx="1.6" fill="currentColor" />
                </svg>
                {partner}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
