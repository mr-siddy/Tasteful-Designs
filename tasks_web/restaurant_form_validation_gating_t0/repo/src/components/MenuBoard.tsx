const DISHES = [
  {
    name: 'Whole turbot on the rack',
    price: '$74',
    portion: 'for two',
    note: 'Six pounds of Atlantic turbot in a hinged basket, basted twice with cider vinegar and garlic, carved at the table. The bones go back on the coals and come out as the next day’s stock.',
  },
  {
    name: 'Chuleta, forty-day dry-aged',
    price: '$96',
    portion: 'for two to three',
    note: 'A bone-in rib from a retired dairy cow out of Chatham County. Salted an hour ahead, turned once, rested on warm oak while you finish the peppers.',
  },
  {
    name: 'Blistered Padrón peppers',
    price: '$14',
    portion: 'plate',
    note: 'Straight into the hottest corner of the grate until the skins go, then coarse salt and nothing else. Roughly one in ten will take your head off.',
  },
  {
    name: 'Coal-roasted sweet onion',
    price: '$16',
    portion: 'plate',
    note: 'Buried in the ash for fifty minutes, peeled back to the sweet centre, dressed with sherry vinegar, walnuts and a spoon of last summer’s tomato conserva.',
  },
  {
    name: 'Ember-cooked leeks, romesco',
    price: '$18',
    portion: 'plate',
    note: 'The calçotada trick, done in North Carolina in February. Charred black on the outside, steamed in their own skins, pulled out and dipped by hand.',
  },
  {
    name: 'Burnt Basque cheesecake',
    price: '$13',
    portion: 'slice',
    note: 'Baked hot and fast in the bakehouse deck oven until the top is almost black. It sits at room temperature all night and is better at nine than at six.',
  },
]

function FlameIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4 text-[#b8451f]" aria-hidden="true">
      <path
        d="M10 2c.9 3.3-1.7 4.3-2 6.6-.3 1.8.8 2.8.8 2.8s-2.2-.4-2.2-2.8C4.9 9.9 4 11.7 4 13.6 4 17.1 6.7 19 10 19s6-1.9 6-5.4C16 9.2 12 7.5 10 2z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function MenuBoard() {
  return (
    <section id="menu" aria-labelledby="menu-heading" className="bg-[#faf5ec]">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-3xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#b8451f]">Off the fire</p>
          <h2 id="menu-heading" className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
            Six things we cook every night we are open
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#5d4c3d]">
            The full card changes with what the farms send and what the boats land, but these six have been
            on it since the first week and will be there tonight. Prices are what you pay; there is no
            service charge and no cover.
          </p>
        </div>

        <ul className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-[#1b1512]/10 bg-[#1b1512]/10 md:grid-cols-2">
          {DISHES.map((dish) => (
            <li key={dish.name} className="bg-[#faf5ec] p-7 transition hover:bg-[#f5ecdd]">
              <div className="flex items-baseline gap-4">
                <h3 className="text-xl font-black tracking-tight">{dish.name}</h3>
                <span className="ml-auto shrink-0 text-xl font-black text-[#b8451f]">{dish.price}</span>
              </div>
              <p className="mt-1 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#8a6a4a]">
                <FlameIcon />
                {dish.portion}
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-[#5d4c3d]">{dish.note}</p>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-wrap items-center gap-6 rounded-2xl bg-[#f1e7d6] p-7">
          <p className="min-w-[16rem] flex-1 text-base leading-relaxed text-[#5d4c3d]">
            Vegetarians eat well here and we would rather you told us in advance than apologised at the
            table. Priya keeps four bottles under thirty dollars on the list at all times, and the cider is
            poured from the shoulder because it needs the air.
          </p>
          <a
            href="#long-table"
            className="rounded-full bg-[#1b1512] px-6 py-3 text-sm font-bold text-[#faf5ec] transition hover:bg-[#392a20]"
          >
            Ask about a large party
          </a>
        </div>
      </div>
    </section>
  )
}
