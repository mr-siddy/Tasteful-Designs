const PLANS = [
  {
    name: 'Wellhead',
    price: '$180',
    cadence: 'per month',
    fit: 'Systems under 3,300 connections',
    includes: [
      'Sampling calendar and route sheets',
      'Lab intake for one laboratory',
      'Monthly operating report and CCR',
      'Three years of archived submittals',
      'Email support, next business day',
    ],
  },
  {
    name: 'District',
    price: '$420',
    cadence: 'per month',
    fit: 'Systems from 3,300 to 25,000 connections',
    includes: [
      'Everything in Wellhead',
      'Nightly SCADA import from your historian',
      'Unlimited laboratories and electronic deliverables',
      'Ten-year audit binder with reviewer access',
      'Deadline watch by email and SMS',
      'Phone support from a licensed operator',
    ],
  },
  {
    name: 'Regional',
    price: '$980',
    cadence: 'per month',
    fit: 'Multi-system utilities and contract operators',
    includes: [
      'Everything in District',
      'Unlimited systems under one login',
      'Cross-system dashboards for the utility director',
      'Corrective-action tracking with named owners',
      'Onboarding for each system at no charge',
      'A named account operator you can call directly',
    ],
  },
]

export function PricingPlans() {
  return (
    <section id="pricing" className="bg-[#FBF8F3]" aria-labelledby="pricing-heading">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-[13px] font-semibold uppercase tracking-[0.22em] text-[#D97742]">
            Pricing
          </p>
          <h2 id="pricing-heading" className="mt-4 text-4xl font-semibold tracking-tight lg:text-[42px]">
            Priced by the size of the system, not the size of the staff
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-[#08312F]/70">
            One price per system, billed monthly or on your fiscal year. Everyone at the utility gets
            a login — the part-time operator, the clerk and the superintendent — because charging per
            seat in a two-person shop is how software gets shared passwords.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {PLANS.map((p) => (
            <div
              key={p.name}
              data-testid="pricing-plan"
              className="flex flex-col rounded-2xl bg-white p-8 ring-1 ring-[#08312F]/10"
            >
              <h3 className="text-[21px] font-semibold tracking-tight">{p.name}</h3>
              <p className="mt-1.5 text-[14px] text-[#08312F]/60">{p.fit}</p>
              <p className="mt-6 flex items-baseline gap-2">
                <span className="text-4xl font-semibold tracking-tight">{p.price}</span>
                <span className="text-[15px] text-[#08312F]/60">{p.cadence}</span>
              </p>
              <ul className="mt-7 flex-1 space-y-3 text-[15px] text-[#08312F]/75">
                {p.includes.map((inc) => (
                  <li key={inc} className="flex gap-3">
                    <svg viewBox="0 0 20 20" className="mt-1 h-4 w-4 shrink-0 text-[#17A398]" aria-hidden="true">
                      <path
                        d="M3 10.5l4.5 4.5L17 5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#book"
                className="mt-8 rounded-full bg-[#08312F] px-6 py-3 text-center text-[15px] font-medium text-[#FBF8F3] transition hover:bg-[#0B4340]"
              >
                Book a walkthrough
              </a>
            </div>
          ))}
        </div>

        <p className="mt-8 text-[14px] text-[#08312F]/60">
          Onboarding, historian connection and lab setup are included at every tier. Systems that
          switch mid-year are billed from their first filed report, not their signature date.
        </p>
      </div>
    </section>
  )
}
