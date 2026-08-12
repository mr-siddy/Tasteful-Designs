const TIERS = [
  {
    name: 'Ten-class card',
    price: '$290',
    cadence: 'one payment, twelve months to use it',
    pitch: 'For people whose shifts change every fortnight.',
    perks: [
      'Any class except Post-Op Reformer',
      'Shares with one household member',
      'Never expires while your card is active',
      'Book fourteen days ahead',
    ],
  },
  {
    name: 'Studio Eight',
    price: '$196',
    cadence: 'per month, cancel any month',
    pitch: 'Eight classes a month — the tier two thirds of members are on.',
    perks: [
      'Eight classes a month, any room',
      'Two rollover classes into the next month',
      'Loft open practice weekday afternoons',
      'Plan card re-measured every eight weeks',
      'Book twenty-one days ahead',
    ],
  },
  {
    name: 'Unlimited',
    price: '$268',
    cadence: 'per month, cancel any month',
    pitch: 'For four-plus sessions a week and everyone in Slow Strength.',
    perks: [
      'Every group class on the timetable',
      'One guest pass a month',
      'A 20% discount on Post-Op blocks',
      'Loft open practice, plus Sunday afternoons',
      'Book twenty-eight days ahead',
    ],
  },
]

export function MembershipTiers() {
  return (
    <section id="memberships" className="bg-[#152A22] text-[#F4EFE2]">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#E8A33F]">
            Memberships
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Three ways to pay, none of them a contract
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#C9C2B1]">
            You can cancel from the same page you signed up on, in about nine seconds, without
            speaking to anybody. We would rather you left honestly and came back in March than paid
            for a winter you never used.
          </p>
        </div>
        <ul data-testid="membership-tiers" className="mt-14 grid gap-6 lg:grid-cols-3">
          {TIERS.map((tier) => (
            <li
              key={tier.name}
              className="flex flex-col rounded-3xl border border-white/15 bg-white/[0.04] p-8"
            >
              <h3 className="text-xl font-semibold tracking-tight">{tier.name}</h3>
              <p className="mt-4 text-4xl font-semibold tracking-tight text-[#E8A33F]">
                {tier.price}
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.14em] text-[#A7A091]">
                {tier.cadence}
              </p>
              <p className="mt-5 text-sm leading-relaxed text-[#C9C2B1]">{tier.pitch}</p>
              <ul className="mt-6 flex-1 space-y-3">
                {tier.perks.map((perk) => (
                  <li key={perk} className="flex gap-3 text-sm text-[#E7E1D4]">
                    <svg viewBox="0 0 20 20" className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true">
                      <path
                        d="M4 11 L8 15 L16 5"
                        fill="none"
                        stroke="#E8A33F"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                    </svg>
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#visit"
                className="mt-8 rounded-full border border-[#E8A33F] px-6 py-3 text-center text-sm font-semibold text-[#E8A33F]"
              >
                Start with {tier.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
