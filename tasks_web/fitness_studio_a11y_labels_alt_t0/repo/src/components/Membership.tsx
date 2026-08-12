import { SectionHeading } from './PageKit'
import { CheckIcon } from './Icons'

const PLANS = [
  {
    name: 'Foundations',
    price: '$180',
    cadence: 'per month, first eight weeks',
    summary: 'The on-ramp. Three coached sessions a week in a group capped at twelve.',
    features: [
      'Movement assessment and written starting loads',
      'Three Barbell Foundations sessions each week',
      'Programme card reviewed at the end of every block',
      'Open gym access on the days you are not coached',
    ],
  },
  {
    name: 'Full Club',
    price: '$240',
    cadence: 'per month, no contract',
    summary: 'Where most members land after the on-ramp. Everything the building does.',
    features: [
      'Every coached session on the timetable, unlimited',
      'Conditioning, Masters Strength and Barbell Club included',
      'Open gym 5:30am to 9:30pm, seven days',
      'Quarterly retest and a rewritten block with a coach',
      'One guest pass on the first Saturday of the month',
    ],
    popular: true,
  },
  {
    name: 'Open Gym',
    price: '$120',
    cadence: 'per month, no contract',
    summary: 'The room and the equipment for people who already have a plan.',
    features: [
      'Open gym access, every day the desk is staffed',
      'Racks, platforms, calibrated plates and the Engine Room',
      'One programme review each quarter',
      'Coached sessions available as drop-ins at $22',
    ],
  },
]

export default function Membership() {
  return (
    <section id="membership" className="bg-[#F7F3EC]">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading
          eyebrow="Membership"
          title="Three memberships, no contract, no joining fee"
          blurb="Cancel before the 25th and the next month does not run. There is no notice period, no freeze fee and no salesperson — if you want to leave, you tell the desk and it is done."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <article
              key={plan.name}
              data-testid="plan-card"
              className={`flex flex-col rounded-3xl border p-8 ${
                plan.popular
                  ? 'border-[#E1552B] bg-[#12141A] text-[#F7F3EC] shadow-xl'
                  : 'border-[#12141A]/10 bg-white text-[#12141A]'
              }`}
            >
              {plan.popular ? (
                <p
                  data-testid="popular-badge"
                  className="mb-4 inline-flex w-fit rounded-full bg-[#E1552B] px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-[#12141A]"
                >
                  What most members pick
                </p>
              ) : null}
              <h3 className="text-xl font-black tracking-tight">{plan.name}</h3>
              <p className="mt-4 text-4xl font-black tracking-tight">{plan.price}</p>
              <p className={`mt-1 text-xs uppercase tracking-[0.1em] ${plan.popular ? 'text-[#F7F3EC]/55' : 'text-[#12141A]/50'}`}>
                {plan.cadence}
              </p>
              <p className={`mt-4 text-sm leading-relaxed ${plan.popular ? 'text-[#F7F3EC]/80' : 'text-[#12141A]/75'}`}>
                {plan.summary}
              </p>
              <ul className="mt-6 flex flex-1 flex-col gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm leading-relaxed">
                    <CheckIcon className="mt-0.5 h-4 w-4 flex-none text-[#E1552B]" />
                    <span className={plan.popular ? 'text-[#F7F3EC]/85' : 'text-[#12141A]/80'}>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#book"
                className={`mt-8 rounded-full px-6 py-3 text-center text-sm font-bold transition-colors ${
                  plan.popular
                    ? 'bg-[#E1552B] text-[#12141A] hover:bg-[#F2703F]'
                    : 'border border-[#12141A]/20 text-[#12141A] hover:border-[#E1552B] hover:text-[#E1552B]'
                }`}
              >
                Start with {plan.name}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
