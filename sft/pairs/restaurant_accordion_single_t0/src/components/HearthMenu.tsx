type Dish = {
  id: string
  name: string
  price: string
  course: string
  blurb: string
  note: string
}

const DISHES: Dish[] = [
  {
    id: 'flatbread',
    name: 'Hearth flatbread, smoked cod roe, pickled fennel',
    price: '$16',
    course: 'To start',
    blurb:
      'Hallow Mill flour, slapped onto the hot stone at the edge of the coals and blistered in ninety seconds. It arrives too hot to hold, which is the point.',
    note: 'Two pieces · vegetarian without the roe',
  },
  {
    id: 'mackerel',
    name: 'Cured Wren mackerel, apple, horseradish snow',
    price: '$18',
    course: 'To start',
    blurb:
      'Cured in salt and cider vinegar for four hours, then kissed by the fire on the skin side only. Sharp, cold, and the best argument for sitting at the counter.',
    note: 'Landed by The Wren, Tuesday and Friday',
  },
  {
    id: 'celeriac',
    name: 'Salt-baked celeriac, hazelnut, bay',
    price: '$22',
    course: 'From the ash',
    blurb:
      'A whole root from Callowfield packed in salt dough and buried in the ash at two in the afternoon. Carved at the table, dressed with brown butter and toasted hazelnut.',
    note: 'Our most ordered dish four years running',
  },
  {
    id: 'leeks',
    name: 'Ember-roast leeks, walnut picada, aged sheep cheese',
    price: '$19',
    course: 'From the ash',
    blurb:
      'Burnt black on the outside, steamed soft inside, then peeled back like a jacket. Marta learned this one in Getaria and refuses to change a thing about it.',
    note: 'Vegetarian · vegan without the cheese',
  },
  {
    id: 'turbot',
    name: 'Whole day-boat turbot over embers, seaweed butter',
    price: '$68',
    course: 'Over the coals',
    blurb:
      'Cooked in a grill basket and turned four times by hand, basted with a butter we make with kelp from the same water. Comes to the table whole and gets filleted in front of you.',
    note: 'To share between two · ask what landed today',
  },
  {
    id: 'rib',
    name: 'Dry-aged rib for two, marrow salsa verde, burnt onion',
    price: '$94',
    course: 'Over the coals',
    blurb:
      'Fifty-five days on the bone from Bramble Fold, rested twenty minutes over the cooling end of the hearth and carved across the grain. The onions go in whole at opening.',
    note: 'Twenty-five minutes · order when you sit down',
  },
]

const COURSES = ['To start', 'From the ash', 'Over the coals']

export function HearthMenu() {
  return (
    <section id="menu" aria-labelledby="menu-heading" className="bg-[#FAF6EF]">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="max-w-2xl">
          <p className="text-[11px] uppercase tracking-[0.28em] text-[#8B8073]">Tonight's hearth</p>
          <h2
            id="menu-heading"
            className="mt-3 text-4xl font-semibold tracking-tight text-[#123C43]"
          >
            Six dishes we would order ourselves
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#6B6155]">
            The full card changes with the boats, but this is the spine of it. Prices are what you
            pay — no cover, no service charge added at the end, and the bread is not billed
            separately. If you want to eat the whole hearth, the kitchen will feed you for $85 a head
            and you never have to open the menu.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-2" aria-hidden="true">
          {COURSES.map((course) => (
            <span
              key={course}
              className="rounded-full border border-[#E4DACB] bg-[#F3EADC] px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-[#6B6155]"
            >
              {course}
            </span>
          ))}
        </div>

        <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {DISHES.map((dish) => (
            <li
              key={dish.id}
              data-testid="dish-card"
              className="flex flex-col rounded-3xl border border-[#E4DACB] bg-white p-7 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#C4472A]">
                  {dish.course}
                </span>
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 text-[#E08A3C]">
                  <path
                    d="M12 3c2.5 3.2 1 5 2.2 6.6C15.2 10.9 17 10 17 10c1.1 1.9.9 4.8-.9 6.7A6 6 0 0 1 12 19a6 6 0 0 1-4.1-2.3C6.1 14.8 5.9 11.9 7 10c0 0 1.5.9 2.3-.4C10.5 8 9.5 6.2 12 3Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold leading-snug tracking-tight text-[#171310]">
                {dish.name}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[#6B6155]">{dish.blurb}</p>
              <div className="mt-5 flex items-center justify-between border-t border-[#EFE6D8] pt-4">
                <span className="text-xs text-[#8B8073]">{dish.note}</span>
                <span data-testid="dish-price" className="text-lg font-semibold text-[#123C43]">
                  {dish.price}
                </span>
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-sm text-[#6B6155]">
          Allergies and anything you would rather not eat: tell us when you book and Marta will build
          around it. We can cook the whole menu without dairy, and most of it without gluten, but we
          need the notice before the fire is lit.
        </p>
      </div>
    </section>
  )
}
