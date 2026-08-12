import { useState } from 'react'
import { ArrowRight, CheckMark } from './Icons'
import { Eyebrow, SectionHeading, Shell } from './PageKit'

type Billing = 'monthly' | 'annual'

type Plan = {
  id: string
  name: string
  tagline: string
  monthly: number
  annual: number
  annualTotal: number
  commitment: string
  cta: string
  features: string[]
}

/** The three memberships, in the order they sit on the page. */
const PLANS: Plan[] = [
  {
    id: 'open-floor',
    name: 'Open Floor',
    tagline: 'For members who already know what they are doing and just want the room.',
    monthly: 89,
    annual: 79,
    annualTotal: 948,
    commitment: 'Rolling, cancel with 30 days notice',
    cta: 'Start on Open Floor',
    features: [
      'Full strength floor during all staffed hours',
      'All twelve platforms, bars, plates and chalk',
      'Conditioning bay: rowers, bikes and skis',
      'A coach in the room to ask, session plan is yours',
      'Quarterly movement screen with a coach',
      'Guest pass once a month',
    ],
  },
  {
    id: 'coached',
    name: 'Coached',
    tagline: 'Three coached sessions a week on a program written for you. Where most members land.',
    monthly: 179,
    annual: 159,
    annualTotal: 1908,
    commitment: 'Rolling, pause free for up to eight weeks a year',
    cta: 'Join the Coached tier',
    features: [
      'Everything in Open Floor, plus coaching',
      'Three coached small-group sessions each week',
      'A written program that updates every block',
      'Eight-week retest with numbers you keep',
      'Full assessment and video review on week one',
      'Priority booking on the 6:00am and 5:45pm slots',
    ],
  },
  {
    id: 'full-program',
    name: 'Full Program',
    tagline: 'Unlimited coached sessions with monthly one-to-one reviews and nutrition support.',
    monthly: 289,
    annual: 259,
    annualTotal: 3108,
    commitment: 'Three month minimum, then rolling',
    cta: 'Talk to us about Full Program',
    features: [
      'Everything in Coached, without a session cap',
      'Unlimited coached sessions across all programs',
      'Monthly one-to-one review with your head coach',
      'Nutrition planning with Priya Raghunathan',
      'Two physio consultations a year in the annex',
      'Competition prep and meet-day handling',
    ],
  },
]

/** The membership we push on the page: Coached, the mid-tier most members land on. */
const PROMOTED_PLAN_ID = 'coached'

const BILLING_OPTIONS: { id: Billing; label: string; hint: string }[] = [
  { id: 'monthly', label: 'Monthly', hint: 'pay as you go' },
  { id: 'annual', label: 'Annual', hint: 'two months free' },
]

