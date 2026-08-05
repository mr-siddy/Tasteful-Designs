const DISHES = [
  {
    name: 'Broiled Lake Wanetka Walleye',
    price: '$32',
    note: 'Skin on, butter and lemon, under the salamander for four minutes and not a second longer. Comes with the potato you choose at the table.',
  },
  {
    name: 'Prime Rib, Cut to Order',
    price: '$38',
    note: 'The Saturday roast goes in at six in the morning. Point at the thickness you want and Curt cuts it in front of you; the sixteen ounce is $52.',
  },
  {
    name: 'Friday Perch Fry',
    price: '$26',
    note: 'Cracker meal, lard and cast iron, four fillets to a basket with rye bread, coleslaw and a lemon wedge nobody asked for but everybody uses.',
  },
  {
    name: 'Chicken Ostrowski',
    price: '$27',
    note: "Vera's 1951 recipe card, unchanged: half a bird roasted in paprika butter with dumplings and the pan juices poured over at the table. Sundays only.",
  },
  {
    name: 'Cedar Bluff Ribeye',
    price: '$46',
    note: 'Fourteen ounces off the bone-in loin, charred hard on the broiler, served with the onion rings Rosa cuts by hand at four o’clock.',
  },
  {
    name: 'Grasshopper Pie',
    price: '$11',
    note: 'Chocolate crumb, crème de menthe, frozen solid and cut with a hot knife. It has not changed since the Kennedy administration and it will not.',
  },
]

export function SupperMenu() {
  return (
    <section id="supper" className="bg-[#F6F1E4]">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="max-w-2xl">
          <p className="text-[11px] uppercase tracking-[0.32em] text-[#7C2D2D]">The supper menu</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#17130F]">
            Six things we have cooked ten thousand times
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#5C5445]">
            The full card runs longer than this, but these are the plates people drive out to Cedar
            Bluff Road for. Every supper arrives with the relish tray, a crock of braunschweiger,
            rye bread and the potato of your choosing — that is not an upsell, it is simply how
            supper is served here.
          </p>
        </div>

        <ul className="mt-14 grid gap-x-12 gap-y-10 md:grid-cols-2">
          {DISHES.map((dish) => (
            <li
              key={dish.name}
              data-testid="menu-dish"
              className="border-t border-[#17130F]/15 pt-6"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-xl font-semibold tracking-tight text-[#17130F]">{dish.name}</h3>
                <span className="text-lg font-semibold text-[#1C4535]">{dish.price}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[#5C5445]">{dish.note}</p>
            </li>
          ))}
        </ul>

        <p className="mt-12 max-w-3xl text-sm leading-relaxed text-[#7C6B4B]">
          Kitchen closes at nine on Wednesday and Thursday, ten on Friday and Saturday, and eight on
          Sunday. If you want the prime rib on a Sunday, call ahead and we will hold an end cut for
          you — once the roast is gone it is gone, and it has been gone by 6:40 on more Saturdays
          than Delia cares to count.
        </p>
      </div>
    </section>
  )
}
