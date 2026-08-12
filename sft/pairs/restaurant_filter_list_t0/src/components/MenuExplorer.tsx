import { useState } from 'react'

type CourseId = 'small' | 'hearth' | 'pasta' | 'sweets'
type FilterId = CourseId | 'all'

type Dish = {
  name: string
  course: CourseId
  badge: string
  price: string
  detail: string
  blurb: string
}

const DEFAULT_COURSE: FilterId = 'all'

const COURSES: { id: FilterId; label: string }[] = [
  { id: 'all', label: 'All dishes' },
  { id: 'small', label: 'Small plates' },
  { id: 'hearth', label: 'From the hearth' },
  { id: 'pasta', label: 'Pasta & grains' },
  { id: 'sweets', label: 'Sweets' },
]

const DISHES: Dish[] = [
  {
    name: 'Hearth Bread and Cultured Butter',
    course: 'small',
    badge: 'Small plate',
    price: '$9',
    detail: 'Baked at 4pm daily · vegetarian',
    blurb:
      'Ibrahim Sow bakes one bread a day on the hearth floor and it comes out with a bottom crust dark enough to argue about. The butter is churned from Windrow Creek cream and left to sour for two days.',
  },
  {
    name: 'Smoked Trout Rillette',
    course: 'small',
    badge: 'Small plate',
    price: '$14',
    detail: 'Cold smoked in house · serves two',
    blurb:
      'Trout from the Cumberland cold-smoked over hickory dust, whipped with creme fraiche and lemon, and served in the crock with rye toast and quick-pickled ramps.',
  },
  {
    name: 'Charred Okra and Benne',
    course: 'small',
    badge: 'Small plate',
    price: '$12',
    detail: 'Vegan · fiercely seasonal',
    blurb:
      'Okra thrown straight onto the coals until it blisters, then rolled in toasted benne seed and lime. Twelve weeks a year, and people plan their August around it.',
  },
  {
    name: 'Persimmon and Chicory Salad',
    course: 'small',
    badge: 'Small plate',
    price: '$13',
    detail: 'Vegetarian · gluten free',
    blurb:
      'Hachiya persimmons from a single tree behind Hollow Bend Farm, bitter chicories, black walnut and a sorghum vinaigrette that we thin with a spoonful of the pickling liquid.',
  },
  {
    name: 'Skillet Cornbread with Sorghum Butter',
    course: 'small',
    badge: 'Small plate',
    price: '$8',
    detail: 'Cane Ridge cornmeal · vegetarian',
    blurb:
      'Stone-milled cornmeal in a cast iron pan that has never once been washed with soap, pulled from the coals still spitting and served with whipped sorghum butter.',
  },
  {
    name: 'Whole Hearth Trout',
    course: 'hearth',
    badge: 'From the hearth',
    price: '$32',
    detail: 'Whole fish · gluten free',
    blurb:
      'A whole rainbow trout clamped in a hinged grill and turned over the embers until the skin lifts away, finished with brown butter, capers and a great deal of parsley.',
  },
  {
    name: 'Coal-Roasted Half Chicken',
    course: 'hearth',
    badge: 'From the hearth',
    price: '$29',
    detail: 'Brined 24 hours · serves one generously',
    blurb:
      'Brined for a day, hung close to the fire for forty minutes, then dropped onto the grate to crisp. It arrives with the drippings, a wedge of grilled lemon and a spoon.',
  },
  {
    name: 'White Oak Pork Chop',
    course: 'hearth',
    badge: 'From the hearth',
    price: '$36',
    detail: 'Newsom Ridge pork · for two to share',
    blurb:
      'A double-cut chop from pigs raised on Newsom Ridge, cooked slowly in the cooler corner of the hearth and rested twice so the middle stays rosy under a black crust.',
  },
  {
    name: 'Ember-Baked Sweet Potato',
    course: 'hearth',
    badge: 'From the hearth',
    price: '$18',
    detail: 'Vegetarian · vegan on request',
    blurb:
      'Buried directly in the ashes for two hours until the sugars run out of it and caramelise on the skin, split at the table over cultured cream, chilli honey and puffed rye.',
  },
  {
    name: 'Cane Ridge Grits and Wild Mushroom',
    course: 'pasta',
    badge: 'Pasta & grains',
    price: '$24',
    detail: 'Vegetarian · gluten free',
    blurb:
      'Coarse grits stirred for ninety minutes with Windrow Creek butter, under whatever the foragers brought us — chanterelles most of the autumn, hen of the woods after the first rain.',
  },
  {
    name: 'Hand-Cut Bucatini with Guinea Hen',
    course: 'pasta',
    badge: 'Pasta & grains',
    price: '$27',
    detail: 'Rolled each morning · contains egg',
    blurb:
      'Bucatini rolled and cut before service, dressed in a guinea hen ragu that starts on the fire and then sits at the back of the hearth for six hours until it collapses.',
  },
  {
    name: 'Rye Pappardelle with Nettle',
    course: 'pasta',
    badge: 'Pasta & grains',
    price: '$25',
    detail: 'Vegetarian · contains rye and walnut',
    blurb:
      'Half rye flour, which makes the sheets darker and far more fragile, tossed with nettle picked along the fence line, brown butter and cured egg yolk grated over the top.',
  },
  {
    name: 'Persimmon Pudding Cake',
    course: 'sweets',
    badge: 'Sweets',
    price: '$12',
    detail: 'Junie Park · vegetarian',
    blurb:
      'The dessert the restaurant is half-named after: a dense steamed pudding cake of ripe persimmon and cinnamon, warmed on the hearth and drowned in unsweetened whipped cream.',
  },
  {
    name: 'Buttermilk Ice with Honeycomb',
    course: 'sweets',
    badge: 'Sweets',
    price: '$10',
    detail: 'Gluten free · vegetarian',
    blurb:
      'Sharp buttermilk ice churned to order, with shards of honeycomb from the hives on the roof of the building next door and a spoonful of last summer.',
  },
]

