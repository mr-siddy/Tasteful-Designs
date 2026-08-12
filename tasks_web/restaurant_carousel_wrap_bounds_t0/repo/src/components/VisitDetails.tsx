const HOURS = [
  { day: 'Monday', service: 'Closed — the fire rests' },
  { day: 'Tuesday – Thursday', service: 'Dinner 5:30pm – 10:30pm' },
  { day: 'Friday – Saturday', service: 'Dinner 5:30pm – 11:00pm' },
  { day: 'Sunday', service: 'Hearth lunch noon – 3:00pm, dinner 5:30pm – 9:30pm' },
]

const LOGISTICS = [
  {
    title: 'Getting here',
    lines: [
      'Ironside station is a six-minute walk — leave by the Foundry Lane exit and turn left at the brass sign.',
      'The 14 and the 62 both stop at Ironside Market, two blocks north.',
    ],
  },
  {
    title: 'Parking',
    lines: [
      'Free on Foundry Lane after 6pm; the market lot on Callender Street is $4 flat after 5:30pm.',
      'There is a covered rack for eight bikes in the alley behind the kitchen door.',
    ],
  },
  {
    title: 'Access',
    lines: [
      'The dining room and washrooms are step-free from the lane. The Brass Room upstairs is reached by stairs only.',
      'Tell us when you book and we will hold a hearth-adjacent table with room for a chair.',
    ],
  },
]

function NeighbourhoodMap() {
  return (
    <svg
      viewBox="0 0 360 260"
      className="h-full w-full"
      role="img"
      aria-label="Sketch map of Foundry Lane between Callender Street and Ironside Market"
    >
      <rect width="360" height="260" rx="18" fill="#1c1917" />
      <g stroke="#44403c" strokeWidth="14" strokeLinecap="round">
        <path d="M20 92h320M20 188h320M104 20v220M262 20v220" />
      </g>
      <g stroke="#78716c" strokeWidth="2" strokeDasharray="6 8">
        <path d="M20 140h320" />
      </g>
      <rect x="112" y="100" width="60" height="42" rx="6" fill="#292524" stroke="#57534e" />
      <rect x="196" y="100" width="56" height="42" rx="6" fill="#292524" stroke="#57534e" />
      <rect x="112" y="150" width="56" height="30" rx="6" fill="#292524" stroke="#57534e" />
      <circle cx="180" cy="92" r="12" fill="#f59e0b" stroke="#0c0a09" strokeWidth="3" />
      <g fill="#e7e5e4" fontSize="12" fontFamily="ui-sans-serif, system-ui, sans-serif">
        <text x="180" y="72" textAnchor="middle">Ember &amp; Oak</text>
        <text x="62" y="86" textAnchor="middle" fill="#a8a29e">Callender St</text>
        <text x="300" y="86" textAnchor="middle" fill="#a8a29e">Market</text>
        <text x="180" y="212" textAnchor="middle" fill="#a8a29e">Foundry Lane</text>
      </g>
      <g fill="#84cc16">
        <circle cx="286" cy="188" r="6" />
        <text x="286" y="176" textAnchor="middle" fontSize="10" fontFamily="ui-sans-serif, system-ui, sans-serif">
          station
        </text>
      </g>
    </svg>
  )
}

export function VisitDetails() {
  return (
    <section id="visit" className="bg-stone-100 text-stone-900" aria-labelledby="visit-heading">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-orange-700">
              Visit
            </p>
            <h2 id="visit-heading" className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              41 Foundry Lane, Ironside
            </h2>
            <p className="mt-5 leading-relaxed text-stone-600">
              The brass door with no sign, between the print shop and the old scale works. If you
              reach the market you have walked one block too far.
            </p>

            <dl className="mt-10 divide-y divide-stone-200 border-y border-stone-200">
              {HOURS.map((entry) => (
                <div key={entry.day} data-testid="hours-row" className="flex flex-wrap gap-2 py-4">
                  <dt className="w-48 font-semibold text-stone-900">{entry.day}</dt>
                  <dd className="flex-1 text-stone-600">{entry.service}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 space-y-2 text-sm text-stone-600">
              <p>
                Reservations:{' '}
                <a href="tel:+15550172" className="font-semibold text-orange-700 underline">
                  555 0172
                </a>
              </p>
              <p>
                Private rooms:{' '}
                <a href="mailto:rooms@emberandoak.kitchen" className="font-semibold text-orange-700 underline">
                  rooms@emberandoak.kitchen
                </a>
              </p>
            </div>
          </div>

          <div>
            <div className="overflow-hidden rounded-3xl border border-stone-200 bg-white p-4 shadow-lg shadow-stone-300/40">
              <NeighbourhoodMap />
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {LOGISTICS.map((item) => (
                <div key={item.title} data-testid="logistics-card">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-stone-900">
                    {item.title}
                  </h3>
                  {item.lines.map((line) => (
                    <p key={line.slice(0, 20)} className="mt-3 text-sm leading-relaxed text-stone-600">
                      {line}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
