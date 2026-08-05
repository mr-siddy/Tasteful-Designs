type Plate = { name: string; price: string; note: string }

const PLATES: Plate[] = [
  {
    name: 'Hearth Bread & Cultured Butter',
    price: '$8',
    note: 'Pulled from the oak coals every twenty minutes until we run out.',
  },
  {
    name: 'Whole Branzino, Vine Ash',
    price: '$38',
    note: 'Grilled over vine cuttings, dressed with lemon and green oil.',
  },
  {
    name: 'Coal-Roast Beets & Labneh',
    price: '$17',
    note: 'Buried in embers overnight, walnut dukkah, dill.',
  },
]

export function FromTheFire() {
  return (
    <section id="fire" className="border-t border-stone-200 bg-white">
      <div className="mx-auto max-w-4xl px-4 py-20">
        <h2 className="text-center text-3xl font-semibold tracking-tight">From the fire</h2>
        <p className="mx-auto mt-3 max-w-lg text-center text-stone-600">
          Everything is cooked over oak and vine. The board is rewritten most mornings, but
          these three have not left it yet.
        </p>

        <ul className="mt-12 grid gap-8 sm:grid-cols-3">
          {PLATES.map((plate) => (
            <li key={plate.name} data-testid="fire-plate">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-medium">{plate.name}</h3>
                <span className="whitespace-nowrap text-stone-700">{plate.price}</span>
              </div>
              <p className="mt-2 text-sm text-stone-600">{plate.note}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
