const SPACES = [
  {
    name: 'The Long Room',
    seats: '38 seats',
    price: 'À la carte',
    body: 'The old rope floor, kept as we found it, with the hearth open along the north wall and six stools at the pass for people who booked late. Tables are yours for the evening; nobody is turned.',
  },
  {
    name: 'The Mill Room',
    seats: '12 seats, upstairs',
    price: '£62 a head',
    body: 'One long elm table above the milling room, warm from the flue and quiet enough to hear the granite turning in the morning. Whole-table menu only, and the kitchen comes up between courses.',
  },
  {
    name: 'The Yard',
    seats: '24 seats, May to September',
    price: 'À la carte',
    body: 'A walled brick yard on the canal side with the second bread oven in the corner, strung with the same lanterns as the dining room. Blankets in the basket by the door once it turns.',
  },
]

const INCLUDED = [
  'Your table for the whole evening — one seating, never turned',
  'Bread milled that morning and butter churned on Tuesday',
  'A written card for every allergy told to us at least a day ahead',
  'Still and sparkling water from the filter, at no charge',
  'Step-free entry from Dorwich Street and an accessible WC on the ground floor',
]

export function TheRoom() {
  return (
    <section id="room" data-section="room" className="bg-[#14100D] text-[#FBF6EC]">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#D8A244]">
              The room
            </p>
            <h2 className="mt-4 font-serif text-5xl font-semibold leading-tight tracking-tight">
              A rope factory with a fire where the machines used to be
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#F0E4D2]/75">
              Number 62 made rope for the canal boats until 1961 and then sat empty for
              half a century. We kept the floor, the iron windows and the hoist beam, put a
              hearth against the north wall and a mill in the back room, and left almost
              everything else alone. It seats thirty-eight downstairs, twelve upstairs and
              twenty-four in the yard when the weather allows.
            </p>

            <div className="mt-10 space-y-5">
              {SPACES.map((space) => (
                <article
                  key={space.name}
                  className="rounded-3xl border border-[#F0E4D2]/15 bg-[#2A211B] p-7"
                >
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <h3 className="font-serif text-2xl font-semibold">{space.name}</h3>
                    <span className="text-sm text-[#F0E4D2]/60">{space.seats}</span>
                    <span className="ml-auto text-sm font-semibold text-[#D8A244]">
                      {space.price}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-[#F0E4D2]/75">{space.body}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="lg:sticky lg:top-28">
            <figure className="overflow-hidden rounded-3xl border border-[#F0E4D2]/15 bg-[#2A211B] p-6">
              <svg
                viewBox="0 0 340 300"
                role="img"
                aria-label="Floor plan of the ground floor showing the hearth, the pass, the long room tables and the canal yard"
                className="w-full"
              >
                <rect x="12" y="12" width="316" height="276" rx="14" fill="#14100D" stroke="#6B5140" strokeWidth="2.5" />
                <rect x="28" y="28" width="180" height="34" rx="8" fill="#B7411F" opacity="0.85" />
                <text x="118" y="50" textAnchor="middle" fontSize="13" fill="#FBF6EC" fontFamily="serif">
                  The hearth
                </text>
                <rect x="28" y="72" width="180" height="20" rx="6" fill="#6B5140" />
                <text x="118" y="87" textAnchor="middle" fontSize="11" fill="#FBF6EC">
                  the pass · 6 stools
                </text>
                {[0, 1, 2].map((row) =>
                  [0, 1, 2].map((col) => (
                    <g key={`${row}-${col}`}>
                      <rect
                        x={36 + col * 58}
                        y={116 + row * 52}
                        width="40"
                        height="34"
                        rx="6"
                        fill="#F0E4D2"
                        opacity="0.15"
                        stroke="#D8A244"
                        strokeWidth="1.4"
                      />
                    </g>
                  )),
                )}
                <rect x="228" y="28" width="84" height="120" rx="10" fill="#8F9E6B" opacity="0.25" stroke="#8F9E6B" strokeWidth="1.6" />
                <text x="270" y="92" textAnchor="middle" fontSize="12" fill="#8F9E6B" fontFamily="serif">
                  the yard
                </text>
                <rect x="228" y="162" width="84" height="60" rx="10" fill="#C7B27A" opacity="0.2" stroke="#C7B27A" strokeWidth="1.6" />
                <text x="270" y="196" textAnchor="middle" fontSize="12" fill="#C7B27A" fontFamily="serif">
                  the mill
                </text>
                <rect x="228" y="234" width="84" height="42" rx="10" fill="#F0E4D2" opacity="0.12" stroke="#F0E4D2" strokeWidth="1.2" />
                <text x="270" y="260" textAnchor="middle" fontSize="11" fill="#F0E4D2">
                  stair up
                </text>
                <path d="M40 288 h56" stroke="#D8A244" strokeWidth="5" strokeLinecap="round" />
                <text x="118" y="292" fontSize="11" fill="#D8A244">
                  Dorwich Street entrance
                </text>
              </svg>
              <figcaption className="mt-5 text-center text-xs uppercase tracking-[0.22em] text-[#F0E4D2]/50">
                Ground floor, as built in 2016
              </figcaption>
            </figure>

            <div className="mt-8 rounded-3xl bg-[#2A211B] p-7">
              <h3 className="font-serif text-2xl font-semibold">What every table gets</h3>
              <ul className="mt-5 space-y-3">
                {INCLUDED.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-[#F0E4D2]/75">
                    <svg viewBox="0 0 16 16" className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true">
                      <path
                        d="M2 8.5 6 12.5 14 3.5"
                        fill="none"
                        stroke="#D8A244"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
