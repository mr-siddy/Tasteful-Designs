const PEOPLE = [
  {
    name: 'Inés Arrieta',
    role: 'Chef-owner',
    bio: 'Seven years on the line at an asador outside San Sebastián, then four in Charleston. She welded the grill, she works it five nights a week, and she is the one who tells you the turbot is gone.',
  },
  {
    name: 'Emmett Sandoval',
    role: 'Head baker',
    bio: 'Came up through a bagel shop in Baltimore and a mill in the Shenandoah. Lights the deck oven at four, mills the rye on Tuesdays, and has never once been late.',
  },
  {
    name: 'Priya Raghavan',
    role: 'Beverage director',
    bio: 'Built a list of txakoli, Jura whites and Asturian cider that nobody in Durham asked for and everybody now orders. Four bottles under thirty dollars, always.',
  },
  {
    name: 'Odalys Prieto',
    role: 'Events and floor',
    bio: 'Runs the Long Table, the deposits and the room. If you have emailed us about a party in the last three years, you have emailed Odalys.',
  },
]

function RoomArt() {
  return (
    <svg viewBox="0 0 480 260" className="h-full w-full" role="img" aria-label="Cross section of the dining room in the old tobacco drying shed, with clerestory windows and the grill along one wall">
      <defs>
        <linearGradient id="room-wall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f5ecdd" />
          <stop offset="100%" stopColor="#e2d2b6" />
        </linearGradient>
      </defs>
      <rect width="480" height="260" rx="18" fill="url(#room-wall)" />
      <path d="M0 66 240 8l240 58v14H0z" fill="#8a6a4a" />
      <g fill="#faf5ec" opacity="0.85">
        {[92, 156, 220, 284, 348].map((x) => (
          <rect key={x} x={x} y="36" width="42" height="26" rx="3" transform={`skewY(${x < 240 ? -6 : 6})`} />
        ))}
      </g>
      <g stroke="#6b4a32" strokeWidth="4" strokeLinecap="round">
        {[70, 170, 300, 410].map((x) => (
          <line key={x} x1={x} y1="82" x2={x} y2="196" />
        ))}
      </g>
      <rect x="24" y="196" width="432" height="12" rx="4" fill="#6b4a32" />
      <rect x="24" y="208" width="432" height="34" rx="6" fill="#c9a97f" opacity="0.5" />
      <rect x="300" y="118" width="150" height="78" rx="8" fill="#241a14" />
      <g fill="#e0912f">
        {[318, 344, 370, 396, 422].map((x) => (
          <circle key={x} cx={x} cy={178} r="6" />
        ))}
      </g>
      <path d="M356 172c5-13-7-17-8-27-1-7 3-11 3-11s-9 4-9 14c0 5 2 8 2 8s-8-2-8-10c-7 6-11 13-11 21 0 11 9 19 17 19 3 0 6-1 6-1z" fill="#b8451f" />
      <rect x="44" y="150" width="210" height="14" rx="7" fill="#8a6a4a" />
      <g fill="#3d3128">
        {[62, 100, 138, 176, 214].map((x) => (
          <circle key={x} cx={x} cy={176} r="9" />
        ))}
      </g>
    </svg>
  )
}

export default function TheRoom() {
  return (
    <section id="room" aria-labelledby="room-heading" className="bg-[#f1e7d6]">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#b8451f]">The room</p>
            <h2 id="room-heading" className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              A tobacco shed with the ceiling left where it was
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[#5d4c3d]">
              The building went up in 1926 to dry bright leaf, which is why it is long, narrow and full of
              clerestory windows nobody would pay for today. We took out a drop ceiling, kept the heart pine
              purlins, and put the grill against the north wall where the flue already was.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-[#5d4c3d]">
              Fifty-two seats, a nine-seat counter facing the fire, and the Long Table down the south side.
              It is loud at eight and quiet at ten. The lighting is on a dimmer that Priya moves twice a
              night and will move again if you ask her to.
            </p>
            <div className="mt-8 overflow-hidden rounded-3xl border border-[#1b1512]/10 shadow-lg shadow-[#1b1512]/5">
              <RoomArt />
            </div>
          </div>

          <ul className="space-y-5">
            {PEOPLE.map((person) => (
              <li key={person.name} className="rounded-2xl border border-[#1b1512]/10 bg-[#faf5ec] p-6 shadow-sm">
                <h3 className="text-lg font-black tracking-tight">{person.name}</h3>
                <p className="mt-0.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#b8451f]">
                  {person.role}
                </p>
                <p className="mt-3 text-[15px] leading-relaxed text-[#5d4c3d]">{person.bio}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
