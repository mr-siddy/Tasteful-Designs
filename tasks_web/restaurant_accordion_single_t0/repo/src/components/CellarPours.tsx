const POURS = [
  {
    id: 'coastal-whites',
    name: 'Coastal whites, mostly unfashionable',
    range: '$44 – $110 a bottle · $11 by the glass',
    detail:
      'Txakoli, Muscadet on lees, a Jura savagnin that tastes of the sea air it was raised in. Priya buys for salt and acid because that is what fish off a fire wants.',
  },
  {
    id: 'keeved-cider',
    name: 'Keeved cider on tap',
    range: '$7 a half · $13 a pint',
    detail:
      'Wend Valley press it in October and we take a barrel a fortnight. Low alcohol, faintly sweet, and the drink everybody ends up ordering a second of.',
  },
  {
    id: 'reds',
    name: 'Reds light enough to chill',
    range: '$46 – $130 a bottle · $12 by the glass',
    detail:
      'Trousseau, Beaujolais crus, a mencía from a co-op in Bierzo. Nothing heavy enough to flatten a plate of leeks and walnut.',
  },
  {
    id: 'no-alcohol',
    name: 'The no-alcohol list, taken seriously',
    range: '$6 – $9 a glass · $34 for the flight',
    detail:
      'Ezra ferments a birch and bay soda, a kombucha with the greengage skins, and a smoked apple shrub that goes with the rib better than most wine does.',
  },
]

export function CellarPours() {
  return (
    <section aria-labelledby="cellar-heading" className="bg-[#123C43] text-[#FAF6EF]">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#E9C79A]">The cellar</p>
            <h2 id="cellar-heading" className="mt-3 text-4xl font-semibold tracking-tight">
              Ninety bottles, four taps, no theatre
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#D9CFC0]">
              The list is short on purpose and half of it is under fifty dollars. Priya will ask what
              you are eating and what you normally drink, then pour you something you have not heard
              of, and if you do not like it she will drink it herself and open something else.
            </p>
            <svg
              viewBox="0 0 260 160"
              role="img"
              aria-label="Illustration of four bottles, a cider tap and a glass on the bar"
              className="mt-10 h-auto w-full max-w-sm"
            >
              <rect width="260" height="160" rx="18" fill="#0F3239" />
              <g fill="#7FA0A5">
                <path d="M52 60h14v-12h-6v-8h-2v8h-6Z" />
                <rect x="46" y="60" width="26" height="72" rx="8" fill="#2F6B57" />
                <rect x="86" y="52" width="26" height="80" rx="8" fill="#8B6B4A" />
                <rect x="126" y="64" width="26" height="68" rx="8" fill="#6B7F49" />
                <rect x="166" y="56" width="26" height="76" rx="8" fill="#7A3B36" />
              </g>
              <path d="M212 60h20v14h-8v22a10 10 0 0 1-20 0V74h8Z" fill="#C9B79B" />
              <rect x="30" y="132" width="200" height="8" rx="4" fill="#3E2B24" />
              <path d="M96 48h6M136 60h6M176 52h6" stroke="#E9C79A" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </div>

          <ul className="grid gap-5 sm:grid-cols-2">
            {POURS.map((pour) => (
              <li
                key={pour.id}
                data-testid="pour-card"
                className="rounded-2xl border border-[#FAF6EF]/15 bg-[#FAF6EF]/5 p-6"
              >
                <h3 className="text-lg font-semibold tracking-tight text-[#E9C79A]">{pour.name}</h3>
                <p className="mt-2 text-xs font-medium uppercase tracking-[0.16em] text-[#A9B7B6]">
                  {pour.range}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[#D9CFC0]">{pour.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
