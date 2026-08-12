const PLANS = [
  {
    name: 'Starter',
    price: '$890',
    cadence: 'per month, billed annually',
    blurb: 'For a single controller closing up to three entities on one ledger.',
    features: [
      'Up to 3 legal entities',
      'Reconciliation workspace and close checklist',
      'One ERP connector plus unlimited bank feeds',
      'Twelve months of evidence retention',
      'Email support with a one business day response',
    ],
    cta: 'Start with Starter',
    highlighted: false,
  },
  {
    name: 'Growth',
    price: '$2,400',
    cadence: 'per month, billed annually',
    blurb: 'For finance teams consolidating a group and answering to an audit committee.',
    features: [
      'Up to 25 legal entities with intercompany eliminations',
      'Journal approvals with enforced segregation of duties',
      'Flux analysis and reviewer routing',
      'Seven years of evidence retention',
      'SAML single sign-on and SCIM provisioning',
      'Named close advisor and a quarterly process review',
    ],
    cta: 'Book a Growth demo',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    cadence: 'annual agreement',
    blurb: 'For groups above twenty-five entities, multiple ledgers or regulated reporting.',
    features: [
      'Unlimited entities, ledgers and currencies',
      'US or EU data residency with a signed DPA',
      'Custom control mappings for SOX and internal audit',
      'Sandbox environment for testing period changes',
      'Dedicated implementation team and a 99.9% uptime SLA',
    ],
    cta: 'Talk to sales',
    highlighted: false,
  },
]

export default function PricingSection() {
  return (
    <section id="pricing" className="scroll-mt-24 bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-700">Pricing</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Priced per entity, not per seat
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Charging by the seat pushes teams to share logins, which is the last thing a system of
            record should encourage. Invite every accountant, reviewer and auditor you like — you pay
            for the entities you close.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <article
              key={plan.name}
              className={`flex flex-col rounded-2xl border p-8 ${
                plan.highlighted
                  ? 'border-indigo-700 bg-indigo-50/60 shadow-lg shadow-indigo-100'
                  : 'border-slate-200 bg-white shadow-sm'
              }`}
            >
              <h3 className="text-lg font-semibold tracking-tight text-slate-900">{plan.name}</h3>
              <p className="mt-4 flex items-baseline gap-2">
                <span className="text-4xl font-semibold tracking-tight text-slate-900">
                  {plan.price}
                </span>
                <span className="text-sm text-slate-500">{plan.cadence}</span>
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">{plan.blurb}</p>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm leading-relaxed text-slate-700">
                    <svg
                      viewBox="0 0 20 20"
                      className="mt-0.5 h-4 w-4 shrink-0 text-indigo-700"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M8 13.5l-3.5-3.5 1.4-1.4L8 10.7l5.1-5.2 1.4 1.4z" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className={`mt-8 rounded-xl px-5 py-3 text-sm font-semibold transition-colors ${
                  plan.highlighted
                    ? 'bg-indigo-700 text-white hover:bg-indigo-800'
                    : 'border border-slate-300 text-slate-800 hover:border-slate-400 hover:bg-slate-50'
                }`}
              >
                {plan.cta}
              </button>
            </article>
          ))}
        </div>

        <p className="mt-8 text-sm text-slate-500">
          Every plan includes implementation, historical data migration for two prior periods and
          your first close run in parallel with your existing process at no charge.
        </p>
      </div>
    </section>
  )
}
