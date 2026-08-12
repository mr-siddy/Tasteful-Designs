type Plan = {
  name: string
  price: string
  cadence: string
  summary: string
  features: string[]
  cta: string
  featured: boolean
}

const PLANS: Plan[] = [
  {
    name: 'Two Days',
    price: '$129',
    cadence: 'per month',
    summary: 'Two coached sessions a week on a block written for two days.',
    features: [
      'Two class credits every week',
      'Twelve-week written block',
      'Quarterly re-test with your coach',
      'Open Platform on weekends',
    ],
    cta: 'Start on two days',
    featured: false,
  },
  {
    name: 'Platform',
    price: '$189',
    cadence: 'per month',
    summary: 'Unlimited coached classes. What most members end up on.',
    features: [
      'Every coached class, no cap',
      'Twelve-week written block',
      'Quarterly re-test and programme rewrite',
      'Open Platform any staffed hour',
      'Sauna, locker and towel service',
    ],
    cta: 'Join the Platform plan',
    featured: true,
  },
  {
    name: 'Barbell One',
    price: '$340',
    cadence: 'per month',
    summary: 'Everything in Platform plus a weekly one-to-one hour.',
    features: [
      'Everything in the Platform plan',
      'One private hour every week',
      'Video review of your main lifts',
      'Competition handling if you compete',
      'Direct line to your coach between sessions',
    ],
    cta: 'Talk about one-to-one',
    featured: false,
  },
]

export function MembershipSection() {
  return (
    <section id="membership" data-testid="membership-section" className="border-b border-white/10 bg-stone-100 text-stone-800">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-stone-500">Membership</p>
          <h2 className="mt-4 text-4xl font-black uppercase tracking-tight text-stone-950">
            Prices, out loud
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-stone-600">
            No joining fee, no contract, no twelve-month tie-in. Cancel with a month&apos;s notice
            by telling a coach — you will not be asked to write a letter.
          </p>
        </div>

        <ul className="mt-14 grid gap-6 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <li
              key={plan.name}
              data-testid="membership-plan"
              className={
                plan.featured
                  ? 'flex flex-col rounded-2xl border-2 border-lime-500 bg-white p-8 shadow-lg'
                  : 'flex flex-col rounded-2xl border border-stone-300 bg-white p-8'
              }
            >
              {plan.featured ? (
                <p
                  data-testid="popular-badge"
                  className="mb-4 inline-flex w-fit rounded-full bg-lime-500 px-3 py-1 text-xs font-bold uppercase tracking-wide text-stone-950"
                >
                  Most members choose this
                </p>
              ) : null}
              <h3 className="text-2xl font-bold text-stone-950">{plan.name}</h3>
              <p className="mt-4 flex items-baseline gap-2">
                <span data-testid="plan-price" className="text-4xl font-black text-stone-950">
                  {plan.price}
                </span>
                <span className="text-sm text-stone-500">{plan.cadence}</span>
              </p>
              <p className="mt-4 text-sm leading-relaxed text-stone-600">{plan.summary}</p>
              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-stone-700">
                    <svg viewBox="0 0 20 20" className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" fill="none">
                      <path d="M4 10.6l3.4 3.4L16 5.4" stroke="#65a30d" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#join"
                className={
                  plan.featured
                    ? 'mt-8 rounded-full bg-stone-950 px-6 py-3 text-center text-sm font-bold text-lime-300 transition-colors hover:bg-stone-800'
                    : 'mt-8 rounded-full border border-stone-400 px-6 py-3 text-center text-sm font-bold text-stone-900 transition-colors hover:border-stone-900'
                }
              >
                {plan.cta}
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-sm text-stone-500">
          Students, shift workers at the terminal and anyone over sixty-five pay $20 less on every
          plan. Ask Dana — there is no form for it.
        </p>
      </div>
    </section>
  )
}
