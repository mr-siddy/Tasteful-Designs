import { CoalIcon, EmberIcon, FlameIcon } from './Icons'

const HEATS = [
  {
    icon: FlameIcon,
    name: 'Open flame',
    temp: '620°F at the grate',
    body: 'The hottest third of the hearth, directly above burning apple wood. Oysters, hearth bread and anything that wants a hard, fast crust goes here — most things live over the flame for under three minutes.',
  },
  {
    icon: CoalIcon,
    name: 'Glowing coals',
    temp: '380°F at the grate',
    body: 'Once the wood breaks down we rake the coals to the middle bay. This is where the salmon planks lean in and the lamb gets its finish: steady radiant heat with no flare, so fat renders instead of scorching.',
  },
  {
    icon: EmberIcon,
    name: 'Cooling embers',
    temp: '210°F overnight',
    body: 'At close we bury shoulders, whole squash and heads of garlic in the ash and let the hearth do the work until morning. Nothing else in the kitchen makes meat taste like eleven hours of wood smoke.',
  },
]

export default function FireKitchen() {
  return (
    <section id="fire" className="bg-[#12261F] text-[#F7F1E8]">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-[11px] uppercase tracking-[0.24em] text-[#E08B4F]">The fire</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
              One hearth, three heats
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#F7F1E8]/80">
              There is no gas range at Copperfern and no convection oven. Tomás Iriarte lights the
              hearth at three every afternoon and spends the next two hours building a fire that
              will still be useful at midnight. Cooking this way means the menu is written around
              what the fire is doing at any given hour — which is why the card changes weekly and
              why the last table of the night eats differently from the first.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-[#F7F1E8]/80">
              We burn only untreated Washington hardwood: apple from an orchard outside Wenatchee,
              alder cut within forty miles of the restaurant. Both burn clean and neither leaves
              the resinous edge that softwood does.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#F7F1E8]/15 bg-[#0C1D17]/60 p-8">
            <svg viewBox="0 0 420 220" className="h-auto w-full" role="img" aria-label="Cross-section diagram of the hearth showing the flame bay, the coal bay and the ember bay">
              <defs>
                <linearGradient id="heat-scale" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#F3C98B" />
                  <stop offset="50%" stopColor="#E08B4F" />
                  <stop offset="100%" stopColor="#7A3B26" />
                </linearGradient>
              </defs>
              <rect x="10" y="18" width="400" height="152" rx="16" fill="#163026" stroke="#4C6B54" strokeWidth="2" />
              <rect x="28" y="132" width="364" height="20" rx="8" fill="url(#heat-scale)" />
              <g stroke="#F7F1E8" strokeOpacity=".35" strokeWidth="1.5">
                <path d="M148 30v122M272 30v122" />
              </g>
              <path d="M60 128c0-18 10-28 18-40 4 8 8 12 14 15 5-6 7-13 6-20 12 12 18 26 18 38 0 12-10 20-28 20s-28-6-28-13Z" fill="#F3C98B" />
              <g fill="#E08B4F">
                <circle cx="180" cy="122" r="9" />
                <circle cx="204" cy="126" r="11" />
                <circle cx="230" cy="121" r="8" />
                <circle cx="194" cy="108" r="7" opacity=".7" />
              </g>
              <g fill="#7A3B26">
                <circle cx="308" cy="126" r="10" />
                <circle cx="332" cy="122" r="8" />
                <circle cx="356" cy="127" r="11" />
              </g>
              <g fill="#F7F1E8" fontFamily="Helvetica, Arial, sans-serif" fontSize="12" letterSpacing="1.4" opacity=".8">
                <text x="46" y="192">FLAME</text>
                <text x="176" y="192">COALS</text>
                <text x="304" y="192">EMBERS</text>
              </g>
              <path d="M28 46h96M156 46h108M282 46h110" stroke="#4C6B54" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        <ul className="mt-16 grid gap-6 md:grid-cols-3">
          {HEATS.map((heat) => {
            const Icon = heat.icon
            return (
              <li key={heat.name} className="rounded-2xl border border-[#F7F1E8]/12 bg-[#F7F1E8]/5 p-7">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#E08B4F]/15 text-[#E08B4F]">
                  <Icon />
                </span>
                <h3 className="mt-5 font-serif text-2xl">{heat.name}</h3>
                <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-[#E08B4F]">
                  {heat.temp}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-[#F7F1E8]/75">{heat.body}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
