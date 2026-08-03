const PLANS = [
  {
    name: 'Everyday',
    price: '$29',
    cadence: 'per month',
    summary: 'For an adult who just wants the basics kept on top of.',
    includes: [
      'Two hygiene appointments a year',
      'One full examination with X-rays',
      '15% off any treatment you go ahead with',
      'Emergency visit fee waived once a year',
    ],
  },
  {
    name: 'Everyday Plus',
    price: '$44',
    cadence: 'per month',
    summary: 'For gums that need watching, or teeth that stain quickly.',
    includes: [
      'Three hygiene appointments a year',
      'One full examination with X-rays',
      'A whitening top-up tray each spring',
      '20% off any treatment you go ahead with',
    ],
  },
  {
    name: 'Family',
    price: '$79',
    cadence: 'per month',
    summary: 'Two adults and up to three children under sixteen, on one bill.',
    includes: [
      'Everything in Everyday, twice over',
      'Children’s check-ups and fluoride included',
      'Appointments block-booked in the same hour',
      '20% off treatment for everyone on the plan',
    ],
  },
]

export function MembershipPlans() {
  return (
    <section id="membership" data-testid="membership" className="bg-white">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#2fb99b]">
            No insurance? Read this
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">
            Membership, because paying $95 twice a year should not need a plan document
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#0b2d45]/75">
            Around a third of our patients have no dental cover at all. These three plans are billed
            monthly, cancel with a month’s notice, and are not insurance — there is no claim to make
            and no annual maximum to run out of.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <article
              key={plan.name}
              data-testid="plan-card"
              className="flex flex-col rounded-3xl border border-[#0b2d45]/12 bg-[#f6fafb] p-8"
            >
              <h3 className="font-serif text-2xl font-semibold">{plan.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#0b2d45]/70">{plan.summary}</p>
              <p className="mt-6 flex items-baseline gap-2">
                <span className="font-serif text-4xl font-semibold">{plan.price}</span>
                <span className="text-sm text-[#0b2d45]/60">{plan.cadence}</span>
              </p>
              <ul className="mt-6 flex-1 space-y-3 border-t border-[#0b2d45]/10 pt-6">
                {plan.includes.map((line) => (
                  <li key={line} className="flex items-start gap-3 text-sm text-[#0b2d45]/80">
                    <svg
                      viewBox="0 0 20 20"
                      className="mt-0.5 h-4 w-4 shrink-0 text-[#2fb99b]"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path
                        d="M4.5 10.4l3.4 3.4L15.5 6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {line}
                  </li>
                ))}
              </ul>
              <a
                href="#book"
                className="mt-8 rounded-full border border-[#0b2d45]/20 bg-white px-6 py-3 text-center text-sm font-semibold text-[#0b2d45] transition hover:border-[#0b2d45]/45"
              >
                Ask about {plan.name}
              </a>
            </article>
          ))}
        </div>

        <p className="mt-8 text-sm leading-relaxed text-[#0b2d45]/60">
          Payment plans on treatment over $600 are interest-free over six months, arranged at the
          desk with Wes. We do not use a third-party finance company and there is no credit check.
        </p>
      </div>
    </section>
  )
}
