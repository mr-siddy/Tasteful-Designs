const LAYOUTS = [
  {
    name: 'One long table',
    seats: '22 seats',
    detail: 'The way Vera set it for anniversaries: a single run of tables down the middle, service from both sides, one conversation.',
  },
  {
    name: 'Two rounds',
    seats: '16 seats',
    detail: 'Better for a rehearsal dinner where people should be able to get up and move. Leaves room for a small bar by the stairs.',
  },
  {
    name: 'Standing, with the bar open',
    seats: '35 guests',
    detail: 'Relish trays on the sideboard, passed perch and meatballs, and Junior on a portable bar. Two hours, then we set it for supper.',
  },
]

export function LanternRoom() {
  return (
    <section id="lantern-room" className="bg-[#1C4535]">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 py-24 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div>
          <p className="text-[11px] uppercase tracking-[0.32em] text-[#E8C87E]">Upstairs</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#F6F1E4]">
            The Lantern Room
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#D9D2C0]">
            Up the back stairs, under the eight original 1946 fixtures that gave the room its name.
            It has its own server, its own coffee, and a window that looks straight down the lake to
            the narrows. Delia sets the menu with you two weeks out — usually prime rib and walleye
            with one vegetarian plate, because that is what actually gets eaten.
          </p>

          <div className="mt-10 space-y-5">
            {LAYOUTS.map((layout) => (
              <div
                key={layout.name}
                data-testid="room-layout"
                className="rounded-2xl border border-[#F6F1E4]/15 bg-[#123024] p-5"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-lg font-semibold text-[#F6F1E4]">{layout.name}</h3>
                  <span className="text-xs uppercase tracking-[0.18em] text-[#E8C87E]">
                    {layout.seats}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-[#A9B49F]">{layout.detail}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm leading-relaxed text-[#A9B49F]">
            No room fee, no minimum on a Wednesday or Thursday. Friday and Saturday carry a food
            minimum of $900, which most parties of sixteen clear without trying.
          </p>
        </div>

        <div>
          <svg
            viewBox="0 0 400 340"
            role="img"
            aria-label="Illustration of the Lantern Room: one long table under eight hanging brass lanterns with a window onto the lake"
            className="h-auto w-full"
          >
            <defs>
              <linearGradient id="lantern-wall" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#123024" />
                <stop offset="100%" stopColor="#0C1F17" />
              </linearGradient>
              <radialGradient id="lantern-glow" cx="0.5" cy="0.5" r="0.5">
                <stop offset="0%" stopColor="#E8C87E" stopOpacity="0.75" />
                <stop offset="100%" stopColor="#E8C87E" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect x="0" y="0" width="400" height="340" rx="24" fill="url(#lantern-wall)" />
            <rect x="238" y="52" width="126" height="132" rx="8" fill="#20415A" />
            <rect x="238" y="52" width="126" height="132" rx="8" fill="none" stroke="#D2A24C" strokeWidth="3" />
            <path d="M238 148c22-10 34 6 54 2s28-16 48-12 22 12 24 12v34H238Z" fill="#0E2431" />
            <circle cx="330" cy="86" r="14" fill="#E8C87E" opacity="0.7" />
            <g>
              {[70, 118, 166, 214].map((x) => (
                <g key={x}>
                  <path d={`M${x} 40v34`} stroke="#8A6B32" strokeWidth="3" />
                  <ellipse cx={x} cy="104" rx="34" ry="34" fill="url(#lantern-glow)" />
                  <path
                    d={`M${x - 15} 74h30l6 26h-42Z`}
                    fill="#D2A24C"
                    stroke="#8A6B32"
                    strokeWidth="2"
                  />
                  <rect x={x - 4} y="100" width="8" height="8" rx="2" fill="#E8C87E" />
                </g>
              ))}
            </g>
            <rect x="40" y="212" width="320" height="18" rx="6" fill="#F6F1E4" />
            <rect x="40" y="230" width="320" height="10" rx="4" fill="#C9BFA3" />
            <g fill="#7C2D2D">
              {[68, 122, 176, 230, 284, 330].map((x) => (
                <rect key={x} x={x} y="248" width="30" height="42" rx="6" />
              ))}
            </g>
            <g fill="#7C2D2D" opacity="0.8">
              {[68, 122, 176, 230, 284, 330].map((x) => (
                <rect key={`b-${x}`} x={x} y="168" width="30" height="42" rx="6" />
              ))}
            </g>
            <g fill="#EFE7D5">
              {[76, 130, 184, 238, 292].map((x) => (
                <circle key={`p-${x}`} cx={x + 12} cy="220" r="9" />
              ))}
            </g>
            <rect x="0" y="300" width="400" height="40" fill="#0A1A13" />
            <text x="200" y="325" textAnchor="middle" fontSize="12" fill="#E8C87E" letterSpacing="4">
              ONE TABLE · TWENTY-TWO CHAIRS
            </text>
          </svg>
        </div>
      </div>
    </section>
  )
}
