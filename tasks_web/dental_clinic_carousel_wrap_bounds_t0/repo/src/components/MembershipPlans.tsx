const PLANS = [
  {
    name: 'Steady',
    price: '£14.90',
    cadence: 'per month',
    summary: 'For teeth that behave themselves and just need keeping an eye on.',
    features: [
      'Two examinations a year',
      'Two hygienist visits a year',
      'X-rays when they are needed',
      '10% off any treatment',
      'Worldwide dental accident cover',
    ],
    featured: false,
  },
  {
    name: 'Harbour',
    price: '£24.50',
    cadence: 'per month',
    summary: 'What most of our patients are on. Adds the extra cleaning and the bigger discount.',
    features: [
      'Two examinations a year',
      'Four hygienist visits a year',
      'All x-rays and the soft-tissue screen',
      '20% off any treatment',
      'Emergency appointments included',
      'One night guard every three years',
    ],
    featured: true,
  },
  {
    name: 'Family',
    price: '£46.00',
    cadence: 'per month',
    summary: 'Two adults and up to three children under eighteen, all on one direct debit.',
    features: [
      'Everything in Harbour, for two adults',
      'Children examined and cleaned free',
      'Fluoride varnish twice a year per child',
      '20% off treatment for everyone on the plan',
      'Wednesday family slots held back for you',
      'One free mouthguard per child per season',
    ],
    featured: false,
  },
]

export function MembershipPlans() {
  return (
    <section id="membership" className="bg-[#F1E7DA] py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#2A7C70]">Membership</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0F2E4A] sm:text-4xl">
            Spread it over the year instead of flinching twice a year
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#3B4A54]">
            None of these are insurance and none of them lock you in — a month’s notice, cancel at reception or by
            email, no exit fee and no phone call where somebody tries to talk you out of it.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <li
              key={plan.name}
              data-testid="membership-plan"
              className={
                plan.featured
                  ? 'relative rounded-3xl border-2 border-[#F2683C] bg-[#FAF6F1] p-8 shadow-xl shadow-[#F2683C]/15'
                  : 'relative rounded-3xl border border-[#0F2E4A]/12 bg-[#FAF6F1] p-8 shadow-sm shadow-[#0F2E4A]/5'
              }
            >
              {plan.featured && (
                <span className="absolute -top-3 left-8 rounded-full bg-[#F2683C] px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">
                  Most joined
                </span>
              )}
              <h3 className="text-xl font-bold text-[#0F2E4A]">{plan.name}</h3>
              <p className="mt-3 flex items-baseline gap-2">
                <span className="text-4xl font-bold tracking-tight text-[#0F2E4A]">{plan.price}</span>
                <span className="text-sm text-[#4A5A64]">{plan.cadence}</span>
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[#4A5A64]">{plan.summary}</p>
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-[#3B4A54]">
                    <svg viewBox="0 0 20 20" className="mt-0.5 h-4 w-4 shrink-0 text-[#3FA394]" fill="none" aria-hidden="true">
                      <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.6" />
                      <path d="m6.4 10.2 2.3 2.3 4.8-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#visit"
                className={
                  plan.featured
                    ? 'mt-8 block rounded-full bg-[#F2683C] px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#DD5629]'
                    : 'mt-8 block rounded-full border border-[#0F2E4A]/25 px-6 py-3 text-center text-sm font-semibold text-[#0F2E4A] transition hover:border-[#0F2E4A]/70'
                }
              >
                Join {plan.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
