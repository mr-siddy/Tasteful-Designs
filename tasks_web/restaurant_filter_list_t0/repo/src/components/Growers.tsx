type Grower = {
  name: string
  place: string
  distance: string
  sends: string
  note: string
}

const GROWERS: Grower[] = [
  {
    name: 'Hollow Bend Farm',
    place: "Leiper's Fork, TN",
    distance: '31 miles',
    sends: 'Vegetables, chicories, persimmons',
    note: 'Cass and Dorothy Whitlow have grown for us since the first week. The persimmon tree behind their barn is the reason half this restaurant has the name it does.',
  },
  {
    name: 'Cane Ridge Mill',
    place: 'Cross Plains, TN',
    distance: '44 miles',
    sends: 'Stone-milled cornmeal, grits, rye',
    note: 'One eighteen-inch granite stone turning slowly enough that the germ survives. We buy the coarse grind and sift nothing out of it.',
  },
  {
    name: 'Windrow Creek Creamery',
    place: 'Bethpage, TN',
    distance: '52 miles',
    sends: 'Cream, cultured butter, buttermilk',
    note: 'Forty-one Jersey cows on grass. The butter arrives unsalted in five-pound blocks on Tuesdays and Fridays and we culture it ourselves for two days.',
  },
  {
    name: 'Two Rivers Oyster Co.',
    place: 'Apalachicola, FL',
    distance: 'Twice weekly run',
    sends: 'Oysters, clams, gulf shrimp',
    note: 'The one thing we break the hundred-mile rule for. Kenji Alvarado drives it up overnight on Tuesday and Friday and will not sell us anything he would not eat standing on the dock.',
  },
  {
    name: 'Newsom Ridge Pork',
    place: 'Waverly, TN',
    distance: '68 miles',
    sends: 'Whole pigs, every fortnight',
    note: 'We take the animal whole and use it down to the bones, which is why the chop is on the menu one week and the shoulder the next.',
  },
  {
    name: 'Dickson County Firewood',
    place: 'Charlotte, TN',
    distance: '39 miles',
    sends: 'Split white oak and hickory',
    note: 'Seasoned eighteen months under cover before we will burn it. Damp wood makes bitter smoke, and bitter smoke ends up in the food.',
  },
]

export function Growers() {
  return (
    <section id="growers" aria-labelledby="growers-heading" className="border-b border-[#241C17]/10 bg-[#EDE3D3]">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C4552B]">
            Eleven suppliers, six of them here
          </p>
          <h2 id="growers-heading" className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
            We would rather name the farm than the technique
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#544940]">
            Eighty-two percent of what we spend on food and fuel stays inside Tennessee, and the
            people below are why the menu changes as often as it does. When the okra stops, the okra
            stops.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {GROWERS.map((grower) => (
            <article
              key={grower.name}
              className="flex flex-col rounded-2xl border border-[#241C17]/12 bg-[#FBF6EE] p-6 shadow-sm"
            >
              <svg viewBox="0 0 40 40" className="h-9 w-9" aria-hidden="true" focusable="false">
                <circle cx="20" cy="20" r="19" fill="#4A5D3A" opacity="0.14" />
                <path
                  d="M20 10c5 4 8 7 8 11a8 8 0 11-16 0c0-4 3-7 8-11z"
                  fill="none"
                  stroke="#4A5D3A"
                  strokeWidth="2.2"
                />
                <path d="M20 16v12" stroke="#4A5D3A" strokeWidth="2.2" strokeLinecap="round" />
              </svg>
              <h3 className="mt-4 text-lg font-black tracking-tight">{grower.name}</h3>
              <p className="mt-1 text-[11px] font-bold uppercase tracking-wider text-[#7A6B5F]">
                {grower.place} · {grower.distance}
              </p>
              <p className="mt-3 text-sm font-bold text-[#4A5D3A]">{grower.sends}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[#544940]">{grower.note}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
