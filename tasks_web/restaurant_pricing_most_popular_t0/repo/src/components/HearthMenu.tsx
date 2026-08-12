type Dish = {
  name: string
  price: string
  wood: string
  blurb: string
}

const DISHES: Dish[] = [
  {
    name: 'Ash-roasted carrots',
    price: '$16',
    wood: 'Apple wood',
    blurb:
      'Buried whole in the coal bed for forty minutes, peeled at the pass, dressed with hazelnut, cultured cream and a spoonful of the honey from the hives behind the Wren Hill orchard.',
  },
  {
    name: 'Hearth bread and bone butter',
    price: '$12',
    wood: 'Oak',
    blurb:
      'A slow country loaf baked directly on the hearth stone every afternoon at four. It arrives warm with whipped butter enriched with roasted marrow and a pinch of coarse sea salt.',
  },
  {
    name: 'Dry-aged sirloin for two',
    price: '$94',
    wood: 'Oak and cherry',
    blurb:
      'Forty-two days on the bone in our glass ager, grilled over a low bed of coals, rested on rye and finished with the pan juices. Carved in the dining room and served with charred alliums.',
  },
  {
    name: 'Whole day-boat fish',
    price: '$68',
    wood: 'Apple wood',
    blurb:
      'Whatever the Sakonnet boats land that morning, clamped in a hinged basket and turned over the fire by hand. Served with brown butter, fennel and preserved lemon from last winter.',
  },
  {
    name: 'Smoked mushroom rye pie',
    price: '$27',
    wood: 'Maple',
    blurb:
      'Our vegetarian centrepiece: maitake and oyster mushrooms cold-smoked for two hours, folded into a rye crust with leek confit, thyme and a good deal of aged sheep cheese.',
  },
  {
    name: 'Ember pears with rye ice cream',
    price: '$14',
    wood: 'Cherry',
    blurb:
      'Bosc pears set at the edge of the dying fire until the sugars catch, then served with rye-crumb ice cream churned that afternoon and a spoon of the same wildflower honey.',
  },
]

function WoodIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <path
        d="M4 8.5c0-1.4 3.6-2.5 8-2.5s8 1.1 8 2.5v7c0 1.4-3.6 2.5-8 2.5s-8-1.1-8-2.5v-7Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <ellipse cx="12" cy="8.5" rx="8" ry="2.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="8.5" r="1.4" fill="none" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  )
}

export default function HearthMenu() {
  return (
    <section id="menu" className="bg-[#f7f2ea]" aria-labelledby="menu-heading">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#b8431a]">
            The standing menu
          </p>
          <h2
            id="menu-heading"
            className="mt-3 font-serif text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Six dishes that never leave the board
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#5b5148]">
            The rest of the menu turns over every couple of weeks depending on what the farms and
            the boats send us. These six have earned their place and stay put. Prices are what you
            pay; there is no service charge and no cover.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DISHES.map((dish) => (
            <article
              key={dish.name}
              data-testid="dish-card"
              className="group flex h-full flex-col rounded-2xl border border-[#171310]/10 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-[#e2622a]/40 hover:shadow-md"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-serif text-xl font-semibold tracking-tight">{dish.name}</h3>
                <span
                  data-testid="dish-price"
                  className="shrink-0 font-serif text-lg font-semibold text-[#b8431a]"
                >
                  {dish.price}
                </span>
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[#5b5148]">{dish.blurb}</p>
              <p className="mt-5 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#6f645b]">
                <WoodIcon />
                {dish.wood}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-10 rounded-2xl border border-dashed border-[#171310]/15 bg-[#efe6d8] p-6 text-sm leading-relaxed text-[#5b5148]">
          Cooking without gas means the fire decides the pace. If the room is full, a whole fish can
          take thirty-five minutes to come off the grate — we would rather tell you that now than
          apologise for it later. Ask your server what came in that morning; it is usually the best
          thing we have.
        </p>
      </div>
    </section>
  )
}
