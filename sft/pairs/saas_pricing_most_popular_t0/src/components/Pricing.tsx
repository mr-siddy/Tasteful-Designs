import { useState } from 'react'

type Billing = 'monthly' | 'annual'

type Plan = {
  name: string
  audience: string
  price: Record<Billing, string>
  cadence: string
  popular: boolean
  cta: string
  features: string[]
}

const PLANS: Plan[] = [
  {
    name: 'Solo',
    audience: 'Owner-operators and one-truck shops still doing their own dispatch.',
    price: { monthly: '$79', annual: '$65' },
    cadence: 'per month · one truck',
    popular: false,
    cta: 'Start with Solo',
    features: [
      'One truck on the dispatch board',
      'Technician app with offline queue',
      'Quotes and invoicing with card payments',
      'Van stock for a single vehicle',
      'Customer and equipment history',
      'Email support, next business day',
      'Onboarding and data import included',
    ],
  },
  {
    name: 'Crew',
    audience: 'Growing shops running two to eight trucks with a dispatcher on the desk.',
    price: { monthly: '$189', annual: '$157' },
    cadence: 'per month · up to 8 trucks',
    popular: true,
    cta: 'Start with Crew',
    features: [
      'Up to eight trucks with drive-time dispatch',
      'Good, better, best quoting from your price book',
      'Per-truck van stock with restock lists',
      'Maintenance agreements and renewal reminders',
      'ACH, financing and automatic deposit reconciliation',
      'Phone support from former dispatchers, 6am–9pm ET',
      'Onboarding, shadow week and price-book build included',
    ],
  },
  {
    name: 'Fleet',
    audience: 'Multi-branch operations with a warehouse, a controller and commercial contracts.',
    price: { monthly: '$429', annual: '$357' },
    cadence: 'per month · unlimited trucks',
    popular: false,
    cta: 'Talk to the fleet team',
    features: [
      'Unlimited trucks across every branch',
      'Warehouse stock, transfers and purchase orders',
      'Route-based commercial service contracts',
      'Response-time targets with escalation',
      'Job costing and per-branch margin reporting',
      'Named account manager and quarterly review',
      'Priority support with a two-hour response target',
    ],
  },
]

const INCLUDED = [
  'Unlimited office users',
  'Data import from your old system',
  'No implementation fee',
  'Cancel any month, export everything',
]

export default function Pricing() {
  const [billing, setBilling] = useState<Billing>('monthly')

  return (
    <section id="pricing" className="border-b border-[#EADFCF] bg-white">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#C25A2B]">Pricing</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-[2.7rem]">Priced per truck, not per seat</h2>
          <p className="mt-5 text-lg leading-relaxed text-[#3D555F]">
            Charging by user punishes you for putting your service manager and your bookkeeper on the same board. You pay
            for the trucks you roll; office logins are unlimited on every plan.
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <div
            role="group"
            aria-label="Billing period"
            data-testid="billing-toggle"
            className="inline-flex rounded-full border border-[#EADFCF] bg-[#FBF6EE] p-1"
          >
            <button
              type="button"
              data-testid="billing-monthly"
              aria-pressed={billing === 'monthly'}
              onClick={() => setBilling('monthly')}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                billing === 'monthly' ? 'bg-[#12242C] text-white' : 'text-[#3D555F] hover:text-[#12242C]'
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              data-testid="billing-annual"
              aria-pressed={billing === 'annual'}
              onClick={() => setBilling('annual')}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                billing === 'annual' ? 'bg-[#12242C] text-white' : 'text-[#3D555F] hover:text-[#12242C]'
              }`}
            >
              Annual · two months free
            </button>
          </div>
        </div>

        <div className="mt-12 grid gap-7 lg:grid-cols-3">
          {PLANS.map((plan) => {
            const treatment = plan.popular ? 'promoted' : 'quiet'
            const promoted = treatment === 'promoted'

            return (
              <article
                key={plan.name}
                data-testid="plan-card"
                data-plan={plan.name}
                data-featured={promoted ? 'true' : 'false'}
                className={`flex flex-col rounded-3xl border p-8 ${
                  promoted
                    ? 'border-[#12242C] bg-[#12242C] text-[#E6EEF0] shadow-2xl shadow-[#12242C]/25 lg:-mt-4 lg:pb-12'
                    : 'border-[#EADFCF] bg-[#FBF6EE] text-[#12242C]'
                }`}
              >
                {promoted ? (
                  <span
                    data-testid="popular-badge"
                    className="mb-5 inline-flex w-fit items-center gap-2 rounded-full bg-[#E8813F] px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-[#12242C]"
                  >
                    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" aria-hidden="true" focusable="false">
                      <path d="M8 1.6l1.9 4.1 4.5.5-3.3 3 .9 4.4L8 11.4l-4 2.2.9-4.4-3.3-3 4.5-.5z" fill="#12242C" />
                    </svg>
                    Most popular
                  </span>
                ) : null}

                <h3 className="text-xl font-bold tracking-tight">{plan.name}</h3>
                <p className={`mt-2 text-sm leading-relaxed ${promoted ? 'text-[#A9C0C4]' : 'text-[#3D555F]'}`}>
                  {plan.audience}
                </p>

                <p className="mt-7 flex items-baseline gap-2">
                  <span data-testid="plan-price" className="text-4xl font-bold tracking-tight">
                    {plan.price[billing]}
                  </span>
                  <span className={`text-sm ${promoted ? 'text-[#A9C0C4]' : 'text-[#6A7F87]'}`}>{plan.cadence}</span>
                </p>
                <p className={`mt-2 text-xs ${promoted ? 'text-[#8FB0AE]' : 'text-[#6A7F87]'}`}>
                  {billing === 'annual' ? 'Billed once a year, two months free' : 'Billed monthly, no minimum term'}
                </p>

                <ul className="mt-7 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} data-testid="plan-feature" className="flex items-start gap-3 text-sm">
                      <svg viewBox="0 0 20 20" className="mt-0.5 h-4 w-4 flex-none" aria-hidden="true" focusable="false">
                        <path
                          d="M5 10.4l3.2 3.2L15 6.6"
                          stroke={promoted ? '#E8813F' : '#0E6A66'}
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className={promoted ? 'text-[#D6E2E4]' : 'text-[#3D555F]'}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#walkthrough"
                  data-testid="plan-cta"
                  className={`mt-8 rounded-xl px-6 py-3.5 text-center text-sm font-semibold transition ${
                    promoted
                      ? 'bg-[#E8813F] text-[#12242C] hover:bg-[#f79a5c]'
                      : 'border border-[#12242C]/20 text-[#12242C] hover:border-[#12242C]/60 hover:bg-white'
                  }`}
                >
                  {plan.cta}
                </a>
              </article>
            )
          })}
        </div>

        <ul className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3">
          {INCLUDED.map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm text-[#3D555F]">
              <svg viewBox="0 0 16 16" className="h-4 w-4 flex-none" aria-hidden="true" focusable="false">
                <circle cx="8" cy="8" r="7" fill="#0E6A66" opacity="0.12" />
                <path d="M5 8.3l2.2 2.2L11.3 6" stroke="#0E6A66" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {item}
            </li>
          ))}
        </ul>

        <p className="mt-8 text-center text-sm text-[#6A7F87]">
          Payment processing is 2.6% plus 15 cents for cards and 0.7% for ACH, capped at $6. Financing is offered through
          Ionia Lending at the rate your customer qualifies for; Copperline takes nothing on top.
        </p>
      </div>
    </section>
  )
}
