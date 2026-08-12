import { useState } from 'react'

type Billing = 'monthly' | 'yearly'

type Plan = {
  id: string
  name: string
  who: string
  monthly: number
  yearly: number
  cleaningsPerYear: number
  popular: boolean
  features: string[]
  cta: string
}

const PLANS: Plan[] = [
  {
    id: 'bright-start',
    name: 'Bright Start',
    who: 'One adult with healthy gums and no outstanding work',
    monthly: 32,
    yearly: 320,
    cleaningsPerYear: 2,
    popular: false,
    features: [
      'Two 45-minute cleanings a year',
      'Two exams with photographs',
      'One set of bitewing x-rays',
      '15% off fillings and crowns',
      'No joining fee, cancel with a month of notice',
    ],
    cta: 'Join Bright Start',
  },
  {
    id: 'complete-care',
    name: 'Complete Care',
    who: 'Most adults, and anyone with a history of fillings',
    monthly: 54,
    yearly: 540,
    cleaningsPerYear: 3,
    popular: true,
    features: [
      'Three 45-minute cleanings a year',
      'Two exams plus a full x-ray series',
      'One emergency visit at no charge',
      'Night-guard fitting and whitening trays',
      '20% off fillings, crowns and gum therapy',
      'Priority booking on cancellation slots',
    ],
    cta: 'Join Complete Care',
  },
  {
    id: 'whole-family',
    name: 'Whole Family',
    who: 'Up to four people living at the same address',
    monthly: 118,
    yearly: 1180,
    cleaningsPerYear: 8,
    popular: false,
    features: [
      'Everything in Complete Care, for four people',
      'Children under 12 seen back-to-back',
      'Fluoride varnish and sealants for kids',
      'Two emergency visits a year across the household',
      '20% off treatment for every member',
      'One shared invoice, one renewal date',
    ],
    cta: 'Join Whole Family',
  },
]

function priceFor(plan: Plan, billing: Billing): number {
  return billing === 'yearly' ? plan.yearly : plan.monthly
}

function CheckIcon({ tone }: { tone: 'light' | 'dark' }) {
  return (
    <svg
      viewBox="0 0 20 20"
      className={`mt-0.5 h-4 w-4 shrink-0 ${tone === 'dark' ? 'text-[#E8A6BF]' : 'text-[#1B6B60]'}`}
      aria-hidden="true"
    >
      <circle cx="10" cy="10" r="9" fill="currentColor" opacity="0.18" />
      <path
        d="M6 10.4l2.6 2.6L14 7.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function MembershipPlans() {
  const [billing, setBilling] = useState<Billing>('monthly')

  return (
    <section id="membership" className="bg-[#0F3B36]" aria-labelledby="membership-heading">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#E8A6BF]">
            In-house membership
          </p>
          <h2
            id="membership-heading"
            className="mt-4 font-serif text-3xl font-semibold tracking-tight text-[#FBF8F3] sm:text-4xl"
          >
            For the four in ten patients who have no dental insurance
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#FBF8F3]/75">
            A membership is not insurance. There is no deductible, no annual maximum, no waiting
            period and nobody to phone for pre-approval. You pay the practice directly, the
            preventive visits are already covered, and everything else comes off the same written
            price list hanging in reception.
          </p>
        </div>

        <div
          className="mt-10 inline-flex rounded-full border border-[#FBF8F3]/20 bg-[#0B2E2A] p-1"
          role="group"
          aria-label="Billing cadence"
        >
          <button
            type="button"
            data-testid="billing-monthly"
            aria-pressed={billing === 'monthly'}
            onClick={() => setBilling('monthly')}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
              billing === 'monthly' ? 'bg-[#FBF8F3] text-[#0F3B36]' : 'text-[#FBF8F3]/70'
            }`}
          >
            Monthly
          </button>
          <button
            type="button"
            data-testid="billing-yearly"
            aria-pressed={billing === 'yearly'}
            onClick={() => setBilling('yearly')}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
              billing === 'yearly' ? 'bg-[#FBF8F3] text-[#0F3B36]' : 'text-[#FBF8F3]/70'
            }`}
          >
            Pay yearly · two months free
          </button>
        </div>

        <div className="mt-12 grid grid-cols-1 items-start gap-6 lg:grid-cols-3">
          {PLANS.map((plan) => {
            const featured = plan.popular
            return (
              <article
                key={plan.id}
                data-testid="plan-card"
                data-plan={plan.id}
                className={`relative flex h-full flex-col rounded-3xl p-8 ${
                  featured
                    ? 'border-2 border-[#E8A6BF] bg-[#0B2E2A] shadow-2xl shadow-black/30 lg:-mt-4 lg:pb-12'
                    : 'border border-[#FBF8F3]/15 bg-[#123F3A]'
                }`}
              >
                {featured && (
                  <span
                    data-testid="popular-badge"
                    className="absolute -top-3 left-8 rounded-full bg-[#C2557E] px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white shadow-lg"
                  >
                    Most popular
                  </span>
                )}

                <h3 className="font-serif text-2xl font-semibold text-[#FBF8F3]">{plan.name}</h3>
                <p className="mt-2 text-sm text-[#FBF8F3]/60">{plan.who}</p>

                <p data-testid="plan-price" className="mt-6 flex items-baseline gap-1.5">
                  <span className="font-serif text-4xl font-semibold text-[#FBF8F3]">
                    ${priceFor(plan, billing)}
                  </span>
                  <span className="text-sm text-[#FBF8F3]/60">
                    {billing === 'yearly' ? '/year' : '/month'}
                  </span>
                </p>
                <p className="mt-1 text-xs text-[#FBF8F3]/45">
                  {plan.cleaningsPerYear} hygiene visits included each year
                </p>

                <ul className="mt-7 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      data-testid="plan-feature"
                      className="flex gap-2.5 text-sm leading-relaxed text-[#FBF8F3]/85"
                    >
                      <CheckIcon tone={featured ? 'dark' : 'light'} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#visit"
                  data-testid="plan-cta"
                  className={`mt-8 rounded-full px-6 py-3 text-center text-sm font-semibold transition-colors ${
                    featured
                      ? 'bg-[#C2557E] text-white hover:bg-[#A9436A]'
                      : 'border border-[#FBF8F3]/30 text-[#FBF8F3] hover:border-[#FBF8F3]/70'
                  }`}
                >
                  {plan.cta}
                </a>
              </article>
            )
          })}
        </div>

        <p className="mt-10 max-w-3xl text-sm leading-relaxed text-[#FBF8F3]/60">
          Memberships run for twelve months and renew on the day you joined. If you move away or
          your employer starts offering dental cover, tell us and we will refund the unused months
          rather than hold you to the term. Existing patients can switch plans once a year at their
          hygiene visit, and a partner joining a Whole Family plan mid-year is prorated to the
          household renewal date.
        </p>
      </div>
    </section>
  )
}
