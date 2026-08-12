const COURSES = [
  {
    name: 'Adjaruli khachapuri',
    price: '$21',
    course: 'From the tone',
    note: 'The boat-shaped one. Sulguni and imeruli cheese baked against the clay wall, an egg yolk and a knob of butter dropped in at the table — stir it in front of us or we will do it for you.',
  },
  {
    name: 'Khinkali, spiced beef and pork',
    price: '$18',
    course: 'Pleated at 6am',
    note: 'Six dumplings, nineteen pleats each, broth still moving inside. Hold the knot, bite the shoulder, drink the soup, leave the knot on the plate so we can count them.',
  },
  {
    name: 'Pkhali three ways',
    price: '$16',
    course: 'The cold table',
    note: 'Walnut and garlic pounded into beet, spinach and young runner bean, each one finished with pomegranate seeds and a spoon of marigold oil.',
  },
  {
    name: 'Chakapuli of spring lamb',
    price: '$34',
    course: 'The long braise',
    note: 'Lamb shoulder stewed with a bottle of unripe tkemali plums, half a garden of tarragon and green wine. It arrives the colour of a April hillside and we mean that.',
  },
  {
    name: 'Mtsvadi over vine cuttings',
    price: '$32',
    course: 'From the coals',
    note: 'Pork neck marinated overnight in onion and Kakhetian salt, grilled over last year’s prunings, served on a bed of raw onion with a jug of narsharab.',
  },
  {
    name: 'Churchkhela and matsoni',
    price: '$12',
    course: 'To finish',
    note: 'Walnuts strung and dipped nine times in thickened Saperavi grape must, hung to dry since October, sliced over house-cultured matsoni.',
  },
]

export function TheTable() {
  return (
    <section id="table" data-testid="the-table" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-800">
            The table, course by course
          </p>
          <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-stone-900 md:text-5xl">
            Six things that are always on the table
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-stone-600">
            A supra is not a tasting menu with a beginning and an end. Cold dishes stay out the
            whole night, hot ones land in waves, and the bread keeps coming. These six never leave
            the list — everything around them changes with what Nino finds at the Hollywood
            farmers market on Saturday morning.
          </p>
        </div>

        <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {COURSES.map((dish) => (
            <li
              key={dish.name}
              data-testid="course-card"
              className="flex flex-col rounded-3xl border border-stone-200 bg-[#fdf8f1] p-7 shadow-sm shadow-stone-200/70 transition hover:border-rose-300 hover:shadow-md"
            >
              <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-amber-700">
                {dish.course}
              </span>
              <div className="mt-3 flex items-baseline justify-between gap-4">
                <h3 className="font-serif text-2xl font-semibold text-stone-900">{dish.name}</h3>
                <span
                  data-testid="course-price"
                  className="shrink-0 font-serif text-xl font-semibold text-rose-900"
                >
                  {dish.price}
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-stone-600">{dish.note}</p>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-sm leading-relaxed text-stone-500">
          Every dish can be made without meat, and the pkhali, khachapuri and lobio are vegetarian
          as written. Tell us about allergies when you request a table and Nino will plan around
          them rather than remove things from your plate.
        </p>
      </div>
    </section>
  )
}
