const PLANS = [
  {
    name: 'Steady',
    price: '£14.50',
    cadence: 'per month',
    pitch: 'The plan most families are on. Covers the routine year without a bill landing at Christmas.',
    includes: [
      'Two checkups a year',
      'Two hygienist visits',
      '10% off any treatment',
      'Free emergency triage',
    ],
  },
  {
    name: 'Steady Plus',
    price: '£23.00',
    cadence: 'per month',
    pitch: 'For gums that need watching, or anyone rebuilding after a long gap away from the dentist.',
    includes: [
      'Three checkups a year',
      'Four hygienist visits',
      '15% off any treatment',
      'Night guard replaced at cost',
    ],
  },
  {
    name: 'Household',
    price: '£38.00',
    cadence: 'per month',
    pitch: 'Two adults on Steady plus every child under twelve at the same address, on one direct debit.',
    includes: [
      'Two adults fully covered',
      'Children under twelve free',
      '15% off any treatment',
      'One family appointment slot',
    ],
  },
]

export function MembershipPlans() {
  return (
    <section id="membership" className="bg-[#EFF4EE] py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#B98B22]">Membership</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#123B36] sm:text-4xl">
            Spread the routine year over twelve payments
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#4A5A53]">
            Membership is optional and you can leave with a month's notice. It exists because paying £132 in one
            February afternoon is what stops people booking the checkup at all.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <article
              key={plan.name}
              data-testid="plan-card"
              className="flex flex-col rounded-2xl border border-[#123B36]/10 bg-white p-8 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-[#123B36]">{plan.name}</h3>
              <p className="mt-4 flex items-baseline gap-2">
                <span className="text-4xl font-bold tracking-tight text-[#123B36]">{plan.price}</span>
                <span className="text-sm text-[#8A7A5C]">{plan.cadence}</span>
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[#4A5A53]">{plan.pitch}</p>
              <ul className="mt-6 flex-1 space-y-3">
                {plan.includes.map((line) => (
                  <li key={line} className="flex gap-3 text-sm text-[#123B36]">
                    <svg viewBox="0 0 20 20" className="mt-0.5 h-4 w-4 shrink-0 text-[#E8A020]" aria-hidden="true">
                      <path d="m4 10.5 4 4 8-9" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {line}
                  </li>
                ))}
              </ul>
              <a
                href="#book"
                data-testid="plan-cta"
                className="mt-8 rounded-full border border-[#123B36]/25 px-5 py-3 text-center text-sm font-semibold text-[#123B36] transition hover:border-[#123B36]/60"
              >
                Join {plan.name}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
