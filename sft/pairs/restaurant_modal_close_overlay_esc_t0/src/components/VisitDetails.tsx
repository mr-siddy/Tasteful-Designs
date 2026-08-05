const HOURS = [
  { day: 'Monday & Tuesday', hours: 'Closed — the kitchen rests, the lot is empty' },
  { day: 'Wednesday', hours: '4:30pm – 9:00pm · all-you-can-eat cod' },
  { day: 'Thursday', hours: '4:30pm – 9:00pm' },
  { day: 'Friday', hours: '4:00pm – 10:00pm · perch fry' },
  { day: 'Saturday', hours: '4:00pm – 10:00pm · prime rib until it is gone' },
  { day: 'Sunday', hours: '3:00pm – 8:00pm · Chicken Ostrowski' },
]

const NOTES = [
  {
    title: 'Driving out',
    body: 'Twelve minutes north of Harlow Bend on County Road W, then right at the second Cedar Bluff sign — the first one points at the campground. Gravel lot for sixty cars, plus overflow in the church lot across the road on Fridays.',
  },
  {
    title: 'Coming by water',
    body: 'Four slips on the north side of the dock, no charge, lit channel markers through the end of October. Tie up, walk the boardwalk past the ice house, and come in the lake door.',
  },
  {
    title: 'Getting in and around',
    body: 'Ramp to the lake door, step-free through the bar and the whole main dining room, and a wide accessible restroom off the coat hall. The Lantern Room is up fourteen stairs with a handrail on both sides; if that will not work we will set your party downstairs by the window instead.',
  },
]

export function VisitDetails() {
  return (
    <section id="visit" className="bg-[#EFE7D5]">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-[11px] uppercase tracking-[0.32em] text-[#7C2D2D]">Visit</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#17130F]">
              4118 Cedar Bluff Road
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[#5C5445]">
              East shore of Lake Wanetka, past the old ice house, where the road stops pretending it
              is paved. The sign is neon and blue and you will see it from the water before you see
              it from the car.
            </p>

            <dl className="mt-10 space-y-3">
              {HOURS.map((row) => (
                <div
                  key={row.day}
                  data-testid="hours-row"
                  className="flex flex-wrap justify-between gap-3 border-b border-[#17130F]/10 pb-3"
                >
                  <dt className="text-sm font-semibold text-[#17130F]">{row.day}</dt>
                  <dd className="text-sm text-[#5C5445]">{row.hours}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="tel:5550179"
                className="rounded-full bg-[#1C4535] px-6 py-3 text-sm font-semibold text-[#F6F1E4] transition-colors hover:bg-[#123024]"
              >
                Call (555) 0179
              </a>
              <a
                href="#reserve"
                className="rounded-full border border-[#17130F]/25 px-6 py-3 text-sm font-semibold text-[#17130F] transition-colors hover:bg-[#17130F]/5"
              >
                Reserve instead
              </a>
            </div>
          </div>

          <div>
            <div className="overflow-hidden rounded-3xl border border-[#17130F]/10">
              <svg
                viewBox="0 0 460 260"
                role="img"
                aria-label="Simplified map of Lake Wanetka showing County Road W, the ice house and the Blue Iris Supper Club on the east shore"
                className="h-auto w-full"
              >
                <rect x="0" y="0" width="460" height="260" fill="#DCE4D6" />
                <path
                  d="M40 120c30-56 96-74 150-52 44 18 52 60 96 66 40 6 78-16 124 6v120H40Z"
                  fill="#9DB9C9"
                />
                <path
                  d="M40 120c30-56 96-74 150-52 44 18 52 60 96 66 40 6 78-16 124 6"
                  fill="none"
                  stroke="#6E8FA3"
                  strokeWidth="3"
                />
                <g stroke="#C9BFA3" strokeWidth="8" strokeLinecap="round" fill="none">
                  <path d="M0 62h132c26 0 34 28 62 30s58-8 84 2 34 40 62 40h120" />
                </g>
                <g stroke="#F6F1E4" strokeWidth="2" strokeDasharray="8 8" fill="none">
                  <path d="M0 62h132c26 0 34 28 62 30s58-8 84 2 34 40 62 40h120" />
                </g>
                <g fill="#7C6B4B">
                  <rect x="86" y="150" width="34" height="26" rx="3" />
                  <path d="M86 150l17-14 17 14Z" />
                </g>
                <text x="103" y="192" textAnchor="middle" fontSize="11" fill="#4A4335">
                  Ice house
                </text>
                <g transform="translate(300 118)">
                  <circle cx="0" cy="0" r="16" fill="#7C2D2D" />
                  <circle cx="0" cy="0" r="6" fill="#F6F1E4" />
                  <text x="0" y="38" textAnchor="middle" fontSize="12" fill="#2E2A22" fontWeight="bold">
                    The Blue Iris
                  </text>
                </g>
                <text x="392" y="52" textAnchor="middle" fontSize="11" fill="#4A4335">
                  County Rd W
                </text>
                <text x="150" y="226" textAnchor="middle" fontSize="13" fill="#33505F">
                  Lake Wanetka
                </text>
                <g stroke="#F6F1E4" strokeWidth="3" strokeLinecap="round">
                  <path d="M318 132h34M330 138h22" />
                </g>
              </svg>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {NOTES.map((note) => (
                <div key={note.title} data-testid="visit-note">
                  <h3 className="text-base font-semibold text-[#17130F]">{note.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#5C5445]">{note.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
