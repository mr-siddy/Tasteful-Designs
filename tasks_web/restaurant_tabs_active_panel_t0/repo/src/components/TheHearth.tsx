function OakDrawing() {
  return (
    <svg viewBox="0 0 320 240" role="img" aria-label="Split oak logs stacked for the hearth" className="w-full">
      <rect width="320" height="240" rx="20" fill="#f5f5f4" />
      <g stroke="#a8a29e" strokeWidth="2.4" fill="#e7e5e4">
        <rect x="34" y="150" width="252" height="46" rx="10" />
        <rect x="58" y="104" width="204" height="46" rx="10" />
        <rect x="86" y="58" width="148" height="46" rx="10" />
      </g>
      <g stroke="#b45309" strokeWidth="2" fill="none">
        <circle cx="80" cy="173" r="12" />
        <circle cx="80" cy="173" r="6" />
        <circle cx="240" cy="173" r="12" />
        <circle cx="240" cy="173" r="6" />
        <circle cx="104" cy="127" r="11" />
        <circle cx="216" cy="127" r="11" />
        <circle cx="160" cy="81" r="12" />
        <circle cx="160" cy="81" r="6" />
      </g>
      <path d="M34 208h252" stroke="#d6d3d1" strokeWidth="6" strokeLinecap="round" />
    </svg>
  )
}

function EmberBoxDrawing() {
  return (
    <svg viewBox="0 0 320 240" role="img" aria-label="Cross-section of the ember box under a bed of ash" className="w-full">
      <defs>
        <linearGradient id="ember-heat" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#dc2626" />
          <stop offset="70%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#fef3c7" />
        </linearGradient>
      </defs>
      <rect width="320" height="240" rx="20" fill="#1c1917" />
      <rect x="40" y="70" width="240" height="130" rx="14" fill="#0c0a09" stroke="#57534e" strokeWidth="3" />
      <rect x="58" y="150" width="204" height="34" rx="10" fill="url(#ember-heat)" opacity="0.9" />
      <g fill="#78716c" opacity="0.85">
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <ellipse key={i} cx={72 + i * 30} cy={140} rx="14" ry="7" />
        ))}
      </g>
      <path
        d="M96 118c10 10 15 18 15 26M160 110c12 12 18 21 18 30M224 118c10 10 15 18 15 26"
        stroke="#f59e0b"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        opacity="0.7"
      />
      <rect x="118" y="86" width="84" height="20" rx="8" fill="#a8a29e" />
      <path d="M40 200h240" stroke="#f59e0b" strokeWidth="4" strokeLinecap="round" opacity="0.5" />
    </svg>
  )
}

function BrineDrawing() {
  return (
    <svg viewBox="0 0 320 240" role="img" aria-label="A brine crock with salt crystals and bay leaves" className="w-full">
      <rect width="320" height="240" rx="20" fill="#ecfeff" />
      <path d="M104 78h112l-12 122a16 16 0 0 1-16 14h-56a16 16 0 0 1-16-14z" fill="#cffafe" stroke="#0e7490" strokeWidth="3" />
      <path d="M96 78h128" stroke="#0e7490" strokeWidth="6" strokeLinecap="round" />
      <path d="M110 132h100" stroke="#22d3ee" strokeWidth="4" strokeDasharray="3 9" strokeLinecap="round" />
      <g fill="#0e7490">
        <rect x="128" y="152" width="12" height="12" rx="2" transform="rotate(18 134 158)" />
        <rect x="156" y="168" width="10" height="10" rx="2" transform="rotate(-24 161 173)" />
        <rect x="182" y="150" width="13" height="13" rx="2" transform="rotate(9 188 156)" />
      </g>
      <path d="M150 44c22 6 34 20 30 34-16 2-28-8-30-34z" fill="#15803d" />
      <path d="M150 44c-2 26 8 36 24 34" stroke="#166534" strokeWidth="2" fill="none" />
    </svg>
  )
}

const BLOCKS = [
  {
    id: 'oak',
    eyebrow: 'The wood',
    title: 'The oak comes from a cooperage in Little Compton',
    body: 'Barrel staves that failed inspection, split down and stacked for eighteen months behind the kitchen. Dry white oak burns clean and slow and leaves an ember that holds its heat for hours instead of flaring and dying. We do not use charcoal briquettes, lighter fluid, or any wood that has been treated, painted or glued.',
    visual: <OakDrawing />,
  },
  {
    id: 'ember-box',
    eyebrow: 'The slow work',
    title: 'The ember box does everything the grill cannot',
    body: 'Underneath the grill is a steel drawer we rake the spent coals into. Peppers, whole onions, aubergine and lamb shoulder go in there under a blanket of ash, somewhere around 260 degrees, and stay overnight. By morning the skins slip off in one piece and the flesh tastes of smoke without ever having seen a flame.',
    visual: <EmberBoxDrawing />,
  },
  {
    id: 'brine',
    eyebrow: 'The discipline',
    title: 'Nothing touches the fire without salt first',
    body: 'Fish is brined for twenty minutes in Sakonnet flake salt and water; meat is salted the night before and left uncovered in the walk-in. It seasons all the way through, it dries the surface so the skin actually crisps, and it means the cook at the grill is judging one thing only — heat — instead of three at once.',
    visual: <BrineDrawing />,
  },
]

export function TheHearth() {
  return (
    <section id="hearth" data-testid="the-hearth" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-amber-700">
            How the fire works
          </p>
          <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight md:text-5xl">
            One hearth, three temperatures, no gas anywhere in the building
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-stone-600">
            People ask what the trick is. There is not one — there is a wood pile, a drawer full of
            ash, and a rule about salt. Those three things decide almost everything that reaches
            your table.
          </p>
        </div>

        <div className="mt-16 space-y-16">
          {BLOCKS.map((block, index) => (
            <article
              key={block.id}
              data-testid="hearth-block"
              className={
                index % 2 === 1
                  ? 'grid items-center gap-10 md:grid-cols-2 md:[&>*:first-child]:order-2'
                  : 'grid items-center gap-10 md:grid-cols-2'
              }
            >
              <div className="overflow-hidden rounded-3xl border border-stone-200 bg-stone-50 p-6">
                {block.visual}
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-teal-700">
                  {block.eyebrow}
                </p>
                <h3 className="mt-3 font-serif text-2xl font-semibold md:text-3xl">{block.title}</h3>
                <p className="mt-4 leading-relaxed text-stone-600">{block.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
