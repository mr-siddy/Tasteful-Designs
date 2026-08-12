import { CheckIcon } from './Icons'

const PLANS = [
  {
    name: 'Lantern Care',
    price: '$29',
    cadence: 'per month',
    summary: 'For people whose teeth are in good order and who want to keep them that way.',
    features: [
      'Two checkups a year, included',
      'Two hygienist visits a year, included',
      'X-rays as clinically needed',
      '10% off any treatment',
    ],
  },
  {
    name: 'Lantern Care Plus',
    price: '$49',
    cadence: 'per month',
    summary: 'For gums that need watching, or a mouth carrying a lot of older work.',
    features: [
      'Two checkups and three hygienist visits',
      'Emergency assessment included, any time',
      'Free replacement of a failed filling within 2 years',
      '15% off any treatment',
      'Worldwide dental trauma cover',
    ],
  },
  {
    name: 'Family Lantern',
    price: '$89',
    cadence: 'per month',
    summary: 'Two adults and up to three children under eighteen, on one direct debit.',
    features: [
      'Everything in Lantern Care Plus, per adult',
      'Children seen free, twice a year',
      'Fissure sealants included for under-16s',
      '15% off any treatment for everyone named',
    ],
  },
]

export default function MembershipPlans() {
  return (
    <section id="membership" className="bg-[#f6eee4]">
      <div className="mx-auto max-w-6xl px-5 py-20 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#f2704a]">
            Membership
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#152046] sm:text-4xl">
            Spread the routine cost, skip the invoices
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#1f2a4d]/75">
            None of these plans is insurance and none of them locks you in — a month's notice
            cancels any of them. They exist because paying $18 a fortnight is easier to plan
            around than two $155 bills that always seem to land in the same week.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <li
              key={plan.name}
              className="flex flex-col rounded-3xl border border-[#152046]/10 bg-white p-8 shadow-sm"
            >
              <h3 className="text-xl font-semibold tracking-tight text-[#152046]">{plan.name}</h3>
              <p className="mt-4 flex items-baseline gap-2">
                <span className="text-4xl font-semibold tracking-tight text-[#152046]">
                  {plan.price}
                </span>
                <span className="text-sm text-[#1f2a4d]/60">{plan.cadence}</span>
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[#1f2a4d]/75">{plan.summary}</p>
              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex gap-3 text-sm leading-relaxed text-[#1f2a4d]/80"
                  >
                    <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-[#f2704a]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#book"
                className="mt-8 inline-flex justify-center rounded-full border border-[#152046]/20 px-6 py-3 text-sm font-semibold text-[#152046] transition hover:border-[#152046]/45"
              >
                Ask about {plan.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
