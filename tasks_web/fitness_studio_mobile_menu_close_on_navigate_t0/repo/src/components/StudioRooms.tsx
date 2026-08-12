const AMENITIES = [
  'Two changing rooms with doors that lock and towels that are actually warm',
  'Grip socks at the desk for $14, or bring your own — we do not care which',
  'Street parking on Almond Court is free after 9:30am and all day Sunday',
  'A ramp at the Almond Court door and a step-free route to the front room',
  'The loft stair is the only stair; ask us and we will move your class downstairs',
  'Filtered water, decent coffee, and a bench for the people waiting to be picked up',
]

function Floorplan() {
  return (
    <svg
      viewBox="0 0 400 280"
      className="h-full w-full"
      role="img"
      aria-label="Floorplan of the studio: ten reformers in the front room, two towers at the wall, and the mobility loft above"
    >
      <rect width="400" height="280" rx="20" fill="#FFFCF5" stroke="#E3D6BE" />
      <rect x="24" y="28" width="220" height="224" rx="12" fill="#F1E7D2" stroke="#24493B" strokeWidth="2" />
      <text x="34" y="50" fontSize="11" fill="#7A7263" fontFamily="ui-sans-serif, system-ui">
        FRONT ROOM
      </text>
      {[0, 1, 2, 3, 4].map((row) => (
        <g key={row}>
          <rect x="40" y={64 + row * 36} width="86" height="22" rx="6" fill="#24493B" opacity="0.85" />
          <rect x="142" y={64 + row * 36} width="86" height="22" rx="6" fill="#24493B" opacity="0.85" />
        </g>
      ))}
      <rect x="256" y="28" width="120" height="120" rx="12" fill="#DCEAF0" stroke="#8FB8C9" strokeWidth="2" />
      <text x="266" y="50" fontSize="11" fill="#4A4436" fontFamily="ui-sans-serif, system-ui">
        MOBILITY LOFT
      </text>
      <g stroke="#8FB8C9" strokeWidth="2">
        <path d="M266 66 L366 66" />
        <path d="M266 86 L366 86" />
        <path d="M266 106 L366 106" />
        <path d="M266 126 L366 126" />
      </g>
      <rect x="256" y="164" width="120" height="88" rx="12" fill="#F1E7D2" stroke="#C2571F" strokeWidth="2" />
      <text x="266" y="186" fontSize="11" fill="#7A7263" fontFamily="ui-sans-serif, system-ui">
        TOWER WALL
      </text>
      <g stroke="#C2571F" strokeWidth="3" strokeLinecap="round">
        <path d="M280 200 L280 238" />
        <path d="M320 200 L320 238" />
        <path d="M352 200 L352 238" />
      </g>
    </svg>
  )
}

export function StudioRooms() {
  return (
    <section id="studio" className="border-y border-[#E3D6BE] bg-[#FFFCF5]">
      <div className="mx-auto grid max-w-6xl items-start gap-12 px-5 py-20 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-3xl border border-[#E3D6BE] bg-[#F7F1E6] p-5">
          <Floorplan />
        </div>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#C2571F]">
            17 Almond Court
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Two rooms, one flight of stairs, no mirrors
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#4A4436]">
            The building was a shoe factory and then, for thirty years, a printer&apos;s. The front
            room kept the tall north windows and the maple floor, and it holds ten reformers with
            enough space between them that an instructor can walk a full circuit without asking
            anyone to move. The tower wall runs along the back. Upstairs, the old drying loft is now
            nine hundred square feet of mat, mobility equipment and a very good radiator.
          </p>
          <p className="mt-4 text-base leading-relaxed text-[#4A4436]">
            We took the mirrors out in 2019 and never put them back. People move differently when
            they are watching themselves, and the whole method depends on you feeling where you are
            rather than checking.
          </p>
          <ul className="mt-8 space-y-3">
            {AMENITIES.map((amenity) => (
              <li key={amenity} className="flex gap-3 text-sm leading-relaxed text-[#4A4436]">
                <svg viewBox="0 0 20 20" className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true">
                  <path d="M4 11 L8 15 L16 5" fill="none" stroke="#24493B" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
                <span>{amenity}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
