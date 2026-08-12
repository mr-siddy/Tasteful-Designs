const FEASTS = [
  {
    name: 'Alley Feast',
    price: '$58',
    per: 'per person, minimum two',
    summary:
      'The short version of the room. Enough food that nobody leaves hungry, ordered for you so you can get on with talking.',
    courses: [
      'Cold sesame noodles and smacked cucumber to start',
      'Four skewers off the trough, chosen by the pass',
      'Fish-fragrant aubergine and lu rou fan',
      'Mapo tofu, rice, and pickles from the cupboard',
      'Shaved ice with black sugar syrup and peanut',
    ],
  },
  {
    name: 'Full Lantern',
    price: '$86',
    per: 'per person, minimum four',
    summary:
      'What Wen sends when she wants to show off. Booked ahead, served at the long table under the press, paced across about two and a half hours.',
    courses: [
      'Chilled dishes: sesame noodles, mouthwatering chicken, pickled radish',
      'Eight skewers, including the cumin lamb, brought in two rounds',
      'Dan dan noodles served in individual bowls',
      'Three-cup chicken in the clay pot, straight off the burner',
      'Whole steamed fish with ginger and scallion oil',
      'Mapo tofu, greens with garlic, and rice',
      'Pineapple cake and oolong from the tea list',
    ],
  },
]

const EXTRAS = [
  {
    name: 'Tea pairing',
    price: '+$18',
    detail: 'Four pots across the meal, poured by Dai — a roasted oolong, a young pu-erh and two we rotate.',
  },
  {
    name: 'Mezcal flight',
    price: '+$26',
    detail: 'Three pours chosen against the heat of the board. It works better than you expect it to.',
  },
  {
    name: 'Whole fish upgrade',
    price: '+$22',
    detail: 'Added to the Alley Feast. Market fish, steamed, and it lands in the middle of the table.',
  },
]

export function FeastMenus() {
  return (
    <section id="feasts" className="bg-[#241B18] py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#F5A623]">
            Let the kitchen decide
          </p>
          <h2 className="mt-4 font-serif text-4xl font-semibold text-[#FBF5EC] sm:text-5xl">
            Two set feasts
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#FBF5EC]/70">
            Ordering off the board is the fun way to eat here, but if there are more than four of
            you, or it is a birthday, or you simply cannot be bothered choosing, the set feasts are
            better value and land in a sensible order. Both can be made vegetarian with a day&rsquo;s
            notice.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {FEASTS.map((feast) => (
            <article
              key={feast.name}
              data-testid="feast-card"
              className="flex h-full flex-col rounded-3xl border border-[#FBF5EC]/12 bg-[#1D1512] p-8"
            >
              <div className="flex items-baseline justify-between gap-4 border-b border-[#FBF5EC]/10 pb-5">
                <h3 className="font-serif text-3xl font-semibold text-[#FBF5EC]">{feast.name}</h3>
                <div className="text-right">
                  <p className="font-serif text-3xl font-semibold text-[#E4572E]">{feast.price}</p>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-[#FBF5EC]/45">
                    {feast.per}
                  </p>
                </div>
              </div>

              <p className="mt-5 text-base leading-relaxed text-[#FBF5EC]/70">{feast.summary}</p>

              <ul className="mt-6 flex-1 space-y-3">
                {feast.courses.map((course) => (
                  <li key={course} className="flex gap-3 text-sm leading-relaxed text-[#FBF5EC]/80">
                    <svg viewBox="0 0 16 16" aria-hidden="true" className="mt-1 h-3.5 w-3.5 shrink-0 fill-[#2F7A6B]">
                      <circle cx="8" cy="8" r="7" />
                    </svg>
                    <span>{course}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#reserve"
                data-testid="feast-cta"
                className="mt-8 inline-flex items-center justify-center rounded-full border border-[#E4572E] px-6 py-3 text-sm font-semibold text-[#E4572E] transition hover:bg-[#E4572E] hover:text-[#16110F]"
              >
                Book the {feast.name}
              </a>
            </article>
          ))}
        </div>

        <div data-testid="extras-grid" className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {EXTRAS.map((extra) => (
            <div
              key={extra.name}
              data-testid="extra-tile"
              className="rounded-2xl border border-[#FBF5EC]/10 bg-[#16110F] p-6"
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-serif text-lg font-semibold text-[#FBF5EC]">{extra.name}</h3>
                <span className="text-sm font-semibold text-[#F5A623]">{extra.price}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[#FBF5EC]/60">{extra.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
