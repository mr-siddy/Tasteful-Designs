const PORTRAIT = `data:image/svg+xml;utf8,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 480">
     <defs><linearGradient id="b" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1d3d47"/><stop offset="1" stop-color="#0a1a20"/></linearGradient></defs>
     <rect width="480" height="480" fill="url(#b)"/>
     <ellipse cx="360" cy="150" rx="150" ry="120" fill="#d2601a" opacity="0.28"/>
     <rect x="120" y="300" width="240" height="180" rx="30" fill="#f3ece0"/>
     <rect x="150" y="300" width="180" height="180" fill="#e3d8c5"/>
     <circle cx="240" cy="212" r="76" fill="#e8c9a8"/>
     <path d="M164 208c0-52 34-84 76-84s76 32 76 84c0-24-30-34-76-34s-76 10-76 34Z" fill="#3a2b21"/>
     <path d="M120 330c22-26 66-42 120-42s98 16 120 42v40H120Z" fill="#f3ece0"/>
     <g stroke="#0b2027" stroke-width="6" stroke-linecap="round" opacity="0.5"><path d="M196 372v100M284 372v100"/></g>
     <g fill="#0b2027" opacity="0.8"><rect x="60" y="392" width="360" height="18" rx="8"/></g>
     <g fill="#8fb8ae"><circle cx="86" cy="128" r="16"/><circle cx="124" cy="96" r="10"/></g>
   </svg>`,
)}`

const BLOCKS = [
  {
    id: 'fire',
    eyebrow: 'The fire',
    heading: 'One hearth, lit at eleven, out at midnight',
    body: [
      'The fire is laid at eleven in the morning with split white oak from a woodlot in Essex and finished with apple for the last two hours of service, because apple gives up its heat fast and takes the edge off the smoke. By five it is a bed of embers eleven inches deep, and everything that leaves this kitchen has been near it.',
      'Cooking this way means the kitchen cannot be rushed and cannot be paused. There is no hob to turn down. A cook learns to read the bed by colour and to move a pan four inches instead of touching a dial, and it takes most of a year before we let anybody work the far end of the grill on a Saturday.',
    ],
    stat: { value: '1.8 cords', label: 'of oak and apple a month' },
  },
  {
    id: 'boats',
    eyebrow: 'The boats',
    heading: 'Landed at three, on the coals by five',
    body: [
      'We buy from four day boats out of Pigeon Cove and one longliner working out of Gloucester, and we buy whatever they actually caught rather than sending them a list. Marisol walks down to the pier at three, and the board goes to the printer at four with whatever came off the deck on it.',
      'It means we cannot promise you the monkfish, and it means that when the cod is on, it is a fish that was swimming that morning. In September there is often something on the board that has no fixed name yet — ask, and whoever brings it will tell you which boat it came off.',
    ],
    stat: { value: '5 boats', label: 'we buy from directly' },
  },
  {
    id: 'cellar-list',
    eyebrow: 'The cellar',
    heading: 'Bottles that can stand next to smoke',
    body: [
      'Tobias keeps about two hundred and forty labels, weighted heavily to the Loire, Jura, Galicia and the Canaries, plus a short cider list from three Massachusetts orchards. The brief is narrow: everything on it has to hold its shape next to char and salt, which rules out a great deal of very good wine.',
      'Forty bottles sit under $60 and every one of them is poured by the glass on request, because a list you cannot afford to explore is decoration. Tell whoever is on the floor what you usually drink and they will bring you the thing next to it.',
    ],
    stat: { value: '240 labels', label: 'and 40 of them under $60' },
  },
]

export default function HearthStory() {
  return (
    <section id="fire" className="bg-[#fbf7ef]">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <figure className="order-2 lg:order-1">
            <img
              src={PORTRAIT}
              alt="Chef Marisol Bevan at the pass, plating a cod loin under the heat lamps"
              className="w-full rounded-3xl border border-[#0b2027]/10 shadow-xl"
            />
            <figcaption className="mt-4 text-sm leading-relaxed text-[#0b2027]/60">
              Marisol Bevan opened Salt Quarry in 2019 after eleven years cooking in Copenhagen and San Sebastián, and
              most nights she is still on the fish station.
            </figcaption>
          </figure>
          <div className="order-1 lg:order-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#d2601a]">How we work</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
              Three things we decided early and never revisited
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[#0b2027]/75">
              A restaurant is mostly a stack of small decisions nobody sees. These are the three that shaped everything
              else about this one, and they are the reason the room looks and sounds the way it does.
            </p>
          </div>
        </div>

        <div className="mt-16 space-y-14">
          {BLOCKS.map((block, index) => (
            <article
              key={block.id}
              data-testid="story-block"
              className={`grid gap-8 rounded-3xl border border-[#0b2027]/10 bg-white p-8 shadow-sm lg:grid-cols-[1.4fr_0.6fr] lg:items-center lg:p-10 ${
                index % 2 === 1 ? 'lg:[direction:rtl] lg:[&>*]:[direction:ltr]' : ''
              }`}
            >
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#0b2027]/45">
                  {block.eyebrow}
                </p>
                <h3 className="mt-3 font-serif text-2xl font-semibold sm:text-3xl">{block.heading}</h3>
                {block.body.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)} className="mt-4 leading-relaxed text-[#0b2027]/75">
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="rounded-2xl bg-[#0b2027] p-8 text-center text-[#f3ece0]">
                <p className="font-serif text-4xl font-semibold text-[#f0a35e]">{block.stat.value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-[#f3ece0]/60">{block.stat.label}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
