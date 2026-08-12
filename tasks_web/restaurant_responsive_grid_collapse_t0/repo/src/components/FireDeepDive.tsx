function WokRangeArt() {
  return (
    <svg viewBox="0 0 320 240" role="img" aria-label="Diagram of the six-ring wok range with its flame arcs" className="h-full w-full">
      <defs>
        <radialGradient id="wok-heat" cx="50%" cy="55%" r="55%">
          <stop offset="0%" stopColor="#F5A623" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#E4572E" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="320" height="240" rx="20" fill="#16110F" />
      <rect x="24" y="120" width="272" height="76" rx="10" fill="#241B18" stroke="#E4572E" strokeWidth="1" opacity="0.9" />
      <circle cx="160" cy="120" r="105" fill="url(#wok-heat)" />
      {[68, 116, 164, 212, 260].map((cx, i) => (
        <g key={cx}>
          <ellipse cx={cx} cy="120" rx="22" ry="7" fill="#0B0807" />
          <ellipse cx={cx} cy="116" rx="19" ry="6" fill="#3A2A25" />
          <path
            d={`M${cx - 12} 112c${4 - i} -12 0-18 -3-24 9 4 15 13 12 22z`}
            fill="#E4572E"
            opacity="0.9"
          />
          <path d={`M${cx + 4} 110c1-8 -1-12 -3-15 7 3 10 9 8 15z`} fill="#F5A623" opacity="0.85" />
        </g>
      ))}
      <rect x="40" y="150" width="60" height="8" rx="4" fill="#FBF5EC" opacity="0.2" />
      <rect x="40" y="166" width="96" height="8" rx="4" fill="#FBF5EC" opacity="0.12" />
      <text x="200" y="172" fill="#2F7A6B" fontSize="13" fontFamily="serif" letterSpacing="2">
        720°C at the rim
      </text>
    </svg>
  )
}

function FermentArt() {
  return (
    <svg viewBox="0 0 320 240" role="img" aria-label="Shelves of fermentation crocks in the downstairs cupboard" className="h-full w-full">
      <rect width="320" height="240" rx="20" fill="#1D1512" />
      {[62, 128, 194].map((y) => (
        <rect key={y} x="28" y={y} width="264" height="6" rx="3" fill="#3A2A25" />
      ))}
      {[
        { x: 62, y: 62, c: '#E4572E' },
        { x: 130, y: 62, c: '#2F7A6B' },
        { x: 198, y: 62, c: '#F5A623' },
        { x: 258, y: 62, c: '#8C4A2F' },
        { x: 74, y: 128, c: '#2F7A6B' },
        { x: 146, y: 128, c: '#E4572E' },
        { x: 222, y: 128, c: '#F5A623' },
      ].map((jar) => (
        <g key={`${jar.x}-${jar.y}`}>
          <path
            d={`M${jar.x - 20} ${jar.y - 34}c0-6 4-10 10-10h20c6 0 10 4 10 10l3 34h-46z`}
            fill={jar.c}
            opacity="0.85"
          />
          <rect x={jar.x - 22} y={jar.y - 46} width="44" height="8" rx="4" fill="#FBF5EC" opacity="0.7" />
          <rect x={jar.x - 12} y={jar.y - 22} width="24" height="12" rx="2" fill="#16110F" opacity="0.45" />
        </g>
      ))}
      <text x="28" y="224" fill="#FBF5EC" opacity="0.45" fontSize="12" fontFamily="serif" letterSpacing="3">
        DOUBANJIANG · 2023 · 2024 · 2025
      </text>
    </svg>
  )
}

