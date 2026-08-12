import { CheckIcon } from './Icons'

const PLANS = [
  {
    name: 'Drop-in',
    price: '£16',
    unit: 'per class',
    summary: 'For the weeks your diary decides for you.',
    features: [
      'Any of the six formats at the door price',
      'Bikes bookable fourteen days ahead',
      'Shoes, towels and showers included',
      'Recovery room on the days you ride',
    ],
    note: 'Sprint Deck £13 · Long Haul £22',
    highlight: false,
  },
  {
    name: 'Eight a month',
    price: '£96',
    unit: 'per month',
    summary: 'Two rides a week, which is what most people actually do.',
    features: [
      'Eight classes a month, any format',
      'Unused classes roll into the next month once',
      'Recovery room and sauna any opening hour',
      'Priority booking twenty-one days ahead',
      'Guest pass every month for £6',
    ],
    note: 'Most chosen · pauses free for a month a year',
    highlight: true,
  },
  {
    name: 'Unlimited',
    price: '£139',
    unit: 'per month',
    summary: 'For the five-a-week crowd and anyone training for something.',
    features: [
      'Every class on the timetable, no cap',
      'A twenty-minute coach review each quarter',
      'Written strength block updated every four weeks',
      'Two guest passes a month included',
      'Bike held for you up to five minutes past the hour',
    ],
    note: 'Cancel any month, no exit fee',
    highlight: false,
  },
]

export function MembershipPlans() {
  return (
    <section id="membership" className="bg-[#faf5ee]">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="max-w-3xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#d94a2b]">
            Monthly, rolling, cancellable
          </p>
          <h2 className="mt-4 text-4xl font-black uppercase leading-[0.95] tracking-tight text-[#101826] sm:text-5xl">
            Three ways to belong to the Pressroom
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-[#40485a]">
            No twelve-month tie-in, no joining fee, and no rate that changes after an introductory
            period. Move between tiers whenever you like — the desk will do it while you are
            standing there.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <article
              key={plan.name}
              data-testid="plan-card"
              className={`flex flex-col rounded-3xl border p-7 ${
                plan.highlight
                  ? 'border-[#d94a2b] bg-[#101826] text-[#faf5ee] shadow-[0_36px_80px_-48px_rgba(16,24,38,0.9)]'
                  : 'border-[#101826]/10 bg-white'
              }`}
            >
              <h3
                className={`text-2xl font-black tracking-tight ${
                  plan.highlight ? 'text-[#faf5ee]' : 'text-[#101826]'
                }`}
              >
                {plan.name}
              </h3>
              <p
                className={`mt-2 text-sm ${plan.highlight ? 'text-[#faf5ee]/70' : 'text-[#40485a]'}`}
              >
                {plan.summary}
              </p>

              <p className="mt-6 flex items-baseline gap-2">
                <span
                  className={`text-5xl font-black tracking-tight ${
                    plan.highlight ? 'text-[#efa63c]' : 'text-[#101826]'
                  }`}
                >
                  {plan.price}
                </span>
                <span
                  className={`text-xs font-bold uppercase tracking-wider ${
                    plan.highlight ? 'text-[#faf5ee]/60' : 'text-[#40485a]/70'
                  }`}
                >
                  {plan.unit}
                </span>
              </p>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className={`flex gap-3 text-sm leading-snug ${
                      plan.highlight ? 'text-[#faf5ee]/80' : 'text-[#40485a]'
                    }`}
                  >
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#d94a2b]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <p
                className={`mt-6 text-[11px] font-bold uppercase tracking-wider ${
                  plan.highlight ? 'text-[#efa63c]' : 'text-[#d94a2b]'
                }`}
              >
                {plan.note}
              </p>

              <a
                href="#intro"
                className={`mt-5 rounded-full px-6 py-3 text-center text-sm font-bold uppercase tracking-wider transition ${
                  plan.highlight
                    ? 'bg-[#d94a2b] text-[#faf5ee] hover:bg-[#c03f22]'
                    : 'bg-[#101826] text-[#faf5ee] hover:bg-[#d94a2b]'
                }`}
              >
                Ride once first
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
