const PLANS = [
  {
    name: 'Steady',
    price: '£14.50',
    cadence: 'per month',
    summary: 'For teeth that are in good order and want to stay that way.',
    features: [
      'Two check-ups a year',
      'Two 30-minute hygienist visits',
      '10% off all treatment',
      'Emergency appointment at £45',
    ],
    cta: 'Join Steady',
  },
  {
    name: 'Steady Plus',
    price: '£26',
    cadence: 'per month',
    summary: 'The one most adults pick, and the one we would pick.',
    features: [
      'Two check-ups and all X-rays',
      'Four hygienist visits a year',
      '20% off all treatment',
      'Emergency appointments included',
      'Worldwide dental trauma cover',
    ],
    cta: 'Join Steady Plus',
    featured: true,
  },
  {
    name: 'Family',
    price: '£39',
    cadence: 'per month',
    summary: 'Two adults and up to three children under eighteen.',
    features: [
      'Everything in Steady Plus for two adults',
      'Free check-ups for up to three children',
      'Saturday morning slots held back for members',
      'Fluoride varnish for children included',
    ],
    cta: 'Join Family',
  },
]

export function MembershipPlans() {
  return (
    <section id="plans" className="bg-[#FBF9F5]">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8B8375]">
            If you are not insured
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-[#332A56]">
            Three plans, cancellable in a month
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#5A5347]">
            About two in five of our patients pay this way. There is no joining fee, no minimum
            term, and if you cancel we do not claw back the visits you have already had.
          </p>
        </div>

        <div className="mt-14 grid gap-7 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <article
              key={plan.name}
              data-testid="plan-card"
              className={`flex flex-col rounded-3xl border p-8 shadow-sm ${
                plan.featured
                  ? 'border-[#332A56] bg-white ring-2 ring-[#332A56]/15'
                  : 'border-[#EFE9E0] bg-white'
              }`}
            >
              {plan.featured && (
                <span
                  data-testid="plan-badge"
                  className="mb-5 inline-block w-fit rounded-full bg-[#E4735B] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white"
                >
                  Most chosen
                </span>
              )}
              <h3 className="text-2xl font-semibold tracking-tight text-[#1C1A17]">{plan.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#6A6255]">{plan.summary}</p>
              <p className="mt-6 flex items-baseline gap-2">
                <span className="text-4xl font-semibold tracking-tight text-[#332A56]">
                  {plan.price}
                </span>
                <span className="text-sm text-[#8B8375]">{plan.cadence}</span>
              </p>
              <ul className="mt-7 flex-1 space-y-3.5">
                {plan.features.map((feature) => (
                  <li key={feature} data-testid="plan-feature" className="flex gap-3 text-[15px] text-[#4A4438]">
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="mt-0.5 h-5 w-5 flex-none text-[#5B4BA8]"
                    >
                      <path
                        d="m5 12 4.5 4.5L19 7"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#book"
                data-testid="plan-cta"
                className={`mt-8 rounded-full px-6 py-3 text-center text-sm font-semibold transition-colors ${
                  plan.featured
                    ? 'bg-[#332A56] text-white hover:bg-[#453a6f]'
                    : 'border border-[#332A56]/25 text-[#332A56] hover:border-[#332A56]/60'
                }`}
              >
                {plan.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
