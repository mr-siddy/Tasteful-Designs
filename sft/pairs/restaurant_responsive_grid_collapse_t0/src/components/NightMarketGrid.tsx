const PLATES = [
  {
    name: 'Dan Dan, Dunbar Lane',
    price: '$16',
    heat: 3,
    origin: 'Chengdu, loosely',
    detail:
      'Hand-cut wheat noodles under minced pork, ya cai and a chilli oil we bloom every Tuesday with cassia bark and two kinds of Sichuan pepper. Stir it hard before the first bite.',
  },
  {
    name: 'Mapo Tofu, Aged Bean',
    price: '$19',
    heat: 4,
    origin: 'The house plate',
    detail:
      'Silken tofu in a broth of doubanjiang aged three years in the cupboard downstairs, beef fat and enough ground pepper to make the back of your neck warm. Comes with rice; you will want more.',
  },
  {
    name: 'Three-Cup Chicken',
    price: '$24',
    heat: 1,
    origin: 'Taipei, via Wen’s mother',
    detail:
      'Thigh meat caramelised in sesame oil, rice wine and soy in a clay pot, finished with a fistful of Thai basil thrown in at the very last second so it hits the table still steaming.',
  },
  {
    name: 'Lu Rou Fan',
    price: '$14',
    heat: 1,
    origin: 'Late-night staple',
    detail:
      'Braised pork belly over rice with a soy egg and pickled mustard greens. The braise runs from four in the afternoon and is topped up, never started again.',
  },
  {
    name: 'Fish-Fragrant Aubergine',
    price: '$17',
    heat: 2,
    origin: 'No fish involved',
    detail:
      'Aubergine fried until it collapses, then folded through pickled chilli, ginger, garlic and black vinegar. The most ordered vegetarian plate on the board four years running.',
  },
  {
    name: 'Cold Sesame Noodles',
    price: '$13',
    heat: 2,
    origin: 'Ask for extra vinegar',
    detail:
      'Chilled alkaline noodles in sesame paste and black vinegar with cucumber, crushed peanut and a spoon of chilli oil off the top of the jar. The first thing we send to a waiting table.',
  },
]

const SKEWERS = [
  { name: 'Cumin Lamb', price: '$6 ea', note: 'Shoulder, chilli flake, whole cumin' },
  { name: 'Charred Leek', price: '$4 ea', note: 'Sweet, smoky, half burnt on purpose' },
  { name: 'Chicken Heart', price: '$5 ea', note: 'Two minutes over hot coals, salt only' },
  { name: 'King Oyster', price: '$5 ea', note: 'Scored, basted, cumin and white pepper' },
]

function HeatScale({ level }: { level: number }) {
  return (
    <span
      className="flex items-center gap-1"
      role="img"
      aria-label={`Heat ${level} out of 4`}
      data-testid="dish-heat"
    >
      {[1, 2, 3, 4].map((step) => (
        <svg
          key={step}
          viewBox="0 0 16 16"
          className={`h-3.5 w-3.5 ${step <= level ? 'fill-[#E4572E]' : 'fill-[#FBF5EC]/15'}`}
        >
          <path d="M9.6 1.2c.5 2.1-.3 3.4-1.4 4.6-1.3 1.4-2.9 2.7-2.9 5.1a5.1 5.1 0 0 0 10.1.6c-.6.7-1.5 1-2.3.7 1.4-2.6.2-6.2-3.5-11z" />
          <path d="M5.4 7.6C4 9 3.2 10.3 3.2 11.6c0 1.3.5 2.4 1.4 3.2-1.9-.9-3.2-2.8-3.2-5 0-1 .3-1.7 1-2.6.5-.6 2.1-1.4 3-1.4z" />
        </svg>
      ))}
    </span>
  )
}

function SkewerMark() {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" className="h-9 w-9">
      <line x1="8" y1="33" x2="33" y2="8" stroke="#FBF5EC" strokeWidth="1.6" strokeLinecap="round" opacity="0.55" />
      <rect x="12" y="20" width="9" height="9" rx="2" transform="rotate(-45 16.5 24.5)" fill="#E4572E" />
      <rect x="18" y="14" width="9" height="9" rx="2" transform="rotate(-45 22.5 18.5)" fill="#F5A623" />
      <rect x="24" y="8" width="9" height="9" rx="2" transform="rotate(-45 28.5 12.5)" fill="#2F7A6B" />
    </svg>
  )
}

export function NightMarketGrid() {
  return (
    <section id="board" className="bg-[#FBF5EC] py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#E4572E]">
            Chalked up at five
          </p>
          <h2 className="mt-4 font-serif text-4xl font-semibold text-[#16110F] sm:text-5xl">
            The board tonight
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#16110F]/70">
            Everything here is cooked to order off the wok range, so the board is short on purpose
            and the kitchen sends plates the moment they are ready rather than holding them for the
            table. Order three or four between two and add more when the first lot lands. Heat is
            marked one to four; four means we are not going to talk you out of it.
          </p>
        </div>

        <div data-testid="dish-grid" className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {PLATES.map((plate) => (
            <article
              key={plate.name}
              data-testid="dish-card"
              className="flex h-full flex-col rounded-2xl border border-[#16110F]/10 bg-white p-6 shadow-sm shadow-[#16110F]/5 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#16110F]/10"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-serif text-xl font-semibold leading-snug text-[#16110F]">
                  {plate.name}
                </h3>
                <span
                  data-testid="dish-price"
                  className="shrink-0 rounded-full bg-[#16110F] px-3 py-1 text-sm font-semibold text-[#FBF5EC]"
                >
                  {plate.price}
                </span>
              </div>

              <div className="mt-3 flex items-center gap-3">
                <HeatScale level={plate.heat} />
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#2F7A6B]">
                  {plate.origin}
                </span>
              </div>

              <p className="mt-4 flex-1 text-sm leading-relaxed text-[#16110F]/70">{plate.detail}</p>
            </article>
          ))}
        </div>

        <div className="mt-20 rounded-3xl bg-[#16110F] p-8 sm:p-12">
          <div className="max-w-2xl">
            <h3 className="font-serif text-3xl font-semibold text-[#FBF5EC]">
              Off the skewer trough
            </h3>
            <p className="mt-4 text-base leading-relaxed text-[#FBF5EC]/70">
              A metre of charcoal runs along the pass and it never goes out before midnight. Skewers
              are priced each, ordered in fours, and land within about six minutes of you asking.
            </p>
          </div>

          <div data-testid="skewer-grid" className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {SKEWERS.map((skewer) => (
              <div
                key={skewer.name}
                data-testid="skewer-tile"
                className="rounded-2xl border border-[#FBF5EC]/15 bg-[#241B18] p-5"
              >
                <SkewerMark />
                <h4 className="mt-4 font-serif text-lg font-semibold text-[#FBF5EC]">
                  {skewer.name}
                </h4>
                <p className="mt-1 text-sm font-semibold text-[#F5A623]">{skewer.price}</p>
                <p className="mt-2 text-sm leading-relaxed text-[#FBF5EC]/60">{skewer.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
