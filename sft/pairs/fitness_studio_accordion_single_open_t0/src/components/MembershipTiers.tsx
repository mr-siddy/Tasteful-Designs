const TIERS = [
  {
    name: 'Mornings',
    price: '$130',
    note: 'per month',
    summary: 'Any coached session that starts before ten, plus the loft all week.',
    features: [
      'Five morning hours a week',
      'Recovery loft, seven days',
      'Written six-week plan',
      'Block review with your coach',
    ],
    featured: false,
  },
  {
    name: 'Full floor',
    price: '$210',
    note: 'per month',
    summary: 'Everything on the timetable, the loft, and a quarterly retest of your numbers.',
    features: [
      'Unlimited coached sessions',
      'Recovery loft, seven days',
      'Quarterly strength retest',
      'Two guest passes a month',
      'Open platform on Sundays',
    ],
    featured: true,
  },
  {
    name: 'Pair',
    price: '$340',
    note: 'per month, two people',
    summary: 'Two full-floor memberships on one bill, for the household that trains together.',
    features: [
      'Two full-floor memberships',
      'Shared onboarding block',
      'Coordinated timetables',
      'One bill, one renewal date',
    ],
    featured: false,
  },
]

export function MembershipTiers() {
  return (
    <section id="membership" className="bg-[#0B241E] text-[#FBF7F1]">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="max-w-2xl">
          <p className="text-[11px] uppercase tracking-[0.28em] text-[#E8A33D]">Membership</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight">
            Month to month, cancel with a fortnight's notice
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#BFD2C9]">
            No joining fee, no annual contract, no freeze charge if you break an ankle skiing. Pause
            for a month, come back to the same coach and the same plan where you left it.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {TIERS.map((t) => (
            <article
              key={t.name}
              data-testid="tier-card"
              className={`flex flex-col rounded-3xl border p-8 ${
                t.featured
                  ? 'border-[#E8A33D] bg-[#123B31] shadow-2xl shadow-black/30'
                  : 'border-[#2F6B57] bg-[#0B241E]'
              }`}
            >
              {t.featured && (
                <span className="mb-4 inline-block w-fit rounded-full bg-[#E8A33D] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#1B1A17]">
                  Most members choose this
                </span>
              )}
              <h3 className="text-xl font-semibold tracking-tight">{t.name}</h3>
              <p className="mt-4 flex items-baseline gap-2">
                <span className="text-4xl font-semibold tracking-tight text-[#E8A33D]">
                  {t.price}
                </span>
                <span className="text-xs uppercase tracking-wider text-[#8FB3A4]">{t.note}</span>
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[#BFD2C9]">{t.summary}</p>
              <ul className="mt-6 flex-1 space-y-3 border-t border-[#2F6B57] pt-6 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-[#DCE7E1]">
                    <svg viewBox="0 0 20 20" className="mt-0.5 h-4 w-4 flex-none" aria-hidden="true">
                      <path
                        d="M4 10.4l3.4 3.4L16 5.4"
                        fill="none"
                        stroke="#E8A33D"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#start"
                data-testid="tier-cta"
                className={`mt-8 rounded-full px-6 py-3 text-center text-sm font-semibold transition ${
                  t.featured
                    ? 'bg-[#E8A33D] text-[#1B1A17] hover:bg-[#F2B441]'
                    : 'border border-[#8FB3A4] text-[#FBF7F1] hover:bg-[#FBF7F1]/10'
                }`}
              >
                Start with {t.name}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
