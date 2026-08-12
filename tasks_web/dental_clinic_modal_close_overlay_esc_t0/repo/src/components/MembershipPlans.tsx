import { CheckIcon } from './Icons'

const PLANS = [
  {
    name: 'Essential',
    price: '$34',
    cadence: 'per month',
    summary: 'For healthy mouths that just need keeping that way.',
    perks: [
      'Two cleanings and two exams a year',
      'A full set of X-rays annually',
      'One emergency visit, exam and film included',
      '10% off any treatment you go ahead with',
    ],
    featured: false,
  },
  {
    name: 'Complete',
    price: '$49',
    cadence: 'per month',
    summary: 'What most of our uninsured patients end up on.',
    perks: [
      'Three cleanings a year instead of two',
      'Unlimited emergency visits with no exam fee',
      'Fluoride varnish and an annual nightguard check',
      '15% off treatment, including the CEREC crowns',
    ],
    featured: true,
  },
  {
    name: 'Restore',
    price: '$72',
    cadence: 'per month',
    summary: 'For people managing gum disease or a lot of existing work.',
    perks: [
      'Four periodontal maintenance visits a year',
      'Quarterly charting so the numbers get watched',
      'Repairs to existing crowns and bridges included',
      '20% off treatment and no interest on payment plans',
    ],
    featured: false,
  },
]

export function MembershipPlans() {
  return (
    <section id="membership" aria-labelledby="membership-heading" className="bg-[#FAF6F1]">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C2703D]">No insurance? Fine.</p>
          <h2 id="membership-heading" className="mt-3 text-3xl font-semibold tracking-tight text-[#0B2540] sm:text-4xl">
            The studio membership
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#42566A]">
            About a third of the people we see pay for their own dentistry — self-employed builders,
            fishing crews, artists, retirees whose employer plan ended. Membership is our answer to that:
            a flat monthly amount, no deductible, no annual maximum, no claim to argue about. Cancel any
            time with a month's notice.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <article
              key={plan.name}
              className={`flex flex-col rounded-3xl border p-8 shadow-sm ${
                plan.featured
                  ? 'border-[#0B2540] bg-[#0B2540] text-[#EFE6DA]'
                  : 'border-[#E4D8C8] bg-white text-[#0B2540]'
              }`}
            >
              {plan.featured && (
                <span className="mb-4 inline-flex w-fit rounded-full bg-[#C2703D] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white">
                  Most chosen
                </span>
              )}
              <h3 className="text-xl font-semibold tracking-tight">{plan.name}</h3>
              <p className={`mt-2 text-sm leading-relaxed ${plan.featured ? 'text-[#BFCBD6]' : 'text-[#7A6A58]'}`}>
                {plan.summary}
              </p>
              <p className="mt-6 flex items-baseline gap-2">
                <span className="text-4xl font-semibold tracking-tight">{plan.price}</span>
                <span className={`text-sm ${plan.featured ? 'text-[#BFCBD6]' : 'text-[#9A8973]'}`}>{plan.cadence}</span>
              </p>
              <ul className="mt-7 flex-1 space-y-3">
                {plan.perks.map((perk) => (
                  <li key={perk} className="flex gap-3 text-sm leading-relaxed">
                    <CheckIcon className={`mt-0.5 h-5 w-5 shrink-0 ${plan.featured ? 'text-[#E9A876]' : 'text-[#4E7C6A]'}`} />
                    <span className={plan.featured ? 'text-[#DDE5EC]' : 'text-[#42566A]'}>{perk}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#booking"
                className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition ${
                  plan.featured
                    ? 'bg-[#C2703D] text-white hover:bg-[#A85B2D]'
                    : 'border border-[#0B2540]/20 text-[#0B2540] hover:border-[#0B2540]/50'
                }`}
              >
                Join {plan.name}
              </a>
            </article>
          ))}
        </div>

        <p className="mt-10 max-w-3xl text-sm leading-relaxed text-[#7A6A58]">
          Membership covers one person; add a partner or a child for $22 a month each. It is not
          insurance and we will never call it that — it is a discount arrangement between you and this
          practice, and it starts the day you sign it rather than after a six-month waiting period.
        </p>
      </div>
    </section>
  )
}
