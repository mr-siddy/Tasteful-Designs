const BLOCKS = [
  {
    id: 'wood',
    eyebrow: 'The fire',
    title: 'Oak for heat, almond for smoke, nothing for show',
    body: [
      'The hearth is lit at 11am and burns down for six hours before the first plate goes near it. Oak split from windfall in the Kessel valley gives us the long, even bed of coals; almond wood — a by-product of the orchards two hours south — goes on late for the sweeter smoke that ends up in the trout and the squash.',
      'There is no gas on the cooking line. That sounds like a slogan until you watch a cook spend four minutes moving a ribeye eight inches to find the right heat. It is slower, it is harder to staff, and it is the reason the food tastes the way it does.',
    ],
    art: (
      <svg viewBox="0 0 320 240" className="h-full w-full" role="img" aria-label="Diagram of the three heat zones across the hearth bed">
        <rect width="320" height="240" rx="18" fill="#1c1917" />
        <ellipse cx="160" cy="170" rx="128" ry="46" fill="#7c2d12" opacity="0.7" />
        <ellipse cx="96" cy="168" rx="52" ry="30" fill="#f97316" opacity="0.85" />
        <ellipse cx="176" cy="172" rx="44" ry="26" fill="#fb923c" opacity="0.7" />
        <ellipse cx="244" cy="176" rx="38" ry="22" fill="#78350f" opacity="0.9" />
        <g stroke="#e7e5e4" strokeWidth="2" strokeLinecap="round">
          <path d="M40 96h240M40 84h240" />
          <path d="M56 96v18M120 96v18M184 96v18M248 96v18" />
        </g>
        <g fill="#fcd34d" fontSize="13" fontFamily="ui-sans-serif, system-ui, sans-serif">
          <text x="70" y="54">640°C</text>
          <text x="150" y="54">420°C</text>
          <text x="224" y="54">180°C</text>
        </g>
        <g fill="#a8a29e" fontSize="11" fontFamily="ui-sans-serif, system-ui, sans-serif">
          <text x="62" y="216">sear</text>
          <text x="150" y="216">cook</text>
          <text x="226" y="216">rest</text>
        </g>
      </svg>
    ),
  },
  {
    id: 'sourcing',
    eyebrow: 'The sourcing',
    title: 'Eleven farms, one valley, no middle',
    body: [
      'Ninety-two percent of what we serve is grown, raised or caught inside the valley. We buy whole animals from Dunmore Pasture and Hask Farm, four at a time, and the kitchen is expected to use all of it — which is why the bar snack is a fried tail and why the butter tastes of marrow.',
      'Produce arrives twice a day from Ironside Market, a nine-minute walk from the back door. Nadia writes the menu after the second delivery, not before. If the cavolo nero is better than the chicory, the chicory dish does not run.',
    ],
    art: (
      <svg viewBox="0 0 320 240" className="h-full w-full" role="img" aria-label="Map of the eleven supplying farms around the valley">
        <rect width="320" height="240" rx="18" fill="#f5f5f4" />
        <path d="M0 176c60-26 96 12 152-6s112-52 168-34v104H0v-64Z" fill="#d6d3d1" />
        <path d="M0 202c72-20 108 10 164-4s100-30 156-18v60H0v-38Z" fill="#a8a29e" opacity="0.6" />
        <g fill="#9a3412">
          <circle cx="72" cy="96" r="7" />
          <circle cx="126" cy="66" r="7" />
          <circle cx="186" cy="104" r="7" />
          <circle cx="238" cy="72" r="7" />
          <circle cx="98" cy="146" r="7" />
          <circle cx="212" cy="152" r="7" />
        </g>
        <circle cx="160" cy="120" r="13" fill="#f59e0b" stroke="#1c1917" strokeWidth="3" />
        <g stroke="#78716c" strokeWidth="1.5" strokeDasharray="4 5">
          <path d="M160 120L72 96M160 120l-34 -54M160 120l26 -16M160 120l78 -48M160 120l-62 26M160 120l52 32" />
        </g>
        <text x="160" y="30" textAnchor="middle" fill="#44403c" fontSize="13" fontFamily="ui-sans-serif, system-ui, sans-serif">
          Kessel valley, 40km
        </text>
      </svg>
    ),
  },
  {
    id: 'cellar',
    eyebrow: 'The cellar',
    title: 'Fifty-one bottles, chosen by one person',
    body: [
      'Theo Braddock keeps the list short on purpose. Fifty-one bottles, roughly two-thirds from growers he has actually stood in a vineyard with, and eleven of them available by the glass on any given night through a preservation system he rebuilt himself.',
      'Everything is priced at a flat markup rather than a multiple, so the interesting bottle at the top of the list costs you the same margin as the honest one at the bottom. Ask him what is drinking well and he will tell you the truth, even when the truth is the cheapest thing on the page.',
    ],
    art: (
      <svg viewBox="0 0 320 240" className="h-full w-full" role="img" aria-label="Illustration of the cellar racks and glass pours">
        <rect width="320" height="240" rx="18" fill="#0c0a09" />
        <g stroke="#57534e" strokeWidth="2">
          <path d="M32 44h256M32 108h256M32 172h256" />
        </g>
        {[0, 1, 2].map((row) =>
          [0, 1, 2, 3, 4, 5, 6].map((col) => (
            <g key={`${row}-${col}`} transform={`translate(${44 + col * 34} ${52 + row * 64})`}>
              <rect width="20" height="44" rx="6" fill={row === 1 && col === 3 ? '#f59e0b' : '#44403c'} />
              <rect x="6" y="-8" width="8" height="12" rx="2" fill="#292524" />
            </g>
          )),
        )}
        <text x="160" y="226" textAnchor="middle" fill="#a8a29e" fontSize="12" fontFamily="ui-sans-serif, system-ui, sans-serif">
          51 bottles · 11 by the glass
        </text>
      </svg>
    ),
  },
]

export function FireDeepDive() {
  return (
    <section id="fire" className="bg-stone-100 text-stone-900" aria-labelledby="fire-heading">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-orange-700">
            How the room actually works
          </p>
          <h2 id="fire-heading" className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Three things we refuse to shortcut
          </h2>
        </div>

        <div className="mt-16 space-y-20">
          {BLOCKS.map((block, i) => (
            <article
              key={block.id}
              data-testid="deep-dive-block"
              className={
                i % 2 === 1
                  ? 'grid items-center gap-10 lg:grid-cols-2 lg:[&>*:first-child]:order-2'
                  : 'grid items-center gap-10 lg:grid-cols-2'
              }
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">
                  {block.eyebrow}
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                  {block.title}
                </h3>
                {block.body.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)} className="mt-5 leading-relaxed text-stone-600">
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="overflow-hidden rounded-3xl border border-stone-200 bg-white p-4 shadow-lg shadow-stone-300/40">
                {block.art}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
