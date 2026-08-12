const TIERS = [
  {
    name: 'Lane',
    price: '$690',
    cadence: 'per month',
    fit: 'Up to 500 containers a year, one gateway',
    features: [
      'Two lanes and unlimited shippers',
      'Document intake and reconciliation',
      'ISF and entry deadline clocks',
      'Classification with citations',
      'Email support, next business day',
    ],
  },
  {
    name: 'Terminal',
    price: '$2,150',
    cadence: 'per month',
    fit: 'Up to 5,000 containers a year, two gateways',
    features: [
      'Everything in Lane',
      'Exception desk with owners and escalation',
      'Duty, MPF and HMF estimation per line',
      'Freightline, Portside and Anvil connectors',
      'Broker handoff with audit trail',
      'Shared channel, four-hour response',
    ],
  },
  {
    name: 'Gateway',
    price: 'From $5,400',
    cadence: 'per month',
    fit: 'Over 5,000 containers a year, any number of gateways',
    features: [
      'Everything in Terminal',
      'Multiple filer codes and broker routing',
      'Five-year recordkeeping export on demand',
      'Custom connectors and webhook events',
      'Named implementation lead',
      'Quarterly compliance review with your auditor',
    ],
  },
]

export function PricingPlans() {
  return (
    <section id="pricing" className="bg-white">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#0D6E8C]">
            Pricing
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight">
            Priced on containers, not on seats
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#42566B]">
            Charging per seat would push you to give fewer people access to the thing that stops
            penalties, which is a strange way to sell compliance software. Everyone at your shop gets
            a login on every plan. Annual billing takes ten percent off, and there is no setup fee on
            any tier.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {TIERS.map((tier) => (
            <article
              key={tier.name}
              data-testid="pricing-tier"
              className="flex flex-col rounded-3xl border border-[#0B1F33]/10 bg-[#F5F7F9] p-8"
            >
              <h3 className="text-xl font-semibold tracking-tight">{tier.name}</h3>
              <p className="mt-2 text-sm text-[#42566B]">{tier.fit}</p>
              <p className="mt-6 flex items-baseline gap-2">
                <span className="text-4xl font-semibold tracking-tight text-[#0B1F33]">
                  {tier.price}
                </span>
                <span className="text-sm text-[#7C8FA2]">{tier.cadence}</span>
              </p>
              <ul className="mt-7 flex-1 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm leading-relaxed text-[#42566B]">
                    <svg viewBox="0 0 20 20" aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0">
                      <path
                        d="M4 10.6l3.4 3.4L16 5.6"
                        fill="none"
                        stroke="#0D6E8C"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#walkthrough"
                className="mt-8 rounded-full border border-[#0B1F33]/20 px-6 py-3 text-center text-sm font-semibold text-[#0B1F33] transition-colors hover:border-[#0D6E8C] hover:text-[#0D6E8C]"
              >
                Talk about {tier.name}
              </a>
            </article>
          ))}
        </div>

        <p className="mt-8 text-sm text-[#7C8FA2]">
          Volume is measured on containers actually filed in a month, averaged over the quarter, so a
          slow February does not cost you what a busy October does.
        </p>
      </div>
    </section>
  )
}
