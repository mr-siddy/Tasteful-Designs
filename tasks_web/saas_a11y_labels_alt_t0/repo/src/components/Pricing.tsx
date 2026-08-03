const PLANS = [
  {
    name: 'Team',
    price: '$480',
    cadence: 'per month',
    summary: 'For one platform team putting its first services under policy.',
    featured: false,
    features: [
      'Up to 25 services under policy',
      'Change policy as code, one workspace',
      'Approval queue with SLA escalation',
      'Evidence export as PDF, on demand',
      '30-day change history',
      'Email support, next business day',
    ],
  },
  {
    name: 'Scale',
    price: '$1,900',
    cadence: 'per month',
    summary: 'For an estate with real freezes, real auditors and more than one team.',
    featured: true,
    features: [
      'Unlimited services and workspaces',
      'Blast-radius resolution from your service graph',
      'Freeze windows with break-glass records',
      'Nightly evidence push to Vanta or Drata',
      '3-year change history, region pinned',
      'Shared Slack channel, 4-hour response',
    ],
  },
  {
    name: 'Regulated',
    price: 'Custom',
    cadence: 'annual agreement',
    summary: 'For banks, health systems and operators of critical infrastructure.',
    featured: false,
    features: [
      'Dedicated control plane, your region',
      'Customer-managed signing keys',
      '7-year immutable retention',
      'Named solutions engineer and audit liaison',
      'DORA and PCI DSS policy packs, reviewed yearly',
      '24/7 support with a 30-minute severity-one target',
    ],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#B57A16]">Pricing</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#0B1524] sm:text-[2.75rem]">
            Priced per estate, not per engineer
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Charging by seat punishes you for inviting the reviewers you actually need. Halyard charges for the services
            under policy, so adding an approver costs nothing.
          </p>
        </div>

        <div className="mt-14 grid gap-7 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <article
              key={plan.name}
              data-testid="plan-card"
              className={`flex flex-col rounded-3xl border p-8 ${
                plan.featured
                  ? 'border-[#0B1524] bg-[#0B1524] text-white shadow-2xl shadow-[#0B1524]/25'
                  : 'border-[#E3DDD2] bg-[#FBFAF8] text-[#0B1524]'
              }`}
            >
              {plan.featured ? (
                <span
                  data-testid="popular-badge"
                  className="mb-4 inline-flex w-fit rounded-full bg-[#F2A93B] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-[#0B1524]"
                >
                  Most chosen
                </span>
              ) : null}
              <h3 className="text-xl font-semibold tracking-tight">{plan.name}</h3>
              <p className={`mt-2 text-sm ${plan.featured ? 'text-slate-400' : 'text-slate-600'}`}>{plan.summary}</p>
              <p className="mt-6 flex items-baseline gap-2">
                <span className="text-4xl font-bold tracking-tight">{plan.price}</span>
                <span className={`text-sm ${plan.featured ? 'text-slate-400' : 'text-slate-500'}`}>{plan.cadence}</span>
              </p>
              <ul className="mt-7 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <svg viewBox="0 0 20 20" className="mt-0.5 h-4 w-4 flex-none" aria-hidden="true" focusable="false">
                      <path
                        d="M5 10.4l3.2 3.2L15 6.6"
                        stroke={plan.featured ? '#4ADEC0' : '#B57A16'}
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className={plan.featured ? 'text-slate-300' : 'text-slate-700'}>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#trial"
                className={`mt-8 rounded-xl px-6 py-3.5 text-center text-sm font-semibold transition ${
                  plan.featured
                    ? 'bg-[#F2A93B] text-[#0B1524] hover:bg-[#ffc063]'
                    : 'border border-[#0B1524]/20 text-[#0B1524] hover:border-[#0B1524]/60 hover:bg-[#0B1524]/[0.04]'
                }`}
              >
                {plan.name === 'Regulated' ? 'Talk to an engineer' : `Start on ${plan.name}`}
              </a>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-slate-500">
          Every plan includes the full 21-day trial, unlimited approvers, and migration help from whatever spreadsheet
          you are currently calling a change register.
        </p>
      </div>
    </section>
  )
}
