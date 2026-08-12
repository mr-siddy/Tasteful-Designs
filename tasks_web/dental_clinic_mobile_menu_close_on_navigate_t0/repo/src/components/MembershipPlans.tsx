const PLANS = [
  {
    name: 'Kilnwood Basic',
    price: '$29',
    cadence: 'per month',
    summary: 'For people whose teeth are fine and who want to keep it that way.',
    popular: false,
    perks: [
      'Two exams a year with x-rays',
      'Two hygienist cleans a year',
      '10% off any treatment you need',
      'Emergency appointment fee waived once a year',
    ],
  },
  {
    name: 'Kilnwood Care',
    price: '$46',
    cadence: 'per month',
    summary: 'What most households pick, and what we would pick ourselves.',
    popular: true,
    perks: [
      'Two exams and three hygienist visits a year',
      '20% off fillings, crowns and root canals',
      'Free emergency appointments, no annual cap',
      'Night guard included if you grind your teeth',
      'Children under 16 added at $12 each',
    ],
  },
  {
    name: 'Kilnwood Restore',
    price: '$78',
    cadence: 'per month',
    summary: 'For anyone rebuilding after years of putting it off.',
    popular: false,
    perks: [
      'Everything in Kilnwood Care',
      '30% off crowns, bridges and dentures',
      'Four hygienist visits a year',
      'Sedation at cost price',
      'A written five-year plan, reviewed each spring',
    ],
  },
]

export function MembershipPlans() {
  return (
    <section id="membership" className="border-y border-[#14312c]/10 bg-[#f3e9dd]">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#d9682f]">
            No insurance? Neither have half our patients
          </p>
          <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-[#14312c] sm:text-4xl">
            Membership, billed monthly, cancel any time
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#3f524b]">
            This is our own scheme, not a third-party plan with a claims department. You pay us
            directly, there is no waiting period, no annual maximum, and nothing to claim back.
            Cancel with a month&rsquo;s notice and nothing follows you around.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-7 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <li
              key={plan.name}
              data-testid="plan-card"
              className={
                plan.popular
                  ? 'relative rounded-2xl border-2 border-[#d9682f] bg-white p-8 shadow-xl shadow-[#14312c]/10'
                  : 'relative rounded-2xl border border-[#14312c]/10 bg-white/70 p-8'
              }
            >
              {plan.popular && (
                <span
                  data-testid="popular-badge"
                  className="absolute -top-3 left-8 rounded-full bg-[#d9682f] px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white"
                >
                  Most people choose this
                </span>
              )}
              <h3 className="font-serif text-2xl font-semibold text-[#14312c]">{plan.name}</h3>
              <p className="mt-3 flex items-baseline gap-2">
                <span className="font-serif text-4xl font-semibold text-[#14312c]">
                  {plan.price}
                </span>
                <span className="text-sm text-[#6b7d75]">{plan.cadence}</span>
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#3f524b]">{plan.summary}</p>
              <ul className="mt-6 space-y-3">
                {plan.perks.map((perk) => (
                  <li key={perk} className="flex gap-3 text-sm leading-snug text-[#3f524b]">
                    <svg viewBox="0 0 20 20" className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true">
                      <circle cx="10" cy="10" r="9" fill="#14312c" />
                      <path
                        d="M6 10.4l2.6 2.5L14.2 7"
                        fill="none"
                        stroke="#fbf6f0"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {perk}
                  </li>
                ))}
              </ul>
              <a
                href="#book"
                data-testid="plan-cta"
                className={
                  plan.popular
                    ? 'mt-8 block rounded-full bg-[#d9682f] px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#c25a24]'
                    : 'mt-8 block rounded-full border border-[#14312c]/25 px-6 py-3 text-center text-sm font-semibold text-[#14312c] transition hover:bg-[#f3e9dd]'
                }
              >
                Join {plan.name}
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-9 text-sm leading-relaxed text-[#6b7d75]">
          Members pay by direct debit on the first working day of the month. Treatment discounts
          start immediately, not after twelve months, and they apply to work already quoted.
        </p>
      </div>
    </section>
  )
}
