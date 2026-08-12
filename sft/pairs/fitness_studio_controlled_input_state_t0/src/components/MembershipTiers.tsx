const TIERS = [
  {
    name: 'Two a week',
    price: '$62',
    cadence: 'per week, month to month',
    pitch: 'Enough to get properly strong if you keep showing up, and the tier most people start on after the trial.',
    features: [
      'Two coached sessions each week',
      'Your written four-week block',
      'The twenty-minute review every fourth week',
      'Open platform access on Saturdays',
    ],
    featured: false,
  },
  {
    name: 'Strength Hall',
    price: '$89',
    cadence: 'per week, month to month',
    pitch: 'Unlimited coached sessions across every program. Two thirds of the club is on this one and it is why the timetable is so wide.',
    features: [
      'Unlimited coached sessions, any program',
      'Your written four-week block',
      'The twenty-minute review every fourth week',
      'Free loan shoes, chalk and a locker',
      'Two guest passes a quarter',
    ],
    featured: true,
  },
  {
    name: 'Hall plus one-to-one',
    price: '$148',
    cadence: 'per week, month to month',
    pitch: 'Everything above plus a private hour a fortnight with Priya or Tobias, for a competition, a comeback or a stubborn lift.',
    features: [
      'Everything in Strength Hall',
      'A private hour every second week',
      'Video review of your main lifts',
      'Direct line to your coach between blocks',
    ],
    featured: false,
  },
]

export function MembershipTiers() {
  return (
    <section id="membership" className="bg-[#F4F1EA]">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="max-w-2xl">
          <p className="text-[11px] font-black uppercase tracking-[0.28em] text-[#D9622B]">
            Membership
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
            Three tiers, no contract, cancel in one email
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#4C5B54]">
            Billed weekly, pause it for free while you travel, and we will never charge you a
            joining fee to hand you a program we were going to write anyway.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {TIERS.map((tier) => (
            <div
              key={tier.name}
              data-testid="membership-tier"
              className={
                tier.featured
                  ? 'relative flex flex-col rounded-3xl border-2 border-[#10161C] bg-white p-8 shadow-xl'
                  : 'relative flex flex-col rounded-3xl border border-[#10161C]/12 bg-white p-8'
              }
            >
              {tier.featured ? (
                <span className="absolute -top-3 left-8 rounded-full bg-[#C7F04A] px-4 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-[#10161C]">
                  Most chosen
                </span>
              ) : null}

              <h3 className="text-lg font-black tracking-tight">{tier.name}</h3>
              <p className="mt-3 flex items-baseline gap-2">
                <span className="text-4xl font-black tracking-tight">{tier.price}</span>
                <span className="text-xs uppercase tracking-[0.12em] text-[#6E7A72]">
                  {tier.cadence}
                </span>
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[#4C5B54]">{tier.pitch}</p>

              <ul className="mt-6 flex-1 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm text-[#2A3630]">
                    <svg viewBox="0 0 20 20" className="mt-0.5 h-4 w-4 shrink-0 text-[#D9622B]" aria-hidden="true">
                      <path
                        d="M4 10.5l4 4 8-9"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#trial"
                data-testid="tier-cta"
                className={
                  tier.featured
                    ? 'mt-8 rounded-full bg-[#10161C] px-6 py-3 text-center text-sm font-black uppercase tracking-wide text-[#F4F1EA]'
                    : 'mt-8 rounded-full border border-[#10161C]/25 px-6 py-3 text-center text-sm font-bold transition-colors hover:border-[#10161C]'
                }
              >
                Start with the trial
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
