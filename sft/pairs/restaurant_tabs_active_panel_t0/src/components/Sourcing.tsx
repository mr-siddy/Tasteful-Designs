const SUPPLIERS = [
  {
    name: 'Point Judith Day Boats',
    what: 'Fish and shellfish',
    detail:
      'Landed in the morning, driven up Route 1 the same afternoon. If the boats stay in, the menu says so.',
    distance: '31 miles south',
  },
  {
    name: 'Sakonnet Salt Works',
    what: 'Flake salt',
    detail:
      'Evaporated in shallow pans in Little Compton. We go through roughly nine pounds of it a week.',
    distance: '22 miles east',
  },
  {
    name: 'Casa Ferrer, Girona',
    what: 'Anchovies and olives',
    detail:
      'Cured fourteen months in the Empordà by a family Núria has bought from since she was an apprentice.',
    distance: 'One shipment a quarter',
  },
  {
    name: 'Larkspur Kitchen Garden',
    what: 'Herbs and peppers',
    detail:
      'A community plot two blocks up Rope Walk. Artichokes, romesco peppers, broad beans, far too much mint.',
    distance: '400 yards north',
  },
  {
    name: 'Molí de Pau',
    what: 'Bomba rice',
    detail:
      'Short grain from the Ebre delta, milled to order. It drinks three times its volume in stock without collapsing.',
    distance: 'Shipped twice a year',
  },
]

export function Sourcing() {
  return (
    <section id="sourcing" data-testid="sourcing" className="bg-stone-100 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-amber-700">
              Who we buy from
            </p>
            <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight md:text-5xl">
              Five suppliers, all of whom we could drive to
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-stone-600">
              Except for two, and those two are in Catalonia, which is the entire point of the
              restaurant. Everything else comes from inside the state.
            </p>
          </div>
          <svg viewBox="0 0 120 120" role="img" aria-label="A compass rose pointing to the coast" className="h-28 w-28 shrink-0 self-start md:self-end">
            <circle cx="60" cy="60" r="52" fill="none" stroke="#a8a29e" strokeWidth="2" />
            <circle cx="60" cy="60" r="40" fill="none" stroke="#d6d3d1" strokeWidth="1.5" strokeDasharray="2 8" />
            <path d="M60 14l11 40-11 12-11-12z" fill="#b45309" />
            <path d="M60 106l-11-40 11-12 11 12z" fill="#e7e5e4" stroke="#a8a29e" strokeWidth="1.5" />
            <circle cx="60" cy="60" r="5" fill="#0f766e" />
          </svg>
        </div>

        <ul className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SUPPLIERS.map((supplier) => (
            <li
              key={supplier.name}
              data-testid="supplier"
              className="rounded-2xl border border-stone-300 bg-white p-7"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-teal-700">
                {supplier.what}
              </p>
              <h3 className="mt-3 font-serif text-xl font-semibold">{supplier.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-stone-600">{supplier.detail}</p>
              <p className="mt-5 border-t border-stone-200 pt-4 text-xs uppercase tracking-widest text-stone-400">
                {supplier.distance}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