function NoodleBenchArt() {
  return (
    <svg viewBox="0 0 320 240" role="img" aria-label="The noodle bench with rolled dough and hanging cut strands" className="h-full w-full">
      <rect width="320" height="240" rx="20" fill="#241B18" />
      <rect x="26" y="150" width="268" height="14" rx="6" fill="#FBF5EC" opacity="0.85" />
      <rect x="40" y="164" width="12" height="52" fill="#3A2A25" />
      <rect x="268" y="164" width="12" height="52" fill="#3A2A25" />
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => (
        <path
          key={i}
          d={`M${58 + i * 18} 44c6 22-6 40 0 62s-6 30 0 44`}
          stroke="#F5A623"
          strokeWidth="2.6"
          fill="none"
          opacity={0.5 + (i % 3) * 0.18}
          strokeLinecap="round"
        />
      ))}
      <rect x="26" y="30" width="268" height="8" rx="4" fill="#3A2A25" />
      <ellipse cx="96" cy="184" rx="42" ry="12" fill="#FBF5EC" opacity="0.18" />
      <ellipse cx="214" cy="190" rx="36" ry="10" fill="#2F7A6B" opacity="0.35" />
      <text x="132" y="196" fill="#FBF5EC" opacity="0.5" fontSize="12" fontFamily="serif" letterSpacing="3">
        CUT AT 4PM
      </text>
    </svg>
  )
}

const BLOCKS = [
  {
    eyebrow: 'The fire',
    title: 'Six rings, and none of them polite',
    art: <WokRangeArt />,
    body: [
      'The range came second-hand out of a Cantonese banquet hall that closed on Ferry Street, and it is the reason the food tastes the way it does. Each ring throws enough heat to take a wok rim past seven hundred degrees, which is what puts that faint smokiness — wok hei — through a plate of noodles in the forty seconds they spend in the pan.',
      'It also means the kitchen cooks one or two portions at a time and never in advance. If your table orders six plates they will arrive across ten minutes rather than all at once. That is not the kitchen falling behind; that is the only way this food is worth eating.',
    ],
  },
  {
    eyebrow: 'The ferment',
    title: 'A cupboard that predates the restaurant',
    art: <FermentArt />,
    body: [
      'Downstairs, where the letterpress ink used to be stored, there are forty-one crocks on three shelves: broad bean paste at one, two and three years, pickled chillies from a farm out at Kestrel Flats, mustard greens, radish, and a soy that Wen started the month the lease was signed.',
      'Nothing gets bought in that we can make slowly instead. It is why the mapo tofu tastes older than the restaurant does, and why the pickles change quietly through the year without anyone announcing a new menu.',
    ],
  },
  {
    eyebrow: 'The noodles',
    title: 'Rolled at two, cut at four, gone by midnight',
    art: <NoodleBenchArt />,
    body: [
      'The bench by the window is where the wheat noodles are made every afternoon in full view of the lane, which is either charming or a lot of pressure depending on who is rolling. Two doughs go up: a firm one for dan dan, a softer alkaline one for the cold sesame bowls.',
      'We cut roughly four hundred portions a day and we do not freeze the extra. When the noodle dishes come off the board around eleven on a busy Saturday, that is genuinely the end of them, and the kitchen will point you at the skewers instead.',
    ],
  },
]

export function FireDeepDive() {
  return (
    <section id="craft" className="bg-[#FBF5EC] py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#2F7A6B]">
            How the food gets made
          </p>
          <h2 className="mt-4 font-serif text-4xl font-semibold text-[#16110F] sm:text-5xl">
            Three things worth explaining
          </h2>
        </div>

        <div className="mt-16 space-y-20">
          {BLOCKS.map((block, index) => (
            <article
              key={block.title}
              data-testid="deep-dive-block"
              className={`grid items-center gap-10 lg:grid-cols-2 ${
                index % 2 === 1 ? 'lg:[&>figure]:order-first' : ''
              }`}
            >
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#E4572E]">
                  {block.eyebrow}
                </p>
                <h3 className="mt-3 font-serif text-3xl font-semibold leading-tight text-[#16110F]">
                  {block.title}
                </h3>
                {block.body.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)} className="mt-4 text-base leading-relaxed text-[#16110F]/70">
                    {paragraph}
                  </p>
                ))}
              </div>
              <figure className="overflow-hidden rounded-3xl border border-[#16110F]/10 shadow-xl shadow-[#16110F]/10">
                {block.art}
              </figure>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
