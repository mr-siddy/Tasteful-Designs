const KIT = [
  { name: 'Twelve platforms', detail: 'Ash-topped, built by Tobias and a borrowed drop saw over one long January.' },
  { name: 'Eleven metres of sled track', detail: 'Rubber laid over the old tram rails, which are still under there.' },
  { name: 'Calibrated plates to 250kg', detail: 'Because a five-kilo lie ruins four weeks of programming.' },
  { name: 'A rack of loanable shoes', detail: 'Sizes 4 to 14, cleaned Fridays, free while you work out if you like this.' },
  { name: 'Two rowers, four bikes', detail: 'Enough for the Engine Room and never so many that it becomes a spin studio.' },
  { name: 'A kettle and a decent grinder', detail: 'The 5:45 crowd would riot otherwise. Mugs live above the chalk bowl.' },
]

function RoomIllustration() {
  return (
    <svg
      viewBox="0 0 460 300"
      className="h-full w-full"
      role="img"
      aria-label="Cutaway illustration of the training hall showing platforms, racks and the sled track"
    >
      <defs>
        <linearGradient id="floor-wall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#EAE5DA" />
          <stop offset="100%" stopColor="#D8D1C2" />
        </linearGradient>
      </defs>
      <rect width="460" height="300" rx="24" fill="url(#floor-wall)" />

      <g stroke="#B9B1A0" strokeWidth="3" fill="none">
        <path d="M40 190V116a40 40 0 0 1 80 0v74" />
        <path d="M150 190V116a40 40 0 0 1 80 0v74" />
        <path d="M260 190V116a40 40 0 0 1 80 0v74" />
        <path d="M370 190V116a40 40 0 0 1 60 0v74" />
      </g>

      <rect x="24" y="196" width="412" height="10" rx="5" fill="#8A7F6C" />
      <rect x="24" y="206" width="412" height="70" rx="10" fill="#3A2A20" />
      <g stroke="#54402F" strokeWidth="2">
        <path d="M24 226h412M24 250h412M130 206v70M240 206v70M350 206v70" />
      </g>

      <g fill="#10161C">
        <rect x="60" y="120" width="9" height="76" rx="4" />
        <rect x="104" y="120" width="9" height="76" rx="4" />
        <rect x="56" y="140" width="61" height="7" rx="3.5" fill="#6E7A72" />
      </g>

      <g fill="#10161C">
        <rect x="186" y="120" width="9" height="76" rx="4" />
        <rect x="230" y="120" width="9" height="76" rx="4" />
        <rect x="182" y="132" width="61" height="7" rx="3.5" fill="#6E7A72" />
      </g>

      <g>
        <rect x="278" y="176" width="120" height="9" rx="4.5" fill="#10161C" />
        <circle cx="286" cy="180.5" r="18" fill="#C7F04A" stroke="#10161C" strokeWidth="3" />
        <circle cx="390" cy="180.5" r="18" fill="#C7F04A" stroke="#10161C" strokeWidth="3" />
      </g>

      <g fill="#D9622B">
        <rect x="40" y="230" width="92" height="12" rx="6" opacity="0.85" />
        <rect x="40" y="252" width="52" height="12" rx="6" opacity="0.55" />
      </g>

      <g fill="#6E7A72" opacity="0.6">
        <circle cx="418" cy="96" r="16" />
        <rect x="398" y="66" width="40" height="8" rx="4" />
      </g>
    </svg>
  )
}

export function TheFloor() {
  return (
    <section id="the-floor" className="bg-[#10161C] text-[#F4F1EA]">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.28em] text-[#C7F04A]">
              The room itself
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              A tram shed with very good ceilings and no mirrors
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#CFD6CE]">
              Fourteen Kemp Street was a tram maintenance shed until 1974 and a furniture warehouse
              until we signed the lease. It has nine-metre ceilings, four skylights, brick that keeps
              the room cool until January, and enough echo that we had to hang carpet on the north
              wall before the neighbours complained. There are no mirrors, no screens counting your
              calories and no music with a countdown clock on it.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#CFD6CE]">
              What it does have is space. Every platform gets three metres, which means you can miss
              a lift and drop the bar without hitting anybody, and that single fact is why beginners
              stop being frightened here somewhere around week three.
            </p>

            <ul className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2">
              {KIT.map((item) => (
                <li key={item.name} data-testid="floor-kit">
                  <h3 className="text-sm font-black uppercase tracking-[0.14em] text-[#C7F04A]">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#A9B3AC]">{item.detail}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="overflow-hidden rounded-[32px] border border-[#F4F1EA]/12 bg-[#0C1217] p-4">
            <RoomIllustration />
            <p className="px-4 pb-2 pt-6 text-sm leading-relaxed text-[#8E9A93]">
              Street parking is free after 9:30am, the bike cage holds eighteen, and the 402 stops at
              the door every eleven minutes until half past nine at night.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
