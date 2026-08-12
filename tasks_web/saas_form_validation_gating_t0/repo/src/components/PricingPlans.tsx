const PLANS = [
  {
    name: 'Yard',
    price: '$89',
    unit: 'per technician / month',
    summary: 'For shops running one crew board and a single yard.',
    features: [
      'Dispatch board and scheduling',
      'Work orders with photos and readings',
      'Truck app for iOS and Android',
      'QuickBooks Online sync',
      'Email support, next business day',
    ],
    cta: 'Start with Yard',
    featured: false,
  },
  {
    name: 'Fleet',
    price: '$139',
    unit: 'per technician / month',
    summary: 'For multi-yard shops with agreements and truck stock to keep straight.',
    features: [
      'Everything in Yard',
      'Maintenance agreements and auto-scheduled PM',
      'Parts, truck stock and purchase orders',
      'Supply-house and telematics connectors',
      'Named implementation lead for 90 days',
      'Phone support from 5am to 9pm Eastern',
    ],
    cta: 'Talk through Fleet',
    featured: true,
  },
  {
    name: 'Regional',
    price: 'Custom',
    unit: 'annual agreement',
    summary: 'For contractors over 120 technicians or with commercial reporting obligations.',
    features: [
      'Everything in Fleet',
      'Sage Intacct and custom ERP mapping',
      'Single sign-on and role-based permissions',
      'Uptime and response-time commitments in writing',
      'Quarterly business review with your account team',
    ],
    cta: 'Request a scoping call',
    featured: false,
  },
]

export default function PricingPlans() {
  return (
    <section id="pricing" data-testid="pricing" className="bg-[#F6F7FB]">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#1F4FD8]">
            Pricing
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-[#0A1220] sm:text-4xl">
            Priced per technician, because that is what actually scales
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#5B6577]">
            Dispatchers, bookkeepers and owners use Rivetwork for free. You pay for the
            people turning wrenches, billed monthly, with migration and training included.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <article
              key={plan.name}
              className={`flex flex-col rounded-2xl border p-8 ${
                plan.featured
                  ? 'border-[#1F4FD8] bg-white shadow-[0_28px_60px_-30px_rgba(31,79,216,0.55)] lg:-mt-4 lg:mb-4'
                  : 'border-[#E4E8F2] bg-white shadow-[0_1px_2px_rgba(10,18,32,0.04)]'
              }`}
            >
              {plan.featured ? (
                <span className="mb-4 inline-flex w-fit rounded-full bg-[#FF9F1C] px-3 py-1 text-[11px] font-black uppercase tracking-[0.14em] text-[#0A1220]">
                  Most shops pick this
                </span>
              ) : null}
              <h3 className="text-xl font-black tracking-tight text-[#0A1220]">{plan.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5B6577]">{plan.summary}</p>
              <p className="mt-6 flex items-baseline gap-2">
                <span className="text-4xl font-black tracking-tight text-[#0A1220]">
                  {plan.price}
                </span>
                <span className="text-sm font-semibold text-[#5B6577]">{plan.unit}</span>
              </p>
              <ul className="mt-6 flex-1 space-y-3 border-t border-[#EEF1F8] pt-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-[#3D4658]">
                    <svg
                      viewBox="0 0 20 20"
                      className="mt-0.5 h-4 w-4 shrink-0"
                      role="img"
                      aria-label="Included"
                    >
                      <circle cx="10" cy="10" r="9" fill="#EDF1FD" />
                      <path
                        d="M6 10.4l2.6 2.6L14 7.6"
                        fill="none"
                        stroke="#1F4FD8"
                        strokeWidth="1.9"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#walkthrough"
                className={`mt-8 rounded-xl px-5 py-3 text-center text-sm font-bold transition ${
                  plan.featured
                    ? 'bg-[#1F4FD8] text-white hover:bg-[#1A41B8]'
                    : 'border border-[#C9D5F3] text-[#1F4FD8] hover:bg-[#EDF1FD]'
                }`}
              >
                {plan.cta}
              </a>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-[#5B6577]">
          Seasonal shops can park seats at $12 a month through the shoulder season. Annual
          agreements save two months. No charge for the first sixty days of a migration.
        </p>
      </div>
    </section>
  )
}