export default function Membership() {
  const [billing, setBilling] = useState<Billing>('monthly')

  return (
    <section id="membership" className="bg-[#F2EAE0] py-20 sm:py-24">
      <Shell>
        <SectionHeading
          eyebrow="Membership"
          title="Three ways to train here"
          lede="No joining fee, no twelve-month lock-in and no cancellation phone maze. Every membership includes the strength floor and the conditioning bay; what changes is how much coaching sits on top of it."
          align="center"
        />

        <div className="mt-10 flex flex-col items-center gap-3">
          <div
            role="group"
            aria-label="Billing period"
            data-testid="billing-toggle"
            className="inline-flex rounded-full border border-[#E2D6C6] bg-white p-1.5 shadow-sm"
          >
            {BILLING_OPTIONS.map((option) => {
              const active = billing === option.id
              return (
                <button
                  key={option.id}
                  type="button"
                  data-testid={`billing-${option.id}`}
                  aria-pressed={active}
                  onClick={() => setBilling(option.id)}
                  className={`rounded-full px-6 py-2.5 text-sm font-bold transition-colors ${
                    active ? 'bg-[#14181D] text-[#FBF7F1]' : 'text-[#4A4438] hover:text-[#D9481F]'
                  }`}
                >
                  {option.label}
                  <span className="ml-2 text-[11px] font-semibold uppercase tracking-wide opacity-70">
                    {option.hint}
                  </span>
                </button>
              )
            })}
          </div>
          <p className="text-sm text-[#7A6E60]">
            {billing === 'annual'
              ? 'Annual members pay for ten months and train for twelve.'
              : 'Monthly members can switch to annual billing at any time.'}
          </p>
        </div>

        <div className="mt-12 grid items-start gap-6 lg:grid-cols-3">
          {PLANS.map((plan) => {
            const promoted = plan.id === PROMOTED_PLAN_ID
            const price = billing === 'annual' ? plan.annual : plan.monthly

            return (
              <article
                key={plan.id}
                data-testid="plan-card"
                data-plan-id={plan.id}
                data-promoted={promoted ? 'true' : 'false'}
                className={
                  promoted
                    ? 'relative flex h-full flex-col rounded-3xl border border-[#14181D] bg-[#14181D] p-8 text-[#FBF7F1] shadow-2xl shadow-[#14181D]/25 lg:-mt-6 lg:pb-12'
                    : 'relative flex h-full flex-col rounded-3xl border border-[#E2D6C6] bg-white p-8 text-[#14181D] shadow-sm'
                }
              >
                {promoted && (
                  <span
                    data-testid="popular-badge"
                    className="absolute -top-3 left-8 inline-flex items-center rounded-full bg-[#D9481F] px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.16em] text-white shadow-lg"
                  >
                    Most popular
                  </span>
                )}

                <h3 className={`text-2xl font-black tracking-tight ${promoted ? 'mt-3' : ''}`}>{plan.name}</h3>
                <p className={`mt-3 text-[15px] leading-relaxed ${promoted ? 'text-[#E2D6C6]' : 'text-[#4A4438]'}`}>
                  {plan.tagline}
                </p>

                <p data-testid="plan-price" className="mt-7 flex items-baseline gap-1.5">
                  <span className="text-5xl font-black tracking-tight">${price}</span>
                  <span className={`text-sm font-semibold ${promoted ? 'text-[#E2D6C6]' : 'text-[#7A6E60]'}`}>
                    /month
                  </span>
                </p>
                <p className={`mt-2 text-sm ${promoted ? 'text-[#E2D6C6]' : 'text-[#7A6E60]'}`}>
                  {billing === 'annual'
                    ? `Billed $${plan.annualTotal.toLocaleString('en-US')} once a year`
                    : 'Billed monthly, first month pro-rated'}
                </p>

                <ul className="mt-7 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} data-testid="plan-feature" className="flex items-start gap-2.5 text-sm leading-snug">
                      <CheckMark className={`mt-0.5 h-4 w-4 shrink-0 ${promoted ? 'text-[#F0803F]' : 'text-[#12554D]'}`} />
                      <span className={promoted ? 'text-[#E2D6C6]' : 'text-[#4A4438]'}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <p className={`mt-6 text-xs ${promoted ? 'text-[#E2D6C6]/80' : 'text-[#7A6E60]'}`}>{plan.commitment}</p>

                <a
                  href="#intro"
                  data-testid="plan-cta"
                  className={
                    promoted
                      ? 'mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-[#D9481F] px-6 py-3.5 text-sm font-bold text-white transition-transform hover:-translate-y-0.5'
                      : 'mt-5 inline-flex items-center justify-center gap-2 rounded-full border border-[#14181D] px-6 py-3.5 text-sm font-bold text-[#14181D] transition-colors hover:bg-[#14181D] hover:text-[#FBF7F1]'
                  }
                >
                  {plan.cta}
                  <ArrowRight />
                </a>
              </article>
            )
          })}
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 rounded-3xl border border-[#E2D6C6] bg-[#FBF7F1] px-8 py-7 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <Eyebrow tone="pine">Not sure yet</Eyebrow>
            <h3 className="mt-3 text-xl font-black tracking-tight text-[#14181D]">
              Every membership starts with the same free intro
            </h3>
            <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-[#4A4438]">
              Forty-five minutes with a coach: a movement screen, a conversation about your week, and an honest
              answer about which tier fits. Nobody is asked for a card on the day.
            </p>
          </div>
          <a
            href="#intro"
            data-testid="membership-intro-cta"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#12554D] px-6 py-3.5 text-sm font-bold text-[#FBF7F1] transition-transform hover:-translate-y-0.5"
          >
            Book the free intro
            <ArrowRight />
          </a>
        </div>
      </Shell>
    </section>
  )
}
