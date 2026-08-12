import { BoatIcon, CheeseIcon, LeafIcon, WheatIcon } from './Icons'

const PRODUCERS = [
  {
    icon: BoatIcon,
    name: 'F/V Northern Wren',
    place: 'Fishermen’s Terminal — 1.2 miles',
    body: 'Kai Lindqvist has sold us troll-caught king and coho since our first summer. The salmon that goes on the plank was swimming the day before yesterday.',
  },
  {
    icon: LeafIcon,
    name: 'Sunbreak Farm',
    place: 'Snoqualmie Valley — 31 miles',
    body: 'Two acres of brassicas, chicories and alliums under a standing order: we take whatever is best that week and write the vegetable dishes on Tuesday night.',
  },
  {
    icon: WheatIcon,
    name: 'Cascadia Grain Collective',
    place: 'Skagit Valley — 68 miles',
    body: 'Stone-milled Edison wheat and buckwheat, delivered in 25kg sacks every ten days. It is the reason the hearth bread tastes like something and not like air.',
  },
  {
    icon: CheeseIcon,
    name: 'Larkspur Creamery',
    place: 'Vashon Island — 22 miles',
    body: 'Raw jersey cream for the butter we culture, and a washed-rind wheel we serve with the honey tart when it is ready, which is roughly every third week.',
  },
]

export default function Sourcing() {
  return (
    <section id="sourcing" className="bg-[#F1E7D8]">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <p className="text-[11px] uppercase tracking-[0.24em] text-[#C4653A]">Sourcing</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-[#12261F] sm:text-5xl">
              Eleven people we buy from by name
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#12261F]/75">
              We run no broadline distributor account. Every protein, every vegetable and every
              grain on the menu comes from someone we have stood in a field or on a dock with,
              and the four below account for most of what you will eat tonight. When a producer
              has a bad week, the dish comes off the card — that is the trade we made.
            </p>

            <ul className="mt-10 grid gap-5 sm:grid-cols-2">
              {PRODUCERS.map((producer) => {
                const Icon = producer.icon
                return (
                  <li
                    key={producer.name}
                    className="rounded-2xl border border-[#12261F]/10 bg-[#F7F1E8] p-6"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#4C6B54]/12 text-[#4C6B54]">
                      <Icon />
                    </span>
                    <h3 className="mt-4 font-serif text-xl text-[#12261F]">{producer.name}</h3>
                    <p className="mt-1 text-xs uppercase tracking-[0.16em] text-[#C4653A]">
                      {producer.place}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-[#12261F]/70">
                      {producer.body}
                    </p>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="rounded-[2rem] border border-[#12261F]/10 bg-[#F7F1E8] p-8">
            <h3 className="font-serif text-2xl text-[#12261F]">How far your dinner travelled</h3>
            <svg viewBox="0 0 360 300" className="mt-6 h-auto w-full" role="img" aria-label="Stylised map of Puget Sound showing Copperfern in Ballard and the four producers around it">
              <defs>
                <linearGradient id="water" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#CFE0DA" />
                  <stop offset="100%" stopColor="#A9C6BC" />
                </linearGradient>
              </defs>
              <rect x="0" y="0" width="360" height="300" rx="20" fill="url(#water)" />
              <path
                d="M0 118c48-10 74 12 108 6s52-34 92-30 62 40 96 34 52-24 64-30v202H0Z"
                fill="#DCE8DC"
              />
              <path d="M0 74c40 4 60 26 96 24s50-26 84-22 54 32 88 28 66-22 92-30" fill="none" stroke="#8FB0A4" strokeWidth="2" />
              <g stroke="#C4653A" strokeWidth="2" strokeDasharray="5 6" fill="none">
                <path d="M172 176 92 128" />
                <path d="M172 176 274 96" />
                <path d="M172 176 300 208" />
                <path d="M172 176 74 232" />
              </g>
              <g fill="#4C6B54">
                <circle cx="92" cy="128" r="7" />
                <circle cx="274" cy="96" r="7" />
                <circle cx="300" cy="208" r="7" />
                <circle cx="74" cy="232" r="7" />
              </g>
              <circle cx="172" cy="176" r="13" fill="#C4653A" />
              <circle cx="172" cy="176" r="21" fill="none" stroke="#C4653A" strokeWidth="2" opacity=".45" />
              <g fill="#12261F" fontFamily="Helvetica, Arial, sans-serif" fontSize="11" letterSpacing=".6">
                <text x="188" y="180">Copperfern, Ballard</text>
                <text x="60" y="114">Northern Wren</text>
                <text x="222" y="82">Cascadia Grain</text>
                <text x="238" y="228">Sunbreak Farm</text>
                <text x="44" y="252">Larkspur Creamery</text>
              </g>
            </svg>
            <p className="mt-6 text-sm leading-relaxed text-[#12261F]/70">
              Average distance from producer to hearth: 30.6 miles. The longest haul on the menu
              is the wheat, and it still arrives the same morning it is milled.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
