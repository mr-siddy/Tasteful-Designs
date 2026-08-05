import { CheckIcon } from './icons'

const PLANS = [
  {
    name: 'Crew',
    price: '$39',
    unit: 'per technician / month',
    pitch: 'For shops running up to eight trucks who want the board and the field app and nothing they will not use.',
    features: [
      'Live dispatch board and scheduling',
      'Offline field app with photos and signatures',
      'Quotes, work orders and invoicing',
      'QuickBooks Online or Xero sync',
    ],
    cta: 'Start with Crew',
  },
  {
    name: 'Shop',
    price: '$59',
    unit: 'per technician / month',
    pitch: 'For nine to thirty trucks: routing, truck stock and the reporting an owner actually reads on Sunday night.',
    features: [
      'Everything in Crew',
      'Skill and stock aware routing',
      'Truck inventory with reorder points',
      'Owner dashboard and nightly digest',
      'Maintenance agreements and recurring visits',
    ],
    cta: 'Start with Shop',
  },
  {
    name: 'Fleet',
    price: '$89',
    unit: 'per technician / month',
    pitch: 'For multi-location contractors who need one board across yards, plus the API and the onboarding help to get there.',
    features: [
      'Everything in Shop',
      'Multiple locations on one board',
      'REST API and nightly data export',
      'Named onboarding lead for six weeks',
      'Phone support to 10pm Eastern',
    ],
    cta: 'Talk to us about Fleet',
  },
]

export default function Pricing() {
  return (
    <section id="pricing" data-testid="pricing" className="bg-slate-950 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">Pricing</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Priced per technician, not per job
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-400">
            Billed annually. Office staff and owners are free — you pay for the people who turn
            wrenches. No setup fee, no charge per work order, and no percentage of what you invoice.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <article
              key={plan.name}
              data-testid="plan-card"
              className="flex flex-col rounded-3xl border border-slate-800 bg-slate-900/50 p-8"
            >
              <h3 className="text-xl font-bold text-white">{plan.name}</h3>
              <p className="mt-4 flex items-baseline gap-2">
                <span data-testid="plan-price" className="text-4xl font-black tracking-tight text-amber-300">
                  {plan.price}
                </span>
                <span className="text-sm text-slate-500">{plan.unit}</span>
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-400">{plan.pitch}</p>
              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} data-testid="plan-feature" className="flex gap-3 text-sm text-slate-300">
                    <span className="mt-0.5 text-amber-400">
                      <CheckIcon />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#demo"
                data-testid="plan-cta"
                className="mt-8 inline-flex items-center justify-center rounded-xl border border-amber-400/60 px-5 py-3 text-sm font-semibold text-amber-300 transition hover:bg-amber-400 hover:text-slate-950"
              >
                {plan.cta}
              </a>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-slate-500">
          Every plan includes migration of your customer list, equipment history and open work orders,
          plus two weeks of side-by-side dispatch while your team gets its feet under it.
        </p>
      </div>
    </section>
  )
}
