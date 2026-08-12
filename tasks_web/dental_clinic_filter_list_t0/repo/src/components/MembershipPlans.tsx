import { CheckIcon } from './Icons'

const PLANS = [
  {
    name: 'Steady',
    price: '$21',
    cadence: 'per month',
    summary: 'For people whose teeth are fine and who would like them to stay that way.',
    perks: [
      'Two exams and two hygiene visits a year',
      'All x-rays included',
      '10% off anything on the treatment index',
      'Emergency triage appointment at no charge',
    ],
    featured: false,
  },
  {
    name: 'Steady Plus',
    price: '$34',
    cadence: 'per month',
    summary: 'For anyone carrying older fillings, crowns or a history of gum trouble.',
    perks: [
      'Three hygiene visits and two exams a year',
      'Gum charting and a written maintenance plan',
      '20% off anything on the treatment index',
      'Night guard replaced once every three years',
      'Emergency appointments seen same day, free',
    ],
    featured: true,
  },
  {
    name: 'Household',
    price: '$68',
    cadence: 'per month, up to five people',
    summary: 'Two adults and up to three children under sixteen, on one direct debit.',
    perks: [
      'Everything in Steady for every adult',
      'Children’s checkups and fluoride included',
      '15% off anything on the treatment index',
      'One appointment slot booked back to back for the family',
    ],
    featured: false,
  },
]

export function MembershipPlans() {
  return (
    <section id="membership" className="bg-[#F1F5F7]">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#2AA79B]">
            Membership
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#12263F] sm:text-4xl">
            Spread the routine work over the year
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#5B7089]">
            Membership is not insurance and we will not pretend otherwise. It is a direct debit that
            covers your routine appointments and takes a slice off everything else. Cancel any month
            with an email — there is no minimum term and no joining fee.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <article
              key={plan.name}
              className={`flex flex-col rounded-2xl border p-7 ${
                plan.featured
                  ? 'border-[#F26D5B] bg-white shadow-lg shadow-[#F26D5B]/10'
                  : 'border-[#12263F]/8 bg-white shadow-sm shadow-[#12263F]/5'
              }`}
            >
              {plan.featured && (
                <span className="mb-4 w-fit rounded-full bg-[#F26D5B] px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-white">
                  Most chosen
                </span>
              )}
              <h3 className="text-xl font-semibold tracking-tight text-[#12263F]">{plan.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5B7089]">{plan.summary}</p>
              <p className="mt-6 flex items-baseline gap-2">
                <span className="text-4xl font-semibold tracking-tight text-[#12263F]">
                  {plan.price}
                </span>
                <span className="text-sm text-[#5B7089]">{plan.cadence}</span>
              </p>
              <ul className="mt-6 flex-1 space-y-3">
                {plan.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-3 text-sm text-[#12263F]/80">
                    <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-[#2AA79B]" />
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#book"
                className={`mt-8 rounded-full px-5 py-3 text-center text-sm font-semibold transition ${
                  plan.featured
                    ? 'bg-[#F26D5B] text-white hover:bg-[#e05a48]'
                    : 'border border-[#12263F]/15 text-[#12263F] hover:border-[#12263F]'
                }`}
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
