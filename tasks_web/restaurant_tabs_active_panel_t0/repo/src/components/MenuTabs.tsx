import { useState } from 'react'

type Dish = { name: string; price: string; note: string }
type Menu = { id: string; label: string; dishes: Dish[] }

const MENUS: Menu[] = [
  {
    id: 'lunch',
    label: 'Lunch',
    dishes: [
      { name: "Za'atar Flatbread", price: '$9', note: 'Whipped feta, olive oil, sumac onion.' },
      { name: 'Harissa Chicken Bowl', price: '$16', note: 'Freekeh, charred lemon, herb yoghurt.' },
      { name: 'Shaved Fennel Salad', price: '$12', note: 'Blood orange, pistachio, torn mint.' },
    ],
  },
  {
    id: 'dinner',
    label: 'Dinner',
    dishes: [
      { name: 'Lamb Shoulder', price: '$34', note: 'Slow-roasted overnight, pomegranate, toum.' },
      { name: 'Saffron Seafood Stew', price: '$29', note: 'Mussels, prawns, fennel broth.' },
      { name: 'Aubergine Msakhan', price: '$22', note: 'Sumac onions, tahini, toasted pine nuts.' },
    ],
  },
  {
    id: 'drinks',
    label: 'Drinks',
    dishes: [
      { name: 'Fig Leaf Spritz', price: '$14', note: 'Vermouth, fig leaf, soda.' },
      { name: 'Pomegranate Sour', price: '$15', note: 'Arak, citrus, egg white.' },
      { name: 'Mint and Lime Cooler', price: '$7', note: 'Alcohol-free, pressed to order.' },
    ],
  },
]

export function MenuTabs() {
  const [active, setActive] = useState(0)

  return (
    <section id="menu" className="mx-auto max-w-3xl px-4 py-16">
      <h2 className="text-center text-3xl font-bold">The menu</h2>
      <p className="mt-2 text-center text-slate-600">
        Written each morning around what the market gave us.
      </p>

      <div
        role="tablist"
        aria-label="Menu"
        data-testid="menu-tablist"
        className="mt-8 flex justify-center gap-2"
      >
        {MENUS.map((m, i) => (
          <button
            key={m.id}
            type="button"
            role="tab"
            id={`menu-tab-${m.id}`}
            data-testid="menu-tab"
            aria-selected={true}
            aria-controls={`menu-panel-${m.id}`}
            onClick={() => setActive(i)}
            className={
              i === active
                ? 'rounded-full bg-slate-900 px-5 py-2 text-sm font-medium text-white'
                : 'rounded-full px-5 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100'
            }
          >
            {m.label}
          </button>
        ))}
      </div>

      {/* One panel per menu, laid out down the section. */}
      {MENUS.map((m) => (
        <div
          key={m.id}
          role="tabpanel"
          id={`menu-panel-${m.id}`}
          aria-labelledby={`menu-tab-${m.id}`}
          data-testid="menu-panel"
          className="mt-8 divide-y"
        >
          {m.dishes.map((d) => (
            <div key={d.name} data-testid="menu-dish" className="flex justify-between gap-6 py-4">
              <div>
                <h3 className="font-medium">{d.name}</h3>
                <p className="mt-1 text-sm text-slate-600">{d.note}</p>
              </div>
              <span className="whitespace-nowrap text-slate-700">{d.price}</span>
            </div>
          ))}
        </div>
      ))}
    </section>
  )
}
