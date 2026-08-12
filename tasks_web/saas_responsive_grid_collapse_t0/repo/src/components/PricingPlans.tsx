const PLANS = [
  {
    id: 'bench',
    name: 'Bench',
    price: '$180',
    cadence: 'per month, flat',
    fit: 'One floor, up to twelve machines',
    features: [
      'Cut tickets, bundles and one sew-line board',
      'Fabric lots with roll-level yardage',
      'Unlimited sew-line seats',
      'CSV import and export',
      'Email support, next business day',
    ],
  },
  {
    id: 'cut-floor',
    name: 'Cut Floor',
    price: '$460',
    cadence: 'per month, flat',
    fit: 'One floor, up to sixty machines',
    features: [
      'Everything in Bench',
      'Unlimited sew-line boards and operations',
      'Subcontractor handoffs with scoped access',
      'Yield, rework and on-time reporting',
      'Read-only run status for your labels',
      'On-site setup week included',
    ],
    highlight: true,
  },
  {
    id: 'mill',
    name: 'Mill',
    price: '$1,150',
    cadence: 'per month, flat',
    fit: 'Multi-site manufacturers and groups',
    features: [
      'Everything in Cut Floor',
      'Up to six floors on one account',
      'Cross-site capacity and load planning',
      'API access with sandbox credentials',
      'Twice-yearly season review on site',
      'Named contact, four-hour response',
    ],
  },
]

export default function PricingPlans() {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="border-b border-[#E0D6C6] bg-[#EFE9DE]"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C1552F]">
            Pricing
          </p>
          <h2
            id="pricing-heading"
            className="mt-4 text-3xl font-black tracking-tight sm:text-4xl"
          >
            Flat rate, posted publicly, never per stitcher
          </h2>
          <p className="mt-5 leading-relaxed text-[#4A4455]">
            Per-seat pricing punishes you for putting the board in front of the
            people who need it most. Every plan includes unlimited sew-line seats
            and every integration. Month to month, thirty days notice, and your
            data exports whole on the way out.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <div
              key={plan.id}
              className={
                'flex h-full flex-col rounded-3xl border p-8 ' +
                (plan.highlight
                  ? 'border-[#2C5C4F] bg-[#1E1B26] text-[#F6F2EC] shadow-[0_24px_60px_-34px_rgba(30,27,38,0.8)]'
                  : 'border-[#DCCFB8] bg-[#FBF8F2]')
              }
            >
              {plan.highlight && (
                <span className="mb-4 inline-flex w-fit rounded-full bg-[#C1552F] px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-[#FFF8F0]">
                  Most floors start here
                </span>
              )}
              <h3 className="text-xl font-black tracking-tight">{plan.name}</h3>
              <p
                className={
                  'mt-1 text-sm ' +
                  (plan.highlight ? 'text-[#B9AFC2]' : 'text-[#7A7286]')
                }
              >
                {plan.fit}
              </p>
              <p className="mt-6 flex items-baseline gap-2">
                <span className="text-4xl font-black tracking-tight">
                  {plan.price}
                </span>
                <span
                  className={
                    'text-sm ' +
                    (plan.highlight ? 'text-[#B9AFC2]' : 'text-[#7A7286]')
                  }
                >
                  {plan.cadence}
                </span>
              </p>
              <ul className="mt-7 flex-1 space-y-3 text-sm">
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-3">
                    <svg
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      className="mt-0.5 h-[18px] w-[18px] shrink-0"
                      width="18"
                      height="18"
                    >
                      <path
                        d="M4 10.5l3.2 3.2L16 6"
                        fill="none"
                        stroke={plan.highlight ? '#E0A47F' : '#2C5C4F'}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className={plan.highlight ? 'text-[#D8D1E0]' : ''}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href="#book"
                className={
                  'mt-8 rounded-full px-6 py-3 text-center text-sm font-semibold ' +
                  (plan.highlight
                    ? 'bg-[#C1552F] text-[#FFF8F0] hover:bg-[#A8482A]'
                    : 'border border-[#2C5C4F] text-[#2C5C4F] hover:bg-[#2C5C4F] hover:text-[#F6F2EC]')
                }
              >
                Book a floor walk
              </a>
            </div>
          ))}
        </div>

        <p className="mt-10 text-sm text-[#7A7286]">
          Sample-room and school floors under six machines run on Bench for $60 a
          month. Ask for it by name; we do not advertise it.
        </p>
      </div>
    </section>
  )
}
