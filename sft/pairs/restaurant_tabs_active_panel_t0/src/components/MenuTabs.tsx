import { useState } from 'react'

type Dish = { name: string; price: string; note: string }
type Menu = { id: string; label: string; hours: string; blurb: string; dishes: Dish[] }

const MENUS: Menu[] = [
  {
    id: 'lunch',
    label: 'Lunch',
    hours: 'Friday to Sunday, 12:00 – 3:00',
    blurb: 'Lighter, quicker, and written on the board once the boats have called.',
    dishes: [
      {
        name: 'Fideuà of the Day',
        price: '$24',
        note: 'Toasted noodles cooked in shellfish stock with whatever Point Judith landed at dawn.',
      },
      {
        name: 'Coca de Recapte',
        price: '$15',
        note: 'Hearth flatbread with escalivada, Casa Ferrer anchovy and toasted pine nuts.',
      },
      {
        name: 'Esqueixada',
        price: '$14',
        note: 'Salt cod shredded by hand with tomato, sweet onion and black olives from Aragón.',
      },
      {
        name: 'Botifarra amb Mongetes',
        price: '$21',
        note: 'Grilled sausage, white beans finished in the pan, a spoon of the fat over the top.',
      },
      {
        name: 'Torrija with Burnt Honey',
        price: '$10',
        note: 'Yesterday’s brioche soaked in milk and egg, caramelised hard in a cast iron pan.',
      },
    ],
  },
  {
    id: 'dinner',
    label: 'Dinner',
    hours: 'Tuesday to Saturday, 5:00 – 10:00',
    blurb: 'The long menu. Everything here is cooked over oak, ash or coals, nothing on gas.',
    dishes: [
      {
        name: 'Whole Turbot on the Coals',
        price: '$58',
        note: 'For two. Split, basted with rosemary and finished with garlic-vinegar refrito.',
      },
      {
        name: 'Lamb Shoulder from the Ember Box',
        price: '$44',
        note: 'Six hours under ash, served with romesco and a charred spring onion.',
      },
      {
        name: 'Arròs a Banda',
        price: '$34',
        note: 'Bomba rice, deep fish stock, socarrat on the base and alioli on the side.',
      },
      {
        name: 'Suquet de Peix',
        price: '$32',
        note: 'Monkfish and littleneck clams in an almond, saffron and picada broth.',
      },
      {
        name: 'Escalivada with Anchovies',
        price: '$16',
        note: 'Peppers and aubergine buried overnight in the embers, peeled at seven in the morning.',
      },
    ],
  },
  {
    id: 'bar',
    label: 'Bar',
    hours: 'Tuesday to Saturday, 5:00 until late',
    blurb: 'Eleven stools facing the fire. No reservations, no minimum, no hurry.',
    dishes: [
      {
        name: 'Vermut de la Casa',
        price: '$11',
        note: 'Our own red vermouth, a wide strip of orange, a fat olive and soda from the siphon.',
      },
      {
        name: 'Larkspur Negroni',
        price: '$15',
        note: 'Gin steeped for a week in orange peel burnt on the edge of the hearth.',
      },
      {
        name: 'Porrón of Young Garnacha',
        price: '$28',
        note: 'A full litre, poured the traditional way, meant to go round the whole table.',
      },
      {
        name: 'Cava Brut Nature, Penedès',
        price: '$13',
        note: 'By the glass. Bone dry, three years on the lees, no dosage at all.',
      },
      {
        name: 'Sardines on Toast',
        price: '$12',
        note: 'Grilled whole, boned in front of you at the bar, lemon and flat parsley.',
      },
    ],
  },
  {
    id: 'sunday',
    label: 'Sunday Rice',
    hours: 'Sunday only, 12:00 – 7:00',
    blurb: 'One day a week the whole fire is given over to rice, cooked over vine cuttings.',
    dishes: [
      {
        name: 'Paella Valenciana',
        price: '$38',
        note: 'Rabbit, chicken and garrofó beans, cooked flat over vine cuttings until dry.',
      },
      {
        name: 'Arròs Negre',
        price: '$36',
        note: 'Squid ink and cuttlefish, dark to the edge of bitter, alioli served alongside.',
      },
      {
        name: 'Arròs amb Bogavante',
        price: '$52',
        note: 'Half a lobster and a very deep stock. Ordered for two people or more.',
      },
      {
        name: 'Rice from the Kitchen Garden',
        price: '$30',
        note: 'Artichoke, broad bean and romesco pepper picked two blocks away on Friday.',
      },
      {
        name: 'Sunday Crema Catalana',
        price: '$12',
        note: 'Burnt at your table with the iron so you get the sugar while it is still hard.',
      },
    ],
  },
]

export function MenuTabs() {
  const [activeId, setActiveId] = useState(MENUS[0].id)
  const activeMenu = MENUS.find((menu) => menu.id === activeId) ?? MENUS[0]

  return (
    <section id="menus" data-testid="menu-section" className="bg-stone-950 py-24 text-stone-100">
      <div className="mx-auto max-w-5xl px-5">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-amber-400">
            Written every morning
          </p>
          <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight md:text-5xl">
            Four menus, one fire
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-stone-300">
            Lunch is quick and mostly from the sea. Dinner is the long one. The bar runs until the
            coals go grey, and Sunday belongs entirely to rice. Choose the one you came for.
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Casa Marisol menus"
          data-testid="menu-tablist"
          className="mt-12 flex flex-wrap justify-center gap-2"
        >
          {MENUS.map((menu) => {
            const selected = menu.id === activeId
            return (
              <button
                key={menu.id}
                type="button"
                role="tab"
                id={`menu-tab-${menu.id}`}
                data-testid="menu-tab"
                aria-selected={selected}
                aria-controls={`menu-panel-${menu.id}`}
                onClick={() => setActiveId(menu.id)}
                className={
                  selected
                    ? 'rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-stone-950 shadow-lg shadow-amber-900/30'
                    : 'rounded-full border border-stone-700 px-6 py-3 text-sm font-semibold text-stone-300 transition hover:border-amber-400 hover:text-amber-400'
                }
              >
                {menu.label}
              </button>
            )
          })}
        </div>

        <div
          role="tabpanel"
          id={`menu-panel-${activeMenu.id}`}
          aria-labelledby={`menu-tab-${activeMenu.id}`}
          data-testid="menu-panel"
          className="mt-10 rounded-3xl border border-stone-800 bg-stone-900/60 p-8 md:p-12"
        >
          <div className="flex flex-col gap-2 border-b border-stone-800 pb-6 md:flex-row md:items-end md:justify-between">
            <h3 className="font-serif text-2xl font-semibold text-amber-400">{activeMenu.label}</h3>
            <p className="text-sm uppercase tracking-widest text-stone-400">{activeMenu.hours}</p>
          </div>
          <p className="mt-6 text-stone-300">{activeMenu.blurb}</p>

          <ul className="mt-4 divide-y divide-stone-800">
            {activeMenu.dishes.map((dish) => (
              <li
                key={dish.name}
                data-testid="menu-dish"
                className="flex flex-col gap-2 py-6 sm:flex-row sm:items-start sm:justify-between sm:gap-10"
              >
                <div>
                  <h4 className="font-medium text-stone-100">{dish.name}</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-stone-400">{dish.note}</p>
                </div>
                <span className="whitespace-nowrap font-medium text-amber-400">{dish.price}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-8 text-center text-sm text-stone-500">
          Prices include the fire, not the tip. Menus change when the market changes, so treat this
          as an honest sketch rather than a contract.
        </p>
      </div>
    </section>
  )
}
