import { CheckIcon } from './Icons'

const PLANS = [
  {
    name: 'Wharf Four',
    price: '$96',
    cadence: 'per month',
    summary: 'Four classes a month, any room, unused ones roll one month forward.',
    features: [
      'Four bookings a month across all three rooms',
      'One rollover month so a bad week does not cost you',
      'Mat, towel and reformer socks included',
      'Guest pass every quarter',
    ],
    cta: 'Start with four',
    highlight: false,
  },
  {
    name: 'Full Studio',
    price: '$168',
    cadence: 'per month',
    summary: 'Unlimited classes plus a coaching check-in every eight weeks.',
    features: [
      'Unlimited bookings, seven days a week',
      'Eight-week check-in with your primary teacher',
      'Priority list for the 5:45am reformer slots',
      'Two guest passes a month and 15% off workshops',
      'Free hold for up to eight weeks a year',
    ],
    cta: 'Take the full studio',
    highlight: true,
  },
  {
    name: 'Strength Loft',
    price: '$132',
    cadence: 'per month',
    summary: 'Barbell-only membership on a written twelve-week progression.',
    features: [
      'Unlimited Barbell Strength and open-loft hours',
      'Written twelve-week programme in your logbook',
      'Quarterly lift review filmed from two angles',
      'Add any studio class for $18',
    ],
    cta: 'Get under the bar',
    highlight: false,
  },
]

export default function MembershipPlans() {
  return (
    <section
      id="memberships"
      data-testid="memberships"
      aria-labelledby="memberships-heading"
      className="bg-[#1F4A3C]"
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-24">
        <div className="max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-[#9CC0AE]">Memberships</p>
          <h2
            id="memberships-heading"
            className="mt-3 text-3xl font-black tracking-tight text-[#FAF6F0] sm:text-4xl"
          >
            Three ways in, no contract on any of them
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#C7D8CF]">
            Everything is month to month and cancels from your account page in
            two clicks. We hold memberships free for surgery, travel or a rough
            stretch — just tell the desk, no note from anybody required.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <article
              key={plan.name}
              data-testid="plan-card"
              className={`flex flex-col rounded-2xl p-8 ${
                plan.highlight
                  ? 'bg-[#FAF6F0] shadow-[0_30px_60px_-32px_rgba(0,0,0,0.6)] ring-4 ring-[#C4623A]'
                  : 'bg-[#245445] text-[#EDF3EF]'
              }`}
            >
              {plan.highlight && (
                <span className="mb-4 inline-flex w-fit rounded-full bg-[#C4623A] px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-[#FFF8F2]">
                  Most members choose this
                </span>
              )}

              <h3
                className={`text-xl font-black tracking-tight ${
                  plan.highlight ? 'text-[#16211C]' : 'text-[#FAF6F0]'
                }`}
              >
                {plan.name}
              </h3>

              <p className="mt-4 flex items-baseline gap-2">
                <span
                  className={`text-4xl font-black tracking-tight ${
                    plan.highlight ? 'text-[#1F4A3C]' : 'text-[#FAF6F0]'
                  }`}
                >
                  {plan.price}
                </span>
                <span className={plan.highlight ? 'text-sm text-[#5C6B63]' : 'text-sm text-[#A9C6B7]'}>
                  {plan.cadence}
                </span>
              </p>

              <p
                className={`mt-3 text-sm leading-relaxed ${
                  plan.highlight ? 'text-[#4B5A52]' : 'text-[#C7D8CF]'
                }`}
              >
                {plan.summary}
              </p>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className={`flex items-start gap-2.5 text-sm leading-relaxed ${
                      plan.highlight ? 'text-[#3C4A42]' : 'text-[#DCE9E2]'
                    }`}
                  >
                    <CheckIcon title="Included" className="mt-0.5 h-5 w-5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#intro"
                className={`mt-8 rounded-full px-6 py-3 text-center text-sm font-bold transition ${
                  plan.highlight
                    ? 'bg-[#C4623A] text-[#FFF8F2] hover:bg-[#AC5330]'
                    : 'border-2 border-[#7FA894] text-[#FAF6F0] hover:bg-[#FAF6F0] hover:text-[#1F4A3C]'
                }`}
              >
                {plan.cta}
              </a>
            </article>
          ))}
        </div>

        <p className="mt-10 text-sm leading-relaxed text-[#A9C6B7]">
          Students, teachers, nurses and anyone on the wharf co-op roster take 15%
          off any plan — bring proof once and it sits on your account. Founding
          members from 2017 keep their original rate for as long as they stay.
        </p>
      </div>
    </section>
  )
}
