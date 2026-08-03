const HOURS = [
  { day: 'Monday', open: '7:00am – 8:00pm', note: 'Dr. Nandakumar on the early list' },
  { day: 'Tuesday', open: '7:00am – 8:00pm', note: 'Children’s floor open until 6:00pm' },
  { day: 'Wednesday', open: '7:00am – 8:00pm', note: 'Aligner reviews from 7:30am' },
  { day: 'Thursday', open: '7:00am – 8:00pm', note: 'Sedation appointments only after 5:00pm' },
  { day: 'Friday', open: '7:00am – 5:00pm', note: 'Emergency slots held until 3:00pm' },
  { day: 'Saturday', open: '8:00am – 4:00pm', note: 'Hygiene with Renée, plus one dentist on site' },
  { day: 'Sunday', open: 'Closed', note: 'On-call dentist reachable until 6:00pm' },
]

const ACCESS = [
  {
    title: 'Parking',
    copy: 'Eleven free patient spaces in the yard behind the building, entered from Kell Lane. Two are wide bays beside the ramp.',
  },
  {
    title: 'Tram and bus',
    copy: 'Two minutes from the Sorrel Street stop on the 4 and the 17. The 62 bus stops outside the bakery on the corner.',
  },
  {
    title: 'Step-free access',
    copy: 'The north entrance is level, both ground-floor rooms take a wheelchair, and there is a platform lift to the children’s floor.',
  },
  {
    title: 'What to bring',
    copy: 'Your insurance card, a list of any medication you take, and the name of your last practice if you can remember it.',
  },
]

export function HoursAndAccess() {
  return (
    <section id="hours" data-testid="hours" className="bg-[#f6fafb]">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#2fb99b]">
              Hours
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">
              Six days a week, starting before most people start work
            </h2>
            <p className="mt-4 leading-relaxed text-[#0b2d45]/75">
              The first appointment of the day is 7:00am and the last one starts at 7:15pm. Roughly
              four in ten of our appointments now sit outside nine to five, which is exactly why we
              added them.
            </p>

            <table className="mt-8 w-full border-separate border-spacing-0 overflow-hidden rounded-2xl border border-[#0b2d45]/10 bg-white text-left text-sm">
              <thead>
                <tr className="bg-[#0b2d45] text-white">
                  <th scope="col" className="px-5 py-3 font-semibold">
                    Day
                  </th>
                  <th scope="col" className="px-5 py-3 font-semibold">
                    Chairs open
                  </th>
                  <th scope="col" className="hidden px-5 py-3 font-semibold sm:table-cell">
                    Worth knowing
                  </th>
                </tr>
              </thead>
              <tbody>
                {HOURS.map((row) => (
                  <tr key={row.day} data-testid="hours-row" className="even:bg-[#eaf4f5]/60">
                    <th
                      scope="row"
                      className="border-t border-[#0b2d45]/10 px-5 py-3 font-semibold text-[#0b2d45]"
                    >
                      {row.day}
                    </th>
                    <td className="border-t border-[#0b2d45]/10 px-5 py-3 text-[#0b2d45]/80">
                      {row.open}
                    </td>
                    <td className="hidden border-t border-[#0b2d45]/10 px-5 py-3 text-[#0b2d45]/60 sm:table-cell">
                      {row.note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#2fb99b]">
              Getting here
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">
              14 Sorrel Street, Ashbourne Green
            </h2>

            <div className="mt-6 overflow-hidden rounded-3xl border border-[#0b2d45]/10 bg-white shadow-sm">
              <svg viewBox="0 0 520 260" className="w-full" aria-hidden="true" focusable="false">
                <rect width="520" height="260" fill="#eaf4f5" />
                <g stroke="#ffffff" strokeWidth="14">
                  <path d="M0 150h520" />
                  <path d="M180 0v260" />
                  <path d="M380 0v260" />
                </g>
                <g stroke="#cfe0e3" strokeWidth="4">
                  <path d="M0 66h520" />
                  <path d="M0 214h520" />
                  <path d="M84 0v260" />
                </g>
                <g fill="#d7e6e9">
                  <rect x="200" y="76" width="60" height="52" rx="6" />
                  <rect x="280" y="76" width="80" height="52" rx="6" />
                  <rect x="200" y="172" width="150" height="60" rx="6" />
                  <rect x="410" y="76" width="80" height="52" rx="6" />
                </g>
                <rect x="238" y="106" width="86" height="56" rx="8" fill="#0b2d45" />
                <circle cx="281" cy="98" r="17" fill="#2fb99b" />
                <path d="M281 82v-16" stroke="#0b2d45" strokeWidth="5" strokeLinecap="round" />
                <text x="281" y="182" textAnchor="middle" fontSize="15" fill="#0b2d45">
                  Cedar &amp; Vale
                </text>
                <text x="60" y="142" fontSize="13" fill="#0b2d45" opacity="0.6">
                  Kell Lane
                </text>
                <text x="392" y="142" fontSize="13" fill="#0b2d45" opacity="0.6">
                  Sorrel St
                </text>
                <g fill="#ff9c7a">
                  <rect x="392" y="156" width="26" height="14" rx="4" />
                  <rect x="430" y="156" width="26" height="14" rx="4" />
                </g>
              </svg>
            </div>

            <dl className="mt-6 grid gap-5 sm:grid-cols-2">
              {ACCESS.map((item) => (
                <div
                  key={item.title}
                  data-testid="access-note"
                  className="rounded-2xl border border-[#0b2d45]/10 bg-white p-5"
                >
                  <dt className="font-serif text-lg font-semibold">{item.title}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-[#0b2d45]/70">{item.copy}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
