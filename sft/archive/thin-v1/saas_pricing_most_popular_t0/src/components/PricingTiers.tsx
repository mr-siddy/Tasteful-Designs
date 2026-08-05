type Plan = {
  id: string
  name: string
  price: string
  blurb: string
  features: string[]
  cta: string
  popular: boolean
}

const PLANS: Plan[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: '$12',
    blurb: 'For small teams leaving a shared Gmail account behind.',
    features: [
      'Up to 3 seats',
      'Shared email inbox',
      'Saved replies',
      'Email support, next business day',
    ],
    cta: 'Choose Starter',
    popular: false,
  },
  {
    id: 'team',
    name: 'Team',
    price: '$29',
    blurb: 'For support teams that need routing, SLAs and reporting.',
    features: [
      'Unlimited seats',
      'Live chat and web forms',
      'Rule-based routing',
      'SLA targets and breach alerts',
      'Workload and response reporting',
    ],
    cta: 'Start a Team trial',
    popular: true,
  },
  {
    id: 'scale',
    name: 'Scale',
    price: '$58',
    blurb: 'For multi-brand support orgs with audit requirements.',
    features: [
      'Everything in Team',
      'Multi-brand inboxes',
      'Audit log and SSO',
      'Sandbox environment',
      'Named success manager',
    ],
    cta: 'Talk to sales',
    popular: false,
  },
]

function PlanCard({ plan, popular }: { plan: Plan; popular: boolean }) {
  return (
    <article
      data-testid="plan-card"
      data-plan={plan.id}
      data-featured={popular ? 'true' : 'false'}
      aria-labelledby={`plan-${plan.id}-name`}
      className={
        popular
          ? 'relative flex flex-col rounded-2xl border-2 border-teal-600 bg-white p-8 shadow-lg'
          : 'relative flex flex-col rounded-2xl border border-slate-200 bg-white p-8'
      }
    >
      {popular && (
        <p
          data-testid="popular-badge"
          className="absolute -top-3 left-8 rounded-full bg-teal-600 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white"
        >
          Most popular
        </p>
      )}

      <h3 id={`plan-${plan.id}-name`} className="text-lg font-semibold text-slate-900">
        {plan.name}
      </h3>

      <p className="mt-4 flex items-baseline gap-1">
        <span data-testid="plan-price" className="text-4xl font-bold text-slate-900">
          {plan.price}
        </span>
        <span className="text-sm text-slate-500">/ seat / month</span>
      </p>

      <p className="mt-4 text-sm text-slate-600">{plan.blurb}</p>

      <ul className="mt-6 flex-1 space-y-3 text-sm text-slate-700">
        {plan.features.map((feature) => (
          <li key={feature} data-testid="plan-feature" className="flex gap-2">
            <span aria-hidden="true" className="text-teal-600">
              ✓
            </span>
            {feature}
          </li>
        ))}
      </ul>

      <a
        href="#signup"
        data-testid="plan-cta"
        className={
          popular
            ? 'mt-8 rounded-lg bg-teal-600 px-5 py-3 text-center text-sm font-medium text-white'
            : 'mt-8 rounded-lg border border-slate-300 px-5 py-3 text-center text-sm font-medium text-slate-900'
        }
      >
        {plan.cta}
      </a>
    </article>
  )
}

export function PricingTiers() {
  return (
    <section id="pricing" className="border-t border-slate-200 bg-slate-50 py-20">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-center text-3xl font-bold text-slate-900">Simple pricing, per seat</h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-slate-600">
          Billed monthly, cancel any time. Every plan includes unlimited contacts, unlimited
          conversation history and a 14-day trial.
        </p>

        <div data-testid="plan-grid" className="mt-14 grid gap-6 md:grid-cols-3">
          {PLANS.map((plan) => (
            <PlanCard key={plan.id} plan={plan} popular={plan.popular} />
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-slate-500">
          Prices in USD. Non-profits and student teams pay half — write to us and say hello.
        </p>
      </div>
    </section>
  )
}
