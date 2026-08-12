const POURS = [
  {
    name: 'Domaine Ravier, Jacquère',
    origin: 'Savoie, France · 2023',
    glass: '£9',
    bottle: '£38',
    note: 'Thin, stony and cold as a stream, which is exactly what you want against a plate that has been sitting over coals.',
  },
  {
    name: 'Kessler-Bruch, Riesling Trocken',
    origin: 'Mosel, Germany · 2021',
    glass: '£11',
    bottle: '£46',
    note: 'Slate and green apple with no sweetness left in it. Marta pours this with the bream more often than anything else on the list.',
  },
  {
    name: 'Corvo Nero, Frappato',
    origin: 'Sicily, Italy · 2022',
    glass: '£10',
    bottle: '£42',
    note: 'Light enough to chill for twenty minutes, with enough sour cherry to stand up to the ash-roasted onion in the barley.',
  },
  {
    name: 'Clos de Hautrive, Cabernet Franc',
    origin: 'Loire, France · 2020',
    glass: '£13',
    bottle: '£56',
    note: 'Graphite, bramble and a green edge that cuts through four weeks of dry-aging better than anything heavier would.',
  },
  {
    name: 'Fenland Perry, keeved',
    origin: 'Whitmoor, six miles away · 2024',
    glass: '£7',
    bottle: '£26',
    note: 'Pressed from six pear varieties in the orchard we buy damsons from, bottled with its own sugar and nothing else.',
  },
  {
    name: 'Oloroso, Bodegas Peñalba',
    origin: 'Jerez, Spain · solera 1998',
    glass: '£8',
    bottle: '£44',
    note: 'Walnut and salt, served properly cold. Order it with the burnt honey custard and thank us on the way out.',
  },
]

const SOFT = [
  {
    name: 'Sea buckthorn shrub',
    note: 'Dune berries from Skerry, cider vinegar, a week on the shelf. Sharp enough to reset the palate between courses.',
  },
  {
    name: 'Toasted barley kombucha',
    note: 'Brewed in the mill room from the same barley as the main course, fermented eleven days and lightly sparkling.',
  },
  {
    name: 'Birch and honey soda',
    note: 'Sap tapped in March from the trees along the towpath, cut with heather honey and carbonated to order.',
  },
]

export function CellarList() {
  return (
    <section id="cellar" data-section="cellar" className="bg-[#F0E4D2]">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#B7411F]">
              The cellar
            </p>
            <h2 className="mt-4 font-serif text-5xl font-semibold leading-tight tracking-tight text-[#1B1410]">
              Forty-one bottles, chosen by one person
            </h2>
            <p className="mt-6 text-base leading-relaxed text-[#2A211B]/75">
              Marta Vinter keeps the list deliberately small and deliberately light — smoke
              flattens big wine, and half of what she buys comes from growers she has actually
              stood in a field with. Six by the glass, changing every fortnight. Corkage is
              £18 if you would rather bring your own.
            </p>
          </div>
          <div className="rounded-3xl bg-[#FBF6EC] px-7 py-6 shadow-sm">
            <p className="font-serif text-3xl font-semibold text-[#B7411F]">£34</p>
            <p className="mt-1 max-w-[16rem] text-sm leading-relaxed text-[#2A211B]/70">
              Four glasses paired to the whole table menu, poured as each course lands.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {POURS.map((pour) => (
            <article
              key={pour.name}
              data-testid="cellar-pour"
              className="rounded-3xl bg-[#FBF6EC] p-7 shadow-sm ring-1 ring-[#2A211B]/5"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-serif text-xl font-semibold leading-snug text-[#1B1410]">
                  {pour.name}
                </h3>
                <span className="shrink-0 text-sm font-semibold text-[#B7411F]">
                  {pour.glass} <span className="text-[#2A211B]/40">/</span> {pour.bottle}
                </span>
              </div>
              <p className="mt-1 text-xs font-medium uppercase tracking-[0.16em] text-[#2A211B]/50">
                {pour.origin}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[#2A211B]/75">{pour.note}</p>
            </article>
          ))}
        </div>

        <div className="mt-14 rounded-3xl border border-[#2A211B]/15 p-8">
          <h3 className="font-serif text-2xl font-semibold text-[#1B1410]">
            If you are not drinking
          </h3>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#2A211B]/75">
            All three are made here, all three cost £6, and none of them is a soft drink with
            a sprig of something in it. The pairing can be run entirely without alcohol for
            £22 a head — say so when you book.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {SOFT.map((drink) => (
              <div key={drink.name}>
                <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden="true">
                  <path d="M9 6 h14 l-2 20 a5 5 0 0 1 -10 0 Z" fill="none" stroke="#3F5D4B" strokeWidth="2" />
                  <path d="M10 16 h12" stroke="#3F5D4B" strokeWidth="2" />
                  <path d="M11 16 l1.4 10 a3.6 3.6 0 0 0 7.2 0 L21 16 Z" fill="#8F9E6B" opacity="0.6" />
                </svg>
                <h4 className="mt-4 font-serif text-lg font-semibold text-[#1B1410]">
                  {drink.name}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-[#2A211B]/75">{drink.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
