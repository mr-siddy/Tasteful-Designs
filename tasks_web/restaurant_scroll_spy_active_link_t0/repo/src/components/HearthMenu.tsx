const DISHES = [
  {
    name: 'Ember Leeks, brown butter, hazelnut',
    price: '£11',
    course: 'To begin',
    note: 'Whole leeks buried in the coals until the outer leaves go to paper, peeled at the pass and dressed with brown butter, toasted hazelnut and a spoonful of last August\'s tomato.',
  },
  {
    name: 'Rye Loaf and Cultured Butter',
    price: '£7',
    course: 'To begin',
    note: 'Turkey Red and dark rye milled the morning you eat it, four days of levain, baked at the mouth of the oven so the crust blisters. Butter churned every Tuesday.',
  },
  {
    name: 'Hearth Bream, fennel, burnt lemon',
    price: '£26',
    course: 'From the fire',
    note: 'Line-caught off Skerry Point, salted for forty minutes and laid straight on the bars. Served whole with charred fennel and a lemon left in the ashes overnight.',
  },
  {
    name: 'Sirloin Aged 28 Days, bone marrow, watercress',
    price: '£38',
    course: 'From the fire',
    note: 'Hereford from Colley Bank Farm, hung upstairs in our own room for four weeks, cooked over embers and rested twenty minutes. Cut for two if you would rather share.',
  },
  {
    name: 'Barley, Wild Garlic, Aged Ewe\'s Cheese',
    price: '£19',
    course: 'From the fire',
    note: 'Pot barley cooked in the ash-roasted onion stock we make every Monday, finished with wild garlic from the Ironbridge cutting and eighteen-month Danby ewe\'s cheese.',
  },
  {
    name: 'Burnt Honey Custard, rye crumb',
    price: '£9',
    course: 'To finish',
    note: 'Heather honey taken past caramel until it turns bitter, set with Jersey cream and finished with the toasted crumb from yesterday\'s loaf. The only dish on the menu with sugar in it.',
  },
]

export function HearthMenu() {
  return (
    <section id="menu" data-section="menu" className="bg-[#FBF6EC]">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#B7411F]">
              The menu
            </p>
            <h2 className="mt-4 font-serif text-5xl font-semibold leading-tight tracking-tight text-[#1B1410]">
              Six dishes, because the fire only has so much room on it
            </h2>
            <p className="mt-6 text-base leading-relaxed text-[#2A211B]/75">
              The card changes on the first Wednesday of every month, and sometimes on a
              Thursday if a boat comes in with something better. Everything below is cooked
              on coals or in the bread oven — there is no gas hob in the building. Tell us
              about allergies when you book and Nadia will write you a card of your own.
            </p>
            <div className="mt-8 rounded-3xl border border-[#B7411F]/25 bg-[#F0E4D2] p-7">
              <h3 className="font-serif text-2xl font-semibold text-[#1B1410]">
                The whole table, £62 a head
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#2A211B]/75">
                Every dish on the card, brought out in the order the fire is ready for them,
                with the bread and butter to start. Available for any table of four or more,
                and for the Mill Room upstairs. Wine pairing adds £34.
              </p>
              <a
                href="#reserve"
                className="mt-6 inline-block rounded-full bg-[#2A211B] px-6 py-3 text-sm font-semibold text-[#FBF6EC] transition-colors hover:bg-[#B7411F]"
              >
                Book the whole table
              </a>
            </div>
          </div>

          <ul className="divide-y divide-[#2A211B]/10">
            {DISHES.map((dish) => (
              <li key={dish.name} data-testid="menu-dish" className="py-7 first:pt-0">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#B7411F]/80">
                  {dish.course}
                </p>
                <div className="mt-2 flex items-baseline gap-4">
                  <h3 className="font-serif text-2xl font-semibold leading-snug text-[#1B1410]">
                    {dish.name}
                  </h3>
                  <span
                    aria-hidden="true"
                    className="hidden flex-1 border-b border-dotted border-[#2A211B]/25 sm:block"
                  />
                  <span className="font-serif text-2xl font-semibold text-[#B7411F]">
                    {dish.price}
                  </span>
                </div>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#2A211B]/75">
                  {dish.note}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
