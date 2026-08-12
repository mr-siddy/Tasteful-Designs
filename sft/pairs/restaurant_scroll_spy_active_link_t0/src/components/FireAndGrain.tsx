function FireDrawing() {
  return (
    <svg viewBox="0 0 320 240" role="img" aria-label="Cross-section of the oak hearth showing the coal bed and grill bars" className="w-full">
      <defs>
        <radialGradient id="coalGlow" cx="50%" cy="80%" r="65%">
          <stop offset="0%" stopColor="#F0C46B" />
          <stop offset="55%" stopColor="#B7411F" />
          <stop offset="100%" stopColor="#2A211B" />
        </radialGradient>
      </defs>
      <rect x="0" y="0" width="320" height="240" rx="20" fill="#2A211B" />
      <path d="M40 200 V120 a120 120 0 0 1 240 0 V200 Z" fill="#14100D" stroke="#6B5140" strokeWidth="3" />
      <ellipse cx="160" cy="192" rx="96" ry="22" fill="url(#coalGlow)" />
      <g stroke="#8A6B52" strokeWidth="5" strokeLinecap="round">
        <path d="M76 168 H244" />
        <path d="M76 156 H244" />
        <path d="M76 180 H244" />
      </g>
      <path d="M132 168 q12 -44 30 -60 q-8 26 8 38 q12 -10 10 -28 q22 24 18 50 Z" fill="#D8A244" />
      <path d="M148 168 q6 -22 16 -32 q-4 14 6 20 q6 -6 4 -16 q12 14 10 28 Z" fill="#FBE1A0" />
      <g fill="#6B5140">
        <rect x="56" y="196" width="52" height="14" rx="6" />
        <rect x="212" y="196" width="52" height="14" rx="6" />
      </g>
    </svg>
  )
}

function MillDrawing() {
  return (
    <svg viewBox="0 0 320 240" role="img" aria-label="Diagram of the stone mill, hopper and flour chute in the back room" className="w-full">
      <rect x="0" y="0" width="320" height="240" rx="20" fill="#F0E4D2" />
      <path d="M110 30 h100 l-22 46 h-56 Z" fill="#C7B27A" stroke="#8A6B52" strokeWidth="2.5" />
      <rect x="122" y="76" width="76" height="18" rx="6" fill="#8A6B52" />
      <circle cx="160" cy="140" r="52" fill="#D9CDB4" stroke="#6B5140" strokeWidth="3" />
      <circle cx="160" cy="140" r="34" fill="#EFE6D2" stroke="#8A6B52" strokeWidth="2" />
      <circle cx="160" cy="140" r="8" fill="#6B5140" />
      <g stroke="#8A6B52" strokeWidth="2" opacity="0.8">
        <path d="M160 106 V174" />
        <path d="M126 140 H194" />
        <path d="M136 116 L184 164" />
        <path d="M184 116 L136 164" />
      </g>
      <path d="M132 190 q28 22 56 0 v22 h-56 Z" fill="#FBF6EC" stroke="#8A6B52" strokeWidth="2.5" />
      <g fill="#C7B27A">
        <circle cx="146" cy="204" r="3" />
        <circle cx="160" cy="210" r="3" />
        <circle cx="174" cy="202" r="3" />
      </g>
      <g stroke="#8F9E6B" strokeWidth="2" fill="none">
        <path d="M40 212 V162" />
        <path d="M40 162 q8 -12 0 -24 q-8 12 0 24" fill="#C7B27A" stroke="none" />
        <path d="M280 212 V162" />
        <path d="M280 162 q8 -12 0 -24 q-8 12 0 24" fill="#C7B27A" stroke="none" />
      </g>
    </svg>
  )
}

