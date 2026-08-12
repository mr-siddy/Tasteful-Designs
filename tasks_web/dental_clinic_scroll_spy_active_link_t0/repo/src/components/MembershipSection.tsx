const PLANS = [
  {
    name: 'Birch Basic',
    price: '$32',
    cadence: 'per person, per month',
    summary: 'The maintenance floor: two cleans a year and the X-rays that go with them.',
    features: [
      'Two hygiene visits a year',
      'One full examination',
      'Annual bitewing X-rays',
      '15% off all treatment',
      'No joining fee, cancel any month',
    ],
    featured: false,
  },
  {
    name: 'Birch Complete',
    price: '$54',
    cadence: 'per person, per month',
    summary: 'What we put most adults on, especially anyone with a history of gum trouble.',
    features: [
      'Three hygiene visits a year',
      'Two full examinations',
      'X-rays and intraoral scan',
      '20% off all treatment',
      'One emergency visit included',
    ],
    featured: true,
  },
  {
    name: 'Birch Family',
    price: '$96',
    cadence: 'two adults and up to three children',
    summary: 'Everything in Complete for the adults, plus children seen free until they turn eighteen.',
    features: [
      'Complete cover for two adults',
      'Children examined and cleaned free',
      'Fluoride and fissure sealants',
      '20% off all treatment',
      'Saturday appointments prioritised',
    ],
    featured: false,
  },
]

export function MembershipSection() {
  return (
    <section id="membership" className="scroll-mt-28 bg-stone-50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-600">The Birch Plan</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-teal-950 sm:text-4xl">
            Membership for people whose insurance is useless
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-stone-600">
            Roughly four in ten of our patients have no dental cover at all. The Birch Plan is our own answer to that:
            a flat monthly amount that pays for the preventive work outright and takes a fixed percentage off
            everything else. It is not insurance, there is no claim to file, and there is no annual cap.
          </p>
        </div>

        <ul className="mt-14 grid items-start gap-6 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <li
              key={plan.name}
              data-testid="membership-plan"
              className={
                plan.featured
                  ? 'relative rounded-3xl border-2 border-teal-700 bg-white p-8 shadow-xl shadow-teal-900/10'
                  : 'relative rounded-3xl border border-stone-200 bg-white p-8 shadow-sm'
              }
            >
              {plan.featured ? (
                <span
                  data-testid="plan-badge"
                  className="absolute -top-3.5 left-8 rounded-full bg-amber-500 px-3.5 py-1 text-xs font-semibold uppercase tracking-wide text-white"
                >
                  Most chosen
                </span>
              ) : null}
              <h3 className="text-xl font-semibold tracking-tight text-teal-950">{plan.name}</h3>
              <p className="mt-4 flex items-baseline gap-2">
                <span className="text-4xl font-semibold tracking-tight text-teal-900">{plan.price}</span>
                <span className="text-sm text-stone-500">{plan.cadence}</span>
              </p>
              <p className="mt-4 text-sm leading-relaxed text-stone-600">{plan.summary}</p>
              <ul className="mt-6 space-y-3 border-t border-stone-100 pt-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-stone-600">
                    <svg viewBox="0 0 16 16" className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" aria-hidden="true">
                      <path fill="currentColor" d="M6.2 11.6 3 8.4l1.1-1.1 2.1 2.1 5.7-5.7L13 4.8z" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className={
                  plan.featured
                    ? 'mt-8 w-full rounded-full bg-teal-800 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-900'
                    : 'mt-8 w-full rounded-full border border-stone-300 px-5 py-3 text-sm font-semibold text-teal-900 transition-colors hover:border-teal-300 hover:bg-teal-50'
                }
              >
                Join {plan.name}
              </button>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-center text-sm text-stone-500">
          Members pay by monthly direct debit and can pause for up to three months if money gets tight. The plan covers
          the named people on it only, and treatment discounts apply to work carried out at Halloway Street.
        </p>
      </div>
    </section>
  )
}
