type Plate = {
  name: string
  price: string
  note: string
  icon: 'shrimp' | 'fish' | 'rice' | 'pepper' | 'bread' | 'cream'
}

const PLATES: Plate[] = [
  {
    name: 'Gambas al Ajillo Brasa',
    price: '$19',
    note: 'Head-on red shrimp seared in a clay dish of garlic, guindilla and last autumn’s oil.',
    icon: 'shrimp',
  },
  {
    name: 'Whole Turbot on the Coals',
    price: '$58',
    note: 'Split, basted with a rosemary brush, finished with the vinegar refrito we make at the pass.',
    icon: 'fish',
  },
  {
    name: 'Arròs a Banda',
    price: '$34',
    note: 'Bomba rice cooked in fish stock until the base catches, with alioli you stir in yourself.',
    icon: 'rice',
  },
  {
    name: 'Escalivada with Anchovies',
    price: '$16',
    note: 'Peppers, aubergine and onion buried in the embers overnight, peeled by hand at seven.',
    icon: 'pepper',
  },
  {
    name: 'Pa amb Tomàquet',
    price: '$7',
    note: 'Coal-toasted country bread rubbed with tomato, salt and oil. It reaches every table first.',
    icon: 'bread',
  },
  {
    name: 'Crema Catalana Cremada',
    price: '$12',
    note: 'Set with lemon and cinnamon, burnt to order with a hot iron so the sugar cracks under a spoon.',
    icon: 'cream',
  },
]

const PATHS: Record<Plate['icon'], string> = {
  shrimp: 'M8 26c8 4 20 2 24-6 2-5-2-10-7-10-6 0-9 5-8 9 1 5 6 6 9 4',
  fish: 'M6 20c8-9 22-9 30 0-8 9-22 9-30 0zm30 0l6-5v10z',
  rice: 'M7 24h26a13 13 0 0 1-26 0zM4 24h32',
  pepper: 'M20 10c6-4 14 0 14 8s-7 16-14 16S6 26 6 18c0-5 4-8 8-7',
  bread: 'M8 16c4-6 24-6 28 0v12c0 4-24 4-28 0z',
  cream: 'M8 18h24l-3 12H11zM12 12c1 3 5 3 6 0M22 12c1 3 5 3 6 0',
}

export function SignaturePlates() {
  return (
    <section id="plates" data-testid="signature-plates" className="bg-stone-50 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-amber-700">
            The short list
          </p>
          <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight md:text-5xl">
            The plates this room is known for
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-stone-600">
            Six things we will not take off. Some are ten dollars and some are nearly sixty, and all
            of them come off the same fire within about four feet of each other.
          </p>
        </div>

        <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PLATES.map((plate) => (
            <li
              key={plate.name}
              data-testid="signature-plate"
              className="group rounded-3xl border border-stone-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-amber-300 hover:shadow-xl"
            >
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-amber-800">
                <svg viewBox="0 0 40 40" aria-hidden="true" className="h-8 w-8">
                  <path
                    d={PATHS[plate.icon]}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div className="mt-6 flex items-baseline justify-between gap-4">
                <h3 className="font-serif text-xl font-semibold">{plate.name}</h3>
                <span className="whitespace-nowrap font-medium text-amber-700">{plate.price}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-stone-600">{plate.note}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
