const PLANS = [
  {
    name: 'Child',
    price: '$21',
    cadence: 'per month, under 14',
    summary: 'Two cleanings, two exams, sealants when they are needed and varnish every visit.',
    perks: ['2 cleanings a year', 'Sealants included', 'Emergency exam free', '15% off treatment'],
    featured: false,
  },
  {
    name: 'Adult',
    price: '$34',
    cadence: 'per month, no waiting period',
    summary: 'The one most uninsured patients take. Covers routine care outright and takes a fifth off everything else.',
    perks: ['2 cleanings a year', 'All x-rays included', 'One emergency visit', '20% off treatment'],
    featured: true,
  },
  {
    name: 'Perio',
    price: '$52',
    cadence: 'per month, gum programme',
    summary: 'For anyone on a three-month recall. Four maintenance visits with Ruth and the charting that goes with them.',
    perks: ['4 visits a year', 'Full pocket charting', 'Antimicrobial rinse', '20% off treatment'],
    featured: false,
  },
]

/** Membership tiers for the roughly third of our patients with no dental cover. */
export default function MembershipPlans() {
  return (
    <section id="membership" data-testid="membership" className="bg-[#faf5ec]">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#c68a3e]">
            No insurance?
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-[#0d2b2e] sm:text-4xl">
            Our own plan, billed monthly, cancel whenever
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#0d2b2e]/70">
            About a third of the families we see have no dental cover at all. Rather than
            send them away we run our own membership: no deductible, no annual maximum,
            no claim forms and no waiting six months before anything is allowed.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <article
              key={plan.name}
              data-testid="plan-card"
              className={
                plan.featured
                  ? 'relative rounded-2xl border-2 border-[#c68a3e] bg-white p-8 shadow-lg'
                  : 'relative rounded-2xl border border-[#0f4c4f]/10 bg-white p-8'
              }
            >
              {plan.featured && (
                <span
                  data-testid="plan-badge"
                  className="absolute -top-3 left-8 rounded-full bg-[#c68a3e] px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#0d2b2e]"
                >
                  Most families pick this
                </span>
              )}
              <h3 className="font-serif text-xl font-semibold text-[#0d2b2e]">{plan.name}</h3>
              <p className="mt-4 font-serif text-4xl font-semibold text-[#0f4c4f]">
                {plan.price}
                <span className="ml-1 align-middle text-sm font-normal text-[#0d2b2e]/50">
                  /mo
                </span>
              </p>
              <p className="mt-1 text-sm text-[#0d2b2e]/60">{plan.cadence}</p>
              <p className="mt-5 text-[15px] leading-relaxed text-[#0d2b2e]/75">{plan.summary}</p>

              <ul className="mt-6 space-y-2.5 border-t border-[#0f4c4f]/10 pt-6">
                {plan.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-2 text-sm text-[#0d2b2e]/75">
                    <svg viewBox="0 0 16 16" className="mt-1 h-3.5 w-3.5 shrink-0" aria-hidden="true">
                      <path
                        d="M3 8.4l3 3 7-7.6"
                        fill="none"
                        stroke="#1c6f6b"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                    {perk}
                  </li>
                ))}
              </ul>

              <a
                href="#book"
                data-testid="plan-cta"
                className={
                  plan.featured
                    ? 'mt-7 block rounded-full bg-[#0f4c4f] px-5 py-3 text-center text-sm font-semibold text-[#faf5ec]'
                    : 'mt-7 block rounded-full border border-[#0f4c4f]/25 px-5 py-3 text-center text-sm font-semibold text-[#0f4c4f]'
                }
              >
                Join the {plan.name.toLowerCase()} plan
              </a>
            </article>
          ))}
        </div>

        <p className="mt-10 text-sm text-[#0d2b2e]/60">
          Membership is not insurance and we say so in the paperwork — it is a discount
          arrangement with us, and only us.
        </p>
      </div>
    </section>
  )
}
