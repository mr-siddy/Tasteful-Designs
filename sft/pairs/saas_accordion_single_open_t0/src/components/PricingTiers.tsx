const TIERS = [
  {
    name: 'List',
    price: '$180',
    cadence: 'per month, billed yearly',
    blurb: 'For imprints publishing up to twenty-five titles a year.',
    features: [
      'Season board and proof rounds',
      'Three production seats, guests free',
      'ONIX 3.0 feed to one wholesaler',
      'Email support, next working day',
    ],
    cta: 'Start on List',
    featured: false,
  },
  {
    name: 'Season',
    price: '$420',
    cadence: 'per month, billed yearly',
    blurb: 'For presses running two or three lists a year across several printers.',
    features: [
      'Everything on List, up to 120 titles',
      'Ten production seats and freelancer access',
      'Unlimited feeds, including MARC exports',
      'Printer quote comparison and purchase orders',
      'Named production contact, phone support',
    ],
    cta: 'Start on Season',
    featured: true,
  },
  {
    name: 'Imprint',
    price: '$940',
    cadence: 'per month, billed yearly',
    blurb: 'For houses with multiple imprints and a rights department.',
    features: [
      'Unlimited titles and imprints',
      'Rights, royalties and territory reporting',
      'Sell-through and reprint forecasting',
      'Single sign-on and audit history',
      'Quarterly review with your account team',
    ],
    cta: 'Talk to sales',
    featured: false,
  },
]

export function PricingTiers() {
  return (
    <section id="pricing" className="bg-[#FBF8F2]">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#C0462A]">Pricing</p>
          <h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-[#141B2E] sm:text-5xl">
            Priced on titles, not on seats
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#5C6377]">
            Charging per seat means presses ration logins and the freelance copyeditor ends up working
            from an emailed attachment again. Every plan below includes free guest access for authors,
            designers and freelancers, and the import is done by us at no charge.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {TIERS.map((tier) => (
            <article
              key={tier.name}
              data-testid="tier-card"
              className={`flex flex-col rounded-3xl border p-8 ${
                tier.featured
                  ? 'border-[#141B2E] bg-[#141B2E] text-[#F3EDE1] shadow-xl'
                  : 'border-[#E3DCCE] bg-white text-[#141B2E] shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold tracking-tight">{tier.name}</h3>
                {tier.featured && (
                  <span
                    data-testid="popular-badge"
                    className="rounded-full bg-[#C0462A] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#FBF8F2]"
                  >
                    Most chosen
                  </span>
                )}
              </div>

              <p className={`mt-4 font-serif text-5xl font-semibold ${tier.featured ? '' : 'text-[#141B2E]'}`}>
                {tier.price}
              </p>
              <p className={`mt-1 text-sm ${tier.featured ? 'text-[#C6CBDC]' : 'text-[#5C6377]'}`}>
                {tier.cadence}
              </p>
              <p className={`mt-4 text-sm leading-relaxed ${tier.featured ? 'text-[#C6CBDC]' : 'text-[#5C6377]'}`}>
                {tier.blurb}
              </p>

              <ul className="mt-7 flex-1 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm leading-relaxed">
                    <svg
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      className={`mt-0.5 h-4 w-4 flex-none ${tier.featured ? 'text-[#E0C4B8]' : 'text-[#C0462A]'}`}
                    >
                      <path
                        d="m4 10.5 4 4 8-9"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className={tier.featured ? 'text-[#E4E7F0]' : 'text-[#3B4256]'}>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#demo"
                className={`mt-8 rounded-full px-6 py-3 text-center text-sm font-semibold transition-colors ${
                  tier.featured
                    ? 'bg-[#C0462A] text-[#FBF8F2] hover:bg-[#A93B21]'
                    : 'bg-[#141B2E] text-[#FBF8F2] hover:bg-[#2A3350]'
                }`}
              >
                {tier.cta}
              </a>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-[#5C6377]">
          Non-profit and university presses pay 40% less on every plan. Ask Beatriz for the letter to
          give your board.
        </p>
      </div>
    </section>
  )
}
