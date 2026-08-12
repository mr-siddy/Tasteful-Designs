const PLANS = [
  {
    name: 'Two Days',
    price: '$149',
    cadence: 'per month',
    summary: 'Two coached sessions a week in any program, plus open training on weekends.',
    includes: [
      'Two coached sessions weekly',
      'Written twelve-week program',
      'Weekend open training',
      'Retest week every block',
    ],
  },
  {
    name: 'Unlimited',
    price: '$189',
    cadence: 'per month',
    summary: 'The membership most people land on: every class, every staffed hour, no counting.',
    includes: [
      'Every coached session, all programs',
      'Open training 5am–8pm',
      'Quarterly nutrition check-in',
      'Free guest pass each month',
      'Heart-rate belt on loan',
    ],
  },
  {
    name: 'Household',
    price: '$319',
    cadence: 'per month',
    summary: 'Two adults at one address, both unlimited, with sessions you can book together.',
    includes: [
      'Two unlimited memberships',
      'Paired session booking',
      'Shared quarterly check-in',
      'Teen off-season block in June',
    ],
  },
]

export default function MembershipPlans() {
  return (
    <section id="membership" data-testid="membership" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-lime-700">Membership</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
            Three ways in, no contract
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Month to month, cancelled by email, no initiation fee and no annual lock. We would rather
            you stayed because the training works than because leaving is annoying.
          </p>
        </div>

        <div className="mt-14 grid gap-7 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              data-testid="plan-card"
              className="flex flex-col rounded-3xl border border-slate-200 bg-stone-50 p-8 shadow-sm"
            >
              <h3 className="text-xl font-bold tracking-tight text-slate-900">{plan.name}</h3>
              <p className="mt-4 flex items-baseline gap-2">
                <span className="text-4xl font-black tracking-tight text-slate-900">{plan.price}</span>
                <span className="text-sm text-slate-500">{plan.cadence}</span>
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">{plan.summary}</p>
              <ul className="mt-6 flex-1 space-y-2.5 text-sm text-slate-600">
                {plan.includes.map((line) => (
                  <li key={line} className="flex gap-2.5">
                    <svg viewBox="0 0 20 20" className="mt-0.5 h-4 w-4 shrink-0 text-lime-600" fill="currentColor" aria-hidden="true">
                      <path d="M8.2 13.4 5 10.2l1.3-1.3 1.9 1.9 5.5-5.5L15 6.6l-6.8 6.8Z" />
                    </svg>
                    {line}
                  </li>
                ))}
              </ul>
              <a
                href="#join"
                className="mt-8 rounded-full border border-slate-900 px-6 py-3 text-center text-sm font-bold text-slate-900 transition hover:bg-slate-900 hover:text-lime-300"
              >
                Start with {plan.name}
              </a>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-slate-500">
          Students, teachers, city employees and anyone with a Baltimore City ID train at 15% off —
          just say so at the desk, we do not ask for paperwork twice.
        </p>
      </div>
    </section>
  )
}
