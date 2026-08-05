const SPACES = [
  {
    name: 'The Sail Loft',
    capacity: 'Seats 22, standing 34',
    price: '$95 per guest',
    body: 'The whole upstairs, with its own bar and the original rope hoist still bolted to the beam. One long table, five courses, wine paired or not as you like.',
    includes: [
      'Five courses off the same fire, written for your group',
      'Private bar and a dedicated server for the evening',
      'Exclusive use from 6:00 until midnight',
      'No room hire charge Tuesday through Thursday',
    ],
  },
  {
    name: "The Chef's Counter",
    capacity: 'Seats 6',
    price: '$140 per guest',
    body: 'Six stools looking straight into the hearth, close enough that you will smell the rosemary brush. Núria cooks and talks you through it as she goes.',
    includes: [
      'Nine or ten courses, decided the morning of',
      'Every plate handed over the pass, never carried',
      'A porrón of Garnacha to start, poured badly by everyone',
      'Booked at least three weeks ahead',
    ],
  },
]

export function PrivateDining() {
  return (
    <section id="loft" data-testid="private-dining" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.25fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-amber-700">
              Private dining
            </p>
            <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight md:text-5xl">
              The loft and the chef&rsquo;s counter
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-stone-600">
              Two rooms for two very different evenings. Both are booked directly with Amaia, who
              answers the phone between two and four every afternoon and will tell you honestly if
              your date will not work.
            </p>
            <svg
              viewBox="0 0 300 200"
              role="img"
              aria-label="Floorplan showing the sail loft above the main dining room and hearth"
              className="mt-10 w-full max-w-sm"
            >
              <rect width="300" height="200" rx="16" fill="#fafaf9" stroke="#d6d3d1" strokeWidth="2" />
              <rect x="22" y="22" width="120" height="156" rx="8" fill="#fef3c7" stroke="#b45309" strokeWidth="2" />
              <rect x="158" y="22" width="120" height="70" rx="8" fill="#e7e5e4" stroke="#a8a29e" strokeWidth="2" />
              <rect x="158" y="108" width="120" height="70" rx="8" fill="#ccfbf1" stroke="#0f766e" strokeWidth="2" />
              <rect x="50" y="60" width="64" height="80" rx="6" fill="#fde68a" stroke="#b45309" strokeWidth="2" />
              <path d="M170 44h96M170 60h96M170 76h60" stroke="#a8a29e" strokeWidth="3" strokeLinecap="round" />
              <g fill="#0f766e">
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <circle key={i} cx={180 + i * 18} cy={143} r="7" />
                ))}
              </g>
              <text x="82" y="172" textAnchor="middle" fontSize="11" fill="#78716c">
                Sail Loft
              </text>
              <text x="218" y="100" textAnchor="middle" fontSize="11" fill="#78716c">
                Dining room
              </text>
              <text x="218" y="190" textAnchor="middle" fontSize="11" fill="#78716c">
                Hearth &amp; counter
              </text>
            </svg>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {SPACES.map((space) => (
              <article
                key={space.name}
                data-testid="private-space"
                className="flex flex-col rounded-3xl border border-stone-200 bg-stone-50 p-8"
              >
                <h3 className="font-serif text-2xl font-semibold">{space.name}</h3>
                <p className="mt-2 text-sm uppercase tracking-widest text-stone-500">
                  {space.capacity}
                </p>
                <p className="mt-4 font-serif text-3xl font-semibold text-amber-700">
                  {space.price}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-stone-600">{space.body}</p>
                <ul className="mt-6 space-y-3 text-sm text-stone-700">
                  {space.includes.map((line) => (
                    <li key={line} className="flex gap-3">
                      <svg viewBox="0 0 20 20" aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 fill-teal-700">
                        <path d="M8 14.2L4.2 10.4l1.4-1.4L8 11.4l6.4-6.4 1.4 1.4z" />
                      </svg>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#visit"
                  data-testid="space-enquire"
                  className="mt-8 rounded-full border border-stone-900 px-6 py-3 text-center text-sm font-semibold text-stone-900 transition hover:bg-stone-900 hover:text-white"
                >
                  Enquire about {space.name}
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
