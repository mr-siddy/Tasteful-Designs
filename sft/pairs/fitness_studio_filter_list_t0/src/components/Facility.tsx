const EQUIPMENT = [
  '14 lifting platforms with calibrated bars',
  '40-metre turf lane for sleds and carries',
  '6 Concept2 rowers and 4 air bikes',
  'Dumbbells to 50kg, kettlebells to 48kg',
  'Two competition benches and a monolift',
  'Mezzanine floor for mobility and warm-ups',
]

const AMENITIES = [
  'Four private changing rooms with doors, not curtains',
  'Towels, soap and a hairdryer that actually works',
  'Secure lockers, no coin needed',
  'Free street parking after 6pm on Ropewalk Street',
  'Water station and a coffee pot that is always on',
  'Pram parking inside the door by the desk',
]

const HOURS = [
  { day: 'Monday to Thursday', open: '5:30am – 8:30pm' },
  { day: 'Friday', open: '5:30am – 7:00pm' },
  { day: 'Saturday', open: '7:00am – 1:00pm' },
  { day: 'Sunday', open: '8:00am – 12:00pm' },
]

function FloorPlan() {
  return (
    <svg
      viewBox="0 0 420 260"
      className="h-auto w-full"
      role="img"
      aria-label="Floor plan of the Tidewater room"
      focusable="false"
    >
      <rect width="420" height="260" rx="18" fill="#FFFFFF" stroke="#0B2A33" strokeOpacity="0.15" />
      <rect x="24" y="24" width="180" height="130" rx="10" fill="#E4682A" fillOpacity="0.12" />
      <text x="38" y="48" fontSize="13" fontWeight="800" fill="#0B2A33" fillOpacity="0.7">
        Platform room
      </text>
      <g fill="#0B2A33" fillOpacity="0.25">
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <rect key={i} x={38 + (i % 4) * 40} y={62 + Math.floor(i / 4) * 42} width="30" height="30" rx="5" />
        ))}
      </g>

      <rect x="216" y="24" width="180" height="76" rx="10" fill="#1D7A6B" fillOpacity="0.14" />
      <text x="230" y="48" fontSize="13" fontWeight="800" fill="#0B2A33" fillOpacity="0.7">
        Erg bay
      </text>
      <g fill="#1D7A6B" fillOpacity="0.4">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <rect key={i} x={230 + i * 26} y="62" width="16" height="26" rx="4" />
        ))}
      </g>

      <rect x="216" y="112" width="180" height="42" rx="10" fill="#0B2A33" fillOpacity="0.08" />
      <text x="230" y="139" fontSize="13" fontWeight="800" fill="#0B2A33" fillOpacity="0.7">
        Mezzanine stair
      </text>

      <rect x="24" y="166" width="372" height="70" rx="10" fill="#E4682A" fillOpacity="0.08" />
      <text x="38" y="190" fontSize="13" fontWeight="800" fill="#0B2A33" fillOpacity="0.7">
        Turf lane · 40m
      </text>
      <path
        d="M40 212h340"
        stroke="#E4682A"
        strokeOpacity="0.6"
        strokeWidth="4"
        strokeDasharray="12 10"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function Facility() {
  return (
    <section id="the-room" className="border-b border-[#0B2A33]/10 bg-[#EFE6D8]">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1D7A6B]">
            92 Ropewalk Street
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
            A 5,400 square foot room with the doors open onto the water
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#3C4E54]">
            The building was a rope works until 1979 and a furniture warehouse after that. It has
            brick, a very high ceiling, and enough natural light that the 6am class does not feel
            like a punishment in February.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <figure className="rounded-3xl border border-[#0B2A33]/10 bg-white p-6 shadow-sm">
            <FloorPlan />
            <figcaption className="mt-4 text-sm text-[#5B6B70]">
              Ground floor, looking in from the Ropewalk Street entrance.
            </figcaption>
          </figure>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-1">
            <div>
              <h3 className="text-lg font-black tracking-tight">What is on the floor</h3>
              <ul className="mt-4 space-y-2.5">
                {EQUIPMENT.map((line) => (
                  <li key={line} className="flex gap-3 text-sm text-[#3C4E54]">
                    <svg
                      viewBox="0 0 20 20"
                      className="mt-0.5 h-4 w-4 shrink-0"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path
                        d="M4 10.5l4 4 8-9"
                        fill="none"
                        stroke="#1D7A6B"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {line}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-black tracking-tight">The unglamorous things that matter</h3>
              <ul className="mt-4 space-y-2.5">
                {AMENITIES.map((line) => (
                  <li key={line} className="flex gap-3 text-sm text-[#3C4E54]">
                    <svg
                      viewBox="0 0 20 20"
                      className="mt-0.5 h-4 w-4 shrink-0"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <circle cx="10" cy="10" r="7" fill="none" stroke="#E4682A" strokeWidth="2.2" />
                      <path d="M10 6.5v4.5l3 2" fill="none" stroke="#E4682A" strokeWidth="2.2" strokeLinecap="round" />
                    </svg>
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl border border-[#0B2A33]/10 bg-white">
          <h3 className="border-b border-[#0B2A33]/10 px-8 py-5 text-lg font-black tracking-tight">
            Opening hours
          </h3>
          <table className="w-full text-left text-sm">
            <caption className="sr-only">Opening hours at 92 Ropewalk Street</caption>
            <thead>
              <tr className="text-xs font-bold uppercase tracking-wider text-[#5B6B70]">
                <th scope="col" className="px-8 py-3">
                  Day
                </th>
                <th scope="col" className="px-8 py-3">
                  Doors open
                </th>
              </tr>
            </thead>
            <tbody>
              {HOURS.map((row) => (
                <tr key={row.day} className="border-t border-[#0B2A33]/10">
                  <th scope="row" className="px-8 py-4 font-bold">
                    {row.day}
                  </th>
                  <td className="px-8 py-4 text-[#3C4E54]">{row.open}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="border-t border-[#0B2A33]/10 px-8 py-5 text-sm text-[#5B6B70]">
            The desk is staffed for the first and last ninety minutes of every day. Outside those
            hours, members let themselves in with a fob.
          </p>
        </div>
      </div>
    </section>
  )
}