function LarderDrawing() {
  return (
    <svg viewBox="0 0 320 240" role="img" aria-label="The October larder shelves lined with labelled preserving jars" className="w-full">
      <rect x="0" y="0" width="320" height="240" rx="20" fill="#2A211B" />
      <g stroke="#6B5140" strokeWidth="4">
        <path d="M28 104 H292" />
        <path d="M28 172 H292" />
        <path d="M28 216 H292" />
      </g>
      {[0, 1].map((shelf) =>
        [0, 1, 2, 3, 4].map((jar) => (
          <g key={`${shelf}-${jar}`} transform={`translate(${44 + jar * 48} ${44 + shelf * 68})`}>
            <rect x="0" y="8" width="34" height="52" rx="7" fill="#8F9E6B" opacity={shelf === 0 ? 0.9 : 0.6} />
            <rect x="0" y="8" width="34" height="52" rx="7" fill="none" stroke="#D8A244" strokeWidth="1.6" />
            <rect x="4" y="0" width="26" height="10" rx="3" fill="#D8A244" />
            <rect x="4" y="28" width="26" height="10" rx="2" fill="#FBF6EC" opacity="0.85" />
          </g>
        )),
      )}
      <g transform="translate(44 182)">
        <path d="M0 26 q18 -30 40 0 Z" fill="#B7411F" />
        <path d="M60 26 q22 -34 44 0 Z" fill="#D8A244" />
        <path d="M124 26 q16 -24 34 0 Z" fill="#8F9E6B" />
        <path d="M178 26 q20 -30 40 0 Z" fill="#C7B27A" />
      </g>
    </svg>
  )
}

const BLOCKS = [
  {
    eyebrow: 'Six in the morning',
    title: 'One fire, and it is never rebuilt',
    body: 'Ollie lights the oak at six and it burns down all day, so that by the time the doors open at six in the evening there is a bed of coals eighteen inches deep and no flame left on it. Everything after that is a question of where on the bed a thing goes: bream at the cool edge, leeks buried in the ash at the back, sirloin over the hottest quarter where the bars are almost white. Nothing is rebuilt mid-service. If the fire is wrong at seven, it is wrong until Thursday, which is why nobody in this kitchen is casual about the morning.',
    drawing: <FireDrawing />,
  },
  {
    eyebrow: 'The back room',
    title: 'A stone mill, forty feet from the oven',
    body: 'The mill is an Austrian granite pair from 1974 that we bought off a bakery in Whitmoor and rebuilt over one long February. It turns slowly enough that the flour comes off cool, which matters more than anything else about it — heat is what strips the germ of its flavour. We mill Turkey Red, dark rye and a little einkorn at seven each morning, and the loaf on your table is baked from grain that was whole four hours before you tore it. There is no bag of flour anywhere in this building.',
    drawing: <MillDrawing />,
  },
  {
    eyebrow: 'The larder',
    title: 'We salt in October so February tastes like something',
    body: 'From the last week of September the kitchen more or less stops cooking and starts putting things away: forty kilos of Fenland tomatoes into jars, damsons in brandy, sea buckthorn from the dunes at Skerry, green walnuts, the ash-roasted onion stock that ends up under half the menu. It fills a whole room and it is why the winter card does not read like an apology. When a dish in January mentions "last August", that is a jar with a date written on the lid in Nadia\'s handwriting, not a figure of speech.',
    drawing: <LarderDrawing />,
  },
]

export function FireAndGrain() {
  return (
    <section id="hearth" data-section="hearth" className="bg-[#F0E4D2]">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#B7411F]">
            The hearth
          </p>
          <h2 className="mt-4 font-serif text-5xl font-semibold leading-tight tracking-tight text-[#1B1410]">
            Three things this restaurant is actually built on
          </h2>
          <p className="mt-6 text-base leading-relaxed text-[#2A211B]/75">
            Everything else — the room, the wine list, the fact that we only do one seating
            — follows from the fire, the mill and the larder. Here is how each of them works,
            in more detail than a restaurant website is usually willing to go into.
          </p>
        </div>

        <div className="mt-16 space-y-20">
          {BLOCKS.map((block, index) => (
            <article
              key={block.title}
              className={[
                'grid items-center gap-10 lg:grid-cols-2 lg:gap-16',
                index % 2 === 1 ? 'lg:[&>figure]:order-first' : '',
              ].join(' ')}
            >
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#B7411F]/80">
                  {block.eyebrow}
                </p>
                <h3 className="mt-3 font-serif text-3xl font-semibold leading-snug text-[#1B1410]">
                  {block.title}
                </h3>
                <p className="mt-5 text-base leading-relaxed text-[#2A211B]/80">{block.body}</p>
              </div>
              <figure className="overflow-hidden rounded-3xl shadow-lg shadow-[#2A211B]/10">
                {block.drawing}
              </figure>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
