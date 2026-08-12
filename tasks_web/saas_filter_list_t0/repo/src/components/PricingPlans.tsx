const PLANS = [
  {
    name: 'Starter',
    price: '$290',
    cadence: 'per month, billed annually',
    summary: 'For a first team moving three or four run books off a spreadsheet.',
    cta: 'Choose Starter',
    featured: false,
    features: [
      'Up to 10 published workflows',
      '5,000 runs a month',
      'Six connectors, including the warehouse',
      'Ninety days of audit history',
      'Email support, next business day',
    ],
  },
  {
    name: 'Growth',
    price: '$840',
    cadence: 'per month, billed annually',
    summary: 'For an operations group running the close, onboarding and escalations together.',
    cta: 'Choose Growth',
    featured: true,
    features: [
      'Unlimited published workflows',
      '75,000 runs a month',
      'Every connector, plus signed webhooks',
      'Seven years of audit history',
      'Dry-run replay against production traffic',
      'Shared channel with a named engineer',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    cadence: 'annual agreement',
    summary: 'For regulated teams that need Stonecrop inside their own network boundary.',
    cta: 'Book a walkthrough',
    featured: false,
    features: [
      'Deploy into your own cloud account',
      'Volume run pricing with no ceiling',
      'SAML, SCIM and per-field redaction',
      'Quarterly access review evidence pack',
      'Uptime commitment with credits',
    ],
  },
]

export default function PricingPlans() {
  return (
    <section id="pricing" className="bg-[#F7F4EC] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#12766A]">
            Pricing
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#0B1F1B] sm:text-4xl">
            Priced per workspace, not per person who might log in
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#4A5C57]">
            Invite the whole department. Approvers, reviewers and the auditor who visits twice a year
            never count against your bill — only the runs do.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <article
              key={plan.name}
              className={
                plan.featured
                  ? 'flex flex-col rounded-3xl border-2 border-[#12766A] bg-white p-8 shadow-lg'
                  : 'flex flex-col rounded-3xl border border-[#E2DCCE] bg-white p-8 shadow-sm'
              }
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold tracking-tight text-[#0B1F1B]">{plan.name}</h3>
                {plan.featured ? (
                  <span className="rounded-full bg-[#E8A33D] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#241703]">
                    Most chosen
                  </span>
                ) : null}
              </div>
              <p className="mt-4 text-4xl font-semibold tracking-tight text-[#0B1F1B]">
                {plan.price}
              </p>
              <p className="mt-1 text-sm text-[#6B7C77]">{plan.cadence}</p>
              <p className="mt-5 text-[15px] leading-relaxed text-[#5C6B66]">{plan.summary}</p>

              <ul className="mt-6 flex-1 space-y-3 text-[15px] text-[#3E524D]">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <svg viewBox="0 0 16 16" className="mt-1 h-4 w-4 shrink-0 text-[#12766A]" aria-hidden="true" focusable="false">
                      <path d="M2.5 8.6l3.2 3.2 7-7.4" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className={
                  plan.featured
                    ? 'mt-8 rounded-full bg-[#12766A] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0E5C53]'
                    : 'mt-8 rounded-full border border-[#0B1F1B] px-5 py-3 text-sm font-semibold text-[#0B1F1B] transition-colors hover:bg-[#0B1F1B] hover:text-[#F7F4EC]'
                }
              >
                {plan.cta}
              </button>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-[#6B7C77]">
          Every plan includes the full template library, unlimited sandboxes and a thirty-day export
          window if you decide to leave.
        </p>
      </div>
    </section>
  )
}
