const POURS = [
  { grape: 'Rkatsiteli', maker: 'Iago Bitarishvili, Kartli', note: 'Six months on skins. Quince, dried apricot, a grip like strong tea.' },
  { grape: 'Mtsvane', maker: 'Nikoladzeebis Marani, Imereti', note: 'Lighter, greener, tastes like a pear left in the sun.' },
  { grape: 'Saperavi', maker: 'Pheasant’s Tears, Kakheti', note: 'Ink-dark and savoury. The bottle we open when the toasts get serious.' },
]

export function QvevriCellar() {
  return (
    <section id="cellar" data-testid="cellar" className="bg-[#fdf8f1] py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-800">
            The cellar under the dining room
          </p>
          <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-stone-900 md:text-5xl">
            Wine made in a clay egg buried in the ground
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-stone-600">
            A qvevri is a beeswax-lined clay vessel, sometimes taller than the person filling it,
            sunk to its neck in the earth so the ground holds it at a steady cellar temperature all
            winter. Grapes go in whole — skins, stems, pips and all — and come out eight months
            later as a wine the colour of loose-leaf tea. Georgians have been doing this for eight
            thousand years, which makes every natural-wine bar in the country about seven thousand
            nine hundred years late.
          </p>
          <p className="mt-4 text-base leading-relaxed text-stone-600">
            We keep two 400-litre qvevri under the floor by the stairs and buy the rest of the list
            from twelve small marani across Kakheti, Imereti and Kartli. Nothing on the list is
            filtered, almost nothing is sulphured, and every bottle is open to taste before you
            commit to it.
          </p>

          <ul className="mt-9 space-y-4">
            {POURS.map((pour) => (
              <li
                key={pour.grape}
                data-testid="cellar-pour"
                className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm"
              >
                <h3 className="font-serif text-xl font-semibold text-stone-900">{pour.grape}</h3>
                <p className="mt-1 text-xs uppercase tracking-widest text-amber-700">
                  {pour.maker}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">{pour.note}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="order-1 lg:order-2">
          <svg
            viewBox="0 0 420 440"
            role="img"
            aria-label="Cutaway illustration of two qvevri buried beneath the dining room floor"
            className="w-full rounded-3xl shadow-xl shadow-stone-300/60"
          >
            <defs>
              <linearGradient id="cellar-earth" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#7c2d12" />
                <stop offset="100%" stopColor="#331408" />
              </linearGradient>
              <linearGradient id="cellar-jar" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#a16207" />
                <stop offset="45%" stopColor="#d97706" />
                <stop offset="100%" stopColor="#7c2d12" />
              </linearGradient>
              <linearGradient id="cellar-wine" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#fbbf24" />
                <stop offset="100%" stopColor="#b45309" />
              </linearGradient>
            </defs>

            <rect x="0" y="0" width="420" height="440" rx="24" fill="url(#cellar-earth)" />
            <rect x="0" y="0" width="420" height="118" fill="#fef3c7" />
            <rect x="0" y="106" width="420" height="14" fill="#92400e" />
            {[0, 1, 2, 3, 4, 5, 6].map((i) => (
              <rect key={i} x={i * 60} y="0" width="4" height="106" fill="#fde68a" opacity="0.9" />
            ))}

            <g>
              <path
                d="M118 132c34 0 58 10 58 26 0 30-16 60-16 110 0 62-18 96-42 96s-42-34-42-96c0-50-16-80-16-110 0-16 24-26 58-26z"
                fill="url(#cellar-jar)"
                stroke="#451a03"
                strokeWidth="3"
              />
              <ellipse cx="118" cy="140" rx="52" ry="14" fill="#451a03" />
              <ellipse cx="118" cy="138" rx="40" ry="9" fill="url(#cellar-wine)" />
            </g>

            <g>
              <path
                d="M292 150c30 0 50 9 50 23 0 26-14 52-14 96 0 54-16 84-36 84s-36-30-36-84c0-44-14-70-14-96 0-14 20-23 50-23z"
                fill="url(#cellar-jar)"
                stroke="#451a03"
                strokeWidth="3"
              />
              <ellipse cx="292" cy="158" rx="45" ry="12" fill="#451a03" />
              <ellipse cx="292" cy="156" rx="34" ry="8" fill="url(#cellar-wine)" />
            </g>

            <g stroke="#fbbf24" strokeWidth="2" fill="none" opacity="0.55">
              <path d="M40 300c22-8 34-8 56 0" strokeLinecap="round" />
              <path d="M356 336c-20-8-32-8-52 0" strokeLinecap="round" />
              <path d="M196 392c22-8 34-8 56 0" strokeLinecap="round" />
            </g>

            <g fill="#fde68a" opacity="0.75">
              <circle cx="72" cy="196" r="3" />
              <circle cx="348" cy="238" r="3" />
              <circle cx="228" cy="180" r="3" />
              <circle cx="196" cy="330" r="3" />
            </g>
          </svg>
        </div>
      </div>
    </section>
  )
}
