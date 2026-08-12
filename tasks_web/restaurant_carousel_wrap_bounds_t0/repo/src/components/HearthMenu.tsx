import { GlassIcon, KnifeIcon, LeafIcon } from './Icons'

const DISHES = [
  {
    name: 'Hearth bread & bone butter',
    price: '$9',
    course: 'To start',
    blurb:
      'Sourdough baked on the coals every forty minutes, torn by hand, served with butter whipped with roasted marrow and burnt scallion.',
  },
  {
    name: 'Charred leeks, hazelnut, aged sheep',
    price: '$16',
    course: 'To start',
    blurb:
      'Leeks buried in the embers until the outer layers turn to ash, peeled back to the sweet centre and dressed with toasted hazelnut and a hard sheep cheese from Vail Ridge.',
  },
  {
    name: 'Almond-wood trout, brown butter, capers',
    price: '$27',
    course: 'From the fire',
    blurb:
      'Whole river trout from the Kessel hatchery, split and grilled skin-down over almond wood, finished with brown butter, salted capers and a squeeze of preserved lemon.',
  },
  {
    name: 'Sixty-day ribeye for two',
    price: '$96',
    course: 'From the fire',
    blurb:
      'Dry-aged in the cellar for sixty days, cooked slow at the edge of the coals and rested twice. Carved at the table with fat-fried potatoes and a pot of green peppercorn.',
  },
  {
    name: 'Coal-roast squash, moss honey, dukkah',
    price: '$21',
    course: 'From the fire',
    blurb:
      'A whole crown squash roasted in its skin for two hours, spooned out at the pass and finished with honey from the hives on the foundry roof.',
  },
  {
    name: 'Burnt honey tart, crème fraîche',
    price: '$12',
    course: 'To finish',
    blurb:
      'Honey cooked past the point most kitchens stop, set into a short pastry shell and cut with cold, sharp crème fraîche. The only dessert we have never taken off.',
  },
]

const COURSE_ICON = {
  'To start': LeafIcon,
  'From the fire': KnifeIcon,
  'To finish': GlassIcon,
} as const

export function HearthMenu() {
  return (
    <section id="menu" className="bg-white text-stone-900" aria-labelledby="menu-heading">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-orange-700">
            Rewritten by hand every afternoon
          </p>
          <h2 id="menu-heading" className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            From the hearth
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-stone-600">
            Six things that stay on whatever the market does, plus four or five that will not be
            here next week. Prices include service; there is no cover and no bread charge.
          </p>
        </div>

        <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {DISHES.map((dish) => {
            const Icon = COURSE_ICON[dish.course as keyof typeof COURSE_ICON]
            return (
              <li
                key={dish.name}
                data-testid="menu-dish"
                className="flex h-full flex-col rounded-2xl border border-stone-200 bg-stone-50 p-7 transition-shadow hover:shadow-lg hover:shadow-stone-300/50"
              >
                <div className="flex items-center gap-3 text-orange-700">
                  <Icon className="h-6 w-6" />
                  <span className="text-xs font-semibold uppercase tracking-[0.18em]">
                    {dish.course}
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-semibold leading-snug tracking-tight">
                  {dish.name}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-stone-600">{dish.blurb}</p>
                <p className="mt-6 text-lg font-semibold text-stone-900">{dish.price}</p>
              </li>
            )
          })}
        </ul>

        <p className="mt-12 rounded-2xl border border-dashed border-stone-300 bg-stone-50 px-7 py-6 text-sm leading-relaxed text-stone-600">
          Cooking a whole animal means the kitchen runs out. If a cut is gone by nine, the team will
          bring you the better thing rather than a lesser version of the thing you asked for.
          Vegetarians eat extremely well here — say the word when you book and Nadia will build the
          evening around the fire pit instead of the grill.
        </p>
      </div>
    </section>
  )
}
