const PLANS = [
  {
    name: 'Essential',
    price: '$29',
    cadence: 'per month',
    summary: 'For one adult who wants the basics covered and nothing they will not use.',
    includes: [
      'Two exams and two cleans a year',
      'All routine images included',
      '15% off any treatment needed',
      'One emergency visit at no charge',
    ],
    highlight: false,
  },
  {
    name: 'Family',
    price: '$79',
    cadence: 'per month',
    summary: 'Two adults and up to three children under eighteen, on one monthly payment.',
    includes: [
      'Everything in Essential, per person',
      'Children seen free until their sixth birthday',
      'Fluoride and fissure sealants included',
      'Priority on Saturday appointments',
    ],
    highlight: true,
  },
  {
    name: 'Restore',
    price: '$49',
    cadence: 'per month',
    summary: 'For patients partway through crown, implant or aligner treatment.',
    includes: [
      'Everything in Essential',
      '20% off restorative treatment',
      'Interest-free instalments over 12 months',
      'A six-monthly review of the whole plan',
    ],
    highlight: false,
  },
]

export function MembershipPlans() {
  return (
    <section id="plans" className="bg-stone-50">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">
            Fees & membership
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            No health fund? Our plans cost less than most of them
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-teal-900/70">
            About four in ten of our patients have no dental cover at all. These plans exist so
            that a check-up is a predictable line in the monthly budget rather than a bill you keep
            putting off. Cancel any time with a month's notice — there is no lock-in and no exit fee.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <article
              key={plan.name}
              data-testid="plan-card"
              className={
                plan.highlight
                  ? 'relative flex flex-col rounded-3xl bg-teal-900 p-8 text-stone-50 shadow-xl ring-1 ring-inset ring-teal-700'
                  : 'relative flex flex-col rounded-3xl bg-white p-8 shadow-sm ring-1 ring-inset ring-teal-900/10'
              }
            >
              {plan.highlight ? (
                <span className="absolute -top-3 left-8 rounded-full bg-amber-300 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-teal-950">
                  Most chosen by families
                </span>
              ) : null}
              <h3 className="text-xl font-semibold tracking-tight">{plan.name}</h3>
              <p className="mt-4 flex items-baseline gap-2">
                <span className="text-4xl font-semibold tracking-tight">{plan.price}</span>
                <span className={plan.highlight ? 'text-sm text-teal-100/80' : 'text-sm text-teal-900/60'}>
                  {plan.cadence}
                </span>
              </p>
              <p
                className={
                  plan.highlight
                    ? 'mt-3 text-sm leading-relaxed text-teal-50/85'
                    : 'mt-3 text-sm leading-relaxed text-teal-900/70'
                }
              >
                {plan.summary}
              </p>
              <ul className="mt-6 flex-1 space-y-3">
                {plan.includes.map((line) => (
                  <li key={line} className="flex items-start gap-3 text-sm">
                    <svg
                      viewBox="0 0 20 20"
                      className={plan.highlight ? 'mt-0.5 h-4 w-4 shrink-0 text-amber-300' : 'mt-0.5 h-4 w-4 shrink-0 text-teal-600'}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="m4 10.5 4 4 8-9" />
                    </svg>
                    <span className={plan.highlight ? 'text-teal-50/90' : 'text-teal-900/75'}>{line}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#book"
                data-testid="plan-cta"
                className={
                  plan.highlight
                    ? 'mt-8 rounded-full bg-amber-300 px-6 py-3 text-center text-sm font-semibold text-teal-950 transition hover:bg-amber-200'
                    : 'mt-8 rounded-full bg-teal-800 px-6 py-3 text-center text-sm font-semibold text-stone-50 transition hover:bg-teal-700'
                }
              >
                Ask about {plan.name}
              </a>
            </article>
          ))}
        </div>

        <p className="mt-8 text-sm leading-relaxed text-teal-900/60">
          Members are billed on the first of the month and the plan covers the named people only.
          Treatment discounts apply to work done at Alder Court and cannot be combined with a health
          fund rebate for the same item.
        </p>
      </div>
    </section>
  )
}