const filterDishes = (course: FilterId) =>
  course === 'all' ? DISHES : DISHES.filter((dish) => dish.course === course)

function DishCard({ dish }: { dish: Dish }) {
  return (
    <article
      data-testid="dish-card"
      className="flex flex-col rounded-2xl border border-[#241C17]/12 bg-[#FBF6EE] p-6 shadow-sm"
    >
      <div className="flex items-center justify-between gap-3">
        <span
          data-testid="dish-course"
          className="rounded-full bg-[#4A5D3A]/12 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#4A5D3A]"
        >
          {dish.badge}
        </span>
        <span className="text-base font-black text-[#C4552B]">{dish.price}</span>
      </div>

      <h3 className="mt-4 text-lg font-black leading-snug tracking-tight">{dish.name}</h3>

      <p className="mt-1 text-[11px] font-bold uppercase tracking-wider text-[#7A6B5F]">
        {dish.detail}
      </p>

      <p className="mt-4 flex-1 text-sm leading-relaxed text-[#544940]">{dish.blurb}</p>
    </article>
  )
}

export function MenuExplorer() {
  const [course, setCourse] = useState<FilterId>(DEFAULT_COURSE)

  const shown = filterDishes(course)

  return (
    <section id="menu" aria-labelledby="menu-heading" className="border-b border-[#241C17]/10 bg-[#F3E9DA]">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C4552B]">
            Reprinted every afternoon
          </p>
          <h2 id="menu-heading" className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
            Tonight there are fourteen dishes, and every one of them saw the fire
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#544940]">
            This is the menu as it stands at five o&rsquo;clock today. Narrow it down to the course
            you are actually deciding between, or leave it on all dishes and read the whole thing the
            way it is printed on the paper we hand you at the table.
          </p>
        </div>

        <div
          data-testid="menu-filters"
          role="group"
          aria-label="Filter the menu by course"
          className="mt-10 flex flex-wrap gap-3"
        >
          {COURSES.map((option) => {
            const isActive = option.id === course
            return (
              <button
                key={option.id}
                type="button"
                aria-pressed={isActive}
                onClick={() => setCourse(option.id)}
                className={
                  isActive
                    ? 'rounded-full bg-[#241C17] px-5 py-2.5 text-sm font-bold text-[#FBF6EE] shadow-sm'
                    : 'rounded-full border border-[#241C17]/20 bg-white/70 px-5 py-2.5 text-sm font-bold text-[#241C17] hover:border-[#C4552B] hover:text-[#C4552B]'
                }
              >
                {option.label}
              </button>
            )
          })}
        </div>

        <p data-testid="menu-count" className="mt-6 text-sm font-bold text-[#6B5F55]">
          Showing {shown.length} of {DISHES.length} dishes
        </p>

        <div data-testid="menu-list" className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {shown.map((dish) => (
            <DishCard key={dish.name} dish={dish} />
          ))}
        </div>

        <p className="mt-10 max-w-3xl text-sm leading-relaxed text-[#544940]">
          Anything on this list can disappear mid-service — we buy in small amounts and we do not
          hold stock back. If you are cooking around an allergy, tell us when you book on{' '}
          <a href="tel:16155550192" className="font-bold text-[#C4552B] underline">
            (615) 555 0192
          </a>{' '}
          and Nell will write you your own menu for the night.
        </p>
      </div>
    </section>
  )
}
