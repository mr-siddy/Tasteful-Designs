import { IconCheck } from './icons'

const PLANS = [
  {
    name: 'Rotation',
    price: '€0',
    cadence: 'for up to 5 reviewers',
    pitch: 'Enough for a single squad that wants to stop writing post-mortems in a shared doc.',
    features: [
      'Unlimited incidents and timelines',
      'Slack declaration and pinning',
      'Retro drafts with contributing factors',
      'Ninety days of history',
    ],
    cta: 'Start free',
  },
  {
    name: 'Platform',
    price: '€19',
    cadence: 'per engineer, per month',
    pitch: 'The plan almost everyone runs: full integrations, follow-through tracking and quarterly reporting.',
    features: [
      'Everything in Rotation',
      'PagerDuty, Datadog, Grafana and GitHub',
      'Two-way Linear and Jira sync',
      'Action-item reminders and escalation',
      'Quarterly incident report',
      'Unlimited history and exports',
    ],
    cta: 'Set up your workspace',
    featured: true,
  },
  {
    name: 'Assurance',
    price: '€44',
    cadence: 'per engineer, per month',
    pitch: 'For teams whose customers ask for the packet: signed exports, SSO and a named reviewer.',
    features: [
      'Everything in Platform',
      'SAML SSO and SCIM provisioning',
      'Signed, audit-ready PDF exports',
      'Customer-facing status write-ups',
      'Data residency in the EU or US',
      'A named reliability reviewer each quarter',
    ],
    cta: 'Talk to us',
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="bg-[#0B1220] text-white">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-300">Pricing</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Priced per engineer, not per incident
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-300">
            Charging by incident would be a strange thing to optimise for. Every plan carries unlimited
            incidents, unlimited reviews and unlimited exports; you pay for the size of the rotation.
          </p>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <article
              key={plan.name}
              data-testid="pricing-plan"
              className={
                plan.featured
                  ? 'relative rounded-3xl border border-orange-400/40 bg-white p-8 text-[#0B1220] shadow-2xl shadow-orange-500/10'
                  : 'relative rounded-3xl border border-white/12 bg-white/[0.035] p-8'
              }
            >
              {plan.featured && (
                <span className="absolute -top-3 left-8 rounded-full bg-orange-500 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#0B1220]">
                  Most teams
                </span>
              )}
              <h3 className="text-lg font-semibold">{plan.name}</h3>
              <p className="mt-4 flex items-baseline gap-1.5">
                <span className="text-4xl font-semibold tracking-tight">{plan.price}</span>
                <span className={plan.featured ? 'text-sm text-slate-500' : 'text-sm text-slate-400'}>
                  {plan.cadence}
                </span>
              </p>
              <p className={plan.featured ? 'mt-4 text-sm leading-relaxed text-slate-600' : 'mt-4 text-sm leading-relaxed text-slate-300'}>
                {plan.pitch}
              </p>
              <ul className="mt-6 space-y-2.5">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className={plan.featured ? 'flex items-start gap-2.5 text-sm text-slate-700' : 'flex items-start gap-2.5 text-sm text-slate-300'}
                  >
                    <span className={plan.featured ? 'mt-0.5 text-orange-600' : 'mt-0.5 text-teal-300'}>
                      <IconCheck />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#setup"
                className={
                  plan.featured
                    ? 'mt-8 block rounded-full bg-[#0B1220] px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-slate-800'
                    : 'mt-8 block rounded-full border border-white/25 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10'
                }
              >
                {plan.cta}
              </a>
            </article>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-slate-400">
          Annual billing takes two months off. Registered charities and teams under ten people pay nothing on
          Platform for the first year.
        </p>
      </div>
    </section>
  )
}
